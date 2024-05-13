<template>
  <CMSPageHero title="O nama" uri="/o-nama" />
  <div class="wrapper">

    <div class="text-group">
      <div>
        <p class="section-title history-title">Povijest TehnoTrga</p>
        <div class="section-desc">
          <p class="section-text">TehnoTrg, rođen iz strasti prema tehnologiji i vizije pružanja najnovijih inovacija svima, svoj je put započeo 2012. godine. Kroz godine rasta i posvećenosti, TehnoTrg je izrastao u sinonim za pouzdanost, širok asortiman proizvoda i vrhunsku korisničku podršku.</p>
          <p class="section-text">Osnovan kao odgovor na rastuću potražnju za vrhunskim IT proizvodima, TehnoTrg je uvijek bio korak ispred, prateći brze promjene tehnološkog pejzaža. Od skromnih početaka, sada smo postali omiljeno odredište za ljubitelje tehnologije koji traže visokokvalitetne proizvode uz stručno vođenje.</p>
        </div>
      </div>
      <div>
        <p class="section-title mission-title">Naša Misija</p>
        <div class="section-desc">
          <p class="section-text">Naša misija u TehnoTrgu je jednostavna - želimo biti vaša prvoklasna destinacija za sve vaše IT potrebe. Kroz pažljivi odabir proizvoda, istinsku stručnost i predanost vrhunskoj usluzi, nastojimo pružiti iskustvo kupovine koje će vas osvježiti i inspirirati.</p>
          <p class="section-text">U srcu naše misije je posvećenost korisnicima. Želimo osigurati da svaki kupac pronađe savršeni proizvod prilagođen njihovim potrebama, uz podršku našeg stručnog tima koji je uvijek tu da pomogne. U TehnoTrgu vjerujemo da svatko zaslužuje pristup najnovijoj tehnologiji, bez obzira na razinu iskustva.</p>
        </div>
      </div>
    </div>
    <div class="partnership">
      <p class="section-title section-title-single">Poslovni Partneri</p>
      <div class="partners-grid">
        <img src="/images/partners/ekupi.png">
        <img src="/images/partners/elipso.png">
        <img src="/images/partners/hgspot.png">
        <img src="/images/partners/instant-gaming.png">
        <img src="/images/partners/instar.png">
        <img src="/images/partners/links.png">
        <img src="/images/partners/mall.png">
        <img src="/images/partners/mikronis.png">
        <img src="/images/partners/mobis.png">
        <img src="/images/partners/ronis.png">
        <img src="/images/partners/sancta-domenica.png">
        <img src="/images/partners/tehnomag.png">
      </div>
    </div>
    <div class="product-assortment">
      <p class="section-title section-title-single">Asortiman Proizvoda</p>
      <div class="categories">
        <div class="category-box">
          <p>Laptopi, računala</p>
        </div> 
        <div class="category-box">
          <p>Komponente</p>
        </div>
        <div class="category-box">
          <p>Oprema za računala</p>
        </div>
        <div class="category-box">
          <p>Mrežna oprema</p>
        </div>
        <div class="category-box">
          <p>Mobiteli</p>
        </div>
      </div>
    </div>
    <div class="prizes">
      <p class="section-title section-title-single">Nagrade i Priznanja</p>
      <img src="/images/priznanja.jpg">
    </div>
  </div>
</template>

<script setup>
  useSeoMeta({
    title: "O nama"
  });
</script>

<style scoped>
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

.text-group {
  display: flex;
  gap: 40px;
}

.section-title {
  font-size: 25px;
  font-weight: 800;
  background: var(--gradient);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  display: inline-block;
  position: relative;
  left: 50px;
}

.section-desc {
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-top: 10px;
  margin-bottom: 80px;
  color: var(--textClr);
}

.history-title::before {
  content: "";
  background: url("/icons/history.png");
  background-size: contain;
  background-repeat: no-repeat;
  width: 40px;
  height: 40px;
  position: absolute;
  left: -50px;
  top: -1px;
}

.mission-title::before {
  content: "";
  background: url("/icons/mission.png");
  background-size: contain;
  background-repeat: no-repeat;
  width: 40px;
  height: 40px;
  position: absolute;
  left: -50px;
  top: -1px;
}

.section-title-single {
  left: 0;
  font-size: 30px;
}

.partnership {
  display: flex;
  align-items: center;
  flex-direction: column;
}

.partners-grid {
  display: grid;
  place-items: center;
  grid-template-columns: auto auto auto auto;
  gap: 130px;
  margin-top: 60px;
  margin-bottom: 100px;
  width: 100%;
  max-width: 1200px;
}

.partners-grid img {
  width: 100%;
  filter: grayscale(100%);
  transition: .2s;
}

.partners-grid img:hover {
  filter: grayscale(0);
}

.prizes {
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 50px;
}

.prizes img {
  width: 100%;
  max-width: 1025px;
}

.product-assortment {
  display: flex;
  align-items: center;
  flex-direction: column;
  color: var(--textClr);
}

.categories {
  display: flex;
  gap: 20px;
  margin-top: 40px;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 80px;

}

.category-box {
  background: white;
  box-shadow: 0px 0px 80px rgba(0, 0, 0, 0.1);
  padding: 50px;
  border-radius: 5px;
  text-align: center;
  flex: 1;
}

.category-box p::before {
  content: "";
  width: 60px;
  height: 60px;
  display: block;
  text-align: center;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  margin-bottom: 10px;
}

.category-box:nth-child(1) p::before {
  background: url("/icons/computer.png");
  background-repeat: no-repeat;
  background-size: contain;
}

.category-box:nth-child(2) p::before {
  background: url("/icons/components.png");
  background-repeat: no-repeat;
  background-size: contain;
}

.category-box:nth-child(3) p::before {
  background: url("/icons/periphery.png");
  background-repeat: no-repeat;
  background-size: contain;
}

.category-box:nth-child(4) p::before {
  background: url("/icons/network.png");
  background-repeat: no-repeat;
  background-size: contain;
}

.category-box:nth-child(5) p::before {
  background: url("/icons/phones.png");
  background-repeat: no-repeat;
  background-size: contain;
}

@media screen and (max-width: 900px) {
  .text-group {
    flex-direction: column;
    margin-bottom: 80px;
  }
  .section-desc {
    margin-bottom: 0;
  }
  .partnership {
    align-items: flex-start;
  }
  .partners-grid {
    margin-top: 40px;
    grid-template-columns: auto auto auto;
    gap: 100px;
  }
}

@media screen and (max-width: 600px) {
  .section-title {
    font-size: 20px;
    left: 40px;
  }
  .mission-title::before,
  .history-title::before {
    width: 30px;
    height: 30px;
    left: -40px;
  }
  .section-text {
    font-size: 14px;
  }
  .text-group {
    gap: 30px;
    margin-bottom: 50px;
  }
  .section-title-single {
    left: 0;
    font-size: 22px;
  }
  .prizes {
    align-items: flex-start;
    gap: 30px;
  }
  .partners-grid {
    margin-bottom: 60px;
    grid-template-columns: auto auto;
    row-gap: 100px;
    column-gap: 50px;
  }
  .partners-grid img {
    width: 100%;
    max-width: 120px;
  }
  .product-assortment {
    align-items: flex-start;
  }
  .categories {
    margin-bottom: 40px;
    margin-top: 20px;
  }
  .category-box {
    padding: 30px;
    font-size: 14px;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  }
  .category-box p::before {
    width: 42px;
    height: 42px;
    margin-bottom: 5px;
  }
}
</style>
