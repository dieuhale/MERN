const AuthorController = require("../controllers/author.controller");
 
const routes = (app) => {
 app.get("/api/authors", AuthorController.getAuthors);
 app.post("/api/authors", AuthorController.createAuthor);
 app.get("/api/authors/:id", AuthorController.getAuthorById);
 app.put("/api/authors/:id", AuthorController.updateAuthor);
 app.delete("/api/authors/:id", AuthorController.deleteAuthor);
};
 
module.exports = routes;