import { useState } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link, Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";

export const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("login");

  const onlineStatus = useOnlineStatus();
  return (
    <div className="flex justify-between bg-orange-100  shadow-md md:bg-pink-100">
      <img src={LOGO_URL} id="logo" className="w-56 p-4" />
      <div className="flex items-center">
        <ul className="flex m-4 p-4">
          <li className="px-4">
            Online Status: {onlineStatus === true ? "✅" : "🔴"}
          </li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>

          <li className="px-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4">Cart</li>
          <button
            className="px-4"
            onClick={() => {
              btnNameReact === "login"
                ? setBtnNameReact("logout")
                : setBtnNameReact("login");
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
