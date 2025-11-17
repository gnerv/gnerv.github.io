<script setup>
import { data as posts } from './posts.data.js'
</script>

<template>
  <h1>All Blog Posts</h1>
  <ul>
    <li v-for="post of posts">
      <a :href="post.url">{{ post }}</a>
      <span>by {{ post.frontmatter.author }}</span>
    </li>
  </ul>
</template>