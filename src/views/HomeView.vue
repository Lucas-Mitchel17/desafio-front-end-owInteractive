<script setup>
import { useCartStore } from '@Modules/cart';
import {
  ProductSlider,
  ProductSearchBar,
  ProductCard,
  useProductStore,
} from '@Modules/product';

const cartStore = useCartStore();
const productStore = useProductStore();

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

function removeProduct(id) {
  const productIndex = cartStore.products.indexOf(id);

  cartStore.products.pop(productIndex);
}

function onToggleProducts(id) {
  const isOnCart = cartStore.products.includes(id);

  if (isOnCart) {
    return removeProduct(id);
  }

  const newProducts = [...cartStore.products, id];
  const uniqueProductsList = new Set(newProducts);

  cartStore.products = [...uniqueProductsList];
}
</script>

<template>
  <MainLayout>
    <ProductSlider :slides="slides" />
    <section class="container">
      <ProductSearchBar />

      <div class="card-section">
        <ProductCard
          :products="productStore.products"
          @onToggleProducts="onToggleProducts"
        />
      </div>
    </section>
  </MainLayout>
</template>

<style lang="sass">
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
</style>
