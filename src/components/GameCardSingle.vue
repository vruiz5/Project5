<script setup>
import { faker } from '@faker-js/faker'

const gameName = faker.commerce.productName();
const releaseDate = faker.date.past(20).toLocaleDateString()
const genres = ['Role-playing', 'Puzzle', 'Racing', 'Shooter']
const gameGenre = genres[Math.floor(Math.random() * genres.length)]
const starRating = Math.floor(Math.random() * 5) + 1
const gameImage = faker.image.urlPicsumPhotos({ width: 300, height: 200 })
</script>

<template>
  <RouterLink :to="{ name: 'GameDetail', params: { id: gameName.replace(/\s+/g, '-') }}">
    <div class="border border-gray-500 rounded-lg shadow bg-gray-400">
      <img :src="gameImage" class="object-cover w-full h-48 rounded-t-lg" />
      <div class="p-4">
        <h2 class="text-xl font-bold">{{ gameName }}</h2>
        <p class="text-gray-700">Genre: {{ gameGenre }}</p>
        <p class="text-gray-700">Released: {{ releaseDate }}</p>
        <div class="flex mt-2">
          <span v-for="star in starRating" :key="star" class="text-yellow-500">★</span>
        </div>
      </div>
    </div>
  </RouterLink>
</template>
