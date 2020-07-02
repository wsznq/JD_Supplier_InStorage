
<template>
  <div class="wrap" id="wrap" style="padding-top: 2rem;">
    <search @click.native="show = true" style="position: fixed;width: 100%;background: #f5f5f5;height: 1.2rem;top:0;"></search>
    <div v-transfer-dom>
      <popup v-model="show" @on-hide="log('hide')" @on-show="log('show')" position="top">
        <rece-search @close="close" ref='search'></rece-search>
      </popup>
    </div>
    <!-- <group> -->
    <!-- <datetime v-model="startDate" @on-change="change" :show.sync="visibility" style="display: none"></datetime>
    <datetime v-model="endDate" @on-change="change" :show.sync="visibility2" style="display: none"></datetime>-->
    <!-- </group> -->
    <div class="funcList">
      <ul>
        <li @click="toDetail">生成送货单</li>
        <li @click='toList'>送货单列表</li>
        <!-- <li>查看退货</li> -->
        <!-- <li>送货单详情</li> -->
      </ul>
    </div>
    <div v-for="(item, index1) in deliveryList2" :key="index1" :style="index1===deliveryList2.length-1 ? 'margin-bottom: 60px': ''" class='delivery'>
      <div class="item-top">
        <div class="item">
          <div class="item-left">采购订单号：{{item.EBELN}}</div>
          <div class="item-right">确认交期：{{item.EINDT_QR}}</div>
        </div>
        <div class="item" style="margin-top: 8px">
          <div class="item-left">指<span class="spaces"></span>令： {{item.VBELN}}</div>
          <div class="item-right">型<span class="spaces2"></span>体：{{item.ZZXTNO}}</div>
        </div>
        <div class="item" style="margin-top: 8px">
          <div class="item-left">厂<span class="spaces"></span>区： {{item.ZQY}}</div>
          <div class="item-right">物料名称：{{item.MAKTX_YB}}</div>
        </div>
        <!-- <div class="item mt20">收料通知单号：sl000000001</div> -->
        <div class="Remarks">
          备注（件数）：
          <input v-model="item.ZREMARK" v-on:change="watchRemark(index1)" type="number">
        </div>
      </div>
      <div class="data-table">
        <div class="t_r">
          <!-- <div class="t_r_t">
            <table style="width: inherit">
              <tbody>
                <tr>
                  <th
                    v-for="(item, key) in tableHead"
                    :key="key"
                    :style="key==0 || key ===1 ? 'width:' +( widths) + 'px' : 'width:' + (widths + 10) + 'px'"
                    @click="allSelect(index1)"
                  >{{item}}</th>
                  <th style="width: 50px;" @click="allSelect(index1)">
                    <div class="select" v-if="!item.isAll"></div>
                    <icon
                      type="success"
                      v-else
                      style="color: #aa0000;font-size: 24px;margin: 0 auto"
                    ></icon>
                  </th>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="t_r_content" style="height: inherit">
            <table style="width: inherit">
              <tbody>
                <tr v-for="(item1, index) in item.ZCGSLTZD_ITEM" class="to">
                  <td v-tap="(e)=>vueTouch(e, index, index1)" style="width: 60px">{{item1.SIZE1}}</td>
                  <td v-tap="(e)=>vueTouch(e, index, index1)" style="width: 60px">{{item1.MENGE}}</td>
                  <td v-tap="(e)=>vueTouch(e, index, index1)" style="width: 60px">{{item1.YK_NUM}}</td>
                  <td v-tap="(e)=>vueTouch(e, index, index1)" style="width: 60px">{{item1.WK_NUM}}</td>
                  <td style="width: 70px">
                    <input
                      type="number"
                      style="width: 40px;background: white;"
                      v-on:change="watchValue(index, index1)"
                      id="blurInput"
                      class="tr-input"
                      v-model="item1.ZDELIQTY"
                      :disabled="index === item.ZCGSLTZD_ITEM.length-1"
                    >
                  </td>
                  <td style="width: 40px;" v-if="index != item.ZCGSLTZD_ITEM.length-1">
                    <icon
                      @click.native="vueTouch( row, index, index1)"
                      type="success"
                      style="color: #aa0000;font-size: 24px;"
                      v-if="item1.status"
                    ></icon>
                    <div @click="vueTouch( row, index, index1)" class="select" v-else></div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div> -->
          <div class='table-data'>
            <div class='selectwrap'>
              <div class='select-box' @click="allSelect(index1)">
                <div class="select" v-if="!item.isAll"></div>
                  <!-- <div class="selected" v-else></div> -->
                  <icon
                    type="success"
                    v-else
                    style="color: #aa0000;font-size: 24px;margin: 0 auto"
                  ></icon>
              </div>
              <div class='select-box' v-for="(item1, index) in item.ZCGSLTZD_ITEM" :key='index' v-if="index != item.ZCGSLTZD_ITEM.length-1">
                  <icon
                    @click.native="vueTouch( row, index, index1)"
                    type="success"
                    style="color: #aa0000;font-size: 24px;"
                    v-if="item1.status"
                  ></icon>
                  <div @click="vueTouch( row, index, index1)" class="select" v-else></div>
                </div>
            </div>
            <div class='new-table'>
              <div class='table-head' style="width: 600px">
                <div v-for="(item, key) in tableHead" :key="key" @click="allSelect(index1)" :style="key===0 ?'width: 60px':''">{{item}}</div>
              </div>
              <div class='table-body' style="width: 600px">
                <div v-for="(item1, index) in item.ZCGSLTZD_ITEM" :key='index' class='tableRow'>
                  <div v-tap="(e)=>vueTouch(e, index, index1, 1)" style="width: 60px;">{{item1.SIZE1}}</div>
                  <div v-tap="(e)=>vueTouch(e, index, index1, 1)" style="width: 100px;">{{item1.MENGE}}</div>
                  <div v-tap="(e)=>vueTouch(e, index, index1, 1)" style="width: 100px;">{{item1.YK_NUM}}</div>
                  <div v-tap="(e)=>vueTouch(e, index, index1, 1)" style="width: 100px;">{{item1.WK_NUM}}</div>
                  <div style="width: 100px;">{{item1.NO_EINME}}</div>
                  <div style="width: 100px;">
                    <input
                      type="number"
                      style="width: 40px;background: white;"
                      v-on:change="watchValue(index, index1)"
                      id="blurInput"
                      class="tr-input"
                      v-model="item1.ZDELIQTY"
                      :disabled="index === item.ZCGSLTZD_ITEM.length-1"
                    >
                  </div>
                  <!-- <div class='select-box' v-if="index != item.ZCGSLTZD_ITEM.length-1">
                    <icon
                      @click.native="vueTouch( row, index, index1)"
                      type="success"
                      style="color: #aa0000;font-size: 24px;"
                      v-if="item1.status"
                    ></icon>
                    <div @click="vueTouch( row, index, index1)" class="select" v-else></div>
                  </div> -->
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="btm-item">
      <div class="fixedItem">
        <div @click='getSearch("01")' :class='I_ZTYPE === "01" ? "btn-selected": ""'>代办事项</div>
        <div @click='getSearch("02")' :class='I_ZTYPE === "02" ? "btn-selected": ""'>已办事项</div>
        <div @click='getSearch("0")' :class='I_ZTYPE === "0" ? "btn-selected": ""'>全部</div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
import Search from "@/components/search.vue";
import receSearch from "./search.vue";
import { Datetime, Group, Icon, Popup, TransferDom, XInput } from "vux";
import { mapState } from "vuex";
export default {
  data() {
    return {
      I_ZTYPE: '01',
      row: { target: { cellIndex: 1 } },
      aa: "",
      show: false,
      isAll: false,
      startDate: "",
      endDate: "",
      visibility: false,
      visibility2: false,
      widths: 60,
      widths2: 60,
      tableHead: ["尺码", "数量", "已送货数量", "欠数", '不合格数量', "本次送货数量"],
      firstChoose: "",
      deliveryList2: [],
      liIndex: "", // 当前点击的是某条数据的数组下标
      index: ""
    };
  },
  directives: {
    TransferDom
  },
  computed: {
    ...mapState({
      deliveryList: state => state.user.delivery
    })
  },
  components: {
    Datetime,
    Group,
    Icon,
    Search,
    receSearch,
    Popup,
    XInput
  },
  mounted() {
    console.log(this.deliveryList);
    this.widths = $(window).width() / 5;
  },
  watch: {
    deliveryList(val) {
      // this.deliveryList2 = val
      this.deliveryList2 = JSON.parse(JSON.stringify(val));
      for (let i = 0; i < this.deliveryList2.length; i++) {
        console.log(this.deliveryList2);
        this.$set(this.deliveryList2[i], "ZREMARK", "");
        this.$set(this.deliveryList2[i], "isAll", false);
        var MENGE = 0;
        var YK_NUM = 0;
        var WK_NUM = 0;
        var ZDELIQTY = 0
        var NO_EINME = 0
        for (let j = 0; j < this.deliveryList2[i].ZCGSLTZD_ITEM.length; j++) {
          console.log(this.deliveryList2[i].ZCGSLTZD_ITEM[j]);
          this.$set(this.deliveryList2[i].ZCGSLTZD_ITEM[j], "status", false);
          this.$set(this.deliveryList2[i].ZCGSLTZD_ITEM[j], "ZDELIQTY", this.deliveryList2[i].ZCGSLTZD_ITEM[j].WK_NUM);
          // console.log(this.deliveryList2[i].ZCGSLTZD_ITEM[j].MENGE)
          MENGE += parseInt(this.deliveryList2[i].ZCGSLTZD_ITEM[j].MENGE);
          YK_NUM += parseInt(this.deliveryList2[i].ZCGSLTZD_ITEM[j].YK_NUM);
          WK_NUM += parseInt(this.deliveryList2[i].ZCGSLTZD_ITEM[j].WK_NUM);
          ZDELIQTY += parseInt(this.deliveryList2[i].ZCGSLTZD_ITEM[j].ZDELIQTY)
          NO_EINME += parseInt(this.deliveryList2[i].ZCGSLTZD_ITEM[j].NO_EINME)
        }
        this.deliveryList2[i].ZCGSLTZD_ITEM.push({
          SIZE1: "合计",
          MENGE: MENGE,
          YK_NUM: YK_NUM,
          WK_NUM: WK_NUM,
          ZDELIQTY: ZDELIQTY,
          NO_EINME: NO_EINME
        });
        console.log(MENGE);
      }
    }
    // 'deliveryList2': {
    //   handler(newName, oldName) {
    //     console.log(newName[this.index][this.liIndex])
    //   },
    //   // 代表在wacth里声明了firstName这个方法之后立即先去执行handler方法
    //   immediate: true
    // }
  },
  methods: {
    // 调用子组件的 搜索方法
    getSearch(value) {
      // I_ZTYPE = 
      this.I_ZTYPE = value
      this.$refs.search.getList(value)
    },
    toList() {
      this.$router.push({path: '/deliveryList'})
    },
    //点击 全选 状态 处理
    allSelect(index1) {
      // if (!this.firstChoose && this.firstChoose !== 0) {
      //   // 保存 第一个选中的 用于与后面选中的进行比较 是否满足 同一交期 同一厂区
      //   this.firstChoose = liIndex;
      // }
      this.$set(
        this.deliveryList2[index1],
        "isAll",
        !this.deliveryList2[index1].isAll
      );
      // for (let i = 0; i < this.deliveryList2.length; i++) {
        for (let j = 0; j < this.deliveryList2[index1].ZCGSLTZD_ITEM.length; j++) {
          if (this.deliveryList2[index1].isAll) {
            this.$set(this.deliveryList2[index1].ZCGSLTZD_ITEM[j], "status", true);
          } else {
            this.$set(this.deliveryList2[index1].ZCGSLTZD_ITEM[j], "status", false);
          }
        }
      // }
    },
    // 监听
    watchRemark(liIndex) {
      if (parseInt(this.deliveryList2[liIndex].ZREMARK) < 0) {
        this.$set(this.deliveryList2[liIndex], "ZREMARK", 1);
        this.$vux.toast.text("件数不得少于0件");
      }
    },
    // 计算当前输入的送货数量是否超过欠数
    watchValue(index, liIndex) {
      this.liIndex = liIndex;
      this.index = index;
      if (this.deliveryList2[liIndex].ZCGSLTZD_ITEM[index].ZDELIQTY < 0) {
        this.deliveryList2[liIndex].ZCGSLTZD_ITEM[index].ZDELIQTY = 0;
      }
      if (
        parseInt(this.deliveryList2[liIndex].ZCGSLTZD_ITEM[index].ZDELIQTY) >
        parseInt(this.deliveryList2[liIndex].ZCGSLTZD_ITEM[index].WK_NUM)
      ) {
        // 填写的送货数量大于 欠数
        this.$vux.toast.text("送货数量有误！");
        this.deliveryList2[liIndex].ZCGSLTZD_ITEM[index].ZDELIQTY;
        this.$set(
          this.deliveryList2[liIndex].ZCGSLTZD_ITEM[index],
          "status",
          false
        );
      }
      this.total(); // 计算本次送货数量合计
      console.log(this.deliveryList2[liIndex].ZCGSLTZD_ITEM[index].ZDELIQTY);
    },
    total() {
      for (let i = 0; i < this.deliveryList2.length; i++) {
        let ZDELIQTY = 0;
        let len = this.deliveryList2[i].ZCGSLTZD_ITEM.length;
        for (
          let j = 0;
          j < this.deliveryList2[i].ZCGSLTZD_ITEM.length - 1;
          j++
        ) {
          // 因为不包括合计部分的本次送货数量 因此要 -1
          console.log(this.deliveryList2[i].ZCGSLTZD_ITEM[j].ZDELIQTY);
          let num = !this.deliveryList2[i].ZCGSLTZD_ITEM[j].ZDELIQTY
            ? 0
            : this.deliveryList2[i].ZCGSLTZD_ITEM[j].ZDELIQTY;
          console.log("num", num);
          ZDELIQTY += parseInt(num);
        }
        console.log("ZDELIQTY", ZDELIQTY);
        this.$set(
          this.deliveryList2[i].ZCGSLTZD_ITEM[len - 1],
          "ZDELIQTY",
          ZDELIQTY
        );
      }
    },
    // 跳转 生成送货单页面
    toDetail() {
      let arr = [];
      this.deliveryList2.forEach((item, index) => {
        item.ZCGSLTZD_ITEM.forEach((item1, index1) => {
          if (item1.status && item1.SIZE1 !== "合计") {
            // 除了 合计行
            item1.MAKTX_YB = item.MAKTX_YB;
            item1.ZQY = item.ZQY;
            item1.ZREMARK = item.ZREMARK;
            item1.LIFNR = item.LIFNR;
            item1.BUKRS = item.BUKRS;
            item1.EBELN = item.EBELN;
            item1.ZZXTNO = item.ZZXTNO;
            item1.VBELN = item.VBELN;
            arr.push(item1);
          }
        });
      });
      console.log(arr);
      if (!arr.length) {
        this.$vux.toast.text("请选择送货单");
        return 
      }
      this.$store.commit("SET_CHOOSEITEM", arr);
      this.$router.push({ path: "/delivery" });
    },
    close() {
      this.show = false;
    },
    log() {},
    // 点击表格事件
    vueTouch(e, index, liIndex, value) {
      console.log(e)
      console.log(index)
      console.log(liIndex)
      // console.log(index, this.deliveryList2[liIndex].ZCGSLTZD_ITEM.length-1)
      if (index === this.deliveryList2[liIndex].ZCGSLTZD_ITEM.length-1)return
        let input = document.getElementById("blurInput");
        input.blur();
      if (!this.firstChoose && this.firstChoose !== 0) {
        // 保存 第一个选中的 用于与后面选中的进行比较 是否满足 同一交期 同一厂区
        this.firstChoose = liIndex;
      }
      if (e.target.cellIndex < 4 || e.target.tagName === "DIV") {
        //代表 点击了 尺码 数量 已收货数量 欠数
        if (!this.deliveryList2[liIndex].ZCGSLTZD_ITEM[index].status) {
          // 如果本身状态是false 说明他即将要变成选中的状态  因此要进行判断 是否满足 同一交期 同一厂区
          if (
            this.deliveryList2[liIndex].ZQY ===
              this.deliveryList2[this.firstChoose].ZQY
          ) {
            console.log(this.deliveryList2[liIndex].EINDT_QR);
            console.log(this.deliveryList2[this.firstChoose].EINDT_QR);
            if (!parseInt(this.deliveryList2[liIndex].ZCGSLTZD_ITEM[index].ZDELIQTY)) {
              this.$vux.toast.text("请填写正确数量1");
              return
            }
            if (
              parseInt(this.deliveryList2[liIndex].ZCGSLTZD_ITEM[index].ZDELIQTY) >
              parseInt(this.deliveryList2[liIndex].ZCGSLTZD_ITEM[index].WK_NUM)
            ) { // 只有 填写正确 的送货数量才可 选中
              this.$vux.toast.text("请填写正确数量2");
            } else {
              this.$set(
                this.deliveryList2[liIndex].ZCGSLTZD_ITEM[index],
                "status",
                !this.deliveryList2[liIndex].ZCGSLTZD_ITEM[index].status
              );
            }
          } else {
            this.$vux.toast.text("选择有误");
          }
        } else {
          this.$set(
            this.deliveryList2[liIndex].ZCGSLTZD_ITEM[index],
            "status",
            !this.deliveryList2[liIndex].ZCGSLTZD_ITEM[index].status
          );
        }
      }
      if (e.target.tagName === "I") {
        // 代表点击了 选择框
        // this.$router.push({ path: "/receivinfo" });
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
      //动态计算容器最大高度
      function adjustHeight() {
        var winHeight = win.height(),
          tableHeight = 10 * 40;
        // leftFreezeEl.height(tableHeight);
        // scrollAreaEl.height(tableHeight);
      }
      adjustHeight();
      win.on("resize", adjustHeight);
      //设置iscroll
      var myScroll = new IScroll(".t_r_content", {
        scrollX: true,
        scrollY: false,
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
.table-data{
  padding-right: 45px;
  .selectwrap{
    position: absolute;
    right: 0;
    .select-box{
      // z-index: 10;
      background: white;
      width: 45px;
      height: @rem*80;
      .v-flex;
    }
  }
  .new-table{
    overflow-x: scroll;
    // position: relative;
    -webkit-overflow-scrolling:touch;
    .table-head{
      display: flex;
      height: @rem*80;
      font-size: @rem*24;
      color: #aa0000;
      >div{
        font-weight: bolder;
        width: 100px;
        text-align: center;
        line-height: @rem*80;
      }
    }
    .table-body{
      .tr-input{
        height: 30px;
        width: 60px !important;
      }
      .tableRow{
        display: flex;
        text-align: center;
        color: #333;
        height: @rem*80;
        line-height: @rem*80;
      }
    }
  }
}
.delivery{
  margin-top: 15px;
}
.Remarks {
  display: flex;
  align-items: center;
  margin-top: 8px;
  color: #666;
  input {
    border: 1px solid #d8d6d6;
    height: @rem*50;
    border-radius: 5px;
    padding-left: @rem*20;
  }
}
a {
  color: white;
}
.spaces {
  display: inline-block;
  width: 3em;
}
.spaces2 {
  display: inline-block;
  width: 2em;
}
input[type="number"] {
  -webkit-appearance: none;
}
textarea {
  -webkit-appearance: none;
}
.tr-input {
  border: 1px solid #f5f5f5;
  border-radius: 4px;
  text-align: center;
}
.btm-item {
  z-index: 2000;
  position: fixed;
  bottom: 0;
  background: white;
  height: @rem*100;
  width: 100%;
  justify-content: center;
  display: flex;
  align-items: center;
  .fixedItem {
    width: 96%;
    height: @rem*64;
    justify-content: center;
    display: flex;
    align-items: center;
    border: 1px solid #aa0000;
    border-radius: 4px;
    div {
      height: 100%;
      flex: 1;
      border-right: 1px solid #aa0000;
      text-align: center;
      line-height: @rem*64;
      color: #aa0000;
    }
    div:nth-child(3) {
      border-right: 0;
    }
  }
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
    .item-left,
    .item-right {
      flex: 1;
    }
  }
}
.data-table {
  background: white;
  font-size: @rem*22;
  // margin-bottom: @rem*100;
}
.funcList {
  position: fixed;
  top: 1.2rem;
  width: 100%;
  background: white;
  padding: @rem*20;
  z-index: 9;
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
  z-index: 9;
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
