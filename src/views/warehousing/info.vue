<template>
  <div class="wrap orderInfo" id="wrap">
    <ul>
      <li>
        <div class="title">入库日期</div>
        <div class="name">{{warehousInfo.budat}}</div>
      </li>
      <li>
        <div class="title">仓库</div>
        <div class="name">{{warehousInfo.lgobe}}</div>
      </li>
      <li>
        <div class="title">供应商名称</div>
        <div class="name">{{warehousInfo.zsupname}}</div>
      </li>
      <li>
        <div class="title">联系人</div>
        <div class="name">{{warehousInfo.zlinkman}}</div>
      </li>
      <li>
        <div class="title">币别</div>
        <div class="name">{{warehousInfo.zcurr}}</div>
      </li>
    </ul>
    <div class="data-table mt20">
      <div class="t_r">
        <div class="t_r_t" :style="'width: ' + widths + 'px'">
          <table :style="'width: ' + widths + 'px'">
            <tbody>
              <tr>
                <th v-for="(item, key) in tableHead" :key="key" rowspan="1" colspan="9" :style="item === '尺码' ? 'width: 510px !important;' : 'width: 120px !important'">
                  <span v-if='item != "尺码"'>{{item}}</span>
                  <div v-if='item == "尺码"'>尺码</div>
                  <div v-if='item == "尺码"' class="_size">
                    <!-- <ul style="display:flex;">
                      <li v-for="(item, index) in 3" :key="index">{{index}}</li>
                    </ul>-->
                    <i v-for="(item, index) in sizeList" :key="index">{{item}}</i>
                  </div>
                </th>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="t_r_content">
          <table :style="'width: ' + widths + 'px'">
            <tbody>
              <tr v-for="(item, index) in orderDetail" :key="index">
                <!-- <td width='120'>{{item.ZTEMPRENO}}</td> -->
                <td width='120'>{{item.LGOBE}}</td>
                <td width='120'>{{item.ZZGCXT}}</td>
                <td width='120'>{{item.MATNR}}</td>
                <td width='120'>{{item.ZMAKTX2}}</td>
                <td class='tdSize' style="width: 510px !important">
                  <!-- <span v-for='(item2, key) in 9' :key='key' class="cell">500</span> -->
                  <i v-for='(item2, key) in item.sizeList' :key='key' class="cell">{{item2}}</i>
                </td>
                <td width='120'>{{item.CHARG}}</td>
                <td width='120'>{{item.ZUNIT}}</td>
                <td width='120'>{{item.ZCURR}}</td>
                <td width='120'>{{item.ERFMG}}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import $ from "jquery";
import { JDGetSupplierInstocksDetail } from '@/api/getData'
export default {
  data() {
    return {
      widths: "",
      tableHead: [
        // "单号",
        "仓库",
        "型体",
        "物料编号",
        "物料名称",
        "尺码",
        "批次",
        "单位",
        "币别",
        "数量"
      ],
      orderDetail: [],
      sizeList: [],
      form: {
        MBLNR: '',
        MJAHR: ''
      },
      tableData: [
        [
          "450004896",
          "DD182151G-1",
          "090800275",
          "DD182151g-13鞋桶成",
          "123",
          ["500", "500", "500", "500", "500", "500", "500", "500", "500"],
          "皮革",
          "双",
          "1500"
        ],
        [
          "450004896",
          "DD182151G-1",
          "090800275",
          "DD182151g-13鞋桶成",
          "123",
          ["500", "500", "500", "500", "500", "500", "500", "500", "500"],
          "皮革",
          "双",
          "1500"
        ],
        [
          "450004896",
          "DD182151G-1",
          "090800275",
          "DD182151g-13鞋桶成",
          "123",
          ["500", "500", "500", "500", "500", "500", "500", "500", "500"],
          "皮革",
          "双",
          "1500"
        ]
      ]
    };
  },
  computed: {
    tableStyle() {
      return {
        'width': '270px !important'
      }
    },
    ...mapState({
      warehousInfo: state => state.mutaions.warehousInfo
    })
  },
  components: {},
  mounted() {
    // alert(this.tableHead.length)
    this.widths = ((this.tableHead.length-1) * 120) + 680;
    this.getInfo()
    this.$nextTick(() => {
      this.init();
    });
  },
  methods: {
    async getInfo() {
      this.form.MJAHR = this.warehousInfo.mjahr
      this.form.MBLNR = this.warehousInfo.mblnr
      let res = await JDGetSupplierInstocksDetail(this.form);
      res = eval(res);
      try {
        this.sizeList = res[0].FSizeArr.split(',');
      }catch(e){ }

      this.orderDetail = res
      // this.sizeList.forEach((item1, index1) => {
      //   res.forEach((item, index) => {
      //   console.log(index)
      //   })
      // })
      res.forEach((item, index) => {
        let sizeList = []
        for(let item1 in item) {
          console.log(item1)
          this.sizeList.forEach((item2, index2) => {
            if (item1 === item2) {
              sizeList.push(item[item1])
            }
          })
        }
        item.sizeList = sizeList
      })
    },
    change() {},
    // 等待数据加载完之后初始化表格
    init() {
      var win = $(window),
        scrollAreaEl = $(".t_r_content"),
        leftFreezeEl = $(".t_l_freeze"),
        leftTableEl = leftFreezeEl.find("table"),
        rightTableEl = $(".t_r_t table");

      //动态计算容器最大高度
      function adjustHeight() {
        var winHeight = win.height() / 2,
          tableHeight = 3 * 40; // 3为表格数据总长度
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
@import "../../../main.css";
.t_r {
  table {
    td{
      width: 120px !important;
    }
    th{
      width: 120px !important;
    }
  }
}
._size {
  clear: both;
  justify-content: center;
  i {
    display: flex;
    width: 70px;
    float: left;
    // display: inline-block;
  }
}
.tdSize {
  // justify-content: center;
  clear: both;
  align-items: center;
  i {
     display: flex;
    // display: inline-block;
    width: 70px;
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
