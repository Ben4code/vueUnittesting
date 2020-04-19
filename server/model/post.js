const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
  {
    title: { 
        type: String, 
        trim: true,
        required: true 
    },
    body: { 
        type: String, 
        required: true 
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Post = mongoose.model("Post", PostSchema);
module.exports = Post;
