<template>
  <CMSPageHero title="Kontakt" uri="/kontakt" />
  <div class="expand-bcg">
    <div class="contact-info">
      <div class="contact-col">
        <p class="contact-col-title gradient-text">Radno vrijeme</p>
        <p class="contact-col-content">
          <span><span style="font-weight:500;">Ponedjeljak - Petak:</span> od 9 do 15h</span>
          <span><span style="font-weight:500;">Subota:</span> od 8 do 12h</span>
          <span><span style="font-weight:500;">Nedjelja i praznici:</span> zatvoreno</span>
        </p>
      </div>
      <div class="contact-col">
        <p class="contact-col-title gradient-text">Brojevi telefona</p>
        <p class="contact-col-content">
          <span><span style="font-weight:500;">Korisnička podrška:</span> +385 92 337 6584</span>
          <span><span style="font-weight:500;">Veleprodaja:</span> +385 92 110 0825</span>
          <span><span style="font-weight:500;">Servis:</span> +385 92 813 7714</span>
          <span><span style="font-weight:500;">Računovodstvo:</span> +385 92 430 4412 </span>
        </p>
      </div>
      <div class="contact-col">
        <p class="contact-col-title gradient-text">E-Mail</p>
        <p class="contact-col-content">
          <span><span style="font-weight:500;">Korisnička podrška:</span> info@tehnotrg.hr</span>
          <span><span style="font-weight:500;">Veleprodaja:</span> veleprodaja@tehnotrg.hr</span>
          <span><span style="font-weight:500;">Servis:</span> servis@tehnotrg.hr</span>
          <span><span style="font-weight:500;">Računovodstvo:</span> racunovodstvo@tehnotrg.hr</span>
        </p>
      </div>
    </div>
  </div>
  <div class="wrapper">
    <Contact />
    <Newsletter class="newsletter" />
  </div>
</template>

<script setup>
  useSeoMeta({
    title: "Kontakt"
  });
</script>

<style scoped>
@keyframes fadeIn {
  from {opacity: 0}
  to {opacity: 1}
}

@keyframes slideIn {
  from {opacity: 0; transform: translateY(20px) translateX(-50%)}
  to {opacity: 1; transform: translateY(0) translateX(-50%);}
}

.expand-bcg {
  margin-top: -80px;
  background: var(--gradient);
  margin-inline: -5vw;
  padding-inline: 5vw;
  position: relative;
}

.expand-bcg::before {
  content: "";
  background: white;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 50%;
}

.wrapper {
  animation: fadeIn .5s;
}

.contact-info,
.wrapper {
  width: 100%;
  max-width: 1500px;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
}

.contact-info {
  background: white;
  border-radius: 5px;
  box-shadow: 0px 0px 80px rgba(0, 0, 0, 0.1);
  padding: 100px 5vw;
  display: flex;
  justify-content: space-between;
  margin-bottom: 100px;
  animation: slideIn .5s;
}

.contact-col {
  width: fit-content;
  padding-left: 85px;
  position: relative;
}

.contact-col-title {
  font-weight: bold;
  font-size: 22px;
  margin-bottom: 14px;
}

.contact-col::before {
  content: "";
  width: 64px;
  height: 64px;
  position: absolute;
  left: 0;
  top: 0;
}

.contact-col:nth-child(1)::before {
  background: url("/icons/clock.png");
  background-size: contain;
}

.contact-col:nth-child(2)::before {
  background: url("/icons/phone.png");
  background-size: contain;
}

.contact-col:nth-child(3)::before {
  background: url("/icons/email.png");
  background-size: contain;
}

.contact-col-content {
  color: var(--textClr);
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.newsletter {
  box-shadow: none !important;
  margin-bottom: -100px;
}

.newsletter::before {
  display: none;
}

@media screen and (max-width: 1550px) {
  .contact-col-title {
    font-size: 18px;
  }
  .contact-col::before {
    width: 46px;
    height: 46px;
    left: 25px;
  }
  .contact-info {
    padding: 80px 40px;
  }
}

@media screen and (max-width: 1050px) {
  .contact-info {
    margin-bottom: 80px;
    flex-wrap: wrap;
    gap: 40px;
    padding-block: 50px;
  }
  .contact-col {
    padding-left: 0;
    flex: 1;
    min-width: 220px;
  }
  .contact-col::before {
    display: none;
  }
}

@media screen and (max-width: 800px) {
  .contact-info {
    flex-direction: column;
  }
  .contact-col {
    padding-left: 60px;
  }
  .contact-col::before {
    display: block;
    left: 0px;
    width: 36px;
    height: 36px;
  }
  .contact-col-content {
    font-size: 15px;
  }
}

@media screen and (max-width: 600px) {
  .expand-bcg {
    margin-top: 0;
    background: white;
  }
  .contact-info {
    padding: 0;
    box-shadow: none;
    margin-bottom: 50px;
  }
  .contact-col-content {
    font-size: 14px;
  }
  .contact-col-title {
    margin-bottom: 10px;
  }
  .contact-col::before {
    left: 10px;
  }
}
</style>