<template>
  <div class="rounded-lg bg-white p-4 shadow-lg">
    <img
      :src="gameImage"
      alt="Game Cover"
      class="h-48 w-full rounded-t-lg object-cover"
    />
    <h2 class="mt-2 text-2xl font-bold">{{ gameName }}</h2>
    <p class="text-gray-600">Genre: {{ gameGenre }}</p>
    <p class="text-gray-600">Release Date: {{ releaseDate }}</p>
    <div class="mt-2 flex items-center">
      <span
        v-for="star in starRating"
        :key="star"
        class="text-lg text-yellow-500"
        >★</span
      >
    </div>
  </div>
</template>

<script setup>
import { faker } from "@faker-js/faker";

// Generate random game data
const gameName = faker.commerce.productName();
const releaseDate = faker.date.past(20).toLocaleDateString(); // Random date from the past 20 years
const gameGenres = ["Role-playing", "Puzzle", "Racing", "Shooter"];
const gameGenre = gameGenres[Math.floor(Math.random() * gameGenres.length)];
const starRating = Math.floor(Math.random() * 5) + 1; // Random star rating from 1 to 5
const gameImage = faker.image.urlPicsumPhotos({ width: 300, height: 200 }); // Random image
</script>
