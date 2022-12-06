import { useCartStore, useStorageCart } from '@Modules/cart';

export default function useRemoveProductFromCart() {
  function removeProduct(id) {
    const cartStore = useCartStore();
    const { removeProduct } = useStorageCart();

    const productIndex = cartStore.products.indexOf(id);

    cartStore.products.pop(productIndex);
    removeProduct(id);
  }

  return {
    removeProduct,
  };
}
