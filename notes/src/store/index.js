import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

import notes from "./notes.js"
import search from "./search.js"

export default new Vuex.Store({
	modules: {
		notes, search
	}
})