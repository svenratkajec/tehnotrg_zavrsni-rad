export const wishlist = reactive({
  count: 0
});

export const addWishlistCount = () => {
  wishlist.count++;
};

export const subtractWishlistCount = () => {
  if (wishlist.count > 0) {
    wishlist.count--;
  }
}

export const cart = reactive({
  count: 0
});

export const addCartCount = () => {
  cart.count++;
};

export const subtractCartCount = () => {
  if (cart.count > 0) {
    cart.count--;
  }
}

export const resetCartCount = () => {
  cart.count = 0;
}

if (process.client) {
  if (localStorage.getItem("wishlist")) {
    wishlist.count = JSON.parse(localStorage.getItem("wishlist")).length;
  }
  if (localStorage.getItem("cart")) {
    cart.count = JSON.parse(localStorage.getItem("cart")).length;
  }
}

export const modalProductData = reactive({
  id_proizvoda: "",
  glavna_fotografija: "",
  naziv: "",
  cijena: ""
});

export const addDataToModal = obj => {
  modalProductData.id_proizvoda = obj.id_proizvoda;
  modalProductData.glavna_fotografija = obj.glavna_fotografija;
  modalProductData.naziv = obj.naziv;
  modalProductData.cijena = obj.cijena;
}