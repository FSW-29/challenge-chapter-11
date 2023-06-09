import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loadingLogin, loadingRegister } from "../redux/actions/auth.action";

const NavbarMainComponent = () => {
  const [login, setLogin] = useState('');

  const dispatch = useDispatch();

  const navigate = useNavigate();

  useEffect(() => {
    setLogin(JSON.parse(localStorage.getItem("dataUser")));
  }, []);

  const handleLogout = () => {
    console.info("panggilah");
    localStorage.removeItem("token");
    localStorage.removeItem("dataUser");
    dispatch(loadingLogin(false));
    dispatch(loadingRegister(false));
    navigate('/login');
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand" href={"/"}>
            <img
              srcSet={
                "https://w7.pngwing.com/pngs/87/586/png-transparent-next-js-hd-logo.png"
              }
              alt=""
              width="50"
              height="50"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link"
                  aria-current="page"
                  href={"/home"}
                  style={{ fontSize: "18px" }}
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href={"/GameList"}
                  style={{ fontSize: "18px" }}
                >
                  Game List
                </a>
              </li>
            </ul>
            <ul className="navbar-nav navbar-auth">
              {
                login ? (
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ fontSize: '18px' }}>
                      { login.usernameLogin }
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                      <li><a className="nav-link" href={'/profile'} style={{fontSize: '18px'}}>Profile</a></li>
                      <li><hr className="dropdown-divider" /></li>
                      {/* Minta tolong rapikan logout nya */}
                      {/* hapus 3 localstorage ini */}
                      <li>
                        <a 
                          className="nav-link"
                          style={{fontSize: '18px'}}
                          onClick={handleLogout}
                        >
                          Logout
                        </a>
                    </li>
                    </ul>
                  </li>
                ) : (
                  <a href={"/register"} className="btn btn-md mx-2 my-3 btn-outline-primary">
                    <b className="px-2 py-4">Register Account</b>
                  </a>
                )
              }
              {/* <Link href={"/register"} className="btn btn-md mx-2 my-3 btn-outline-primary">
                <b className="px-2 py-4">Register Account</b>
              </Link> */}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavbarMainComponent;
