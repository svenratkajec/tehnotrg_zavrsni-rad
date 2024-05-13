<template>
  <div>
    <div class="auth" v-if="!authorized">
      <Form @submit="handleSubmit" :validation-schema="schema">
        <div class="field">
        <Field name="password" type="password" placeholder="Lozinka" v-model="password" />
        <ErrorMessage name="password" as="div" class="invalid" />
        <div class="error" v-if="error">Netočna lozinka.</div>
        </div>
        <button type="submit" @click="error = false">POTVRDI</button>
      </Form>
    </div>
    <div class="wrapper" v-if="authorized">
      <h1>Welcome</h1>
      <button @click="signOut">Odjava</button>
    </div>
  </div>
</template>

<script setup>
  import * as yup from 'yup';

  useSeoMeta({
    title: "Package Manager"
  });

  const schema = yup.object({
    password: yup.string().required("Ovo polje je obavezno.")
  });

  const error = ref(false);
  const authorized = ref(false);
  const password = ref("");

  const handleSubmit = async (values, { resetForm }) => {
    const auth = await $fetch("/api/auth", {
      method: "POST",
      body: { password: password.value }
    });
    console.log(auth);
    if (auth) {
      sessionStorage.setItem("managerPass", password.value);
      password.value = "";
      resetForm();
      authorized.value = true;
    } else {
      error.value = true;
      resetForm();
      setTimeout(() => {
        error.value = false;
      }, 2000);
    }
  }

  const signOut = () => {
    sessionStorage.removeItem("managerPass");
    authorized.value = false;
  }

  onMounted(async () => {
    const auth = await $fetch("/api/auth", {
      method: "POST",
      body: { password: sessionStorage.getItem("managerPass") }
    });
    if (auth) {
      authorized.value = true;
    }
  });
</script>