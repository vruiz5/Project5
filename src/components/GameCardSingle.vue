<script setup>
import { faker } from '@faker-js/faker';

// Generate game data
const gameTitle = faker.commerce.productName();
const genre = faker.helpers.arrayElement(['Action', 'Adventure', 'RPG', 'Strategy', 'Sports', 'Puzzle', 'Racing', 'Shooter']);
const gameDescription = faker.commerce.productDescription();
const releaseDate = faker.date.future().toLocaleDateString('en-US', {
  year: 'numeric',
  month: 'long',
  day: 'numeric'
});
const rating = faker.number.int({ min: 1, max: 5 });

const gameImage = faker.image.url({ width: 800, height: 600 });

const gameSlug = gameTitle.toLowerCase().replace(/[^a-z0-9]+/g, '-');
</script>

<template>
  <RouterLink :to="{ name: 'GameDetail', params: { id: gameSlug } }">
    <div class="border border-slate-200 rounded-lg shadow-lg bg-white h-full hover:shadow-xl transition-shadow">
      <img 
        :src="gameImage" 
        :alt="gameTitle"
        class="w-full h-48 object-cover rounded-t-lg"
      />
      <div class="p-4">
        <h2 class="text-xl font-bold text-slate-900 mb-2">{{ gameTitle }}</h2>
        <div class="flex items-center gap-2 mb-2">
          <span class="px-2 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">
            {{ genre }}
          </span>
          <span class="text-yellow-400">
            {{ '★'.repeat(rating) }}
          </span>
        </div>
        <p class="text-sm text-slate-600 mb-2">Release Date: {{ releaseDate }}</p>
        <p class="text-slate-700 text-sm line-clamp-2">{{ gameDescription }}</p>
      </div>
    </div>
  </RouterLink>
</template>