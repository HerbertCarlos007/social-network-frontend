<script setup>
import { watch, reactive, ref } from 'vue';
import aboutMeService from "../services/aboutMeService";

const aboutMe = ref(null);

const props = defineProps({
  showModal: {
    type: Boolean,
    required: true
  },
  userId: {
    type: [Number, String],
    required: false
  }
})


const aboutMeForm = reactive({
  about: "",
  works_at: "",
  studied_at: "",
  lives_in: "",
});

const getAboutMe = async () => {
  try {
    const response = await aboutMeService.getAboutMe();
    aboutMe.value = response.data.data;
    if (aboutMe.value) {
      aboutMeForm.about = aboutMe.value.about;
      aboutMeForm.works_at = aboutMe.value.works_at;
      aboutMeForm.studied_at = aboutMe.value.studied_at;
      aboutMeForm.lives_in = aboutMe.value.lives_in;
    }
  } catch (error) {
    console.error("Erro ao buscar dados:", error);
  }
};

const createAboutMe = async () => {
  try {
    await aboutMeService.createAboutMe(aboutMeForm);
  } catch (error) {
    console.error("Erro ao buscar posts:", error);
  }
};

const updateAboutMe = async () => {
  try {
    await aboutMeService.updateAboutMe(props.userId, aboutMeForm);
  } catch (error) {
    console.error("Erro ao buscar posts:", error);
  }
};

const handleSave = async () => {
  if (aboutMe.value) {
    await updateAboutMe();
  } else {
    await createAboutMe();
  }
  emit('update:showModal', false);
};


watch(
  () => props.showModal,
  async (isOpen) => {
    if (isOpen) {
      if (!aboutMe.value) {
        await getAboutMe();
      }
      if (aboutMe.value) {
        aboutMeForm.about = aboutMe.value.about;
        aboutMeForm.works_at = aboutMe.value.works_at;
        aboutMeForm.studied_at = aboutMe.value.studied_at;
        aboutMeForm.lives_in = aboutMe.value.lives_in;
      }
    }
  }
);

defineEmits(['update:showModal'])


</script>

<template>
  <div v-if="showModal" class="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50">
    <div class="bg-[#1f2732] rounded-lg shadow-lg w-[500px] p-6 relative">
      
      <!-- Botão Fechar -->
      <button 
        @click="$emit('update:showModal', false)" 
        class="absolute top-3 right-3 text-gray-400 hover:text-white"
      >
        ✕
      </button>

      <!-- Título -->
      <h2 class="text-xl font-semibold text-white mb-6">Editar Detalhes do Perfil</h2>

      <!-- Inputs -->
      <div class="flex flex-col gap-4">

        <div>
          <label class="text-sm text-gray-300">Descrição</label>
          <input type="text" class="w-full bg-[#2e3033] text-white rounded-md p-2 focus:outline-none" v-model="aboutMeForm.about"/>
        </div>

        <div>
          <label class="text-sm text-gray-300">Empresa</label>
          <input type="text" class="w-full bg-[#2e3033] text-white rounded-md p-2 focus:outline-none" v-model="aboutMeForm.works_at"/>
        </div>

        <div>
          <label class="text-sm text-gray-300">Educação</label>
          <input type="text" class="w-full bg-[#2e3033] text-white rounded-md p-2 focus:outline-none" v-model="aboutMeForm.studied_at"/>
        </div>

        <div>
          <label class="text-sm text-gray-300">Localização</label>
          <input type="text" class="w-full bg-[#2e3033] text-white rounded-md p-2 focus:outline-none" v-model="aboutMeForm.lives_in"/>
        </div>
      </div>

      <!-- Botões -->
      <div class="flex justify-end gap-3 mt-6">
        <button 
          @click="$emit('update:showModal', false)" 
          class="px-4 py-2 bg-[#2e3033] text-gray-300 rounded-md hover:bg-[#3b3d42]"
        >
          Cancelar
        </button>
        <button @click="handleSave()"
          class="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          Salvar Alterações
        </button>
      </div>
    </div>
  </div>
</template>
