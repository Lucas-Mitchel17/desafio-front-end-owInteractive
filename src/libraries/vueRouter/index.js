import { createRouter, createWebHistory } from 'vue-router';
import ROUTES from '@Views/routes';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [...ROUTES],
});

export default router;
