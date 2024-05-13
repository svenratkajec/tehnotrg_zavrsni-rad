<template>
  <div class="contact">
    <div class="find-us">
      <p class="contact-title gradient-text">Gdje nas možete pronaći?</p>
      <div class="our-locations">
        <p class="location">Zagreb</p>
        <p class="location">Rijeka</p>
        <p class="location">Varaždin</p>
        <p class="location">Karlovac</p>
        <p class="location">Zadar</p>
        <p class="location">Pula</p>
      </div>
      <NuxtLink to="/poslovnice" class="offices-btn gradient-border"><span class="gradient-text">Kontakt informacije trgovina</span></NuxtLink>
      <iframe class="google-map" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=%20Vara%C5%BEdin+(TehnoTrg%20-%20Skladi%C5%A1te)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>     
    </div>
    <div class="contact-us">
      <p class="contact-title gradient-text">Pošalji nam poruku</p>
      <p class="contact-subtitle">Ukoliko imate nejasnoća rado ćemo vam pomoći stoga nam se slobodno javite u bilo kojem trenutku i razriješimo problem zajedno.</p>
      <ContactForm />
    </div>
  </div>
</template>

<style scoped>
.contact {
  display: flex;
  gap: 80px;
  width: fit-content;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
}

.contact-title {
  font-weight: bold;
  font-size: 26px;
}

.find-us {
  display: flex;
  flex-direction: column;
}

.our-locations {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
  row-gap: 8px;
  margin-top: 20px;
}

.location {
  position: relative;
  display: flex;
  gap: 8px;
  font-weight: 500;
  color: var(--textClr);
}

.location::before {
  content: "";
  background: url("/icons/map-marker.png");
  background-size: contain;
  height: 24px;
  width: 24px;
  display: inline-block;
}

.offices-btn {
  padding: 5px 20px;
  font-weight: 600;
  text-decoration: none;
  font-size: 14px;
  padding: 10px 25px;
  margin-top: 20px;
  text-align: center;
}

.contact-subtitle {
  color: var(--textClr);
  width: 100%;
  max-width: 600px;
  margin-top: 10px;
  margin-bottom: 30px;
}

.google-map {
  width: 100%;
  height: 300px;
  margin-top: 40px;
  border-radius: 5px;
  filter: grayscale(1);
}

@media screen and (max-width: 1050px) {
  .contact {
    gap: 40px;
  }
  .contact-title {
    font-size: 22px 
  }
  .contact-subtitle {
    font-size: 14px;
  }
  .google-map {
    height: 220px;
  }
}

@media screen and (max-width: 800px) {
  .contact {
    flex-direction: column;
  }
}

@media screen and (max-width: 600px) {
  .contact {
    gap: 30px;
  }
  .contact-title {
    font-size: 20px;
  }
  .location {
    font-size: 14px;
  }
  .our-locations {
    margin-top: 15px;
  }
  .location::before {
    width: 20px;
    height: 20px;
  }
  .offices-btn {
    font-size: 13px;
  }
  .google-map {
    margin-top: 30px;
  }
  .contact-subtitle {
    margin-bottom: 20px;
  }
}
</style>