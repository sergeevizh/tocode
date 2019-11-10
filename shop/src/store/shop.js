export default {
	state: {
		shopList: [
			{
				id: 1,
				title: 'Nike red',
				descr: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, animi.',
				img: require('../assets/img/1.png'),
				gallery: [
					{ name: 'Nuke botts First', img: require('../assets/img/1.png') },
					{ name: 'Nuke botts Second', img: require('../assets/img/2.png') },
					{ name: 'Nuke botts Thrid', img: require('../assets/img/3.png') }
				]
			},
			{
				id: 2,
				title: 'Nike Default',
				descr: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, animi.',
				img: require('../assets/img/4.png'),
				gallery: [
					{ name: 'Nuke botts First', img: require('../assets/img/4.png') },
					{ name: 'Nuke botts Second', img: require('../assets/img/5.png') },
					{ name: 'Nuke botts Thrid', img: require('../assets/img/6.png') }
				]
			},
			{
				id: 3,
				title: 'Nike Green',
				descr: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, animi.',
				img: require('../assets/img/7.png'),
				gallery: [
					{ name: 'Nuke botts First', img: require('../assets/img/7.png') },
					{ name: 'Nuke botts Second', img: require('../assets/img/8.png') },
					{ name: 'Nuke botts Thrid', img: require('../assets/img/9.png') }
				]
			},
			{
				id: 4,
				title: 'Nike Street',
				descr: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, animi.',
				img: require('../assets/img/10.png'),
				gallery: [
					{ name: 'Nuke botts First', img: require('../assets/img/10.png') },
					{ name: 'Nuke botts Second', img: require('../assets/img/11.png') },
					{ name: 'Nuke botts Thrid', img: require('../assets/img/12.png') }
				]
			}
		]
	},
	mutations: {},
	actions: {},
	getters: {
		getShopList (state) {
			return state.shopList
		},
		getProduct: (state) => (id) => {
			return state.shopList.find(product => product.id === +id)
		}
	}
}