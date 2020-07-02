
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
        <div class="item-right">物料名称：{{info[0].MAKTX_YB}}</div>
      </div>
      <!-- <div class="item mt20">收料通知单号：{{info[0].EBELN}}</div>
      <div class="item mt20">物料名称：{{info[0].MAKTX_YB}}</div> -->
    </div>
    <div class="data-table">
      <div class="t_r">
        <div class="t_r_t">
          <table :style="info.length === 2 ? `width: ${widths2 + 80}px`: 'width: 1070px'">
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
                <th v-for="(item, key) in tableHead2" :key="key" width="80">{{item}}</th>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="t_r_content">
          <table :style="info.length === 2 ? `width: ${widths2 + 80}px `: 'width: 1070px'">
            <tbody v-tap="(e)=>vueTouch(e)">
              <tr v-for="(item, index) in info" :id="index" :key="index" class="to">
                <td width="110" v-if="info.length !== 2">{{item.MATNR}}</td>
                <td width="110" v-if="info.length !== 2">{{item.MAKTX_YB}}</td>
                <td width="110">{{item.SIZE1}}</td>
                <td width="110">{{item.MENGE}}</td>
                <td width="110">{{item.YK_NUM}}</td>
                <td width="110">{{item.WK_NUM}}</td>
                <td width="110" v-if = "index !== info.length-1">
                    <input
                        type="number"
                        style="width: 80px;background: white;"
                        id="blurInput"
                        class="tr-input"
                        v-model="item.ZDELIQTY"
                        :disabled="index === info.length-1"
                        v-on:change="watchValue(index)"
                        >
                </td>
                <td v-else>
                    {{item.ZDELIQTY}}
                </td>
                <td width="110">{{item.ZXT}}</td>
                <td width="110">{{item.ZLGORT}}{{item.LGOBE}}</td>
                <td width="110" v-if="info.length !== 2">{{item.VBELN}}</td>
                <td width="110" v-if="info.length !== 2">{{item.ZZXTNO}}</td>
                <td width="110" v-if="info.length !== 2">{{item.EBELN}}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="t_r Remarks">
          <table> 
            <tr>
              <td width="80">总件数</td>
              <td>
                <input type="number" placeholder="件数必须输入" v-model='ZNUMPAGE' disabled="disabled">
              </td>
              <td width="80">备 注</td>
              <td>
                <input type="text" placeholder="备注输入" v-model='ZREMARK'>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
    <x-button :gradients="['#d93309', '#aa0000']" class="comfirm" @click.native="confirm">提交</x-button>
  </div>
</template>

<script>
import $ from "jquery";
import { mapState } from "vuex";
import { JDGetDELIDetailForWX_Edit, JDSendLetterOfAdvice } from "@/api/getData";
import { XTable, Datetime, Group, XButton, Qrcode } from "vux";
export default {
  data() {
    return {
      bilno: this.$route.query.DeliNo,
      value: '{"BarCodeType":"Deli","BillNO":"310000000016"} ',
      isAll: false,
      startDate: "",
      endDate: "",
      visibility: false,
      visibility2: false,
      widths: 60,
      widths2: 60,
      ZNUMPAGE:"",
      ZREMARK:"",
      tableHead: [
        '物料编号',
        "物料名称",
        "尺码",
        "数量",
        "已送货数量",
        "欠数",
        "本次送货数量",
        "指令",
        "型体",
        "通知单号"
      ],
      tableHead2: ["尺码", "数量", "已送货数量", "欠数", "本次送货数量", "分配型体", "库位"],
      info:[],
      form: {
        MES_HeadsString: [
          {
            BUKRS: "1000",
            ZDELINO: "",
            LIFNR: "",
            ZAUDITOE: "",
            ZMODIFIER: "",
            ZMODIFYOPENID: "",
            ZREMARK: "",
            ZNUMPAGE: ""
          }
        ],
        MES_ItemsString: [
         
        ]
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
      userInfo: state => state.user.userInfo,
      user: state => state.mutaions.suplierinfo
    })
  },
  mounted() {
    this.getWXShow();
    this.widths = $(window).width() / 5;
    this.widths2 = $(window).width();
  },
  methods: {
    getWXShow() {
        // 获取详情
         try {
            JDGetDELIDetailForWX_Edit({DeliNO: this.$route.query.DeliNo,I_ZCALLER:'OUT'}).then((res) => {
                res.forEach((item, index) => {
                     this.info.push(item)
                     this.ZREMARK = item.ZREMARK;
                     this.ZNUMPAGE = item.ZNUMPAGE;
                })
                this.total();
                this.$nextTick(() => {
                    this.init();
                });
            })
        } catch (error) {
            this.$store.commit("updateLoadingStatus", { isLoading: false });
        } finally {
            this.$emit('close');
            this.$store.commit("updateLoadingStatus", { isLoading: false });
        }
        console.log(this.info);
    },
    // 计算当前输入的送货数量是否超过欠数
    watchValue(index) {
      let val = parseFloat(this.info[index].ZDELIQTY);//输入的送货数
      let qval = parseFloat(this.info[index].WK_NUM);//欠数

      if (val < 0) {
        this.info[index].ZDELIQTY = 0;
      }else if (val > qval) {
        // 填写的送货数量大于 欠数
        this.$vux.toast.text("送货数量超出");
        this.info[index].ZDELIQTY = qval;
        this.$set(this.info[index],"status",false);
      }
      // 重新计算本次送货数量合计
      let ZDELIQTY = 0;
      this.info.forEach((item, index2) => {
        //console.log("forEach" + item.ZDELIQTY);
        if(index2 !== this.info.length - 1)
        {
            ZDELIQTY += parseFloat(item.ZDELIQTY);
        }
      })
      this.info[this.info.length - 1].ZDELIQTY = ZDELIQTY;
    },
    // 合计
    total() {
      let MENGE = 0, YK_NUM = 0, WK_NUM = 0, ZDELIQTY = 0;
      //console.log(this.info)
      this.info.forEach((item) => {
        //console.log(item.ZDELIQTY);
        MENGE += parseFloat(item.MENGE)
        YK_NUM += parseFloat(item.YK_NUM)
        WK_NUM += parseFloat(item.WK_NUM)
        ZDELIQTY += parseFloat(item.ZDELIQTY)
      })
      ///WEMNG、W_WEMNG
      if (this.info.length === 1) {
        this.info.push({SIZE1: '合计', MENGE: MENGE, YK_NUM: YK_NUM, WK_NUM: WK_NUM, ZDELIQTY: ZDELIQTY})
      } else {
        this.info.push({MATNR: '合计', MENGE: MENGE, YK_NUM: YK_NUM, WK_NUM: WK_NUM, ZDELIQTY: ZDELIQTY})
      }
    },
    async confirm() {
      console.log("------11111")
      console.log(this.ZNUMPAGE);
      console.log("------222222")
      if(this.info.length <= 0){
        this.$vux.toast.text("无数据");
        return;
      }
      if(this.ZNUMPAGE === ""){
        this.$vux.toast.text("必须输入件数");
        return;
      }
      if(parseInt(this.ZNUMPAGE) < 0){
        this.$vux.toast.text("输入件数不能小于0");
        return;
      }
      this.form.MES_ItemsString = [];
      this.form.MES_HeadsString[0].ZDELINO = this.$route.query.DeliNo;
      this.form.MES_HeadsString[0].ZMODIFIER = this.user.supplierInfo.FContact;
      this.form.MES_HeadsString[0].ZMODIFYOPENID = this.userInfo;
      this.form.MES_HeadsString[0].BUKRS = "1000";
      this.form.MES_HeadsString[0].LIFNR = this.user.supplierInfo.FNumber;
      this.form.MES_HeadsString[0].ZREMARK = this.ZREMARK;
      this.form.MES_HeadsString[0].ZNUMPAGE = this.ZNUMPAGE;
      // for (let item in this.info[0]) 
      let tableobj =  {
            EBELN: "",
            EBELP: "",
            ETENR: "",
            MATNR: "",
            VBELN: "",
            ZDELIQTY: "",
            ZZGCXT: "",
            ZREMARK: ""
          }
      this.info.forEach((item, index) => {
        if (index === this.info.length-1) return
        for (let obj in item) {
          if (obj === 'ZZXTNO') {
            tableobj.ZZGCXT = item[obj]
          }  else {
            tableobj[obj] = item[obj]
          }
        }
        this.form.MES_ItemsString.push(tableobj)
        tableobj = Object.assign({}, {
            EBELN: "",
            EBELP: "",
            ETENR: "",
            MATNR: "",
            VBELN: "",
            ZDELIQTY: "",
            ZZGCXT: "",
            ZREMARK: ""
          })
      })
      //console.log(typeof(this.form.MES_HeadsString))
      this.form.MES_HeadsString = JSON.stringify(this.form.MES_HeadsString);
      this.form.MES_ItemsString = JSON.stringify(this.form.MES_ItemsString);
      console.log(this.form);
      try {
        let res = await JDSendLetterOfAdvice(this.form);
        console.log(res);
        this.form.MES_HeadsString = JSON.parse(this.form.MES_HeadsString);
        this.form.MES_ItemsString = JSON.parse(this.form.MES_ItemsString);
        this.$vux.toast.text(res);
        this.$router.push({path: '/result' , query: { No: res.replace(/[^0-9]/ig,"")}})
      } catch (error) {
        // alert(';90')
        console.log(error)
        this.form.MES_HeadsString = JSON.parse(this.form.MES_HeadsString);
        this.form.MES_ItemsString = JSON.parse(this.form.MES_ItemsString);
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
