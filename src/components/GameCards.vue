<script setup>
import GameCardSingle from './GameCardSingle.vue';
</script>

<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-8">
    <GameCardSingle v-for="game in 20" :key="game" />
  </div>
</template>
