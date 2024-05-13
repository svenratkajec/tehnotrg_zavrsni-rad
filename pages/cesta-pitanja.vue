<template>
  <CMSPageHero title="Česta pitanja" uri="/cesta-pitanja" />
  <div class="wrapper">
    <div class="faq-container">
      <div class="container">
        <div :class="[activeFaq === 1 ? 'faq active-faq' : 'faq']" id="tab1">
          <div class="title" @click="changeActiveFaq(1)"><span :class="[activeFaq === 1 ? 'gradient-text' : '']">Narudžba</span></div>
          <div :class="[activeFaq === 1 ? 'content active-content' : 'content']">
            <div class="faq-item">
              <p class="faq-title gradient-text">Kako mogu naručiti?</p>
              <p class="faq-content">Naručiti možete klikom na webu, odabirom proizvoda koji vas zanima, ukoliko imate problema sa web prikaznikom sve vaše narudžbe možete poslati na info@tehnotrg.hr ili možete naručiti telefonski na naš besplatni info telefon +385 92 337 6584.</p>
            </div>
            <div class="faq-item">
              <p class="faq-title gradient-text">Dozvoljavate li narudžbe u inozemstvo?</p>
              <p class="faq-content">Možete naručiti robu iz inozemstva ali za dostavu bi trebali imati lokaciju unutar Hrvatske. Trenutno nemamo mogućnost dostave u inozemstvo.</p>
            </div>
            <div class="faq-item">
              <p class="faq-title gradient-text">Što se događa nakon što izvršim narudžbu?</p>
              <p class="faq-content">Nakon što izvršite narudžbu i nakon vidljive uplate, robu šaljemo kurirskom službom na adresu koju ste naveli za isporuku. </p>
            </div>
            <div class="faq-item">
              <p class="faq-title gradient-text">Što mogu učiniti ako je moj željeni proizvod rasprodan?</p>
              <p class="faq-content">Ukoliko je vaš željeni proizvod rasprodan, možete unijeti vašu e-mail adresu te će vas netko od naših kolega obavijestiti čim proizvod bude ponovno dostupan.</p>
            </div>
            <div class="faq-item">
              <p class="faq-title gradient-text">Mogu li otkazati svoju narudžbu ako još nije poslana?</p>
              <p class="faq-content">Ukoliko nije poslana, vašu narudžbu možete otkazati.</p>
            </div>
            <div class="faq-item">
              <p class="faq-title gradient-text">Koji je minimalan iznos narudžbe?</p>
              <p class="faq-content">Za narudžbu nema minimalnog iznosa, no ukoliko je iznos vaše narudžbe manji od 66.36 eura trošak dostave iznosi 4.65 eura. Ukoliko vaša narudžba prelazi taj iznos, troškove poštarine snosimo mi. Trošak poštarine pojaviti će se automatski unutar prikaza vrijednosti vaše narudžbe, u vašoj košarici. Za otoke koji nisu mostom povezani s kopnom cijena dostave iznosi 10 eura</p>
            </div>
          </div>
        </div>
        <div :class="[activeFaq === 2 ? 'faq active-faq' : 'faq']" id="tab2">
          <div class="title" @click="changeActiveFaq(2)"><span :class="[activeFaq === 2 ? 'gradient-text' : '']">Dostava</span></div>
          <div :class="[activeFaq === 2 ? 'content active-content' : 'content']">
            <div class="faq-item">
              <p class="faq-title gradient-text">Koliki je trošak dostave?</p>
              <p class="faq-content">Trošak dostave iznosi 2.39 eura ukoliko je iznos vaše narudžbe manji od 99.99 eura . Ukoliko vaša narudžba prelazi taj iznos, troškove poštarine snosimo mi. Trošak poštarine pojaviti će se automatski unutar prikaza vrijednosti vaše narudžbe, u vašoj košarici. Za otoke koji nisu mostom povezani s kopnom cijena dostave iznosi 5 eura.</p>
            </div>
            <div class="faq-item">
              <p class="faq-title gradient-text">Dostava u inozemstvo?</p>
              <p class="faq-content">Nažalost trenutno nemamo mogućnost dostave u inozemstvo.</p>
            </div>
            <div class="faq-item">
              <p class="faq-title gradient-text">Koliki je rok dostave?</p>
              <p class="faq-content">Nakon vidljive uplate, rok isporuke za proizvode koji su raspoloživi odmah je 2-4 dana od vidljive uplate. Ukoliko je dostavu potrebno izvršiti na neki od otoka tada je rok isporuke nešto drugačiji. Možete provjeriti koliki je rok isporuke za otoke na ovom linku. Ukoliko ste kod narudžbe odabrali isporuku u neku od naših poslovnica rok isporuke može biti duži ovisno o dinamici slanja robe toj poslovnici. </p>
            </div>
          </div>
        </div>
        <div :class="[activeFaq === 3 ? 'faq active-faq' : 'faq']" id="tab3">
          <div class="title" @click="changeActiveFaq(3)"><span :class="[activeFaq === 3 ? 'gradient-text' : '']">Plaćanje</span></div>
          <div :class="[activeFaq === 3 ? 'content active-content' : 'content']">
            <div class="faq-item">
              <p class="faq-title gradient-text">Koje kartice primate i koje kartice idu na koliko rata u trgovinama?</p>
              <p class="faq-content">U našim trgovinama možete plaćati: <br> <b>Jednokratno – gotovinom</b> (Debitnim karticama: Maestro, Visa) (Kreditnim karticama: MasterCard, Visa, JCB, American Express)<br>
              <b>Obročno plaćanje:</b> 2-12 rata bez kamata i naknada Minimalni iznos rate 13,27€ za sve oblike plaćanja (Zagrebačka banka d.d. MasterCard / Visa, Maestro) (PBZ Card d.d., Maestro, Visa Inspire, PBZ tekućeg računa, Visa Premium)</p>
            </div>
            <div class="faq-item">
              <p class="faq-title gradient-text">Imate li popust na gotovinu?</p>
              <p class="faq-content">Nažalost, trenutno nemamo popuste na gotovinu u web trgovini, no u našim fizičkim poslovnicama za određene kategorije proizvoda moguće je ostvariti popust na gotovinu pa predlažemo da se obratite u najbližu trgovinu.</p>
            </div>
          </div>
        </div>
        <div :class="[activeFaq === 4 ? 'faq active-faq' : 'faq']" id="tab4">
          <div class="title" @click="changeActiveFaq(4)"><span :class="[activeFaq === 4 ? 'gradient-text' : '']">Povrat i reklamacije</span></div>
          <div :class="[activeFaq === 4 ? 'content active-content' : 'content']">
            <div class="faq-item">
              <p class="faq-title gradient-text">Imaju li naši proizvodi garanciju?</p>
              <p class="faq-content">Jamstvo, tehničke upute, upute za sklapanje te upute za uporabu nalaze se priložene uz proizvod, te su jasno napisani svi potrebni podaci o proizvodu. Sva roba koja sukladno propisima treba biti opremljena pratećom dokumentacijom i jamstvenim listovima bit će dostavljena kupcu s priloženom pratećom dokumentacijom i jamstvenim listom.<br> Uz jamstveni list obavezno čuvajte i račun.</p>
            </div>
            <div class="faq-item">
              <p class="faq-title gradient-text">Koji je rok za povrat kupljenog proizvoda?</p>
              <p class="faq-content">Rok za povrat proizvoda je 30 dana.</p>
            </div>
          </div>
        </div>
        <div :class="[activeFaq === 5 ? 'faq active-faq' : 'faq']" id="tab5">
          <div class="title" @click="changeActiveFaq(5)"><span :class="[activeFaq === 5 ? 'gradient-text' : '']">Popusti</span></div>
          <div :class="[activeFaq === 5 ? 'content active-content' : 'content']">
            <div class="faq-item">
              <p class="faq-title gradient-text">Popust na narudžbe?</p>
              <p class="faq-content">Prijavom na naš newsletter ili ispunjavanjem ankete zadovoljstva kupovinom ostvarujete pravo na popust za vašu slijedeću narudžbu.</p>
            </div>
          </div>
        </div>
      </div>
      <div class="desktop-content"></div>
    </div>
    <Newsletter />
  </div>
</template>

<script setup>
  useSeoMeta({
    title: "Česta pitanja"
  });

  const appendNodesToDesktop = () => {
    const content = document.querySelectorAll(".content");
    const desktopContent = document.querySelector(".desktop-content");
    content.forEach(node => {
      desktopContent.append(node);
    });
  }

  const appendNodesToMobile = () => {
    const contents = document.querySelectorAll(".content");
    const faqs = document.querySelectorAll(".faq");
    faqs.forEach((faq, index) => {
      faq.append(contents[index])
    });
  }

  const activeFaq = ref(1);
  const changeActiveFaq = num => {
    if (window.innerWidth < 1000) {
      if (activeFaq.value === num) {
        activeFaq.value = 0;
      } else {
        activeFaq.value = num;
        if (num === 1) {
          location.href = "#tab1";
        } else if (num === 2) {
          location.href = "#tab2";
        } else if (num === 3) {
          location.href = "#tab3";
        } else if (num === 4) {
          location.href = "#tab4";
        } else if (num === 5) {
          location.href = "#tab5";
        }
      }
    } else {
      activeFaq.value = num;
    }
  }

  onMounted(() => {
    if (window.innerWidth > 999) {
      appendNodesToDesktop();
    } else {
      activeFaq.value = 0;
    }

    window.addEventListener("resize", () => {
      if (window.innerWidth > 999) {
        appendNodesToDesktop();
      } else {
        appendNodesToMobile();
      }
    });
  });
</script>

<style scoped>
@property --gradientClr1 {
  syntax: '<color>';
  initial-value: white;
  inherits: false;
}

@property --gradientClr2 {
  syntax: '<color>';
  initial-value: white;
  inherits: false;
}

@keyframes fadeIn {
  from {opacity: 0}
  to {opacity: 1}
}

.wrapper {
  width: 100%;
  max-width: 1500px;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  animation: fadeIn .5s;
}

.faq-container {
  display: flex;
  gap: 6vw;
  margin-bottom: 100px;
  align-items: flex-start;
}

.container {
  flex-basis: 30%;
  position: sticky;
  top: 180px;
}

.faq {
  border-bottom: 1px solid #F5F5F5;
}

.faq:last-child {
  border-bottom: 0;
}

.title {
  width: 400px;
  padding: 20px 50px 20px 100px;
  cursor: pointer;
  font-size: 18px;
  color: var(--textClr);
  font-weight: 600;
  position: relative;
  background: linear-gradient(to right, var(--gradientClr1) 0%, var(--gradientClr2) 100%);;
  transition: transform .3s, --gradientClr1 .3s, --gradientClr2 .3s;
}

.title:hover {
  transform: translateX(5px);
}

.title span {
  position: relative;
  transition: .3s;
}

.title span::before {
  content: "";
  width: 50px;
  height: 50px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: -80px;
  background-size: contain !important;
  background-repeat: no-repeat !important;
  display: grid;
  place-items: center;
  transition: .3s;
}

.faq:nth-child(1) .title span::before {
  background: url("/icons/cart.png");
}

.faq:nth-child(2) .title span::before {
  background: url("/icons/shipping.png");
  top: calc(50% - 10px);
  left: -75px;
}
.faq:nth-child(3) .title span::before {
  background: url("/icons/payment.png");
}

.faq:nth-child(4) .title span::before {
  background: url("/icons/return.png");
}

.faq:nth-child(5) .title span::before {
  background: url("/icons/discount.png");
}

.faq:nth-child(6) .title span::before {
  background: url("/icons/other.png");
}

.content {
  display: none;
}

.active-content {
  display: block;
}

.desktop-content {
  margin-top: 20px;
}

.faq-item {
  margin-bottom: 30px;
}

.faq-title {
  font-size: 18px;
  font-weight: 600;
}

.faq-content {
  margin-top: 8px;
  color: var(--textClr);
}

@media screen and (max-width: 1000px) {
  .faq {
    scroll-margin-top: 160px;
  }
  .desktop-content {
    display: none;
  }
  .container {
    flex-basis: 100%;
  }
  .title {
    width: 100%;
    border-radius: 5px;
  }
  .title:hover {
    transform: translateX(0);
  }
  .title::after {
    content: "";
    background: url("/icons/plus.png");
    background-size: contain;
    width: 16px;
    height: 16px;
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
    transition: .3s;
  }
  .active-faq .title::after {
    content: "";
    background: url("/icons/minus.png");
    background-size: contain;
    width: 16px;
    height: 16px;
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
    filter: brightness(0) invert(1);
  }
  .active-faq .title {
    --gradientClr1: rgb(45, 56, 138);
    --gradientClr2: rgb(0, 174, 239);
  }
  .title .gradient-text {
    color: white;
  }
  .active-faq .title span::before {
    filter: brightness(0) invert(1);
  }
  .title span::after {
    content: "";
    position: absolute;
    width: 10px;
    height: 10px;
    background: linear-gradient(140deg, transparent 45%, #2C3A8C 45%);
    bottom: -26px;
    left: -60px;
    transform: rotate(45deg);
    opacity: 0;
    transition: 0s;
  }
  .active-faq .title span::after {
    opacity: 1;
    transition: .3s;
  }
  .content {
    margin-top: 15px;
    padding-inline: 20px;
  }
}

@media screen and (max-width: 600px) {
  .title {
    padding: 12px 40px 12px 60px;
  }
  .title span {
    font-size: 16px;
  }
  .title::after,
  .active-faq .title::after {
    width: 14px;
    height: 14px;
  }
  .title span::before {
    width: 34px;
    height: 34px;
    left: -46px;
  }
  .faq:nth-child(2) .title span::before {
    top: calc(50% - 7px);
    left: -43px;
  }
  .title span::after {
    left: -35px;
    bottom: -17px;
  }
  .content {
    padding-inline: 15px;
  }
  .faq-title {
    font-size: 16px;
  }
  .faq-content {
    font-size: 14px;
    margin-top: 6px;
  }
  .faq-container {
    margin-bottom: 40px;
  }
  .faq-item {
    margin-bottom: 16px;
  }
}
</style>