<template>
  <div class="multistep">

    <div class="step active-step">
      <div class="illustrate">
        <hr class="before active-line">
        <div class="circle" @click="changeStep(1)"></div>
        <hr :class="[step !== 1 ? 'after active-line' : 'after']">
      </div>
      <div class="title" @click="changeStep(1)">Pregled košarice</div>
    </div>

    <div :class="[step !== 1 ? 'step active-step' : 'step']">
      <div class="illustrate">
        <hr :class="[step !== 1 ? 'before active-line-invert' : 'before']">
        <div class="circle" @click="changeStep(2)"></div>
        <hr :class="[step === 3 ? 'after active-line' : 'after']">
      </div>
      <div class="title" @click="changeStep(2)">Podaci za dostavu</div>
    </div>

    <div :class="[step === 3 ? 'step active-step' : 'step']">
      <div class="illustrate">
        <hr :class="[step === 3 ? 'before active-line-invert' : 'before']">
        <div class="circle" @click="changeStep(3)"></div>
        <hr class="after">
      </div>
      <div class="title" @click="changeStep(3)">Potvrda narudžbe</div>
    </div>

  </div>
</template>

<script setup>
  const props = defineProps(["step"]);
  const emit = defineEmits(["changeStep"])

  const changeStep = step => {
    emit("changeStep", step);
  }
</script>

<style scoped>
.multistep {
  display: flex;
  margin-top: 200px;
  width: 100%;
  max-width: 1300px;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  margin-bottom: 50px;
}

.step {
  flex: 1;
  text-align: center;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.illustrate {
  width: 100%;
  display: grid;
  place-items: center;
  grid-template-columns: calc(50% - 12px) 24px calc(50% - 12px);
}

.before,
.after {
  width: 100%;
  height: 2px;
  border: 0;
  background: lightgray;
}

.circle {
  height: 24px;
  width: 24px;
  background: #8D8E90;
  border-radius: 50%;
  cursor: pointer;
}

.active-step .circle {
  background: var(--gradient);
}

.active-line {
  background: var(--gradient);
}

.active-line-invert {
  background: linear-gradient(to right, rgb(0, 174, 239) 0%, rgb(45, 56, 138) 100%);
}

.title {
  cursor: pointer;
  padding-top: 5px;
}

@media screen and (max-width: 1000px) {
  .multistep {
    margin-top: 170px;
    margin-bottom: 30px;
  }
  .circle {
    width: 20px;
    height: 20px;
  }
  .title {
    font-size: 14px;
  }
}

@media screen and (max-width: 600px) {
  .multistep {
    margin-top: 140px;
  }
  .title {
    margin-inline: 5px;
  }
}
</style>