export default function useStorageCart() {
  function clearStorageCart() {
    localStorage.removeItem('cart');
  }

  function getStorageCart() {
    return JSON.parse(localStorage.getItem('cart'));
  }

  function getStorageProduct(id) {
    const storageCart = getStorageCart();

    return storageCart
      ? storageCart.find((product) => product.id === id)
      : null;
  }

  function removeProduct(id) {
    const storageCart = getStorageCart();

    const newCart = storageCart.filter((product) => product.id !== id);

    updateStorageCart(newCart);
  }

  function updateStorageCart(cart) {
    localStorage.setItem('cart', JSON.stringify(cart));
  }

  function updateProductQtt(id, qtt) {
    const storageCart = getStorageCart();

    const newCart = storageCart.map((product) => {
      if (product.id === id) {
        product.qtt = qtt;
      }

      return product;
    });

    updateStorageCart(newCart);
  }

  return {
    clearStorageCart,
    getStorageCart,
    getStorageProduct,
    removeProduct,
    updateStorageCart,
    updateProductQtt,
  };
}
