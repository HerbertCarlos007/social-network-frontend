<script setup>
import { ref, onMounted, reactive } from "vue";
import aboutMeService from "../services/aboutMeService";

const aboutMe = ref(null);

const aboutMeForm = reactive({
  about: "",
  works_at: "",
  studied_at: "",
  lives_in: "",
});

const createAboutMe = async () => {
  try {
    await aboutMeService.createAboutMe(aboutMeForm);
  } catch (error) {
    console.error("Erro ao buscar posts:", error);
  }
};

const getAboutMe = async () => {
  try {
    const response = await aboutMeService.getAboutMe();
    aboutMe.value = response.data.data;
  } catch (error) {
    console.error("Erro ao buscar posts:", error);
  }
};

onMounted(async () => {
  getAboutMe()
});

</script>

<template>
  <div class="w-[310px] bg-[#2e3033] ml-20 p-4 rounded-lg shadow-lg">
    <span class="text-white">Sobre</span>

    <div class="flex flex-col gap-2 mt-4 text-white">
      <span
        >{{ aboutMe?.about }}</span
      >
      <span>Trabalha na {{ aboutMe?.works_at }}</span>
      <span>Estudou na {{ aboutMe?.studied_at }}</span>
      <span>Mora em {{ aboutMe?.lives_in }}</span>
    </div>

    <div class="flex justify-center mt-6">
      <button class="border-none rounded-lg p-4 text-white bg-[#1f2732] cursor-pointer">
        Editar detalhes
      </button>
    </div>
  </div>
</template>

<style scoped></style>
