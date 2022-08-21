import React from "react";
import "./mycart.css";

const MyCart = () => {
  return (
    <div className="mycart-main-container">
      <div className="my-cart-row">
        <span className="my-cart-total-amout">Select All</span>
        <span className="my-cart-total-amout">
          Total Amont - <h3> Rs. 750</h3>
        </span>

        <button className="my-cart-checkout-btn">Checkout</button>
      </div>
    </div>
  );
};

export default MyCart;
