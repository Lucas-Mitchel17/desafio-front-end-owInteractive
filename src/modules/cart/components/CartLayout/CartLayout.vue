<script setup>
import { ref } from 'vue';
import { BaseInput } from '@ComposedUi';
import Trash from '@Icons/garbage.svg?component';

const emit = defineEmits(['removeProduct', 'removeAllProducts']);

const amount = ref('');
</script>

<template>
  <section class="cart">
    <div class="cart-tabs">
      <ul class="cart-ul">
        <li><AppText>Produtos</AppText></li>
        <li><AppText>Quantidade</AppText></li>
        <li><AppText>Valor Unitário</AppText></li>
        <li><AppText>Total</AppText></li>
      </ul>
    </div>
    <div class="cart-product">
      <ul class="product-ul">
        <li class="products">
          <AppButton @click="emit('removeProduct', product.id)">
            <template #icon>
              <Trash />
            </template>
          </AppButton>
          <AppText class="card-category product-category">Eletronicos</AppText>
          <AppText class="card-title product-name"
            >Notebook HP ProBook Acer Aspire 3 A315</AppText
          >
        </li>

        <li class="counter">
          <AppButton
            class="subtract"
            label="-"
          />
          <BaseInput
            v-model="amount"
            type="number"
          />
          <AppButton
            class="sum"
            label="+"
          />
        </li>

        <li class="unit">
          <AppText>
            <span>R$ 1.500,00</span> a vista ou 10 de R$ 150,00
          </AppText>
        </li>
        <li class="unit">
          <AppText>
            <span>R$ 1.500,00</span> a vista ou 10 de R$ 150,00
          </AppText>
        </li>
      </ul>
    </div>
    <div class="cart-total">
      <div class="total">
        <AppText>Total á vista</AppText>
        <AppText>R$ 3.000,00</AppText>
      </div>
      <div class="total-split">
        <AppText>Total parcelado</AppText>
        <AppText>
          em até <span>10x de R$ 300,00</span> (total R$ 3.000,00)
        </AppText>
      </div>
    </div>
    <div class="buttons">
      <AppButton
        label="Limpar carrinho"
        @click="emit('removeAllProducts', product.id)"
      >
        <template #icon>
          <Trash />
        </template>
      </AppButton>
      <AppButton
        label="Continar comprando"
        type="back"
      />
      <AppButton
        label="Concluir compra"
        type="proceed"
      />
    </div>
  </section>
</template>

<style lang="sass" scoped>
.cart
  & > .cart-tabs
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

  & > .cart-product
    padding: 10px 0 30px

    & > ul:first-child
      border-top: 1px solid $grey

    & > .product-ul
      border-bottom: 1px solid $grey
      padding: 10px 0 30px

      & > li:last-child
        display: none

        @media (min-width: $tablet-medium)
          display: initial

    & > .product-ul
      align-items: center
      display: grid
      grid-template-columns: 1fr
      grid-gap: 0 34px
      margin: auto
      max-width: 300px

      @media (min-width: $tablet)
        max-width: 600px

      @media (min-width: $tablet-medium)
        margin: 0
        max-width: 100%
        grid-template-columns: repeat(2, 1fr) minmax(100px, 330px) minmax(100px, 170px)

      & > .products
        align-items: center
        display: grid
        grid-template-columns: 21px 1fr
        grid-template-rows: repeat(2, 1fr)
        grid-gap: 0 20px
        margin: 10px auto

        @media (min-width: $tablet)

        @media (min-width: $tablet-medium)
          margin: 0


        & > .btn
          background-color: unset
          cursor: pointer
          grid-column: 1
          grid-row: 2
          padding: 0

          & > .icon > svg
            fill: $backgroundGrey

            &:hover
              fill: $red

        & > p
          text-align: left

        & > .product-name
          grid-column: 2
          grid-row: 2
          margin: 0
          max-width: 180px

        & > .product-category
          grid-column: 2
          grid-row: 1

      & > .counter
        display: flex
        align-items: center
        margin: 10px auto

        @media (min-width: $tablet)

        @media (min-width: $tablet-medium)
          margin: 0

        & > .subtract
          border-radius: 2px 0 0 2px
          border-left: 1px solid $grey

        & > .sum
          border-radius: 0 2px 2px 0
          border-right: 1px solid $grey

        & > .btn
          background: unset
          border-top: 1px solid $grey
          border-bottom: 1px solid $grey
          height: 36px
          padding: 0
          width: 23px

        & > .input
          border-radius: 0
          width: 12px

      & > .unit
        margin: 10px auto

        @media (min-width: $tablet)

        @media (min-width: $tablet-medium)
          margin: 0

        & > .text-p
          width: 144px

          & > span
            color: $black
            font-size: 18px
            font-weight: 600

  & > .cart-total
    border-bottom: 1px solid $grey
    display: grid
    margin: auto
    padding: 44px 0 60px

    @media (min-width: $tablet-medium)
      display: initial
      margin: 0

    & > .total
      align-items: center
      display: grid
      grid-gap: 0 40px
      grid-template-columns: 1fr minmax(100px, 170px)
      justify-content: right
      margin: 0 auto 30px

      & > p:first-child
        color: $black
        font-size: 18px
        font-weight: 600
        grid-column: 1
        text-align: right
        text-transform: uppercase

      & > p:last-child
        color: $purple
        font-size: 22px
        font-weight: 900

    & > .total-split
      align-items: center
      display: grid
      grid-gap: 0 40px
      grid-template-columns: 1fr minmax(100px, 170px)
      justify-content: right
      margin: auto

      & > p:first-child
        color: $black
        font-size: 18px
        font-weight: 600
        grid-column: 1
        text-align: right
        text-transform: uppercase

      & > p:last-child
        font-size: 14px

        & > span
          font-weight: 600

  & > .buttons
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

      &:hover
        border: 1px solid $red
        color: $red

      & > .icon > svg
        fill: $backgroundGrey

    & > .btn:nth-child(2)
      justify-content: end
      margin: auto

    & > .btn:nth-child(3)
      justify-content: center
      margin: auto

      @media (min-width: $tablet-medium)
        margin: auto 0 0 auto
</style>
