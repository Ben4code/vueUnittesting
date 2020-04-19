<template>
  <div>
    <div class="postForm">
      <!-- Post Form -->
      <div class="carditem">
        <PostForm v-on:postCreated="addNewPosts"/>
      </div>
    </div>
    <div class="card-list">
      <div
        class="carditem"
        v-for="(post, index) in posts"
        v-bind:item="post"
        v-bind:index="index"
        v-bind:key="post._id"
      >
        <div class="">
          <p class="card-title">{{ post.title }}</p>
          <p class="timestamp">{{new Date(post.createdAt).toLocaleString('en-GB', { timeZone: 'UTC' }) }}</p>
        </div>
        <div>
          <p class="carditem-body">{{ post.body }}</p>
        </div>
        <div class="carditem-links">
          <a  v-on:click="updatePost(post)" class="btn btn-small blue">Edit</a>
          <a  v-on:click="deletePost(post._id)" class="btn btn-small red">Delete</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getPosts, addPost, deletePost } from "../Service";
import PostForm from '../components/PostForm'


export default {
  name: "Home",
  
  components: {
    PostForm
  },

  data() {
    return {
      posts: []
    };
  },
  methods: {
    addNewPosts({data}){
      this.posts.unshift(data);
    },
    updatePost(post){
      addPost(post).then(res => console.log(res.data)).catch(err => console.error(err));
    },
    deletePost(id){
      deletePost(id).then(res => {
        this.posts = this.posts.filter(post => post._id !== res.data.data._id);
      })
      .catch(err => console.error(err));
    }
  },

  created() {
    getPosts()
      .then(res => {
        this.posts  = res.data.data.reverse().splice(0, 20);
      })
      .catch(err => console.error(err));
  }
};
</script>

<style >
.timestamp {
  color: #999;
  margin-bottom: 10px;
}
.carditem {
  position: relative;
  margin: 0.5rem 0 1rem 0;
  background-color: #fff;
  transition: box-shadow 0.25s;
  box-shadow: 
    0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 3px 1px -2px rgba(0, 0, 0, 0.12), 
    0 1px 5px 0 rgba(0, 0, 0, 0.2);
  border-radius: 2px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;
  padding: 2rem;
}
.card-title {
  text-transform: capitalize;
}
.card-list {
  height: 100%;
  display: grid;
  grid-gap: 40px 20px;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-template-rows: max-content;
}
.carditem-links{
  display: flex;
  justify-content: space-between;
  border-top: 1px solid #ddd;
  padding: .5rem 0;
}
.card-title{
  font-size: 1.3rem;
}
.carditem-body::first-letter{
  font-size: 2rem;
  font-weight: 100;
  text-transform: uppercase;
}
.postForm{
  padding: 4rem 10rem;
}
</style>