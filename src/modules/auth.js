import { removeItem, setItem } from '../helpers/pesistantStorage';
import AuthService from '../services/auth';
import { gettersTypes } from './types';

const state = {
	isLoading: false,
	user: null,
	error: null,
	isLoggedIn: null,
};

const mutations = {
	registerStart(state) {
		state.isLoading = true;
		state.user = null;
		state.error = null;
		state.isLoggedIn = null;
	},
	registerSuccess(state, payload) {
		state.isLoading = false;
		state.user = payload;
		state.isLoggedIn = true;
	},
	registerFailure(state, payload) {
		state.isLoading = false;
		state.error = payload.errors;
		state.isLoggedIn = false;
	},
	loginStart(state) {
		state.isLoading = true;
		state.user = null;
		state.error = null;
		state.isLoggedIn = null;
	},
	loginSuccess(state, payload) {
		state.isLoading = false;
		state.user = payload;
		state.isLoggedIn = true;
	},
	loginFailore(state, payload) {
		state.isLoading = false;
		state.error = payload;
		state.isLoggedIn = false;
	},
	gerUserStart(state) {
		state.isLoading = true;
	},
	getUserSuccess(state, payload) {
		state.isLoading = false;
		state.isLoggedIn = true;
		state.user = payload;
	},
	getUserFailore(state) {
		state.isLoading = false;
		state.user = null;
		state.isLoggedIn = false;
	},
	logout(state) {
		state.user = null;
		state.isLoggedIn = false;
	},
};

const getters = {
	[gettersTypes.currentUser]: state => {
		return state.user;
	},
	[gettersTypes.isLoggedIn]: state => {
		return Boolean(state.isLoggedIn);
	},
	[gettersTypes.isAnonymous]: state => {
		return state.isLoggedIn === false;
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
	getUser(context) {
		context.commit('gerUserStart');

		return new Promise((resolve, reject) => {
			AuthService.getUser()
				.then(res => {
					context.commit('getUserSuccess', res.data.user);
					resolve(res.data.user);
				})
				.catch(() => {
					context.commit('getUserFailore');
				});
		});
	},
	logout(context) {
		context.commit('logout');
		removeItem('token');
	},
};

export default {
	state,
	mutations,
	actions,
	getters,
};
