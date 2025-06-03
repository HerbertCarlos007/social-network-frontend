<script setup>
import { reactive, ref } from 'vue'
import login from '../services/userService'

const loginForm = reactive({
    email: '',
    password: ''
})
const errorMessage = ref('')

async function handleLogin(e) {
  e.preventDefault()
  errorMessage.value = ''

  try {
    const response = await login(loginForm)
     localStorage.setItem('token', response.data.access_token)

  } catch (error) {
    errorMessage.value = error.response?.data?.message || 'Erro no login'
  }
}
</script>

<template>
  <div class="h-screen w-screen flex items-center justify-center bg-gradient-to-br from-purple-600 to-indigo-700 px-4">
    <div class="max-w-md w-full bg-white rounded-lg shadow-xl p-8">
      <h2 class="text-3xl font-bold text-center text-gray-800 mb-6">Entrar na Rede Social</h2>
      
      <form class="space-y-6" @submit="handleLogin">
        <div>
          <label for="email" class="block text-gray-700 font-medium mb-2">E-mail</label>
          <input
            v-model="loginForm.email"
            type="email"
            id="email"
            placeholder="seu@email.com"
            class="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        
        <div>
          <label for="password" class="block text-gray-700 font-medium mb-2">Senha</label>
          <input
            v-model="loginForm.password"
            type="password"
            id="password"
            placeholder="********"
            class="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <p v-if="errorMessage" class="text-red-600 font-semibold">{{ errorMessage }}</p>
        
        <button
          type="submit"
          class="w-full bg-indigo-600 text-white font-semibold py-3 rounded-md hover:bg-indigo-700 transition"
        >
          Entrar
        </button>
      </form>
      
      <p class="mt-6 text-center text-gray-600">
        Não tem uma conta?
        <a href="#" class="text-indigo-600 font-semibold hover:underline">Cadastre-se</a>
      </p>
    </div>
  </div>
</template>
