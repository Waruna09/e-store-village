import React from "react";
import "./Sidebar.css";
import { FiHome, FiTag, FiUpload } from "react-icons/fi";
import { VscSettingsGear, VscCalendar } from "react-icons/vsc";
import {
  AiOutlineShoppingCart,
  AiOutlineUser,
  AiFillShop,
} from "react-icons/ai";
import { BsPencilSquare } from "react-icons/bs";
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
        <Link to="/myshop">
          <div className="row-container">
            <div className="icon-container">
              <FiHome
                size={25}
                color={
                  route.pathname === "/myshop"
                    ? iconSelectColor
                    : iconDefaultColor
                }
              />
            </div>
            <span
              style={
                route.pathname === "/myshop" ? selectTxtStyle : defaultTxtStyle
              }>
              My Shop
            </span>
          </div>
        </Link>

        <Link to="/product">
          <div className="row-container">
            <div className="icon-container">
              <FiTag
                size={25}
                color={
                  route.pathname.match(/product/) !== null
                    ? iconSelectColor
                    : iconDefaultColor
                }
              />
            </div>
            <span
              style={
                route.pathname.match(/product/) !== null
                  ? selectTxtStyle
                  : defaultTxtStyle
              }>
              Products
            </span>
          </div>
        </Link>

        <Link to="/shop">
          <div className="row-container">
            <div className="icon-container">
              <AiFillShop
                size={25}
                color={
                  route.pathname === "/shop"
                    ? iconSelectColor
                    : iconDefaultColor
                }
              />
            </div>
            <span
              style={
                route.pathname === "/shop" ? selectTxtStyle : defaultTxtStyle
              }>
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
              }>
              Events
            </span>
          </div>
        </Link>
        <Link to="/discounts">
          <div className="row-container">
            <p
              style={{
                color:
                  route.pathname.match(/discounts/) !== null
                    ? iconSelectColor
                    : iconDefaultColor,

                fontWeight:
                  route.pathname.match(/discounts/) !== null
                    ? "bold"
                    : "normal",
                fontSize: 25,
              }}>
              %
            </p>
            <span
              style={
                route.pathname.match(/discounts/) !== null
                  ? selectTxtStyle
                  : defaultTxtStyle
              }>
              Discounts
            </span>
          </div>
        </Link>

        <Link to="/salesHistory">
          <div className="row-container">
            <BsPencilSquare
              size={25}
              color={
                route.pathname.match(/salesHistory/) !== null
                  ? iconSelectColor
                  : iconDefaultColor
              }
            />
            <span
              style={
                route.pathname.match(/salesHistory/) !== null
                  ? selectTxtStyle
                  : defaultTxtStyle
              }>
              Sales History
            </span>
          </div>
        </Link>
        <Link to="/shopProfile">
          <div className="row-container">
            <AiOutlineUser
              size={25}
              color={
                route.pathname.match(/shopProfile/) !== null
                  ? iconSelectColor
                  : iconDefaultColor
              }
            />
            <span
              style={
                route.pathname.match(/shopProfile/) !== null
                  ? selectTxtStyle
                  : defaultTxtStyle
              }>
              Shop Profile
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
              }>
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
              }>
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
              }>
              My Orders
            </span>
          </div>
        </Link>
        <div className="row-container">
          <VscSettingsGear size={25} />
          <span>Settings</span>
        </div>
      </section>
      <div style={{ width: "19vw" }}></div>
    </div>
  );
};

export default Sidebar;
