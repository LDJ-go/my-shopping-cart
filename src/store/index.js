import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const state = {
	data: [
		{
			id: 1,
			name: "Chicken Wing",
			category: "Food",
			quantity: 3,
			price: 10,
			selected: false,
		},
		{
			id: 2,
			name: "Pizza",
			category: "Food",
			quantity: 1,
			price: 50,
			selected: false,
		},
		{
			id: 3,
			name: "Hamburger",
			category: "Food",
			quantity: 1,
			price: 12,
			selected: false,
		},
		{
			id: 4,
			name: "Coca Cola",
			category: "Drink",
			quantity: 2,
			price: 5,
			selected: false,
		},
		{
			id: 5,
			name: "Orange Juice",
			category: "Drink",
			quantity: 1,
			price: 15,
			selected: false,
		},
		{
			id: 6,
			name: "Potato Chips",
			category: "Snack",
			quantity: 1,
			price: 8,
			selected: false,
		},
	],
	sortBy: "original",
};

const getters = {
	// 选中-总数
	totalCount(state) {
		return state.data
			.filter((item) => item.selected)
			.reduce((sum, item) => {
				return (sum += item.quantity);
			}, 0);
	},
	// 选中-总金额
	totalPrice(state) {
		return state.data
			.filter((item) => item.selected)
			.reduce((sum, item) => {
				return (sum += item.quantity * item.price);
			}, 0);
	},
	// 全选
	selectedAll(state) {
		return state.data.every((item) => {
			return item.selected;
		});
	},
	// 渲染列表-排序
	renderList(state) {
		if (state.sortBy === "asc") {
			return deepClone(state.data).sort((a, b) => {
				return a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1;
			});
		} else if (state.sortBy === "desc") {
			return deepClone(state.data)
				.sort((a, b) => {
					return a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1;
				})
				.reverse();
		} else {
			return deepClone(state.data);
		}
	},
};

function deepClone(obj) {
	return JSON.parse(JSON.stringify(obj));
}

const actions = {};

const mutations = {
	add(state, id) {
		state.data.forEach((item) => {
			if (item.id === id) {
				item.quantity++;
			}
		});
	},
	reduce(state, id) {
		state.data.forEach((item) => {
			if (item.id === id) {
				item.quantity--;
			}
		});
	},
	delete(state, id) {
		state.data.forEach((item, index, arr) => {
			if (item.id === id) {
				arr.splice(index, 1);
			}
		});
	},
	// 单个选中切换
	toggleSelected(state, id) {
		state.data.forEach((item) => {
			if (item.id === id) {
				item.selected = !item.selected;
			}
		});
	},
	// 全选切换
	toggleSelectedAll(state, selected) {
		state.data.forEach((item) => {
			item.selected = selected;
		});
	},
	// 切换排序
	toggleSortBy(state, sortBy) {
		state.sortBy = sortBy;
	},
};

const store = new Vuex.Store({
	actions,
	mutations,
	state,
	getters,
});

export default store;
