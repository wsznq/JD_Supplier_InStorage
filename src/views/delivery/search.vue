
<template>
  <div class="wrap" id="wrap">
      <datetime v-model="form.BeginDate" @on-change="change"  :show.sync="visibility" style="display: none"></datetime>
      <datetime v-model="form.EndDate" @on-change="change"  :show.sync="visibility2" style="display: none"></datetime>
    <div class="searchBox">
      <div class="title">日期范围</div>
      <div class="date">
        <div class="choose">
          <input placeholder="请选择开始时间" readonly v-model="form.BeginDate" @click="visibility = true">
        </div>
        <span>至</span>
        <div class="choose">
          <input placeholder="请选择结束时间" readonly v-model="form.EndDate" @click="visibility2 = true">
        </div>
      </div>
      <!-- <div class="title">指令单号</div> -->
      <div class="number mt20">
        <input type="text" placeholder="指令输入" v-model='form.ScMONO'>
      </div>
      <!-- <div class="title">工厂型体</div> -->
      <div class="number mt20">
        <input type="text" placeholder="型体输入" v-model='form.ProductName'>
      </div>
      <div class="number mt20">
        <input type="text" placeholder="送货单输入" v-model='form.DeliNO'>
      </div>
      <div class="number mt20">
        <input type="text" placeholder="物料代码输入" v-model='form.MaterialNo'>
      </div>
      <div class="number mt20">
        <input type="text" placeholder="工厂代码输入" v-model='form.FactoryNo'>
      </div>
      <div class="searchButton" @click='getList'>搜索</div>
    </div>
  </div>
</template>

<script>
import { Datetime } from "vux";
import { JDGetDELIList } from '@/api/getData'
import { mapState } from 'vuex'
const date = new Date
const dateToday = date.getFullYear() + '-' + ((date.getMonth() + 1) < 10 ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1) )+ '-' + ((date.getDate() ) < 10 ? '0' + (date.getDate() ) : (date.getDate()) )
export default {
  data() {
    return {
      show: false,
      startDate: '',
      endDate: '',
      visibility: false,
      visibility2: false,
      widths: 100,
      tableHead: ["订单编号", "订单日期", "物料名称", "币别", "金额"],
      form: {
        BeginDate: this.getSSionStorage('delivery') ? JSON.parse(this.getSSionStorage('delivery')).split(',')[0] : dateToday,
        EndDate: this.getSSionStorage('delivery') ? JSON.parse(this.getSSionStorage('delivery')).split(',')[1] : dateToday,
        ProductName: '',
        ScMONO: '',
        SupplyNo: '',
        DeliNO: '',
        MaterialNo: '',
        FactoryNo: ''
      }
    };
  },
  computed: {
    ...mapState({
      supplierInfo: state => state.mutaions.suplierinfo
    })
  },
  components: {
    Datetime,
  },
  mounted() {
    this.form.SupplyNo = this.supplierInfo.supplierInfo.FNumber
    this.widths = 6 * this.widths + "px";
    this.getList()
  },
  methods: {
    async getList() {
      this.recordSearch()
      try{
        let res = await JDGetDELIList(this.form);
        console.log(res);
        this.$store.commit("SET_DELIVERY2", res);        
      }catch(err){
        this.$store.commit("SET_DELIVERY2", []); 
        console.log(err);
      }
      this.$nextTick(() => {
        this.$emit("init");
      });
      this.$emit('close')
    },
    recordSearch() {
      this.setSSionStorage('delivery', `${this.form.BeginDate},${this.form.EndDate}`)
    },
    log() {},
    popup() {},
    change() {}
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
