import React from "react";
import ProudctCard from "../../components/ProductCard/ProductCard";
import ProductList from "./ProductList/ProductList";

const CustomerPage = () => {
  return (
    <div
      style={{ backgroundColor: "#DEE1FE", width: "100%", padding: "5% 2%" }}
    >
      <ProductList />
    </div>
  );
};

export default CustomerPage;
