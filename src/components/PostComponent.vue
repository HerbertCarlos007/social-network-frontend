<script setup>
import { faImage } from '@fortawesome/free-solid-svg-icons'
const faImageIcon = faImage
</script>

<template>
  <div class="w-full h-screen flex justify-center bg-[#1c1e21]"> 
    <div class="w-[550px] h-32 bg-[#2e3033] rounded-lg mt-5 shadow-lg">

      <div class="flex gap-3.5 p-3.5 items-center ">
        <div>
          <img class="w-16 h-16 rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP6dAmZvF5keJskLHMoTNuKK30HfA-iVV50Q&s" alt="avatar">
        </div>
        <div class="flex-1 p-2 cursor-pointer rounded-lg bg-[#5a5c5f] text-white">
          No que você está pensando, Bill?
        </div>
      </div>

      <div class="flex justify-end px-4 text-white">
        <font-awesome-icon :icon="faImage" class="text-2xl cursor-pointer" />
      </div>
       
    </div>
  </div>
</template>
