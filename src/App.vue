<script setup>
import { computed, onMounted } from 'vue';
import { RouterView, useRouter } from 'vue-router';
import { useCartStore, useStorageCart } from '@Modules/cart';
import { useProductStore, getProductsRequest } from '@Modules/product';

const router = useRouter();
const { getStorageCart } = useStorageCart();

const cartStore = useCartStore();
const productStore = useProductStore();

const hasProductsFromApi = computed(() => productStore.products.length);

onMounted(async () => {
  if (!hasProductsFromApi.value) {
    productStore.products = await getProductsRequest();
  }

  const hasStorageCart = !!getStorageCart() && getStorageCart().length;

  if (hasProductsFromApi.value && hasStorageCart) {
    cartStore.products = getStorageCart().map(({ id }) => id);
  }
});

router.beforeEach((to, from, next) => {
  window.scrollTo(0, 0);
  next();
});
</script>

<template>
  <Suspense>
    <Transition>
      <RouterView />
    </Transition>
  </Suspense>
</template>
