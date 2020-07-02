<template>
  <div class="wrap" id="wrap">
    <div class='content'>
      <div class='head font-limit-2'>
        {{info.FullHead}}
      </div>
      <div class='createdate'>
        {{info.NewCreateDate}}
      </div>
      <div v-html='info.NewsContent'>
        
      </div>
    </div>
  </div>
</template>

<script>
import { JDGetNewsInfo } from '@/api/getData'
export default {
  data() {
    return {
        Id: this.$route.query.id,
        info: ''
    };
  },
  components: {
  },
  mounted() {
    this.getInfo()
  },
  methods: {
    async getInfo() {
      let res = await JDGetNewsInfo({Id: this.Id})
      this.info = res.obj
      console.log(res)
    }
  }
};
</script>

<style lang="less" scoped>
@import "~@/assets/less/main.less";
.wrap {
  background: white;
  .content{
    padding: @rem*20;
    .head{
      font-size: @rem*32;
      font-weight: 600;
    }
    .createdate{
      padding: @rem*10;
      border-bottom: 1px solid #f5f5f5;
      color: #ada5a5;
    }
  }
}
</style>
