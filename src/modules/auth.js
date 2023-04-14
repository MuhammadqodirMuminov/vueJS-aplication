import { setItem } from '../helpers/pesistantStorage';
import AuthService from '../services/auth';
import { gettersTypes } from './types';

const state = {
	isLoading: false,
	user: null,
	error: null,
	isloggedIn: null,
};

const mutations = {
	registerStart(state) {
		state.isLoading = true;
		state.user = null;
		state.error = null;
		state.isloggedIn = null;
	},
	registerSuccess(state, payload) {
		state.isLoading = false;
		state.user = payload;
		state.isloggedIn = true;
	},
	registerFailure(state, payload) {
		state.isLoading = false;
		state.error = payload.errors;
		state.isloggedIn = false;
	},
	loginStart(state) {
		state.isLoading = true;
		state.user = null;
		state.error = null;
		state.isloggedIn = null;
	},
	loginSuccess(state, payload) {
		state.isLoading = false;
		state.user = payload;
		state.isloggedIn = true;
	},
	loginFailore(state, payload) {
		state.isLoading = false;
		state.error = payload;
		state.isloggedIn = false;
	},
};

const getters = {
	[gettersTypes.currentUser]: state => {
		return state.user;
	},
	[gettersTypes.isloggedIn]: state => {
		return Boolean(state.isloggedIn);
	},
	[gettersTypes.isAnonymous]: state => {
		return state.isloggedIn === false
	},
};

const actions = {
	register(context, user) {
		context.commit('registerStart');

		return new Promise((resolve, reject) => {
			AuthService.register(user)
				.then(res => {
					context.commit('registerSuccess', res.data.user);
					resolve(res.data.user);
					setItem('token', res.data.user.token);
				})
				.catch(err => {
					context.commit('registerFailure', err.response.data);
					reject(err.response.data);
				});
		});
	},
	login(context, user) {
		context.commit('loginStart');

		return new Promise((resolve, reject) => {
			AuthService.login(user)
				.then(res => {
					context.commit('loginSuccess', res.data.user);
					resolve(res.data.user);
					setItem('token', res.data.user.token);
				})
				.catch(err => {
					context.commit('loginFailore', err.response.data);
					reject(err.response.data);
				});
		});
	},
};

export default {
	state,
	mutations,
	actions,
	getters,
};
