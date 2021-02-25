import React from "react";
import "./Header.css";
import MenuIcon from "@material-ui/icons/Menu";
import TeslaLogo from "../../assets/teslaLogoSmall.svg";
const Header = () => {
  return (
    <div className="header">
      <div className="header__logo">
        <img src={TeslaLogo} alt="TeslaLogo" />
      </div>

      <ul className="header__center">
        <li>
          <a href="#"> Model S</a>
        </li>
        <li>
          <a href="#">Model 3</a>
        </li>
        <li>
          <a href="#">Model X</a>
        </li>
        <li>
          <a href="#">Model Y</a>
        </li>
        <li>
          <a href="#">CYBERTRUCK</a>
        </li>
        <li>
          <a href="#">POWERWALL</a>
        </li>
      </ul>

      <div className="header__right">
        <a href="#">TESLA 帳戶</a>
        {/* hamburger icon */}
        <MenuIcon />
      </div>
    </div>
  );
};

export default Header;
