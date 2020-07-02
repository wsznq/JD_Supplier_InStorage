const state = {
	isLoading: false,
	direction: 'turn-left'
}

const mutations = {
	updateLoadingStatus (state, payload) {
		state.isLoading = payload.isLoading
	},
	getLocation (state, row) {
		console.log(1)
	},
	setTransition(state, states) {
		console.log('states', states)
        state.direction = states
    }
}

export default {
	state,
	mutations
}
