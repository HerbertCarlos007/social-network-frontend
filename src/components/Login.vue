<script setup>
import { reactive, ref } from "vue";
import userService from "../services/userService";
import { useRouter } from "vue-router";
import { isLoading } from "../stores/loadingStore";

const showRegister = ref(false);
const router = useRouter();

const loginForm = reactive({
  email: "",
  password: "",
});

const registerForm = reactive({
  name: "",
  email: "",
  password: "",
});

const file = ref(null);

const errorMessage = ref("");
const registerErrorMessage = ref("");

async function handleLogin(e) {
  e.preventDefault();
  errorMessage.value = "";

  try {
    const response = await userService.login(loginForm);
    localStorage.setItem("token", response.data.access_token);
    router.push("/home");
  } catch (error) {
    errorMessage.value = error.response?.data?.message || "Erro no login";
  }
}

const handleFileChange = (event) => {
  const target = event.target;
  if (target.files && target.files.length > 0) {
    file.value = target.files[0];
  }
};

async function handleRegister(e) {
  e.preventDefault();
  registerErrorMessage.value = "";

  try {
    const formData = new FormData();
    formData.append("name", registerForm.name);
    formData.append("email", registerForm.email);
    formData.append("password", registerForm.password);
    if (file.value) {
      formData.append("avatar_url", file.value); // Campo que será lido no backend
    }
    
    await userService.register(formData, { isFormData: true });
    router.push("/home");
  } catch (error) {
    registerErrorMessage.value =
      error.response?.data?.message || "Erro no cadastro";
  }
}

function toggleForm() {
  showRegister.value = !showRegister.value;
}
</script>

<template>
  <div
    class="h-screen w-screen flex items-center justify-center bg-gradient-to-br from-purple-600 to-indigo-700 px-4"
  >
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
    <div class="max-w-md w-full bg-white rounded-lg shadow-xl p-8">
      <h2 class="text-3xl font-bold text-center text-gray-800 mb-6">
        {{
          showRegister ? "Cadastre-se na Rede Social" : "Entrar na Rede Social"
        }}
      </h2>

      <form v-if="!showRegister" class="space-y-6" @submit="handleLogin">
        <div>
          <label for="email" class="block text-gray-700 font-medium mb-2"
            >E-mail</label
          >
          <input
            v-model="loginForm.email"
            type="email"
            id="email"
            placeholder="seu@email.com"
            class="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>

        <div>
          <label for="password" class="block text-gray-700 font-medium mb-2"
            >Senha</label
          >
          <input
            v-model="loginForm.password"
            type="password"
            id="password"
            placeholder="********"
            class="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
            minlength="6"
          />
        </div>

        <p v-if="errorMessage" class="text-red-600 font-semibold">
          {{ errorMessage }}
        </p>

        <button
          type="submit"
          class="w-full bg-indigo-600 text-white font-semibold py-3 rounded-md hover:bg-indigo-700 transition"
        >
          Entrar
        </button>
      </form>

      <form v-else class="space-y-6" @submit.prevent="handleRegister">
        <div>
          <label for="name" class="block text-gray-700 font-medium mb-2"
            >Nome</label
          >
          <input
            v-model="registerForm.name"
            type="text"
            id="name"
            placeholder="Seu nome"
            class="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>

        <div>
          <label
            for="email-register"
            class="block text-gray-700 font-medium mb-2"
            >E-mail</label
          >
          <input
            v-model="registerForm.email"
            type="email"
            id="email-register"
            placeholder="seu@email.com"
            class="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>

        <div>
          <label for="avatar" class="block text-gray-700 font-medium mb-2">
            Avatar (imagem)
          </label>
          <input
            @change="handleFileChange"
            type="file"
            id="avatar"
            accept="image/*"
            class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div>
          <label
            for="password-register"
            class="block text-gray-700 font-medium mb-2"
            >Senha</label
          >
          <input
            v-model="registerForm.password"
            type="password"
            id="password-register"
            placeholder="********"
            class="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
            minlength="6"
          />
        </div>

        <p v-if="registerErrorMessage" class="text-red-600 font-semibold">
          {{ registerErrorMessage }}
        </p>

        <button
          type="submit"
          class="w-full bg-indigo-600 text-white font-semibold py-3 rounded-md hover:bg-indigo-700 transition"
        >
          Cadastrar
        </button>
      </form>

      <p class="mt-6 text-center text-gray-600">
        {{ showRegister ? "Já tem uma conta?" : "Não tem uma conta?" }}
        <a
          href="#"
          @click.prevent="toggleForm"
          class="text-indigo-600 font-semibold hover:underline"
        >
          {{ showRegister ? "Entrar" : "Cadastre-se" }}
        </a>
      </p>
    </div>
  </div>
</template>
