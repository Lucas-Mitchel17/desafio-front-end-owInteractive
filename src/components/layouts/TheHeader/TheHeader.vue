<script setup>
import { CartLink } from '@Modules/cart';

const totalProducts = [
  {
    id: 1,
  },
  {
    id: 2,
  },
  {
    id: 3,
  },
  {
    id: 4,
  },
  {
    id: 5,
  },
];
</script>

<template>
  <header class="header">
    <nav class="nav">
      <AppText tag="h1"> Mkt<span>Place</span> </AppText>

      <AppText>Produtos</AppText>
      <CartLink :items="totalProducts.length" />
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
    grid-template-columns: minmax(120px, 896px) repeat(2, 80px)
    margin: auto
    max-width: $desktop
    padding: 0 20px
    width: 100%

    @media (min-width: $small)
      grid-template-columns: minmax(120px, 896px) repeat(2, 110px)


    & > .text-h1
      color: $grey
      font-size: 30px
      margin: 0

      & > span
        color: $purple

    & > p
      color: $darkGrey
      font-size: 15px
      font-weight: 600

      @media (min-width: $desktop)
        text-align: right
</style>
