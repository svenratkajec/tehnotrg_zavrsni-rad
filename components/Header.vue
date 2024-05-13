<template>
  <header>
    <nav class="top-bar">
      <NuxtLink to="tel: +385 92 337 6584" class="support">Podrška: <span style="font-weight: 600;">+385 92 337 6584</span></NuxtLink>
      <ul class="top-nav">
        <li><NuxtLink @click="closeMenu" to="/">Naslovnica</NuxtLink></li>
        <li><NuxtLink @click="closeMenu" to="/o-nama">O nama</NuxtLink></li>
        <li><NuxtLink @click="closeMenu" to="/poslovnice">Poslovnice</NuxtLink></li>
        <li><NuxtLink @click="closeMenu" to="/cesta-pitanja">Česta pitanja</NuxtLink></li>
        <li><NuxtLink @click="closeMenu" to="/kontakt">Kontakt</NuxtLink></li>
      </ul>
      <div class="socials">
        <a href="https://www.facebook.com/" target="_blank" title="Facebook"><Icon name="ri:facebook-fill"/></a>
        <a href="https://www.instagram.com/" target="_blank" title="Instagram"><Icon name="mdi:instagram"/></a>
        <a href="https://www.youtube.com/" target="_blank" title="YouTube"><Icon name="ri:youtube-fill"/></a>
        <a href="https://www.tiktok.com/" target="_blank" title="TikTok"><Icon name="ic:baseline-tiktok"/></a>
      </div>
    </nav>
    <div class="bottom-bar">
      <NuxtLink to="/" class="logo"><span>TehnoTrg</span></NuxtLink>
      <div class="menu">
        <div class="open-menu" @click="openMenu"></div>
        <nav ref="nav" class="category-nav">
          <div class="close-menu" @click="closeMenu"></div>
          <NuxtLink @click="closeMenu" to="/kategorije/laptopi-racunala/1" class="single-link nav-item1">Laptopi, računala</NuxtLink>
          <div class="category">
            <span class="category-name nav-item2" @click="toggleTab(1)" ref="catName1">Komponente</span>
            <div class="dropdown" ref="catDrop1">
              <ul>
                <li><NuxtLink @click="closeMenu" to="/kategorije/procesori/2">Procesori</NuxtLink></li>
                <li><NuxtLink @click="closeMenu" to="/kategorije/graficke-kartice/3">Grafičke kartice</NuxtLink></li>
                <li><NuxtLink @click="closeMenu" to="/kategorije/maticne-ploce/4">Matične ploče</NuxtLink></li>
                <li><NuxtLink @click="closeMenu" to="/kategorije/radna-memorija/5">Radna memorija</NuxtLink></li>
                <li><NuxtLink @click="closeMenu" to="/kategorije/napajanja/6">Napajanja</NuxtLink></li>
                <li><NuxtLink @click="closeMenu" to="/kategorije/kucista/7">Kućišta</NuxtLink></li>
                <li><NuxtLink @click="closeMenu" to="/kategorije/pohrana-podataka/8">Pohrana podataka</NuxtLink></li>
              </ul>
            </div>
          </div>
          <div class="category">
            <span class="category-name nav-item3" @click="toggleTab(2)" ref="catName2">Oprema za računala</span>
            <div class="dropdown" ref="catDrop2">
              <ul>
                <li><NuxtLink @click="closeMenu" to="/kategorije/monitori/9">Monitori</NuxtLink></li>
                <li><NuxtLink @click="closeMenu" to="/kategorije/slusalice/10">Slušalice</NuxtLink></li>
                <li><NuxtLink @click="closeMenu" to="/kategorije/misevi/11">Miševi</NuxtLink></li>
              </ul>
            </div>
          </div>
          <div class="category">
            <span class="category-name nav-item4" @click="toggleTab(3)" ref="catName3">Mrežna oprema</span>
            <div class="dropdown" ref="catDrop3">
              <ul>
                <li><NuxtLink @click="closeMenu" to="/kategorije/tipkovnice/12">Tipkovnice</NuxtLink></li>
                <li><NuxtLink @click="closeMenu" to="/kategorije/routeri/13">Routeri</NuxtLink></li>
                <li><NuxtLink @click="closeMenu" to="/kategorije/mrezne-kartice/14">Mrežne kartice</NuxtLink></li>
                <li><NuxtLink @click="closeMenu" to="/kategorije/bluetooth-adapteri/15">Bluetooth adapteri</NuxtLink></li>
              </ul>
            </div>
          </div>
          <NuxtLink @click="closeMenu" to="/kategorije/mobiteli/16" class="single-link nav-item5">Mobiteli</NuxtLink>
        </nav>
      </div>
      <div class="shopping-tools">
        <NuxtLink to="/lista-zelja" class="wishlist" title="Lista želja">
          <span class="wishlist-count" v-if="wishlistCount !== 0">{{ wishlistCount }}</span>
        </NuxtLink>
        <NuxtLink to="/kosarica" class="cart" title="Košarica">
          <span class="cart-count" v-if="cartCount !== 0">{{ cartCount }}</span>
        </NuxtLink>
      </div>
    </div>
  </header>
</template>

<script setup>
  import { wishlist, cart } from '~/globalStore.js';

  const wishlistCount = computed(() => wishlist.count);
  const cartCount = computed(() => cart.count);

  const nav = ref();
  const catDrop1 = ref();
  const catDrop2 = ref();
  const catDrop3 = ref();
  const catName1 = ref();
  const catName2 = ref();
  const catName3 = ref();

  const openMenu = () => {
    nav.value.classList.add("active");
    document.body.classList.add("prevent-scrolling");
  }

  const closeMenu = () => {
    nav.value.classList.remove('active')
    catDrop1.value.classList.remove("active");
    catDrop2.value.classList.remove("active");
    catDrop3.value.classList.remove("active");
    catName1.value.classList.remove("active");
    catName2.value.classList.remove("active");
    catName3.value.classList.remove("active");
    document.body.classList.remove("prevent-scrolling");
  }

  const toggleTab = tab => {
    if (window.innerWidth < 1350) {
      if (tab === 1) {
        catDrop1.value.classList.toggle("active");
        catName1.value.classList.toggle("active");
      } else if (tab === 2) {
        catDrop2.value.classList.toggle("active");
        catName2.value.classList.toggle("active");
      } else if (tab === 3) {
        catDrop3.value.classList.toggle("active");
        catName3.value.classList.toggle("active");
      }
    }
  }

  onMounted(() => {
    const topBar = document.querySelector(".top-bar");
    const bottomBar = document.querySelector(".bottom-bar");
    const nav = document.querySelector(".category-nav");
    const topNav = document.querySelector(".top-nav");
    const support = document.querySelector(".support");
    const socials = document.querySelector(".socials");
    const shopTools = document.querySelector(".shopping-tools");


    const changePos = () => {
      if (window.innerWidth < 1351) {
        nav.appendChild(topNav);
        nav.appendChild(socials);
        topBar.appendChild(shopTools);
      } else {
        if (!nav.hasChildNodes() || !topBar.hasChildNodes()) {
          nav.removeChild(topNav);
          nav.removeChild(socials);
          topBar.removeChild(shopTools);
        }
        topBar.append(topNav);
        topBar.append(socials);
        bottomBar.append(shopTools);
      }
    }
    changePos();

    if (window.innerWidth < 601) {
      support.innerHTML = "";
    } else {
      support.innerHTML = "Podrška: <span style='font-weight: 600;''>+385 92 337 6584</span>";
    }

    window.addEventListener("resize", () => {
      changePos();
      if (window.innerWidth < 601) {
        support.innerHTML = "";
      } else {
        support.innerHTML = "Podrška: <span style='font-weight: 600;''>+385 92 337 6584</span>";
      }
    });
  });
</script>

<style scoped>
header {
  box-shadow: 0px 0px 80px rgba(0, 0, 0, 0.1);
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 9999;
}

.bottom-bar {
  display: flex;
  justify-content: space-between;
  padding-inline: 5vw;
  position: relative;
  height: 90px;
  background: white;
}

.category-nav {
  display: flex;
  height: 100%;
  gap: 30px;
  background: white;
  overflow-y: auto;
  overflow-x: hidden;
}

.category-name {
  cursor: default;
}

.category-nav a,
.category-name {
  font-weight: 500;
  text-decoration: none;
  color: rgb(30, 30, 30);
  letter-spacing: .2px;
  height: 100%;
  display: flex;
  align-items: center;
}

.dropdown {
  display: none;
  position: absolute;
}

.dropdown::before {
  content: "";
  position: absolute;
  height: 14px;
  width: 14px;
  background: white;
  left: 40%;
  transform: rotate(45deg);
  top: -7px;
}

.dropdown ul {
  list-style-type: none;
}

.dropdown ul li a {
  font-weight: 400;
  letter-spacing: .5px;
}

.open-menu,
.close-menu {
  display: none;
  position: relative;
}

.open-menu::before {
  content: "";
  background: url("/icons/menu.png");
  background-size: contain;
  width: 35px;
  height: 35px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 0;
}

.close-menu::before {
  content: "";
  background: url("/icons/x-mark.png");
  background-size: contain;
  width: 24px;
  height: 24px;
  position: absolute;
  top: 10px;
  transform: translateY(-50%);
  right: 0;
}

.top-bar {
  padding-inline: 5vw;
  background: var(--gradient);
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  height: 45px;
}

.top-bar a {
  color: white;
  text-decoration: none;
}

.top-bar ul {
  list-style-type: none;
  display: flex;
  justify-content: center;
  gap: 20px;
  font-size: 15px;
}

.logo {
  background: url("/images/tehnotrg_logo.png");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  aspect-ratio: 40/9;
  width: 200px;
}

.logo span {
  display: none;
}

.socials {
  margin-right: -5vw;
  height: 100%;
  display: flex;
}

.socials a {
  border-left: 1px solid rgba(255, 255, 255, 0.5);
  display: grid;
  place-items: center;
  padding-inline: 15px;
  font-size: 16px;
  transition: .3s;
}

.socials a:hover {
  background: white;
  color: var(--primClr);
}

.shopping-tools {
  display: flex;
  margin-right: -5vw;
  height: 100%;
}

.shopping-tools a {
  display: grid;
  place-items: center;
  border-left: 1px solid rgba(0, 0, 0, 0.1);
  padding-inline: 19.5px;
}

.cart::before {
  content: "";
  background: url("/icons/cart.png");
  width: 54px;
  height: 54px;
  background-size: contain;
}

.wishlist {
  position: relative;
}

.wishlist::before {
  content: "";
  background: url("/icons/wishlist.png");
  width: 54px;
  height: 54px;
  background-size: contain;
}

.wishlist-count,
.cart-count {
  position: absolute;
  right: 20px;
  top: 20px;
  background: var(--gradient);
  border-radius: 50%;
  width: 20px;
  height: 20px;
  display: grid;
  place-items: center;
  color: white;
  font-size: 12px;
}

span[class*="nav-item"]::before,
a[class*="nav-item"]::before {
  content: "";
  width: 40px;
  height: 40px;
  background-size: contain;
  margin-right: 5px;
}

.nav-item1::before {
  background: url("/icons/computer.png");
}

.nav-item2::before {
  background: url("/icons/components.png");
}

.nav-item3::before {
  background: url("/icons/periphery.png");
}

.nav-item4::before {
  background: url("/icons/network.png");
}

.nav-item5::before {
  background: url("/icons/phones.png");
}


@media screen and (min-width: 1350px) {
  .category:hover .dropdown {
    display: block;
    animation: fadeIn .3s;
  }
  @keyframes fadeIn {
  from {opacity: 0;}
  to {opacity: 1;}
  }
  .category-nav a:hover,
  .category:hover .category-name {
    background: var(--gradient);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  }
  .category-name.active {
    background: var(--gradient);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  }
  .top-bar li {
    position: relative;
  }
  .top-bar li::after {
    content: "";
    background: white;
    height: 15px;
    width: 15px;
    position: absolute;
    top: -40px;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 50%;
    transition: .2s;
  }
  .top-bar li:hover::after {
    top: -20px;
  }
  .dropdown {
    background: white;
    padding: 15px 30px;
    position: absolute;
    top: 100%;
    box-shadow: 0px 0px 80px rgba(0, 0, 0, 0.1);
  }
}

@media screen and (max-width: 1500px) {
  .category-nav {
    gap: 20px;
  }
  span[class*="nav-item"]::before,
  a[class*="nav-item"]::before {
    width: 32px;
    height: 32px;
  }
  .category-name,
  .single-link,
  .dropdown a {
    font-size: 15.5px;
  }
  .dropdown::before {
    width: 12px;
    height: 12px;
    top: -6px;
  }
  .wishlist::before,
  .cart::before {
    width: 40px;
    height: 40px;
  }
  .logo {
    width: 180px;
  }
  .socials a {
    padding-inline: 12.5px;
  }
  .bottom-bar {
    height: 80px;
  }
  .top-bar {
    height: 40px;
  }
  .top-bar a {
    font-size: 14px;
  }
  .wishlist-count,
  .cart-count {
    right: 15px;
  }
}

@media screen and (max-width: 1350px) {
  span[class*="nav-item"]:active,
  a[class*="nav-item"]:active {
    background: rgb(240, 240, 240);
  }
  .dropdown::before {
    display: none;
  }
  .category-nav {
    position: fixed;
    inset: 0;
    display: none;
    padding-top: 50px;
  }
  .category-nav.active {
   display: block; 
  }
  .open-menu {
    display: block;
    cursor: pointer;
  }
  .close-menu {
    display: block;
    position: absolute;
    top: 15px;
    right: 5vw;
    cursor: pointer;
  }
  .dropdown {
    position: relative;
  }
  .dropdown.active {
    display: block;
  }
  .dropdown ul {
    padding: 0 50px;
    padding-bottom: 20px;
  }
  .category-name,
  .single-link {
    display: block;
    width: 100%;
    border-top: 1px solid #F5F5F5;
    position: relative;
    padding: 10px;
    cursor: pointer;
    transition: .2s;
  }
  .category-nav a,
  .category-name {
    height: auto;
    display: flex;
  }
  .single-link:last-child {
    border-bottom: 1px solid lightgray;
  }
  .category-name::after {
    content: "";
    background: url("/icons/plus.png");
    width: 16px;
    height: 16px;
    background-size: contain;
    position: absolute;
    right: 5vw;
    top: 50%;
    transform: translateY(-50%);
  }
  .category-name.active::after {
    background: url("/icons/minus.png");
    background-size: contain;
  }
  .top-nav {
    display: grid;
    grid-template-columns: auto auto;
    list-style-type: none;
    justify-content: left;
    column-gap: 40px;
    row-gap: 5px;
    border-top: 1px solid lightgray;
    padding: 25px 20px;
    background: var(--gradient);
  }
  .top-nav a {
    color: white;
    font-weight: normal;
  }
  .wishlist::before,
  .cart::before {
    width: 26px;
    height: 26px; 
  }
  .wishlist::before {
    background: url("/icons/wishlist-white.png");
    background-size: contain;
  }
  .cart::before {
    background: url("/icons/cart-white.png");
    background-size: contain;
  }
  .shopping-tools a {
    border-left: 1px solid rgba(255, 255, 255, 0.5);
    padding-inline: 15px;
  }
  .open-menu {
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    font-size: 20px;
  }
  .socials {
    justify-content: flex-start;
    margin-left: 20px;
    align-items: center;
    height: auto;
    margin-block: 30px;
    gap: 20px;
  }
  .socials a {
    border: 1px solid var(--primClr);
    border-radius: 5px;
    aspect-ratio: 1/1;
    color: var(--primClr);
    transition: .3s;
  }
  .socials a:hover {
    background: var(--primClr);
    color: white;
  }
  .wishlist-count,
  .cart-count {
    right: 9px;
    top: 6px;
    background: white;
    color: var(--primClr);
    width: 15px;
    height: 15px;
    font-size: 10px;
  }
}

@media screen and (max-width: 600px) {
  .support {
    font-size: 12px !important;
  }
  .support::before {
    content: "";
    background: url("/icons/support-white.png");
    background-size: contain;
    width: 25px;
    height: 25px;
    position: absolute;
    top: 8px;
  }
  .support::after {
    content: "Podrška 24h";
    margin-left: 32px;
    font-weight: 500;
  }

  .wishlist::before,
  .cart::before {
    width: 24px;
    height: 24px;
  }
  .shopping-tools a {
    padding-inline: 12px;
  }
  .logo {
    width: 140px;
  }
  .bottom-bar {
    height: 60px;
  }
  .open-menu::before {
    width: 32px;
    height: 32px;
  }
  span[class*="nav-item"]:active,
  a[class*="nav-item"]:active {
    background: rgb(240, 240, 240);
  }
  .single-link,
  .category-name {
    font-size: 15px;
  }
  .top-nav a {
    font-size: 15px;
  }
  .category-name::after {
    width: 14px;
    height: 14px;
  }
  .close-menu::before {
    width: 20px;
    height: 20px;
  }
  .socials {
    margin-top: 25px;
    gap: 10px;
  }
  .socials a {
    padding-inline: 10px;
  }
  .wishlist-count,
  .cart-count {
    right: 8px;
    top: 7px;
    width: 13px;
    height: 13px;
    font-size: 9.5px;
  }
}
</style>