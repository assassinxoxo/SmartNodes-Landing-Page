import React, { useState } from "react";
import logo from "../images/Logo-0344.png";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const changeBackground = () => {
    if (window.screenY >= 50) {
      setNav(true);
    } else {
      setNav(false);
    }
  };
  window.addEventListener("scroll", changeBackground);
  return (
    <nav className="pl-7 pr-12">
      <a href="#" className="logo">
        <img src={logo} alt="" />
      </a>
      <input type="checkbox" className="menu-btn" id="menu-btn" />
      <label className="menu-icon" for="menu-btn">
        <span className="nav-icon"></span>
      </label>
      <ul className="menu">
        <li>
          <Link
            to="main"
            smooth={true}
            duration={1000}
            className="active text-white cursor-pointer"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="features"
            smooth={true}
            duration={1000}
            className="active text-white cursor-pointer"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="roadmap"
            smooth={true}
            duration={1000}
            className="active text-white cursor-pointer"
          >
            Roadmap
          </Link>
        </li>
        <li>
          <Link
            to="collection"
            smooth={true}
            duration={1000}
            className="active text-white cursor-pointer"
          >
            NFT
          </Link>
        </li>
        <li>
          <a
            href="https://smartnodes.finance/"
            className="active text-white cursor-pointer"
            target={"_blank"}
          >
            DAPP
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
