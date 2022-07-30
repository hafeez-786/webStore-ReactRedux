import React from "react";
import { Link } from "react-router-dom";
import Login from "./buttons/Login";
import Signup from "./buttons/Signup";
import CartBtn from "./buttons/CartBtn";

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <div
            className="collapse navbar-collapse py-2"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <Link className="navbar-brand fw-bold" to="/">
                MY STORE
              </Link>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/product">
                  Product
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <Login />
          <Signup />
          <CartBtn />
        </div>
      </nav>
    </>
  );
};

export default Header;
