import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams, Link } from "react-router-dom";

const EditAuthor = () => {
  const [name, setName] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const [unRecognizedAuthor, setUnRecognizedAuthor] = useState("")
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/authors/${id}`)
      .then((res) => {
        console.log(res.data);
        setName(res.data.name);
      })
      .catch((err) => {
        console.log("GET AUTHOR BY ID ERROR", err);
        setUnRecognizedAuthor(" We're sorry, but we could not find the author you are looking for. Would you like to add an author to our database?")

      })
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:8000/api/authors/${id}`, {
        name,
      })
      .then((res) => {
        console.log(res.data);
        navigate("/");
      })
      .catch((err) => {
        console.log("POST ERROR", err.response.data.error.errors);
        setErrors(err.response.data.error.errors);
      });
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="header">
          <h1>Favorite authors</h1>
          <Link to="/">Home</Link>
          {unRecognizedAuthor && ( <p className="text-danger">{unRecognizedAuthor} <br /> <Link to = "/new"> Please click this link to create an author!</Link></p>)}
          <p>Edit this author</p>
        </div>

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

export default EditAuthor;
