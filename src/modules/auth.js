
const state = {
	isLoading: false,
}



const mutations = {
	setLoading(state) {
		state.isLoading = true
	}
}

const actions = {
	register(context){
		context.commit('setLoading')
	}
	
}

export default {
	state,
	mutations,
	actions,
}
