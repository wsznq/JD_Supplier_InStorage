webpackJsonp([7],{FxGV:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i("Xxa5"),n=i.n(s),a=i("exGp"),o=i.n(a),r={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"spinner"},[i("div",{staticClass:"spinner-container container1"},[i("div",{staticClass:"circle1"}),t._v(" "),i("div",{staticClass:"circle2"}),t._v(" "),i("div",{staticClass:"circle3"}),t._v(" "),i("div",{staticClass:"circle4"})]),t._v(" "),i("div",{staticClass:"spinner-container container2"},[i("div",{staticClass:"circle1"}),t._v(" "),i("div",{staticClass:"circle2"}),t._v(" "),i("div",{staticClass:"circle3"}),t._v(" "),i("div",{staticClass:"circle4"})]),t._v(" "),i("div",{staticClass:"spinner-container container3"},[i("div",{staticClass:"circle1"}),t._v(" "),i("div",{staticClass:"circle2"}),t._v(" "),i("div",{staticClass:"circle3"}),t._v(" "),i("div",{staticClass:"circle4"})])])}]};var c=i("VU/8")({data:function(){return{}},components:{},mounted:function(){},methods:{}},r,!1,function(t){i("eln0")},"data-v-6fed7a76",null).exports,l=(Number,Boolean,Boolean,Function,Function,Boolean,{props:{offset:{type:Number,default:40},enableInfinite:{type:Boolean,default:!0},enableRefresh:{type:Boolean,default:!0},onRefresh:{type:Function,default:void 0,required:!1},onInfinite:{type:Function,default:void 0,require:!1},hasData:{type:Boolean,default:!0}},components:{"v-loading":c},data:function(){return{top:0,state:0,startY:0,touching:!1,infiniteLoading:!1}},methods:{touchStart:function(t){this.startY=t.targetTouches[0].pageY,this.startScroll=this.$el.scrollTop||0,this.touching=!0},touchMove:function(t){if(this.enableRefresh&&!(this.$el.scrollTop>0)&&this.touching){var e=t.targetTouches[0].pageY-this.startY-this.startScroll;e>0&&t.preventDefault(),this.top=Math.pow(e,.8)+(2===this.state?this.offset:0),2!==this.state&&(this.top>=this.offset?this.state=1:this.state=0)}},touchEnd:function(t){if(this.enableRefresh){if(this.touching=!1,2===this.state)return this.state=2,void(this.top=this.offset);this.top>=this.offset?this.refresh():(this.state=0,this.top=0)}},refresh:function(){this.state=2,this.top=this.offset,this.onRefresh(this.refreshDone)},refreshDone:function(){this.state=0,this.top=0},infinite:function(){this.infiniteLoading=!0,this.onInfinite(this.infiniteDone)},infiniteDone:function(){this.infiniteLoading=!1},onScroll:function(t){if(this.enableInfinite&&!this.infiniteLoading){var e=this.$el.clientHeight;this.$el.querySelector(".inner").clientHeight-e-this.$el.scrollTop-(this.onRefresh?this.$el.querySelector(".pull-refresh").clientHeight:0)<this.$el.querySelector(".load-more").clientHeight&&this.infinite()}}}}),f={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"yo-scroll",class:{down:0===t.state,up:1==t.state,refresh:2===t.state,touch:t.touching},on:{touchstart:function(e){return t.touchStart(e)},touchmove:function(e){return t.touchMove(e)},touchend:function(e){return t.touchEnd(e)},scroll:function(e){(t.onInfinite||t.infiniteLoading)&&t.onScroll(e)}}},[i("section",{staticClass:"inner",style:{transform:"translate3d(0, "+t.top+"px, 0)"}},[i("header",{staticClass:"pull-refresh"},[t._t("pull-refresh",[i("span",{staticClass:"down-tip"},[t._v("下拉更新")]),t._v(" "),i("span",{staticClass:"up-tip"},[t._v("松开更新")]),t._v(" "),i("span",{staticClass:"refresh-tip"},[t._v("更新中")])])],2),t._v(" "),t._t("default"),t._v(" "),i("footer",{staticClass:"load-more"},[t._t("load-more",[t.hasData?i("v-loading"):i("span",[t._v("暂无数据")])])],2)],2)])},staticRenderFns:[]};var h=i("VU/8")(l,f,!1,function(t){i("SOPX")},null,null).exports,u=i("1h8J"),d=i("162o"),v={data:function(){return{isloading:!0,form:{page:1,rows:8,sidx:"CreateDate",sord:"desc"},list:[]}},components:{"v-scroll":h},mounted:function(){this.getNewsList()},methods:{toDetail:function(t){this.$router.push({path:"/newsInfo",query:{id:t.NewsId}})},getNewsList:function(){var t=this;return o()(n.a.mark(function e(){var i;return n.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,console.log(t.form),i=void 0,"news"!==t.$route.query.type){e.next=9;break}return e.next=6,Object(u.f)(t.form);case 6:i=e.sent,e.next=12;break;case 9:return e.next=11,Object(u.g)(t.form);case 11:i=e.sent;case 12:0===i.state&&(t.isloading=!1),t.list=t.list.concat(i.rows),1===t.form.page&&t.list.length<10&&(t.isloading=!1),e.next=20;break;case 17:e.prev=17,e.t0=e.catch(0),console.log(e.t0);case 20:case"end":return e.stop()}},e,t,[[0,17]])}))()},onRefresh:function(t){this.list=[],this.isloading=!0,this.form.page=1,this.getNewsList(),t()},onInfinite:function(t){var e=this;Object(d.setTimeout)(function(){e.form.page+=1,e.getNewsList()},2500),t()}}},p={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"wrap",attrs:{id:"wrap"}},[i("v-scroll",{attrs:{"on-refresh":t.onRefresh,"on-infinite":t.onInfinite,hasData:t.isloading}},[i("ul",t._l(t.list,function(e,s){return i("li",{key:s,on:{click:function(i){return t.toDetail(e)}}},[i("div",{staticClass:"title"},[t._v(t._s(e.FullHead))]),t._v(" "),i("div",{staticClass:"date"},[t._v(t._s(e.NewCreateDate))])])}),0)])],1)},staticRenderFns:[]};var _=i("VU/8")(v,p,!1,function(t){i("Zdvd")},"data-v-af55911e",null);e.default=_.exports},SOPX:function(t,e){},Zdvd:function(t,e){},eln0:function(t,e){}});
//# sourceMappingURL=7.faca1950006fbe885e5c.js.map