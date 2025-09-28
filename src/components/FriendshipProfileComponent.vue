<script setup>
import { ref, onMounted } from "vue";
import friendshipService from "../services/friendshipService";

const friends = ref([]);

onMounted(async () => {
  getAllFriends();
});

const getAllFriends = async () => {
  try {
    const response = await friendshipService.getAllFriends();
    friends.value = response;
  } catch (error) {}
};
</script>

<template>
  <div class="w-[310px] bg-[#2e3033] ml-20 p-4 rounded-lg shadow-lg mt-5">
    <!-- Cabeçalho Amigos -->
    <div class="flex justify-between items-center">
      <span class="text-white font-semibold">Amigos</span>
      <span class="text-blue-400 text-sm cursor-pointer hover:underline"
        >Ver todos</span
      >
    </div>

    <!-- Contagem de amigos -->
    <span class="text-gray-400 text-sm">1.234 amigos</span>

    <!-- Grid de amigos (3 colunas) -->
    <div class="grid grid-cols-3 gap-1 mt-3">
      <div v-for="friend in friends" :key="friend.id" class="flex flex-col">
        <img
          :src="friend.avatar_url"
          class="aspect-square object-cover rounded-sm w-full h-full"
          alt="Amigo"
        />
        <span class="text-white text-xs mt-1 truncate">{{ friend.name }}</span>
        <span class="text-gray-400 text-xs">12 amigos</span>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
