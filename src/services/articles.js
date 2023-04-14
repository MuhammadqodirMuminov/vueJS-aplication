import axios from './axios';

const articleService = {
	articles() {
		return axios.get('/articles');
	},
};

export default articleService;
