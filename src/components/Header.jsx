import { useState } from "react";
import { LOGO_URL } from "../utils/constant";

export const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("login");
  return (
    <div className="header">
      <img src={LOGO_URL} id="logo" />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>Menu</li>
          <li>About Us</li>
          <li>Contact Us</li>
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
