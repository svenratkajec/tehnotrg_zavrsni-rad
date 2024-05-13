<template>
  <article class="cart-item" ref="productRef">
    <div class="main-col">
      <div class="sub-col">
        <NuxtLink :to="`/proizvodi/${proizvod.glavna_fotografija.split('/')[0]}/${proizvod.id_proizvoda}`">
          <img :src="`/images/products/${proizvod.glavna_fotografija}`" :alt="proizvod.naziv">
        </NuxtLink>
      </div>
      <div class="sub-col">
        <NuxtLink :to="`/proizvodi/${proizvod.glavna_fotografija.split('/')[0]}/${proizvod.id_proizvoda}`" class="item-name">{{ proizvod.naziv }}</NuxtLink>
        <p class="item-id">Šifra proizvoda: {{ proizvod.id_proizvoda }}</p>
        <div class="actions">
          <div class="remove-item" @click="removeProduct">Izbriši</div>
          <div class="add-to-wishlist" @click="toWishlist" v-if="!isWishlisted">Dodaj u omiljene artikle</div>
          <div class="add-to-wishlist remove-from-wishlist" @click="toWishlist" v-if="isWishlisted">Ukloni iz omiljenih artikla</div>
        </div>
      </div>
    </div>
    <div class="main-col">
      <div class="amount">
        <span class="decrement-amount" @click="decrementAmount"></span>
        <input type="number" class="amount-input" v-model="amountCount" min="1">
        <span class="increment-amount"  @click="incrementAmount"></span>
      </div>
      <div class="price gradient-text">{{ (proizvod.cijena * amountCount).toFixed(2) }}€</div>
    </div>
  </article>
</template>

<script setup>
  import { changeProductAmount } from '~/composables/addToCart.js';
  import { addToWishlist } from '~/composables/addToWishlist.js';
  import { addDataToModal } from '~/globalStore.js';

  const props = defineProps(["proizvod"]);
  const emit = defineEmits(["changedAmount", "removeProduct"]);
  const productRef = ref(null);
  const isWishlisted = ref(false);
  const wishlist = ref([]);

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
  }

  const removeProduct = () => {
      addDataToModal(props.proizvod);
      emit("removeProduct");
  }

  const amountCount = ref(props.proizvod.kolicina);

  const changeAmount = () => {
    changeProductAmount(props.proizvod.id_proizvoda, amountCount.value);
    emit("changedAmount");
  }

  const decrementAmount = () => {
    if (amountCount.value > 1) {
      amountCount.value--;
      changeAmount();
    } 
  }

  const incrementAmount = () => {
    amountCount.value++;
    changeAmount();
  }
</script>

<style scoped>
.cart-item {
  display: flex;
  border: 1px solid #dededf;
  padding-right: 25px;
  width: 100%;
  justify-content: space-between;
}

.main-col {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.main-col:first-child {
  flex-direction: row;
}

.main-col:nth-child(2) {
  gap: 10px;
}

.actions {
  display: flex;
  gap: 20px;
  margin-top: 15px;
  font-size: 13px;
  color: var(--textClr);
}

.remove-item {
  cursor: pointer;
  user-select: none;
}

.remove-item::before {
  content: url("https://api.iconify.design/gg/trash.svg?color=%23333&width=15&height=15");
  position: relative;
  top: 3px;
  margin-right: 3px;
}

.add-to-wishlist {
  cursor: pointer;
  user-select: none;
}

.add-to-wishlist::before {
  content: url("https://api.iconify.design/ph/heart.svg?color=%23333&width=15&height=15");
  position: relative;
  top: 3px;
  margin-right: 5px;
}

.remove-from-wishlist::before {
  content: url("https://api.iconify.design/ph/heart-fill.svg?color=%23d80000&width=15&height=15")
}

.fade-out {
  animation: fadeOut .8s;
}

@keyframes fadeOut {
  from {opacity: 1}
  to {opacity: 0}
}

.item-name {
  display: block;
  width: 100%;
  max-width: 340px;
  height: 50px;
  overflow: hidden;
  color: black;
  text-decoration: none;
  font-weight: 600;
}

.item-id {
  color: var(--textClr);
  font-size: 15px;
  margin-top: 5px;
}

img {
  width: 100%;
  max-width: 150px;
  padding: 20px;
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

.price {
  font-weight: 600;
}

@media screen and (max-width: 1100px) {
  .main-col {
    margin-right: 20px;
    padding-block: 10px;
  }
  .item-name {
    font-size: 14px;
    height: 42px;
  }
  .item-id {
    font-size: 14px;
  }
  .amount {
    width: 60px;
    height: 30px;
  }
  .amount-input {
    font-size: 14px;
    width: 20px;
  }
  .increment-amount::before,
  .decrement-amount::before {
    width: 11px;
  }
  .price {
    font-size: 15px;
  }
}

@media screen and (max-width: 1000px) {
  .main-col {
    padding-block: 0;
  }
  .amount {
    width: 70px;
    height: 35px;
  }
  .amount-input {
    font-size: 16px;
    width: 20px;
  }
  .increment-amount::before,
  .decrement-amount::before {
    width: 13px;
  }
  .price {
    font-size: 16px;
  }
}

@media screen and (max-width: 600px) {
  .cart-item {
    flex-direction: column;
    padding-block: 15px;
    padding-right: 0;
  }
  .main-col:nth-child(2) {
    flex-direction: row;
    justify-content: space-between;
    padding-left: 30px;
    margin-bottom: 5px;
    margin-top: 15px;
  }
  .actions {
    flex-direction: column;
    gap: 0;
  }
  .amount {
    height: 30px;
    width: 65px;
  }
  .amount-input {
    font-size: 14px;
  }
  .decrement-amount::before,
  .increment-amount::before {
    width: 12px;
  }
}
</style>