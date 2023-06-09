import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { successLogin, failedLogin, loadingLogin  } from '../redux/actions/auth.action';
import axios from 'axios';
import NavbarAuthComponent from '../components/NavbarAuth.component';
import dotenv from 'dotenv';
dotenv.config();

const base_url = "http://localhost:8000/" || process.env.REACT_BASE_URL;

const LoginPage = (props) => {
  /* eslint-disable react/prop-types */
  const { dataLogin } = props;
  // > Nama title

  document.title = dataLogin;


  // > State
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // > Navigate (untuk arahkan user kehalaman tertentu)
  const navigate = useNavigate();

  let i = 0;
  useEffect(() => {
    if (i === 0) {
      const checkAccessToken = () => {
        if (localStorage.getItem('token')) {
          navigate('/');
        }
      };
      checkAccessToken();
      i++;
    }
  }, [i]);

  // > dispatch
  const dispatch = useDispatch();

  // > selector reducer
  const {
    loginUserRejected,
    loginUserLoading
  } = useSelector((state) =>  state.authReducer);

  const handleLoginForm = async (event) => {
    event.preventDefault();

    // > Data dari state disimpan didalam dataLogin
    const dataLogin = {
      email, password
    }

    // Jika inputan kosong
    if (!email || !password) {
      return alert("Email and password cannot be empty!");
    }

    try {
      const response = await axios.post(`${base_url}api/v1/login`, dataLogin);
      const responseLogin = response.data;

      console.info(responseLogin, 'hasil response login');

      const tokenUser = responseLogin.profile.id;
      const usernameLogin = responseLogin.profile.username;
      const userTotalScoreLogin = responseLogin.profile.total_score;

      const jsonUserData = {
        usernameLogin,
        userTotalScoreLogin
      }
      localStorage.setItem("token", tokenUser);
      localStorage.setItem("dataUser", JSON.stringify(jsonUserData));
      
      dispatch(successLogin(dataLogin));
      dispatch(failedLogin(false));
      dispatch(loadingLogin(false));

      setEmail('');
      setPassword('');

      navigate('/');
    } catch (error) {
      dispatch(failedLogin(error));
      dispatch(loadingLogin(false));
    } finally {
      dispatch(loadingLogin(true));
    }
  }

  return (
    <>
      <NavbarAuthComponent />
      <section className="h-100 bg-dark">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col">
              <div className="card card-registration my-4">
                <div className="row g-0">
                  <div className="col-xl-6 d-none d-xl-block">
                    <img
                      src="https://images.unsplash.com/photo-1542549237432-a176cb9d5e5e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=814&q=80"
                      alt="Sample photo"
                      className="img-fluid"
                      style={{
                        borderTopLeftRadius: ".25rem",
                        borderBottomLeftRadius: ".25rem"
                      }}
                    />
                  </div>
                  <div className="col-xl-6 justify-content-center align-items-center">
                    <div className="card-body p-md-5 text-black">
                      <h3 className="mb-5 text-uppercase text-center">
                        {
                          document.title === "Login Page" ? (
                              "Login Page"
                          ) : (
                              "Sign In"
                          )
                        }
                      </h3>
                      {
                        loginUserRejected  ? (
                          <div className="alert alert-danger" role="alert">
                            <p>Check Again Email or Password</p>
                          </div>
                        ) : ""
                      }
                      <form onSubmit={ handleLoginForm }> 
                        <div className="mb-3">
                          <label htmlFor="email" className="form-label">
                            Email Address
                          </label>
                          <input
                            name="email"
                            type="email"
                            className="form-control"
                            id="email"
                            placeholder="Your Email Address"
                            onChange={ (e) => setEmail(e.target.value) }
                          />
                        </div>
                        <div className="mb-3">
                          <label htmlFor="password" className="form-label">
                            Password
                          </label>
                          <input
                            name="password"
                            type="password"
                            className="form-control"
                            id="password"
                            placeholder="Your Password"
                            onChange={ (e) => setPassword(e.target.value) }
                          />
                        </div>
                        <div className="d-grid gap-2 mt-2">
                          <button type="submit" className="btn btn-primary">
                            {
                              loginUserLoading ? 'Login on Process....' : 'Login Now'
                            }
                          </button>
                          <Link
                            to="/register"
                            className="btn btn-success"
                            target="__blank"
                          >
                            Dont Have Account? Signup Here
                          </Link>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default LoginPage;
