<script setup lang="ts">
import { useCommentsStore } from "./stores/comments";

const comments = useCommentsStore();
</script>

<template>
  <main class="mx-auto mt-4 w-full max-w-3xl lg:mt-11 lg:p-4">
    <ul class="space-y-4 lg:space-y-5">
      <li v-for="comment in comments.getComments()" :key="comment.id">
        {{ comment.content }}
      </li>
    </ul>
  </main>
</template>
