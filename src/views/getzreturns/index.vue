<template>
  <div class="wrap" id="wrap">
    <search @click.native="show = true"></search>
    <div v-transfer-dom>
      <popup v-model="show" @on-hide="log('hide')" @on-show="log('show')" position="top">
        <order-search @getOrderList="getOrderList" @close="close" @init2="init"></order-search>
      </popup>
    </div>
    <div class="data-table">
      <div class="t_r">
        <div class="t_r_t">
          <table style="width:1920px">
            <tbody>
              <tr>
                <th v-for="(item, key) in tableHead" :key="key" style="width: 120px;">{{item}}</th>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="t_r_content">
          <table style="width:1920px">
            <tbody>
              <tr
                v-for="(item, index) in checkList"
                v-tap="(e)=>vueTouch(e, index)"
                :key="index"
                :id="index"
                class="tablerow"
              >
                <td width='120'>{{item.BUKRS}}</td>
                <td width='120'>{{item.ZRETURNSNO}}</td>
                <td width='120'>{{item.ZCHECKBNO}}</td>
                <td width='120'>{{item.VBELN}}</td>
                <td width='120'>{{item.ZZGCXT}}</td>
                <td width='120'>{{item.MATNR}}</td>
                <td width='120'>{{item.MAKTX}}</td>
                <td width='120'>{{item.ZCOMMUNIT}}</td>
                <td width='120'>{{item.ZRETURNSQTY}}</td>
                <td width='120'>{{item.ZREMARK}}</td>
                <td width='120'>{{item.ZBILLER}}</td>
                <td width='120'>{{item.ZBILLDATE}}</td>
                <td width='120'>{{item.ZBILLTIME}}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Search from "@/components/search.vue";
import orderSearch from "./search.vue";
import $ from "jquery";
import { XTable, Datetime, Group, Popup, TransferDom } from "vux";
import { mapState } from "vuex";
import { setTimeout } from 'timers';
export default {
  data() {
    return {
      show: false,
      startDate: "",
      endDate: "",
      visibility: false,
      visibility2: false,
      widths: 120,
      tableHead: ["组织", "退货单号", "检验单号",  "生产单号", '型体', '物料编号', '物料描述','常用单位', '退货数量',  '备注', '制单人', '制单日期'
        , '制单时间']
      // orderList: []
    };
  },
  computed: {
    ...mapState({
      checkList: state => state.mutaions.checklist
    })
  },
  directives: {
    TransferDom
  },
  components: {
    XTable,
    Datetime,
    Group,
    Search,
    Popup,
    orderSearch
  },
  mounted() {
    console.log(this.$store);
    this.widths = this.tableHead.length * this.widths + "px";
    console.log($(window).width());
    var that = this
    setTimeout(function () {
      console.log(that.checkList)
    }, 3000)
    // console.log(this.checkList)
    // this.$nextTick(() => {
    //   // alert('0')
    //   this.init();
    // });
  },
  methods: {
    vueTouch(e, index) {
      console.log(index);
      // this.$store.commit("SAVE_ORDERINFO", this.orderList[index]);
      // this.$router.push({ path: "/orderInfo" });
      // console.log(e)
      // if (e.target.tagName !== "INPUT") {
      //   console.log(e);
      // }
    },
    // 关闭搜索弹窗
    close() {
      this.show = false;
    },
    getOrderList(res) {
      this.orderList = res;
      console.log(res);
    },
    log() {},
    popup() {
      alert("0");
    },
    toInfo() {
      this.$router.push({ path: "/orderInfo" });
    },
    change() {},
    init() {
      // alert('0')
      var win = $(window),
        scrollAreaEl = $(".t_r_content"),
        leftFreezeEl = $(".t_l_freeze"),
        leftTableEl = leftFreezeEl.find("table"),
        rightTableEl = $(".t_r_t table");

      //动态计算容器最大高度
      function adjustHeight() {
        var winHeight = win.height(),
          tableHeight = winHeight - 90;
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
@import "../../../main.css";
.tablerow {
  td {
    width: 120px !important;
    white-space: pre-wrap;
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
