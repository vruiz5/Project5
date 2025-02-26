<template>
  <nav class="bg-slate-900 h-20 flex items-center justify-between px-8">
    <div class="flex items-center space-x-6">
      <RouterLink :to="{ name: 'Home' }" class="text-white hover:text-gray-300">Game Collection</RouterLink>
      <RouterLink :to="{ name: 'News' }" class="text-white hover:text-gray-300">Gaming News</RouterLink>
      <RouterLink :to="{ name: 'LeaderboardPage' }" class="text-white hover:text-gray-300">Leaderboard</RouterLink>
    </div>

    <div class="flex items-center">
      <template v-if="isAuthenticated && user">
        <span class="text-white mr-4">Welcome, {{ user.email }}</span>
        <button 
          @click="logout" 
          class="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md transition-colors"
        >
          Logout
        </button>
      </template>
      <RouterLink 
        v-else 
        :to="{ name: 'LoginPage' }" 
        class="text-white hover:text-gray-300"
      >
        Login
      </RouterLink>
    </div>
  </nav>
</template>

<script setup>
import { useAuth } from '../composables/useAuth';
const { isAuthenticated, logout, user } = useAuth();
</script>