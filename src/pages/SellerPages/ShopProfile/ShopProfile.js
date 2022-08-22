import React from "react";
import "./ShopProfile.css";
import Shop from "../../../assests/images/shop_02.png";
import Rating from "react-rating";
import { IoStarOutline, IoMdStar } from "react-icons/io5";
import { GrStar } from "react-icons/gr";

const ShopProfile = () => {
  return (
    <div className="shop-profile-main-container">
      <div className="shop-profile-sub-container">
        <div>
          <div className="give-away-logo-container">
            <img src={Shop} className="shop-profile-img" />
            <p className="shop-name give-away" style={{ width: "137%" }}>
              Glamour House
            </p>
          </div>
        </div>
        <div>
          <div className="shop-profile-ratings-container">
            <p>Followers - 2764</p>
            <Rating
              readonly
              stop={5}
              initialRating={2}
              emptySymbol={<IoStarOutline size={27} />}
              fullSymbol={
                <GrStar
                  style={{ strokeWidth: "2", stroke: "black" }}
                  color="#FBBC05"
                  size={25}
                />
              }
            />
          </div>
          <div className="profile-detail-container" style={{ width: "100%" }}>
            <span className="profile-detail-txt">
              E-mail - sandunifdo@gmail.com
            </span>
            <span className="profile-detail-txt">
              Adddress - No 256, Colombo
            </span>
            <span className="profile-detail-txt">
              Contact No - 071-XXXXXXXX
            </span>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              accumsan ipsum vitae nisi sagittis venenatis. Praesent nec orci et
              urna ullamcorper sollicitudin ut in
            </p>

            <div className="myshop-edit-btn">
              <button style={{ bottom: "21%" }} className="profile-edit-btn">
                Edit Profile
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopProfile;
