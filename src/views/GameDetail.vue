<script setup>
import { useRoute } from 'vue-router';
import { faker } from '@faker-js/faker';

const route = useRoute();
const gameId = route.params.id;

// Generate game details
const gameName = gameId.replace(/-/g, ' ').toUpperCase();
const releaseDate = faker.date.past(20).toLocaleDateString();
const gameGenres = ['Role-playing', 'Puzzle', 'Racing', 'Shooter'];
const gameGenre = gameGenres[Math.floor(Math.random() * gameGenres.length)];
const starRating = Math.floor(Math.random() * 5) + 1;
const gameImage = faker.image.urlLoremFlickr({ category: 'video games', width: 600, height: 400 });
const gameDescription = faker.lorem.paragraphs(2);
const releaseHistory = faker.lorem.sentences(3);
</script>

<template>
  <div class="max-w-4xl mx-auto p-8 bg-white rounded-lg shadow-lg mt-10">
    <img :src="gameImage" alt="Game Cover" class="rounded-lg w-full mb-6" />
    <h1 class="text-4xl font-bold mb-2">{{ gameName }}</h1>
    <p class="text-gray-600">Genre: {{ gameGenre }}</p>
    <p class="text-gray-600">Release Date: {{ releaseDate }}</p>
    <div class="flex items-center mt-3">
      <span v-for="star in starRating" :key="star" class="text-yellow-500 text-xl">★</span>
    </div>
    <p class="mt-4 text-gray-800">{{ gameDescription }}</p>
    <h2 class="text-2xl font-semibold mt-6">Release History</h2>
    <p class="text-gray-700">{{ releaseHistory }}</p>
  </div>
</template>
