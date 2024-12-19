import { LOGO_URL } from "../utils/constant";

export const Header = () => {
  return (
    <div className="header">
      <img src={LOGO_URL} id="logo" />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>Menu</li>
          <li>About Us</li>
          <li>Contact Us</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
