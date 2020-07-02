/**
 * 配置编译环境和线上环境之间的切换
 *
 * h5Url: web页面域名地址
 * baseUrl: api域名地址
 * routerMode: 路由模式
 * imgBaseUrl: 图片所在域名地址
 *
 */

// let baseUrl = 'http://220.189.245.171:8050'
// let baseUrl = 'http://220.189.245.171:5143'
 let baseUrl = 'http://192.168.99.79:5143'
// let baseUrl = 'http://192.168.101.234:9002'
// let baseUrl = 'http://192.168.1.79:15008'
// let baseUrl = 'http://192.168.99.79:8888'
let routerMode = 'hash'
let imgBaseUrl

if (process.env.NODE_ENV === 'development') {
	imgBaseUrl = 'http://cangdu.org:8001/img/'
} else if (process.env.NODE_ENV === 'production') {
	// baseUrl = 'http://220.189.245.171:8050'
	// baseUrl = 'http://220.189.245.171:5143'
	 baseUrl = 'http://192.168.99.79:5143'
	// baseUrl = 'http://192.168.101.234:9002'
	// baseUrl = 'http://220.189.245.171:8012'
	// baseUrl = 'http://192.168.99.79:8888'
}

export {
	baseUrl,
	// h5Url,
	routerMode,
	imgBaseUrl
}
