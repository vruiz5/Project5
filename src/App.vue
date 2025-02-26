<script setup>
import { onMounted, watch } from 'vue'
import { useRouter } from 'vue-router'
import { useAuth } from './composables/useAuth'
import NavMenu from './components/NavMenu.vue'

const router = useRouter();
const { isAuthenticated } = useAuth()

watch(isAuthenticated, (newValue) => {
  if (!newValue && router.currentRoute.value.meta.requiresAuth) {
    router.push({ name: 'LoginPage' });
  }
})

onMounted(() => {
  if (!isAuthenticated.value && router.currentRoute.value.meta.requiresAuth) {
    router.push({ name: 'LoginPage' });
  }
})
</script>

<template>
  <NavMenu></NavMenu>
  <RouterView></RouterView>
</template>