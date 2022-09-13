const mongoose = require("mongoose");

const AuthorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "An author name is required!"],
      minlength: [3, " The name length must be at least 3 characters!"],
    },
  },

  { timestamps: true }
);

const Author = mongoose.model("Author", AuthorSchema);

module.exports = Author;
