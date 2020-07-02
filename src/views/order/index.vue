
<template>
  <div class="wrap" id="wrap">
    <search @click.native="show = true"></search>
    <div v-transfer-dom>
      <popup v-model="show" @on-hide="log('hide')" @on-show="log('show')" position="top">
        <order-search @getOrderList="getOrderList" @close="close" @init="init"></order-search>
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
                v-for="(item, index) in orderList"
                :key="index"
                :id="index"
                class="tablerow"
              >
                <td width='120'>{{item.zqy}}</td>
                <td width='120'>{{item.ebeln}}</td>
                <td width='120'>{{item.ebelp}}</td>
                <td width='120'>{{item.etenr}}</td>
                <td width='120'>{{item.eindt_qr}}</td>
                <td width='120'>{{item.matnr}}</td>
                <td width='120'>{{item.maktx}}</td>
                <td width='120'>{{item.vbeln}}</td>
                <td width='120'>{{item.vbelp}}</td>
                <td width='120'>{{item.zzxtno}}</td>
                <td width='120'>{{item.zxt}}</td>
                <td width='120'>{{item.zunit}}</td>
                <td width='120'>{{item.menge}}</td>
                <td width='120'>{{item.zdeliqty}}</td>
                <td width='120'>{{item.ztempreqty}}</td>
                <td width='120'>{{item.zqualiqty}}</td>
                <td width='120' @click="vueTouch(item,index)">{{item.zunqualiqty}}</td>
                <td width='120'>{{item.zshortcqty}}</td>
                <td width='120'>{{item.zinstockqty}}</td>
                <td width='120'>{{item.zreturnsqty}}</td>
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
import { mapGetter, mapState } from "vuex";
export default {
  data() {
    return {
      show: false,
      BeginDate: "",
      EndDate: "",
      visibility: false,
      visibility2: false,
      widths: 120,
      tableHead: [
        "厂区",
        "采购订单号",
        "行项目",
        "计划行",
        "确认交期",
        "物料编码",
        "物料描述",
        "销售订单",
        "销售订单行项目",
        "型体",
        "分配型体",
        "单位",
        "订单数量",
        "送货数量",
        "已暂收数量",
        "合格数量",
        "不合格数量",
        "短码数量",
        "入库数量",
        "退货数量"
      ]
    };
  },
  computed: {
    ...mapState({
      orderList: state => state.mutaions.orderList
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
  },
  methods: {
    vueTouch(e, index) {
      console.log(e);
      console.log(index);
      this.$store.commit("SAVE_PROCHECKINFO", this.orderList[index]);
      this.$router.push({ path: "/productcheck" });
    },
    // 关闭搜索弹窗
    close() {
      this.show = false;
    },
    getOrderList(res) {
      this.orderList = res;
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
