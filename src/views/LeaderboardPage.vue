<script setup>
import { ref } from 'vue';
import { faker } from '@faker-js/faker';

const gamers = ref(Array.from({ length: 12 }, (_, index) => {
  faker.seed(index);
  
  const prefix = faker.helpers.arrayElement(['Pro', 'Elite', 'Master', 'Legend']);
  const suffix = faker.helpers.arrayElement(['Gamer', 'Player', 'Ninja', 'Warrior']);
  const username = `${prefix}${faker.word.noun().charAt(0).toUpperCase() + faker.word.noun().slice(1)}${suffix}`;
  
  return {
    id: index + 1,
    username,
    avatar: faker.image.avatar(),
    level: faker.number.int({ min: 10, max: 100 }),
    winRate: faker.number.int({ min: 40, max: 95 }),
    totalGames: faker.number.int({ min: 100, max: 2000 }),
    favoriteGame: faker.helpers.arrayElement([
      'Fortnite', 'Call of Duty', 'League of Legends', 'Minecraft', 
      'Apex Legends', 'Valorant', 'Overwatch', 'Destiny 2'
    ]),
    rank: faker.helpers.arrayElement([
      'Bronze', 'Silver', 'Gold', 'Platinum', 'Diamond'
    ])
  };
}));

gamers.value.sort((a, b) => b.level - a.level);
</script>

<template>
  <div class="max-w-6xl mx-auto p-8">
    <h1 class="text-3xl font-bold text-gray-900 mb-6">Gamer Leaderboard</h1>
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div v-for="gamer in gamers" :key="gamer.id" 
        class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
        
        <div class="flex items-center mb-4">
          
          <div class="bg-yellow-500 text-white font-bold rounded-full w-8 h-8 flex items-center justify-center mr-3">
            {{ gamer.id }}
          </div>
          
          <img 
            :src="gamer.avatar" 
            :alt="gamer.username"
            class="w-12 h-12 rounded-full object-cover mr-4"
          />
          
          <div>
            <h2 class="text-lg font-bold text-gray-900">{{ gamer.username }}</h2>
            <p class="text-indigo-600">Level {{ gamer.level }} • {{ gamer.rank }}</p>
          </div>
        </div>
        
        <div class="grid grid-cols-2 gap-4 mb-4">
          <div class="bg-gray-50 p-2 rounded text-center">
            <p class="text-sm text-gray-500">Win Rate</p>
            <p class="font-bold text-gray-900">{{ gamer.winRate }}%</p>
          </div>
          <div class="bg-gray-50 p-2 rounded text-center">
            <p class="text-sm text-gray-500">Games</p>
            <p class="font-bold text-gray-900">{{ gamer.totalGames }}</p>
          </div>
        </div>
        
        <div class="mb-4">
          <p class="text-sm text-gray-600">Favorite Game: <span class="font-medium">{{ gamer.favoriteGame }}</span></p>
        </div>
        
        <button class="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-md transition-colors">
          View Profile
        </button>
      </div>
    </div>
  </div>
</template>