<script setup></script>

<template>
  <div class="w-[310px] bg-[#2e3033] ml-20 p-4 rounded-lg shadow-lg mt-5">
    <!-- Cabeçalho Amigos -->
    <div class="flex justify-between items-center">
      <span class="text-white font-semibold">Amigos</span>
      <span class="text-blue-400 text-sm cursor-pointer hover:underline">Ver todos</span>
    </div>
    
    <!-- Contagem de amigos -->
    <span class="text-gray-400 text-sm">1.234 amigos</span>
    
    <!-- Grid de amigos (3 colunas) -->
    <div class="grid grid-cols-3 gap-1 mt-3">
      <div class="flex flex-col">
        <img
          src="https://randomuser.me/api/portraits/women/44.jpg"
          class="aspect-square object-cover rounded-sm w-full h-full"
          alt="Amigo"
        />
        <span class="text-white text-xs mt-1 truncate">María Sant...</span>
        <span class="text-gray-400 text-xs">12 amigos</span>
      </div>
      
      <div class="flex flex-col">
        <img
          src="https://randomuser.me/api/portraits/men/32.jpg"
          class="aspect-square object-cover rounded-sm w-full h-full"
          alt="Amigo"
        />
        <span class="text-white text-xs mt-1 truncate">Pedro Lima</span>
        <span class="text-gray-400 text-xs">8 amigos</span>
      </div>
      
      <div class="flex flex-col">
        <img
          src="https://randomuser.me/api/portraits/women/65.jpg"
          class="aspect-square object-cover rounded-sm w-full h-full"
          alt="Amigo"
        />
        <span class="text-white text-xs mt-1 truncate">Ana Costa</span>
        <span class="text-gray-400 text-xs">15 amigos</span>
      </div>
      
      <div class="flex flex-col mt-2">
        <img
          src="https://randomuser.me/api/portraits/men/75.jpg"
          class="aspect-square object-cover rounded-sm w-full h-full"
          alt="Amigo"
        />
        <span class="text-white text-xs mt-1 truncate">Carlos Silva</span>
        <span class="text-gray-400 text-xs">6 amigos</span>
      </div>
      
      <div class="flex flex-col mt-2">
        <img
          src="https://randomuser.me/api/portraits/women/33.jpg"
          class="aspect-square object-cover rounded-sm w-full h-full"
          alt="Amigo"
        />
        <span class="text-white text-xs mt-1 truncate">Julia Menci...</span>
        <span class="text-gray-400 text-xs">9 amigos</span>
      </div>
      
      <div class="flex flex-col mt-2">
        <img
          src="https://randomuser.me/api/portraits/men/55.jpg"
          class="aspect-square object-cover rounded-sm w-full h-full"
          alt="Amigo"
        />
        <span class="text-white text-xs mt-1 truncate">Roberto AL...</span>
        <span class="text-gray-400 text-xs">4 amigos</span>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
