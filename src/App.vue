<script setup lang="ts">
import { useCommentsStore } from "./stores/comments";

const comments = useCommentsStore();
</script>

<template>
  <main class="mx-auto mt-4 w-full max-w-3xl p-4 lg:mt-11">
    <ul class="space-y-4 lg:space-y-5">
      <li v-for="comment in comments.getComments()" :key="comment.id">
        <article class="flex flex-col gap-3 rounded-md bg-white p-4 lg:p-6">
          <div class="flex gap-4">
            <img
              :src="comment.author.image"
              :alt="`${comment.author.username} avatar`"
              class="h-8 w-8 rounded-full"
            />
            <h2 class="font-medium text-neutral-blue">{{ comment.author.username }}</h2>
            <time class="text-neutral-grayblue">{{ comment.createdAt }}</time>
          </div>
          <p class="text-neutral-grayblue">{{ comment.content }}</p>
          <div class="flex items-center justify-between">
            <div class="flex h-10 rounded bg-neutral-lightgray">
              <button class="h-full w-8">-</button>
              <p class="h-full w-8">0</p>
              <button class="h-full w-8">+</button>
            </div>
          </div>
        </article>
      </li>
    </ul>
  </main>
</template>
