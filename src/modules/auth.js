import { setItem } from "../helpers/pesistantStorage";
import AuthService from "../services/auth";

const state = {
  isLoading: false,
  user: null,
  error: null,
};

const mutations = {
  registerStart(state) {
    state.isLoading = true;
    state.user = null;
    state.error = null;
  },
  registerSuccess(state, payload) {
    state.isLoading = false;
    state.user = payload;
  },
  registerFailure(state, payload) {
    state.isLoading = false;
    state.error = payload.errors;
  },
};

const actions = {
  register(context, user) {
    context.commit("registerStart");

    return new Promise((resolve, reject) => {
      AuthService.register(user)
        .then((res) => {
          context.commit("registerSuccess", res.data.user);
          resolve(res.data.user);
          setItem("token", res.data.user.token);
        })
        .catch((err) => {
          context.commit("registerFailure", err.response.data);
          reject(err.response.data);
        });
    });
  },
};

export default {
  state,
  mutations,
  actions,
};
