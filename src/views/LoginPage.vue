<template>
  <form class="m-10" @submit.prevent="logUserIn">
    <div>
      <label for="username" class="block mb-2 font-bold">Username</label>
      <input id="username" v-model="username" type="text" placeholder="Username" class="border p-2 rounded w-full" />
    </div>
    <div class="mt-4">
      <label for="password" class="block mb-2 font-bold">Password</label>
      <input id="password" v-model="password" type="password" placeholder="Password" class="border p-2 rounded w-full" />
    </div>

    <button @click="logUserIn" class="bg-green-500 hover:bg-green-700 text-white px-4 py-2 rounded mt-4">LOGIN</button>
  </form>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { useAuth } from '@/composables/useAuth';

const { login, logout } = useAuth();
const router = useRouter();
const route = useRoute();

const username = ref('');
const password = ref('');

const logUserIn = async () => {
  if (await login(username.value, password.value)) {
    if (route.query.redirect) {
      router.push(route.query.redirect);
    } else {
      router.push({ name: 'Home' });
    }
  } else {
    logout();
  }
};
</script>
