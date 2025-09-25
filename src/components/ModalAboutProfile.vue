<script setup>
defineProps({
  showModal: {
    type: Boolean,
    required: true
  }
})

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
          <input type="text" class="w-full bg-[#2e3033] text-white rounded-md p-2 focus:outline-none" value="Desenvolvedor Full Stack JAVA"/>
        </div>

        <div>
          <label class="text-sm text-gray-300">Empresa</label>
          <input type="text" class="w-full bg-[#2e3033] text-white rounded-md p-2 focus:outline-none" value="Deltavoxx"/>
        </div>

        <div>
          <label class="text-sm text-gray-300">Educação</label>
          <input type="text" class="w-full bg-[#2e3033] text-white rounded-md p-2 focus:outline-none" value="uninove"/>
        </div>

        <div>
          <label class="text-sm text-gray-300">Localização</label>
          <input type="text" class="w-full bg-[#2e3033] text-white rounded-md p-2 focus:outline-none" value="Santana"/>
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
        <button 
          class="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          Salvar Alterações
        </button>
      </div>
    </div>
  </div>
</template>
