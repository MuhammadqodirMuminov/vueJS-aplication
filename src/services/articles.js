import axios from './axios';

const articleService = {
	articles() {
		return axios.get('/articles');
	},
	articleDetail(slug) {
		return axios.get(`articles/${slug}`);
	},
	createArticle(article) {
		return axios.post(`/articles`, { article });
	},
	deleteArticle(slug) {
		return axios.delete(`/articles/${slug}`);
	},
};

export default articleService;
