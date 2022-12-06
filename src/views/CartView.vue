<script setup>
import { CartLayout } from '@Modules';
</script>

<template>
  <MainLayout>
    <section class="cart-section">
      <CartLayout />
    </section>
  </MainLayout>
</template>

<style lang="sass">
.cart-section
  display: grid
  max-width: $desktop
  margin: 90px auto 0
  padding: 0 10px
</style>
