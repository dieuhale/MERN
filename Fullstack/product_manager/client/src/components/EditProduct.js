import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditProduct = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/products/${id}`)
      .then((res) => {
        console.log(res.data);
        setTitle(res.data.title);
        setPrice(res.data.price);
        setDescription(res.data.description);
      })
      .catch((err) => console.log("GET PRODUCT BY ID ERROR", err));
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:8000/api/products/${id}`, {
        title,
        price,
        description,
      })
      .then((res) => {
        console.log(res.data);
        navigate("/");
      })
      .catch((err) => console.log("POST ERROR", err));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Product Manager</h1>
        <div class="row">
          <div class="col-25">
            <label>Title</label>
          </div>
          <div class="col-75">
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
        </div>

        <div class="row">
          <div class="col-25">
            <label>Price</label>
          </div>
          <div class="col-75">
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
        </div>

        <div class="row">
          <div class="col-25">
            <label>Description</label>
          </div>
          <div class="col-75">
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
        </div>

        <button>Update</button>
      </form>
    </div>
  );
};

export default EditProduct;
