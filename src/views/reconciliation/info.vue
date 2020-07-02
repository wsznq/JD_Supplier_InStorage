<template>
  <div class="wrap orderInfo" id="wrap">
    <ul>
      <li>
        <div class="title">是否对账</div>
        <div class="name">{{billParams.I_SSDZ === 'X' ? '已对账': '未对账'}}</div>
      </li>
      <li>
        <div class="title">汇总类型</div>
        <div class="name" v-if='billParams.ShowType===0'>材料汇总</div>
        <div class="name" v-if='billParams.ShowType===1'>委外加工汇总</div>
        <div class="name" v-if='billParams.ShowType===2'>委外加工汇总按型体</div>
      </li>
      <li>
        <div class="title">供应商名称</div>
        <div class="name">{{suplierinfo.FName}}</div>
      </li>
    </ul>
    <div class="data-table mt20">
      <div class="t_r">
        <div class="t_r_t" :style="'width: ' + widths + 'px'">
          <table :style="'width: ' + widths + 'px'">
            <tbody>
              <tr>
                <th v-for="(item, key) in tableHead" :key="key" rowspan="1" :colspan="9" >
                  <span v-if='item != "尺码"'>{{item}}</span>
                  <div v-if='item == "尺码"'>尺码</div>
                  <div v-if='item == "尺码"' class="_size">
                    <!-- <ul style="display:flex;">
                      <li v-for="(item, index) in 3" :key="index">{{index}}</li>
                    </ul>-->
                    <span v-for="(item, index) in sizeList" :key="index">{{item}}</span>
                  </div>
                </th>
                <!-- <th rowspan="1" colspan="9" style="width: 270px;">
                  <div>尺码</div>
                  <div class="_size">
                    <span v-for="(item, index) in 9" :key="index">35</span>
                  </div>
                </th> -->
              </tr>
            </tbody>
          </table>
        </div>
        <div class="t_r_content">
          <table :style="'width: ' + widths + 'px'">
            <tbody>
              <tr v-for="(item, index) in billInfoList" :key="index">
                <td width='120'>
                  <!-- <span v-if='typeof item1 != "string"' v-for='(item2, key) in item1' :key='key' class="cell">{{item2}}</span> -->
                  <span> {{item.BELNR}}</span>
                </td>
                <td width='120'>
                  <span> {{item.BKTXT}}</span>
                </td>
                <td width='120'>
                  <span> {{item.BUDAT}}</span>
                </td>
                <td width='120'>
                  <span> {{item.EBELN}}</span>
                </td>
                <td width='120'>
                  <!-- <span> {{item.FMaterailModel}}</span> -->
                  <span>{{item.EBELP}}</span>
                </td>
                <td width='120'>
                  <span> {{item.LIFNR}}</span>
                </td>
                <td width='120'>
                  <span>{{item.NAME1}}</span>
                </td>
                <td width='120'>
                  <span> {{item.MBLNR}}</span>
                </td>
                <td width='120'>
                  <span> {{item.ZEILE}}</span>
                </td>
                <td width='120'>
                  <span>{{item.BUDAT_MKPF}}</span>
                </td>
                <td width='120'>
                  <span>{{item.RBSTAT}}</span>
                </td>
                <td width='120'>
                  <span>{{item.MATNR}}</span>
                </td>
                <td width='120'>
                  <span>{{item.MAKTX}}</span>
                </td>
                <td width='120'>
                  <span>{{item.TXZ01}}</span>
                </td>
                <td width='120'>
                  <span>{{item.KDAUF}}</span>
                </td>
                <td width='120'>
                  <span>{{item.SATNR}}</span>
                </td>
                <td width='120'>
                  <span>{{item.GROES}}</span>
                </td>
                <td width='120'>
                  <span>{{item.NETPR}}</span>
                </td>
                <td width='120'>
                  <span>{{item.PEINH}}</span>
                </td>
                <td width='120'>
                  <span>{{item.BPMNG}}</span>
                </td>
                <td width='120'>
                  <span>{{item.BPRME}}</span>
                </td>
                <td width='120'>
                  <span>{{item.MENGE_DD}}</span>
                </td>
                <td width='120'>
                  <span>{{item.MEINS_DD}}</span>
                </td>
                <td width='120'>
                  <span>{{item.MENGE}}</span>
                </td>
                <td width='120'>
                  <span>{{item.MEINS}}</span>
                </td>
                <td width='120'>
                  <span>{{item.WRBTR_RK}}</span>
                </td>
                <td width='120'>
                  <span>{{item.WRBTR}}</span>
                </td>
                <td width='120'>
                  <span>{{item.MWSKZ}}</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <!-- <ul class="mt20">
      <li>
        <div class="title">审核人</div>
        <div class="name">{{orderInfo.Reviewer}}</div>
      </li>
      <li>
        <div class="title">采购员</div>
        <div class="name">{{orderInfo.Buyer}}</div>
      </li>
    </ul> -->
  </div>
</template>

<script>
import $ from "jquery";
import { mapState } from 'vuex'
import { JDGetSTOCKACCOUNTEntry } from '@/api/getData'
import { parse } from 'path';
export default {
  data() {
    return {
      index: this.$route.query.index,
      widths: "",
      tableHead: [
        "系统发票编号",
        "采购发票",
        "发票日期",
        "采购订单",
        "采购订单行项目",
        "供应商",
        "供应商描述",
        "入库单",
        "入库单行项目",
        "入库日期",
        "发票状态",
        "物料编号",
        "物料描述",
        "采购订单文本",
        "销售订单",
        "工厂型体",
        "规格",
        "净单价",
        "价格单位",
        "订价单位入库数量",
        "订价单位",
        "订单单位入库数量",
        "订单单位",
        "基本单位入库数量",
        "基本单位",
        "入库金额",
        "发票金额",
        "税码"
      ],
      tableData: [
        [
          "J1905887",
          "DD182151G-1",
          "090800275",
          "DD182151g-13鞋桶成",
          "123",
          "黑色",
          "皮革",
          ["500", "500", "500", "500", "500", "500", "500", "500", "500"],
          "双",
          "1500",
          "1500",
          "1500",
          "1500",
          "1500",
          "1.5",
          "8888",
          "2019-8888"
        ],
        [
          "J1905887",
          "DD182151G-1",
          "090800275",
          "DD182151g-13鞋桶成",
          "123",
          "黑色",
          "皮革",
          ["500", "500", "500", "500", "500", "500", "500", "500", "500"],
          "双",
          "1500",
          "1500",
          "1500",
          "1500",
          "1500",
          "1.5",
          "8888",
          "2019-8888"
        ],
        [
          "J1905887",
          "DD182151G-1",
          "090800275",
          "DD182151g-13鞋桶成",
          "123",
          "黑色",
          "皮革",
          ["500", "500", "500", "500", "500", "500", "500", "500", "500"],
          "双",
          "1500",
          "1500",
          "1500",
          "1500",
          "1500",
          "1.5",
          "8888",
          "2019-8888"
        ]
      ],
      orderDetail: [],
      sizeList: [],
      form: {},
      billInfoList: ''
    };
  },
  computed: {
    tableStyle() {
      return {
        'width': '270px !important'
      }
    },
    ...mapState({
      orderInfo: state => state.mutaions.orderInfo,
      billList: state => state.mutaions.billList,
      billParams: state => state.mutaions.billParams,
      suplierinfo: state => state.mutaions.suplierinfo.supplierInfo
    })
  },
  components: {},
  mounted() {
    console.log('billList',this.billList[parseInt(this.index)])
    // alert(this.tableHead.length)
    this.widths = ((this.tableHead.length) * 120);
    this.form = JSON.parse(JSON.stringify(this.billParams))
    this.form.I_WERKS = this.billList[parseInt(this.index)].WERKS
    this.form.MAKTX = this.billList[parseInt(this.index)].MAKTX
    // 获取详情
    JDGetSTOCKACCOUNTEntry(this.form).then((res) => {
      console.log('order', eval(res))
      this.billInfoList = eval(res)
      // this.Total()
      this.$nextTick(() => {
        this.init();
      });
    })
  },
  methods: {
    // 合计
    Total() {
      console.log('data', this.orderDetail)
      let allSizeList = [] // 合计 尺码列表
      let orderAmount = 0 // 合计 订购数量
      let sendAmount = 0 // 合计 送货数量
      let receiveAmount = 0 // 合计 暂收数
      let warehousAmount = 0 // 合计 入库数
      let Unquality = 0 // 合计 不合格数
      let Amount = 0 // 合计 金额
      this.orderDetail.forEach((item, index) => {
        if (index === 0) {
          allSizeList = item.sizeList
          orderAmount = parseFloat(item.FOrderQty)
          sendAmount = parseFloat(item.FSendQty)
          receiveAmount = parseFloat(item.FTempReceiveQty)
          warehousAmount = parseFloat(item.FInstockQty)
          Unquality = parseFloat(item.FUnqualifiedQty)
          Amount = parseFloat(item.FAmount)
        } else {
          console.log(sendAmount)
          item.sizeList.forEach((item2, index1) => {
            allSizeList[index1] = parseFloat(allSizeList[index1]) + parseFloat(item2)
          })
          orderAmount += parseFloat(item.FOrderQty)
          sendAmount += parseFloat(item.FSendQty)
          receiveAmount += parseFloat(item.FTempReceiveQty)
          warehousAmount += parseFloat(item.FInstockQty)
          Unquality += parseFloat(item.FUnqualifiedQty)
          Amount += parseFloat(item.FAmount)
        }
      })
      let obj = {
        SCMONO: '合计', 
        FProductName: '', 
        FMaterailNumber: '', 
        FMaterailName: '', 
        FMaterailModel: '', 
        FMaterailColor: '', 
        FMaterial: '', 
        sizeList: allSizeList, 
        FUnitName: '', 
        FOrderQty: orderAmount, 
        FSendQty: sendAmount, 
        FTempReceiveQty: receiveAmount,
        FInstockQty: warehousAmount, 
        FUnqualifiedQty: Unquality,
        FAuxPrice: '', 
        FAmount: Amount, 
        FFetchDate: ''
        }
      this.orderDetail.push(obj)
      console.log(sendAmount)
    },
    change() {},
    // 等待数据加载完之后初始化表格
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
          tableHeight = winHeight - 210; // 3为表格数据总长度
          console.log('tableheight', tableHeight)
        leftFreezeEl.height(tableHeight);
        scrollAreaEl.height(tableHeight );
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
// @import "../../../main.css";
table{table-layout:fixed;}
.t_r {
  background: white;
  table {
    td{
      // width: 150px !important;
    }
    th{
      // width: 120px !important;
    }
  }
}
._size {
  display: flex;
  justify-content: center;
  span {
    width: 50px;
    // float: left;
    // display: inline-block;
  }
}
.tdSize {
  display: flex;
  // justify-content: center;
  align-items: center;
  span {
    // display: inline-block;
    width: 50px;
    // float: left;
  }
}
ul {
  li {
    height: 50px;
    padding: 0 @rem*20;
    background: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #f5f5f5;
    .title {
      color: #666;
      font-size: @rem*32;
    }
    .name {
      color: #333;
      font-size: @rem*32;
    }
  }
}
</style>
