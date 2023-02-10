import React from "react";
// import '../styles/NavBar.css';
import logo from "./logo.png";
import "../styles/NavBar.css";

const Navbar = () => {
  return (
    <>
      {/* <nav className="navbar navbar-light bg-light">
  <a className="navbar-brand" href="/home">
    <img src={logo} width="100"  alt="logo-aquabot"/>
  </a>
</nav> */}
      <nav className="navbar navbar-expand-lg navbar-light bg-green">
        <a
          className="navbar-brand"
          href="/home"
          style={{
            paddingRight: "40px",
          }}
        >
          <div className="logo">
            <img src={logo} width="100" alt="logo-aquabot" />
          </div>
        </a>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="create" text-align="right">
                Create your own tree
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
