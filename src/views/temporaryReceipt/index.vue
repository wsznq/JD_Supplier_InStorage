
<style>
  .temporaryReceipt [class^="weui-icon-"]:before, [class*=" weui-icon-"]:before{
    margin-left: 0 !important;
    margin-right: 0 !important;
  }
</style>

<template>
  <div class="wrap temporaryReceipt" id="wrap">
    <search @click.native='show = true'></search>
    <div v-transfer-dom>
      <popup v-model="show" @on-hide="log('hide')" @on-show="log('show')" position="top">
        <div class="searchBox">
      <div class="date">
        <div class="title">交期</div>
        <div class="choose">
          <input readonly v-model="startDate" @click='visibility = true'>
        </div>
        <span>至</span>
        <div class="choose">
          <input readonly v-model='endDate' @click='visibility2 = true'>
        </div>
      </div>
      <div class="title">工厂型体</div>
      <div class="number">
        <input type="number" placeholder="型体" v-model='form.FactoryType'>
      </div> 
      <div class="title">单号</div>
      <div class="number">
        <input type="text" placeholder="单号" v-model='form.TempreNo'>
      </div>
      <div class="title">指令号</div>
      <div class="number">
        <input type="text" placeholder="指令号" v-model='form.Mtono'>
      </div>
      <div class="title">物料代码</div>
      <div class="number">
        <input type="text" placeholder="物料代码" v-model='form.MaterialCode'>
      </div>
      <div class="title">工厂代码</div>
      <div class="number">
        <input type="text" placeholder="工厂代码" v-model='form.FactoryNo'>
      </div>
      <div class='searchButton' @click='getList'>搜索</div>
      <!-- <div class='searchButton' @click='toInfo'>暂收单详情</div> -->
    </div>
      </popup>
    </div>
    <!-- <group> -->
      <datetime v-model="startDate" @on-change="form.StartDate = startDate"  :show.sync="visibility" style="display: none"></datetime>
      <datetime v-model="endDate" @on-change="form.EndDate = EndDate"  :show.sync="visibility2" style="display: none"></datetime>
    <!-- </group> -->
    <div class="delivery-list">
      <ul>
        <li v-for='(item, index) in list' :key='index' :style='index === 0 ? "margin-top: 0":""'>
          <div class="head" @click='changeStatus(index)'>
            <div class="head-left">
              <div class="contentLeft">
                <div>指令：{{item.mtono}}</div>
                <div>暂收单号：{{item.TemporaryNo}}</div>
                <div>物料名称：{{item.MaterialCode}}-{{item.MaterialName}}</div>
              </div>
              <div class="contentRight">
                <div>型体：{{item.Model}}</div>
                <!-- <div>送货地点：金帝仓库</div> -->
                <div>单位：{{item.Unit}}</div>
                <div>备注：{{item.Remark}}</div>
              </div>
            </div>
            <!-- <div class="head-right">
              <icon type="success" style="color: #aa0000;font-size: 24px;" v-if='item.status'></icon>
              <div class="unselect" v-else></div>
            </div> -->
          </div>
          <div style="position: relative;">
            <div class='fixedDiv'>
              <div>合计</div>
              <div>{{item.allAmount}}</div>
            </div>
          <div class="sizes">
            <div class="tp" :style="'width: ' + 80 * item.TemporaryReceipt.length + 'px'">
              <div v-for="item1 in item.TemporaryReceipt">{{item1.Size}}</div>
            </div>
            <div class="bm" :style="'width: ' + 80 * item.TemporaryReceipt.length + 'px'">
              <div v-for="item1 in item.TemporaryReceipt">{{item1.Qty}}</div>
            </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
import Search from "@/components/search.vue";
import { mapState } from 'vuex'
import { Datetime, Group, Icon, TransferDom, Popup } from "vux";
import { JDGetTemporaryList } from '@/api/getData';
const date = new Date
const dateToday = date.getFullYear() + '-' + ((date.getMonth() + 1) < 10 ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1) )+ '-' + ((date.getDate() ) < 10 ? '0' + (date.getDate() ) : (date.getDate()) )
export default {
  data() {
    return {
      show: false,
      form: {
        StartDate: this.getSSionStorage('temporary') ? JSON.parse(this.getSSionStorage('temporary')).split(',')[0] : dateToday,
        EndDate: this.getSSionStorage('temporary') ? JSON.parse(this.getSSionStorage('temporary')).split(',')[1] : dateToday,
        TempreNo: '',
        Mtono: '',
        FactoryType: '',
        WeChatOpenID: '',
        MaterialCode: '',
        FactoryNo: ''
      },
      isChange: false,
      startDate: this.getSSionStorage('temporary') ? JSON.parse(this.getSSionStorage('temporary')).split(',')[0] : dateToday,
      endDate: this.getSSionStorage('temporary') ? JSON.parse(this.getSSionStorage('temporary')).split(',')[1] : dateToday,
      visibility: false,
      visibility2: false,
      widths: 100,
      list: [],
      oldIndex: '',
      Zno: ''
    };
  },
  computed: {
    ...mapState({
       openId: state => state.user.userInfo
    })
  },
  directives: {
    TransferDom
  },
  components: {
    Datetime,
    Group,
    Icon,
    Search,
    Popup
  },
//   beforeMount() {
// 　　window.addEventListener('orientationchange', () => {
// 　　　　this.change()
// 　　})
// },
  mounted() {
    this.widths = 850 + "px";
    console.log($(window).width());
    this.getList()
    this.$nextTick(() => {
      this.init();           
    });
    // window.addEventListener("onorientationchange" in window ? "orientationchange" : "resize", this.change, false);
  },
  methods: {
    log() {
      
    },
    toInfo() {
      if (this.Zno) {
        this.$router.push({path: "/temporaryInfo", query: {type: 1, Zno: this.Zno}})
      } else {
        this.$vux.toast.text('请选择要查询的数据')
      }
    },
    changeStatus(index) {
      if (this.oldIndex || this.oldIndex === 0) {
        this.$set(this.list[this.oldIndex], 'status', false)
      }
      this.$set(this.list[index], 'status', !this.list[index].status)
      this.oldIndex = index
      this.Zno = this.list[index].TemporaryNo
      this.toInfo() //跳转详情
    },
    async getList() {
      this.recordSearch()
      try {
        this.form.WeChatOpenID = this.openId
        this.$store.commit("updateLoadingStatus", { isLoading: true });
        let res = await JDGetTemporaryList(this.form);
        console.log(res);
        this.list = res
        this.list.forEach((item) => {
          this.$set(item, 'status', false)
          let allAmount = 0
          item.TemporaryReceipt.forEach((item1) => {
            console.log()
            allAmount += (parseFloat(item1.Qty))
          })
          this.$set(item, 'allAmount', allAmount.toFixed(2))
        })
      } catch (error) {
        
      } finally {
        this.show = false
        this.$store.commit("updateLoadingStatus", { isLoading: false });
      }
    },
    recordSearch() {
      this.setSSionStorage('temporary', `${this.startDate},${this.endDate}`)
    },
    change() {
      // alert('9')
      // let reg = new RegExp("-", "g");
      // this.form.StartDate = this.startDate.replace(reg, "");
      // this.form.EndDate = this.endDate.replace(reg, "");
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
          tableHeight = 10 * 40;
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
@import "../../../main.css";
a{color:white;}
.delivery-list {
  ul {
    li {
      .mt20;
      background: white;
      .head {
        border-bottom: 1px solid #f5f5f5;
        display: flex;
        align-items: center;
        padding: @rem*25;
        .head-left {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex: 1;
          color: #666;
          .contentLeft,
          .contentRight {
            div {
              margin-top: @rem*10;
            }
          }
        }
        .head-right {
          margin-left: @rem*20;
          .unselect {
            margin: 0 auto;
            width: @rem*48;
            height: @rem*48;
            border: 1px solid #666;
            border-radius: 100%;
          }
        }
      }
      .fixedDiv{
          z-index: 100;
          position: absolute;
          right: 0;
          bottom: 0;
          >div{
            // flex:1;
            background: white;
            text-align: center;
            color: #aa0000;
            font-size: @rem*28;
            padding: @rem*20 0;
            width: 80px;
          }
          div:first-child{
            border-bottom: 1px solid #f5f5f5;
          }
        }
      .sizes{
        overflow: scroll;
        -webkit-overflow-scrolling:touch;
        .tp, .bm{
          display: flex;
          padding: @rem*20 80px @rem*20 @rem*20;
          border-bottom: 1px solid #f5f5f5;
          >div{
            // flex:1;
            text-align: center;
            color: #aa0000;
            font-size: @rem*28;
            width: 80px;
          }
        }
        
        .bm{
          >div{
            color: #333;
          }
        }
      }
      .sizes ::-webkit-scrollbar {display: none;}
    }
  }
}
.searchBox {
  background: white;
  box-shadow: 0px 3px 6px 0px 
		rgba(0, 0, 0, 0.1);
  padding: @rem*20;
  // display: flex;
  // flex-wrap: wrap;
  .title {
    // .mt20;
    font-size: @rem*28;
    height: 36px;
    line-height: 36px;
    color: #666;
    margin-right:@rem*20;
  }
  .date {
    margin-right: 10px;
    .mt20;
    display: flex;
    align-items: center;
    span{
      width: 25px;
      text-align: center;
      font-size: @rem*25;
    }
    .choose {
      font-size: 12px;
      width: @rem*240;
      height: 36px;
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
  .zhiling{
    width:160px;
    margin-right: @rem*10;
  }
  .number{
    width: 90%;
      height: 36px;
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
      // margin-top: @rem*25;
      // margin-left: 10px;
      text-align: center;
      font-size: @rem*28;
      color:white;
      line-height: 36px;
      height:  36px;
      margin: 0 auto;
      .mt20;
      // width:  80px;
      border-radius: 4px;
      .bisColor(#d93309, #aa0000)
    }
}
</style>
