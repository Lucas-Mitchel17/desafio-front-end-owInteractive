<template>
  <section class="cart-tabs">
    <ul class="cart-ul">
      <li>
        <AppText>Produtos</AppText>
      </li>

      <li>
        <AppText>Quantidade</AppText>
      </li>

      <li>
        <AppText>Valor Unitário</AppText>
      </li>

      <li>
        <AppText>Total</AppText>
      </li>
    </ul>
  </section>
</template>

<style scoped lang="sass">
.cart-tabs
  display: none

  @media (min-width: $tablet-medium)
    display: initial
  & > .cart-ul
    display: grid
    grid-template-columns: repeat(2, 1fr) minmax(100px, 330px) minmax(100px, 170px)
    margin: 0 0 30px
    grid-gap: 0 34px

    & > li:first-child
      display: grid
      grid-template-columns: 21px 1fr
      grid-gap: 0 20px

      & > p
        grid-column: 2

    & > li > p
      font-size: 16px
      font-weight: 600
      text-align: left
      text-transform: uppercase
</style>
