<template>
	<div class="d-flex flex-column flex-md-row align-items-center py-3 mb-4 border-bottom">
		<a class="d-flex align-items-center text-dark text-decoration-none">
			<img :src="logo" alt="logo" style="width: 100px; cursor: pointer" @click="toHomePage" />
		</a>

		<nav class="d-inline-flex mt-2 mt-md-0 ms-md-auto">
			<template v-if="isloggedIn">
				<RouterLink :to="{ name: 'login' }" class="me-3 pt-3 text-dark text-decoration-none">{{
					user.username
				}}</RouterLink>
				<RouterLink :to="{ name: 'login' }" class="me-3 py-2 text-dark text-decoration-none">
					<button class="btn btn-danger">Logout</button>
				</RouterLink>
			</template>
			<template v-if="!isloggedIn">
				<RouterLink :to="{ name: 'login' }" class="me-3 py-2 text-dark text-decoration-none"
					>Login</RouterLink
				>
				<RouterLink :to="{ name: 'register' }" class="me-3 py-2 text-dark text-decoration-none"
					>Register</RouterLink
				>
			</template>
		</nav>
	</div>
</template>

<script>
import { mapState } from 'vuex';
import { logo } from '../contstants';
export default {
	data() {
		return {
			logo,
		};
	},
	computed: {
		...mapState({
			user: state => state.auth.user,
			isloggedIn: state => state.auth.isloggedIn,
		}),
	},
	methods: {
		toHomePage() {
			this.$router.push({ name: 'home' });
		},
	},
};
</script>

<style></style>
