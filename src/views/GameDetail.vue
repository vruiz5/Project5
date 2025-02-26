<script setup>
import { useRoute } from 'vue-router';
import { faker } from '@faker-js/faker';

const route = useRoute();
const gameId = route.params.id;

// Generate consistent game details
const gameName = gameId.replace(/-/g, ' ').toUpperCase();
const releaseDate = faker.date.future().toLocaleDateString('en-US', {
  year: 'numeric',
  month: 'long',
  day: 'numeric'
});
const genre = faker.helpers.arrayElement(['Action', 'Adventure', 'RPG', 'Strategy', 'Sports', 'Puzzle', 'Racing', 'Shooter']);
const rating = faker.number.int({ min: 1, max: 5 });
const gameImage = faker.image.url({ width: 1200, height: 800 });
const gameDescription = faker.commerce.productDescription();
const developerNotes = faker.company.catchPhrase();
const features = [
  faker.commerce.productAdjective(),
  faker.commerce.productAdjective(),
  faker.commerce.productAdjective()
].map(adj => `${adj} gameplay mechanics`);
</script>

<template>
  <div class="max-w-4xl mx-auto p-8">
    <img :src="gameImage" :alt="gameName" class="rounded-lg w-full h-[400px] object-cover mb-6 shadow-lg" />
    
    <div class="bg-white rounded-lg p-8 shadow-lg">
      <h1 class="text-4xl font-bold text-gray-900 mb-4">{{ gameName }}</h1>
      
      <div class="flex items-center gap-4 mb-6">
        <span class="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full">
          {{ genre }}
        </span>
        <span class="text-yellow-400 text-xl">
          {{ '★'.repeat(rating) }}
        </span>
        <span class="text-gray-600">
          Release Date: {{ releaseDate }}
        </span>
      </div>

      <div class="space-y-6">
        <section>
          <h2 class="text-2xl font-semibold text-gray-900 mb-2">About the Game</h2>
          <p class="text-gray-700">{{ gameDescription }}</p>
        </section>

        <section>
          <h2 class="text-2xl font-semibold text-gray-900 mb-2">Key Features</h2>
          <ul class="list-disc list-inside text-gray-700">
            <li v-for="feature in features" :key="feature">{{ feature }}</li>
          </ul>
        </section>

        <section>
          <h2 class="text-2xl font-semibold text-gray-900 mb-2">Developer Notes</h2>
          <blockquote class="italic text-gray-600 border-l-4 border-indigo-500 pl-4">
            "{{ developerNotes }}"
          </blockquote>
        </section>
      </div>
    </div>
  </div>
</template>