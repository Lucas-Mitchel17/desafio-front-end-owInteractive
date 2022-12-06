<script setup>
import { computed, ref } from 'vue';
import {
  useCartStore,
  useRemoveProductFromCart,
  useStorageCart,
} from '@Modules/cart';

import {
  ProductSlider,
  ProductSearchBar,
  ProductCard,
  useProductStore,
} from '@Modules/product';

const cartStore = useCartStore();
const productStore = useProductStore();
const { removeProduct } = useRemoveProductFromCart();
const { updateStorageCart } = useStorageCart();

const slides = [
  {
    title: 'Notebooks',
    subtitle: 'As melhores ofertas',
  },
  {
    title: 'Preço baixo',
    subtitle: 'Você encontra aqui',
  },
];
const search = ref('');

const productList = computed(() => {
  if (!search.value) {
    return productStore.products;
  }

  return productStore.products.filter((product) => {
    const productNameLowerCased = product.name.toLowerCase();
    const searchLowerCased = search.value.toLowerCase();

    return productNameLowerCased.indexOf(searchLowerCased) != -1;
  });
});

function onToggleProducts(id) {
  const isOnCart = cartStore.products.includes(id);

  if (isOnCart) {
    return removeProduct(id);
  }

  const newProducts = [...cartStore.products, id];
  const uniqueProductsList = new Set(newProducts);

  cartStore.products = [...uniqueProductsList];

  const productsWithQttList = cartStore.products.map((id) => ({
    id,
    qtt: 1,
  }));

  updateStorageCart(productsWithQttList);
}
</script>

<template>
  <MainLayout>
    <ProductSlider :slides="slides" />

    <section class="container">
      <template v-if="productList">
        <ProductSearchBar v-model="search" />

        <div class="card-section">
          <ProductCard
            :products="productList"
            @onToggleProducts="onToggleProducts"
          />
        </div>
      </template>

      <AppText
        tag="h2"
        class="no-items"
        >Nenhum produto disponível</AppText
      >
    </section>
  </MainLayout>
</template>

<style scoped lang="sass">
.container
  display: grid
  max-width: $desktop
  margin: 40px auto 0
  padding: 0 10px

  & > .card-section
    display: grid
    grid-template-columns: 1fr
    grid-gap: 60px 20px
    margin: 70px auto 0

    @media (min-width: $tablet)
      grid-template-columns: repeat(2, 1fr)

    @media (min-width: $desktop)
      grid-template-columns: repeat(3, 1fr)
      margin: 70px 0 0

  & > .no-items
    align-items: center
    display: flex
    flex-direction: column
    justify-content: center
    margin: auto
</style>
