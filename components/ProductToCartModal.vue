<template>
  <Teleport to="body">
    <div class="modal">
      <Transition name="fade">
        <div class="backdrop" v-if="showModal" @click="emit('closeModal')"></div>
      </Transition>
      <Transition name="slide">
        <div class="add-to-cart-modal" v-if="showModal">
          <div class="modal-head">
            <p>Proizvod je dodan u košaricu</p>
            <div class="close-modal" @click="emit('closeModal')"></div>
          </div>
          <div class="img-container">
            <img :src="`/images/products/${proizvod.glavna_fotografija}`" :alt="proizvod.naziv" class="product-img">
          </div>
          <div class="modal-body">
            <p class="product-name">{{ proizvod.naziv }}</p>
            <p class="product-id">Šifra proizvoda: {{ proizvod.id_proizvoda }}</p>
            <p class="price gradient-text">{{ proizvod.cijena }}€</p>
            <div class="actions">
              <button class="keep-buying-btn" @click="emit('closeModal')">NASTAVI KUPOVATI</button>
              <NuxtLink to="/kosarica" class="view-cart" @click="goToCart"><span class="gradient-text">PREGLED KOŠARICE</span></NuxtLink>
            </div>
          </div>
        </div>
      </Transition>
    </div>
  </Teleport>
</template>

<script setup>
  import { modalProductData } from '~/globalStore.js';

  const props = defineProps(["showModal"]);
  const emit = defineEmits(["closeModal"]);
  const proizvod = computed(() => modalProductData);

  watch(() => props.showModal, (newVal, oldVal) => {
    if (newVal) {
      document.body.classList.add("prevent-scrolling");
    } else {
      setTimeout(() => {
        document.body.classList.remove("prevent-scrolling");
      }, 250);
    }
  })

  const goToCart = () => {
    document.body.classList.remove("prevent-scrolling");
    emit("closeModal");
  }
</script>

<style scoped>
  .add-to-cart-modal {
    background: white;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 99999999;
    width: 100%;
    max-width: 350px;
  }

  .backdrop {
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    inset: 0;
    z-index: 999999;
  }

  .slide-enter-active,
  .slide-leave-active,
  .fade-enter-active,
  .fade-leave-active {
    transition: 0.3s ease;
  }

  .slide-enter-from,
  .slide-leave-to {
    opacity: 0;
    transform: translate(-50%, -60%);
  }

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }

  .modal-head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 20px;
    background: #f5f5f5;
  }

  .modal-head p {
    font-size: 17px;
    font-weight: 500;
  }

  .close-modal {
    position: relative;
    width: 30px;
    height: 30px;
    cursor: pointer;
  }

  .close-modal::before {
    content: "";
    background: url("/icons/x-mark.png");
    display: inline-block;
    background-size: contain;
    width: 100%;
    height: 100%;
  }

  .img-container {
    display: grid;
    place-items: center;
    padding: 15px 20px;
  }

  .img-container img {
    width: 100%;
    height: 100%;
  }

  .modal-body {
    padding: 0 20px;
  }

  .product-name {
    font-weight: 600;
    height: 50px;
    overflow: hidden;
    margin-bottom: 10px;
  }

  .price {
    margin-top: 10px;
    font-weight: 600;
    font-size: 25px;
  }

  .actions {
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    gap: 10px;
    margin-bottom: 20px;
  }

  .keep-buying-btn {
  cursor: pointer;
  background: var(--gradient);
  border: 0;
  outline: 0;
  padding: 10px 12px;
  color: white;
  position: relative;
  font-weight: 600;
  letter-spacing: .5px;
  transition: .3s;
}

.view-cart {
  border: 1px solid transparent;
  background: linear-gradient(to right, white, white), var(--gradient);
  background-clip: padding-box, border-box;
  background-origin: padding-box, border-box;
  padding: 8px 12px;
  font-weight: 600;
  cursor: pointer;
  transition: .3s;
  text-decoration: none;
  text-align: center;
  font-size: 14px;
}

.keep-buying-btn:hover,
.view-cart:hover {
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.05);
  transform: translateY(-2px);
}

@media screen and (max-width: 700px) {
  .add-to-cart-modal {
    max-width: 300px;
  }
  .modal-head {
    padding: 15px;
  }
  .modal-head p {
    font-size: 14px;
  }
  .close-modal {
    width: 21px;
    height: 21px;
  }
  .product-name {
    font-size: 14px;
    height: 44px;
  }
  .product-id {
    font-size: 14px;
  }
  .price {
    font-size: 20px;
  }
  .keep-buying-btn,
  .view-cart {
    font-size: 12px;
  }
}
</style>