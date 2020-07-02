
<template>
  <div class="wrap" id="wrap">
    <qrcode :value="value"></qrcode>
  </div>
</template>

<script>
import { Qrcode } from 'vux'
export default {
  data() {
    return {
      form: {
        BUKRS: ''
      },
      value: '{"BarCodeType":"Deli","BillNO":"310000000016"}'
    };
  },
  components: {
    Qrcode
  },
  mounted() {
    
  },
  methods: {}
};
</script>

<style lang="less" scoped>
@import "~@/assets/less/main.less";
.delivery-list {

}
</style>
