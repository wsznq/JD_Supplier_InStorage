webpackJsonp([15],{"4Sfo":function(t,s,i){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e=i("5u2O"),a=i.n(e),n={data:function(){return{widths:"",tableHead:["采购单号","生产单号","工厂型体","物料代码","物料名称","尺码","数量","单价（不含税）","金额"],tableData:[["450004896","DD182151G-1","090800275","DD182151g-13鞋桶成","123",["500","500","500","500","500","500","500","500","500"],"皮革","双","1500"],["450004896","DD182151G-1","090800275","DD182151g-13鞋桶成","123",["500","500","500","500","500","500","500","500","500"],"皮革","双","1500"],["450004896","DD182151G-1","090800275","DD182151g-13鞋桶成","123",["500","500","500","500","500","500","500","500","500"],"皮革","双","1500"]]}},computed:{tableStyle:function(){return{width:"270px !important"}}},components:{},mounted:function(){var t=this;this.widths=120*(this.tableHead.length-1)+270,this.$nextTick(function(){t.init()})},methods:{change:function(){},init:function(){var t=a()(window),s=a()(".t_r_content"),i=a()(".t_l_freeze"),e=i.find("table"),n=a()(".t_r_t table");function l(){t.height();i.height(120),s.height(120)}l(),t.on("resize",l);var v=new IScroll(".t_r_content",{scrollX:!0,scrollY:!0,probeType:3});function _(){var t=this.y,s=this.x;e.css("transform","translate(0px, "+t+"px) translateZ(0px)"),n.css("transform","translate("+s+"px, 0px) translateZ(0px)")}s.on("touchmove mousewheel",function(t){t.preventDefault()}),v.on("scroll",_),v.on("scrollEnd",_)}}},l={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"wrap orderInfo",attrs:{id:"wrap"}},[t._m(0),t._v(" "),i("div",{staticClass:"data-table mt20"},[i("div",{staticClass:"t_r"},[i("div",{staticClass:"t_r_t",style:"width: "+t.widths+"px"},[i("table",{style:"width: "+t.widths+"px"},[i("tbody",[i("tr",t._l(t.tableHead,function(s,e){return i("th",{key:e,style:"尺码"===s?"width: 270px;":"",attrs:{rowspan:"1",colspan:"9"}},["尺码"!=s?i("span",[t._v(t._s(s))]):t._e(),t._v(" "),"尺码"==s?i("div",[t._v("尺码")]):t._e(),t._v(" "),"尺码"==s?i("div",{staticClass:"_size"},t._l(9,function(s,e){return i("span",{key:e},[t._v("35")])}),0):t._e()])}),0)])])]),t._v(" "),i("div",{staticClass:"t_r_content"},[i("table",{style:"width: "+t.widths+"px"},[i("tbody",t._l(t.tableData,function(s,e){return i("tr",{key:e},t._l(s,function(s,e){return i("td",{key:e,class:"string"!=typeof s?"tdSize":"",style:"string"!=typeof s?t.tableStyle:""},[t._l(s,function(e,a){return"string"!=typeof s?i("span",{key:a,staticClass:"cell"},[t._v(t._s(e))]):t._e()}),t._v(" "),"string"==typeof s?i("span",[t._v(" "+t._s(s))]):t._e()],2)}),0)}),0)])])])])])},staticRenderFns:[function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("ul",[i("li",[i("div",{staticClass:"title"},[t._v("订单编号")]),t._v(" "),i("div",{staticClass:"name"},[t._v("8888888")])]),t._v(" "),i("li",[i("div",{staticClass:"title"},[t._v("订单日期")]),t._v(" "),i("div",{staticClass:"name"},[t._v("2018-09-09")])]),t._v(" "),i("li",[i("div",{staticClass:"title"},[t._v("制单日期")]),t._v(" "),i("div",{staticClass:"name"},[t._v("2018-09-18")])]),t._v(" "),i("li",[i("div",{staticClass:"title"},[t._v("是否有配码")]),t._v(" "),i("div",{staticClass:"name"},[t._v("是")])]),t._v(" "),i("li",[i("div",{staticClass:"title"},[t._v("供应商名称")]),t._v(" "),i("div",{staticClass:"name"},[t._v("温州金卓鞋材有限公司")])]),t._v(" "),i("li",[i("div",{staticClass:"title"},[t._v("联系人")]),t._v(" "),i("div",{staticClass:"name"},[t._v("微微")])]),t._v(" "),i("li",[i("div",{staticClass:"title"},[t._v("使用币别")]),t._v(" "),i("div",{staticClass:"name"},[t._v("人民币")])]),t._v(" "),i("li",[i("div",{staticClass:"title"},[t._v("商标")]),t._v(" "),i("div",{staticClass:"name"},[t._v("金帝")])]),t._v(" "),i("li",[i("div",{staticClass:"title"},[t._v("税率")]),t._v(" "),i("div",{staticClass:"name"},[t._v("6%")])])])}]};var v=i("C7Lr")(n,l,!1,function(t){i("WsYA")},"data-v-5d291bed",null);s.default=v.exports},WsYA:function(t,s){}});
//# sourceMappingURL=15.12427e6cf3a2d4fbcb77.js.map