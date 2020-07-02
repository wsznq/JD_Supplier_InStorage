
<template>
  <div class="wrap orderInfo" id="wrap">
    <ul>
      <li>
        <div class="title">组织</div>
        <div class="name">{{dataInfo.ZCOMPANYNAME}}</div>
      </li>
      <li>
        <div class="title">供应商</div>
        <div class="name">{{dataInfo.ZSUPPLIERNAME}}</div>
      </li>
      <li>
        <div class="title">合同编号</div>
        <div class="name">{{dataInfo.ZEBELN}}</div>
      </li>
      <li>
        <div class="title">制单日期</div>
        <div class="name">{{dataInfo.ZBILLDATE}}</div>
      </li>
      <li>
        <div class="title">制单人工号</div>
        <div class="name">{{dataInfo.ZBILLER}}</div>
      </li>
      <li>
        <div class="title">制单人名字</div>
        <div class="name">{{dataInfo.ZBILLERNAME}}</div>
      </li>
      <li>
        <div class="title">采购类型</div>
        <div class="name">{{dataInfo.ZBATXT}}</div>
      </li>
      <!-- <li>
        <div class="title">暂收单号</div>
        <div class="name">{{dataInfo.ZTEMPRENO}}</div>
      </li>
      <li>
        <div class="title">暂收单行号</div>
        <div class="name">{{dataInfo.ZTEMPRESEQ}}</div>
      </li> -->
      <li>
        <div class="title">暂收单日期</div>
        <div class="name">{{dataInfo.ZTEMPREDATE}}</div>
      </li>
      <!-- <li>
        <div class="title">生产单号</div>
        <div class="name">{{dataInfo.ZMTONO}}</div>
      </li>
      <li>
        <div class="title">型体</div>
        <div class="name">{{dataInfo.ZMODEL}}</div>
      </li> -->
    </ul>
    <div class="data-table mt20">
      <div class="t_r">
        <div class="t_r_t">
          <table style="width: 2160px">
            <tbody>
              <tr>
                <th v-for="(item, key) in tableHead" :key="key" rowspan="1" :colspan="9" width='120'>
                  <span>{{item}}</span>
                </th>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="t_r_content">
          <table style="width: 2160px;background: white;">
            <tbody>
              <tr v-for="(item, index) in dataInfo.Receipt" :key="index">
                <td width='120'>
                  <span> {{item.ZDELIVERYDATE}}</span>
                </td>
                <td width='120'>
                  <span> {{item.ZMATERIALCODE}}</span>
                </td>
                <td width='120'>
                  <span> {{item.ZMATERIALNAME}}</span>
                </td>
                <td width='120'>
                  <span>{{item.ZSPECIFICATION}}</span>
                </td>
                <td width='120'>
                  <span>{{item.ZTEMPREQTY}}</span>
                </td>
                <td width='120'>
                  <span>{{item.ZEBELP}}</span>
                </td>
                <td width='120'>
                  <span>{{dataInfo.ZTEMPRENO}}</span>
                </td>
                <td width='120'>
                  <span>{{item.ZTEMPRESEQ}}</span>
                </td>
                <td width='120'>
                  <span>{{item.ZMTONO}}</span>
                </td>
                <td width='120'>
                  <span>{{item.ZMODEL}}</span>
                </td>
                <td width='120'>
                  <span>{{item.DistributionType}}</span>
                </td>
                <td width='120'>
                  <span> {{item.ZSIZE}}</span>
                </td>
                <td width='120'>
                  <span>{{item.ZCHECKQTY}}</span>
                </td>
                <td width='120'>
                  <span> {{item.ZQUALIQTY}}</span>
                </td>
                <td width='120'>
                  <span> {{item.ZUNQUALIQTY}}</span>
                </td>
                <td width='120'>
                  <span>{{item.ZINSTOCKQTY}}</span>
                </td>
                <td width='120'>
                  <span>{{item.ZREMARK}}</span>
                </td>
                <!-- <td width='120'>
                  <span>不合格原因</span>
                </td> -->
                <td width='120'>
                  <span>{{dataInfo.ZDELINO}}</span>
                </td>
                <td width='120'>
                  <span>{{item.ZDELIISEQ}}</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <ul class="mt20">
      <li>
        <div class="title">审核人</div>
        <div class="name">{{dataInfo.ZAUDITOR}}</div>
      </li>
      <li>
        <div class="title">审核日期</div>
        <div class="name">{{dataInfo.ZAUDITDATE}}</div>
      </li>
      <li>
        <div class="title">审核时间</div>
        <div class="name">{{dataInfo.ZAUDITTIME}}</div>
      </li>
    </ul>
  </div>
</template>

<script>
import $ from "jquery";
import { XTable, Datetime, Group } from "vux";
import { JDGetTemporaryDetail } from '@/api/getData'
export default {
  data() {
    return {
      isChange: false,
      startDate: '',
      endDate: '',
      visibility: false,
      visibility2: false,
      widths: '',
      tableHead: ['交货日期', '物料编号', '物料名称', '规格型号', '暂收数量','采购单行号','暂收单号', '暂收单行号','生产单号','型体','分配型体',
        '尺码', '检验数量', '合格数量', '不合格数量', '入库数量', '备注（注明件数，箱容）', '送货单号', '送货单行号'
      ],
      dataInfo: ''
    };
  },
  components: {
    XTable,
    Datetime,
    Group
  },
//   beforeMount() {
// 　　window.addEventListener('orientationchange', () => {
// 　　　　this.change()
// 　　})
// },
  mounted() {
    console.log(this.tableHead.length)
    this.getInfo()
    this.widths = this.tableHead.length * 120 + "px";
    console.log($(window).width());
    // window.addEventListener("onorientationchange" in window ? "orientationchange" : "resize", this.change, false);
  },
  methods: {
    async getInfo() {
      let res = await JDGetTemporaryDetail({Type: 'TempInstock', Zno: this.$route.query.Zno})
      console.log(res)
      this.dataInfo = res
      this.$nextTick(() => {
        this.init();           
      });
    },
    toInfo() {
      this.$router.push({path: '/orderInfo'})
    },
    change() {
      // alert('9')
      if (this.widths === '850px') {
        this.isChange = true
      } else {
        this.isChange = false
        this.widths = '850px'
      }
    },
    init() {
      var win = $(window),
        scrollAreaEl = $(".t_r_content"),
        leftFreezeEl = $(".t_l_freeze"),
        leftTableEl = leftFreezeEl.find("table"),
        rightTableEl = $(".t_r_t table");

      //动态计算容器最大高度
      function adjustHeight() {
        var winHeight = win.height(),
          tableHeight = 8 * 40;
        leftFreezeEl.height(tableHeight);
        scrollAreaEl.height(tableHeight);
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
