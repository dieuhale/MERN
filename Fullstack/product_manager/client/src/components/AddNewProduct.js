import { useState } from "react";
import axios from "axios";

const NewProduct = (props) => {
  const { allProducts, setAllProducts } = props;
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/api/products", {
        title,
        price,
        description,
      })
      .then((res) => {
        console.log(res.data);
        setAllProducts([...allProducts, res.data]);
        setTitle("");
        setPrice("");
        setDescription("");
      })
      .catch((err) => {
        console.log("POST ERROR", err.response.data.errors);
      });
  };
  return (
    <div className="main-controller">
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

        <button>Create</button>
      </form>
    </div>
  );
};

export default NewProduct;
