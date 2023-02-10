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
        
      </nav>
    </>
  );
};

export default Navbar;
