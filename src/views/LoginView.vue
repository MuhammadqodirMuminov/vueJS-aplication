<template>
	<div class="text-center">
		<Login />
	</div>
</template>

<script>
import { Login } from '@/components';

import { getItem } from '../helpers/pesistantStorage';
export default {
	components: { Login },
	mounted() {
		const token = getItem('token');

		if (token) {
			this.$router.push('/');
		}
	},
};
</script>

<style></style>
