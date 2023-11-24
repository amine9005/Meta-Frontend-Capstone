import React from "react";
import Logo from "../Assets/imgs/Logo.svg";
import "./index.scss";

const Nav = () => {
  return (
    <nav>
      <img className="logo" src={Logo} alt="logo.svg" />
      <ul>
        <li>
          <a href="#Home">Home</a>
        </li>
        <li>
          <a href="#About">About</a>
        </li>
        <li>
          <a href="#Menu">Menu</a>
        </li>
        <li>
          <a href="#Reservation">Reservation</a>
        </li>
        <li>
          <a href="#OrderOnline">Order Online</a>
        </li>
        <li>
          <a href="#Login">Login</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
