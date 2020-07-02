
<template>
  <div class="wrap" id="wrap">
    <div class="delivery-item">
      <div class="title">送货单列表</div>
      <div class="list">
        <div>修改</div>
        <div>删除</div>
        <div>详情</div>
      </div>
    </div>
    <div class="delivery-list mt20">
      <ul>
        <li>
          <div class="head">
            <div class="head-left">
              <div class="contentLeft">
                <div>指令：J1999999</div>
                <div>送货单号：SL999999</div>
                <div>物料名称：全PU透气革</div>
              </div>
              <div class="contentRight">
                <div>型体：XB0000000-5</div>
                <div>送货地点：金帝仓库</div>
                <div>单位：米</div>
              </div>
            </div>
            <div class="head-right">
              <div class="unselect"></div>
            </div>
          </div>
          <div class="sizes">
            <div class="tp">
              <div v-for="item in 9">99</div>
            </div>
            <div class="bm">
              <div v-for="item in 9">99</div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        BUKRS: ''
      }
    };
  },
  components: {},
  mounted() {
    
  },
  methods: {}
};
</script>

<style lang="less" scoped>
@import "~@/assets/less/main.less";
// @import "../../../main.css";
.delivery-list {
  ul {
    li {
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
      .sizes{
        .tp, .bm{
          display: flex;
          padding: @rem*20;
          border-bottom: 1px solid #f5f5f5;
          >div{
            flex:1;
            text-align: center;
            color: #aa0000;
            font-size: @rem*28;
          }
        }
        .bm{
          >div{
            color: #333;
          }
        }
      }
    }
  }
}
.delivery-item {
  background: white;
  justify-content: space-between;
  display: flex;
  padding: @rem*20;
  .title {
    font-size: @rem*36;
    height: @rem*64;
    line-height: @rem*64;
  }
  .list {
    display: flex;
    div {
      width: @rem*140;
      height: @rem*64;
      background-image: linear-gradient(180deg, #d93309 0%, #aa0000 100%);
      border-radius: 4px;
      text-align: center;
      line-height: @rem*64;
      color: white;
      margin-right: @rem*10;
    }
  }
}
</style>
