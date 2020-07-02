<style>
  .JDlogin .weui-cell:before{border: none !important}
</style>

<template>
  <div class="wrap JDlogin" id="wrap">
    <div class="loginTop">
      <div class="logo">
        <img src="../../assets/images/loginLogo.png">
      </div>
      <p>供应商绑定等待审核</p>
    </div>
    
  </div>
</template>

<script>
import { JDSupplierInfo } from '@/api/getData'
import imgCode from '@/components/imgCode'
import { XInput, Group, PopupPicker, Countdown  } from 'vux'
export default {
  data() {
    return {
      userCode: '',
      show: false,
      time: 120,
      start: false,
      isShow:false,
      phone: '',
      supplierList: [['value']],
      form:{
        userpic: this.$route.query.headImg,
        nickname: this.$route.query.nickName,
        sex: '',
        Phone: '',
        name: '',
        WeixinOpenID: this.$route.query.openId,
        SupplierID: ''
      },
      code: ''
    };
  },
  components: {
    imgCode,
    XInput,
    Group,
    PopupPicker,
    Countdown
  },
  mounted() {
    this.getSupplierInfo()
    if (this.$route.query.sex === '1') {
      this.form.sex = '男'
    } else if (this.$route.query.sex === '2') {
      this.form.sex = '女'
    } else {
      this.form.sex = '未知'
    }
    console.log(this.$route.query.openId)
    console.log(this.$route.query.headImg)
    console.log("结束")
  },
  methods: {
    async getSupplierInfo() {
      try {
        let res = await JDSupplierInfo({FWeixinOpenID: this.form.WeixinOpenID})
        this.$store.commit('SET_USERINFO', {WeixinOpenID: this.form.WeixinOpenID})
        this.$router.replace({path: '/', query: {openId: this.$route.query.openId}})
      } catch (error) {
        
      }
    },
    finish() {
      this.show = false,
      this.start = false
      this.time = 120
    },
    onShow() {

    },
    onHide() {

    },
    clear() {
      // alert('9')
    }
  }
};
</script>

<style lang="less" scoped>
@import "~@/assets/less/main.less";
.wrap {
  .icon-xingming{
    font-size: 16px;
    color: #aa0000;
  }
  height: 100vh;
  background-image: url("../../assets/images/loginBg.png");
  background-size: 100% 100%;
  .loginTop {
    .v-flex;
    flex-direction: column;
    margin-top: @rem*174;
    p {
      margin-top: @rem*30;
      font-size: @rem*48;
      color: white;
    }
  }
  .logoBox {
    margin: @rem*64 auto;
    width: @rem*640;
    // height: @rem*500;
    background: white;
    border-radius: 8px;
    padding: @rem*30;
    .tel {
      .name {
        font-size: @rem*26;
        color: #666;
      }
      .telBox {
        margin-top: 10px;
        border-radius: 4px;
        border: solid 1px #eeeeee;
        padding: @rem*18;
        display: flex;
        align-items: center;
        input {
          border: none;
          height: 100%;
          width: 80%;
        }
        img {
          width: @rem*22;
          height: @rem*32;
          margin-right: @rem*20;
        }
      }
      .telBox2 {
        img {
          width: @rem*26;
          height: @rem*32;
        }
        input {
          width: 68%;
        }
        .getCode {
          color: #b70f05;
        }
      }
    }
    .loginButton {
      .v-flex;
      height: @rem*80;
      background-image: linear-gradient(270deg, #aa0000 0%, #d93309 100%);
      border-radius: 4px;
      font-weight: normal;
      color:white;font-size: @rem*36;
      margin-top: @rem*50;
    }
  }
}
</style>
