const router = require("express").Router();
const PostController = require("../controllers/postController");
const getPost = require("../middleware/getPost");

router
  .get("/posts/:postId", getPost.getPost, PostController.findOne)
  .put("/posts/:postId", getPost.getPost, PostController.update)
  .delete("/posts/:postId", getPost.getPost, PostController.delete);

router
  .post("/posts", PostController.create)
  .get("/posts", PostController.findAll);

module.exports = router;
