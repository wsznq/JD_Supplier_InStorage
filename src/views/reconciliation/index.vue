
<template>
  <div class="wrap" id="wrap">
    <search @click.native='show = true'></search>
    <div v-transfer-dom>
      <popup v-model="show" @on-hide="log('hide')" @on-show="log('show')" position='top'>
        <recon-search @close='close' @init='init'></recon-search>
      </popup>
    </div>
    <div class="data-table">
      <div class="t_r">
        <div class="t_r_t">
          <table :style='"width: " + widths'>
            <tbody>
              <tr>
                <th v-for="(item, key) in tableHead" :key="key" width='120'>{{item}}</th>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="t_r_content">
          <table :style='"width: " + widths'>
            <tbody>
              <tr v-for="(item, index) in billList" :key="index" v-tap="(e)=>vueTouch(e, index)">
                <td width='120'>{{item.MAKTX}}</td>
                <td width='120'>{{item.GROES}}</td>
                <td width='120'>{{item.NETPR}}</td>
                <td width='120'>{{item.MENGE}}</td>
                <td width='120'>{{item.NETPR}}</td>
                <td width='120'>{{item.BPRME}}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div class='Notes'><span>开票须知：</span>{{notes}}</div>
  </div>
</template>

<script>
import $ from "jquery";
import Search from '@/components/search.vue'
import reconSearch from './search.vue'
import { XTable, Datetime, Group, Popup, TransferDom } from "vux";
import { mapState } from 'vuex'
export default {
  data() {
    return {
      show: false,
      startDate: '',
      endDate: '',
      visibility: false,
      visibility2: false,
      widths: 100,
      tableHead: ["物料名称", "规格", "单位", "数量", "价格单位", '不含税金额']
    };
  },
  directives: {
    TransferDom
  },
  computed: {
    ...mapState({
      billList: state => state.mutaions.billList,
      notes: state => state.mutaions.notes
    })
  },
  components: {
    XTable,
    Datetime,
    Group,
    Search,
    reconSearch,
    Popup
  },
  mounted() {
    console.log('billList', this.billList)
    this.widths = this.tableHead.length * this.widths + "px";
    console.log($(window).width());
  },
  methods: {
    close() {
      this.show = false
    },
    log() {

    },
    vueTouch(e, index) {
      if (index > this.billList.length-3) return
      this.$router.push({path: '/reconciliationInfo', query: {index: index}})
    },
    change() {

    },
    init() {
      var win = $(window),
      scrollAreaEl = $(".t_r_content"),
      leftFreezeEl = $(".t_l_freeze"),
      leftTableEl = leftFreezeEl.find("table"),
      rightTableEl = $(".t_r_t table");
      let _this = this
      //动态计算容器最大高度
      function adjustHeight() {
        var winHeight = win.height(),
        tableHeight = (_this.billList.length < 10 ? _this.billList.length : 10) * 40;
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
.Notes{
  background: white;
  padding: @rem*20;
  font-size: @rem*26;
  .mt20;
  span{
    font-size: @rem*28;font-weight: 600;
  }
}
.searchBox {
  background: white;
  box-shadow: 0px 3px 6px 0px 
		rgba(0, 0, 0, 0.1);
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
    span{
      width: @rem*50;
      text-align: center;
      font-size: @rem*28;
    }
    .choose {
      width: @rem*312;
      height: @rem*72;
      border-radius: 4px;
      border: solid 1px #e6e6e6;
      input{
        text-align: center;
        border-radius: 4px;
        height: 100%;
        width: 100%;
        border: none;
      }
    }
  }
  .number{
      height: @rem*72;
      border: solid 1px #e6e6e6;
      border-radius: 4px;
      input{
        padding-left: @rem*20;
        border-radius: 4px;
        width: 100%;
        height: 100%;
        border: 0;
      }
    }
    .searchButton{
      margin-top: @rem*25;
      text-align: center;
      font-size: @rem*36;
      color:white;
      line-height: @rem*80;
      height:  @rem*80;
      width:  100%;
      border-radius: 4px;
      .bisColor(#d93309, #aa0000)
    }
}
</style>
