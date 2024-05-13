<template>
  <div class="container">
    <div class="col">
      <NuxtLink to="/kategorije/laptopi-racunala/1" class="category-item full laptops">
        <p class="title gradient-text">Laptopi i računala</p>
        <div class="count">{{ laptopsCount }}</div>
      </NuxtLink>
    </div>
    <div class="col">
      <div class="row">
        <NuxtLink to="/kategorije/tipkovnice/12" class="category-item stretch keyboards">
        <p class="title gradient-text">Tipkovnice</p>
        <div class="count">{{ keyboardsCount }}</div>
        </NuxtLink>
      </div>
      <div class="row">
        <NuxtLink to="/kategorije/mobiteli/16" class="category-item half phones">
          <p class="title gradient-text">Mobiteli</p>
          <div class="count">{{ mobilesCount }}</div>
        </NuxtLink>
        <NuxtLink to="/kategorije/slusalice/10" class="category-item half headphones">
          <p class="title gradient-text">Slušalice</p>
          <div class="count">{{ headphonesCount }}</div>
        </NuxtLink>
      </div>
    </div>
  </div>  
</template>

<script setup>
  const { count: laptopsCount } = await $fetch(`/api/getCategoryProductAmount?id=${1}`);
  const { count: keyboardsCount } = await $fetch(`/api/getCategoryProductAmount?id=${12}`);
  const { count: mobilesCount } = await $fetch(`/api/getCategoryProductAmount?id=${16}`);
  const { count: headphonesCount } = await $fetch(`/api/getCategoryProductAmount?id=${10}`);
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

.container {
  display: flex;
  gap: 30px;
  width: 100%;
  margin-bottom: 100px;
}

.col {
  display: flex;
  flex-direction: column;
  gap: 30px;
  flex-basis: 50%;
}

.row {
  display: flex;
  gap: 30px;
}

.category-item {
  height: 250px;
  box-shadow: rgba(193, 199, 212, 0.3) 0px 20px 80px 0px;
  padding: 50px;
  border-radius: 5px;
  text-decoration: none;
  color: var(--textClr);
  background: linear-gradient(to right, var(--gradientClr1) 0%, var(--gradientClr2) 100%);
  transition: transform .3s, --gradientClr1 .3s, --gradientClr2 .3s;
  position: relative;
}

.category-item:hover {
  --gradientClr1: rgb(45, 56, 138);
  --gradientClr2: rgb(0, 174, 239);
}

.full {
  height: 100%;
}

.stretch {
  width: 100%;
}

.half {
  flex-basis: 50%;
}

.title {
  font-weight: 600;
  font-size: 20px;
  transition: .3s;
}

.category-item:hover .title,
.category-item:hover .count {
  color: white;
}

.count {
  color: var(--textClr);
  font-weight: 500;
  opacity: .6;
  margin-top: 10px;
  transition: .3s;
}

.laptops::before {
  content: "";
  position: absolute;
  inset: 0;
  background: url("/images/categories/laptop.png");
  background-size: 70%;
  background-repeat: no-repeat;
  background-position: center center;
}

.phones::before {
  content: "";
  position: absolute;
  inset: 0;
  background: url("/images/categories/phone.png");
  background-size: 45%;
  background-repeat: no-repeat;
  background-position: bottom center;
}

.keyboards::before {
  content: "";
  position: absolute;
  inset: 0;
  background: url("/images/categories/keyboard.png");
  background-size: 70%;
  background-repeat: no-repeat;
  background-position: center 70%;
}

.headphones::before {
  content: "";
  position: absolute;
  inset: 0;
  background: url("/images/categories/headphones.png");
  background-size: 40%;
  background-repeat: no-repeat;
  background-position: 60% 80%;
}

@media screen and (max-width: 800px) {
  .container {
    flex-direction: column;
  }
  .full {
    padding-bottom: 200px;
  }
  .laptops::before {
    background-size: 50%;
    background-position: center 80%;
  }
}

@media screen and (max-width: 600px) {
  .container {
    margin-bottom: 50px;
  }
  .half {
    padding-bottom: 150px;
  }
  .laptops::before {
    background-size: 50%;
    background-position: center 70%;
  }
  .phones::before {
    background-size: 40%;
  }
  .row {
    flex-direction: column;
  }
  .title {
    font-size: 16px;
  }
  .count {
    font-size: 13px;
  }
}
</style>