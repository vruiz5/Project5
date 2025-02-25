<template>
  <nav class="bg-slate-900 h-20 flex items-center justify-around text-white px-4">
    <RouterLink :to="{ name: 'Home' }">Game Collection</RouterLink>
    <RouterLink :to="{ name: 'Other' }">Other</RouterLink>
    <RouterLink :to="{ name: 'SettingsPage' }">Settings</RouterLink>

    <div v-if="isAuthenticated">
      <span>Welcome, {{ user.email }}</span>
      <button @click="logout" class="rounded-md bg-red-500 px-4 py-2 mx-2 text-red-100 hover:bg-red-700">Logout</button>
    </div>
    <div v-else>
      <RouterLink :to="{ name: 'LoginPage' }">Login</RouterLink>
    </div>
  </nav>
</template>

<script setup>
import { useAuth } from '@/composables/useAuth';
const { isAuthenticated, logout, user } = useAuth();
</script>
