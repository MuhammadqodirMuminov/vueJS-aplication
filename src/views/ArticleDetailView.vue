<template>
	<ArticleDetail />
</template>

<script>
import ArticleDetail from '../components/AritcleDetail.vue';
export default {
	components: {
		ArticleDetail,
	},

	mounted() {
		this.$store.dispatch('articleDetail', this.$route.params.slug);
	},
};
</script>
