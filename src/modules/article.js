import articleService from '../services/articles';

const state = {
	data: null,
	isLoading: false,
	error: null,
	articleDetail: null,
};

const mutations = {
	articlesStart(state) {
		state.isLoading = true;
		state.data = null;
		state.error = null;
		state.articleDetail = null;
	},
	articlesSuccess(state, payload) {
		state.isLoading = false;
		state.data = payload;
	},
	articlesFailore(state, payload) {
		state.isLoading = false;
		state.error = payload;
	},
	articleDetailStart(state) {
		state.isLoading = true;
		state.articleDetail = null;
		state.error = null;
	},
	articleDetailSuccess(state, payload) {
		state.isLoading = false;
		state.articleDetail = payload;
	},
	articleDetailFailore(state, payload) {
		state.isLoading = false;
		state.error = payload;
	},
};

const actions = {
	articles(context) {
		context.commit('articlesStart');

		return new Promise(() => {
			articleService
				.articles()
				.then(response => {
					context.commit('articlesSuccess', response.data.articles);
				})
				.catch(error => {
					context.commit('articlesFailore');
					console.log('eror', error);
				});
		});
	},
	articleDetail(context, slug) {
		context.commit('articleDetailStart');

		return new Promise((resolve, reject) => {
			articleService
				.articleDetail(slug)
				.then(response => {
					context.commit('articleDetailSuccess', response.data.article);
					resolve(response.data.article);
				})
				.catch(error => {
					context.commit('articleDetailFailore', error.message);
					reject(error.message);
				});
		});
	},
};

export default { state, actions, mutations };
