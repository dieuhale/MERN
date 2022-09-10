import { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ProductList = (props) => {
  const { allProducts, setAllProducts } = props;

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/products")
      .then((res) => {
        console.log(res.data);
        setAllProducts(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const deleteProduct = (productId) => {
    axios
      .delete(`http://localhost:8000/api/products/${productId}`)
      .then((res) => {
        const newProducts = allProducts.filter(
          (product) => product._id !== productId
        );
        setAllProducts(newProducts);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="container">
      <div className="header">
        <h1>All Products</h1>
      </div>

      {allProducts.map((product) => (
        <div key={product._id} className="card">
          <h2>
            <Link to={`/${product._id}`}>{product.title}</Link>
            <br />
            <Link className = "link" to={`/edit/${product._id}`}>Edit</Link>
            <button
              style={{ marginTop: "1rem" }}
              onClick={() => deleteProduct(product._id)}
            >
              Delete
            </button>
          </h2>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
