<template>
  <div>
    <div class="submit-msg" v-if="submitted">Vaš upit je uspješno poslan!</div>
    <Form @submit="handleSubmit" class="contact-form" :validation-schema="schema">
      <Field name="firstname" type="text" placeholder="Ime" :disabled="submitting" />
      <ErrorMessage name="firstname" as="div" class="invalid" />
      <Field name="lastname" type="text" placeholder="Prezime" :disabled="submitting" />
      <ErrorMessage name="lastname" as="div" class="invalid" />
      <Field name="email" type="email" placeholder="Email" :disabled="submitting" />
      <ErrorMessage name="email" as="div" class="invalid" />
      <Field name="msg" as="textarea" placeholder="Poruka" rows="5" :disabled="submitting" />
      <ErrorMessage name="msg" as="div" class="invalid" />
      <button type="submit" class="submit-btn">{{ !submitting ? "POTVRDI" : "SLANJE..." }}</button>
    </Form>
  </div>
</template>

<script setup>
  import * as yup from 'yup';

  const schema = yup.object({
    firstname: yup.string().required("Ovo polje je obavezno."),
    lastname: yup.string().required("Ovo polje je obavezno."),
    email: yup.string().required("Ovo polje je obavezno.").email("Unesite ispravan email."),
    msg: yup.string().required("Ovo polje je obavezno.")
  });

  const submitting = ref(false);
  const submitted = ref(false);
  const handleSubmit = (values, { resetForm }) => {
    submitting.value = true;
    setTimeout(() => {
      submitted.value = true;
      submitting.value = false;
      resetForm();
    }, 2000);
    setTimeout(() => {
      submitted.value = false;
    }, 6000);
  }
</script>

<style scoped>
.contact-form {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
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
  padding: 10px 40px;
  text-transform: uppercase;
  margin-top: 10px;
  border-radius: 5px;
  width: fit-content;
}

.submit-btn:hover {
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
  transform: translateY(-2px);
}

input,
textarea {
  background-color: #f9f9f9;
  border: 1px solid #ede9e9;
  font-size: 14px;
  padding: 12px 20px;
  margin-bottom: 20px;
  border-radius: 5px;
  width: 100%;
}

input:focus,
textarea:focus {
  outline: 1px solid var(--primClr);
}

textarea {
  resize: vertical;
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

.submit-msg {
  background: rgba(0, 255, 0, 0.2);
  color: green;
  font-size: 13px;
  padding: 10px 20px;
  border-radius: 5px;
  margin-bottom: 20px;
}

@media screen and (max-width: 600px) {
  .contact-form {
    gap: 0px;
  }
  input,
  textarea {
    font-size: 12px;
    padding: 10px 15px;
    margin-bottom: 12px;
  }
  textarea {
    height: 100px;
  }
  .submit-btn {
    font-size: 11px;
    margin-top: 5px;
  }
}
</style>