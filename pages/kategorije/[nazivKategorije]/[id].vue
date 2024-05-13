<template>
  <CMSPageHero :title="categoryName" uri="#" />
  <ProductToCartModal :showModal="showModal" @closeModal="handleModal" />
  <div class="wrapper">
    <div class="filter-btn gradient-border" @click="toggleFilter"><span class="gradient-text">FILTRIRAJ</span></div>
    <div class="filters" ref="filtersContainer">
      <div class="filter-brands">
        <p class="filter-name">PROIZVOĐAČI:</p>
        <div class="brand-select" :key="brand.id_branda" v-for="brand in brands">
          <CustomCheckboxInput :text="brand.naziv_branda" :value="brand.naziv_branda" class="checkbox" @click="brandFilterChanged($event.target.value)" />
        </div>
      </div>
      <div class="filter-sort">
        <p class="filter-name">SORTIRAJ PO:</p>
        <CustomRadioInput class="sort-input" text="Naziv A-Z" name="sort" value="naziv" @click="changeSortVal(1)" :checkedIf="sortVal === 1" />
        <CustomRadioInput class="sort-input" text="Najnovije" name="sort" value="najnovije" @click="changeSortVal(2)" :checkedIf="sortVal === 2" />
        <CustomRadioInput class="sort-input" text="Cijena rastuća" name="sort" value="cijena-asc" @click="changeSortVal(3)" :checkedIf="sortVal === 3" />
        <CustomRadioInput class="sort-input" text="Cijena padajuća" name="sort" value="cijena-desc" @click="changeSortVal(4)" :checkedIf="sortVal === 4" />
      </div>
    </div>
    <div class="products" ref="productsContainer">
      <div :key="proizvod.id_proizvoda" v-for="proizvod in proizvodi">
        <SingleProduct class="product" v-if="proizvod.na_zalihi !== 0" :proizvod="proizvod" :data-brand="proizvod.naziv_branda" @addedToCart="handleModal" />
      </div>
    </div>
  </div>
</template>

<script setup>
  const route = useRoute();
  const id = route.params.id;
  
  const proizvodi = ref([]);
  const brands = ref([]);
  const categoryName = ref("");
  proizvodi.value = await $fetch(`/api/getAllProductsInCategory?id=${id}`);
  brands.value = await $fetch(`/api/getBrandsInCategory?categoryId=${id}`);
  categoryName.value = await $fetch(`/api/getCategoryName?id=${id}`);
  const proizvodiCloned = ref(proizvodi.value);

  useSeoMeta({
    title: categoryName.value
  });
  
  const showModal = ref(false);
  const handleModal = () => {
    showModal.value = !showModal.value;
  }

  const productsContainer = ref(null);
  const animateProductsContainer = () => {
    productsContainer.value.classList.add("fade-in");
    setTimeout(() => {
      productsContainer.value.classList.remove("fade-in");
    }, 300);
  }

  const filtersContainer = ref(null);
  const toggleFilter = () => {
    filtersContainer.value.classList.toggle("active");
  }

  // Sortiranje
  const sortVal = useCookie("sortVal");
  sortVal.value = sortVal.value || 1;
  const sortItems = () => {
    if (sortVal.value === 1) {
      proizvodi.value.sort((a, b) => {
        const nameA = a.naziv;
        const nameB = b.naziv;
        if (nameA < nameB) {
            return -1;
        }
        if (nameA > nameB) {
            return 1;
        }
        return 0;
      });
    } else if (sortVal.value === 2) {
      proizvodi.value.sort((a, b) => b.id_proizvoda - a.id_proizvoda);
    } else if (sortVal.value === 3) {
      proizvodi.value.sort((a, b) => a.cijena - b.cijena);
    } else if (sortVal.value === 4) {
      proizvodi.value.sort((a, b) => b.cijena - a.cijena);
    }
  }

  const changeSortVal = num => {
    if (sortVal.value !== num) {
      animateProductsContainer();
    }
    sortVal.value = num;
    useCookie("sortVal", num);
    sortItems();
  }

  // Brands filter
  const brandsToFilter = ref([]);
  const filterBrands = () => {
    proizvodi.value = proizvodiCloned.value;
    if (brandsToFilter.value.length !== 0) {
      proizvodi.value = proizvodi.value.filter(proizvod => brandsToFilter.value.includes(proizvod.naziv_branda));
    } else {
      proizvodi.value = proizvodiCloned.value;
    }
    // Postavljanje product counta zbog boljeg layouta (css primjer: .products[data-product-count="2"] {})
    document.querySelector('.products').setAttribute('data-product-count', proizvodi.value.length.toString());
  }

  const brandFilterChanged = val => {
    if (val !== undefined) {
      if (brandsToFilter.value.includes(val)) {
        brandsToFilter.value = brandsToFilter.value.filter(brandName => brandName !== val);
      } else {
        brandsToFilter.value.push(val);
      }
    }
    animateProductsContainer();
    filterBrands();
  }

  onMounted(() => {
    sortItems();
  });
</script>

<style scoped>
.wrapper {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  position: relative;
}

.products {
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  width: 100%;
}

.products[data-product-count="2"],
.products[data-product-count="3"] {
  grid-template-columns: repeat(auto-fit, minmax(280px, 350px));
}

.products.fade-in {
  animation: fadeIn .3s;
} 

@keyframes fadeIn {
  from {opacity: 0;}
  to {opacity: 1;}
}

.filter-btn {
  padding: 10px 20px;
  cursor: pointer;
  display: none;
}

.filter-btn span {
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 500;
}

.filter-btn span::before {
  content: "";
  background: url("/icons/filter.png");
  background-size: contain;
  width: 32px;
  height: 32px;
  display: inline-block;
}

.filters.active {
  display: flex;
  margin-top: 5px;
}

.filters {
  width: 300px;
  position: sticky;
  top: 200px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.05);
  padding: 40px;
  margin-right: 80px;
  border-radius: 5px;
  background: white;
}

.filter-name {
  font-weight: 600;
  margin-bottom: 10px;
}

.filter-brands {
  display: flex;
  flex-direction: column;
}

.sort-input {
  color: var(--textClr);
}

.checkbox {
  margin-bottom: 10px;
  text-transform: uppercase;
  color: var(--textClr);
  padding-left: 25px;
}

@media screen and (max-width: 1580px) {
  .products[data-product-count="3"] {
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  }
  .products[data-product-count="2"] {
    grid-template-columns: repeat(auto-fit, minmax(260px, 300px));
  }
}

@media screen and (max-width: 998px) {
  .wrapper {
    flex-direction: column;
  }
  .filter-btn {
    display: block;
    margin-bottom: 20px;
  }
  .filters {
    position: relative;
    top: 0;
    width: 100%;
    margin-bottom: 40px;
    display: none;
  }
  .filters::before {
    content: "";
    width: 14px;
    height: 14px;
    position: absolute;
    top: -7px;
    background: white;
    transform: rotate(45deg);
    background: var(--gradient);
    z-index: -1;
  }
  .product {
    max-width: 100%;
  }
  .products[data-product-count="1"] {
    grid-template-columns: repeat(auto-fit, minmax(260px, 280px));
  }
  .products[data-product-count="2"] {
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  }
}

@media screen and (max-width: 800px) {
  .products {
    grid-template-columns: auto auto;
  }
}

@media screen and (max-width: 700px) {
  .products {
    padding: 0;
    width: calc(100% + 40px);
    margin-left: -20px;
    gap: 5px;
  }
  .products[data-product-count="3"], 
  .products[data-product-count="2"] {
    grid-template-columns: auto auto;
  }
  .filter-btn {
    padding: 5px 10px;
  }
  .filter-btn span::before {
    width: 26px;
    height: 26px;
  }
}

@media screen and (max-width: 600px) {
  .filters {
    padding: 30px;
    gap: 15px;
  }
  .filter-name {
    font-size: 14px;
  }
  .sort-input {
    font-size: 13px;
  }
  .checkbox {
    font-size: 13px;
  }
  .filter-btn {
    font-size: 14px;
  }
  .filter-btn span::before {
    width: 24px;
    height: 24px;
  }
}

@media screen and (max-width: 450px) {
  .products {
    gap: 0;
  }
}

@media screen and (max-width: 420px) {
  .products {
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    margin-inline: 0;
    width: 100%;
  }
  .products[data-product-count="1"],
  .products[data-product-count="2"],
  .products[data-product-count="3"] {
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  }
}
</style>