<script setup>
import Cart from '@Icons/cart.svg?component';

defineProps({
  items: {
    type: Number,
    default: 0,
  },
});
</script>

<template>
  <div class="nav-cart">
    <Cart />

    <AppText>
      {{ items }}
    </AppText>
  </div>
</template>

<style lang="sass">
.nav-cart
  cursor: pointer
  display: flex
  justify-content: flex-start
  align-items: flex-end

  @media (min-width: $desktop)
    justify-content: flex-end


  & > p
    background-color: $red
    border-radius: 10px
    color: $white
    margin: 0
    font-size: 13px
    font-weight: 600
    text-align: center
    width: 15px
    height: 15px

  & > svg
    fill: $purple
</style>
