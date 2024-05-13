<template>
  <div>
    <Header v-if="showComponent" />
    <main>
      <NuxtPage />
    </main>
    <Footer v-if="showComponent" />
  </div>
</template>

<script setup>
  import { configure } from 'vee-validate';

  configure({
    validateOnBlur: false,
    validateOnChange: true,
    validateOnInput: true,
    validateOnModelUpdate: true
  });

  const route = useRoute();
  const showComponent = route.path !== "/manage";
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

:root {
  --primClr: rgb(0, 156, 212);
  --gradientClr1: rgb(45, 56, 138);
  --gradientClr2: rgb(0, 174, 239);
  --gradient: linear-gradient(to right, var(--gradientClr1) 0%, var(--gradientClr2) 100%);
  --textClr: #3F3F3F;
  --toastify-color-progress-success: var(--gradient) !important;
  --toastify-icon-color-success: var(--primClr) !important;
  --toastify-text-color-light: var(--textClr) !important;
}

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  font-family: "poppins";
}

body {
  overflow-x: hidden;
}

main {
  margin-top: 135px;
  padding-inline: 5vw;
}

.gradient-text {
  background: var(--gradient);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  width: fit-content;
}

.gradient-border {
  border: 1px solid transparent;
  border-radius: 5px;
  background: linear-gradient(to right, white, white), var(--gradient);
  background-clip: padding-box, border-box;
  background-origin: padding-box, border-box;
  transition: .3s;
  width: fit-content;
}

.gradient-border:hover {
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.05);
  transform: translateY(-2px);
}

.prevent-scrolling {
  overflow: hidden;
}

@media screen and (max-width: 1500px) {
  main {
    margin-top: 120px;
  }
}

@media screen and (max-width: 600px) {
  main {
    margin-top: 100px;
  }
  body, html {
    scroll-behavior: smooth;
  }
}
</style>