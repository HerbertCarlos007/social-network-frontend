<script setup>
import { faImage } from "@fortawesome/free-solid-svg-icons";
import { ref, onMounted } from "vue";
import postService from "../services/postService";

const faImageIcon = faImage;
const posts = ref([]);

onMounted(async () => {
  try {
    const response = await postService.getAllPosts();
    posts.value = response.data.posts;
  } catch (error) {
    console.error("Erro ao buscar posts:", error);
  }
});
</script>

<template>
  <div
    class="w-full h-screen flex flex-col items-center gap-5 bg-[#1c1e21] overflow-auto mb-5"
  >
    <div
      class="w-[550px] h-36 bg-[#2e3033] rounded-lg mt-5 hadow-2xl border border-white/10"
    >
      <div class="flex gap-3.5 p-3.5 items-center">
        <div>
          <img
            class="w-16 h-16 rounded-full"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP6dAmZvF5keJskLHMoTNuKK30HfA-iVV50Q&s"
            alt="avatar"
          />
        </div>
        <div
          class="flex-1 p-2 cursor-pointer rounded-lg bg-[#5a5c5f] text-white"
        >
          No que você está pensando, Bill?
        </div>
      </div>

      <div class="flex justify-end p-3 text-white">
        <font-awesome-icon :icon="faImage" class="text-2xl cursor-pointer" />
      </div>
    </div>

    <div
      v-for="post in posts" :key="post.id" class="w-[550px] bg-[#2e3033] shadow-2xl border border-white/10 rounded-lg mt-5 p-3.5 mb-6"
     
    >
      <div class="flex gap-3.5 items-center">
        <div>
          <img
            class="w-12 h-12 rounded-full"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP6dAmZvF5keJskLHMoTNuKK30HfA-iVV50Q&s"
            alt="avatar"
          />
        </div>
        <div class="text-white font-semibold text-lg">Bill Gates</div>
      </div>

      <div class="mt-2.5 text-white">{{ post.content }}</div>
      <img
        :src="post.image_post_url"
        alt=""
      />
    </div>
  </div>
</template>
