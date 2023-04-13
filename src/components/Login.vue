<template>
  <main class="form-signin w-25 m-auto mt-5">
    <form>
      <img
        :src="logo"
        alt="logo"
        style="width: 100px; cursor: pointer"
      />
      <h1 class="h3 mb-3 fw-normal mt-3">Login</h1>

      <Input :label="'Email address'" :type="'email'" v-model="email" />
      <Input :label="'Password'" :type="'password'" v-model="password" />

      <Button type="submit" :disabled="isLoading" @click="submitHandler"
        >Login</Button
      >
    </form>
  </main>
</template>

<script>
import { logo } from "../contstants";
export default {
  data() {
    return {
      logo,
      email: "",
      password: "",
      username: "",
    };
  },

  methods: {
    submitHandler(e) {
      e.preventDefault();
      const data = {
        username: this.username,
        email: this.email,
        password: this.password,
      };
    },
  },
};
</script>

<style></style>
