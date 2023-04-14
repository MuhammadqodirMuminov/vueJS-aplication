<template>
  <main class="form-signin w-25 m-auto mt-5">
    <form>
      <img :src="logo" alt="logo" style="width: 100px; cursor: pointer" />
      <h1 class="h3 mb-3 fw-normal mt-3">Register</h1>

      <ValidationError v-if="errorMessage" :errorMessage="errorMessage" />

      <Input :label="'Name'" :type="'text'" v-model="username" />
      <Input :label="'Email address'" :type="'email'" v-model="email" />
      <Input :label="'Password'" :type="'password'" v-model="password" />

      <Button type="submit" :disabled="isLoading" @click="submitHandler"
        >Register</Button
      >
    </form>
  </main>
</template>

<script>
import { logo } from "../contstants";
import ValidationError from "./ValidationError.vue";

export default {
  data() {
    return {
      logo,
      username: "",
      email: "",
      password: "",
    };
  },

  computed: {
    isLoading() {
      return this.$store.state.auth.isLoading;
    },

    errorMessage() {
      return this.$store.state.auth.error;
    },
  },

  components: {
    ValidationError,
  },

  methods: {
    submitHandler(e) {
      e.preventDefault();

      const data = {
        username: this.username,
        email: this.email,
        password: this.password,
      };

      this.$store
        .dispatch("register", data)
        .then((res) => {
          this.$router.push({ name: "home" });
          this.username = "";
          this.email = "";
          this.password = "";
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style></style>
