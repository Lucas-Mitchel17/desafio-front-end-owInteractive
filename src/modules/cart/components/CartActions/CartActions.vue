<script setup>
import { RouterLink } from 'vue-router';
import Trash from '@Icons/garbage.svg?component';

const emit = defineEmits(['onRemoveAllProducts']);
</script>

<template>
  <div class="buttons">
    <AppButton
      label="Limpar carrinho"
      @click="emit('onRemoveAllProducts')"
    >
      <template #icon>
        <Trash />
      </template>
    </AppButton>

    <RouterLink to="/">
      <AppButton
        label="Continar comprando"
        type="back"
      />
    </RouterLink>

    <RouterLink to="/cadastro">
      <AppButton
        label="Concluir compra"
        type="proceed"
      />
    </RouterLink>
  </div>
</template>

<style scoped lang="sass">
.buttons
  display: grid
  grid-template-columns: 1fr
  grid-gap: 0 30px
  padding: 50px 0

  @media (min-width: $tablet-medium)
    grid-template-columns: minmax(15%, 50%) 2fr 1fr

  & > .btn:first-child
    align-items: center
    background: unset
    color: $black
    display: flex
    font-size: 16px
    justify-content: center
    margin: auto
    padding: 0
    max-width: 150px

    @media (min-width: $tablet-medium)
      justify-content: flex-start
      margin: 0

    &:hover
      border: 1px solid $red
      color: $red

    & > .icon > svg
      fill: $backgroundGrey

  & > a:nth-child(2)
    justify-content: center
    margin: 20px auto

    @media (min-width: $tablet-medium)
      justify-content: end
      margin: 0 0 auto auto

  & > a:nth-child(3)
    justify-content: center
    margin: auto

    @media (min-width: $tablet-medium)
      margin: auto 0 0 auto
</style>
