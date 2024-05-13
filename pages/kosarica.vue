<template>
  <RemoveArticleModal :showModal="showModal" @closeModal="handleModal" @fetchProducts="fetchProductsFromStorage" />
  <div v-if="cart.count === 0 && step === 1" class="empty-cart">
    <p class="empty-cart-title">Vaša košarica je prazna.</p>
    <p class="empty-cart-subtitle">Nismo u mogućnosti pronaći rezultate. <br> Dodajte proizvode u košaricu kako biste ih vidjeli ovdje.</p>
    <NuxtLink to="/" class="back-to-shopping">Nastavi kupovati</NuxtLink>
  </div>
  <MultiStep :step="step" @changeStep="changeStep" v-if="cart.count !== 0" />
  <div class="cart-wrapper">
    <div class="products" v-if="step === 1 && cart.count !== 0">
      <div :key="cartItem.id_proizvoda" v-for="cartItem in cartItems">
        <CartItem :proizvod="cartItem" @fetchProducts="fetchProductsFromStorage" @removeProduct="showModal = !showModal" @changedAmount="recalculateSum" />
      </div>
      <NuxtLink to="/" class="back-btn gradient-border"><span class="gradient-text">Natrag na kupovinu</span></NuxtLink>
    </div>
    <CheckoutForm :formData="formData" :error="formError" @changedData="changeFormData" @validateForm="validateFormData" v-if="step === 2" />
    <CheckoutSidebar :step="step" :sum="sum" :cartItems="cartItems" @incrementStep="incrementStep" @decrementStep="decrementStep" v-if="cart.count !== 0 && step !== 3" />
    <ConfirmOrder :formData="formData" :total="sum" :error="formError" @decrementStep="decrementStep" @savePaymentMethod="savePaymentMethod" @handleOrderSubmit="handleOrderSubmit" v-if="step === 3" />
    <OrderCompleted @resetStep="step = 1" v-if="step === 4" :formData="formData" :sum="sum" :cartItems="cartItems" />
  </div>
</template>

<script setup>
  import { cart } from '~/globalStore.js';
  import { removeAllFromCart } from "~/composables/addToCart.js";

  useSeoMeta({
    title: "Moja košarica"
  });

  const cartItems = ref([]);
  const fetchProductsFromStorage = () => {
    if (cart.count === 0) {
      cart.count = 1;
    }
    cartItems.value = JSON.parse(localStorage.getItem("cart"));
    if (cartItems.value) {
      cartItems.value = cartItems.value.reverse();
      cart.count = cartItems.value.length;
    }
    recalculateSum();
  }
  
  onMounted(() => {
    cartItems.value = JSON.parse(localStorage.getItem("cart"));
    if (cartItems.value) {
      cartItems.value = cartItems.value.reverse();
    }
    recalculateSum();
  });

  const sum = ref(0);
  const recalculateSum = () => {
    sum.value = 0;
    cartItems.value = JSON.parse(localStorage.getItem("cart"));
    if (cartItems.value) {
      cartItems.value.forEach(cartItem => {
        sum.value += cartItem.cijena * cartItem.kolicina;
      });
    }
  }
  
  const step = ref(1);
  const changeStep = stepArg => {
    step.value = stepArg;
    if (stepArg === 3 && formValidated.value === false ) {
      formError.value = true;
      step.value = 2;
    } else {
      step.value = stepArg;
      formError.value = false;
    }
  }

  const incrementStep = () => {
    step.value++;
  }

  const decrementStep = () => {
    step.value--;
    formError.value = false;
  }

  const formData = ref({
    r1: false,
    tvrtka: "",
    oib: "",
    ime: "",
    email: "",
    telefon: "",
    mjesto: "",
    adresa: "",
    postBroj: "",
    nacinPlacanja: ""
  });
  const formError = ref(false);
  const formValidated = ref(false);

  const changeFormData = event => {
    formValidated.value = false;
    formError.value = false;
    if (event.target.name === "r1") {
      formData.value.r1 = event.target.checked; 
    }
    if (event.target.name === "company") {
      formData.value.tvrtka = event.target.value;
    }
    if (event.target.name === "oib") {
      formData.value.oib = event.target.value;
    }
    if (event.target.name === "name") {
      formData.value.ime = event.target.value;
    }
    if (event.target.name === "email") {
      formData.value.email = event.target.value;
    }
    if (event.target.name === "place") {
      formData.value.mjesto = event.target.value;
    }     
    if (event.target.name === "postalcode") {
      formData.value.postBroj = event.target.value;
    }      
    if (event.target.name === "adress") {
      formData.value.adresa = event.target.value;
    }           
    if (event.target.name === "telephone") {
      formData.value.telefon = event.target.value;
    }  
  }

  const validateFormData = () => {
    if (formData.value.r1) {
      if (formData.value.tvrtka === "" || formData.value.oib === "") {
        formValidated.value = false;
        formError.value = true;
      } else {
        formValidated.value = true;
        formError.value = false;
        step.value = 3;
      }
    } else {
      formValidated.value = true;
      formError.value = false;
      step.value = 3;
    }
  }

  const savePaymentMethod = event => {
    formData.value.nacinPlacanja = event.target.value;
    formError.value = false;
  }

  const handleOrderSubmit = () => {
    if (formData.value.nacinPlacanja) {
      removeAllFromCart();
      step.value = 4;
    } else {
      formError.value = true;
    }
  }

  const showModal = ref(false);
  const handleModal = () => {
    showModal.value = !showModal.value;
  }
</script>

<style scoped>
.empty-cart {
  text-align: center;
  margin-top: 200px;
}

.empty-cart-title {
  font-weight: 500;
  font-size: 22px;
  margin-bottom: 20px;
}

.back-to-shopping {
  cursor: pointer;
  background: var(--gradient);
  border: 0;
  outline: 0;
  color: white;
  display: inline-block;
  font-weight: 600;
  letter-spacing: .5px;
  transition: .3s;
  text-decoration: none;
  font-size: 13px;
  padding: 10px 20px;
  text-transform: uppercase;
  margin-top: 30px;
  border-radius: 5px;
}

.back-to-shopping:hover {
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
  transform: translateY(-2px);
}

.cart-wrapper {
  display: flex;
  justify-content: center;
  gap: 50px;
  max-width: 1300px;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  margin-bottom: 50px;
}

.products {
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 70%;
  position: relative;
}

.back-btn {
  padding: 5px 20px;
  font-weight: 600;
  cursor: pointer;
  transition: .3s;
  text-decoration: none;
  width: fit-content;
  font-size: 14px;
  margin-top: 15px;
}

@media screen and (max-width: 1300px) {
  .products {
    width: 60%;
  }
}

@media screen and (max-width: 1000px) {
  .cart-wrapper {
    flex-direction: column;
  }
  .products {
    width: 100%;
  }
  .back-btn {
    margin-top: 0;
    font-size: 13px;
  }
}

@media screen and (max-width: 1000px) {
  .cart-wrapper {
    gap: 40px;
  }
}

@media screen and (max-width: 650px) {
  .empty-cart {
    margin-top: 180px;
  }
  .empty-cart-title {
    font-size: 18px;
    margin-bottom: 15px;
  }
  .empty-cart-subtitle {
    font-size: 14px;
  }
}
</style>