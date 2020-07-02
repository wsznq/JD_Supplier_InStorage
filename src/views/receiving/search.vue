
<template>
  <div class="wrap" id="wrap">
      <datetime v-model="startDate" @on-change="change"  :show.sync="visibility" style="display: none"></datetime>
      <datetime v-model="endDate" @on-change="change"  :show.sync="visibility2" style="display: none"></datetime>
    <div class="searchBox">
      <div class="title">交货日期范围</div>
      <div class="date">
        <div class="choose">
          <input placeholder="请选择开始时间" readonly v-model="startDate" @click="visibility = true">
        </div>
        <span>至</span>
        <div class="choose">
          <input placeholder="请选择结束时间" readonly v-model="endDate" @click="visibility2 = true">
        </div>
      </div>
      <div class="title" style="margin-top: 5px">指令单号</div>
      <div class="number">
        <input type="text" placeholder="指令输入" v-model='form.I_VBELN'>
      </div>
      <!-- <div class="title" style="margin-top: 5px">工厂型体</div>
      <div class="number">
        <input type="text" placeholder="型体输入" v-model='form.I_ZZGCXT'>
      </div>
      <div class="title" style="margin-top: 5px">尺码</div>
      <div class="number">
        <input type="text" placeholder="尺码输入" v-model='form.I_SIZE1'>
      </div> -->
      <div class="title" style="margin-top: 5px">采购单号</div>
      <div class="number">
        <input type="text" placeholder="采购单号输入" v-model='form.I_EBELN'>
      </div>
      <div class="title" style="margin-top: 5px">物料代码</div>
      <div class="number">
        <input type="text" placeholder="物料代码输入" v-model='form.I_MATNR'>
      </div>
      <div class="title" style="margin-top: 5px">送货地点</div>
      <div class="number">
        <input type="text" placeholder="送货地点输入" v-model='form.I_ZQY'>
      </div>
      <div class="title" style="margin-top: 5px">工厂代码</div>
      <div class="number">
        <input type="text" placeholder="工厂代码输入" v-model='form.I_WERKS'>
      </div>
      <div class="title" style="margin-top: 5px">展示方式</div>
      <div class="number">
        <popup-picker :popup-style="{'z-index': '999'}" :data="sorter_list" v-model="sorterType" @on-change="changeSorter" placeholder="请选择展示方式" style="width: 99%;align-items:center;line-height:30px;"></popup-picker>
      </div>
      <div class="searchButton" @click='getList()'>搜索</div>
    </div>
  </div>
</template>

<script>
import {  PopupPicker, Datetime } from "vux";
import { mapState } from 'vuex'
import { JDGetZCGSLTZD } from '@/api/getData'
//const date = new Date
//const dateTodayNow = date.getFullYear() + '-' + ((date.getMonth() + 1) < 10 ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1) )+ '-' + (date.getDate())
const ddt = new Date() 
ddt.setDate(ddt.getDate() + 3);//获取AddDayCount天后的日期

const ddf = new Date() 
ddf.setMonth(ddf.getMonth());//获取AddMonthCount前1个月

if(ddf.getMonth() === 0){
  ddf.setMonth(ddf.getMonth() + 1);
}

const dateTodayF = ddf.getFullYear() + '-' + ((ddf.getMonth() ) < 10 ? '0' + (ddf.getMonth() ) : (ddf.getMonth()) ) + '-' + ((ddf.getDate() ) < 10 ? '0' + (ddf.getDate() ) : (ddf.getDate()) )
const dateTodayT = ddt.getFullYear() + '-' + ((ddt.getMonth() + 1) < 10 ? '0' + (ddt.getMonth() + 1) : (ddt.getMonth() + 1) ) + '-' + ((ddt.getDate() ) < 10 ? '0' + (ddt.getDate() ) : (ddt.getDate()) )

const lv_sorter = '采购订单';
export default {
  data() {
    return {
      show: false,
      form: {
        I_DATEF: '20190325',
        I_DATET: '20190513',
        I_ZZGCXT: '', // 型体
        I_VBELN: '',
        I_LIFNR: '',
        I_SIZE1: '',
        I_ZTYPE: '01',
        I_EBELN: '',
        I_MATNR: '',
        I_ZQY: '',
        I_WERKS: '',
        I_SORT: '采购订单'
      },
      sorter:lv_sorter,
      sorterType:[this.getSSionStorage('sorter')? this.getSSionStorage('sorter').replace(/\"/g, ""):lv_sorter],
      sorter_list:[
        ['采购订单', '物料代码', '物料综合']
      ],
      startDate: this.getSSionStorage('receiving') ? JSON.parse(this.getSSionStorage('receiving')).split(',')[0] : dateTodayF,
      endDate:this.getSSionStorage('receiving') ? JSON.parse(this.getSSionStorage('receiving')).split(',')[1] : dateTodayT,
      visibility: false,
      visibility2: false,
      widths: 100,
      tableHead: ["订单编号", "订单日期", "物料名称", "币别", "金额"],
      infos: '',
    };
  },
  computed: {
    ...mapState({
      supplierInfo: state => state.mutaions.suplierinfo
    })
  },
  components: {
    Datetime,
    PopupPicker
  },
  mounted() {
    //console.log(dateTodayF);
    //console.log(dateTodayT);
    this.change()
    this.form.I_LIFNR = this.supplierInfo.supplierInfo.FNumber;
    //this.form.I_LIFNR = '300290';
    this.form.I_SORT = this.getSSionStorage('sorter')? this.getSSionStorage('sorter').replace(/\"/g, ""):lv_sorter;
    this.getList()
    this.widths = 6 * this.widths + "px";  
   
  },
  methods: {
    async getList(value) {
      this.$store.commit('SET_DELIVERY', [])
      if(value) {
        this.form.I_ZTYPE = value
      }
      this.recordSearch()
      try {
        this.$store.commit("updateLoadingStatus", { isLoading: true });
        let res = await JDGetZCGSLTZD(this.form)
        this.$store.commit('SET_DELIVERY', res)
      } catch (error) {
        
      } finally {
         this.$emit('close') 
         this.$store.commit("updateLoadingStatus", { isLoading: false });
      }
    },
    recordSearch() {
      this.setSSionStorage('receiving', `${this.startDate},${this.endDate}`)
    },
    log() {

    },
    popup() {
      alert('0')
    },
    change() {
      let reg = new RegExp("-", "g");
      this.form.I_DATEF = this.startDate.replace(reg, "");
      this.form.I_DATET = this.endDate.replace(reg, "");
    },
    changeSorter(val) {
      this.setSSionStorage('sorter', `${val[0]}`);
      this.form.I_SORT = val[0];
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
