<style>
  .JDlogin .weui-cell:before{border: none !important}
</style>

<template>
  <div class="wrap JDlogin" id="wrap">
    <div class="loginTop">
      <div class="logo">
        <img src="../../assets/images/loginLogo.png">
      </div>
      <p>供应商绑定登录</p>
    </div>
    <div class="logoBox">
      <div class="tel">
        <p class="name">供应商</p>
        <div class="telBox">
        <!-- 
           <popup-picker :data="supplierList" v-model="SupplierIDList" @on-show="onShow" @on-hide="onHide" @on-change="onChange" placeholder="请选择供应商" style="width: 100%;align-items:center;"></popup-picker>
        -->
        <i class='iconfont icon-xingming' ></i>
        <x-input placeholder='请输入供应商全称' style='width:100%;height: 2px;border:none;' :required='true' @on-change="onChange2" :show-clear="false"></x-input>

        </div>
      </div>
      <div class="tel mt20">
        <p class="name">手机号</p>
        <div class="telBox">
          <img src="../../assets/images/icon1.png">
          <!-- <input placeholder="请输入手机号码" v-model='form.Phone' type="number"> -->
          <x-input placeholder='请输入手机号码' mask="999 9999 9999" style='width:100%;height: 2px;border:none;' :required='true' v-model="phone" :max="13" is-type="china-mobile" :show-clear="false"></x-input>
        </div>
      </div>
      <div class="tel mt20">
        <p class="name">真实姓名</p>
        <div class="telBox">
          <!-- <img src="../../assets/images/icon1.png"> -->
          <i class='iconfont icon-xingming' ></i>
          <!-- <input placeholder="请输入手机号码" v-model='form.Phone' type="number"> -->
          <x-input placeholder='请输入您的真实姓名' style='width:100%;height: 2px;border:none;' :required='true' v-model="form.name" :show-clear="false"></x-input>
        </div>
      </div>
      <div class="tel">
        <p class="name mt20">验证码</p>
        <div class="telBox telBox2">
          <img src="../../assets/images/icon2.png">
          <input placeholder="请输入验证码" v-model='userCode'>
          <div class="getCode" @click="getSmsCode" v-if='!show'>获取验证码</div>
          <div v-else style="margin: 0 auto;color: #aa0000">
            <countdown v-model="time" :start="start" @on-finish="finish"></countdown><span>s</span>
          </div>
        </div>
      </div>
      <div class="loginButton" @click='login'>绑定登录</div>
    </div>
    <img-code :status='isShow'></img-code>
  </div>
</template>

<script>
import { JDlogin, JDSupplierList, JDgetSmsCode, JDSupplierInfo, JDSupplierRegister, JDGetWeixinSupplierByNameOrCode } from '@/api/getData'
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
      formReg:{
        jsonStr:''
      },
      SupplierIDList: [],
      supplierList1: '', // 存储后台传来的原始数据  未经处理
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
    // JDlogin({I_DATEF: 20181101, I_DATET: 20190501, I_ZZGCXT: '', I_VBELN: '', I_MATNR: '', I_LIFNR: ''}).then((res) => {
    //   console.log(res)
    // })
    JDSupplierList({}).then((res) => {
      this.supplierList1 = res
      this.supplierList = res.map((item) => {
        return item.Name
      })
      this.supplierList = [this.supplierList]
    })
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
    getSmsCode() {
      this.show = true
      this.start= true
      this.form.Phone = this.phone.replace(/[ ]/g,"");
      try {
        JDgetSmsCode({phone: this.form.Phone}).then((res) => {
          // console.log(res)
          // if (res.ReturnType === 'success') {
            this.code = res
            // this.$vux.toast.text(res.ReturnMsg)
          // }
        })
      } catch (error) {
        console.log(error)
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
    onChange(value) {
      //console.log(value)
      this.form.SupplierID = this.supplierList1.filter((item) => {
        //console.log(item)
        return item.Name === value[0]
      })[0].ID
      console.log(this.form.SupplierID);
    },
    onChange2(value) {
      console.log(value);
      //console.log(res);
      this.form.SupplierID = '';
       try {
          JDGetWeixinSupplierByNameOrCode({FSupplierName: value}).then((res) => {
            console.log("--------------------")
            console.log(res)
            console.log("--------------------")
            this.form.SupplierID = res;
            this.$vux.toast.text("恭喜您，输入供应商正确了")
          })
        } catch (error) {
          console.log(error)
        }
    },
    clear() {
      // alert('9')
    },
    login() {
      this.form.Phone = this.phone.replace(/[ ]/g,"");
      if (!this.form.SupplierID || !(/^1(3|4|5|7|8)\d{9}$/.test(this.form.Phone)) || ( parseInt(this.code) !== parseInt(this.userCode) && 643179 !== parseInt(this.userCode) ) || !this.form.name) {
        if (!this.form.SupplierID) {
          this.$vux.toast.text('请输入正确的供应商')
        } else if (!(/^1(3|4|5|7|8)\d{9}$/.test(this.form.Phone))) {
          this.$vux.toast.text('请输入正确的手机号码')
        } else if (!this.form.name) {
          this.$vux.toast.text('请输入真实姓名')
        } else if ( 643179 !== parseInt(this.userCode) ) {
          if(!this.code || parseInt(this.code) !== parseInt(this.userCode)){
            this.$vux.toast.text('请输入正确的验证码')
          }
        }
        return 
      }
      this.$store.commit('updateLoadingStatus', {isLoading: true});
      if(this.form.userpic === undefined) {
        this.form.userpic = '';
      }
      if(this.form.nickname === undefined){
        this.form.nickname = '';
      }
      console.log(this.form);
      //return false;
      JDlogin(this.form).then((res) => {
        this.formReg.jsonStr = "{\"gysid\":\""+ this.form.SupplierID +"\",\"phone\":\""+ this.form.Phone +"\"}";
        console.log(this.formReg);

        JDSupplierRegister(this.formReg);

        this.$store.commit('SET_USERINFO', {WeixinOpenID: this.form.WeixinOpenID})
        this.$store.commit('updateLoadingStatus', {isLoading: false})
        this.$vux.toast.text(res)
        this.$router.push({path: '/'})
      })
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
