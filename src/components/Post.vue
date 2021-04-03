<template>
  <div class="post">
    <h1 class="title">{{ post.title }}</h1>
    <hr />
    <div class="content" v-html="compiledMarkdown"></div>
    <hr />
    <p class="author">{{ post.author }}</p>
    <div :key="category" class="categories" v-for="category in categories">
      <span class="category">{{ category || "lonely and uncategorized" }}</span>
    </div>
  </div>
</template>

<script>
const marked = require("marked");

export default {
  name: "Post",
  props: {
    post: Object,
    content: String,
  },
  data() {
    return {
      categories: [],
    };
  },
  created() {
    this.post.categories
      .split(",")
      .map((category) => this.categories.push(category));
  },
  computed: {
    compiledMarkdown() {
      return marked(this.content);
    },
  },
};
</script>

<style scoped>
.post {
  border: solid #c1dbc8 2px;
  margin-bottom: 20px;
  text-align: left;
  padding: 20px;
}

span {
  color: gray;
  font-size: 8pt;
}
</style>