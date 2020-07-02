import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import { baseUrl } from './config/env'
import common from './libs/common'
import './assets/less/main.less'
import { ToastPlugin, WechatPlugin, ConfirmPlugin, AlertPlugin } from 'vux'
import axios from 'axios'
import vueTouch from 'kim-vue-touch'


// 注册一个全局自定义指令 `v-focus`
Vue.directive('focus', {
	// 当被绑定的元素插入到 DOM 中时……
	inserted: function (el) {
		// 聚焦元素
		el.focus()
	}
})

// 视图切换动画逻辑
const history = window.sessionStorage;
// history.clear()
history.removeItem('count')
history.removeItem('/')
let historyCount = history.getItem('count') * 1 || 0;
history.setItem('/', 0);
// router.beforeEach(function (to, from, next) {
//   routerTransition(to, from)
//   next()
// })

Vue.use(vueTouch)
Vue.use(common)
Vue.use(ToastPlugin)
Vue.use(WechatPlugin)
Vue.use(ConfirmPlugin)
Vue.use(AlertPlugin)

// Vue.prototype.$http.defaults.headers.common['Authorization'] = 11
Vue.prototype.domainName = baseUrl
// Vue.prototype.domainNameH5 = h5Url
Vue.prototype.$http = axios
Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
	// debugger
	// 解决登录后，token没有更新
	// Vue.prototype.$http.defaults.headers.openId = store.getters.getUserInfo
	// loading状态
	store.commit('updateLoadingStatus', { isLoading: true })
	/* 路由发生变化修改页面title */
	if (to.meta.title) {
		document.title = to.meta.title
	}
	const toIndex = history.getItem(to.path);
  const fromIndex = history.getItem(from.path);

  if (toIndex) {
    if (!fromIndex || parseInt(toIndex, 10) > parseInt(fromIndex, 10) || (toIndex === '0' && fromIndex === '0')) {
      store.commit('UPDATE_DIRECTION', {direction: 'forward'})
    } else {
      store.commit('UPDATE_DIRECTION', {direction: 'reverse'})
    }
  } else {
    ++historyCount;
    history.setItem('count', historyCount);
    to.path !== '/' && history.setItem(to.path, historyCount);
    store.commit('UPDATE_DIRECTION', {direction: 'forward'})
  }
    next()
})

router.afterEach(function (to) {
	store.commit('updateLoadingStatus', { isLoading: false })
})

/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	store,
	components: { App },
	template: '<App/>'
})
