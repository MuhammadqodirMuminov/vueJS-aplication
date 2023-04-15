<template>
	<div class="text-center">
		<Register />
	</div>
</template>

<script>
import { Register } from '@/components';
import { getItem } from '../helpers/pesistantStorage';

export default {
	components: { Register },
	mounted() {
		const token = getItem('token');

		if (token) {
			this.$router.push('/');
		}
	},
};
</script>

<style></style>
