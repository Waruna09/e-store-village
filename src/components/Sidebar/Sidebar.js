import React from "react";
import "./Sidebar.css";
import { FiHome, FiTag, FiUpload } from "react-icons/fi";
import { VscSettingsGear, VscCalendar } from "react-icons/vsc";
import {
  AiOutlineShoppingCart,
  AiOutlineUser,
  AiFillShop,
} from "react-icons/ai";
import { Link, useParams, useRoutes, useLocation } from "react-router-dom";

const Sidebar = () => {
  const route = useLocation();

  const defaultTxtStyle = {
    color: "black",
    fontWeight: "normal",
    fontSize: 15,
  };

  const selectTxtStyle = { color: "#144967", fontWeight: "bold", fontSize: 20 };

  const iconDefaultColor = "black";
  const iconSelectColor = "#144967";

  return (
    <div>
      <section className="sidebar-container">
        <Link to="/Home">
          <div className="row-container">
            <FiHome size={25} />
            <span>Home</span>
          </div>
        </Link>
        <Link to="/">
          <div className="row-container">
            <FiTag size={25} />
            <span>Products</span>
          </div>
        </Link>

        <Link to="/shop">
          <div className="row-container">
            <div className="icon-container">
              <AiFillShop
                size={25}
                color={
                  route.pathname.match(/shop/) !== null
                    ? iconSelectColor
                    : iconDefaultColor
                }
              />
            </div>
            <span
              style={
                route.pathname.match(/shop/) !== null
                  ? selectTxtStyle
                  : defaultTxtStyle
              }
            >
              Shops
            </span>
          </div>
        </Link>
        <Link to="/event">
          <div className="row-container">
            <VscCalendar
              size={25}
              color={
                route.pathname.match(/event/) !== null
                  ? iconSelectColor
                  : iconDefaultColor
              }
            />
            <span
              style={
                route.pathname.match(/event/) !== null
                  ? selectTxtStyle
                  : defaultTxtStyle
              }
            >
              Events
            </span>
          </div>
        </Link>

        <Link to="/profile">
          <div className="row-container">
            <AiOutlineUser
              size={25}
              color={
                route.pathname.match(/profile/) !== null
                  ? iconSelectColor
                  : iconDefaultColor
              }
            />
            <span
              style={
                route.pathname.match(/profile/) !== null
                  ? selectTxtStyle
                  : defaultTxtStyle
              }
            >
              My Profile
            </span>
          </div>
        </Link>
        <Link to="/cart">
          <div className="row-container">
            <AiOutlineShoppingCart
              size={25}
              color={
                route.pathname.match(/cart/) !== null
                  ? iconSelectColor
                  : iconDefaultColor
              }
            />
            <span
              style={
                route.pathname.match(/cart/) !== null
                  ? selectTxtStyle
                  : defaultTxtStyle
              }
            >
              My Cart
            </span>
          </div>
        </Link>
        <Link to="/orders">
          <div className="row-container">
            <FiUpload
              size={25}
              color={
                route.pathname.match(/orders/) !== null
                  ? iconSelectColor
                  : iconDefaultColor
              }
            />
            <span
              style={
                route.pathname.match(/orders/) !== null
                  ? selectTxtStyle
                  : defaultTxtStyle
              }
            >
              My Orders
            </span>
          </div>
        </Link>
        <div className="row-container">
          <VscSettingsGear size={25} />
          <span>Settings</span>
        </div>
      </section>
      <div style={{ width: "16vw" }}></div>
    </div>
  );
};

export default Sidebar;
