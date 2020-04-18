<template>
  <div class="">
    <form v-if="!loading" class="form" v-on:submit="onSubmit">
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
  </div>
</template>

<script>
export default {
  name: "PostForm",
  data() {
    return {
      loading: false,
      title: "",
      body: ""
    };
  },
  onSubmit(e){
    e.prevent.Default();
  }
};
</script>
