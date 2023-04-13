<template>
  <ul class="list-group">
    <li class="list-group-item list-group-item-danger" v-for="(error, index) in errors" :key="index">{{ error }}</li>
  </ul>
</template>
<script>
export default {
  name: "ValidationError",
  props: {
    errorMessage: {
      type: Object,
      required: true,
    },
  },
  computed: {
    errors() {
      return Object.keys(this.errorMessage).map((name) => {
        const msg = this.errorMessage[name].join(", ");
        return `${name} ${msg}`;
      });
    },
  },
};
</script>
<style></style>
