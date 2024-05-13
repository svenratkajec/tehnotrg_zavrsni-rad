<template>
  <div class="form-container">
    <p class="form-title">PODACI ZA DOSTAVU PROIZVODA</p>
    <div v-if="error" class="error">
      <p>Molimo potvrdite narudžbu!</p>
    </div>
    <Form @submit="validateForm" :validation-schema="schema">
      <CustomCheckboxInput text="Trebam R1 račun" name="r1" :checkedIf="formData.r1" @change="changedData($event)" />
      <div class="row" v-if="formData.r1">
        <div class="field">
          <Field type="text" name="company" placeholder="Tvrtka" :value="formData.tvrtka" :required="formData.r1" @change="changedData($event)" />
          <ErrorMessage name="company" as="div" class="invalid" />
        </div>
        <div class="field">
          <Field type="number" name="oib" placeholder="OIB" :value="formData.oib" :required="formData.r1" @change="changedData($event)" />
          <ErrorMessage name="oib" as="div" class="invalid" />
        </div>
      </div>
      <div class="row">
        <div class="field">
          <Field type="text" name="name" placeholder="Ime i prezime" :value="formData.ime" required @change="changedData($event)" />
          <ErrorMessage name="name" as="div" class="invalid" />
        </div>
        <div class="field">
          <Field type="email" name="email" placeholder="E-Mail" :value="formData.email" required @change="changedData($event)" />
          <ErrorMessage name="email" as="div" class="invalid" />
        </div>
      </div>
      <div class="row">
        <div class="field">
          <Field type="number" name="telephone" placeholder="Telefon" :value="formData.telefon" required @change="changedData($event)" />
          <ErrorMessage name="telephone" as="div" class="invalid" />
        </div>
        <div class="field">
          <Field type="text" name="place" placeholder="Mjesto" :value="formData.mjesto" required @change="changedData($event)" />
          <ErrorMessage name="place" as="div" class="invalid" />
        </div>
      </div>
      <div class="row">
        <div class="field">
          <Field type="text" name="adress" placeholder="Adresa" :value="formData.adresa" required @change="changedData($event)" />
          <ErrorMessage name="adress" as="div" class="invalid" />
        </div>
        <div class="field">
          <Field type="number" name="postalcode" placeholder="Poštanski broj" :value="formData.postBroj" required @change="changedData($event)" />
          <ErrorMessage name="postalcode" as="div" class="invalid" />
        </div>
      </div>
      <button class="submit-btn" type="submit">POTVRDI NARUDŽBU</button>
    </Form>
  </div>
</template>

<script setup>
  import * as yup from 'yup';

  const props = defineProps(["formData", "error"]);
  const emit = defineEmits(["validateData", "validateForm", "changedData"]);

  const changedData = event => {
    emit("changedData", event);
  }

  const validateForm = () => {
    emit("validateForm");
  }

  const schema = yup.object({
    company: yup.string().min(1, "Ovo polje je obavezno."),
    oib: yup.string().length(11, "Mora sadržavati 11 znamenki."),
    name: yup.string().required("Ovo polje je obavezno."),
    email: yup.string().required("Ovo polje je obavezno.").email("Unesite ispravan email."),
    telephone: yup.string().required("Ovo polje je obavezno."),
    place: yup.string().required("Ovo polje je obavezno."),
    adress: yup.string().required("Ovo polje je obavezno."),
    postalcode: yup.string().required("Ovo polje je obavezno.")
  });
</script>

<style scoped>
.form-container {
  width: 70%;
}

.submit-btn {
  cursor: pointer;
  background: var(--gradient);
  border: 0;
  outline: 0;
  color: white;
  display: inline-block;
  font-weight: 600;
  letter-spacing: .5px;
  transition: .3s;
  text-decoration: none;
  font-size: 13px;
  padding: 10px 30px;
  text-transform: uppercase;
  margin-top: 10px;
  border-radius: 5px;
}

.submit-btn:hover {
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
  transform: translateY(-2px);
}

.form-title {
  font-weight: bold;
  font-size: 25px;
  margin-bottom: 10px;
}


input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input:focus {
  outline: 1px solid var(--primClr);
}

.field {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.error {
  text-transform: uppercase;
  background-color: #dd2222;
  width: 100%;
  color: white;
  font-weight: 600;
  padding: 8px 15px;
  font-size: 10pt;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  gap: 20px;
  border-radius: 5px;
}

.error::after {
  content: url("https://api.iconify.design/material-symbols/info.svg?color=white&width=25&height=25");
  position: relative;
  top: 2px;
}

.invalid {
  font-size: 12px;
  position: relative;
  top: -15px;
  color: rgba(255, 0, 0, 0.8);
  width: 100%;
  border-radius: 5px;
  padding: 5px 10px;
}

.row {
  display: flex;
  gap: 30px;
  align-items: flex-start;
}

label {
  margin-left: 5px;
  cursor: pointer;
  margin-top: 10px;
}

input::placeholder {
  color: #a3a8ad;
}

input {
  background-color: #f9f9f9;
  border: 1px solid #ede9e9;
  font-size: 14px;
  padding: 12px 20px;
  flex: 1;
  margin-bottom: 20px;
  border-radius: 5px;
}

@media screen and (max-width: 1000px) {
  .form-container {
    width: 100%;
  }
}

@media screen and (max-width: 600px) {
  .form-title {
    font-size: 20px;
  }
  label {
    font-size: 14px;
  }
  input {
    font-size: 13px;
    padding: 10px 15px;
  }
  .submit-btn {
    font-size: 12px;
    margin-top: 5px;
  }
  .error {
    font-size: 11px;
    padding: 5px 10px;
  }
  .error::after {
    content: url("https://api.iconify.design/material-symbols/info.svg?color=white&width=20&height=20")
  }
}

@media screen and (max-width: 520px) {
  .row {
    flex-direction: column;
    gap: 0;
  }
}
</style>