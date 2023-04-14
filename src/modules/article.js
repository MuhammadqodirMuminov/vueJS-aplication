import articleService from '../services/articles';

const state = {
	data: null,
	isLoading: false,
	error: null,
};

const mutations = {
	articlesStart(state) {
		state.isLoading = true;
		state.data = null;
		state.error = null;
	},
	articlesSuccess(state, payload) {
		state.isLoading = false;
		state.data = payload;
	},
	articlesFailore(state, payload) {
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
};

export default { state, actions, mutations };
