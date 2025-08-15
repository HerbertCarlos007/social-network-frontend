<script setup>
import AboutProfileComponent from "./AboutProfileComponent.vue";
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

    <AboutProfileComponent></AboutProfileComponent>
  </div>
</template>

<style scoped></style>
