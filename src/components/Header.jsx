import { useState, useContext } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link, Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

export const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("login");

  const onlineStatus = useOnlineStatus();

  const { loggedInUser } = useContext(UserContext);

  const cartItems = useSelector((store) => store.cart.items);

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
          <li className="px-4 font-bold">
            <Link to="/cart">Cart ({cartItems.length} - Items)</Link>
          </li>
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
          <li className="px-4 font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
