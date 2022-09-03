const jokeController = require("../controllers/jokes.controller");
const routes = (app) => {
  app.get("/api/test", jokeController.test);
  app.post("/api/jokes", jokeController.addNewJoke);
  app.get("/api/jokes", jokeController.findAllJokes);
  app.get("/api/jokes/:id", jokeController.findOneJokeById);
  app.put("/api/jokes/:id", jokeController.updateJoke);
  app.delete("/api/jokes/:id", jokeController.deleteJoke);
};

module.exports = routes;
