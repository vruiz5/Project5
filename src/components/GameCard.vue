<script setup>
import { faker } from "@faker-js/faker"
const gameName = faker.commerce.productName()
const releaseDate = faker.date.past(20).toLocaleDateString()
const gameGenres = ["Role-playing", "Puzzle", "Racing", "Shooter"]
const gameGenre = gameGenres[Math.floor(Math.random() * gameGenres.length)]
const starRating = Math.floor(Math.random() * 5) + 1
const gameImage = faker.image.urlPicsumPhotos({ width: 300, height: 200 })
</script>

<template>
  <div class="rounded-lg shadow-lg p-4 bg-white">
    <img :src="gameImage" alt="Game Cover" class="w-full h-48 object-cover rounded-t-lg" />
    <h2 class="text-2xl font-bold mt-2">{{ gameName }}</h2>
    <p class="text-gray-600">Genre: {{ gameGenre }}</p>
    <p class="text-gray-600">Release Date: {{ releaseDate }}</p>
    <div class="flex items-center mt-2">
      <span v-for="star in starRating" :key="star" class="text-yellow-500 text-lg">★</span>
    </div>
  </div>
</template>
