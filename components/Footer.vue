<template>
  <footer>
    <div class="main-area">
      <div class="col">
        <NuxtLink to="/" class="logo"></NuxtLink>
        <p class="introduction">Rođen iz strasti prema tehnologiji i vizije pružanja najnovijih inovacija svima, predstavlja vašu pouzdanu destinaciju za otkrivanje vrhunskih tehnoloških proizvoda.</p>
        <div class="socials">
          <a href="https://www.facebook.com/" target="_blank" title="Facebook"><Icon name="ri:facebook-fill"/></a>
          <a href="https://www.instagram.com/" target="_blank" title="Instagram"><Icon name="mdi:instagram"/></a>
          <a href="https://www.youtube.com/" target="_blank" title="YouTube"><Icon name="ri:youtube-fill"/></a>
          <a href="https://www.tiktok.com/" target="_blank" title="TikTok"><Icon name="ic:baseline-tiktok"/></a>
        </div>
      </div>
      <div class="col">
        <p class="title gradient-text">KORISNI LINKOVI</p>
        <ul class="useful-links">
          <NuxtLink to="/"><li>Naslovnica</li></NuxtLink>
          <NuxtLink to="/o-nama"><li>O nama</li></NuxtLink>
          <NuxtLink to="/poslovnice"><li>Poslovnice</li></NuxtLink>
          <NuxtLink to="/cesta-pitanja"><li>Česta pitanja</li></NuxtLink>
          <NuxtLink to="/kontakt"><li>Kontakt</li></NuxtLink>
        </ul>
      </div>
      <div class="col">
        <p class="title gradient-text">NAČINI PLAĆANJA</p>
        <p class="text payment-text">Uživajte u jednostavnosti kupovine s nama - odaberite između kartica, PayPal-a, bankovnog transfera ili plaćanja pouzećem. Sigurni smo da ćete pronaći savršeni način plaćanja za svoje potrebe.</p>
      </div>
      <div class="col">
        <p class="title gradient-text">RADNO VRIJEME</p>
        <p class="work-hours">
          <span><span style="font-weight:500;">Ponedjeljak - Petak:</span> od 9 do 15h</span>
          <span><span style="font-weight:500;">Subota:</span> od 8 do 12h</span>
          <span><span style="font-weight:500;">Nedjelja i praznici:</span> zatvoreno</span>
        </p>
      </div>
    </div>
    <div class="copyright">TehnoTrg &copy; 2024. by Sven Ratkajec</div>
  </footer>
</template>

<style scoped>
footer {
  width: 100%;
  box-shadow: rgba(193, 199, 212, 0.3) 0px 20px 80px 0px;
  margin-top: 100px;
}

.main-area {
  padding: 80px 5vw;
  gap: 80px;
  display: flex;
  justify-content: space-between;
}

footer:hover {
  transform: none;
}

.col:nth-child(1),
.col:nth-child(3) {
  max-width: 400px;
  width: 100%;
}

.col:nth-child(2),
.col:nth-child(4) {
  min-width: max-content;
}

.logo {
  background: url("/images/tehnotrg_logo.png");
  background-size: contain;
  background-repeat: no-repeat;
  width: 230px;
  height: 60px;
  display: block;
}

.introduction {
  margin-top: 20px;
  color: var(--textClr);
  opacity: .8;
  font-size: 15px;
}

.socials {
  display: flex;
  justify-content: flex-start;
  gap: 10px;
  margin-top: 25px;
}

.socials a {
  border: 1px solid var(--primClr);
  border-radius: 5px;
  aspect-ratio: 1/1;
  color: var(--primClr);
  transition: .3s;
  font-size: 20px;
  display: grid;
  place-items: center;
  padding: 10px;
}

.socials a:hover {
  background: var(--primClr);
  color: white;
}

.title {
  font-weight: 600;
  font-size: 20px;
  margin-bottom: 10px;
}

.useful-links {
  list-style-type: none;
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.useful-links a {
  color: var(--textClr);
  text-decoration: none;
  position: relative;
  width: fit-content;
}

.useful-links a::before {
  content: "";
  position: absolute;
  height: 1px;
  background: var(--gradient);
  bottom: 0;
  transition: .3s;
  width: 0;
}

.useful-links a:hover::before {
  width: 100%;
}

.text {
  color: var(--textClr);
  position: relative;
  font-size: 15px;
  opacity: .8;
}

.payment-text::after {
  content: url("/images/payment-icons.svg");
  filter: invert(100%);
  display: block;
  margin-top: 30px;
  width: 250px;
}

.work-hours {
  color: var(--textClr);
  display: flex;
  flex-direction: column;
}

.copyright {
  background: var(--gradient);
  padding: 15px 5vw;
  text-align: center;
  color: white;
}

@media screen and (max-width: 1300px) {
  .main-area {
    display: grid;
    grid-template-columns: auto auto;
    place-content: center;
  }
}

@media screen and (max-width: 800px) {
  .main-area {
    column-gap: 40px;
  }
  .logo {
    width: 200px;
    height: 50px;
  }
  .title {
    font-size: 16px;
  }
  .useful-links {
    font-size: 14px;
  }
  .introduction,
  .text,
  .work-hours {
    font-size: 14px;
  }
  .socials a {
    font-size: 15px;
  }
  .copyright {
    font-size: 12px;
  }
}

@media screen and (max-width: 600px) {
  .main-area {
    display: flex;
    flex-direction: column;
    row-gap: 40px;
    padding-block: 60px;
  }
  footer {
    margin-top: 70px;
  }
  .logo {
    width: 160px;
    height: 40px;
  }
}
</style>