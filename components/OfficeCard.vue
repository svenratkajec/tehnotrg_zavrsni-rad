<template>
  <div class="card">
    <div class="img-container">
      <img :src="`/images/offices/${imgPath}`" :alt="title">
    </div>
    <div class="content">
      <p class="title">{{ title }}</p>               
      <p class="adress">{{ adress }}</p>
      <a :href="`tel:${phone}`" class="phone">{{ phone }}</a>
      <a :href="`mailto:${email}`" class="email">{{ email }}</a>
    </div>
  </div>
</template>

<script setup>
  const props = defineProps(["imgPath", "title", "adress", "phone", "email"]);
</script>

<style scoped>
.card {
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0 0 80px rgba(0, 0, 0, 0.1);
  height: 100%;
  width: 100%;
}

.img-container {
  width: 100%;
  height: 220px;
}

.img-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.content {
  padding: 25px 30px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  color: var(--textClr);
  font-size: 15px;
}

.content a {
  text-decoration: none;
  color: inherit;
}

.title {
  color: black;
  font-size: 22px;
  font-weight: 500;
  margin-bottom: 5px;
}

.adress::before,
.phone::before,
.email::before {
  content: "";
  display: inline-block;
  position: relative;
  top: 7px;
  margin-right: 8px;
  width: 24px;
  height: 24px;
}

.adress::before {
  background: url("/icons/map-marker.png");
  background-size: contain;
}

.phone::before {
  background: url("/icons/phone.png");
  background-size: contain;
}

.email::before {
  background: url("/icons/email.png");
  background-size: contain;
}

@media screen and (max-width: 600px) {
  .title {
    font-size: 16px;
  }
  .content {
    font-size: 13px;
    padding: 15px 20px;
    gap: 3px;
  }
  .img-container {
    height: 180px;
  }
}
</style>