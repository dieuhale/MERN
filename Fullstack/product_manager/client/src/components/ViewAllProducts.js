import React, { useState } from "react";
import AddNewProduct from "../components/AddNewProduct";
import ProductManager from "../components/ProductManager";

const ViewAllProducts = (props) => {
  const [allProducts, setAllProducts] = useState([]);

  return (
    <div>
      <AddNewProduct
        allProducts={allProducts}
        setAllProducts={setAllProducts}
      />
      <ProductManager
        allProducts={allProducts}
        setAllProducts={setAllProducts}
      />
    </div>
  );
};

export default ViewAllProducts;
