<style>
  .result .weui-icon-success{
    color: #aa0000 !important;
  }
  .result .weui-btn_primary{
    background: -moz-linear-gradient(left,#d93309 0%, #aa0000 100%);
    background: -webkit-gradient(linear, left,right, color-stop(0%,#d93309),color-stop(100%,#aa0000));
    background: -webkit-linear-gradient(left, #d93309 0%, #aa0000 100%);
    background: -o-linear-gradient(left, #d93309 0%, #aa0000 100%);
    background: -ms-linear-gradient(left, #d93309 0%, #aa0000 100%);
    background: linear-gradient(to right, #d93309 0%, #aa0000 100%);
  }
</style>

<template>
  <div class="wrap result" id="wrap" style="height: 100vh;">
    <msg class='msg' title="生成送货单成功" :description="description" :buttons="buttons" :icon="icon"></msg>
  </div>
</template>

<script>
import { Msg} from "vux";
export default {
  data() {
    return {
      description: '<p class="mt20" style="font-size:16px;">送货单号：<span style="color:#aa0000">'+this.$route.query.No +'</span></p><p class="mt20">是否查看生成的送货单</p>',
      icon: 'success',
      buttons: [{
        type: 'primary',
        text: '是',
        onClick: this.confirm.bind(this)
      }, {
        type: 'default',
        text: '否',
        link: '/receiving'
      }],
    };
  },
  components: {
    Msg
  },
  mounted() {
  },
  methods: {
    confirm() {
      this.$router.push({path: '/deliveryList'})
    }
  }
};
</script>

<style lang="less" scoped>
@import "~@/assets/less/main.less";
.wrap{
  background: white;
  .msg{
    margin-top: @rem*80;
  }
}
</style>
