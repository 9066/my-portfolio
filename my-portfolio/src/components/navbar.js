import React from "react";
import myLogo from "../logo1.png";

//react font awsome imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
const navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <div className="container">
        <a class="navbar-brand" href="#">
          <img className="logo" src={myLogo} alt="logo..." />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <FontAwesomeIcon icon={faBars} style={{color:'white'}}/>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                about me <span class="sr-only"></span>
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="#">
                services <span class="sr-only"></span>
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Experience <span class="sr-only"></span>
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="#">
                portfolio <span class="sr-only"></span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Contacts
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default navbar;
