import Vue from 'vue'
import Vuex from 'vuex'
import common from './modules/common'
import user from './modules/user'
import scroll from './modules/scroll'
import mutaions from './mutations'
// const store = new Vuex.Store({
//   // ...
//   plugins: [createPersistedState({
// 		storage: window.sessionStorage,
// 		reducer(val) {
// 			return {
// 			// 只储存state中的user
// 			user: val.user
// 		}
//  }
// })]
// })
Vue.use(Vuex)

export default new Vuex.Store({
	modules: {
		common,
		user,
		scroll,
		mutaions
	},
	strict: process.env.NODE_ENV !== 'production'
})
