<template>
  <div class="cms-page-hero">
    <h1 class="page-title">{{ title }}</h1>
    <div class="breadcrumbs">
      <NuxtLink to="/" class="breadcrumb-link home-page">Naslovnica</NuxtLink>
      <Icon name="mingcute:right-fill" class="arrow-icon"></Icon>
      <NuxtLink :to="uri" class="breadcrumb-link active-page">{{ title }}</NuxtLink>
    </div>
  </div>
</template>

<script setup>
  const props = defineProps(["title", "uri"]);
</script>

<style scoped>
.cms-page-hero {
  background: var(--gradient);
  margin-inline: -5vw;
  color: white;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 5px;
  padding-block: 80px;
  margin-bottom: 80px;
  text-align: center;
  padding-inline: 5vw;
}

.page-title {
  font-size: 40px;
}

.breadcrumbs {
  display: flex;
  align-items: center;
  gap: 5px;
}

.breadcrumb-link {
  text-decoration: none;
}

.breadcrumb-link:hover {
  text-decoration: underline;
}

.home-page {
  color: rgb(220, 220, 220);
}

.active-page {
  color: rgb(250, 250, 250);
}

.arrow-icon {
  font-size: 13px;
}

@media screen and (max-width: 600px) {
  .cms-page-hero {
    padding-block: 30px;
    gap: 0;
    margin-bottom: 30px;
  }
  .page-title {
    font-size: 25px;
  }
  .breadcrumb-link {
    font-size: 13px;
  }
}
</style>