
<style>
    .vux-cell-box:not(:first-child):before{ height: 0px !important; border-top: 0px !important;}
</style>

<template>
  <div class="wrap JDSearch" id="wrap">
     <datetime v-model="buYearMonth" @on-change="change"  :show.sync="visibility" style="display: none" format="YYYY-MM"></datetime>
     <div class="searchBox">
      <div class="title">期数</div>
      <div class="date">
        <div class="choose">
          <input placeholder="请选择期数" readonly v-model="buYearMonth" @click='visibility = true'>
        </div>
      </div>
     <!-- <div class="title">指令单号</div>
      <div class="number">
        <input type="number" placeholder="请输入指令单号">
      </div>  -->
      <div class="title">公司</div>
      <div class="number">
        <input type="text" placeholder="请选择公司" readonly @click='showPopupPicker3 = true' v-model='value7[0]'>
      </div>
      <div class="title">是否对账</div>
      <div class="number">
        <input type="text" placeholder="请选择是否对账" readonly @click='showPopupPicker = true' v-model='value5[0]'>
      </div>
      <div class="title">汇总类型</div>
      <div class="number">
        <input type="text" placeholder="请选择汇总类型" readonly @click='showPopupPicker2 = true' v-model='value6[0]'>
      </div>
      <popup-picker :show.sync="showPopupPicker3" :show-cell="false" title="TEST" :data="data4" v-model="value7" @on-change='change4'></popup-picker>
      <popup-picker :show.sync="showPopupPicker" :show-cell="false" title="TEST" :data="data2" v-model="value5" @on-change='change2'></popup-picker>
      <popup-picker :show.sync="showPopupPicker2" :show-cell="false" title="TEST" :data="data3" v-model="value6" @on-change='change3'></popup-picker>
      <!-- <popup-picker title="是否对账" :data="list1" v-model="value1" @on-show="onShow" @on-hide="onHide" @on-change="onChange"></popup-picker> -->
      <div class='searchButton' @click='searchFun'>搜索</div>
      <div class='searchButton' @click='searchFunExcel'>导出Excel</div>
    </div>
  </div>
</template>

<script>
import {  Datetime, PopupPicker } from "vux";
import { JDGetGetFactoryList, JDGetSTOCKACCOUNTList, JDGetSTOCKACCOUNTListExcel } from '@/api/getData'
import { mapState } from 'vuex'
const date = new Date
const dateToday = date.getFullYear() + '-' + ((date.getMonth() + 1) < 10 ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1) );
export default {
  data() {
    return {
      data2: [['已对账', '未对账']],
      data3: [['材料汇总', '委外加工汇总', '委外加工汇总按型体']],
      data4: [[]],
      value5: ['已对账'],
      value6: ['材料汇总'],
      value7: [],
      showPopupPicker: false,
      showPopupPicker2: false,
      showPopupPicker3: false,
      list1: '',
      value1: '',
      show: false,
      form: {
        BUDAT: '',
        I_LIFRE: '',
        I_BUKRS: '',
        I_SSDZ: ''
      },
      buYearMonth: this.getSSionStorage('buYearMonth') ? JSON.parse(this.getSSionStorage('buYearMonth')).split(',')[0] : dateToday,
      visibility: false,
      visibility2: false,
      widths: 100,
      tableHead: ["订单编号", "订单日期", "物料名称物料名称", "币别", "金额"],
      search: {
        SupplyNo: ''
      },
      factoryList: []
    };
  },
  computed: {
    ...mapState({
      suplierinfo: state => state.mutaions.suplierinfo.supplierInfo
    })
  },
  components: {
    Datetime,
    PopupPicker
  },
  mounted() {
    this.search.SupplyNo = this.suplierinfo.FNumber
    this.form.I_LIFRE = this.suplierinfo.FNumber
    //this.form.I_LIFRE = '100480';
    this.form.BUDAT = this.buYearMonth;
    this.widths = 6 * this.widths + "px";
    this.getFactory()
  },
  methods: {
    async searchFun() {
      this.$store.commit('SET_BILLPARANS', []);
      this.$store.commit('SET_BILLLIST', []);
      try {
        this.$store.commit("updateLoadingStatus", { isLoading: true });
        let res = await JDGetSTOCKACCOUNTList(this.form);
        this.$store.commit('SET_BILLPARANS', this.form);
        this.$store.commit('SET_BILLLIST', eval(res));
        this.$emit('init');
        this.recordSearch();
      } catch (error) {
      } finally {
        this.$emit('close')
        this.$store.commit("updateLoadingStatus", { isLoading: false });
      }
      
    },
    async searchFunExcel() {
      this.$store.commit('SET_BILLPARANS', []);
      this.$store.commit('SET_BILLLIST', []);
      try {
        console.log("导出");
        this.$store.commit("updateLoadingStatus", { isLoading: true });
        console.log(this.form);
        let res = await JDGetSTOCKACCOUNTListExcel(this.form);
        console.log("--开始--");
        //console.log(res);
        location.href = res;
        console.log("--结束--");
        this.$store.commit('SET_BILLPARANS', this.form);
        this.$store.commit('SET_BILLLIST', eval(res));
        this.$emit('init');
        this.recordSearch();
      } catch (error) {
      } finally {
        this.$emit('close')
        this.$store.commit("updateLoadingStatus", { isLoading: false });
      }
      console.log(this.form)
    },
    onShow() {

    },
    onHide() {

    },
    onChange() {

    },
    async getFactory() {
      try {
        let res = await JDGetGetFactoryList(this.search)
        this.factoryList = eval(res)
        this.factoryList.forEach((item) => {
          this.data4[0].push(item.FOrgName)
        })
        this.value7 = this.data4[0]
        this.change2(this.value5)
        this.change3(this.value6)
        this.change4(this.value7)
        this.searchFun()
      } catch (error) {
        console.log('error', error)
      }
    },
    log() {

    },
    popup() {
      alert('0')
    },
    recordSearch() {
      this.setSSionStorage('buYearMonth', `${this.buYearMonth}`)
    },
    change() {
      let reg = new RegExp("-", "g");
      this.form.BUDAT = this.buYearMonth.replace(reg, "");
    },
    // 是否对账
    change2(val) {
      this.value5 = val
      console.log(this.value5)
      this.data2[0].forEach((item) => {
        if (item === val[0] && val[0] === '已对账') {
          this.form.I_SSDZ = 'X'
        }
        if (item === val[0] && val[0] === '未对账') {
          this.form.I_SSDZ = ''
        }
      })
    },
    // 汇总类型
    change3(val) {
      this.value6 = val
      this.data3[0].forEach((item, index) => {
        if (item === val[0]) {
          this.form.ShowType = index
        }
      })
    },
    // 公司 
    change4(val){
      this.value7 = val
      this.form.I_BUKRS = this.factoryList.filter((item) => {
        return item.FOrgName === val[0]
      })[0].FOrgNumber
      // 保存 公司对应的开票须知
      this.$store.commit('SETNOTES', this.factoryList.filter((item) => {
        return item.FOrgName === val[0]
      })[0].FInvoiceNotes)
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
      height: @rem*62;
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
      height: @rem*62;
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
