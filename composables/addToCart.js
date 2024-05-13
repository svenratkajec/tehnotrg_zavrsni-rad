import { addCartCount, subtractCartCount, resetCartCount } from '~/globalStore.js';

const existingCart = ref([]);

if (process.client) {
  if (localStorage.getItem("cart")) {
    existingCart.value = JSON.parse(localStorage.getItem("cart"));
  }
}

export const addToCart = product => {
  const cartItem = existingCart.value.findIndex(el => el.id_proizvoda === product.id_proizvoda);
  if (cartItem !== -1) {
    const currAmount = existingCart.value[cartItem].kolicina; 
    existingCart.value.splice(cartItem, 1);
    existingCart.value.push({
      ...product,
      kolicina: product.kolicina + currAmount
    });
  } else {
    existingCart.value.push(product);
    addCartCount();
  }
  localStorage.setItem("cart", JSON.stringify(existingCart.value));
}

export const removeFromCart = productId => {
  const indexToRemove = existingCart.value.findIndex(el => el.id_proizvoda === productId);
  existingCart.value.splice(indexToRemove, 1);
  localStorage.setItem("cart", JSON.stringify(existingCart.value));
  subtractCartCount();
}

export const changeProductAmount = (productId, amount) => {
  const indexToChange = existingCart.value.findIndex(el => el.id_proizvoda === productId);
  existingCart.value[indexToChange].kolicina = amount;
  localStorage.setItem("cart", JSON.stringify(existingCart.value));
}

export const removeAllFromCart = () => {
  existingCart.value = [];
  localStorage.setItem("cart", JSON.stringify(existingCart.value));
  resetCartCount();
}