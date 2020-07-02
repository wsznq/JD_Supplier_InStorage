<template>
  <!-- <div class="wrap" id="wrap"> -->
  <!-- </div> -->
  <div>
    <x-dialog
      v-model="showDialogStyle"
      hide-on-blur
      :dialog-style="{'max-width': '100%', width: '100%', height: '50%', 'background-color': 'transparent'}"
    >
      <div class="boxContent">
        <div class="inputImg">
          <input placeholder="请输入图形验证码">
          <img>
        </div>
        <x-button :gradients="['#d93309', '#aa0000']" style="width: 80%;margin: 0 auto;margin-top: 20px;">确 定</x-button>
      </div>
      <x-icon type="ios-close-outline" @click="showDialogStyle = false" style="fill:#fff;margin-top: 25px;"></x-icon>
    </x-dialog>
  </div>
</template>

<script>
import { XDialog, XButton } from "vux";
export default {
  // mixins: [wx],
  props: ['status'],
  data() {
    return {
      showDialogStyle: this.status
    };
  },
  components: {
    XDialog,
    XButton
  },
  mounted() {},
  methods: {}
};
</script>

<style lang="less" scoped>
@import "~@/assets/less/main.less";
.boxContent {
  border-radius: 5px;
  width: @rem*600;
  height: @rem*300;
  background: white;
  margin: 0 auto;
  padding-top: @rem*50;
  .inputImg {
    display: flex;
    justify-content: space-between;
    padding: 0 @rem*25;
    input {
      border: 1px solid #ccc;
      border-radius: 5px;
      padding-left: @rem*20;
      height: @rem*80;
      width: @rem*350;
    }
    img{
      width: @rem*150;
      height: @rem*80;
    }
  }
}
// .xicon{
//   margin-top: @rem*50;
// }
</style>
