<script setup>
import { defineEmits } from "vue";

const emit = defineEmits(["selectedOption"]);

function selectOption(option) {
  emit("selectedOption", option);
}
</script>

<template>
  <div class="flex h-screen bg-[#1c1e21]">
    <!-- Sidebar melhorada -->
    <aside
      class="w-72 bg-[#1c1e21] text-white flex flex-col border-r border-gray-700/50 shadow-lg"
    >
      <div class="p-6 text-2xl font-bold text-blue-400">Logo</div>
      <nav class="flex-1 p-4 space-y-2">
        <a
          href="#"
          class="flex items-center px-4 py-3 font-medium rounded-lg hover:bg-[#2e3033] transition-colors"
          @click="selectOption('posts')"
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
            class="mr-3"
          >
            <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
            <polyline points="9 22 9 12 15 12 15 22"></polyline>
          </svg>
          Página inicial
        </a>
        <a
          href="#"
          class="flex items-center px-4 py-3 font-medium rounded-lg hover:bg-[#2e3033] transition-colors"
          @click="selectOption('messages')"
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
            class="mr-3"
          >
            <path
              d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
            ></path>
          </svg>
          Mensagens
        </a>
        <a
          href="#"
          class="flex items-center px-4 py-3 font-medium rounded-lg hover:bg-[#2e3033] transition-colors"
          @click="selectOption('notifications')"
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
            class="mr-3"
          >
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
            <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
          </svg>
          Notificações
        </a>

        <a
          href="#"
          class="flex items-center px-4 py-3 font-medium rounded-lg hover:bg-[#2e3033] transition-colors"
          @click="selectOption('friendships')"
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
            class="mr-3"
          >
            <circle cx="9" cy="7" r="4"></circle>
            <circle cx="17" cy="7" r="4"></circle>
            <path d="M1 21v-2a4 4 0 0 1 4-4h4"></path>
            <path d="M15 21v-2a4 4 0 0 1 4-4h2"></path>
          </svg>
          Amizades
        </a>

        <a
          href="#"
          class="flex items-center px-4 py-3 font-medium rounded-lg hover:bg-[#2e3033] transition-colors"
          @click="selectOption('perfil')"
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
            class="mr-3"
          >
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </svg>
          Perfil
        </a>
      </nav>
      <div class="p-4 border-t border-gray-700/50">
        <button
          class="w-full px-4 py-2 bg-red-600 text-white font-medium rounded-lg hover:bg-red-700 transition-colors flex items-center justify-center"
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
            class="mr-2"
          >
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
            <polyline points="16 17 21 12 16 7"></polyline>
            <line x1="21" y1="12" x2="9" y2="12"></line>
          </svg>
          Sair
        </button>
      </div>
    </aside>
  </div>
</template>
