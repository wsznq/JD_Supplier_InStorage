import cookie from 'js-cookie'
import Vue from 'vue'
import types from '../types.js'
const state = {
	userInfo: cookie.get('openId') || '', // 从cookie中拿取token
	isSuccess: false,
	delivery: sessionStorage.getItem('SET_DELIVERY') ? JSON.parse(sessionStorage.getItem('SET_DELIVERY')) : '',
}

const getters = {
	[types.GET_USERINFO](state) {
		return state.userInfo
	}
	// [types.GET_USERINFO]: state => {
	// 	return state.todos.filter(todo => todo.done)
	// }
}

// 异步调用
// const actions = {
// 	setUserInfo ({ commit }, user) {
// 		commit('setUserInfo', user)
// 	},
// 	delUserInfo ({ commit }) {
// 		commit('delUserInfo')
// 	}
// }

// 同步调用
const mutations = {
	[types.SET_USERINFO](state, user) {
		console.log(user)
		state.userInfo = user.WeixinOpenID
		cookie.set('openId', user.WeixinOpenID, {expires: 15}) // 将token存入cookie 并保留半个月 {domain: '.gefuzi.com'}
	},
	getWxLoction (state, value) {
		state.isSuccess = value
	},
	[types.SET_DELIVERY](state, info) {
    state.delivery = info
    sessionStorage.setItem('SET_DELIVERY', JSON.stringify(info))
  },
}

export default {
	state,
	getters,
	// actions,
	mutations
}
