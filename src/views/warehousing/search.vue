
<template>
  <div class="wrap" id="wrap">
    <datetime
      v-model="form.StartTime"
      @on-change="change"
      :show.sync="visibility"
      style="display: none"
    ></datetime>
    <datetime
      v-model="form.EndTime"
      @on-change="change"
      :show.sync="visibility2"
      style="display: none"
    ></datetime>
    <div class="searchBox">
      <div class="title">日期范围</div>
      <div class="date">
        <div class="choose">
          <input
            placeholder="请选择开始时间"
            readonly="readonly"
            v-model="form.StartTime"
            @click="visibility = true"
          >
        </div>
        <span>至</span>
        <div class="choose">
          <input placeholder="请选择结束时间" readonly v-model="form.EndTime" @click="visibility2 = true">
        </div>
      </div>
      <div class="title">指令单号</div>
      <div class="number">
        <input type="txt" v-model="form.Instruction" placeholder="请输入指令单号">
      </div>
      <div class="title">工厂型体</div>
      <div class="number">
        <input type="text" v-model="form.Model" placeholder="请输入工厂型体">
      </div>
      <div class="title">物料代码</div>
      <div class="number">
        <input type="text" v-model="form.MaterialCode" placeholder="请输入物料代码">
      </div>
      <div class="searchButton" @click="search">搜索</div>
      <div class='searchButton' @click='searchExcel'>导出Excel</div>
    </div>
  </div>
</template>

<script>
import { Datetime } from "vux";
import { mapState } from "vuex";
import { JDWarehouseList,JDWarehouseListExcel } from "@/api/getData";
import $ from "jquery";
const date = new Date
const dateToday = date.getFullYear() + '-' + ((date.getMonth() + 1) < 10 ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1) )+ '-' + ((date.getDate() ) < 10 ? '0' + (date.getDate() ) : (date.getDate()) )
export default {
  data() {
    return {
      form: {
        StartTime: dateToday,
        EndTime: dateToday,
        WeixinOpenID: "",
        Instruction: "",
        Model: "",
        Supplier:"",
        MaterialCode:""
      },
      show: false,
      startDate: "",
      endDate: "",
      visibility: false,
      visibility2: false,
      widths: 100,
      tableHead: ["订单编号", "订单日期", "物料名称", "币别", "金额"]
    };
  },
  components: {
    Datetime
  },
  computed: {
    ...mapState({
      openId: state => state.user.userInfo
    })
  },
  mounted() {
    if (this.getSSionStorage('warehousing')) {
      this.form.StartTime = JSON.parse(this.getSSionStorage('warehousing')).split(',')[0]
      this.form.EndTime = JSON.parse(this.getSSionStorage('warehousing')).split(',')[1]
    }
    this.form.WeixinOpenID = this.openId;
    this.search();
    this.widths = 6 * this.widths + "px";
    console.log($(window).width());
  },
  methods: {
    // 搜索入库单
    async search() {
      this.recordSearch()
      this.$store.commit("updateLoadingStatus", { isLoading: true });
      try {
        let res = await JDWarehouseList(this.form);
        // console.log(res)
        this.$store.commit("SAVE_WAREHOUSINGLIST", eval(res));
        this.$nextTick(() => {
          this.$emit("init");
          this.$emit("close");
          // this.init();
        });
        this.$store.commit("updateLoadingStatus", { isLoading: false });
      } catch (error) {
        if (error === "无数据") {
          this.$store.commit("SAVE_WAREHOUSINGLIST", []);
        }
        this.$emit("close");
        this.$store.commit("updateLoadingStatus", { isLoading: false });
      }
    },
    async searchExcel() {
      this.recordSearch()
      this.$store.commit("updateLoadingStatus", { isLoading: true });
      try {
        console.log("导出");
        let res = await JDWarehouseListExcel(this.form);
        console.log("--开始--");
        console.log(res);
        location.href = res;
        console.log("--结束--");

       this.$store.commit("SAVE_WAREHOUSINGLIST", eval(res));
        this.$nextTick(() => {
          this.$emit("init");
          this.$emit("close");
          // this.init();
        });
        this.$store.commit("updateLoadingStatus", { isLoading: false });
      } catch (error) {
        if (error === "无数据") {
          this.$store.commit("SAVE_WAREHOUSINGLIST", []);
        }
        this.$emit("close");
        this.$store.commit("updateLoadingStatus", { isLoading: false });
        
      } finally {
        this.$emit('close')
        this.$store.commit("updateLoadingStatus", { isLoading: false });
      }
      console.log(this.form)
    },
    recordSearch() {
      this.setSSionStorage('warehousing', `${this.form.StartTime},${this.form.EndTime}`)
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
