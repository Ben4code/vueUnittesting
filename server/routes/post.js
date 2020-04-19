const express = require('express');
const router = express.Router()
const {getPosts, getOnePost, addPost, deletePost} = require('../controllers/post')

router
  .route('/')
  .get(getPosts)
  .post(addPost)


router
  .route('/:id')
  .get(getOnePost)
  .delete(deletePost)

module.exports = router;