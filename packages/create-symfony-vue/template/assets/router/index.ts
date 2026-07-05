import App from '@/App.vue';
import { createRouter, createWebHistory } from 'vue-router';

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/app',
      name: 'Home',
      component: App,
    },
  ],
});
