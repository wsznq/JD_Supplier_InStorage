
<template>
  <div class="wrap" id="wrap">
      <datetime v-model="startDate" @on-change="change"  :show.sync="visibility" style="display: none"></datetime>
      <datetime v-model="endDate" @on-change="change"  :show.sync="visibility2" style="display: none"></datetime>
    <div class="searchBox">
      <div class="title">交期</div>
      <div class="date">
        <div class="choose">
          <input readonly v-model="startDate" @click='visibility = true'>
        </div>
        <span>至</span>
        <div class="choose">
          <input readonly v-model='endDate' @click='visibility2 = true'>
        </div>
      </div>
      <!-- <div class="title">指令单号</div> -->
      <div class="number zhiling">
        <input type="number" placeholder="指令/型体">
      </div> 
      <!-- <div class="title">工厂型体</div> -->
      <div class="number zhiling">
        <input type="text" placeholder="供应商/单号">
      </div>
      <div class="number">
        <input type="text" placeholder="尺码">
      </div>
      <div class='searchButton'>搜索</div>
    </div>
  </div>
</template>

<script>
import {  Datetime } from "vux";
export default {
  data() {
    return {
      show: false,
      startDate: '',
      endDate: '',
      visibility: false,
      visibility2: false,
      widths: 100,
      tableHead: ["订单编号", "订单日期", "物料名称物料名称", "币别", "金额"]
    };
  },
  components: {
    Datetime,
  },
  mounted() {
    this.widths = 6 * this.widths + "px";
    console.log($(window).width());
  },
  methods: {
    log() {

    },
    popup() {
      alert('0')
    },
    change() {

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
