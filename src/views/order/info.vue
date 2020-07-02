<template>
  <div class="wrap orderInfo" id="wrap">
    <ul>
      <li>
        <div class="title">订单编号</div>
        <div class="name">{{orderInfo.ebeln}}</div>
      </li>
      <li>
        <div class="title">订单日期</div>
        <div class="name">{{orderInfo.eindt_qr}}</div>
      </li>
      <li>
        <div class="title">是否配码</div>
        <div class="name">{{isPeiMa}}</div>
      </li>
    </ul>
    <div class="data-table mt20">
      <div class="t_r">
        <div class="t_r_t" :style="'width: ' + widths + 'px'">
          <table :style="'width: ' + widths + 'px'">
            <tbody>
              <tr>
                <th v-for="(item, key) in tableHead" :key="key" rowspan="1"  :style="item === '尺码' ? 'width: 400px !important' : 'width: 120px !important'">
                  <span v-if='item != "尺码"'>{{item}}</span>
                  <div v-if='item == "尺码"'>尺码</div>
                  <div v-if='item == "尺码"' class="_size">
                    <!-- <ul style="display:flex;">
                      <li v-for="(item, index) in 3" :key="index">{{index}}</li>
                    </ul>-->
                    <i v-for="(item, index) in sizeList" :key="index">{{item}}</i>
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
              <tr v-for="(item, index) in orderDetail" :key="index">
                <td width='120'>
                  <!-- <span v-if='typeof item1 != "string"' v-for='(item2, key) in item1' :key='key' class="cell">{{item2}}</span> -->
                  <span> {{item.SCMONO}}</span>
                </td>
                <td width='120'>
                  <span> {{item.FProductName}}</span>
                </td>
                <td width='120'>
                  <span> {{item.FMaterailNumber}}</span>
                </td>
                <td width='120'>
                  <span> {{item.FMaterailName}}</span>
                </td>
                <td width='120'>
                  <!-- <span> {{item.FMaterailModel}}</span> -->
                  <span>{{item.FMaterailModel}}</span>
                </td>
                <td width='120'>
                  <span> {{item.FMaterailColor}}</span>
                </td>
                <td width='120'>
                  <span>{{item.FMaterial}}</span>
                </td>
                <td class='tdSize' width='400'>
                  <!-- <span v-for='(item2, key) in 9' :key='key' class="cell">500</span> -->
                  <i v-for='(item2, key) in item.sizeList' :key='key' class="cell">{{item2}}</i>
                </td>
                <td width='120'>
                  <span> {{item.FUnitName}}</span>
                </td>
                <td width='120'>
                  <span> {{item.FOrderQty}}</span>
                </td>
                <td width='120'>
                  <span>{{item.FSendQty}}</span>
                </td>
                <td width='120'>
                  <span>{{item.FTempReceiveQty}}</span>
                </td>
                <td width='120'>
                  <span>{{item.FInstockQty}}</span>
                </td>
                <td width='120'>
                  <span>{{item.FUnqualifiedQty}}</span>
                </td>
                <td width='120'>
                  <span>{{item.FAuxPrice}}</span>
                </td>
                <td width='120'>
                  <span>{{item.FAmount}}</span>
                </td>
                <td width='120'>
                  <span>{{item.FFetchDate}}</span>
                </td>
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
import { mapState } from 'vuex'
import { JDOrderDetail } from '@/api/getData'
import { parse } from 'path';
export default {
  data() {
    return {
      widths: "",
      tableHead: [
        "生产单号",
        "工厂型体",
        "物料代码",
        "物料名称",
        "规格",
        "颜色",
        "材质",
        "尺码",
        "常用单位",
        "订购数量",
        "送货数",
        "暂收数",
        "入库数",
        "不合格数",
        "单价",
        "金额",
        "交货日期"
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
      isPeiMa:"否"
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
    })
  },
  components: {},
  mounted() {
    console.log('orderInfo',this.orderInfo)
    // alert(this.tableHead.length)
    this.widths = ((this.tableHead.length-1) * 120 + 150);
    // 获取详情
    JDOrderDetail({CgOrderNo: this.orderInfo.ebeln}).then((res) => {
      console.log("---------------------")
      console.log('order', res)
      console.log("---------------------")
      if(res[0].FSizeArr == ""){
        this.isPeiMa = "否";
      }
      else{
        this.sizeList = res[0].FSizeArr.split(',');
        this.isPeiMa = "是";
      }
      this.orderDetail = res
      // this.sizeList.forEach((item1, index1) => {
      //   res.forEach((item, index) => {
      //   console.log(index)
      //   })
      // })
      res.forEach((item, index) => {
        let sizeList = []
        for(let item1 in item) {
          //console.log(item1)
          this.sizeList.forEach((item2, index2) => {
            if (item1 === item2) {
              sizeList.push(item[item1])
            }
          })
        }
        item.sizeList = sizeList
      })
      this.Total()
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
        var winHeight = win.height() / 2,
          tableHeight = (_this.orderDetail.length < 5 ? _this.orderDetail.length : 5) * 40; // 3为表格数据总长度
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
  clear: both;
  justify-content: center;
  i {
    display: flex;
    width: 50px;
    float: left;
    // display: inline-block;
  }
}
.tdSize {
  clear: both;
  // justify-content: center;
  align-items: center;
  i {
    display: flex;
    // display: inline-block;
    width: 50px;
    float: left;
  }
}
ul {
  li {
    padding: @rem*25 @rem*20;
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
