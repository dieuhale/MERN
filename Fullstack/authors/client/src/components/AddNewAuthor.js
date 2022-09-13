import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const AddNewAuthor = () => {
  const [name, setName] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/api/authors", {
        name,
      })
      .then((res) => {
        console.log(res.data);
        navigate("/");
      })
      .catch((err) => {
        console.log("POST ERROR", err.response.data.errors);
        setErrors(err.response.data.errors);
      });
  };

  return (
    <div className="container">
      <div className="header">
          <h1>Favorite authors</h1>
          <Link to="/">Home</Link>
          <p>Add a new author:</p>
        </div>
      <form onSubmit={handleSubmit}>
        
        <div class="row">
          <div class="col-25">
            <label>Name:</label>
          </div>
          <div class="col-75">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {errors.name && (
              <p className="text-danger">{errors.name.message}</p>
            )}
          </div>
        </div>

        <button
          onClick={() => navigate("/")}
          className="btn hover hover-danger"
        >
          Cancel
        </button>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddNewAuthor;
