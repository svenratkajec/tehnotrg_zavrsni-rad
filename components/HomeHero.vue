<template>
  <div class="home-hero">
    <div class="container">
      <div class="inner-container">
        <h1 class="title">Vaša destinacija broj 1 za kupovinu IT periferije!</h1>
        <p class="introduction">Pronađite najnovije gadgete, softvere i opremu. Sve što vam je potrebno za uspjeh u digitalnom svijetu čeka vas na našoj platformi.</p>
        <div class="actions">
          <NuxtLink to="/o-nama" class="btn btn-fill"><span class="gradient-text">O nama</span></NuxtLink>
          <NuxtLink to="/kontakt" class="btn btn-outline">Kontakt</NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.home-hero {
  width: calc(100% + 10.5vw);
  height: 600px;
  background: var(--gradient);
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  padding-inline: 5vw;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
}

.home-hero::before {
  content: "";
  background: url("/images/home-hero-image.png");
  background-size: contain;
  background-repeat: no-repeat;
  width: 400px;
  height: 440px;
  position: absolute;
  bottom: 0;
  right: 20vw;
  filter: drop-shadow(50px 50px 100px var(--primClr));
  animation: slideInImg 1s;
  z-index: -1;
}

@keyframes slideInImg {
  from {bottom: -120%}
  to {bottom: 0}
}

@keyframes slideInText {
  from {transform: translateX(-150%)}
  to {transform: translateX(0)}
}

.container {
  max-width: 1300px;
  width: 100%;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
}

.inner-container {
  max-width: 550px;
  width: 100%;
  animation: slideInText 1.5s;
}

.title {
  color: white;
  font-size: 40px;
}

.introduction {
  color: rgb(225, 225, 225);
  margin-top: 20px;
}

.actions {
  margin-top: 50px;
  display: flex;
  gap: 20px;
}

.btn {
  text-decoration: none;
  border-radius: 5px;
  padding: 10px 25px;
  font-weight: bold;
  transition: .3s;
}

.btn:hover {
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
  transform: translateY(-2px);
}

.btn-fill {
  background: white;
}

.btn-outline {
  border: 1px solid white;
  color: white;
}

@media screen and (max-width: 1350px) {
  .home-hero::before {
    right: 5vw;
  }
}

@media screen and (max-width: 1100px) {
  .home-hero::before {
    display: none;
  }
  .container {
    display: flex;
    justify-content: center;
    text-align: center;
  }
  .actions {
    justify-content: center;
  }
}

@media screen and (max-width: 800px) {
  .title {
    font-size: 35px;
  }
  .introduction {
    font-size: 15px;
  }
  .actions {
    margin-top: 40px;
  }
  .btn {
    font-size: 15px;
  }
}

@media screen and (max-width: 600px) {
  .home-hero {
    height: 380px;
  }
  .title {
    font-size: 24px;
  }
  .introduction {
    font-size: 14px;
  }
  .btn {
    font-size: 13px;
  }
}
</style>
