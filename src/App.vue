<template>
  <div id="app">
    <div v-transfer-dom>
      <loading v-model="isLoading"></loading>
    </div>
    <!-- <transition :name="direction === 'forward' ? 'slide-left' : 'slide-right'"> -->
      <keep-alive>
        <router-view v-if="$route.meta.keepAlive"></router-view>
      </keep-alive>
    <!-- </transition> -->
    <!-- <transition :name="direction === 'forward' ? 'slide-left' : 'slide-right'"> -->
      <router-view v-if="!$route.meta.keepAlive"></router-view>
    <!-- </transition> -->
  </div>
</template>

<script>
import { Loading, TransferDom } from "vux";
import { mapState } from "vuex";
import { setTimeout } from 'timers';
export default {
  data() {
    return {
      viewAnimate: ""
    };
  },
  // directives: {
  // 	TransferDom
  // },
  computed: {
    ...mapState({
      isLoading: state => state.common.isLoading,
      direction: state => state.mutaions.direction,
      isNetworkOnline: state => state.isNetworkOnline
    })
  },
  // created() {
  //   //在页面加载时读取sessionStorage里的状态信息
  //   if (sessionStorage.getItem("store")) {
  //     console.log('store', Object.assign(this.$store.state,JSON.parse(sessionStorage.getItem("store"))))
  //       this.$store.replaceState(Object.assign(this.$store.state,JSON.parse(sessionStorage.getItem("store"))))
  //   }
  //   //在页面刷新时将vuex里的信息保存到sessionStorage里
  //   window.addEventListener("beforeunload", () => {
  //       sessionStorage.setItem("store", JSON.stringify(this.$store.state))
  //   })
  // },
  directives: {
    TransferDom,
    focus: {
      // 指令的定义
      inserted: function(el) {
        el.focus();
      }
    }
  },
  // watch: {
  //   $route(to, from) {
  //     // alert(this.direction.direction)
  //     console.log("ssss", this.$store.state.common.direction);
  //     if (this.direction.direction === "forward") {
  //       // alert('1')
  //       this.viewAnimate = "slide-left";
  //     } else {
  //       // alert('3')
  //       this.viewAnimate = "slide-right";
  //     }
  //   }
  // },
  mounted() {
    // 监听resize方法
    // window.addEventListener("resize", this.renderResize, false)
  },
  methods: {
    renderResize() {
        // 判断横竖屏
        let width = document.documentElement.clientWidth
        let height = document.documentElement.clientHeight
        if(width > height) {
            // alert('横屏')
            setTimeout(function () {
              document.documentElement.style.fontSize = '45px';
            }, 1000)
        }
        // 做页面适配
        // 注意：renderResize方法执行时虚拟dom尚未渲染挂载，如果要操作vue实例，最好在this.$nextTick()里进行。
    }
},
  components: {
    Loading
  }
};
</script>

<style lang="less">
.slide-right-enter-active,
  .slide-right-leave-active,
  .slide-left-enter-active,
  .slide-left-leave-active {
    // will-change: transform;
    transition: all .5s;
    // position: absolute;
  }
  .slide-right-enter {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
  .slide-right-leave-active {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
  .slide-left-enter {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
  .slide-left-leave-active {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
</style>
