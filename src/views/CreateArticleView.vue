<template>
	<div>
		<h1 class="text-center mb-5">Create Article</h1>
		<CreateForm />
	</div>
</template>
<script>
import { CreateForm } from '../components';
import { getItem } from '../helpers/pesistantStorage';
export default {
	components: {
		CreateForm,
	},

	mounted() {
		const token = getItem('token');

		if (!token) {
			this.$router.push('/login');
		}
	},
};
</script>
<style></style>
