
<template>
  <div class="wrap" id="wrap">
    <div class="searchBox">
      <div class="title">日期范围</div>
      <div class="date">
        <div class="choose">
          <input
            placeholder="请选择开始时间"
            readonly="readonly"
            v-model="form.BeginDate"
            @click="showPlugin"
          >
        </div>
        <span>至</span>
        <div class="choose">
          <input
            placeholder="请选择结束时间"
            readonly="readonly"
            unselectable="on"
            v-model="form.EndDate"
            @click="showPlugin2"
          >
        </div>
      </div>
      <div class="title">采购订单</div>
      <div class="number">
        <input type="text" v-model="form.EBELN" placeholder="请输入采购订单">
      </div>
      <div class="title">厂区</div>
      <div class="number">
        <input type="text" v-model="form.ZQY" placeholder="请输入厂区">
      </div>
      <div class="title">指令单号</div>
      <div class="number">
        <input type="text" v-model="form.VBELN" placeholder="请输入指令单号">
      </div>
      <div class="title">工厂型体</div>
      <div class="number">
        <input type="text" placeholder="请输入工厂型体" v-model="form.ZZXTNO">
      </div>
      <div class="title">分配型体</div>
      <div class="number">
        <input type="text" placeholder="请输入分配型体" v-model="form.ZXT">
      </div>
      <div class="searchButton" @click="search">搜索</div>
      <div class='searchButton' @click='searchExcel'>导出Excel</div>
    </div>
  </div>
</template>

<script>
import { Datetime, DatetimePlugin } from "vux";
import { mapState } from "vuex";
import { JDGetSAPPurchaseOrder,JDGetSAPPurchaseOrderExcel } from "@/api/getData";
import Vue from "vue";
Vue.use(DatetimePlugin);
const date = new Date
const dateToday = date.getFullYear() + '-' + ((date.getMonth() + 1) < 10 ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1) )+ '-' + ((date.getDate() ) < 10 ? '0' + (date.getDate() ) : (date.getDate()) )
export default {
  data() {
    return {
      form: {
        EBELN:"",
        WeixinOpenID: "",
        ZQY:"",
        VBELN:"",
        ZZXTNO:"",
        ZXT:"",
        BeginDate: dateToday,
        EndDate: dateToday
      },
      show: false,
      BeginDate: "",
      EndDate: "",
      visibility: false,
      visibility2: false,
      widths: 100,
      tableHead: [
                  "厂区",
                  "采购订单号",
                  "行项目",
                  "计划行",
                  "确认交期",
                  "物料编码",
                  "物料描述",
                  "销售订单",
                  "销售订单行项目",
                  "型体",
                  "分配型体",
                  "单位",
                  "订单数量",
                  "送货数量",
                  "已暂收数量",
                  "合格数量",
                  "不合格数量",
                  "短码数量",
                  "入库数量",
                  "退货数量"
                  ],
      orderList: []
    };
  },
  computed: {
    ...mapState({
      openId: state => state.user.userInfo
    })
  },
  components: {
    Datetime
  },
  mounted() {
    if (this.getSSionStorage('order')) {
      this.form.BeginDate = JSON.parse(this.getSSionStorage('order')).split(',')[0]
      this.form.EndDate = JSON.parse(this.getSSionStorage('order')).split(',')[1]
    }
    this.form.WeixinOpenID = this.openId;
    this.search();
    // this.$emit('init')
    // this.$nextTick(() => {
    //   this.$emit('init')
    //   // this.init();
    // });
    console.log(this.openId)
    console.log(this.form);
    this.widths = 6 * this.widths + "px";
    console.log($(window).width());
  },
  methods: {
    // 搜索
    async search() {
      this.recordSearch()
      this.$store.commit("updateLoadingStatus", { isLoading: true });
      try {
          let res = await JDGetSAPPurchaseOrder(this.form);
          // this.orderList = res
          this.$store.commit("SAVE_ORDERLIST", res);
          this.$nextTick(() => {
            this.$emit("init");
          });
      } catch (error) {
      } finally {
        this.$emit("close");
        this.$store.commit("updateLoadingStatus", { isLoading: false });
      }
    },
    async searchExcel() {
      this.recordSearch()
      this.$store.commit("updateLoadingStatus", { isLoading: true });
      try {
        console.log("导出");
        let res = await JDGetSAPPurchaseOrderExcel(this.form);
        console.log("--开始--");
        console.log(res);
        location.href = res;
        console.log("--结束--");

       this.$store.commit("SAVE_ORDERLIST", eval(res));
        this.$nextTick(() => {
          this.$emit("init");
          this.$emit("close");
          // this.init();
        });
        this.$store.commit("updateLoadingStatus", { isLoading: false });
      } catch (error) {
        if (error === "无数据") {
          this.$store.commit("SAVE_ORDERLIST", []);
        }
        this.$emit("close");
        this.$store.commit("updateLoadingStatus", { isLoading: false });
        
      } finally {
        this.$emit('close')
        this.$store.commit("updateLoadingStatus", { isLoading: false });
      }
      console.log(this.form)
    },
    // 记录本次搜索的时间
    recordSearch() {
      this.setSSionStorage('order', `${this.form.BeginDate},${this.form.EndDate}`)
    },
    // 控制开始时间控件
    showPlugin() {
      let _this = this;
      this.$vux.datetime.show({
        cancelText: "取消",
        confirmText: "确定",
        format: "YYYY-MM-DD",
        value: dateToday,
        onConfirm(val) {
          console.log("plugin confirm", val);
          _this.form.BeginDate = val;
        },
        onShow() {
          console.log("plugin show");
        },
        onHide() {
          console.log("plugin hide");
        }
      });
    },
    // 控制结束时间 控件
    showPlugin2() {
      let _this = this;
      this.$vux.datetime.show({
        cancelText: "取消",
        confirmText: "确定",
        format: "YYYY-MM-DD",
        value: dateToday,
        onConfirm(val) {
          _this.form.EndDate = val;
          console.log("plugin confirm", val);
        },
        onShow() {
          console.log("plugin show");
        },
        onHide() {
          console.log("plugin hide");
        }
      });
    },
    onConfirm() {},
    log() {},
    popup() {
      alert("0");
    },
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
