import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { successRegister, failedRegister, loadingRegister  } from '../redux/actions/auth.action';
import axios from 'axios';
import NavbarAuthComponent from '../components/NavbarAuth.component';

const RegisterPage = () => {
  // > Nama title
  document.title = "Register";

  // > State
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [biodata, setBiodata] = useState('');
  const [city, setCity] = useState('');
  const [socialMedia, setSocialMedia] = useState('');

  // > Navigate (untuk arahkan user kehalaman tertentu)
  const navigate = useNavigate();

  // > Cek token user
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
    registerUserRejected,
    registerUserLoading
  } = useSelector((state) =>  state.authReducer);

  const handleRegister = async (event) => {
    event.preventDefault();

    // > Data dari state disimpan didalam dataRegister
    const dataRegister = {
      email, username, password,
      biodata, city, socialMedia
    }

    // Jika inputan kosong
    if (!email || !username || !password || !biodata || !city || !socialMedia) {
      return alert("Email, Username, Password, Biodata, City, and Social Media Cannot be Empty!");
    }

    try {
      const response = await axios.post('http://localhost:8000/api/v1/register', dataRegister);
      const responseRegister = response.data;

      console.info(responseRegister, 'hasil response register');
      
      dispatch(successRegister(dataRegister));
      dispatch(failedRegister(false));
      dispatch(loadingRegister(false));

      setEmail('');
      setUsername('');
      setPassword('');
      setBiodata('');
      setCity('');
      setSocialMedia('');

      alert("Register Success!");

      navigate('/login');
    } catch (error) {
      dispatch(failedRegister(error));
      dispatch(loadingRegister(false));
    } finally {
      dispatch(loadingRegister(true));
    }
  }

  return (
    <>
      <NavbarAuthComponent />
      <section className="h-100 bg-dark mt-3">
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
                        Register New User
                      </h3>
                      {
                        registerUserRejected  ? (
                          <div className="alert alert-danger" role="alert">
                            <p>Check Again Your Register Form</p>
                          </div>
                        ) : ""
                      }
                      <form onSubmit={ handleRegister }>
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
                            value={ email }
                            onChange={(e) => setEmail(e.target.value)}
                            required
                          />
                        </div>
                        <div className="mb-3">
                          <label htmlFor="username" className="form-label">
                            Username
                          </label>
                          <input
                            name="username"
                            type="username"
                            className="form-control"
                            id="username"
                            placeholder="Your Username"
                            value={ username }
                            onChange={(e) => setUsername(e.target.value)}
                            required
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
                            onChange={(e) => setPassword(e.target.value)}
                            required
                          />
                        </div>
                        <div className="mb-3">
                          <label htmlFor="biodata" className="form-label">
                            Biodata
                          </label>
                          <textarea
                            name="biodata"
                            className="form-control"
                            id="biodata"
                            rows="3"
                            placeholder="Your Biodata"
                            required
                            value={ biodata }
                            onChange={(e) => setBiodata(e.target.value)}
                          ></textarea>
                        </div>
                        <div className="mb-3">
                          <label htmlFor="city" className="form-label">
                            City
                          </label>
                          <input
                            name="city"
                            type="city"
                            className="form-control"
                            id="city"
                            placeholder="Your Hometown"
                            value={ city }
                            onChange={(e) => setCity(e.target.value)}
                            required
                          />
                        </div>
                        <div className="mb-3">
                          <label htmlFor="social_media" className="form-label">
                            Instagram URL
                          </label>
                          <input
                            name="social_media"
                            type="social_media"
                            className="form-control"
                            id="social_media"
                            placeholder="Your Instagram URL"
                            value={ socialMedia }
                            onChange={(e) => setSocialMedia(e.target.value)}
                            required
                          />
                        </div>
                        <div className="d-grid gap-2 mt-2">
                          <button type="submit" className="btn btn-primary">
                            {
                              registerUserLoading ? 'Register on Process...' : 'Register Now'
                            }
                          </button>
                          <Link
                            to="/login"
                            className="btn btn-success"
                            target="__blank"
                          >
                            Go to Login Page
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

export default RegisterPage;
