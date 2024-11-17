import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import { DarkModeContext } from "./context/DarkModeProvider";

const Header = () => {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

  const handleOnClick = () => {
    toggleDarkMode();
    console.log(`darkMode: ${darkMode}`);
  };

  return (
    <header className="primary-heading padding-block-300 bg-neutral-100">
      <div className="container">
        <nav className="primary-navigation">
          <div className="flex-row-center">
            <div className="flex-row-center">
              <Link to="/">
                <img src="/assets/images/Group 2.svg" className="logo" />
              </Link>
              <Link to="/">
                <img
                  src="/assets/images/Silicon.svg"
                  alt="Silicon"
                  className="only-shown-light-theme"
                />
              </Link>
              <Link to="/">
                <img
                  src="/assets/images/silicon-dark.svg"
                  alt="Silicon"
                  className="only-shown-dark-theme"
                />
              </Link>
              <NavLink to="/" className="desktop text-primary-700 fw-bold">
                Features
              </NavLink>
              <NavLink
                to="contact"
                className="desktop text-primary-700 fw-bold"
              >
                Contact
              </NavLink>
            </div>
            <div className="flex-row-center">
              <p className="desktop tablet fw-regular text-neutral-900">
                Dark Mode
              </p>
              <label className="switch" onChange={handleOnClick}>
                <input type="checkbox" />
                <span className="slider round"></span>
              </label>
              <button className="desktop button">
                <div className="flex-row-center">
                  <img
                    src="/assets/images/icon-l.svg"
                    alt=""
                    className="onlyShownOnPhone"
                  />
                  <p className="fs-100 fw-semi-bold text-static-100">
                    Sign in / up
                  </p>
                </div>
              </button>

              <button
                className="mobile-nav-toggle"
                aria-controls="primary-navigation"
              >
                <img
                  src="/assets/images/Button - Toggle navigation.svg"
                  alt=""
                />
                <span className="screen-reader-only">Menu</span>
              </button>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
