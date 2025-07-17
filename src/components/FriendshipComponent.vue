<script setup>
import { ref, onMounted } from "vue";
import friendshipService from "../services/friendshipService";

const friendships = ref([]);
const activeTab = ref("pedidos");

onMounted(async () => {
  getAllFriendShipRequest();
});

const getAllFriendShipRequest = async () => {
  try {
    const response = await friendshipService.getAllFriendshipRequest();
    friendships.value = response;
  } catch (error) {
    console.error("Erro ao buscar pedidos de amizades:", error);
  }
};

const changeTab = (tab) => {
  activeTab.value = tab;
};
const acceptFriendRequest = async (id) => {
  try {
    await friendshipService.acceptFriendRequest(id);
    getAllFriendShipRequest();
  } catch (error) {
    console.error(error);
  }
};

const rejectFriendRequest = async (id) => {
  try {
    await friendshipService.rejectFriendRequest(id);
    getAllFriendShipRequest();
  } catch (error) {
    console.log(error);
  }
};
</script>

<template>
  <div
    class="flex min-h-screen w-full justify-center bg-[#1a1a1a] p-4 text-white md:p-8"
  >
    <div
      class="w-full max-w-3xl rounded-lg border border-[#2a2a2a] bg-[#1a1a1a] shadow-lg"
    >
      <div class="border-b border-[#2a2a2a] p-4">
        <h2 class="text-xl font-bold">Amigos</h2>
        <p class="text-gray-400">
          Gerencie seus pedidos de amizade e encontre novas pessoas.
        </p>
      </div>
      <div class="p-4">
        <div class="w-full">
          <div class="grid w-full grid-cols-3 rounded-lg bg-[#2a2a2a] p-1">
            <button
              @click="changeTab('pedidos')"
              :class="
                activeTab === 'pedidos'
                  ? 'bg-blue-600 text-white'
                  : 'text-white hover:bg-[#3a3a3a]'
              "
              class="rounded-md px-4 py-2"
            >
              Pedidos de Amizade
            </button>
            <button
              @click="changeTab('amizades')"
              :class="
                activeTab === 'amizades'
                  ? 'bg-blue-600 text-white'
                  : 'text-white hover:bg-[#3a3a3a]'
              "
              class="rounded-md px-4 py-2"
            >
              Minhas Amizades
            </button>
            <button
              @click="changeTab('pessoas')"
              :class="
                activeTab === 'pessoas'
                  ? 'bg-blue-600 text-white'
                  : 'text-white hover:bg-[#3a3a3a]'
              "
              class="rounded-md px-4 py-2"
            >
              Pessoas para Adicionar
            </button>
          </div>

          <div v-if="activeTab === 'pedidos'" class="mt-4">
            <div class="h-[calc(100vh-250px)] overflow-y-auto pr-4">
              <div class="space-y-4">
                <div
                  v-for="friendship in friendships"
                  :key="friendship.id"
                  class="flex items-center justify-between rounded-lg border border-[#2a2a2a] bg-[#2a2a2a] p-3"
                >
                  <div class="flex items-center gap-3">
                    <div class="h-10 w-10 overflow-hidden rounded-full">
                      <img
                        :src="
                          friendship.user.avatar_url ||
                          'https://via.placeholder.com/150'
                        "
                        alt="User Avatar"
                        class="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <p class="font-semibold">{{ friendship.user.name }}</p>
                      <p class="text-sm text-gray-400">
                        Enviou um pedido de amizade
                      </p>
                    </div>
                  </div>
                  <div class="flex gap-2">
                    <button
                      @click="acceptFriendRequest(friendship.user.id)"
                      class="rounded-lg bg-blue-600 px-3 py-1.5 text-white hover:bg-blue-700"
                    >
                      Aceitar
                    </button>
                    <button
                      @click="rejectFriendRequest(friendship.user.id)"
                      class="rounded-lg border border-gray-500 bg-transparent px-3 py-1.5 text-gray-300 hover:bg-gray-700"
                    >
                      Recusar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div v-if="activeTab === 'amizades'" class="mt-4">
            <div class="text-center text-gray-400 py-10">
              <p>Você ainda não tem amizades exibidas aqui.</p>
            </div>
          </div>

          <div v-if="activeTab === 'pessoas'" class="mt-4">
            <div class="text-center text-gray-400 py-10">
              <p>Nenhuma sugestão de amizade no momento.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
