<template>
  <div>    
    <Transition name="fade">
      <div class="slider">
        <div class="backdrop" @click="emit('closeSlider')"></div>
        <Swiper @swiper="onSwiper">
          <SwiperSlide :key="index" v-for="(img, index) in imgs">
            <img :src="`/images/products/${img.putanja}`">
          </SwiperSlide>
        </Swiper>
      </div>
    </Transition>
  </div>
</template>

<script setup>
  const props = defineProps(["imgs", "photoIndex"]);
  const emit = defineEmits(["closeSlider"]);

  const onSwiper = swiper => {
    swiper.slideTo(props.photoIndex, 0, false);
  }
</script>

<style scoped>
.slider {
  position: fixed;
  inset: 0;
  z-index: 99999;
  display: flex;
  align-items: center;
  animation: fadeIn .3s;
}

.backdrop {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, .8);
}

.swiper {
  width: 40%;
}
  
img {
  width: 100%;
}

.fade-enter-active,
.fade-leave-active {
  transition: 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

@keyframes fadeIn {
  from {opacity: 0;}
  to {opacity: 1;}
}

@media screen and (max-width: 800px) {
  .swiper {
    width: 80%;
  }
}
</style>