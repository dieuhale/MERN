
const Joke = require("../models/jokes.model");

const jokeController = {
  test: (req, res) => {
    res.json({ mesg: "all set up for jokes API" });
  },

  //create
  addNewJoke: (req, res) => {
    Joke.create(req.body)
      .then((result) => {
        res.status(201).json({ newJoke: result });
      })

      .catch((err) => {
        res.status(400).json({ message: " Something went wrong", error: err });
      });
  },

  //read
  findOneJokeById: (req, res) => {
    Joke.findOne({ _id: req.params.id })
      .then((result) => {
        res.status(200).json({ joke: result });
      })

      .catch((err) => {
        res.status(500).json({ message: " Something went wrong", error: err });
      });
  },

  findAllJokes: (req, res) => {
    Joke.find()
      .then((result) => {
        res.status(200).json({ allJokes: result });
      })

      .catch((err) => {
        res.status(500).json({ message: " Something went wrong", error: err });
      });
  },

  //update

  updateJoke: (req, res) => {
    Joke.findOneAndUpdate({ _id: req.params.id }, req.body, {
      new: true,
      runValidators: true,
    })
      .then((result) => {
        res.status(200).json({ updateJoke: result });
      })

      .catch((err) => {
        res.status(400).json({ message: " Something went wrong", error: err });
      });
  },

  //delete

  deleteJoke: (req, res) => {
    Joke.findOneAndDelete({ _id: req.params.id })
      .then((result) => {
        res.status(200).json({ deleteJoke: result });
      })

      .catch((err) => {
        res.status(500).json({ message: " Something went wrong", error: err });
      });
  },
};

module.exports = jokeController;
