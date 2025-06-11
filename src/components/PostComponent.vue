<script setup>
import { faImage } from "@fortawesome/free-solid-svg-icons";
import { ref, onMounted } from "vue";
import postService from "../services/postService";

const faImageIcon = faImage;
const posts = ref([]);

const content = ref("");
const file = ref(null);

onMounted(async () => {
  getAllPosts()
});

const getAllPosts = async () => {
  try {
    const response = await postService.getAllPosts();
    posts.value = response.data.data;
  } catch (error) {
    console.error("Erro ao buscar posts:", error);
  }
}

const handleFileChange = (event) => {
  const target = event.target;
  if (target.files && target.files.length > 0) {
    file.value = target.files[0];
  }
};

const createPost = async () => {
  if(!file.value) return

  const formData = new FormData();
  formData.append("content", content.value);
  formData.append("image_post_url", file.value);

  try {
    const response = await postService.createPost(formData);
    await getAllPosts()
  } catch (error) {}
};
</script>

<template>
  <div
    class="w-full h-screen flex flex-col items-center gap-5 bg-[#1c1e21] overflow-auto mb-5"
  >
    <!-- Área de criação de post melhorada -->
    <div
      class="w-[550px] bg-[#2e3033] rounded-lg mt-5 shadow-2xl border border-white/10"
    >
      <div class="flex gap-3.5 p-3.5 items-center">
        <div>
          <img
            class="w-16 h-16 rounded-full"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP6dAmZvF5keJskLHMoTNuKK30HfA-iVV50Q&s"
            alt="avatar"
          />
        </div>
        <input
          v-model="content"
          type="text"
          placeholder="No que você está pensando, Bill?"
          class="flex-1 p-3 rounded-lg bg-[#5a5c5f] text-white placeholder-white/70 focus:outline-none focus:bg-[#6a6c6f] transition"
        />
      </div>

      <div class="flex justify-between items-center p-3 text-white">
        <label
          class="flex items-center gap-2 cursor-pointer hover:text-blue-400 transition text-white"
        >
          <input
            type="file"
            accept="image/*"
            class="hidden"
            @change="handleFileChange"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="text-2xl"
          >
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
            <circle cx="8.5" cy="8.5" r="1.5"></circle>
            <polyline points="21 15 16 10 5 21"></polyline>
          </svg>
          <span class="text-sm">Adicionar foto</span>
        </label>

        <button
          @click="createPost()"
          class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1.5 rounded-md flex items-center gap-2 transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <line x1="22" y1="2" x2="11" y2="13"></line>
            <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
          </svg>
          Publicar
        </button>
      </div>
    </div>

    <!-- Post do usuário -->
    <div
      v-for="post in posts"
      :key="post.id"
      class="w-[550px] bg-[#2e3033] shadow-2xl border border-white/10 rounded-lg mt-5 p-3.5 mb-6"
    >
      <div class="flex justify-between items-start">
        <div class="flex gap-3.5 items-center">
          <div>
            <img
              class="w-12 h-12 rounded-full"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP6dAmZvF5keJskLHMoTNuKK30HfA-iVV50Q&s"
              alt="avatar"
            />
          </div>
          <div>
            <div class="text-white font-semibold text-lg">{{ post.name }}</div>
            <div class="text-gray-400 text-xs">{{ post.created_at }}</div>
          </div>
        </div>
        <button
          class="text-gray-400 hover:text-white p-1 rounded-full hover:bg-[#3e4043] transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <circle cx="12" cy="12" r="1"></circle>
            <circle cx="19" cy="12" r="1"></circle>
            <circle cx="5" cy="12" r="1"></circle>
          </svg>
        </button>
      </div>

      <div class="mt-2.5 text-white">{{ post.content }}</div>
      <img
        :src="post.image_post_url"
        alt="post imagem"
        class="w-full h-auto rounded-lg mt-3 object-cover"
      />

      <!-- Separador -->
      <div class="h-px bg-[#3e4043] my-3"></div>

      <!-- Área de interação -->
      <div class="flex justify-between items-center">
        <div class="flex gap-4">
          <button
            class="flex items-center gap-2 text-gray-400 hover:text-red-400 py-1 px-2 rounded hover:bg-[#3e4043] transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path
                d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
              ></path>
            </svg>
            Curtir
          </button>
          <button
            class="flex items-center gap-2 text-gray-400 hover:text-blue-400 py-1 px-2 rounded hover:bg-[#3e4043] transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path
                d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"
              ></path>
            </svg>
            Comentar
          </button>
          <button
            class="flex items-center gap-2 text-gray-400 hover:text-green-400 py-1 px-2 rounded hover:bg-[#3e4043] transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <circle cx="18" cy="5" r="3"></circle>
              <circle cx="6" cy="12" r="3"></circle>
              <circle cx="18" cy="19" r="3"></circle>
              <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
              <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
            </svg>
            Compartilhar
          </button>
        </div>
        <span class="text-sm text-gray-500">12 curtidas</span>
      </div>
    </div>
  </div>
</template>
