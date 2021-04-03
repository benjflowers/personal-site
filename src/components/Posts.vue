<template>
  <h1>Articles go here</h1>
  <div class="posts">
    <div :key="post._id" v-for="post in posts">
      <Post :post="post" :content="post.content" />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Post from "./Post";

export default {
  name: "Posts",
  data() {
    return {
      posts: [],
      cms_base_uri: process.env.VUE_APP_CMS_BASE_URI,
    };
  },
  created() {
    this.getPosts();
  },
  components: {
    Post,
  },
  methods: {
    async getPosts() {
      await axios
        .get(`${this.cms_base_uri}/posts`)
        .then((resp) => {
          for (let i = 0; i < resp.data.length; i++) {
            this.posts.push(resp.data[i]);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style scoped>
div.posts {
  margin-left: 200px;
  margin-right: 200px;
}
</style>