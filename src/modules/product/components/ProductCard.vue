<script setup>
import { useCartStore } from '@Modules/cart';
import { BaseThumbnail } from '@BaseUi';

const emit = defineEmits(['onToggleProducts']);

defineProps({
  products: {
    type: Array,
  },
});

const cartStore = useCartStore();
function getButtonLabel(id) {
  return cartStore.products.includes(id)
    ? 'Remover do carrinho'
    : 'Adicionar ao carrinho';
}
</script>

<template>
  <section
    v-for="product in products"
    :key="product"
    class="card"
  >
    <section class="card-content">
      <BaseThumbnail :path="product.imageUrl" />

      <div class="card-infos">
        <AppText class="card-category"> {{ product.category }} </AppText>
        <AppText class="card-title"> {{ product.name }} </AppText>
        <AppText class="description"> {{ product.description }} </AppText>
        <AppText class="price"> R$ {{ product.price }} </AppText>
      </div>
    </section>

    <AppButton
      type="addCart"
      :label="getButtonLabel(product.id)"
      @click="emit('onToggleProducts', product.id)"
    />
  </section>
</template>

<style lang="sass">
.card
  background-color: $white
  box-shadow: 0px 0px 25px -6px $grey
  height: fit-content
  max-width: 360px

  & > .card-content
    padding: 20px 20px 25px

    & > .card-infos
      padding-top: 20px

      & > .description
        color: $grey
        font-size: 16px
        height: auto
        margin-top: 20px

        @media (min-width: $tablet)
          height: 300px

      & > .price
        color: $black
        font-size: 25px
        font-weight: 600
        margin-top: 35px

  & > .btn
    width: 100%
</style>
