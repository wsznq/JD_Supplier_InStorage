/**
 *wechat.js 是一个微信SDK文件
 */
import { getSignature } from '@/api/getData'
import { WechatPlugin } from 'vux'

const wx = {
  methods: {
    async getSignature(callback) {
      let form = {
        url: location.href
      }
      try {
        const data = await getSignature(form)
        console.log('wx', data)
        WechatPlugin.$wechat.config({
          debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
          appId: data.appId, // 必填，公众号的唯一标识
          timestamp: parseInt(data.timestamp), // 必填，生成签名的时间戳
          nonceStr: data.nonceStr, // 必填，生成签名的随机串
          signature: data.signature, // 必填，签名，见附录1
          jsApiList: ['openLocation', 'scanQRCode'] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
        })
      } catch (err) {
        console.log(err)
      }
      WechatPlugin.$wechat.ready(() => {
        if (callback) {
          console.log(callback)
          callback()
        }
      })
    },
		/**
		 * 微信分享
		 * @param {string} title 分享标题
		 * @param {string} imgUrl 分享图片
		 * @param {string} content 分享内容
		 * @param {string} url 分享url
 		*/
    // onMenuShareTimeline (option = {}) {
    // 	// 朋友圈分享
    // 	this.$wechat.onMenuShareTimeline({
    // 		title: option.title || '去汇店', // 分享标题
    // 		link: option.url, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
    // 		imgUrl: option.imgUrl || 'https://h5.ggzlive.com/res/images/common/logo.png', // 分享图标
    // 		success: function () {
    // 			option.success()
    // 		}
    // 	})
    // 	// 好友分享
    // 	this.$wechat.onMenuShareAppMessage({
    // 		title: option.title || '去汇店', // 分享标题
    // 		desc: option.content || '高品质生活，尽在去汇店', // 分享描述
    // 		link: option.url, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
    // 		imgUrl: option.imgUrl || 'https://h5.ggzlive.com/res/images/common/logo.png', // 分享图标
    // 		success: function () {
    // 			option.success()
    // 		},
    // 		cancel: function () {
    // 			option.cancel()
    // 		}
    // 	})
    // },
    openLocation(lat, lng) {
      console.log('ll', lat, 'lng', lng)
      this.$wechat.openLocation({
        latitude: parseFloat(lat), // 纬度，浮点数，范围为90 ~ -90
        longitude: parseFloat(lng), // 经度，浮点数，范围为180 ~ -180。
        name: '', // 位置名
        address: '', // 地址详情说明
        scale: 14, // 地图缩放级别,整形值,范围从1~28。默认为最大
        infoUrl: '', // 在查看位置界面底部显示的超链接,可点击跳转
        success: function () {
          // option.success()
        },
        cancel: function () {
          // option.cancel()
        }
      });
    },
    scanQRCode() {
      this.$wechat.scanQRCode({
        needResult: 0, // 默认为0，扫描结果由微信处理，1则直接返回扫描结果，
        scanType: ["qrCode", "barCode"], // 可以指定扫二维码还是一维码，默认二者都有
        success: function (res) {
          console.log(res)
          var result = res.resultStr; // 当needResult 为 1 时，扫码返回的结果
        },
        fail: function (err) {
          console.log(err)
        }
      });
    }
  }
}

export default wx
