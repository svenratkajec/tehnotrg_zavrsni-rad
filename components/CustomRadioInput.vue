<template>
  <label class="radio">{{ text }}
    <input type="radio" :name="name" :checked="checkedIf" :value="value" :required="required">
    <span class="checkmark"></span>
  </label>
</template>

<script setup>
  const props = defineProps(["text", "name", "value", "checkedIf", "required"]);
</script>

<style scoped>
.radio {
  display: block;
  position: relative;
  padding-left: 25px;
  margin-bottom: 10px;
  cursor: pointer;
  font-size: 16px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  width: fit-content;
}

.radio input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
}

.checkmark {
  position: absolute;
  top: 5px;
  left: 0;
  height: 14px;
  width: 14px;
  border-radius: 50%;
  border: 1px solid transparent;
  background: linear-gradient(to right, white, white), var(--gradient);
  background-clip: padding-box, border-box;
  background-origin: padding-box, border-box;
}

.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

.radio input:checked ~ .checkmark:after {
  display: block;
}

.radio .checkmark:after {
 	top: 2px;
	left: 2px;
	width: 8px;
	height: 8px;
	border-radius: 50%;
	background: var(--gradient), var(--gradient);
}

@media screen and (max-width: 600px) {
  .radio {
    font-size: 14px;
    padding-left: 22px;
  }
  .checkmark {
    top: 3px;
  }
}
</style>