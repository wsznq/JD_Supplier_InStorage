
<template>
  <div class="wrap" id="wrap">
     <search @click.native='show = true'></search>
    <div v-transfer-dom>
      <popup v-model="show" @on-hide="log('hide')" @on-show="log('show')" position='top'>
        <info-search></info-search>
      </popup>
    </div>
    <!-- <group> -->
      <!-- <datetime v-model="startDate" @on-change="change"  :show.sync="visibility" style="display: none"></datetime>
      <datetime v-model="endDate" @on-change="change"  :show.sync="visibility2" style="display: none"></datetime> -->
    <!-- </group> -->
    <div class="data-table">
      <div class="t_l">
        <!-- <table>
            <tbody>
                <tr>
                    <th>品类</th>
                </tr>
            </tbody>
        </table>-->
        <!-- <div class="t_l_freeze">
            <table>
                <tr>
                    <td>品类</td>
                </tr>
                <tr>
                    <td>男鞋</td>
                </tr>
                <tr>
                    <td>男鞋</td>
                </tr>
                <tr>
                    <td>男鞋</td>
                </tr>
                <tr>
                    <td>男鞋</td>
                </tr>
                <tr>
                    <td>男鞋</td>
                </tr>
                <tr>
                    <td>男鞋</td>
                </tr>
                <tr>
                    <td>男鞋</td>
                </tr>
                <tr>
                    <td>男鞋</td>
                </tr>
                <tr>
                    <td>男鞋</td>
                </tr>
                <tr>
                    <td>男鞋</td>
                </tr>
                <tr>
                    <td>男鞋</td>
                </tr>
                <tr>
                    <td>男鞋</td>
                </tr>
                <tr>
                    <td>男鞋</td>
                </tr>
                <tr>
                    <td>男鞋</td>
                </tr>
                <tr>
                    <td>男鞋</td>
                </tr>
                <tr>
                    <td>男鞋</td>
                </tr>
            </table>
        </div>-->
      </div>
      <div class="t_r">
        <div class="t_r_t">
          <table :style="!isChange ? 'width:' + widths : ''">
            <tbody>
              <tr>
                <th v-for="(item, key) in tableHead" :key="key">{{item}}</th>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="t_r_content">
          <table :style="!isChange ? 'width:' + widths : ''">
            <tbody>
              <tr v-for="(item, index) in 30" :key="index" @click='toInfo'>
                <td>4500049833</td>
                <td>2019-4-9</td>
                <td>中底XD9089-2X</td>
                <td>人民币</td>
                <td>3799</td>
                <td>人民币</td>
                <td>3799</td>
                <td>3799</td>
                <td>3799</td>
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
import Search from '@/components/search.vue'
import infoSearch from './search2.vue'
import { XTable, Datetime, Group, Popup, TransferDom } from "vux";
export default {
  data() {
    return {
      show: false,
      isChange: false,
      startDate: '',
      endDate: '',
      visibility: false,
      visibility2: false,
      widths: 100,
      tableHead: ["无聊名称", "规格", "单位", "数量", "价格单位", '不含税金额', '折扣', '折后不含税金额', '折后不含税金额']
    };
  },
  directives:{
    TransferDom
  },
  components: {
    XTable,
    Datetime,
    Group,
    Popup,
    Search,
    infoSearch
  },
//   beforeMount() {
// 　　window.addEventListener('orientationchange', () => {
// 　　　　this.change()
// 　　})
// },
  mounted() {
    this.widths = 850 + "px";
    console.log($(window).width());
    this.$nextTick(() => {
      this.init();           
    });
    // window.addEventListener("onorientationchange" in window ? "orientationchange" : "resize", this.change, false);
  },
  methods: {
    log() {

    },
    toInfo() {
      this.$router.push({path: '/orderInfo'})
    },
    change() {
      // alert('9')
      if (this.widths === '850px') {
        this.isChange = true
      } else {
        this.isChange = false
        this.widths = '850px'
      }
    },
    init() {
      var win = $(window),
        scrollAreaEl = $(".t_r_content"),
        leftFreezeEl = $(".t_l_freeze"),
        leftTableEl = leftFreezeEl.find("table"),
        rightTableEl = $(".t_r_t table");

      //动态计算容器最大高度
      function adjustHeight() {
        var winHeight = win.height(),
          tableHeight = 10 * 40;
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
.searchBox {
  background: white;
  box-shadow: 0px 3px 6px 0px 
		rgba(0, 0, 0, 0.1);
  padding: @rem*20;
  display: flex;
  flex-wrap: wrap;
  .title {
    .mt20;
    font-size: @rem*28;
    height: 36px;
    line-height: 36px;
    color: #666;
    margin-right:@rem*10;
  }
  .date {
    margin-right: 10px;
    .mt20;
    display: flex;
    align-items: center;
    span{
      width: 25px;
      text-align: center;
      font-size: @rem*25;
    }
    .choose {
      font-size: 12px;
      width: 80px;
      height: 36px;
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
  .zhiling{
    width:160px;
    margin-right: @rem*10;
  }
  .number{
    .mt20;
      height: 36px;
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
      // margin-top: @rem*25;
      .mt20;
      margin-left: 10px;
      text-align: center;
      font-size: 18px;
      color:white;
      line-height: 36px;
      height:  36px;
      width:  80px;
      border-radius: 4px;
      .bisColor(#d93309, #aa0000)
    }
}
</style>
