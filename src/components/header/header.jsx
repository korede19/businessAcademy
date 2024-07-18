import React, { useState } from "react";
import "./header.css";
import Logo from "../../assets/Logo 2.png";
import { menuLinks } from "../../utils/data";
import FormSearch from "../../svg/search";
import Cart from "../../svg/cart";
import Notification from "../../svg/notification";
import UserIcon from "../../svg/user";
import DropDown from "../../svg/drop";
import Mobile from "../../svg/mobile";

const Header = () => {
  const [mobile, setMobile] = useState(false);
  return (
    <div className={mobile ? "headerContainer headMobile" : "headerContainer"}>
      <div className="headerContain">
        <div className="logo">
          <img src={Logo} alt="logo" />
          <div className="mobileBtn">
            <FormSearch />
            <div onClick={() => setMobile(!mobile)}>
              <Mobile />
            </div>
          </div>
        </div>
        <div className="otherMenus">
          <div className="menuLinks">
            <div className="mobilehid">
              <div className="userIcon">
                <UserIcon />
                <p>Christopher John</p>
                <DropDown />
              </div>
            </div>
            {menuLinks?.map((item, index) => {
              return <p key={index}>{item}</p>;
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
