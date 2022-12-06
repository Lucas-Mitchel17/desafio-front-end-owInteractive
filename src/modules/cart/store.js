import { defineStore } from 'pinia';

export default defineStore('cart', {
  state: () => ({
    products: [],
  }),

  getters: {
    productsOnCart: (state) => state.products.length,
  },
});
