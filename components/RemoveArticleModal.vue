<template>
  <ClientOnly>
    <Teleport to="body">
      <div class="modal">
        <Transition name="fade">
          <div class="backdrop" v-if="showModal" @click="emit('closeModal')"></div>
        </Transition>
        <Transition name="slide">
          <div class="remove-article-modal" v-if="showModal">
            <div class="modal-head" v-if="showModal">Jeste li sigurni da želite obrisati artikl?</div>
            <div class="modal-body">
              <p class="item-name">{{ proizvod.naziv }}</p>
              <div class="actions">
                <button class="accept" @click="removeProduct">POTVRDI</button>
                <button class="cancel" @click="emit('closeModal')">ODUSTANI</button>
              </div>
            </div>
          </div>
        </Transition>
      </div>
    </Teleport>
  </ClientOnly>
</template>

<script setup>
  import { modalProductData } from '~/globalStore.js';
  import { removeFromCart } from '~/composables/addToCart.js';

  const props = defineProps(["showModal"]);
  const emit = defineEmits(["closeModal", "fetchProducts"]);
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

  const removeProduct = () => {
    removeFromCart(proizvod.value.id_proizvoda);
    emit("closeModal");
    emit("fetchProducts");
  }
</script>

<style scoped>
  .remove-article-modal {
    background: white;
    position: fixed;
    top: 10%;
    left: 50%;
    transform: translateX(-50%);
    z-index: 99999999;
    width: 100%;
    max-width: 500px;
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
    transform: translate(-50%, -20%);
  }

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }

  .modal-head {
    padding: 15px 20px;
    background: #f5f5f5;
    font-weight: 600;
  }

  .modal-body {
    padding: 20px;
  }

  .item-name {
    font-size: 15px;
  }

  .actions {
    display: flex;
    gap: 10px;
    justify-content: flex-end;
    margin-top: 50px;
    position: relative;
  }

  .actions::before {
    content: "";
    height: 1px;
    width: 100%;
    position: absolute;
    background: #e0e0e0;
    left: 0;
    top: -20px;
  }

  .cancel,
  .accept {
    cursor: pointer;
    background: var(--gradient);
    border: 0;
    outline: 0;
    padding: 8px 12px;
    color: white;
    position: relative;
    font-weight: 600;
    letter-spacing: .5px;
    transition: .3s;
    font-size: 13px;
    border-radius: 5px;
  }

  .cancel:hover,
  .accept:hover {
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.05);
    transform: translateY(-2px);
  }

  @media screen and (max-width: 600px) {
    .remove-article-modal {
      max-width: 350px;
    }
    .actions {
      flex-direction: column;
    }
    .modal-head {
      font-size: 14px;
    }
    .item-name {
      font-size: 14px;
    }
  }
</style>