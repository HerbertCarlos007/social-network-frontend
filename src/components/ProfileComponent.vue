<script setup>
import AboutProfileComponent from "./AboutProfileComponent.vue";
import PhotoProfileComponent from "./PhotoProfileComponent.vue";
import FriendshipProfileComponent from "./FriendshipProfileComponent.vue";
</script>

<template>
  <div class="w-full min-h-screen overflow-y-auto pb-8">
    <header class="w-full h-80">
      <img
        class="w-full h-full object-cover"
        src="https://i.pinimg.com/736x/c7/6f/e5/c76fe575d9ee46448dcbedb88d186093.jpg"
        alt=""
      />
    </header>

    <div class="flex justify-between items-center">
      <section class="flex items-center justify-center w-1/3 gap-4">
        <img
          class="w-32 h-32 rounded-full border-4 border-white relative bottom-10"
          src="https://wallpapers.com/images/hd/awesome-pictures-k287z98ruunquo28.jpg"
          alt=""
        />
        <span class="text-white text-lg font-semibold">200 amigos</span>
      </section>

      <section class="flex items-center justify-center w-1/3 gap-4">
        <button class="border-none rounded-lg p-4 bg-blue-600 cursor-pointer">
          Adicionar aos amigos
        </button>
        <button
          class="border-none rounded-lg p-4 bg-[#1f2732] text-white cursor-pointer shadow-lg"
        >
          Mensagem
        </button>
      </section>
    </div>

    <div class="flex gap-5 items-start">
      <div class="w-1/4">
        <AboutProfileComponent></AboutProfileComponent>
        <PhotoProfileComponent></PhotoProfileComponent>
        <FriendshipProfileComponent></FriendshipProfileComponent>
      </div>

      <div class="w-[60%] ml-30">
        <div
          class="text-xl h-32 bg-[#2e3033] r ounded-lg font-semibold text-white mb-4 flex items-center px-4 rounded-lg shadow-lg"
        >
          <div class="flex items-center gap-4 w-full">
            <img
              class="h-10 w-10 rounded-full"
              src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
            />
            <div class="bg-gray-600 w-full rounded-lg p-5">
              No que você está pensando, João?
            </div>
          </div>
        </div>

        <div class="bg-[#2e3033] p-6 rounded-lg shadow-lg">
          <div class="flex items-center gap-2 mb-4">
            <div class="w-10 h-10 rounded-full bg-gray-500"></div>
            <div>
              <p class="text-white font-medium">João Silva</p>
              <p class="text-gray-400 text-sm">há 2 semanas</p>
            </div>
          </div>

          <p class="text-white mb-4">Trabalhando em um novo projeto com PHP!</p>

          <div class="border-t border-gray-600 my-4"></div>

          <img
            src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
            alt="Imagem do projeto PHP"
            class="w-full h-1/6 rounded-lg object-cover"
          />

          <div class="h-px bg-[#3e4043] my-3"></div>

          <div class="w-full flex items-center justify-between text-gray-400">
            <section class="flex items-center gap-2 cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path
                  d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
                ></path>
              </svg>
              <span class="text-white">Curtir</span>
            </section>

            <section class="flex items-center gap-2 cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path
                  d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"
                ></path>
              </svg>
              <span class="text-white">Comentar</span>
            </section>

            <section class="flex items-center gap-2 cursor-pointer">
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
              <span class="text-white"> Compartilhar</span>
            </section>

            <section class="flex items-center gap-2">15 curtidas</section>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
