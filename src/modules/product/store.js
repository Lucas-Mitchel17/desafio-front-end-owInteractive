import { defineStore } from 'pinia';

export default defineStore('product', {
  state: () => ({
    products: [],
  }),
});
