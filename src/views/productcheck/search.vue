
<template>
  <div class="wrap" id="wrap">
    <datetime v-model="startDate" @on-change="form.I_DATEF = startDate" :show.sync="visibility" style="display: none"></datetime>
    <datetime v-model="endDate" @on-change="form.I_DATET = endDate" :show.sync="visibility2" style="display: none"></datetime>
    <div class="searchBox">
      <div class="title">日期范围</div>
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
        <input type="number" placeholder="请输入指令单号" v-model='form.I_VBELN'>
      </div>
      <div class="title" style="margin-top: 5px">型体</div>
      <div class="number">
        <input type="text" placeholder="请输入型体" v-model='form.I_ZZGCXT'>
      </div>
      <div class="title" style="margin-top: 5px">物料代码</div>
      <div class="number">
        <input type="text" placeholder="请输入物料代码" v-model='form.I_MATNR'>
      </div>
      <div class="title" style="margin-top: 5px">品检单号</div>
      <div class="number">
        <input type="text" placeholder="请输入品检单号" v-model='form.I_ZCHECKBNO'>
      </div>
      <div class="title" style="margin-top: 5px">暂收单号</div>
      <div class="number">
        <input type="text" placeholder="请输入暂收单号" v-model='form.I_ZTEMPRENO'>
      </div>
      <div class="title" style="margin-top: 5px">工厂代码</div>
      <div class="number">
        <input type="text" placeholder="请输入工厂代码" v-model='form.I_WERKS'>
      </div>
      <div class="title" style="margin-top: 5px">展示方式</div>
      <div class="number">
        <popup-picker :popup-style="{'z-index': '999'}" :data="sorter_list" v-model="sorterType" @on-change="changeSorter" placeholder="请选择展示方式" style="width: 99%;align-items:center;line-height:30px;"></popup-picker>
      </div>
      <div class="searchButton" @click='search'>搜索</div>
    </div>
  </div>
</template>

<script>
import { PopupPicker,Datetime } from "vux";
import { mapState } from 'vuex'
import { JDGetZCHECKB } from "@/api/getData";
const date = new Date
const dateToday = date.getFullYear() + '-' + ((date.getMonth() + 1) < 10 ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1) )+ '-' + ((date.getDate() ) < 10 ? '0' + (date.getDate() ) : (date.getDate()) )
const lv_sorter = '不合格数量';
export default {
  data() {
    return {
      show: false,
      startDate: this.getSSionStorage('productcheck') ? JSON.parse(this.getSSionStorage('productcheck')).split(',')[0] : dateToday,
      endDate: this.getSSionStorage('productcheck') ? JSON.parse(this.getSSionStorage('productcheck')).split(',')[1] : dateToday,
      form: {
        I_DATEF: dateToday,
        I_DATET: dateToday,
        I_ZZGCXT: "", // 型体
        I_VBELN: "",
        I_MATNR: "", // 物料代码
        I_LIFNR: "",
        I_ZCHECKBNO:"",
        I_ZTEMPRENO: "",
        I_ZTYPE:"",
        I_ZBILLER:"",
        I_EBELN:"",
        I_EBELP:"",
        I_ETENR:"",
        I_ZDELIADDRESS:"",
        I_ZBILLDATE_TEMPRE:"",
        I_ZCALLER:"OUT",
        I_ROLEPER:"",
        I_WERKS:""
      },
      sorter:lv_sorter,
      sorterType:[this.getSSionStorage('check_sorter')? this.getSSionStorage('check_sorter').replace(/\"/g, ""):lv_sorter],
      sorter_list:[
        ['不合格数量', '合格数量', '全部']
      ],
      visibility: false,
      visibility2: false,
      widths: 100,
      tableHead: ["订单编号", "订单日期", "物料名称物料名称", "币别", "金额"]
    };
  },
  computed: {
    ...mapState({
      supplierInfo: state => state.mutaions.suplierinfo,
      procheckinfo: state => state.mutaions.procheckinfo
    })
  },
  components: {
    Datetime,
    PopupPicker
  },
  mounted() {
    if (this.getSSionStorage('productcheck')) {
      this.form.I_DATEF = JSON.parse(this.getSSionStorage('productcheck')).split(',')[0]
      this.form.I_DATET = JSON.parse(this.getSSionStorage('productcheck')).split(',')[1]
    }
    this.form.I_LIFNR = this.supplierInfo.supplierInfo.FNumber
    let iZtype = this.getSSionStorage('check_sorter')? this.getSSionStorage('check_sorter').replace(/\"/g, ""):lv_sorter;
    if(iZtype === '不合格数量'){
      this.form.I_ZTYPE = '01';
    }
    else if(iZtype === '合格数量'){
      this.form.I_ZTYPE = '02';
    }
    else{
      this.form.I_ZTYPE = '';
    }
    this.widths = 6 * this.widths + "px";
    if(this.procheckinfo != undefined && this.procheckinfo != ''){
      this.form.I_DATEF = '';
      this.form.I_DATET = '';
      this.form.I_EBELN = this.procheckinfo.ebeln;
      this.form.I_EBELP = this.procheckinfo.ebelp;
      this.form.I_ETENR = this.procheckinfo.etenr;
      this.form.I_ZTYPE = '01';
      this.setSSionStorage('check_sorter', '不合格数量');
    }
    this.getList();
  },
  methods: {
    async search() {
      this.$store.commit("SAVE_PROCHECKINFO", '');
      this.form.I_EBELN = '';
      this.form.I_EBELP = '';
      this.form.I_ETENR = '';
      this.getList();
    },
    async getList() {
      console.log(this.form);
      this.recordSearch()
      try {
        this.$store.commit("updateLoadingStatus", { isLoading: true });
        let res = await JDGetZCHECKB(this.form);
        //console.log(res);
        this.$store.commit("SET_CHECKLIST", res);
        this.$nextTick(() => {
          this.$emit("init2");
        });
      } catch (error) {
        this.$store.commit("SET_CHECKLIST", []);
        this.$store.commit("updateLoadingStatus", { isLoading: false });
      } finally {
        this.$emit('close');
        this.$store.commit("updateLoadingStatus", { isLoading: false });
      }
    },
    recordSearch() {
      this.setSSionStorage('productcheck', `${this.form.I_DATEF},${this.form.I_DATET}`)
    },
    log() {},
    popup() {},
    change() {},
    changeSorter(val) {
      this.setSSionStorage('check_sorter', `${val[0]}`);
      let iZtype = val[0];
      if(iZtype === '不合格数量'){
        this.form.I_ZTYPE = '01';
      }
      else if(iZtype === '合格数量'){
        this.form.I_ZTYPE = '02';
      }
      else{
        this.form.I_ZTYPE = '';
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
      height: @rem*62;
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
    height: @rem*62;
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
