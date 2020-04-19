<template>
  <div class="add">
    <form v-if="!loading" class="form" v-on:submit.prevent="onSubmit">
      <div class="input-field">
        <label for="title">Title</label>
        <input type="text" name="title" v-model="title" v-bind:class=" [errors.title ? 'invalid' : 'validate'] " />
        <span class="helper-text" data-error="Title field must not be empty"></span>
      </div>

      <div class="input-field">
        <label for="body">Body</label>
        <input type="text" name="body" v-model="body" v-bind:class=" [errors.body ? 'invalid' : 'validate'] " />
        <span class="helper-text" data-error="Body field must not be empty"></span>
      </div>

      <button type="submit" class="waves-effect waves-light btn btn-small blue">Add</button>
    </form>

    <div v-else-if="loading">
      <div class="progress">
        <div class="indeterminate"></div>
      </div>
    </div>

  </div>
</template>

<script>
import { addPost } from "../Service";

export default {
  name: "PostForm",
  data() {
    return {
      loading: false,
      title: "",
      body: "",
      errors: ""
    };
  },
  methods: {
    onSubmit() {
      this.loading = true;
      if(!this.validate()){
        this.loading = false;
        return;
      }
      const post = {
        title: this.title,
        body: this.body
      };
      addPost(post)
        .then(response => {
          this.loading = false;
          this.title = "";
          this.body = "";
          this.$emit('postCreated', response.data)
        })
        .catch(err => {
          this.loading = false;
          console.error(err);
        });
    },

    validate(){
      this.errors = {}
      if(this.title.trim() === ""){
        this.errors.title = 'Title'
      }
      if(this.body.trim() === ""){
        this.errors.body = 'Body'
      }
      if(Object.keys(this.errors).length > 0){
        return false;
      }else{
        return true;
      }
    }
  }
};
</script>

<style scoped>
.add {
  width: 100%;
}
.progress {
  background-color:#2196F3;
  margin: 0 auto;
}
.progress .indeterminate {
    background-color: lightblue;
}
</style>