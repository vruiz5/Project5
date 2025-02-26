<template>
  <div class="flex justify-center gap-4 p-8">

    <button @click="prevPage" :disabled="activePage === 1" class="rounded-md bg-slate-100 p-2 font-medium text-slate-700 shadow-md">Previous Level</button>

    <button v-for="page in pages" :key="page" class="rounded-md bg-slate-100 p-2 font-medium text-slate-700 shadow-md":class="page === activePage ? 'bg-yellow-700 text-slate-100' : ''">{{ page }}</button>

    <button @click="nextPage" :disabled="activePage === pages" class="rounded-md bg-slate-100 p-2 font-medium text-slate-700 shadow-md">Next Level</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const pages = ref(5);
const activePage = ref(1)

const prevPage = () => {
  if (activePage.value > 1) {
    activePage.value--
  }

  console.log(activePage)
}

const nextPage = () => {
  if (activePage.value < pages.value) {
    activePage.value++;
  }

  console.log(activePage)
}
</script>