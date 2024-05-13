<template>
  <div class="container">
    <img class="spin" :src="`/icons/spin-animation.svg`" v-if="pending">
    <div class="text" v-if="pending">Obrađujem zahtjev...</div>
    <svg v-if="!pending" class="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52"><circle class="checkmark__circle" cx="26" cy="26" r="25" fill="none"/><path class="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/></svg>
    <div class="text" v-if="!pending">Narudžba poslana!</div>
    <NuxtLink to="/kosarica" class="back-btn" @click="emit('resetStep')" v-if="!pending"><span class="gradient-text">U redu</span></NuxtLink>
  </div>
</template>

<script setup>
  const props = defineProps(["formData", "sum", "cartItems"]);
  const emit = defineEmits(["resetStep"]);
  const pending = ref(true);
  onMounted(async () => {
    const saveToDb = await $fetch("/api/saveOrderToDb", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: { 
        narucitelj: props.formData,
        ukupnaCijena: props.sum,
        proizvodi: props.cartItems
      }
    });
    if (saveToDb) {
      pending.value = false;
    } else {
      alert("Greška");
    }
  });
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  left: 50%;
  top: calc(50vh - 180px);
  transform: translateX(-50%);
}

.text {
  font-size: 20px;
  margin-top: 20px;
}

.spin {
  width: 125px;
}

.checkmark {
  width: 90px;
  height: 90px;
  border-radius: 50%;
  display: block;
  stroke-width: 2;
  stroke: white;
  stroke-miterlimit: 10;
  box-shadow: inset 0px 0px 0px #7ac142;
  animation: fill .4s ease-in-out .4s forwards, scale .3s ease-in-out .9s both;
}

.checkmark__circle {
  stroke-dasharray: 166;
  stroke-dashoffset: 166;
  stroke-width: 2;
  stroke-miterlimit: 10;
  stroke: #7ac142;
  fill: none;
  animation: stroke .6s cubic-bezier(0.650, 0.000, 0.450, 1.000) forwards;
}

.checkmark__check {
  transform-origin: 50% 50%;
  stroke-dasharray: 48;
  stroke-dashoffset: 48;
  animation: stroke .3s cubic-bezier(0.650, 0.000, 0.450, 1.000) .8s forwards;
}

@keyframes stroke {
  100% {
    stroke-dashoffset: 0;
  }
}

@keyframes scale {
  0%, 100% {
    transform: none;
  }
  50% {
    transform: scale3d(1.1, 1.1, 1);
  }
}

@keyframes fill {
  100% {
    box-shadow: inset 0px 0px 0px 50px #7ac142;
  }
}

.back-btn {
  border: 1px solid transparent;
  border-radius: 5px;
  background: linear-gradient(to right, white, white), var(--gradient);
  background-clip: padding-box, border-box;
  background-origin: padding-box, border-box;
  padding: 5px 20px;
  font-weight: 600;
  cursor: pointer;
  transition: .3s;
  margin-top: 20px;
  text-decoration: none;
  font-size: 14px;
}

.back-btn:hover {
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.05);
  transform: translateY(-2px);
}

@media screen and (max-width: 650px) {
  .checkmark {
    width: 65px;
    height: 65px;
  }
  .text {
    font-size: 18px;
  }
  .spin {
    width: 65px;
  }
}
</style>