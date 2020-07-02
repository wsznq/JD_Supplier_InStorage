
<template>
  <div class="wrap" id="wrap">
    <search @click.native="show = true"></search>
    <div v-transfer-dom>
      <popup v-model="show" @on-hide="log('hide')" @on-show="log('show')" position="top">
        <warehous-search @close="close" @init="init"></warehous-search>
      </popup>
    </div>
    <div class="data-table">
      <div class="t_r">
        <div class="t_r_t">
          <table style="width:1000px">
            <tbody>
              <tr>
                <th v-for="(item, key) in tableHead" :key="key" :style="item === '行项目' || item ==='币别' || item ==='尺码' || item ==='单位' ? 'width: 50px !important;' : 'width: 120px !important'">{{item}}</th>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="t_r_content">
          <table style="width:1000px">
            <tbody>
              <tr
                v-for="(item, index) in warehousList"
                :id="index"
                :key="index"
                class="to tablerow"
              >
                <td width='120'>{{item.budat}}</td>
                <td width='120'>{{item.mblnr}}</td>
                <td style="width: 50px !important;">{{item.zeile}}</td>
                <td width='120'>{{item.lgobe}}</td>
                <td style="width: 50px !important;">{{item.zcurr}}</td>
                <td width='120'>{{item.zxt}}</td>
                <td width='120'>{{item.matnr}}</td>
                <td width='120'>{{item.zmaktx}}</td>
                <td style="width: 50px !important;">{{item.size1}}</td>
                <td style="width: 50px !important;">{{item.meins}}</td>
                <td width='120'>{{item.menge}}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
import { Datetime, Group, Popup, TransferDom } from "vux";
import { mapState } from "vuex";
import Search from "@/components/search.vue";
import warehousSearch from "./search.vue";
export default {
  data() {
    return {
      show: false,
      startDate: "",
      endDate: "",
      visibility: false,
      visibility2: false,
      widths: 120,
      tableHead: ["单据日期", "入库单号", "行项目", "仓库", "币别", "分配型体", "物料编码", "物料名称", "尺码", "单位", "数量"],
      aa: []
    };
  },
  computed: {
    ...mapState({
      warehousList: state => state.mutaions.warehousList
    })
  },
  directives: {
    TransferDom
  },
  components: {
    Datetime,
    Group,
    Popup,
    Search,
    warehousSearch
  },
  mounted() {
    this.aa = this.warehousList
    console.log(this.warehousList)
    var obj = $(".to");
    //点击事件没有用
    obj.click(function(e) {
      alert("asda");
      console.log($(this).text());
    });
    this.widths = 5 * this.widths + "px";
    console.log($(window).width());
    // this.$nextTick(() => {
    //   this.init();
    // });
  },
  methods: {
    vueTouch(e, index) {
      console.log(index);
      this.$store.commit("SAVE_WAREHOUINFO", this.warehousList[index]);
      this.$router.push({ path: "/warehousInfo" });
    },
    close() {
      this.show = false;
    },
    log() {},
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
.data-table {
  font-size: @rem*22;
  background: white;
}
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
