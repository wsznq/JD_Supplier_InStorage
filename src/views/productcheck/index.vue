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
          <table style="width:2400px">
            <tbody>
              <tr>
                <th v-for="(item, key) in tableHead" :key="key" :id="'tableHead' + key" :style="item === '组织' || item === '采购类型' || item === '尺码' || item === '常用单位' || item === '制单人' ? 'width: 50px !important;' : 'width: 120px !important'">{{item}}</th>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="t_r_content">
          <table style="width:2400px">
            <tbody>
              <tr
                v-for="(item, index) in checkList"
                v-tap="(e)=>vueTouch(e, index)"
                :key="index"
                :id="index"
                class="tablerow"
              >
                <td style="width: 50px !important;">{{item.BUKRS}}</td>
                <td width='120'>{{item.WERKS}}</td>
                <td width='120'>{{item.ZCHECKBNO}}</td>
                <td width='120'>{{item.EBELN}}</td>
                <td width='120'>{{item.EBELP}}</td>
                <td width='120'>{{item.ETENR}}</td>
                <td style="width: 50px !important;">{{item.BSART}}</td>
                <td width='120'>{{item.VBELN}}</td>
                <td width='120'>{{item.ZZGCXT}}</td>
                <td width='120'>{{item.ZXT}}</td>
                <td width='120'>{{item.MATNR}}</td>
                <td style="width: 50px !important;">{{item.SIZE1}}</td>
                <td style="width: 50px !important;">{{item.ZCOMMUNIT}}</td>
                <td width='120'>{{item.ZCHECKQTY}}</td>
                <td width='120'>{{item.ZSCALEQTY}}</td>
                <td width='120'>{{item.ZQUALIQTY}}</td>
                <td width='120'>{{item.ZUNQUALIQTY}}</td>
                <td width='120'>{{item.ZSHORTCQTY}}</td>
                <td style="width: 120px !important;">{{item.ZUNQUALITEXT}}</td>
                <td style="width: 120px !important;word-break:break-all;">{{item.ZREMARK}}</td>
                <td style="width: 50px !important;">{{item.ZBILLER}}</td>
                <td width='120'>{{item.ZBILLDATE}} {{item.ZBILLTIME}}</td>
                <td width='120'>{{item.ZDELIADDRESS}}</td>
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
      tableHead: ["组织", "工厂", "检验单号", "采购订单","采购行项目","采购计划行","采购类型", "生产单号", '型体', '分配型体','物料代码', '尺码','常用单位', '检验数量', '抽检数量', '合格数量', '不合格数量','短码数量', '不合格原因', '备注', '制单人', '制单日期'
        , '送货地点']
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
  },
  methods: {
    vueTouch(e, index) {
      console.log(index);
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
