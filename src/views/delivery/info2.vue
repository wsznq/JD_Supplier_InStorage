<template>
  <div class="wrap orderInfo" id="wrap">
    <ul>
      <li>
        <div class="title">公司代码</div>
        <div class="name">{{singleInfo.CompanyCode}}</div>
      </li>
      <li>
        <div class="title">送货单号</div>
        <div class="name">{{bilno}}</div>
      </li>
      <li>
        <div class="title">送货地点</div>
        <div class="name">{{singleInfo.DeliveryLocation}}</div>
      </li>
      <li>
        <div class="title">物料编号</div>
        <div class="name">{{singleInfo.MaterialCode}}</div>
      </li>
      <li>
        <div class="title">物料描述</div>
        <div class="name">{{singleInfo.MaterialName}}</div>
      </li>
      <li>
        <div class="title">型体</div>
        <div class="name">{{singleInfo.Model}}</div>
      </li>
      <li>
        <div class="title">指令</div>
        <div class="name">{{singleInfo.Mtono}}</div>
      </li>
      <li>
        <div class="title">总件数</div>
        <div class="name">{{orderDetail[0].ZNUMPAGE}}</div>
      </li>
      <li>
        <div class="title"></div>
        <div class="name"><x-button :gradients="['#d93309', '#aa0000']" style="font-size:12px" @click.native='lookQrCode'>查看二维码</x-button></div>
      </li>
    </ul>
    <div class="data-table mt20">
      <div class="t_r">
        <div class="t_r_t" :style="'width: ' + widths + 'px'">
          <table :style="'width: ' + widths + 'px'">
            <tbody>
              <tr>
                <th v-for="(item, key) in tableHead" :key="key" rowspan="1" :colspan="9" :style="item === '尺码' ? 'width: 300px !important' : 'width: 120px !important'">
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
              <tr v-for="(item, index) in orderDetail" :key="index">
                <td width='120'>
                  <!-- <span v-if='typeof item1 != "string"' v-for='(item2, key) in item1' :key='key' class="cell">{{item2}}</span> -->
                  <span> {{item.ZDELINO}}</span>
                </td>
                <td width='120'>
                  <span> {{item.ZZGCXT}}</span>
                </td>
                 <td width='120'>
                  <span> {{item.ZXT}}</span>
                </td>
                <td width='120'>
                  <span> {{item.ZSATNR}}</span>
                </td>
                <td width='120'>
                  <span> {{item.ZMATNR}}</span>
                </td>
                <td width='120'>
                  <span> {{item.ZMAKTX}}</span>
                </td>
                <td class='tdSize' width='300'>
                  <span v-for='(item2, key) in item.sizeList' :key='key' class="cell">{{item2 ? item2: 0}}</span>
                </td>
                <td width='120'>
                  <span>{{item.ZCOMMUNIT}}</span>
                </td>
                <td width='120'>
                  <span> {{item.ZSUMDELIQTY}}</span>
                </td>
                <td width='120'>
                  <span> {{item.ZTEMPREQTY}}</span>
                </td>
                <td width='120'>
                  <span>{{item.ZQUALIQTY}}</span>
                </td>
                <td width='120'>
                  <span>{{item.ZUNQUALIQTY}}</span>
                </td>
                <td width='120'>
                  <span>{{item.ZSUMSHORTCQTY}}</span>
                </td>
                <td width='120'>
                  <span>{{item.ZINSTOCKQTY}}</span>
                </td>
                <td width='120'>
                  <span>{{item.ZREMARK}}</span>
                </td>
                <td width='120'>
                  <span>{{item.ZREMARK1}}</span>
                </td>
                <td width='120'>
                  <span>{{item.ZREMARK2}}</span>
                </td>
                <td width='120'>
                  <span>{{item.ARBPL}}</span>
                </td>
                <td width='120'>
                  <span>{{item.EEIND}}</span>
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
    <div v-transfer-dom>
      <x-dialog v-model="showHideOnBlur" class="dialog-demo" hide-on-blur>
        <div class="img-box">
          <p class='billNo'>送货单号：{{bilno}} </p>
          <qrcode :value="value"></qrcode>
        </div>
        <div @click="showHideOnBlur=false" style="padding-bottom: 10px;">
          <span class="vux-close"></span>
        </div>
      </x-dialog>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
import { mapState } from 'vuex'
import { JDGetDELIDetailForWX } from '@/api/getData'
import { parse } from 'path';
import { XButton, XDialog, TransferDom, Qrcode } from 'vux'
export default {
  data() {
    return {
      bilno: this.$route.query.DeliNo,
      value: '{"BarCodeType":"Deli","BillNO":"310000000016"}',
      // value: {BarCodeType: 'Deli', BilNO: '310000000016'},
      showHideOnBlur: false,
      widths: "",
      tableHead: [
        "送货单号",
        "工厂型体",
        "分配型体",
        "一般物料",
        "物料代码",
        "物料名称",
        "尺码",
        "单位",
        "送货数量",
        "暂收数量",
        "合格数量",
        "不合格数量",
        "短码数量",
        "入库数",
        "表头备注",
        "表体行件数",
        "备注3",
        "送货线别",
        "交货日期"
      ],
      tableData: [],
      orderDetail: [],
      sizeList: []
    };
  },
  directives: {
    TransferDom,
  },
  computed: {
    tableStyle() {
      return {
        'width': '270px !important'
      }
    },
    ...mapState({
      orderInfo: state => state.mutaions.orderInfo,
      singleInfo: state => state.mutaions.singleInfo
    })
  },
  components: {
    XButton,
    XDialog,
    Qrcode
  },
  mounted() {
    this.value = JSON.stringify({BarCodeType: 'Deli', BillNO: this.bilno}) // 二维码参数
    // alert(this.tableHead.length)
    this.widths = ((this.tableHead.length-1) * 120 + 300);
    // 获取详情
    JDGetDELIDetailForWX({DeliNO: this.$route.query.DeliNo,I_ZCALLER:'OUT'}).then((res) => {
      //console.log('info', eval(res)[0].FSizeArr)
      res = eval(res)
      if (res[0].FSizeArr) {
        this.sizeList = res[0].FSizeArr.split(',')
      }
      this.orderDetail = res
      res.forEach((item, index) => {
        let sizeList = []
        for(let item1 in item) {
          //console.log(item1)
          this.sizeList.forEach((item2, index2) => {
            if (item1 === item2) {
              sizeList.push(parseInt(item[item1]))
            }
          })
        }
        item.sizeList = sizeList
      })
      // this.Total()
      this.$nextTick(() => {
        this.init();
      });
    })
  },
  methods: {
    lookQrCode() {
      this.showHideOnBlur = true
      // this.$router.push({path: '/qrcode'})
    },
    // 合计
    Total() {
      //console.log('data', this.orderDetail)
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
      //console.log(sendAmount)
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
          tableHeight = (_this.orderDetail.length < 5 ? _this.orderDetail.length : 5) * 100; // 3为表格数据总长度
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
@import '~vux/src/styles/close';
// @import "../../../main.css";
table{table-layout:fixed;}
.img-box{
  padding: @rem*50 @rem*10;
}
.billNo{
  font-size: @rem*28;
  margin-bottom: 15px;
}
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
