<script setup>
import { ref } from "vue";
import FriendshipComponent from "../components/FriendshipComponent.vue";
import PostComponent from "../components/PostComponent.vue";
import SidebarVue from "../components/Sidebar.vue";
import Profile from "../components/ProfileComponent.vue";

const activeComponent = ref("posts");

function onOptionSelected(option) {
  activeComponent.value = option;
}
</script>

<template>
  <div class="flex h-screen bg-[#1c1e21]">
    <SidebarVue @selectedOption="onOptionSelected" />
    <PostComponent v-if="activeComponent === 'posts'" />
    <FriendshipComponent v-if="activeComponent === 'friendships'" />
    <Profile v-if="activeComponent === 'profile'" />
  </div>
</template>
