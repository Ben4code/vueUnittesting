const Post = require('../model/post')


// @desc      Get all routes
// @route     GET /api/posts
// @access     Public
exports.getPosts = async (req, res, next) => {
  try{
    const posts = await Post.find();
    return res.status(200).json({
      success: true,
      count: posts.length,
      data: posts
    })
  }catch(err){
    return res.status(500).json({
      success: false,
      error: 'Server error'
    })
  }
  
  res.send("From Controller")
}


// @desc      Get one routes
// @route     POST /api/posts
// @access     Public
exports.addPost = (req, res, next) => {
  res.send("Post From Controller")
}



// @desc      Deelete one routes
// @route     DELETE /api/posts/:id
// @access    Public
exports.deletePost = (req, res, next) => { 
  res.send("Delete From Controller")
}