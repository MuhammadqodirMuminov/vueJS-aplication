import axios from './axios';

const articleService = {
	articles() {
		return axios.get('/articles');
	},
	articleDetail(slug) {
		return axios.get(`articles/${slug}`);
	},
};

export default articleService;
