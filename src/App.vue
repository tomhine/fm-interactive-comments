<script setup lang="ts">
import { useCommentsStore } from "./stores/comments";

const comments = useCommentsStore();
</script>

<template>
  <ul>
    <li v-for="comment in comments.getComments()" :key="comment.id">
      {{ comment.content }}
    </li>
  </ul>
</template>
