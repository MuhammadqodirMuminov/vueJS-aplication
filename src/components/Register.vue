<template>
	<main class="form-signin w-25 m-auto mt-5">
		<form>
			<img :src="logo" alt="logo" style="width: 100px; cursor: pointer" />
			<h1 class="h3 mb-3 fw-normal mt-3">Register</h1>

			<Input :label="'Name'" :type="'text'" v-model="username" />
			<Input :label="'Email address'" :type="'email'" v-model="email" />
			<Input :label="'Password'" :type="'password'" v-model="password" />

			<Button type="submit" :disabled="isLoading" @click="submitHandler">Register</Button>
		</form>
	</main>
</template>

<script>
import {logo} from '../contstants'
export default {
	data() {
		return {
			logo,
			username: '',
			email: '',
			password: '',
		}
	},
	
	
	methods: {
		submitHandler(e) {
			e.preventDefault()
			
			
		},
	},
}
</script>

<style></style>
