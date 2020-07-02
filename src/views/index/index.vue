<template>
  <div class="wrap" id="wrap">
    <div class="head">
      <div class="logo">
        <img src="../../assets/images/loginLogo.png">
      </div>
      <p class="companyName" v-if='supplierInfo.FName'>{{supplierInfo.FName}}</p>
      <p class="userName" v-if='supplierInfo.FContact'>{{supplierInfo.FContact}}</p>
      <div class="about">
        <div class="top">
          <img src="../../assets/images/about.png">
        </div>
        <div class="aboutBottom" @click='toIndex'>
          <div class="aboutjd">关于金帝</div>
          <div class="lookInfo v-flex">
            查看详情
            <i class="iconfont icon-icon"></i>
          </div>
        </div>
      </div>
    </div>
    <div class="functionList">
      <ul>
        <li v-for="(item, index) in list" :key="index" :style="'background: url('+ item.bg + ') no-repeat; background-size: 100% 100%;'" @click='jump(item)'>
					<div>
						<img :src='item.icon'>
					</div>
					<div class='liName'>{{item.name}}</div>
				</li>
      </ul>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import { JDSupplierInfo} from '@/api/getData'
export default {
  data() {
    return {
      supplierInfo: '',
      list: [
        {
					name: "供应商手册",
					bg: require('../../assets/images/bg1.png'),
          icon: require('../../assets/images/liicon1.png'),
          linkInfo: '/notice?type=news'
				},
				{
					name: '通知公告',
					bg: require('../../assets/images/bg2.png'),
					icon: require('../../assets/images/liicon2.png'),
					linkInfo: '/notice?type=notice'
				},
				{
					name: '采购订单查询',
					bg: require('../../assets/images/bg3.png'),
					icon: require('../../assets/images/liicon3.png'),
					linkInfo: '/orderSearch'
				},
				{
					name: '入库单查询',
					bg: require('../../assets/images/bg4.png'),
          icon: require('../../assets/images/liicon4.png'),
          linkInfo: '/warehousing'
				},
				{
					name: '往来对账查询',
					bg: require('../../assets/images/bg5.png'),
          icon: require('../../assets/images/liicon5.png'),
          linkInfo: '/reconciliation'
				},
				{
					name: '送货通知单',
					bg: require('../../assets/images/bg6.png'),
          icon: require('../../assets/images/liicon6.png'),
          linkInfo: '/receiving'
				},
				{
					name: '暂收单查询',
					bg: require('../../assets/images/bg7.png'),
          icon: require('../../assets/images/liicon7.png'),
          linkInfo: '/temporaryIndex'
				},
				{
					name: '送货单查询',
					bg: require('../../assets/images/bg8.png'),
          icon: require('../../assets/images/liicon8.png'),
          linkInfo: '/deliveryList'
				},
				{
					name: '品检单查询',
					bg: require('../../assets/images/bg9.png'),
          icon: require('../../assets/images/liicon9.png'),
          linkInfo: '/productcheck'
				},
        /*{
					name: '退货单查询',
					bg: require('../../assets/images/bg4.png'),
          icon: require('../../assets/images/liicon4.png'),
          linkInfo: '/getzreturns'
				},*/
      ]
    };
  },
  components: {},
  computed: {
    ...mapState({
      openId: state => state.user.userInfo
    })
  },
  mounted() {
    //console.log(this.$store.getters.GET_USERINFO)
    // if (!this.openId) { // 若该用户 为绑定用户信息
    //   location.href = 'http://work.goldemperor.com/Home/InitWx'
    // } else {
      this.getSupplierInfo() // 获取供应商详情信息
    // }
	},
  methods: {
    toIndex () {
      window.location.href='http://work.goldemperor.com/Wap/Index'
    },
    async getSupplierInfo() {
      try {
        let res = await JDSupplierInfo({FWeixinOpenID: this.openId})
        this.supplierInfo = res[0]
        this.$store.commit('SET_SUPPLIERINFO', {supplierInfo: res[0]})
      } catch (error) {
        if (error === "该OpenID没有对应的供应商") { // 未绑定 供应商
          //console.log('error', error.ReturnMsg)
          location.href = 'http://work.goldemperor.com/Home/InitWx' // 跳转 获取openId 引导 绑定供应商
          //this.$router.push({ path: "/login", query: { openId: this.openId }});
        }
        if(error === "请等待审核"){
          this.$router.push({ path: "/waitcheck", query: { openId: this.openId }});
        }
      }
    },
		jump(item) {
			this.$router.push({path: item.linkInfo})
		}
	}
};
</script>

<style lang="less" scoped>
@import "~@/assets/less/main.less";
.wrap {
  .head {
		.login{
			width: @rem*430;
			height: @rem*168;
		}
    position: relative;
    display: flex;
    align-items: center;
    padding-top: @rem*64;
    flex-direction: column;
    height: @rem*570;
		background: url(../../assets/images/headerBg.png) no-repeat;
		background-size: 100% 100%;
    .companyName {
      font-size: @rem*36;
      color: white;
      margin-top: @rem*10;
    }
    .userName {
      color: white;
      font-size: @rem*28;
    }
    .about {
      bottom: -@rem*160;
      position: absolute;
      width: @rem*690;
      // height: @rem*292;
      .top {
        height: @rem*248;
        img {
          border-radius: 6px 6px 0px 0px;
          height: 100%;
          width: 100%;
        }
      }
      .aboutBottom {
        background: white;
        border-radius: 0 0 6px 6px;
        height: @rem*88;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 @rem*15;
        .aboutjd {
          color: #aa0000;
          font-size: @rem*36;
        }
        .lookInfo {
          font-size: @rem*26;
          color: #aaa;
        }
      }
    }
  }
  .functionList {
    margin-top: @rem*150;
    ul {
      // padding: @rem*30;
      width: @rem*690;
      margin: 0 auto;
      padding-bottom: @rem*30;
      display: flex;
      flex-wrap: wrap;
      li {
				.v-flex;
				flex-direction: column;
				margin-top: @rem*30;
				margin-right: @rem*29;
        width: @rem*210;
        height: @rem*240;
				border-radius: 6px;
				.liName{
					font-size:@rem*28;
					color:white;
					margin-top: @rem*25;
				}
			}
			li:nth-child(3n){
				margin-right: 0;
			}
    }
  }
}
</style>
