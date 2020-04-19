const Post = require("../model/post");

// @desc      Get all routes
// @route     GET /api/posts
// @access     Public
exports.getPosts = async (req, res, next) => {
  try {
    const posts = await Post.find();
    return res.status(200).json({
      success: true,
      count: posts.length,
      data: posts,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Server error",
      error: err,
    });
  }
};

// @desc      PUT one routes
// @route     PUT /api/post
// @access    Public
exports.updateOnePost = async (req, res, next) => {
  const query = { _id: req.body._id };
  const update  = { title: req.body.title, body: req.body.body };
  const options = { new: true, useFindAndModify: true };

  try {
    const newPost  = await Post.findOneAndUpdate(query, update, options);
    
    if(!newPost){
      return res.status(404).json({
        success: false,
        message: "Post was not found.",
      })
    }

    return res.status(200).json({
      success: true,
      data: newPost
    })
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Unable complete request.",
      error: err,
    });
  }
};

// @desc      Get one routes
// @route     GET /api/posts
// @access    Public
exports.getOnePost = async (req, res, next) => {
  try {
    const post = await Post.findById(req.params.id);

    if (post === null) {
      return res.status(404).json({
        success: false,
        message: "Post was not found.",
      });
    }

    return res.status(200).json({
      success: true,
      count: post.length,
      data: post,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Unable complete request.",
      error: err,
    });
  }
};

// @desc      Get one routes
// @route     POST /api/posts
// @access     Public
exports.addPost = async (req, res, next) => {
  try {
    const newPost = await Post.create(req.body);
    return res.status(201).json({
      success: true,
      data: newPost,
    });
  } catch (err) {
    if (err.name === "ValidationError") {
      const messages = Object.values(err.errors).map((val) => val.message);
      return res.status(400).json({
        success: false,
        message: messages,
        error: err,
      });
    } else {
      return res.status(500).json({
        success: false,
        message: "Something went wrong with the request.",
        error: err,
      });
    }
  }
};

// @desc      Deelete one routes
// @route     DELETE /api/posts/:id
// @access    Public
exports.deletePost = async (req, res, next) => {
  try {
    const deletePost = await Post.findById(req.params.id);

    if (deletePost === null) {
      return res.status(404).json({
        success: false,
        message: "Post was not found.",
      });
    }

    await deletePost.remove();
    return res.status(200).json({
      success: true,
      message: "Post was successfully removed.",
      data: deletePost,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Unable to delete post.",
      error: err,
    });
  }
};
