<script setup>
import { RouterLink } from 'vue-router';
import { CartLink, useCartStore } from '@Modules/cart';

const cardStore = useCartStore();
</script>

<template>
  <header class="header">
    <nav class="nav">
      <RouterLink to="/">
        <AppText tag="h1"> Mkt<span>Place</span> </AppText>
      </RouterLink>

      <RouterLink
        class="cart"
        to="/carrinho"
      >
        <AppText>Produtos</AppText>

        <CartLink :items="cardStore.productsOnCart" />
      </RouterLink>
    </nav>
  </header>
</template>

<style lang="sass">
.header
  background: white
  box-shadow: 0px -10px 28px 0px #0000003b
  display: grid
  height: $topnav
  left: 0
  position: fixed
  top: 0
  width: 100%
  z-index: 99

  & > .nav
    align-items: center
    display: grid
    grid-template-columns: minmax(120px, 896px) minmax(100px, 160px)
    margin: auto
    max-width: $desktop
    padding: 0 20px
    width: 100%

    @media (min-width: $small)
      grid-template-columns: minmax(120px, 896px) minmax(100px, 220px)

    & > a > .text-h1
      color: $grey
      font-size: 30px
      margin: 0

      & > span
        color: $purple


    & > .cart
      display: flex
      justify-content: center
      align-items: center

      & > p
        color: $darkGrey
        font-size: 15px
        font-weight: 600
        display: none

        @media (min-width: $small)
          display: initial
          margin-right: 30px

        @media (min-width: $desktop)
          text-align: right
</style>
