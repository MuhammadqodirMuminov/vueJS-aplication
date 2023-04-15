<template>
	<main class="form-signin w-25 m-auto mt-5">
		<form>
			<img :src="logo" alt="logo" style="width: 100px; cursor: pointer" />
			<h1 class="h3 mb-3 fw-normal mt-3">Login</h1>

			<ValidationError v-if="errorMessage" :errorMessage="errorMessage" />

			<Input :label="'Email address'" :type="'email'" v-model="email" />
			<Input :label="'Password'" :type="'password'" v-model="password" />

			<Button type="submit" :disabled="isLoading" @click="submitHandler">Login</Button>
		</form>
	</main>
</template>

<script>
import { logo } from '../contstants';
import ValidationError from './ValidationError.vue';

export default {
	data() {
		return {
			logo,
			email: '',
			password: '',
			username: '',
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
	mounted: {},

	methods: {
		submitHandler(e) {
			e.preventDefault();
			const data = {
				email: this.email,
				password: this.password,
			};

			this.$store
				.dispatch('login', data)
				.then(res => {
					this.$router.push({ name: 'home' });
					this.email = '';
					this.password = '';
				})
				.catch(err => {
					console.log(err);
				});
		},
	},
};
</script>

<style></style>
