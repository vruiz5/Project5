<script setup>
import GameCard from './GameCard.vue'
</script>

<template>
  <div class="p-8">
    <h1 class="text-4xl font-bold mb-4">Game Collection</h1>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      <GameCard v-for="game in 20" :key="game" />
    </div>
  </div>
</template>