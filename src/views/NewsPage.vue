<script setup>
import { ref } from 'vue';
import { faker } from '@faker-js/faker';

// Generate 5 news articles
const newsArticles = ref(Array.from({ length: 5 }, () => ({
  id: faker.string.uuid(),
  title: `${faker.word.adjective()} ${faker.word.noun()} ${faker.helpers.arrayElement([
    'Announced for Next-Gen Consoles',
    'Breaks Sales Records',
    'Gets Surprise Update',
    'Reveals New DLC',
    'Changes Gaming Forever'
  ])}`,
  summary: faker.lorem.paragraph(),
  author: faker.person.fullName(),
  date: faker.date.recent({ days: 7 }).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }),
  imageUrl: faker.image.url({ width: 800, height: 400 }),
  readTime: faker.number.int({ min: 3, max: 10 })
})));
</script>

<template>
  <div class="max-w-4xl mx-auto p-8">
    <h1 class="text-4xl font-bold text-gray-900 mb-8">Latest Gaming News</h1>
    
    <div class="space-y-8">
      <article v-for="article in newsArticles" :key="article.id" 
        class="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-[1.02]">
        <img 
          :src="article.imageUrl" 
          :alt="article.title"
          class="w-full h-48 object-cover"
        />
        
        <div class="p-6">
          <h2 class="text-2xl font-bold text-gray-900 mb-2">{{ article.title }}</h2>
          
          <div class="flex items-center text-gray-600 text-sm mb-4">
            <span>By {{ article.author }}</span>
            <span class="mx-2">•</span>
            <span>{{ article.date }}</span>
            <span class="mx-2">•</span>
            <span>{{ article.readTime }} min read</span>
          </div>
          
          <p class="text-gray-700 leading-relaxed">{{ article.summary }}</p>
          
          <div class="mt-4">
            <button class="text-indigo-600 hover:text-indigo-800 font-medium">
              Read More →
            </button>
          </div>
        </div>
      </article>
    </div>
  </div>
</template>