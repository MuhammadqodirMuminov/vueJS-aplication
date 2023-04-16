<template>
	<h1 class="text-center my-5">Edit Article</h1>

	<ArticleForm
		v-if="articleDetail"
		:initialValue="initialValue"
		:editArticlehandler="editArticlehandler"
	/>
	<div v-else class="d-flex justify-content-center align-items-center mt-5">
		<Loader />
	</div>
</template>

<script>
import { mapState } from 'vuex';
import { ArticleForm, Loader } from '../components';

export default {
	name: 'EditArticleView',

	components: {
		ArticleForm,
		Loader,
	},
	computed: {
		...mapState({
			articleDetail: state => state.articles.articleDetail,
			isLoading: state => state.articles.isLoading,
		}),
		initialValue() {
			return {
				title: this.articleDetail.title,
				description: this.articleDetail.description,
				body: this.articleDetail.body,
				isLoading: this.isLoading,
			};
		},
	},
	methods: {
		editArticlehandler(article) {
			this.$store.dispatch('editArticle', { article, slug: this.$route.params.slug }).then(() => {
				this.$router.push('/');
			});
		},
	},
	mounted() {
		this.$store.dispatch('articleDetail', this.$route.params.slug);
	},
};
</script>
