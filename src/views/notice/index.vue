<template>
  <div class="wrap" id="wrap">
    <v-scroll :on-refresh="onRefresh" :on-infinite="onInfinite" :hasData='isloading'>
      <ul>
        <li v-for="(item, index) in list" :key='index' @click='toDetail(item)'>
          <div class="title">{{item.FullHead}}</div>
          <div class="date">{{item.NewCreateDate}}</div>
        </li>
      </ul>
    </v-scroll>
  </div>
</template>

<script>
import Scroll from "@/components/scroll";
import { JDGetNotice, JDGetNewsList } from '@/api/getData'
import { setTimeout } from 'timers';
export default {
  data() {
    return {
      isloading: true,
      form: {
        page: 1,
        rows: 8,
        sidx: 'CreateDate',
        sord: 'desc'
      },
      list: []
    };
  },
  components: {
    "v-scroll": Scroll
  },
  mounted() {
    this.getNewsList()
  },
  methods: {
    toDetail(item) {
      this.$router.push({path: '/newsInfo', query: {id: item.NewsId}})
    },
    async getNewsList() {
      // console.log(res)
      try {
        console.log(this.form)
        let res
        if (this.$route.query.type === 'news') {
          res = await JDGetNewsList(this.form)
        } else {
          res = await JDGetNotice(this.form)
        }
        // this.list = res.rows
        if (res.state === 0) {
          this.isloading = false
        }
        this.list = this.list.concat(res.rows)
        if (this.form.page === 1 && this.list.length< 10) {
          this.isloading = false
        }
      } catch (error) {
        console.log(error)
      }
    },
    onRefresh(done) {
      this.list = []
      this.isloading = true
      this.form.page = 1
      this.getNewsList()
      done()
    },
    onInfinite(done) {
      setTimeout(() => {
        this.form.page += 1
        this.getNewsList()
      }, 2500)
      // alert('9')
      done()
    }
  }
};
</script>

<style lang="less" scoped>
@import "~@/assets/less/main.less";
.wrap {
  ul {
    background: white;
    li {
      // height: @rem*158;
      border-bottom: 1px solid #f5f5f5;
      padding: @rem*40 @rem*20;
      .title {
        font-size: @rem*32;
        font-weight: 600;
        .ov;
        color: #333;
      }
      .date {
        font-size: @rem*24;
        color: #999;
        margin-top: @rem*24;
      }
    }
  }
}
</style>
