<script setup>
import { computed, onMounted, ref, toRefs } from 'vue';
import Trash from '@Icons/garbage.svg?component';
import { useStorageCart } from '@Modules/cart';
import { BaseInput } from '@ComposedUi';

const emit = defineEmits(['onNewTotalAmount', 'onRemoveProduct']);

const props = defineProps({
  installments: {
    default: 10,
    required: true,
    type: Number,
  },

  product: {
    required: true,
    type: Object,
  },
});

const { getStorageProduct, updateProductQtt } = useStorageCart();

const amount = ref(1);
const { id, category, name, price } = toRefs(props.product);

const installment = computed(() =>
  (price.value / props.installments).toFixed(2)
);

const totalAmount = computed(() => price.value * amount.value.toFixed(2));

const totalInstallment = computed(() =>
  (totalAmount.value / props.installments).toFixed(2)
);

function increaseAmount() {
  amount.value++;
  emit('onNewTotalAmount', price.value);
  updateProductQtt(id.value, amount.value);
}

function decreaseAmount() {
  amount.value--;
  emit('onNewTotalAmount', price.value * -1);
  updateProductQtt(id.value, amount.value);
}

onMounted(() => {
  const storageProduct = getStorageProduct(id.value);

  storageProduct ? (amount.value = storageProduct.qtt) : (amount.value = 1);

  emit('onNewTotalAmount', totalAmount.value);
});
</script>

<template>
  <div class="cart-product">
    <ul class="product-ul">
      <li class="products">
        <AppButton @click="emit('onRemoveProduct', id)">
          <template #icon>
            <Trash />
          </template>
        </AppButton>

        <AppText class="card-category product-category">
          {{ category }}
        </AppText>

        <AppText class="card-title product-name">
          {{ name }}
        </AppText>
      </li>

      <li class="counter">
        <AppButton
          class="subtract"
          label="-"
          @click="decreaseAmount"
        />

        <BaseInput
          v-model="amount"
          type="number"
        />

        <AppButton
          class="sum"
          label="+"
          @click="increaseAmount"
        />
      </li>

      <li class="unit">
        <AppText>
          <span>R$ {{ price.toFixed(2) }}</span>

          a vista ou 10 de R$ {{ installment }}
        </AppText>
      </li>

      <li class="unit">
        <AppText>
          <span>R$ {{ totalAmount.toFixed(2) }}</span> a vista ou 10 de R$
          {{ totalInstallment }}
        </AppText>
      </li>
    </ul>
  </div>
</template>

<style lang="sass">
.cart-product
  padding: 10px 0 30px

  & > ul:first-child
    border-top: 1px solid $grey

  & > .product-ul
    border-bottom: 1px solid $grey
    padding: 10px 0 30px

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
</style>
