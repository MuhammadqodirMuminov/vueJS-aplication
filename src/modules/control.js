import articleService from '../services/articles';

const state = {
	isLoading: false,
};

const mutations = {
	controlArticleStart(state) {
		state.isLoading = true;
	},
	controlArticleSuccess(state) {
		state.isLoading = false;
	},
	controlArticleFailore(state) {
		state.isLoading = false;
	},
};

const actions = {
	createArticle(context, article) {
		return new Promise((resolve, reject) => {
			context.commit('controlArticleStart');
			articleService
				.createArticle(article)
				.then(() => {
					resolve();
					context.commit('controlArticleSuccess');
				})
				.catch(err => {
					console.log(err);
					context.commit('controlArticleFailore');
				});
		});
	},

	deletArticle(context, slug) {
		return new Promise((resolve, reject) => {
			context.commit('controlArticleStart');
			articleService
				.deleteArticle(slug)
				.then(res => {
					resolve(res);
					context.commit('controlArticleSuccess');
				})
				.catch(err => {
					console.log(err);
					context.commit('controlArticleFailore');
				});
		});
	},
};

export default { state, actions, mutations };
