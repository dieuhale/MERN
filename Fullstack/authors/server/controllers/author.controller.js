const Author = require("../models/author.model");
module.exports = {
getAuthors: (req, res) => {
  Author.find({}) // give me everything
    .then((allAuthors) => {
      console.log(allAuthors);
      res.json(allAuthors);
    })
    .catch((err) =>
      res
        .status(400)
        .json({
          message: " Something went wrong with findAll",
          errors: err.errors,
        })
    );
},
createAuthor: (req, res) => {
  Author.create(req.body)
    .then((newAuthor) => {
      res.status(201).json(newAuthor);
    })
    .catch((err) => {
      console.log("ERROR IN create Author", err);
      res
        .status(400)
        .json({
          message: " Something went wrong with create author",
          errors: err.errors,
        });
    });
},
 
getAuthorById: (req, res) => {
 Author.findOne({ _id: req.params.id })
   .then((author) => {
     console.log(author);
     res.json(author);
   })
   .catch((err) =>
     res
       .status(400)
       .json({ message: " Something went wrong with find one", error: err })
   );
},
 
deleteAuthor: (req, res) => {
 Author.deleteOne({ _id: req.params.id })
   .then((author) => {
     console.log(author);
     res.json(author);
   })
   .catch((err) =>
     res
       .status(400)
       .json({
         message: " Something went wrong with delete author",
         error: err,
       })
   );
},
 
updateAuthor: (req, res) => {
 Author.updateOne({ _id: req.params.id }, req.body, {
   new: true,
   runValidators: true,
 })
   .then((author) => {
     console.log(author);
     res.json(author);
   })
   .catch((err) =>
     res
       .status(400)
       .json({
         message: " Something went wrong with update author",
         error: err,
       })
   );
},
 
 
};
