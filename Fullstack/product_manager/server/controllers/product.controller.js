const Product = require("../models/product.model");
 
module.exports = {
 getProducts: (req, res) => {
   Product.find({}) // give me everything
     .then((allProducts) => {
       console.log(allProducts);
       res.json(allProducts);
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
 createProduct: (req, res) => {
   Product.create(req.body)
     .then((newProduct) => {
       res.status(201).json(newProduct);
     })
     .catch((err) => {
       console.log("ERROR IN create Product", err);
       res
         .status(400)
         .json({
           message: " Something went wrong with create product",
           errors: err.errors,
         });
     });
 },

 getProductById: (req, res) => {
  Product.findOne({ _id: req.params.id })
    .then((product) => {
      console.log(product);
      res.json(product);
    })
    .catch((err) =>
      res
        .status(400)
        .json({ message: " Something went wrong with find one", error: err })
    );
},

deleteProduct: (req, res) => {
  Product.deleteOne({ _id: req.params.id })
    .then((product) => {
      console.log(product);
      res.json(product);
    })
    .catch((err) =>
      res
        .status(400)
        .json({
          message: " Something went wrong with delete product",
          error: err,
        })
    );
},

updateProduct: (req, res) => {
  Product.updateOne({ _id: req.params.id }, req.body, {
    new: true,
    runValidators: true,
  })
    .then((product) => {
      console.log(product);
      res.json(product);
    })
    .catch((err) =>
      res
        .status(400)
        .json({
          message: " Something went wrong with update product",
          error: err,
        })
    );
},


};
