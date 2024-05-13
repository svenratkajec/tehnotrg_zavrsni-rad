<template>
  <label class="checkbox">{{ text }}
    <input type="checkbox" :name="name" :value="value" :checked="checkedIf" :required="required">
    <span class="checkmark"></span>
  </label>
</template>

<script setup>
  const props = defineProps(["text", "name", "value", "checkedIf", "required"]);
</script>

<style scoped>
.checkbox {
  display: block;
  position: relative;
  padding-left: 20px;
  margin-left: 0px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 16px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  width: fit-content;
}

.checkbox input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

.checkmark {
  position: absolute;
  top: 5px;
  left: 0;
  height: 15px;
  width: 15px;
  border: 1px solid transparent;
  border-radius: 3px;
  background: linear-gradient(to right, white, white), var(--gradient);
  background-clip: padding-box, border-box;
  background-origin: padding-box, border-box;
}

.checkbox input:checked ~ .checkmark {
  background: var(--gradient), var(--gradient);
  background-clip: padding-box, border-box;
  background-origin: padding-box, border-box;
}

.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

.checkbox input:checked ~ .checkmark:after {
  display: block;
}

.checkbox .checkmark:after {
  left: 4px;
  top: 0;
  width: 4px;
  height: 8px;
  border: solid white;
  border-width: 0 2px 2px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}

@media screen and (max-width: 600px) {
  .checkbox {
    font-size: 14px;
  }
  .checkmark {
    width: 14px;
    height: 14px;
    top: 3px;
  }
  .checkbox .checkmark::after {
    width: 3px;
    height: 6px;
    top: 1px;
    left: 4px;
  }
}
</style>