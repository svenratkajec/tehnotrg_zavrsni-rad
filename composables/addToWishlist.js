import { addWishlistCount, subtractWishlistCount } from '~/globalStore.js';

const existingWishlist = ref([]);

if (process.client) {
  if (localStorage.getItem("wishlist")) {
    existingWishlist.value = JSON.parse(localStorage.getItem("wishlist"));
  }
}

export const addToWishlist = product => {
  const wishlistItem = existingWishlist.value.findIndex(el => el.id_proizvoda === product.id_proizvoda);
  if (wishlistItem !== -1) {
    existingWishlist.value.splice(wishlistItem, 1);
    subtractWishlistCount();
  } else {
    existingWishlist.value.push(product);
    addWishlistCount();
  }
  localStorage.setItem("wishlist", JSON.stringify(existingWishlist.value));
}