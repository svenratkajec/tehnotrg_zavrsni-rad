<template>
	<article class="checkout-item">
		<NuxtLink :to="`/proizvodi/${proizvod.glavna_fotografija.split('/')[0]}/${proizvod.id_proizvoda}`" class="img-container">
			<img :src="`/images/products/${proizvod.glavna_fotografija}`" :alt="proizvod.naziv">
		</NuxtLink>
		<div class="item-info">
			<NuxtLink :to="`/proizvodi/${proizvod.glavna_fotografija.split('/')[0]}/${proizvod.id_proizvoda}`" class="item-name">{{ proizvod.naziv }}</NuxtLink>
			<p class="item-id">Količina: {{ proizvod.kolicina }}</p>
			<p class="item-price gradient-text">{{ (proizvod.cijena * proizvod.kolicina).toFixed(2) }}€</p>
		</div>
	</article>
</template>

<script setup>
	const props = defineProps(["proizvod"]);
</script>

<style scoped>
.checkout-item {
	border: 1px solid #dededf;
  border-bottom: 0;
  display: flex;
  justify-content: space-between;
	align-items: center;
  padding: 20px 15px;
  position: relative;
	gap: 15px;
}

.img-container {
	flex-basis: 40%;
}

.img-container img {
	width: 100%;
}

.item-info {
	flex-basis: 60%;
	display: flex;
	flex-direction: column;
}

.item-name {
	display: block;
  height: 40px;
  overflow: hidden;
  color: black;
  text-decoration: none;
  font-weight: 600;
	font-size: 13.5px;
}

.item-id {
	font-size: 13px;
	margin-top: 3px;
	color: var(--textClr);
}

.item-price {
	font-weight: 600;
	font-size: 15px;
	margin-top: 6px;
}

@media screen and (max-width: 1000px) {
	.img-container {
		flex-basis: 20%;
	}
	.item-info {
		flex-basis: 80%;
	}
}
</style>