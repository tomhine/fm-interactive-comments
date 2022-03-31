import { defineStore } from "pinia";
import { ref } from "vue";
import { comments as data } from "@/data";
import type { Comment } from "@/data";

export const useCommentsStore = defineStore("comments", () => {
  const comments = ref<Comment[]>(data);

  const getComments = (): Comment[] => comments.value;

  return { getComments };
});
