<script setup>
import { faker } from '@faker-js/faker';

const gameName = faker.commerce.productName();
const releaseDate = faker.date.past(20).toLocaleDateString();
const gameGenres = ['Role-playing', 'Puzzle', 'Racing', 'Shooter'];
const gameGenre = gameGenres[Math.floor(Math.random() * gameGenres.length)];
const starRating = Math.floor(Math.random() * 5) + 1;
const gameImage = faker.image.urlLoremFlickr({ category: 'video games', width: 300, height: 200 });
const gameDescription = faker.lorem.paragraph();
</script>

<template>
  <RouterLink :to="{ name: 'GameDetail', params: { id: gameName.replace(/\s+/g, '-').toLowerCase() } }">
    <div class="border border-gray-300 rounded-lg shadow-lg bg-gray-100 h-full">
      <img class="object-cover h-48 w-full rounded-t-lg" :src="gameImage" alt="Game Cover" />
      <div class="p-4">
        <h2 class="text-2xl font-bold">{{ gameName }}</h2>
        <p class="text-gray-600">Genre: {{ gameGenre }}</p>
        <p class="text-gray-600">Release Date: {{ releaseDate }}</p>
        <p class="text-gray-600 mt-2">{{ gameDescription }}</p>
        <div class="flex items-center mt-3">
          <span v-for="star in starRating" :key="star" class="text-yellow-500 text-lg">★</span>
        </div>
      </div>
    </div>
  </RouterLink>
</template>
