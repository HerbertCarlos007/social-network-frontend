<script setup>
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { faComment } from "@fortawesome/free-solid-svg-icons";
import { faShare } from "@fortawesome/free-solid-svg-icons";
import { ref, onMounted } from "vue";
import postService from "../services/postService";
import commentService from "../services/commentService";

const posts = ref([]);
const postById = ref({});

const content = ref("");
const file = ref(null);
const postId = ref(0);
const commentContent = ref("");

const showModal = ref(false);

onMounted(async () => {
  getAllPosts();
});

const getAllPosts = async () => {
  try {
    const response = await postService.getAllPosts();
    posts.value = response.data.data;
  } catch (error) {
    console.error("Erro ao buscar posts:", error);
  }
};

const handleFileChange = (event) => {
  const target = event.target;
  if (target.files && target.files.length > 0) {
    file.value = target.files[0];
  }
};

const createPost = async () => {
  if (!file.value) return;

  const formData = new FormData();
  formData.append("content", content.value);
  formData.append("image_post_url", file.value);

  try {
    const response = await postService.createPost(formData);
    await getAllPosts();

    content.value = "";
  } catch (error) {
    console.error(error);
  }
};

const toggleLike = async (postId) => {
  try {
    await postService.likePost(postId);
    await getAllPosts();
  } catch (error) {
    console.error(error);
  }
};

const openModal = async (id) => {
  postId.value = id;
  postById.value = {};
  await getPostById();
  showModal.value = true;
};


const closeModal = () => {
  showModal.value = false;
};

const createComment = async () => {
  try {
    await commentService.createComment(postId.value, commentContent.value);
    commentContent.value = "";
    await getPostById();
  } catch (error) {
    console.error(error);
  }
};

const getPostById = async () => {
  try {
    const response = await postService.getPostById(postId.value);
    postById.value = response.data;
  } catch (error) {
    console.error(error);
  }
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
          class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1.5 rounded-md flex items-center gap-2 transition cursor-pointer"
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
            @click="toggleLike(post.id)"
            :class="[
              'flex items-center gap-2 py-1 px-2 rounded transition',
              post.liked_by_user
                ? 'text-red-400 hover:text-red-600 hover:bg-[#3e4043]'
                : 'text-gray-400 hover:text-red-400 hover:bg-[#3e4043]',
            ]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              :stroke="post.liked_by_user ? 'red' : 'currentColor'"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path
                d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
                :fill="post.liked_by_user ? 'red' : 'none'"
              ></path>
            </svg>
            Curtir
          </button>

          <button
            @click="openModal(post.id)"
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
        <span class="text-sm text-gray-500"
          >{{ post.count_likes }} curtidas</span
        >
      </div>
    </div>
  </div>

  <div
    v-if="showModal"
    class="fixed inset-0 bg-black/50 flex justify-center items-center z-50"
  >
    <div
      v-for="post in postById"
      :key="post.id"
      class="bg-[#242526] w-full max-w-lg mx-4 rounded-lg relative max-h-[90vh] overflow-hidden"
    >
      <!-- Header -->
      <div
        class="flex items-center justify-between p-4 border-b border-gray-600"
      >
        <h2 class="text-white text-xl font-semibold">
          Post de {{ post.name }}
        </h2>
        <button
          @click="closeModal()"
          class="text-gray-400 hover:text-white text-2xl w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-700"
        >
          &times;
        </button>
      </div>

      <!-- Content Area -->
      <div class="overflow-y-auto max-h-[calc(90vh-120px)]">
        <!-- Post Header -->
        <div class="p-4">
          <div class="flex items-center gap-3 mb-4">
            <img
              class="w-10 h-10 rounded-full"
              :src="post.avatar_url"
              alt="Herbert Carlos"
            />
            <div>
              <div class="text-white font-semibold text-sm">
                {{ post.name }}
              </div>
              <div class="text-gray-400 text-xs">27 de junho</div>
            </div>
          </div>

          <!-- Post Content -->
          <div class="mb-4">
            <p class="text-white text-sm mb-3">{{ post.content }}</p>
            <img
              class="w-full rounded-lg"
              :src="post.image_post_url"
              alt="Post image"
            />
          </div>

          <!-- Engagement Stats -->
          <div class="flex items-center justify-between py-2 px-1">
            <div class="flex items-center gap-2">
              <div class="flex items-center gap-1">
                <div
                  class="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center"
                >
                  <svg
                    class="w-3 h-3 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z"
                    />
                  </svg>
                </div>
                <span class="text-gray-300 text-sm">4 mil</span>
              </div>
            </div>
            <div class="flex items-center gap-4 text-gray-300 text-sm">
              <span class="hover:underline cursor-pointer"
                >129 comentários</span
              >
              <span class="hover:underline cursor-pointer"
                >129 compartilhamentos</span
              >
            </div>
          </div>

          <!-- Divider -->
          <div class="border-t border-gray-600 my-2"></div>

          <!-- Action Buttons -->
          <div class="flex items-center justify-around py-2">
            <button
              class="flex items-center justify-center gap-2 py-2 px-4 rounded-lg hover:bg-gray-700 text-gray-300 hover:text-white transition-colors flex-1"
            >
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path
                  d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z"
                />
              </svg>
              <span class="text-sm font-medium">Curtir</span>
            </button>

            <button
              class="flex items-center justify-center gap-2 py-2 px-4 rounded-lg hover:bg-gray-700 text-gray-300 hover:text-white transition-colors flex-1"
            >
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fill-rule="evenodd"
                  d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
                  clip-rule="evenodd"
                />
              </svg>
              <span class="text-sm font-medium">Comentar</span>
            </button>

            <button
              class="flex items-center justify-center gap-2 py-2 px-4 rounded-lg hover:bg-gray-700 text-gray-300 hover:text-white transition-colors flex-1"
            >
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path
                  d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z"
                />
              </svg>
              <span class="text-sm font-medium">Compartilhar</span>
            </button>
          </div>

          <!-- Divider -->
          <div class="border-t border-gray-600 my-2"></div>

          <!-- Comments Section -->
          <div class="space-y-3">
            <div
              v-for="(comment, index) in post.comments"
              :key="index"
              class="flex gap-2"
            >
              <img
                class="w-8 h-8 rounded-full"
                :src="comment.user.avatar_url"
                alt="User"
              />
              <div class="flex-1">
                <div class="bg-gray-700 rounded-2xl px-3 py-2">
                  <div class="text-white font-semibold text-sm">
                    {{ comment.user.name }} 
                  </div>
                  <div class="text-white text-sm">{{ comment.content }}</div>
                </div>
                <div class="flex items-center gap-4 mt-1 ml-3">
                  <span class="text-gray-400 text-xs">1 d</span>
                  <button class="text-gray-400 text-xs hover:underline">
                    Curtir
                  </button>
                  <button class="text-gray-400 text-xs hover:underline">
                    Responder
                  </button>
                  <button class="text-gray-400 text-xs hover:underline">
                    Compartilhar
                  </button>
                </div>
              </div>
            </div>

            <!-- Comment Input -->
            <div class="flex gap-2 mt-4">
              <img
                class="w-8 h-8 rounded-full"
                src="https://cdn.motor1.com/images/mgl/W81RXg/s1/honda-civic-sedan-e-hev-2023.webp"
                alt="You"
              />
              <div class="flex-1 flex gap-2">
                <input
                  v-model="commentContent"
                  type="text"
                  placeholder="Escreva um comentário público..."
                  class="flex-1 bg-gray-700 text-white rounded-full px-4 py-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  @click="createComment()"
                  class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  :disabled="!commentContent || commentContent.trim() === ''"
                >
                  Enviar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
