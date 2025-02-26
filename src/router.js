import { createRouter, createWebHistory } from 'vue-router'

import HomePage from './views/HomePage.vue'
import GameDetail from './views/GameDetail.vue'
import LoginPage from './views/LoginPage.vue'
import SettingsPage from './views/SettingsPage.vue'
import NewsPage from './views/NewsPage.vue'

import { useAuth } from './composables/useAuth'
const { isAuthenticated } = useAuth()

const routes = [
  { path: '/', name: 'Home', component: HomePage, meta: { requiresAuth: true }},
  { path: '/news', name: 'News', component: NewsPage, meta: { requiresAuth: true }},
  { path: '/games/:id', name: 'GameDetail', component: GameDetail, meta: { requiresAuth: true }},
  { path: '/login', name: 'LoginPage', component: LoginPage },
  { path: '/settings', name: 'SettingsPage', component: SettingsPage, meta: { requiresAuth: true }},
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !isAuthenticated.value) {
    next({ name: 'LoginPage', query: { redirect: to.fullPath } });
  } else if (to.name === 'LoginPage' && isAuthenticated.value) {
    next({ name: 'Home' });
  } else {
    next();
  }
});

export default router;