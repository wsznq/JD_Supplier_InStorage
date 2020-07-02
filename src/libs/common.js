import cookie from 'js-cookie'
/**
 * 2018/10/09 by huangtianhan
 * nativeApp function
 */
export default {
	install (Vue, option) {
		// 浏览器类型
		Vue.prototype.setSSionStorage = (name, value) => {
			window.sessionStorage.setItem(name, JSON.stringify(value))
    },
    Vue.prototype.getSSionStorage = (name) => {
			return window.sessionStorage.getItem(name)
		}
 	}
}

