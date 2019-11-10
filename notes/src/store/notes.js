export default {
	state: {
		title: 'Notes app',
		message: null,
		grid: true,
		options: ['Standard', 'Important', 'required'],
		note: {
			title: '',
			description: '',
			priority: '',
			editing: false
		},
		notes: [
			{
				title: 'First Note',
				description: 'Description for first note',
				priority: 'standart',
				attr: 'First Note',
				editing: false,
				date: new Date(Date.now()).toLocaleString()
			},
			{
				title: 'Second Note',
				description: 'Description for second note',
				priority: 'standart',
				attr: 'Second Note',
				editing: false,
				date: new Date(Date.now()).toLocaleString()
			},
			{
				title: 'Third Note',
				description: 'Description for third note',
				priority: 'standart',
				attr: 'Third Note',
				editing: false,
				date: new Date(Date.now()).toLocaleString()
			}
		],
		newNotes: []
	},
	mutations: {
		setNotes (state, payload) {
			state.notes = payload
		},
		setAddNote (state, payload) {
			let { title, description, priority, attr, editing } = payload;

			if (title === '') {
				state.message = 'title can`t be blank!'
				return false
			}
			if (priority == '') {
				state.message = 'select priority!'
				return false
			}
			state.notes.push({
				title,
				description,
				priority: priority.toLowerCase(),
				attr: attr = title,
				editing,
				date: new Date(Date.now()).toLocaleString()
			})
			state.note.title = ''
			state.note.description = ''
			state.note.priority = ''
			state.message = null
		},
		setGrid (state, payload) {
			state.grid = payload
		}
	},
	actions: {
		setNotes ({ commit }, payload) {
			commit('setNotes', payload)
		},
		setAddNote ({ commit }, payload) {
			commit('setAddNote', payload)
		},
		setGrid ({ commit }, payload) {
			commit('setGrid', payload)
		}
	},
	getters: {
		getNotes (state) {
			return state.notes
		},
		getNote (state) {
			return state.note
		},
		getOptions (state) {
			return state.options
		},
		getMessage (state) {
			return state.message
		},
		getGrid (state) {
			return state.grid
		},
		getTitle (state) {
			return state.title
		}
	}
}