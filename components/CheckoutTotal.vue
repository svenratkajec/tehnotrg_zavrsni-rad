<template>
  <div>
    <p class="total-text">Ukupno u košarici</p>
    <div class="price-total">
      <div class="base">
        <p>Osnovica:</p>
        <p class="gradient-text">{{ (total / 1.25).toFixed(2) }}€</p>
      </div>
      <div class="tax">
        <p>Porez iznos:</p>
        <p class="gradient-text">{{ (total - (total / 1.25)).toFixed(2) }}€</p>
      </div>
      <div class="total">
        <p>Ukupno:</p>
        <p class="gradient-text">{{ total.toFixed(2) }}€</p>
      </div>
    </div>
  </div>
</template>

<script setup>
  const props = defineProps(["total"]);
</script>

<style scoped>
.total-text {
  font-weight: 600;
  font-size: 18px;
  margin-bottom: 10px;
}

.price-total {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.base,
.tax,
.total {
  display: flex;
  justify-content: space-between;
}

.base p:nth-child(2),
.tax p:nth-child(2),
.total p:nth-child(2) {
  font-weight: 600;
}

@media screen and (max-width: 600px) {
  .total-text {
    font-size: 17px;
  }
  .price-total {
    font-size: 15px;
    gap: 2px;
  }
}
</style>