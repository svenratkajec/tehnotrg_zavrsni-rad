<template>
  <div class="new-products">
    <p class="title gradient-text">Najnovija ponuda</p>
    <div class="products">
      <div :key="product.id_proizvoda" v-for="product in products">
        <SingleProduct class="product" :proizvod="product" @addedToCart="addedToCart" />
      </div>
    </div>
  </div>
</template>

<script setup>
  import { toast } from 'vue3-toastify';
  import 'vue3-toastify/dist/index.css';

  const products = await $fetch("/api/getNewProducts?limit=4");

  const addedToCart = () => {
    toast(`Proizvod je dodan u košaricu.`, {
      autoClose: 1500,
      position: "bottom-right",
      newestOnTop: true,
      type: "success",
      onClick: () => { location.href = "/kosarica"; }
    });
  }
</script>

<style scoped>
.new-products {
  margin-bottom: 50px;
}

.title {
  font-weight: bold;
  font-size: 30px;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  margin-bottom: 50px;
}

.products {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
  margin-top: 60px;
}

@media screen and (max-width: 665px) {
  .product {
    max-width: 100%;
  }
  .title {
    font-size: 24px;
  }
}
</style>