export default [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/HomeView.vue'),
  },
  {
    path: '/cadastro',
    name: 'register',
    component: () => import('@/views/RegisterView.vue'),
  },
  {
    path: '/carrinho',
    name: 'cart',
    component: () => import('@/views/CartView.vue'),
  },
];
