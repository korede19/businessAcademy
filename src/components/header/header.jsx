import React from "react";
import "./header.css";
import Logo from "../../assets/Logo 2.png";
import { menuLinks } from "../../utils/data";
import FormSearch from "../../svg/search";
import Cart from "../../svg/cart";
import Notification from "../../svg/notification";
import UserIcon from "../../svg/user";
import DropDown from "../../svg/drop";

const Header = () => {
  return (
    <div className="headerContainer">
      <div className="headerContain">
        <div className="logo">
          <img src={Logo} alt="logo" />
        </div>
        <div className="otherMenus">
          <div className="menuLinks">
            {menuLinks?.map((item) => {
              return <p>{item}</p>;
            })}
          </div>
          <div className="headForm">
            <FormSearch />
            <input
              type="text"
              id="text"
              name="search"
              placeholder="Search"
              required
            />
          </div>
          <div className="headIcons">
            <Cart />
            <Notification />
            <div className="userIcon">
              <UserIcon />
              <p>Christopher John</p>
              <DropDown />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
