import React from "react";
import ProudctCard from "../../../components/ProductCard/ProductCard";
import "./productlist.css";
import { FiPlus } from "react-icons/fi";
const ProductList = () => {
  let sampleArray = [{}, {}, {}, {}, {}, {}, {}, {}, {}];
  return (
    <div className="product-list-grid">
      {sampleArray.map((item, index) => (
        <ProudctCard key={index} />
      ))}

      <div className="add-product-container">
        <FiPlus size={"40%"} color="#778292" />
      </div>
    </div>
  );
};

export default ProductList;
