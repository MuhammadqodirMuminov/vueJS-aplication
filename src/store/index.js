import { createStore } from 'vuex';
import articles from '../modules/article';
import auth from '../modules/auth';

const store = createStore({
	state: {},
	mutations: {},
	actions: {},
	modules: { auth, articles },
});

export default store;
