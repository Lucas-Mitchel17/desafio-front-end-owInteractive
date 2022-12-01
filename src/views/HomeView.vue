<script setup>
import { BaseInput } from '@ComposedUi';
</script>

<template>
  <section class="test">
    <AppText tag="h1"> App Text </AppText>

    <AppText tag="h2"> Botão </AppText>
    <AppButton
      class="text-h3"
      label="Adicionar ao carrinho"
      type="addCart"
    />

    <AppText tag="h2"> Input </AppText>
    <BaseInput
      v-model="input"
      placeholder="texto aqui"
    />
  </section>
</template>

<style lang="sass">
.test
  & > *
    margin: 20px 0
    display: flex
    flex-direction: column
</style>
