<template>
  <ProductToCartModal :showModal="showModal" @closeModal="handleModal" />
  <div v-if="wishlist.count === 0" class="empty-wishlist">
    <p class="empty-wishlist-title">Nemate niti jedan proizvod na listi želja.</p>
    <p class="empty-wishlist-subtitle">Nismo u mogućnosti pronaći rezultate. <br> Dodajte proizvode na vašu listu želja kako biste ih vidjeli ovdje.</p>
    <NuxtLink to="/" class="back-to-shopping">Nastavi kupovati</NuxtLink>
  </div>
  <div class="products" v-if="wishlist.count !== 0">
    <div :key="wishlistItem.id_proizvoda" v-for="wishlistItem in wishlistItems">
      <SingleProduct :proizvod="wishlistItem" :animation="true" @clickedWishlist="fetchProductsFromStorage" @addedToCart="handleModal" />
    </div>
  </div>
</template>

<script setup>
  import { wishlist } from '~/globalStore.js';

  useSeoMeta({
    title: "Moja lista želja"
  });

  const wishlistItems = ref([]);
  const fetchProductsFromStorage = () => {
    if (wishlist.count === 0) {
      wishlist.count = 1;
    }
    setTimeout(() => {
      wishlistItems.value = JSON.parse(localStorage.getItem("wishlist"));
      if (wishlistItems.value) {
        wishlistItems.value = wishlistItems.value.reverse();
      }
      wishlist.count = wishlistItems.value.length;
    }, 500);
  }
  
  onMounted(() => {
    wishlistItems.value = JSON.parse(localStorage.getItem("wishlist"));
    if (wishlistItems.value) {
        wishlistItems.value = wishlistItems.value.reverse();
      }
  });

  const showModal = ref(false);
  const handleModal = () => {
    showModal.value = !showModal.value;
  }
</script>

<style scoped>
.empty-wishlist {
  text-align: center;
  margin-top: 200px;
}

.empty-wishlist-title {
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

.products {
  margin-top: 200px;
  display: grid;
  grid-template-columns: repeat(auto-fill, calc(20% - 20px));
  gap: 20px;
}

.product {
  width: auto;
  max-width: 100%;
  min-width: auto;
}

@media screen and (max-width: 1600px) {
  .products {
    grid-template-columns: repeat(auto-fill, calc(25% - 20px));
    margin-top: 180px;
  }
}

@media screen and (max-width: 1300px) {
  .products {
    gap: 0;
    row-gap: 30px;
    grid-template-columns: repeat(auto-fill, 33.33%);
  }
}

@media screen and (max-width: 900px) {
  .products {
    margin-top: 130px;
    margin-inline: -5vw;
  }
  .empty-wishlist {
    margin-top: 180px;
  }
  .empty-wishlist-title {
    font-size: 18px;
    margin-bottom: 15px;
  }
  .empty-wishlist-subtitle {
    font-size: 14px;
  }
}

@media screen and (max-width: 770px) {
  .products {
    row-gap: 20px;
    grid-template-columns: repeat(auto-fill, 50%);
  }
}
</style>