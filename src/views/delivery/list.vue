<style>
.deliveryyy [class^="weui-icon-"]:before,
[class*=" weui-icon-"]:before {
  margin-left: 0 !important;
  margin-right: 0 !important;
}
</style>

<template>
  <div class="wrap deliveryyy" id="wrap">
    <search @click.native="show = true" style="position: fixed;width: 100%;background: #f5f5f5;height: 1.2rem;top:0; z-index: 200;"></search>
    <div v-transfer-dom>
      <popup v-model="show" @on-hide="log('hide')" @on-show="log('show')" position="top">
        <list-search @init="init" @close="close"></list-search>
      </popup>
    </div>
    <div class="funcList">
    <ul>
    <!-- <li>查看送货</li> -->
    <li @click='deleteConfirm'>删除</li>
    </ul>
    </div>
    <!-- <div class="btm-item">
      <div class="fixedItem">
        <div class="btn-selected">代办事项</div>
        <div>已办事项</div>
        <div>全部</div>
      </div>
    </div>-->
    <div class="data-table">
      <div class="t_r">
       <div class='table-data'>
       <div class='selectwrap_top'>
        <div class='select-box' @click="allSelect()" v-if="list2.length > 0">
            <div class="select" v-if="!isAll"></div>
              <icon
                type="success"
                v-else
                style="color: #aa0000;font-size: 24px;margin: 0 auto"
              ></icon>
          </div>
        </div>
        <div class='selectwrap'>
          
          <div class='select-box mt20' v-for="(item1, index) in list2" :key='index' :style="index === 0 ? 'margin-top: 0': ''">

              <div class="edit" @click="gotoInfo_Edit(item1.DeliNo, item1)" v-if= "item1.ISEDITDEL">编辑</div>
              <icon
                @click.native="vueTouch(row, index)"
                type="success"
                style="color: #aa0000;font-size: 24px;"
                v-if="item1.status && item1.ISEDITDEL"
              ></icon>
              <div @click="vueTouch(row, index)" :class="item1.ISEDITDEL === 'X' ? 'select' : '' " v-else></div>
            </div>
        </div>
        <div class="delivery-list">
          <ul>
            <li
              v-for="(item, index) in list2"
              :key="index"
              class="mt20"
              :style="index === 0 ? 'margin-top: 0': ''"
            >
              <div class="head" @click="gotoInfo(item.DeliNo, item)">
                <div class="head-left">
                  <div class="item-top">
                    <div class="item">
                      <div class="item-left">送货单号：{{item.DeliNo}}</div>
                      <div class="item-right">确认交期：{{item.DeliveryDate}}</div>
                    </div>
                    <div class="item">
                      <div class="item-left" v-if="item.Mtono">指<span class="space2"></span>令：{{item.Mtono}}</div>
                      <div class="item-right" v-if="item.Model" >型体：{{item.Model}}</div>
                    </div>
                    <div class="item">
                      <div class="item-left">送货地点：{{item.DeliveryLocation}}</div>
                      <div class="item-right" style="overflow: hidden;
                                                    text-overflow: ellipsis;
                                                    display: -webkit-box;
                                                    -webkit-line-clamp: 2;
                                                    -webkit-box-orient: vertical;">物料名称：{{item.MaterialCode}}-{{item.MaterialName}}</div>
                    </div>
                    <div class="item">
                      <div class="item-left">供应商：{{item.SupplierName}} <span style="margin-left:10px;" v-if="item.Remarks">备注：{{item.Remarks}}</span></div>
                    </div>
                    <div class="item">
                      <div class="item-left">制单日期：{{item.BillDate}} </div>
                    </div>
                  </div>
                </div>
                <!-- <div class="head-right">
                  <icon type="success" style="color: #aa0000;font-size: 24px;" v-if="item.status"></icon>
                  <div class="unselect" v-else></div>
                </div>-->
              </div>
              <div style="position: relative;">
                <div class="fixedDiv">
                  <div>合计</div>
                  <div>{{item.allAmount}}</div>
                </div>
                <div class="sizes">
                  <div class="tp" :style="'width: ' + 100 * item.DeliSize.length + 'px'">
                    <div v-for="item1 in item.DeliSize">{{item1.Size}}</div>
                  </div>
                  <div class="bm" :style="'width: ' + 100 * item.DeliSize.length + 'px'">
                    <div v-for="item1 in item.DeliSize">{{item1.Qty}}</div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
       </div> 
      </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
import Search from "@/components/search.vue";
import listSearch from "./search.vue";
import { Datetime, Group, Icon, Popup, TransferDom } from "vux";
import { JDSendLetterOfAdvice } from '@/api/getData'
import { mapState } from "vuex";
export default {
  data() {
    return {
      row: { target: { cellIndex: 1 } },
      show: false,
      isAll: false,
      startDate: "",
      endDate: "",
      visibility: false,
      visibility2: false,
      widths: 60,
      widths2: 60,
      tableHead: ["尺码", "数量", "已送货数量", "欠数", "本次送货数量"],
      list2: [],
      form: {
        MES_HeadsString: [],
        MES_ItemsString: [
          
        ]
      }
    };
  },
  directives: {
    TransferDom
  },
  computed: {
    ...mapState({
      list: state => state.mutaions.delivery2,
      userInfo: state => state.user.userInfo,
      suplierinfo: state => state.mutaions.suplierinfo
    })
  },
  watch: {
    list(val) {
      // console.log("val", val)
        this.list2 = JSON.parse(JSON.stringify(val))
        this.list2.forEach((item) => {
          let allAmount = 0
          item.DeliSize.forEach((item1) => {
            allAmount += parseFloat(item1.Qty)
          })
          this.$set(item, 'allAmount', allAmount.toFixed(3));
          this.$set(item, "isAll", false);
          this.$set(item, "status", false);
        })
    }
  },
  components: {Datetime,Group,Icon,Search,Popup,listSearch,Icon},
  // watch: {},
  mounted() {
    // var obj = $(".to");
    // //点击事件没有用
    // obj.click(function(e) {
    //   // alert('asda');
    //   console.log($(this).text());
    // });
    this.widths = $(window).width() / 5;
    this.widths2 = $(window).width();
  },
  methods: {
    //点击 全选 状态 处理
    allSelect() {
      if(this.isAll){
        this.isAll = false;
      }
      else{
        this.isAll = true;
      }
      for (let j = 0; j < this.list2.length; j++) {
        if (this.isAll) {
            if(this.list2[j].ISEDITDEL === 'X'){
              this.$set(this.list2[j], "status", true);
            }
        } else {
          this.$set(this.list2[j], "status", false);
        }
      }

    },
    async deleteConfirm() {
      //console.log(this.suplierinfo.supplierInfo); 
      //console.log(this.userInfo);
      //console.log(this.list2);
      let arr_ZDELINO = [];
      this.list2.forEach((item, index) => {
          if (item.status){
            for (let obj in item) {
              if (obj === 'DeliNo') {
                if(arr_ZDELINO.indexOf(item[obj]) === -1){
                  arr_ZDELINO.push(item[obj]);
                }
              } 
            }
         }
        })
      console.log(arr_ZDELINO);
      if(arr_ZDELINO.length <= 0){
        this.$vux.toast.text("请选择送货单");
        return;
      }

      let lv_ZDELINO = "";
      arr_ZDELINO.forEach((item, index) => {
        lv_ZDELINO = lv_ZDELINO + item + ";";
      })
     
			if(confirm(lv_ZDELINO + '确定要删除吗?')==true){
        this.form.MES_HeadsString = [];
        let tableobj =  {
              ZDELINO: "",
              ZDELETEOPENID: "",
              ZDELETER: "",
              BUKRS:"",
              WERKS: "",
              LIFNR:""
            }

        this.list2.forEach((item, index) => {
          if (item.status){
            
            for (let obj in item) {
              if (obj === 'DeliNo') {
                tableobj.ZDELINO = item[obj]
              } 
            }
            
            tableobj.ZDELETER =  this.suplierinfo.supplierInfo.FContact;
            tableobj.ZDELETEOPENID = this.userInfo;
            tableobj.BUKRS = "1000";
            tableobj.LIFNR = this.suplierinfo.supplierInfo.FNumber;

            this.form.MES_HeadsString.push(tableobj);
          }
          tableobj = Object.assign({}, {
              ZDELINO: "",
              ZDELETEOPENID: "",
              ZDELETER: "",
              BUKRS:"",
              WERKS: "",
              LIFNR:""
            })
        })
        
        this.form.MES_HeadsString = JSON.stringify(this.form.MES_HeadsString);
        this.form.MES_ItemsString = JSON.stringify(this.form.MES_ItemsString);
        console.log(this.form);
        try {
          let res = await JDSendLetterOfAdvice(this.form);
          //console.log(res);
          this.list2.forEach((item, index) => {
          if (item.status){
            this.list2.splice(index, 1);
          }
        })
          
          this.$vux.toast.text(res);
        } catch (error) {
          // alert(';90')
          console.log(error)
          this.form.MES_HeadsString = JSON.parse(this.form.MES_HeadsString);
        } 

       }
    },
    gotoInfo(DeliNo, info) {
      this.$store.commit("SET_SINGLEINFO", info);
      this.$router.push({ path: "/deliveryInfo2", query: { DeliNo: DeliNo }});
    },
    gotoInfo_Edit(DeliNo, info) {
      this.$store.commit("SET_SINGLEINFO", info);
      this.$router.push({ path: "/deliveryInfo2_edit", query: { DeliNo: DeliNo }});
    },
    close() {
      this.show = false;
    },
    log() {},
    vueTouch(e,index) {
      if (!this.list2[index].status) {
        this.$set(this.list2[index],"status",!this.list2[index].status);
      }
      else{
        this.$set(this.list2[index],"status",!this.list2[index].status);
      }

      if (e.target.tagName !== "INPUT") {
        
      }
      // alert('0')
    },
    toInfo(e) {
      console.log(e);
      // this.$router.push({ path: "/warehousInfo" });
    },
    change() {},
    init() {
      return ;
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
// @import "../../../main.css";
a {
  color: white;
}
.space2 {
  display: inline-block;
  width: 2em;
}
.table-data{
  padding-right: 45px;
  .selectwrap{
    position: absolute;
    right: 0;
    .select-box{
      // z-index: 10;
      background: white;
      width: 45px;
      height:200px;
      .v-flex;
      position:relative;
    }
  }
  .selectwrap_top{
    position: absolute;
    right: 0;
    top:@rem*170;
    .select-box{
      // z-index: 10;
      width: 45px;
      height:45px;
      .v-flex;
      position:relative;
    }
  }
  .delivery-list {
    ul {
      li {
        height:200px;
        background: white;
        .head {
          border-bottom: 1px solid #f5f5f5;
          display: flex;
          align-items: center;
          padding: @rem*20;
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
            z-index: 10;
            position: absolute;
            top: @rem*0;
            right: 0;
            bottom: 0;
            >div{
              // flex:1;
              background: white;
              text-align: center;
              color: #aa0000;
              font-size: @rem*28;
              padding: @rem*10 0;
              width: 80px;
            }
            div:first-child{
              border-bottom: 1px solid #f5f5f5;
            }
          }
        .sizes {
          overflow: scroll;
          -webkit-overflow-scrolling:touch;
          .tp,
          .bm {
            display: flex;
            padding: @rem*20;
            border-bottom: 1px solid #f5f5f5;
            > div {
              // flex: 1;
              text-align: center;
              color: #aa0000;
              font-size: @rem*28;
              width: 80px;
            }
          }
          .bm {
            > div {
              color: #333;
            }
          }
        }
        .sizes ::-webkit-scrollbar {display: none;}
      }
    }
  }
}
input[type="number"] {
  -webkit-appearance: none;
}
textarea {
  -webkit-appearance: none;
}
.tr-input {
  border: 1px solid #f5f5f5;
  border-radius: 4px;
}
.btm-item {
  z-index: 2000;
  position: fixed;
  bottom: 0;
  background: white;
  height: @rem*100;
  width: 100%;
  justify-content: center;
  display: flex;
  align-items: center;
  .fixedItem {
    width: 96%;
    height: @rem*64;
    justify-content: center;
    display: flex;
    align-items: center;
    border: 1px solid #aa0000;
    border-radius: 4px;
    div {
      height: 100%;
      flex: 1;
      border-right: 1px solid #aa0000;
      text-align: center;
      line-height: @rem*64;
      color: #aa0000;
    }
    div:nth-child(3) {
      border-right: 0;
    }
  }
}
.btn-selected {
  background: #aa0000;
  color: white !important;
}
.select,
.selected {
  width: @rem*48;
  height: @rem*48;
  border-radius: 100%;
  border: 1px solid #c9c9c9;
  margin: 0 auto;
}
.selected {
  background: red;
}
.edit{
  position:absolute;
  top:@rem*68;
  width: @rem*48;
  height:@rem*48;
}
.item-top {
  // padding: @rem*20;
  background: white;
  width: 100%;
  // border-bottom: 1px solid #f5f5f5;
  .item {
    margin-top: @rem*10;
    display: flex;
    justify-content: space-between;
    color: #666;
    .item-left,
    .item-right {
      flex: 1;
    }
  }
}
.data-table {
  // background: white;
  font-size: @rem*22;
  margin-bottom: @rem*100;
  margin-top: @rem*280;
}
.funcList {
  position: fixed;
  top: 1.2rem;
  width: 100%;
  background: white;
  padding: @rem*20;
  z-index: 100;
  ul {
    width: 100%;
    display: flex;
    align-items: center;
    li {
      flex: 1;
      .bisColor(#d93309, #aa0000);
      margin-right: @rem*10;
      color: white;
      height: @rem*64;
      text-align: center;
      line-height: @rem*64;
      border-radius: 4px;
    }
    li:nth-child(4) {
      margin-right: 0;
    }
  }
}
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
      height: @rem*72;
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
    height: @rem*72;
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
