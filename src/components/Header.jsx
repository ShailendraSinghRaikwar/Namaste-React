import { useState } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link, Link } from "react-router";

export const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("login");
  return (
    <div className="header">
      <img src={LOGO_URL} id="logo" />
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <button
            onClick={() => {
              btnNameReact === "login"
                ? setBtnNameReact("logout")
                : setBtnNameReact("login");
            }}
            className="login"
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
