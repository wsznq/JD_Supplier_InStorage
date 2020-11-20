
<template>
  <div class="wrap" id="wrap">
    <!-- <qrcode :value="value"></qrcode> -->
    <div class="item-top" v-if="info.length === 2">
      <div class="item">
        <div class="item-left" v-if="info[0].VBELN">指令： {{info[0].VBELN}}</div>
        <div class="item-right" v-if="info[0].ZZXTNO">型体：{{info[0].ZZXTNO}}</div>
      </div>
      <div class="item mt20">
        <div class="item-left">收料通知单号：{{info[0].EBELN}}</div>
        <div class="item-right">物料：{{info[0].MATNR}}-{{info[0].MAKTX_YB}}</div>
      </div>
      <!-- <div class="item mt20">收料通知单号：{{info[0].EBELN}}</div>
      <div class="item mt20">物料名称：{{info[0].MAKTX_YB}}</div> -->
    </div>
    <div class="data-table">
      <div class="t_r">
        <div class="t_r_t">
          <table :style="info.length === 2 ? `width: ${widths2 + 40}px`: 'width: 1210px'">
            <tbody>
              <tr v-if="info.length !== 2">
                <th
                  v-for="(item, key) in tableHead"
                  :key="key"
                  width="110"
                >{{item}}</th>
              </tr>
              <!-- :style="item === '指令' || item === '型体' || item === '通知单号'||item === '物料名称' ||item === '物料编号' || item === '本次送货数量'? 'width: 110px' : ''" -->
              <tr v-else>
                <th v-for="(item, key) in tableHead2" :key="key" width="110">{{item}}</th>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="t_r_content">
          <table :style="info.length === 2 ? `width: ${widths2 + 40}px `: 'width: 1210px'">
            <tbody v-tap="(e)=>vueTouch(e)">
              <tr v-for="(item, index) in info" :id="index" :key="index" class="to">
                <td width="110" v-if="info.length !== 2">{{item.MATNR}}</td>
                <td width="110" v-if="info.length !== 2">{{item.MAKTX_YB}}</td>
                <td width="110">{{item.SIZE1}}</td>
                <td width="110">{{item.ZDELIQTY}}</td>
                <td width="110">{{item.MENGE}}</td>
                <td width="110">{{item.YK_NUM}}</td>
                <td width="110">{{item.WK_NUM}}</td>
                <td width="110">{{item.ZXT}}</td>
                <td width="110">{{item.ZLGORT}}{{item.LGOBE}}</td>
                <td width="110" v-if="info.length !== 2">{{item.VBELN}}</td>
                <td width="110" v-if="info.length !== 2">{{item.ZZXTNO}}</td>
                <td width="110" v-if="info.length !== 2">{{item.EBELN}}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="t_r Remarks">
        <table> 
           <tr>
            <td width="120">总件数</td>
            <td>
               <input type="number" placeholder="总件数必须输入" v-model='ZNUMPAGE' style="width: 100px" disabled="disabled" >
            </td>
            <td width="160">表头备注</td>
            <td>
               <input type="text" placeholder="表头备注输入" v-model='ZREMARK'>
            </td>
          </tr>
        </table>
      </div>
    </div>
    <x-button :gradients="['#d93309', '#aa0000']" class="comfirm" @click.native="confirm">{{loadingbuttext}}</x-button>
  </div>
</template>

<script>
import $ from "jquery";
import { mapState } from "vuex";
import { JDSendLetterOfAdvice } from "@/api/getData";
import { XTable, Datetime, Group, XButton, Qrcode } from "vux";
export default {
  data() {
    return {
      value: '{"BarCodeType":"Deli","BillNO":"310000000016"} ',
      isAll: false,
      loadingbut:false,//审核提交加载中
	    loadingbuttext:'提交',
      startDate: "",
      endDate: "",
      visibility: false,
      visibility2: false,
      widths: 60,
      widths2: 60,
      ZREMARK:"",
      tableHead: [
        '物料编号',
        "物料名称",
        "尺码",
        "本次送货数量",
        "数量",
        "已送货数量",
        "欠数",
        "分配型体",
        "指令",
        "型体",
        "通知单号"
      ],
      tableHead2: ["尺码", "本次送货数量", "总数量", "已送货数量", "欠数", "分配型体", "库位"],
      form: {
        MES_HeadsString: [],
        MES_ItemsString: []
      }
    };
  },
  components: {
    XTable,
    Datetime,
    Group,
    XButton,
    Qrcode
  },
  computed: {
    ...mapState({
      info: state => state.mutaions.chooseItem,
      userInfo: state => state.user.userInfo,
      user: state => state.mutaions.suplierinfo
    })
  },
  mounted() {
    this.total();    
    this.widths = $(window).width() / 5;
    this.widths2 = $(window).width() + 100;
    this.$nextTick(() => {
      this.init();
    });
  },
  methods: {
    // 合计
    total() {
      let MENGE = 0, YK_NUM = 0, WK_NUM = 0, ZDELIQTY = 0,ZNUMPAGE = 0;
      //console.log(this.info)
      this.info.forEach((item) => {
        MENGE += parseFloat(item.MENGE)
        YK_NUM += parseFloat(item.YK_NUM)
        WK_NUM += parseFloat(item.WK_NUM)
        ZDELIQTY += parseFloat(item.ZDELIQTY)
        ZNUMPAGE += parseInt(item.ZREMARK)
      })
      ///WEMNG、W_WEMNG
      if(this.info.length > 0){
        if (this.info.length === 1) {
          this.info.push({SIZE1: '合计', ZDELIQTY: ZDELIQTY.toFixed(3), MENGE: MENGE.toFixed(3), YK_NUM: YK_NUM.toFixed(3), WK_NUM: WK_NUM.toFixed(3)})
        } else {
          this.info.push({MATNR: '合计', ZDELIQTY: ZDELIQTY.toFixed(3), MENGE: MENGE.toFixed(3), YK_NUM: YK_NUM.toFixed(3), WK_NUM: WK_NUM.toFixed(3)})
        }
        this.ZNUMPAGE = ZNUMPAGE;
      }
    },
    async confirm() {
      if(this.info.length <= 0){
        this.$vux.toast.text("无数据");
        return false;
      }
      //console.log(this.ZNUMPAGE);
      if(this.ZNUMPAGE === '' || this.ZNUMPAGE === undefined){
        this.$vux.toast.text("必须输入总件数");
        return false;
      }
      if (isNaN(parseInt(this.ZNUMPAGE))){
        this.$vux.toast.text("总件数必须为数值");
        return false;
      }
      if(parseInt(this.ZNUMPAGE) <= 0){
        this.$vux.toast.text("输入总件数不能小于0");
        return false;
      }
      if(this.loadingbut === true){
        this.$vux.toast.text("提交中...");
        return false;
      }
      this.form.MES_HeadsString = [];
      let headobj = {
            BUKRS: "1000",
            WERKS: "1000",
            LIFNR: "",
            ZAUDITOE: "",
            ZBILLER: "",
            ZBILLOPENID: "",
            ZREMARK: "",
            ZNUMPAGE: ""
          }

      headobj.ZBILLER = this.user.supplierInfo.FContact;
      headobj.ZBILLOPENID = this.userInfo;
      headobj.LIFNR = this.info[0].LIFNR;
      headobj.ZREMARK = this.ZREMARK;
      headobj.ZNUMPAGE = this.ZNUMPAGE;
      
      
      this.form.MES_ItemsString = [];
      let tableobj =  {
            EBELN: "",
            EBELP: "",
            ETENR: "",
            MATNR: "",
            VBELN: "",
            ZCOMMUNIT: "",
            ZDELIADDRESS: "",
            ZDELIQTY: "",
            ZZGCXT: "",
            ZXT: "",
            ZREMARK: ""
          }
      let arrBUKRS = [];
      let arrWERKS = [];
      let errorIdx = 0;
      this.info.forEach((item, index) => {
        if (index === this.info.length-1) return false;
        for (let obj in item) {
          //console.log(obj)
          if (obj === 'ZZXTNO') {
            tableobj.ZZGCXT = item[obj]
          } else if (obj === 'ZXT') {
            tableobj.ZXT = item[obj]
          } else if (obj === 'MEINS') {
            tableobj.ZCOMMUNIT = item[obj]
          }  else if (obj === 'ZQY') {
            tableobj.ZDELIADDRESS = item[obj]
          }  else if (obj === 'BUKRS') {
            headobj.BUKRS = item[obj];//注：BUKRS
            arrBUKRS.push(headobj.BUKRS);
            //console.log("1------arrBUKRS----------1");
            //console.log(arrBUKRS);
            //console.log("2------arrBUKRS----------2");
            if(arrBUKRS.indexOf(headobj.BUKRS)){
              this.$vux.toast.text("存在不同公司代码");
              console.log("存在不同公司代码");
              errorIdx = 1;
              break;
            }
          } else if (obj === 'WERKS') {
            headobj.WERKS = item[obj];//注：WERKS
            arrWERKS.push(headobj.WERKS);
            //console.log("1------arrWERKS----------1");
            //console.log(arrWERKS);
            //console.log("2------arrWERKS----------2");
            if(arrWERKS.indexOf(headobj.WERKS)){
              this.$vux.toast.text("存在不同工厂");
              console.log("存在不同工厂");
              errorIdx = 2;
              break;
            }
          } else {
            tableobj[obj] = item[obj]
          }
          
        }
        this.form.MES_ItemsString.push(tableobj);
        tableobj = Object.assign({}, {
            EBELN: "",
            EBELP: "",
            ETENR: "",
            MATNR: "",
            VBELN: "",
            ZCOMMUNIT: "",
            ZDELIADDRESS: "",
            ZDELIQTY: "",
            ZZGCXT: "",
            ZXT: "",
            ZREMARK: ""
          })
      })
     
      if(errorIdx === 1){
        this.$vux.toast.text("存在不同公司代码");
        return false;
      }
      if(errorIdx === 2){
        this.$vux.toast.text("存在不同工厂");
        return false;
      }
      // this.form.MES_HeadsString[0].LIFNR = this.info[0].LIFNR;
      // this.form.MES_ItemsString[0].EBELN = this.info[0].EBELN;
      // this.form.MES_ItemsString[0].EBELP = this.info[0].EBELP;
      // this.form.MES_ItemsString[0].ETENR = this.info[0].ETENR;
      // this.form.MES_ItemsString[0].MATNR = this.info[0].MATNR;
      // this.form.MES_ItemsString[0].VBELN = this.info[0].VBELN;
      // this.form.MES_ItemsString[0].ZDELIQTY = this.info[0].ZDELIQTY;
      // this.form.MES_ItemsString[0].ZZGCXT = this.info[0].ZZXTNO;
      // this.form.MES_ItemsString[0].ZCOMMUNIT = this.info[0].MEINS;
      // console.log(this.form.MES_HeadsString)
      this.form.MES_HeadsString.push(headobj);
      this.form.MES_HeadsString = JSON.stringify(this.form.MES_HeadsString);
      this.form.MES_ItemsString = JSON.stringify(this.form.MES_ItemsString);
      try {
        this.loadingbut = true;
        this.loadingbuttext = "提交中...";

        let res = await JDSendLetterOfAdvice(this.form);
        
        this.$store.commit("SET_CHOOSEITEM", []);
        this.info = [];
        //接口返回后
        console.log(res);

        let No = res.replace(/[^0-9]/ig,"");
        if(this.ZNUMPAGE === '' || this.ZNUMPAGE === undefined){
          this.loadingbut =  false;
          this.loadingbuttext = "提交";
        }
        else{
          this.$router.push({path: '/result' , query: { No: res.replace(/[^0-9]/ig,"")}});
        }
      } catch (error) {
        console.log(error);
        this.loadingbut =  false;
        this.loadingbuttext = "提交";
      }
    },
    vueTouch(e) {
      if (e.target.tagName !== "INPUT") {
        console.log(e);
      }
      // alert('0')
    },
    toInfo(e) {
      console.log(e);
      // this.$router.push({ path: "/warehousInfo" });
    },
    change() {},
    init() {
      var win = $(window),
        scrollAreaEl = $(".t_r_content"),
        leftFreezeEl = $(".t_l_freeze"),
        leftTableEl = leftFreezeEl.find("table"),
        rightTableEl = $(".t_r_t table");
      let _this = this;
      let tableHeight;
      //动态计算容器最大高度
      function adjustHeight() {
        var winHeight = win.height();
        if (_this.info.length === 1) {
          tableHeight = 40;
        } else {
          tableHeight = (_this.info.length < 10 ? _this.info.length : 10) * 40;
        }
        console.log(tableHeight);
        leftFreezeEl.height(tableHeight);
        scrollAreaEl.height(tableHeight);
      }

      adjustHeight();
      win.on("resize", adjustHeight);

      //设置iscroll
      var myScroll = new IScroll(".t_r_content", {
        scrollX: true,
        scrollY: true,
        probeType: 3
      });

      //阻止默认滚动
      scrollAreaEl.on("touchmove mousewheel", function(e) {
        e.preventDefault();
      });

      //固定上左表头的滚动
      myScroll.on("scroll", updatePosition);
      myScroll.on("scrollEnd", updatePosition);

      function updatePosition() {
        var a = this.y;
        var b = this.x;
        leftTableEl.css(
          "transform",
          "translate(0px, " + a + "px) translateZ(0px)"
        );
        rightTableEl.css(
          "transform",
          "translate(" + b + "px, 0px) translateZ(0px)"
        );
      }
    }
  }
};
</script>

<style lang="less" scoped>
@import "~@/assets/less/main.less";
// @import "../../../main.css";
.Remarks input {
  border: 1px solid #d8d6d6;
  height: 0.66666667rem;
  border-radius: 5px;
  padding-left: 0.26666667rem;
}
.comfirm {
  height: @rem*80;
  width: 96%;
  margin: 0 auto;
}
.btn-selected {
  background: #aa0000;
  color: white !important;
}
.select,
.selected {
  width: @rem*48;
  height: @rem*48;
  border-radius: 100%;
  border: 1px solid #c9c9c9;
  margin: 0 auto;
}
.selected {
  background: red;
}
.item-top {
  padding: @rem*20;
  background: white;
  border-bottom: 1px solid #f5f5f5;
  .item {
    display: flex;
    justify-content: space-between;
    color: #666;
  }
}
.data-table {
  background: white;
  font-size: @rem*22;
  margin-bottom: @rem*30;
}
.funcList {
  background: white;
  padding: @rem*20;
  ul {
    width: 100%;
    display: flex;
    align-items: center;
    li {
      flex: 1;
      .bisColor(#d93309, #aa0000);
      margin-right: @rem*10;
      color: white;
      height: @rem*64;
      text-align: center;
      line-height: @rem*64;
      border-radius: 4px;
    }
    li:nth-child(4) {
      margin-right: 0;
    }
  }
}
.searchBox {
  background: white;
  box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.1);
  padding: @rem*20;
  .title {
    font-size: @rem*28;
    height: @rem*60;
    line-height: @rem*60;
    color: #666;
  }
  .date {
    display: flex;
    align-items: center;
    span {
      width: @rem*50;
      text-align: center;
      font-size: @rem*28;
    }
    .choose {
      width: @rem*312;
      height: @rem*72;
      border-radius: 4px;
      border: solid 1px #e6e6e6;
      input {
        text-align: center;
        border-radius: 4px;
        height: 100%;
        width: 100%;
        border: none;
      }
    }
  }
  .number {
    height: @rem*72;
    border: solid 1px #e6e6e6;
    border-radius: 4px;
    input {
      padding-left: @rem*20;
      border-radius: 4px;
      width: 100%;
      height: 100%;
      border: 0;
    }
  }
  .searchButton {
    margin-top: @rem*25;
    text-align: center;
    font-size: @rem*36;
    color: white;
    line-height: @rem*80;
    height: @rem*80;
    width: 100%;
    border-radius: 4px;
    .bisColor(#d93309, #aa0000);
  }
}
</style>
