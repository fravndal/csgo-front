import React from "react";
import logo from "../img/csgo-logo-white.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <React.Fragment>
      <div className="header-frame container-fluid text-white-50">
        <div className="container">
          <nav className="navbar navbar-expand-sm">
            <div className="row">
              <div className="span-2">
                <Link to="/">
                  <img src={logo} alt="logo" className="logo" />
                </Link>
              </div>
              <div className="span-8">
                <ul className="header-ul">
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/weapons">Weapons</Link>
                  </li>
                  <li>
                    <Link to="/about">About</Link>
                  </li>
                </ul>
              </div>
              <div className="dark-theme-button-frame span-2">
                {/* <button
                  className="dark-theme-button"
                  onChange={() => !setTheme}
                >
                  dark
                </button> */}
              </div>
            </div>
          </nav>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Header;
