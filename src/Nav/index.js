import React, { useState } from "react";
import Logo from "../Assets/imgs/Logo.svg";
import "./index.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faTimes,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import Link from "./Links";

const links = [
  { name: "Home", url: "#Home" },
  { name: "About", url: "#About" },
  { name: "Menu", url: "#Menu" },
  { name: "Reservation", url: "#Reservation" },
  { name: "Order Online", url: "#OrderOnline" },
  { name: "Login", url: "#Login" },
];

const Nav = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav>
      <div className="desktop">
        <FontAwesomeIcon
          className={showMenu ? "nav-bars show-times" : "nav-bars show-bars"}
          size="4x"
          icon={showMenu ? faTimes : faBars}
          onClick={() => setShowMenu(!showMenu)}
        />
        <img className="logo" src={Logo} alt="logo.svg" />
        <Link links={links} />
        <FontAwesomeIcon className="nav-cart" icon={faShoppingCart} size="4x" />
      </div>
      <div className="mobile">
        <div className={showMenu ? "show-menu" : "hide-menu"}>
          <Link links={links} />
        </div>
      </div>
    </nav>
  );
};
// {showMenu ? "show" : "hide"}
export default Nav;
