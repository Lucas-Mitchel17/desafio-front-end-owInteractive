<script setup>
import { computed } from 'vue';

const props = defineProps({
  installments: {
    default: 10,
    required: true,
    type: Number,
  },

  totalAmount: {
    default: 0.0,
    required: true,
    type: Number,
  },
});

const installment = computed(() =>
  (props.totalAmount / props.installments).toFixed(2)
);
</script>

<template>
  <div class="cart-total">
    <div class="total">
      <AppText>Total á vista</AppText>

      <AppText>R$ {{ totalAmount.toFixed(2) }}</AppText>
    </div>

    <div class="total-split">
      <AppText>Total parcelado</AppText>

      <AppText>
        em até <span>10x de R$ {{ installment }}</span> (total R$
        {{ totalAmount.toFixed(2) }})
      </AppText>
    </div>
  </div>
</template>

<style scoped lang="sass">
.cart-total
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
</style>
