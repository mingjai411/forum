const mongoose = require("mongoose");

const PostSchema = mongoose.Schema(
  {
    title: String
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Post", PostSchema);
