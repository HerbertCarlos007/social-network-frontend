<script setup>
import { ref, onMounted } from "vue";
import friendshipService from "../services/friendshipService";

const friendshipsRequest = ref([]);
const friends = ref([]);
const nonFriends = ref([]);
const activeTab = ref("pedidos");

onMounted(async () => {
  getAllFriendShipRequest();
});

const getAllFriends = async () => {
  try {
    const response = await friendshipService.getAllFriends();
    friends.value = response;
  } catch (error) {}
};

const getNonFriends = async () => {
  try {
    const response = await friendshipService.getNonFriends();
    nonFriends.value = response;
  } catch (error) {
    console.error("Erro ao buscar pessoas:", error);
  }
};

const getAllFriendShipRequest = async () => {
  try {
    const response = await friendshipService.getAllFriendshipRequest();
    friendshipsRequest.value = response;
  } catch (error) {
    console.error("Erro ao buscar pedidos de amizades:", error);
  }
};

const changeTab = (tab) => {
  activeTab.value = tab;

  switch (activeTab.value) {
    case "pedidos":
      getAllFriendShipRequest();
      break;
    case "amizades":
      getAllFriends();
      break;
    case "pessoas":
      getNonFriends();
      break;
    default:
      getAllFriendShipRequest();
  }
};

const requestFriendship = async (id) => {
  try {
    await friendshipService.requestFriendship(id);
    getNonFriends();
  } catch (error) {
    console.error("Erro ao enviar pedido de amizade:", error);
  }
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

const deleteFriend = async (id) => {
  try {
    await friendshipService.deleteFriend(id);
    getAllFriends();
  } catch (error) {
    console.error(error);
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
                  v-for="friendship in friendshipsRequest"
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
                <div
                  v-if="friendshipsRequest.length === 0"
                  class="text-center text-white py-10"
                >
                  Nenhum pedido de amizade encontrado.
                </div>
              </div>
            </div>
          </div>

          <div v-if="activeTab === 'amizades'" class="mt-4">
            <div
              v-for="friend in friends"
              :key="friend.id"
              class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
            >
              <div
                class="bg-[#3a3a3a] border border-[#4a4a4a] text-white flex flex-col items-center p-4 rounded-lg shadow-md"
              >
                <div
                  class="w-20 h-20 mb-4 border-2 border-blue-500 rounded-full overflow-hidden flex items-center justify-center"
                >
                  <img
                    :src="friend.user.avatar_url"
                    alt="Avatar de João Silva"
                    class="w-full h-full object-cover"
                  />
                </div>
                <h3 class="text-xl font-semibold mb-1">
                  {{ friend.user.name }}
                </h3>
                <div class="flex gap-2">
                  <button
                    class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white bg-transparent h-10 px-4 py-2"
                  >
                    Ver Perfil
                  </button>
                  <button
                    @click="deleteFriend(friend.user.id)"
                    class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-red-600 text-white hover:bg-red-700 h-10 px-4 py-2"
                  >
                    Remover
                  </button>
                </div>
              </div>
            </div>
            <div
              v-if="friends.length === 0"
              class="text-center text-white py-10"
            >
              Nenhuma amizade encontrada .
            </div>
          </div>

          <div v-if="activeTab === 'pessoas'" class="mt-4">
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <div
                v-for="nonFriend in nonFriends"
                :key="nonFriend.id"
                class="bg-[#3a3a3a] border border-[#4a4a4a] text-white flex flex-col items-center p-4 rounded-lg shadow-md"
              >
                <div
                  class="w-20 h-20 mb-4 border-2 border-blue-500 rounded-full overflow-hidden flex items-center justify-center"
                >
                  <img
                    :src="nonFriend.avatar_url"
                    alt="Avatar"
                    class="w-full h-full object-cover"
                  />
                </div>
                <h3 class="text-xl font-semibold mb-1">
                  {{ nonFriend.name }}
                </h3>
                <div class="flex gap-2">
                  <button
                    @click="requestFriendship(nonFriend.id)"
                    class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white bg-transparent h-10 px-4 py-2"
                  >
                    Adicionar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
