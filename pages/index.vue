<template>
  <HomeHero />
  <div class="wrapper">
    <HomeCategories />
    <Benefits />
    <NewProducts />
    <Newsletter />
    <Contact class="contact" />
  </div>
</template>

<script setup>
  useSeoMeta({
    title: "TehnoTrg - Vaša IT trgovina"
  });
</script>

<style scoped>
.wrapper {
  max-width: 1300px;
  width: 100%;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  margin-top: 100px;
  animation: fadeIn .5s;
}

.contact {
  margin-top: 100px;
}

@keyframes fadeIn {
  from {opacity: 0}
  to {opacity: 1}
}

@media screen and (max-width: 600px) {
  .wrapper,
  .contact {
    margin-top: 50px;
  }
}
</style>