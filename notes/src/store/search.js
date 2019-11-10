import filter from "../assets/js/filter.js";

export default {
	state: {
		newNotes: []
	},
	mutations: {
		setSearch (state, payload) {
			state.newNotes = payload
		}
	},
	actions: {
		setSearch ({ commit, getters }, payload) {
			let res = getters.getNotes
			commit('setSearch', filter(res, payload))
		}
	},
	getters: {
		getNewNotes (state) {
			return state.newNotes
		}
	},
}