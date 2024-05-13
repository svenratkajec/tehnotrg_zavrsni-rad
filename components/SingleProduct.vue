<template>
  <article class="product" ref="productRef">
    <div :class="[!isWishlisted ? 'add-to-wishlist' : 'add-to-wishlist added active']" title="Dodaj na listu želja" @click="toWishlist"></div>
    <NuxtLink :to="`/proizvodi/${proizvod.glavna_fotografija.split('/')[0]}/${proizvod.id_proizvoda}`" class="img-container">
      <img class="product-img" :src="`/images/products/${proizvod.glavna_fotografija}`" :alt="proizvod.naziv">
    </NuxtLink>
    <div class="product-text-container">
      <NuxtLink :to="`/proizvodi/${proizvod.glavna_fotografija.split('/')[0]}/${proizvod.id_proizvoda}`" class="product-title">{{ proizvod.naziv }}</NuxtLink>
      <p class="product-specs" v-html="proizvod.specifikacije"></p>
      <div class="col-2-layout">
        <p class="product-price">{{ proizvod.cijena }}€</p>
        <img class="brand" :src="`/images/brands/${proizvod.naziv_branda}.jpg`" :alt="proizvod.naziv_branda">
      </div>
    </div>
    <div class="actions">
      <div class="amount">
        <span class="decrement-amount" @click="decrementAmount"></span>
        <input type="number" class="amount-input" v-model="amountCount" min="1">
        <span class="increment-amount"  @click="incrementAmount"></span>
      </div>
      <button class="add-to-cart" @click="addProduct"><span>U KOŠARICU</span></button>
    </div>
  </article>
</template>

<script setup>
  import { addToWishlist } from '~/composables/addToWishlist.js';
  import { addToCart } from '~/composables/addToCart.js';
  import { addDataToModal } from '~/globalStore.js';

  const props = defineProps(["proizvod", "animation"]);
  const emit = defineEmits(["clickedWishlist", "addedToCart"]);
  const productRef = ref(null);
  const isWishlisted = ref(false);
  const wishlist = ref([]);
  const amountCount = ref(1);

  onMounted(() => {
    if (localStorage.getItem("wishlist")) {
      wishlist.value = JSON.parse(localStorage.getItem("wishlist"));
    }
    if (wishlist.value.some(el => el.id_proizvoda === props.proizvod.id_proizvoda)) {
      isWishlisted.value = true;
    }
  });

  const toWishlist = () => {
    isWishlisted.value = !isWishlisted.value;
    addToWishlist(props.proizvod);
    if (props.animation === true) {
      productRef.value.classList.add("fade-out");
      emit("clickedWishlist");
    }
  }

  const addProduct = () => {
    addToCart({
      ...props.proizvod,
      kolicina: amountCount.value
    });
    addDataToModal(props.proizvod);
    emit("addedToCart");
  }

  const decrementAmount = () => {
    if (amountCount.value > 1) {
      amountCount.value--;
    } 
  }

  const incrementAmount = () => {
    amountCount.value++;
  }
</script>

<style scoped>
.product {
  width: 100%;
  max-width: 350px;
  min-width: 280px;
  background: #FEFEFE;
  transition: box-shadow .3s;
  position: relative;
  border-radius: 5px;
}

.product:hover {
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  outline: 0;
}

.add-to-wishlist {
  position: absolute;
  right: 30px;
  top: 30px;
  z-index: 10;
  cursor: pointer;
}

.add-to-wishlist::before {
  content: url('https://api.iconify.design/ph/heart.svg?color=%23333&width=30&height=30');
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.add-to-wishlist.added::before {
  content: url('https://api.iconify.design/ph/heart-fill.svg?color=%23d80000&width=30&height=30');
}

.add-to-wishlist.active::after {
  content: "Na listi želja";
  position: absolute;
  width: max-content;
  background: var(--gradient);
  color: white;
  padding: 5px;
  border-radius: 5px;
  top: -18px;
  left: -65px;
  font-size: 12px;
  transform: translateX(-50%);
  animation: fadeIn .3s;
}

@keyframes fadeIn {
  from {opacity: 0}
  to {opacity: 1}
}

.fade-out {
  animation: fadeOut .8s;
}

@keyframes fadeOut {
  from {opacity: 1}
  to {opacity: 0}
}

.product a {
  text-decoration: none;
  color: initial;
}

.product-img {
  width: 100%;
  padding-inline: 30px;
  padding-block: 20px;
}

.product-text-container {
  padding: 0 20px 20px 20px;
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.product-title {
  height: 48px;
  overflow: hidden;
  font-weight: 600;
}

.product-specs {
  color: var(--textClr);
}

.col-2-layout {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.product-price {
  font-size: 20px;
  font-weight: 600;
  background: var(--gradient);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  width: fit-content
}

.brand {
  width: 100%;;
  max-height: 30px;
  max-width: 100px;
  object-fit: contain;
}

.actions {
  opacity: 0;
  transition: .3s;
  padding: 0 20px 20px 20px;
  display: flex;
  gap: 10px;
}

.product:hover .actions {
  opacity: 1;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.amount {
  height: 35px;
  width: 70px;
  display: flex;
  justify-content: center;
  position: relative;
  border: 1px solid #bbbbbb;
}

.amount-input {
  width: 22px;
  text-align: center;
  font-size: 18px;
  background: var(--gradient);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  border: 0;
  outline: 0;
}

.decrement-amount::before {
  content: "";
  background: url("/icons/minus.png");
  width: 14px;
  height: 14px;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  position: absolute;
  left: 5px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  height: 100%;
}

.increment-amount::before {
  content: "";
  background: url("/icons/plus.png");
  width: 14px;
  height: 14px;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  position: absolute;
  right: 5px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  height: 100%;
}

.add-to-cart {
  cursor: pointer;
  background: var(--gradient);
  border: 0;
  outline: 0;
  height: 35px;
  padding-inline: 12px;
  color: white;
  position: relative;
  font-weight: 600;
  letter-spacing: .5px;
  transition: .3s;
}

.add-to-cart span::before {
  content: url('https://api.iconify.design/mdi/cart-outline.svg?color=white');
  position: relative;
  top: 3px;
  margin-right: 5px;
}

.add-to-cart:hover {
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
  transform: translateY(-2px);
}

@media screen and (max-width: 1000px) {
  .actions {
    opacity: 1;
    flex-direction: row;
    justify-content: space-between;
  }
  .product:hover {
    box-shadow: none;
  }
  .product {
    min-width: 260px;
  }
}

@media screen and (max-width: 700px) {
  .product {
    min-width: 200px;
  }
  .product-title {
    font-size: 14px;
    height: 40px;
  }
  .product-specs {
    font-size: 14px;
  }
  .product-price {
    font-size: 18px;
  }
  .brand {
    display: none;
  }
  .add-to-cart {
    font-size: 12px;
    height: 35px;
    flex-basis: 70%;
  }
  .add-to-wishlist::before {
    content: url("https://api.iconify.design/ph/heart.svg?color=%23333&width=25&height=25");
  }
  .add-to-wishlist.added::before {
    content: url("https://api.iconify.design/ph/heart-fill.svg?color=%23d80000&width=25&height=25");
  }
  .add-to-wishlist.active::after {
    left: -55px;
    font-size: 11px;
  }
}

@media screen and (max-width: 550px) {
  .add-to-cart span::before {
    display: none;
  }
}

@media screen and (max-width: 450px) {
  .add-to-cart {
    flex-basis: 80%;
  }
  .product-text-container {
    padding: 0 15px 10px 15px;
  }
  .actions {
    padding: 0 15px 20px 15px;
  }
  .add-to-cart {
    padding-block: 8px;
    font-size: 10px;
  }
  .amount-input {
    font-size: 14px;
  }
  .amount {
    width: 60%;
  }
}
</style>