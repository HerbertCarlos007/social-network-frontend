<script setup>
import { ref, onMounted, reactive } from "vue";
import aboutMeService from "../services/aboutMeService";
import ModalAboutProfile from "./ModalAboutProfile.vue";
import { isLoading } from "../stores/loadingStore";

const aboutMe = ref(null);
const isOpen = ref(false);
const selectedUserId = ref(null);

const getAboutMe = async () => {
  try {
    const response = await aboutMeService.getAboutMe();
    aboutMe.value = response.data.data;
  } catch (error) {
    console.error("Erro ao buscar posts:", error);
  }
};

function openModal(userId) {
  selectedUserId.value = userId;
  isOpen.value = true;
}

onMounted(async () => {
  getAboutMe();
});
</script>

<template>
  <div
    v-if="isLoading"
    class="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black opacity-80"
  >
    <div class="flex flex-col items-center">
      <div
        class="w-12 h-12 border-4 border-t-transparent border-white rounded-full animate-spin"
      ></div>
      <p class="mt-4 text-white font-semibold">Carregando...</p>
    </div>
  </div>

  <div class="w-[310px] bg-[#2e3033] ml-20 p-4 rounded-lg shadow-lg">
    <span class="text-white">Sobre</span>

    <div class="flex flex-col gap-2 mt-4 text-white">
      <span>{{ aboutMe?.about }}</span>
      <span>Trabalha na {{ aboutMe?.works_at }}</span>
      <span>Estudou na {{ aboutMe?.studied_at }}</span>
      <span>Mora em {{ aboutMe?.lives_in }}</span>
    </div>

    <div class="flex justify-center mt-6">
      <button
        @click="openModal(aboutMe?.user_id)"
        class="border-none rounded-lg p-4 text-white bg-[#1f2732] cursor-pointer"
      >
        Editar detalhes
      </button>
    </div>

    <ModalAboutProfile v-model:show-modal="isOpen" :user-id="selectedUserId" />
  </div>
</template>

<style scoped></style>
