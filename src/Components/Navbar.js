import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/travel-with-a-cause">
          <img
            src="https://static.wixstatic.com/media/30f17f_b93910978db8496490fe69c28bcfefb0~mv2.png/v1/crop/x_0,y_6,w_509,h_304/fill/w_184,h_92,al_c,q_95,enc_auto/twac%20white%20logo.png"
            className="img-fluid logo"
            alt=""
          />{" "}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          j
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/travel-with-a-cause">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/travel-with-a-cause/corporate-sustainable"
              >
                Corporate Sustainable
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className="nav-link"
                to="/travel-with-a-cause/spirit-of-tasmania"
              >
                Spirit of Tasmania
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/travel-with-a-cause/pass-park">
                Park Pass
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/travel-with-a-cause/travel-and-more"
              >
                Travel & more
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/travel-with-a-cause/about-page">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/travel-with-a-cause/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
