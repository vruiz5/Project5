import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/views/HomePage.vue';
import GameDetail from '@/views/GameDetail.vue';
import LoginPage from '@/views/LoginPage.vue';
import SettingsPage from '@/views/SettingsPage.vue';
import OtherPage from '@/views/OtherPage.vue';
import { useAuth } from '@/composables/useAuth';

const { isAuthenticated } = useAuth();

const routes = [
  { path: '/project5/', name: 'Home', component: HomePage },
  { path: '/project5/other', name: 'Other', component: OtherPage },
  { path: '/project5/games/:id', name: 'GameDetail', component: GameDetail },
  { path: '/project5/login', name: 'LoginPage', component: LoginPage },
  { path: '/project5/settings', name: 'SettingsPage', component: SettingsPage, meta: { requiresAuth: true } },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, _, next) => {
  if (to.meta.requiresAuth && !isAuthenticated.value) {
    next({ name: 'LoginPage', query: { redirect: to.fullPath } });
  } else {
    next();
  }
});

export default router;
