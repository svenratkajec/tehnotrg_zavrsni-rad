<template>
  <CMSPageHero title="Poslovnice" uri="/poslovnice" />
  <div class="wrapper">
    <div class="offices">
      <OfficeCard imgPath="office1.jpg" title="Poslovnica ZAGREB" adress="Draškovićeva 30, 10000 Zagreb" phone="042 503 113" email="zagreb@tehnotrg.hr" />
      <OfficeCard imgPath="office2.jpg" title="Poslovnica VARAŽDIN" adress="Milkovićeva 2, 42000 Varaždin" phone="042 503 114" email="varazdin@tehnotrg.hr" />
      <OfficeCard imgPath="office3.jpg" title="Poslovnica ZADAR" adress="Antuna Dobronića 1, 23000 Zadar" phone="042 503 115" email="zadar@tehnotrg.hr" />
      <OfficeCard imgPath="office4.jpg" title="Poslovnica RIJEKA" adress="Braščine 11, 51000 Rijeka" phone="042 503 116" email="rijeka@tehnotrg.hr" />
      <OfficeCard imgPath="office5.jpg" title="Poslovnica KARLOVAC" adress="Gažanski trg 11, 47000 Karlovac" phone="042 503 117" email="karlovac@tehnotrg.hr" />
      <OfficeCard imgPath="office6.jpeg" title="Poslovnica PULA" adress="Kandlerova 8, 52100 Pula" phone="042 503 118" email="pula@tehnotrg.hr" />
    </div>
    <Newsletter />
  </div>
</template>

<script setup>
  useSeoMeta({
    title: "Poslovnice"
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
  margin-bottom: 100px;
  animation: fadeIn .5s;
}

.offices {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-auto-rows: 1fr;
  place-items: center;
  gap: 30px;
  margin-bottom: 100px;
}

@media screen and (max-width: 600px) {
  .offices {
    margin-bottom: 50px;
  }
}
</style>