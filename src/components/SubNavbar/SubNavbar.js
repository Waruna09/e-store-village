import React from "react";
import Logo from "../../assests/images/Logo.png";
import { CgProfile } from "react-icons/cg";
import { FiSearch } from "react-icons/fi";
import { BiHelpCircle, BiMessage } from "react-icons/bi";
import { MdNotificationsNone } from "react-icons/md";

import "./SubNavbar.css";

const SubNavbar = () => {
  return (
    <div>
      <div className="sub-navbar-container">
        <div>
          <img className="sub-nav-logo" src={Logo} />
        </div>

        <div className="sub-nav-input-row">
          <div className="sub-nav-input">
            <FiSearch />
            <input placeholder="search" />
          </div>

          <div className="sub-nav-icon-row">
            <BiHelpCircle size={30} />
            <MdNotificationsNone size={30} />
            <BiMessage size={30} />
          </div>

          <div className="sub-nav-user">
            <CgProfile size={35} className="sub-nav-profile-icon" />
            <p className="sub-nav-profile-txt">Customer</p>
          </div>
        </div>
      </div>

      <div className="sub-nav-space"></div>
    </div>
  );
};

export default SubNavbar;
