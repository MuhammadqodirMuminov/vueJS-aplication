<template>
	<div class="container">
		<div v-if="isLoading" class="d-flex justify-content-center align-items-center mt-5">
			<Loader />
		</div>
		<div v-else class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
			<ArticleCard v-for="article in data" :key="article.id" :article="article" />
		</div>
	</div>
</template>

<script>
import { mapState } from 'vuex';
import { ArticleCard, Loader } from '../components';

export default {
	computed: {
		...mapState({
			data: state => state.articles.data,
			isLoading: state => state.articles.isLoading,
			error: state => state.articles.error,
		}),
	},
	components: {
		ArticleCard,
		Loader,
	},
	mounted() {
		this.$store.dispatch('articles');
	},
};
</script>

<style></style>
