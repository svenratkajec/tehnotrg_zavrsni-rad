<template>
  <ProductDetailsSlider v-if="sliderActive" :imgs="fotografije" :photoIndex="photoIndex" @closeSlider="closeSlider" />
  <div class="wrapper">
    <div class="base-product-info">
      <p>Šifra artikla: {{ proizvod.id_proizvoda }}</p>
      <p>Brand: {{ proizvod.naziv_branda }}</p>
      <p>Kategorija: {{ proizvod.naziv_kategorije }}</p>
    </div>
    <section class="product-wrapper">
      <div class="img-selection">
        <div class="display-img-container">
          <img @click="openSlider" :src="`/images/products/${activeImgPath}`" :alt="proizvod.naziv">
        </div>
        <div class="img-container-wrap">
          <div :key="foto.id_fotografije" v-for="(foto, index) in fotografije" :class="activeImgPath === foto.putanja ? 'active-img-container img-container' : 'img-container'" @click="changeDisplayImg(foto.putanja, index)">
            <img :src="`/images/products/${foto.putanja}`" :alt="proizvod.naziv">
          </div>
        </div>
      </div>
      <div class="container-col-2">
        <div class="col-1">
          <h1 class="product-name gradient-text">{{ proizvod.naziv }}</h1>
          <div class="short-desc">
            <p class="short-desc-title">TEHNIČKE KARAKTERISTIKE:</p>
            <p class="short-desc-content" v-html="proizvod.specifikacije"></p>
            <a href="#desc" class="gradient-text show-more">SAZNAJ VIŠE</a>
          </div>
          <div class="basic-info">
            <ul>
              <li>{{ proizvod.jamstvo }} mj. jamstvo</li>
              <li v-if="proizvod.na_zalihi === 1">Na zalihi. Vrijeme isporuke: 2-4 dana</li>
              <li v-if="proizvod.na_zalihi === 0" class="not-in-stock">Nije na zalihi.</li>
              <li>Pravo povrata: 15 dana</li>
            </ul>
            <img :src="`/images/brands/${proizvod.naziv_branda}.jpg`" :alt="proizvod.naziv_branda" class="brand-img">
          </div>
          <div :class="[!isWishlisted ? 'wishlist' : 'wishlist added']" @click="toWishlist">{{ !isWishlisted ? "Dodaj na listu želja" : "Ukloni iz liste želja" }}</div>
          <div class="actions">
            <div class="amount">
              <span class="decrement-amount" @click="decrementAmount"></span>
              <input type="number" class="amount-input" v-model="amountCount" min="1">
              <span class="increment-amount"  @click="incrementAmount"></span>
            </div>
            <button class="add-to-cart" @click="addProduct" :disabled="proizvod.na_zalihi !== 1"><span>U KOŠARICU</span></button>
          </div>
        </div>
      </div>
    </section>
    <section id="desc" class="description">
      <p class="description-title">Opis proizvoda</p>
      <div class="product-desc" v-html="proizvod.opis"></div>
    </section>
    <section class="recommended-products">
      <p class="recommended-title"><span class="gradient-text">Moglo bi vas zanimati i...</span></p>
      <div class="products-section">
        <div :key="product.id_proizvoda" v-for="product in recommendedProducts">
          <SingleProduct :proizvod="product" class="single-product" @addedToCart="recommendedProductToCart" />
        </div>
      </div>
    </section>
    <Newsletter class="newsletter" />
  </div>
</template>

<script setup>
  import { addToWishlist } from '~/composables/addToWishlist.js';
  import { addToCart } from '~/composables/addToCart.js';
  import { toast } from 'vue3-toastify';
  import 'vue3-toastify/dist/index.css';

  const route = useRoute();
  const id = route.params.id;

  const result = await $fetch(`/api/getProductById?id=${id}`);
  const recommendedProducts = ref(await $fetch(`/api/getAllProductsInCategory?id=${result.proizvod.id_kategorije}&limit=4`));
  const proizvod = ref(result.proizvod);
  const fotografije = ref(result.fotografije);
  const activeImgPath = ref(fotografije.value[0].putanja);
  const isWishlisted = ref(false);
  const wishlist = ref([]);
  const amountCount = ref(1);
  const sliderActive = ref(false);
  const photoIndex = ref(0);

  onMounted(() => {
    if (localStorage.getItem("wishlist")) {
      wishlist.value = JSON.parse(localStorage.getItem("wishlist"));
    }
    if (wishlist.value.some(el => el.id_proizvoda === proizvod.value.id_proizvoda)) {
      isWishlisted.value = true;
    }

    useSeoMeta({
      title: proizvod.value.naziv
    });
  });

  const changeDisplayImg = (path, index) => {
    activeImgPath.value = path;
    photoIndex.value = index;
  }

  const toWishlist = () => {
    isWishlisted.value = !isWishlisted.value;
    addToWishlist(proizvod.value);
  }

  const decrementAmount = () => {
    if (amountCount.value > 1) {
      amountCount.value--;
    } 
  }

  const incrementAmount = () => {
    amountCount.value++;
  }

  const addProduct = () => {
    toast(`Dodano ${amountCount.value} kom. u košaricu.`, {
        autoClose: 1500,
        position: "bottom-right",
        newestOnTop: true,
        type: "success",
        onClick: () => { location.href = "/kosarica"; }
    });
    amountCount.value = 1;
    addToCart({
      ...proizvod.value,
      kolicina: amountCount.value
    });
  }

  const recommendedProductToCart = () => {
    toast(`Proizvod je dodan u košaricu.`, {
        autoClose: 1500,
        position: "bottom-right",
        newestOnTop: true,
        type: "success",
        onClick: () => { location.href = "/kosarica"; }
    });
  }

  const openSlider = () => {
    sliderActive.value = true;
  }

  const closeSlider = () => {
    sliderActive.value = false;
  }
</script>

<style scoped>
.wrapper {
  margin-top: 200px;
  max-width: 1500px;
  width: 100%;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
}

.base-product-info {
  color: white;
  font-size: 14px;
  margin-bottom: 40px;
  display: flex;
  gap: 30px;
  background: var(--gradient);
  padding: 10px 20px;
  border-radius: 5px;
  width: 100%;
  margin-top: 20px;
  letter-spacing: .5px;
}

.product-wrapper {
  display: flex;
  gap: 40px;
  align-items: flex-start;
  margin-bottom: 100px;
}

.img-selection {
  display: flex;
  flex-direction: column;
  flex-basis: 50%;
}

.container-col-2 {
  flex-basis: 50%;
  display: flex;
  gap: 50px;
  align-items: flex-start;
}

.display-img-container {
  border: 1px solid #f5f5f5;
  border-radius: 5px;
  padding: 50px;
  margin-bottom: 20px;
  cursor: zoom-in;
}

.display-img-container img {
  width: 100%;
  animation: scale .3s;
}

@keyframes scale {
  from {transform: scale(0);}
  to {transform: scale(1);}
}

.img-container-wrap {
  display: flex;
  gap: 10px;
}

.img-container {
  cursor: pointer;
  border: 1px solid #f5f5f5;
  max-width: 20%;
  border-radius: 5px;
  display: grid;
  place-items: center;
  aspect-ratio: 1/1;
}

.img-container:not(.active-img-container):hover {
  border-color: #e6e6e6;
}

.active-img-container {
  border: 1px solid transparent;
  background: linear-gradient(to right, white, white), var(--gradient);
  background-clip: padding-box, border-box;
  background-origin: padding-box, border-box;
}

.img-container img {
  width: 80%;
}

.img-container img:not(.active-img-container img) {
  opacity: .6;
}

.img-container:hover img:not(.active-img-container img) {
  opacity: 1;
}

.product-name {
  font-size: 30px;

}

.short-desc {
  margin-top: 30px;
  color: var(--textClr);
}

.short-desc-title {
  font-weight: 600;
  margin-bottom: 5px;
  font-size: 17px;
}

.brand-img {
  max-width: 100px;
  display: block;
  margin-top: 50px;
}

.show-more {
  margin-top: 10px;
  margin-bottom: 40px;
  display: block;
  position: relative;
  font-size: 14px;
  transition: .3s;
}

.show-more:hover {
  transform: translateX(3px);
}

.show-more::after {
  content: "";
  background: url("/icons/arrow-right.png");
  background-size: contain;
  width: 21px;
  height: 21px;
  position: absolute;
  right: -30px;
} 

.wishlist {
  position: relative;
  padding-left: 45px;
  cursor: pointer;
  color: var(--textClr);
  font-weight: 500;
  font-size: 18px;
  transition: .3s;
  width: fit-content;
  margin-top: 60px;
}

.wishlist:hover {
  padding-left: 48px;
}

.wishlist::before {
  content: url('https://api.iconify.design/ph/heart.svg?color=%23333&width=35&height=35');
  position: absolute;
  top: 62%;
  left: 0px;
  transform: translateY(-50%);
  filter: brightness(1.5);
}

.wishlist.added::before {
  content: url('https://api.iconify.design/ph/heart-fill.svg?color=%23d80000&width=35&height=35');
}

.actions {
  margin-top: 30px;
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
  height: 50px;
  width: 100px;
  display: flex;
  justify-content: center;
  position: relative;
  border: 1px solid #bbbbbb;
  border-radius: 5px;
}

.amount-input {
  width: 30px;
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
  width: 16px;
  height: 16px;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  position: absolute;
  left: 8px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  height: 100%;
}

.increment-amount::before {
  content: "";
  background: url("/icons/plus.png");
  width: 16px;
  height: 16px;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  position: absolute;
  right: 8px;
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
  height: 50px;
  padding-inline: 50px;
  color: white;
  position: relative;
  font-weight: 600;
  letter-spacing: .5px;
  transition: .3s;
  border-radius: 5px;
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

.basic-info {
  color: #7ba717;
}

.basic-info ul {
  list-style-type: none;
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.basic-info ul li::before {
  display: inline-block;
  width: 1em;
  height: 1em;
  vertical-align: -0.125em;
  content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Cpath fill='%237ba717' d='M16 2a14 14 0 1 0 14 14A14 14 0 0 0 16 2m-2 19.59l-5-5L10.59 15L14 18.41L21.41 11l1.596 1.586Z'/%3E%3Cpath fill='none' d='m14 21.591l-5-5L10.591 15L14 18.409L21.41 11l1.595 1.585z'/%3E%3C/svg%3E");
  margin-right: 8px;
}

.basic-info ul .not-in-stock::before {
  display: inline-block;
  width: 1em;
  height: 1em;
  vertical-align: -0.125em;
  content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%23D80000' fill-rule='evenodd' d='M12 1.25C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75S22.75 17.937 22.75 12S17.937 1.25 12 1.25M9.702 8.641a.75.75 0 0 0-1.061 1.06L10.939 12l-2.298 2.298a.75.75 0 0 0 1.06 1.06L12 13.062l2.298 2.298a.75.75 0 0 0 1.06-1.06L13.06 12l2.298-2.298a.75.75 0 1 0-1.06-1.06L12 10.938z' clip-rule='evenodd'/%3E%3C/svg%3E");
  margin-right: 8px;
}

.not-in-stock {
  color: #D80000;
}

#desc {
  scroll-margin-top: 150px;
}

.description-title {
  background: var(--gradient);
  color: white;
  font-weight: 600;
  letter-spacing: .3px;
  border-radius: 5px;
  padding: 10px 15px;
  font-size: 22px;
  margin-bottom: 30px;
  text-transform: uppercase;
}

.product-desc {
  color: var(--textClr);
  padding-inline: 15px;
  margin-bottom: 100px;
}

.recommended-products {
  margin-bottom: 80px;
}

.recommended-title {
  text-align: center;
  font-size: 35px;
  font-weight: bold;
}

.products-section {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
  margin-top: 60px;
}

@media screen and (max-width: 1000px) {
  .product-name {
    font-size: 22px;
  }
}

@media screen and (max-width: 800px) {
  .product-wrapper {
    flex-direction: column;
  }
  .short-desc {
    font-size: 15px;
  }
  .short-desc-title {
    font-size: 16px;
  }
  .basic-info {
    font-size: 14.5px;
  }
  .brand-img {
    max-width: 70px;
  }
  .show-more {
    margin-bottom: 30px;
  }
  .brand-img {
    margin-top: 30px;
  }
  .wishlist,
  .wishlist:hover {
    margin-top: 40px;
    font-size: 15px;
    padding-left: 40px;
  }
  .wishlist::before {
    content: url("https://api.iconify.design/ph/heart.svg?color=%23333&width=30&height=30");
  }
  .wishlist.wishlist.added::before {
    content: url("https://api.iconify.design/ph/heart-fill.svg?color=%23d80000&width=30&height=30");
  }
  .description-title {
    font-size: 18px;
  }
  .product-desc {
    font-size: 15px;
  }
  .recommended-title {
    font-size: 28px;
  }
}

@media screen and (max-width: 600px) {
  .wrapper {
    margin-top: 140px;
  }
  .base-product-info {
    font-size: 13px;
    flex-wrap: wrap;
    column-gap: 25px;
    row-gap: 10px;
    margin-bottom: 20px;
  }
  .description-title {
    font-size: 16px;
    margin-bottom: 20px;
  }
  .product-desc {
    font-size: 13px;
    margin-bottom: 50px;
  }
  .product-wrapper {
    margin-bottom: 50px;
  }
  .product {
    max-width: 100%;
  }
  .products-section {
    margin-top: 20px;
  }
  .recommended-title {
    font-size: 22px;
  }
  .recommended-products {
    margin-bottom: 50px;
  }
}
</style>