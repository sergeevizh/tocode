export default function filter (array, search) {

	if (!search) return array
	// Small
	search = search.trim().toLowerCase()
	//  Filter
	let newArray = array.filter(function (item) {

		if (item.title.toLowerCase().indexOf(search) !== -1) {
			return item
		}
	})
	//  Error
	return newArray
}