import axios from 'axios';
import { getItem } from '../helpers/pesistantStorage';

axios.defaults.baseURL = 'https://api.realworld.io/api/';

axios.interceptors.request.use(config => {
	const token = JSON.parse(getItem('token'));

	const authorization = token ? `Token ${token}` : '';
	config.headers.Authorization = authorization;
	return config;
});

export default axios;
