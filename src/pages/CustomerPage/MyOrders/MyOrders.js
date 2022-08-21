import React from "react";
import "./myorders.css";
import Chain from "../../../assests/images/chain.png";
import Shop from "../../../assests/images/shop_02.png";
import { useParams } from "react-router-dom";

const MyOrders = () => {

  return (
    <div className="myorders-main-container">
      <table className="orders-table">
        <tr className="orders-table-header">
          <th>Order No</th>
          <th>Description</th>
          <th>Quantity</th>
          <th>Amount Paid</th>
          <th>Status</th>
          <th>Shop</th>
        </tr>
        <tr className="order-row-container">
          <td>
            <span className="order-detail-txt">56384</span>
            <button>Add a Review</button>
          </td>
          <td>
            <img src={Chain} className="order-item-size" />
            <p>Home made necklace</p>
          </td>
          <td className="order-detail-txt">01</td>
          <td className="order-detail-txt dark-green">LKR 400.00</td>
          <td className="order-detail-txt light-green">Delivered</td>
          <td>
            <img src={Shop} className="order-item-size" />
            <p className="shop-name order-shop-name">Glamour House</p>
          </td>
        </tr>
      </table>
    </div>
  );
};

export default MyOrders;
