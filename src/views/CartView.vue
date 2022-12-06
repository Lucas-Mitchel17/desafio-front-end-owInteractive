<script setup>
import { computed, ref } from 'vue';
import { RouterLink } from 'vue-router';
import {
  CartActions,
  CartHeader,
  CartProducts,
  CartTotal,
  useCartStore,
  useRemoveProductFromCart,
  useStorageCart,
} from '@Modules/cart';
import { useProductStore } from '@Modules/product';

const cartStore = useCartStore();
const productStore = useProductStore();
const { removeProduct } = useRemoveProductFromCart();
const { clearStorageCart } = useStorageCart();

const products = computed(() => {
  return productStore.products.filter(({ id }) =>
    cartStore.products.includes(id)
  );
});

const installments = 10;
const totalAmount = ref(0);

function onRemoveAllProducts() {
  cartStore.$reset();

  clearStorageCart();
}

function newTotalAmount(productTotal) {
  const newTotal = totalAmount.value + productTotal;

  totalAmount.value = newTotal;
}
</script>

<template>
  <MainLayout>
    <section class="cart-section">
      <template v-if="products.length">
        <CartHeader />

        <CartProducts
          v-for="product in products"
          :key="product.id"
          :installments="installments"
          :product="product"
          @onRemoveProduct="removeProduct"
          @onNewTotalAmount="newTotalAmount"
        />

        <CartActions @onRemoveAllProducts="onRemoveAllProducts" />

        <CartTotal
          :installments="installments"
          :totalAmount="totalAmount"
        />
      </template>

      <AppText
        v-else
        class="no-items"
      >
        <p>Nenhum produto no carrinho.</p>

        <RouterLink to="/">
          Clique aqui para ver a lista de produtos.
        </RouterLink>
      </AppText>
    </section>
  </MainLayout>
</template>

<style lang="sass">
.cart-section
  display: grid
  max-width: $desktop
  margin: 90px auto 0
  padding: 0 10px

  .no-items
    align-items: center
    display: flex
    flex-direction: column
    justify-content: center
    margin: auto
</style>
