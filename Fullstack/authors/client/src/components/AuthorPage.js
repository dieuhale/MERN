import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const AuthorPage = () => {
  const [authors, setAuthors] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/authors")
      .then((res) => {
        console.log(res.data);
        setAuthors(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const deleteAuthor = (authorId) => {
    axios
      .delete(`http://localhost:8000/api/authors/${authorId}`)
      .then((res) => {
        const newAuthors = authors.filter((author) => author._id !== authorId);
        setAuthors(newAuthors);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="container">
      <div className="header">
        <h1>Favorite authors</h1>
        <Link to="/new">Add an author</Link>
        <p>We have quotes by:</p>
      </div>

      <table>
        <tr>
          <th>Author</th>
          <th>Actions available</th>
        </tr>
        {authors.map((author, index) => (
          <tr>
            <td>{author.name}</td>
            <td>
              <Link className="link" to={`/edit/${author._id}`}>
                <button>Edit</button>
              </Link>

              <button onClick={() => deleteAuthor(author._id)}>Delete</button>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default AuthorPage;
