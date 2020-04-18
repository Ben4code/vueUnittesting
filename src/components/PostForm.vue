<template>
  <div class="add">
    <form v-if="!loading" class="form" v-on:submit.prevent="onSubmit">
      <div class="input-field">
        <label for="title">Title</label>
        <input type="text" name="title" v-model="title" class="validate" />
        <span class="helper-text" data-error="Title must not be empty"></span>
      </div>

      <div class="input-field">
        <label for="body">Body</label>
        <input type="text" name="body" v-model="body" class="validate" />
        <span class="helper-text" data-error="body must not be empty"></span>
      </div>

      <button type="submit" class="waves-effect waves-light btn btn-small blue">Add</button>
    </form>

    <div v-else>
      <div class="progress">
        <div class="indeterminate"></div>
      </div>
    </div>

    <!-- <div v-else class="preloader-wrapper big active">
      <div class="spinner-layer spinner-blue-only">
        <div class="circle-clipper left">
          <div class="circle"></div>
        </div>
        <div class="gap-patch">
          <div class="circle"></div>
        </div>
        <div class="circle-clipper right">
          <div class="circle"></div>
        </div>
      </div>
    </div> -->

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
      body: ""
    };
  },
  methods: {
    onSubmit() {
      this.loading = true;
      const post = {
        title: this.title,
        body: this.body
      };
      addPost(post)
        .then(response => {
          this.loading = false;
          this.title = "";
          this.body = "";
          console.log(response.data);
        })
        .catch(err => {
          this.loading = false;
          console.error(err);
        });
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