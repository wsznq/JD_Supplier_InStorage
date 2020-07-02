import Vue from 'vue'
import Router from 'vue-router'
import {routerMode} from '../config/env'

Vue.use(Router)

export default new Router({
	mode: routerMode,
	routes: [
		// // 测试
		// {
		// 	path: '/test',
		// 	name: 'test',
		// 	meta: {
		// 		title: 'test',
		// 		keepAlive: false
		// 	},
		// 	component: (resovle) => {
		// 		require(['../views/test.vue'], resovle)
		// 	}
		// },
		// 首页
		{
			path: '/',
			name: 'index',
			meta: {
				title: '供应商平台',
				keepAlive: false
			},
			component: (resovle) => {
				require(['../views/index/index.vue'], resovle)
			}
		},
		// 首页
		{
			path: '/manual',
			name: 'manual',
			meta: {
				title: '供应商手册',
				keepAlive: false
			},
			component: (resovle) => {
				require(['../views/manual/index.vue'], resovle)
			}
		},
		// 登录
		{
			path: '/login',
			name: 'login',
			meta: {
				title: '登录',
				keepAlive: false
			},
			component: (resovle) => {
				require(['../views/login/index.vue'], resovle)
			}
		},
		// 等待审核
		{
			path: '/waitcheck',
			name: 'waitcheck',
			meta: {
				title: '等待审核',
				keepAlive: false
			},
			component: (resovle) => {
				require(['../views/waitcheck/index.vue'], resovle)
			}
		},
		// 通知公告
		{
			path: '/notice',
			name: 'notice',
			meta: {
				title: '通知公告',
				keepAlive: false
			},
			component: (resovle) => {
				require(['../views/notice/index.vue'], resovle)
			}
		},
		// 新闻详情
		{
			path: '/newsInfo',
			name: 'newsInfo',
			meta: {
				title: '新闻详情',
				keepAlive: false
			},
			component: (resovle) => {
				require(['../views/notice/info.vue'], resovle)
			}
		},
		// 采购订单查询
		{
			path: '/orderSearch',
			name: 'orderSearch',
			meta: {
				title: '采购订单查询',
				keepAlive: false
			},
			component: (resovle) => {
				require(['../views/order/index.vue'], resovle)
			}
		},
		// 采购订单详情
		{
			path: '/orderInfo',
			name: 'orderInfo',
			meta: {
				title: '采购订单详情',
				keepAlive: false
			},
			component: (resovle) => {
				require(['../views/order/info.vue'], resovle)
			}
		},
		// 入库单查询
		{
			path: '/warehousing',
			name: 'warehousing',
			meta: {
				title: '入库单查询',
				keepAlive: false
			},
			component: (resovle) => {
				require(['../views/warehousing/index.vue'], resovle)
			}
		},
		// 入库单详情
		{
			path: '/warehousInfo',
			name: 'warehousInfo',
			meta: {
				title: '入库单详情',
				keepAlive: false
			},
			component: (resovle) => {
				require(['../views/warehousing/info.vue'], resovle)
			}
		},
		// 往来对账单查询
		{
			path: '/reconciliation',
			name: 'reconciliation',
			meta: {
				title: '往来对账单查询',
				keepAlive: false
			},
			component: (resovle) => {
				require(['../views/reconciliation/index.vue'], resovle)
			}
		},
		// 往来对账单详情
		{
			path: '/reconciliationInfo',
			name: 'reconciliationInfo',
			meta: {
				title: '往来对账单详情',
				keepAlive: false
			},
			component: (resovle) => {
				require(['../views/reconciliation/info.vue'], resovle)
			}
		},
		// 送货通知单
		{
			path: '/receiving',
			name: 'receiving',
			meta: {
				title: '送货通知单',
				keepAlive: false
			},
			component: (resovle) => {
				require(['../views/receiving/index.vue'], resovle)
			}
		},
		// 送货通知单详情
		{
			path: '/receivinfo',
			name: 'receivinfo',
			meta: {
				title: '送货通知单详情',
				keepAlive: false
			},
			component: (resovle) => {
				require(['../views/receiving/info.vue'], resovle)
			}
		},
		// 送货单
		{
			path: '/delivery',
			name: 'delivery',
			meta: {
				title: '生成送货单',
				keepAlive: false
			},
			component: (resovle) => {
				require(['../views/delivery/index.vue'], resovle)
			}
		},
		// 送货单列表
		{
			path: '/deliveryList',
			name: 'deliveryList',
			meta: {
				title: '送货单列表查询',
				keepAlive: false
			},
			component: (resovle) => {
				require(['../views/delivery/list.vue'], resovle)
			}
		},
		// 结果
		{
			path: '/result',
			name: 'result',
			meta: {
				title: '结果',
				keepAlive: false
			},
			component: (resovle) => {
				require(['../views/delivery/result.vue'], resovle)
			}
		},
		// 送货单详情
		{
			path: '/deliveryInfo',
			name: 'deliveryInfo',
			meta: {
				title: '送货单详情',
				keepAlive: false
			},
			component: (resovle) => {
				require(['../views/delivery/info.vue'], resovle)
			}
		},
		// 送货单详情2
		{
			path: '/deliveryInfo2',
			name: 'deliveryInfo2',
			meta: {
				title: '送货单详情',
				keepAlive: false
			},
			component: (resovle) => {
				require(['../views/delivery/info2.vue'], resovle)
			}
		},
		// 送货单详情2（编辑）
		{
			path: '/deliveryInfo2_edit',
			name: 'deliveryInfo2_edit',
			meta: {
				title: '送货单详情编辑',
				keepAlive: false
			},
			component: (resovle) => {
				require(['../views/delivery/info2_edit.vue'], resovle)
			}
		},
		// 送货单详情2
		{
			path: '/deliveryInfo3',
			name: 'deliveryInfo3',
			meta: {
				title: '送货单详情',
				keepAlive: false
			},
			component: (resovle) => {
				require(['../views/delivery/info3.vue'], resovle)
			}
		},
		// 查看二维码
		{
			path: '/qrcode',
			name: 'qrcode',
			meta: {
				title: '送货单详情',
				keepAlive: false
			},
			component: (resovle) => {
				require(['../views/delivery/qrcode.vue'], resovle)
			}
		},
		// 暂收单
		{
			path: '/temporaryIndex',
			name: 'temporaryIndex',
			meta: {
				title: '暂收单查询',
				keepAlive: false
			},
			component: (resovle) => {
				require(['../views/temporaryReceipt/index.vue'], resovle)
			}
		},
		// 暂收单详情
		{
			path: '/temporaryInfo',
			name: 'temporaryInfo',
			meta: {
				title: '暂收单详情',
				keepAlive: false
			},
			component: (resovle) => {
				require(['../views/temporaryReceipt/info.vue'], resovle)
			}
		},
		// 品检单查询
		{
			path: '/productcheck',
			name: 'productcheck',
			meta: {
				title: '品检单查询',
				keepAlive: false
			},
			component: (resovle) => {
				require(['../views/productcheck/index.vue'], resovle)
			}
		},
		// 退货单查询
		{
			path: '/getzreturns',
			name: 'getzreturns',
			meta: {
				title: '退货单查询',
				keepAlive: false
			},
			component: (resovle) => {
				require(['../views/getzreturns/index.vue'], resovle)
			}
		},
	],
	scrollBehavior (to, from, savedPosition) {
		// console.log(savedPosition)
		// if (savedPosition) {
		// 	setTimeout(() => {
		// 		return { x: 0, y: 2000 }
		// 	}, 2200)
		// } else {
		// 	return { x: 0, y: 0 }
		// }
		return { x: 0, y: 0 }
	}
})
