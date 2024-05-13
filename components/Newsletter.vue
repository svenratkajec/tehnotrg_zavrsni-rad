<template>
  <div class="newsletter">
    <p class="gradient-text title">Nikad ne propusti popuste!</p>
    <p class="subtitle">Prijavi se na naš newsletter i primaj informacije o promotivnim ponudama.</p>
    <Form @submit="handleSubmit" class="newsletter-form" :validation-schema="schema">
      <div class="row">
        <Field name="email" type="email" placeholder="Email" v-model="emailVal" :disabled="submitting" @input="error = false, submitted = false" />
        <ErrorMessage name="email" as="div" class="invalid" />
        <div class="error" v-if="error">Email je već registriran.</div>
        <div class="success" v-if="submitted && !error">Uspješno ste se prijavili na newsletter.</div>
      </div>
      <button type="submit" class="submit-btn" @click="error = false, submitted = false">{{ !submitting ? "POTVRDI" : "SLANJE..." }}</button>
    </Form>
  </div> 
</template>

<script setup>
  import * as yup from 'yup';

  const schema = yup.object({
    email: yup.string().required("Email je obavezan.").email("Unesite ispravan email."),
  });

  const emailVal = ref("");

  const submitting = ref(false);
  const submitted = ref(false);
  const error = ref(false);
  const handleSubmit = async (values, { resetForm }) => {
    submitting.value = true;
    const saveMailToDb = await $fetch("/api/newsletterSave", {
      method: "POST",
      body: { email: emailVal.value }
    });
    submitted.value = true;
    if (saveMailToDb) {
      submitting.value = false;
      resetForm();
      setTimeout(() => {
        submitted.value = false;
      }, 2000);
    } else {
      error.value = true;
      submitting.value = false;
      resetForm();
      setTimeout(() => {
        submitted.value = false;
        error.value = false;
      }, 2000);
    }
  }
</script>

<style scoped>
.newsletter {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-block: 100px;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 5px 5px 80px rgba(0, 0, 0, 0.1);
  position: relative;
}

.newsletter::before {
  content: "";
  background: url("/icons/newsletter.png");
  background-size: contain;
  width: 350px;
  height: 350px;
  position: absolute;
  left: 0;
  transform: rotate(35deg);
  opacity: .02;
}

.title {
  font-weight: bold;
  font-size: 28px;
  margin-bottom: 5px;
}

.subtitle {
  font-size: 14px;
  color: var(--textClr);
  margin-bottom: 35px;
}

.newsletter-form {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 100%;
  max-width: 500px;
  position: relative;
  align-items: flex-start;
}

.submit-btn {
  cursor: pointer;
  background: var(--gradient);
  border: 0;
  outline: 0;
  color: white;
  font-weight: 600;
  letter-spacing: .5px;
  transition: .3s;
  text-decoration: none;
  font-size: 13px;
  padding: 13px 30px;
  text-transform: uppercase;
  border-radius: 5px;
}

.submit-btn:hover {
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
  transform: translateY(-2px);
}

input {
  background-color: #f9f9f9;
  border: 1px solid #ede9e9;
  color: #495057;
  font-size: 14px;
  padding: 12px 20px;
  border-radius: 5px;
  width: 100%;
  z-index: 99;
}

input:focus {
  outline: 1px solid var(--primClr);
}

.row {
  display: flex;
  width: 100%;
  flex-direction: column;
}

.invalid,
.success,
.error {
  font-size: 12px;
  border-radius: 5px;
  padding: 5px 10px;
  margin-bottom: 10px;
  margin-top: 5px;
}

.invalid,
.error {
  color: rgba(255, 0, 0, 0.8);
}

.success {
  color: green;
}

@media screen and (max-width: 800px) {
  .newsletter {
    padding-block: 60px;
    padding-inline: 40px;
  }
  .newsletter::before {
    display: none;
  }
  .title {
    font-size: 24px;
    margin-bottom: 15px;
    text-align: center;
  }
  .subtitle {
    font-size: 13px;
    max-width: 400px;
    text-align: center;
  }
  .newsletter-form {
    max-width: 350px;
  }
  input {
    font-size: 12px;
    padding: 10px 15px;
  }
  .submit-btn {
    font-size: 10px;
    padding: 12px 20px;
  }
}

@media screen and (max-width: 600px) {
  .newsletter {
    padding-block: 50px;
  }
  .title {
    font-size: 20px;
  }
  .subtitle {
    font-size: 12px;
    max-width: 300px;
  }
  .newsletter-form {
    flex-direction: column;
  }
  .submit-btn {
    width: 100%;
  }
  .newsletter::before {
    display: block;
    width: 100px;
    height: 100px;
    top: -15px;
    left: -15px;
    transform: rotate(130deg);
  }
}
</style>