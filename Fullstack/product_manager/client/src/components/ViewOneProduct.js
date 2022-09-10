import { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link , useNavigate} from "react-router-dom";

const ViewOneProduct = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/products/${id}`)
      .then((res) => {
        console.log(res.data);
        setProduct(res.data);
      })
      .catch((err) => console.log("GET PRODUCT BY ID ERROR", err));
  }, [id]);

  const deleteProduct = (productId) => {
    axios
      .delete(`http://localhost:8000/api/products/${id}`)
      .then((res) => {
        navigate("/");
      })
      .catch((err) => console.log(err));
  };
 

  return (
    <div>
      <h2>Title: {product.title}</h2>
      <Link to = "/">Back</Link>
      <p>Price: ${product.price}</p>
      <p>Description: {product.description}</p>
      <button onClick={deleteProduct}>Delete</button>
    </div>
  );
};

export default ViewOneProduct;
