import React from 'react';

const NavbarAuthComponent = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand" href="/">
            <img srcSet={"https://w7.pngwing.com/pngs/87/586/png-transparent-next-js-hd-logo.png"} alt="" width="50" height="50" />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/" style={{ fontSize: '18px' }}>Home</a>
              </li> 
              <li className="nav-item">
                <a className="nav-link" href="/" style={{ fontSize: '18px' }}>Game List</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavbarAuthComponent;
