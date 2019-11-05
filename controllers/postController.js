const Post = require("../models/post");

exports.create = async (req, res) => {
  const post = new Post({
    title: req.body.title
  });
  try {
    const newPost = await post.save();
    res.status(201).json(newPost);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.findAll = async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.findOne = (req, res) => {
  res.json(res.post);
};

exports.update = async (req, res) => {
  if (req.body.title != null) {
    res.post.title = req.body.title;
  }
  try {
    const updatedPost = await res.post.save();
    res.json(updatedPost);
  } catch {
    res.status(400).json({ message: err.message });
  }
};

exports.delete = async (req, res) => {
  try {
    await res.post.remove();
    res.json({ message: "Deleted This Post" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
