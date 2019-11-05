const Post = require("../models/post");

module.exports.getPost = async (req, res, next) => {
  try {
    post = await Post.findById(req.params.postId);
    if (post == null) {
      return res.status(404).json({ message: "Cant find post" });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  res.post = post;
  next();
};
