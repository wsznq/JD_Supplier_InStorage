webpackJsonp([6],{"+gvy":function(t,e){},"5TVZ":function(t,e){},mKP0:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i("5u2O"),a=i.n(s),n=i("7biW"),r=i("dJYW"),c=(r.a,{data:function(){return{show:!1,startDate:"",endDate:"",visibility:!1,visibility2:!1,widths:100,tableHead:["订单编号","订单日期","物料名称物料名称","币别","金额"]}},components:{Datetime:r.a},mounted:function(){this.widths=6*this.widths+"px"},methods:{log:function(){},popup:function(){alert("0")},change:function(){}}}),o={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"wrap",attrs:{id:"wrap"}},[i("datetime",{staticStyle:{display:"none"},attrs:{show:t.visibility},on:{"on-change":t.change,"update:show":function(e){t.visibility=e}},model:{value:t.startDate,callback:function(e){t.startDate=e},expression:"startDate"}}),t._v(" "),i("datetime",{staticStyle:{display:"none"},attrs:{show:t.visibility2},on:{"on-change":t.change,"update:show":function(e){t.visibility2=e}},model:{value:t.endDate,callback:function(e){t.endDate=e},expression:"endDate"}}),t._v(" "),i("div",{staticClass:"searchBox"},[i("div",{staticClass:"title"},[t._v("日期范围")]),t._v(" "),i("div",{staticClass:"date"},[i("div",{staticClass:"choose"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.startDate,expression:"startDate"}],attrs:{placeholder:"请选择开始时间",readonly:""},domProps:{value:t.startDate},on:{click:function(e){t.visibility=!0},input:function(e){e.target.composing||(t.startDate=e.target.value)}}})]),t._v(" "),i("span",[t._v("至")]),t._v(" "),i("div",{staticClass:"choose"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.endDate,expression:"endDate"}],attrs:{placeholder:"请选择结束时间",readonly:""},domProps:{value:t.endDate},on:{click:function(e){t.visibility2=!0},input:function(e){e.target.composing||(t.endDate=e.target.value)}}})])]),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),i("div",{staticClass:"searchButton"},[t._v("搜索")])])],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"number mt20"},[e("input",{attrs:{type:"number",placeholder:"指令输入"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"number mt20"},[e("input",{attrs:{type:"text",placeholder:"型体输入"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"number mt20"},[e("input",{attrs:{type:"text",placeholder:"通知单输入"}})])}]};var l=i("C7Lr")(c,o,!1,function(t){i("5TVZ")},"data-v-af0406da",null).exports,d=i("Q/W4"),v=i("GRuq"),u=i("C5VE"),h=i("uiKT"),_=(h.a,r.a,d.a,v.a,n.a,u.a,{data:function(){return{show:!1,isAll:!1,startDate:"",endDate:"",visibility:!1,visibility2:!1,widths:60,widths2:60,tableHead:["尺码","数量","已送货数量","欠数","本次送货数量"]}},directives:{TransferDom:h.a},components:{Datetime:r.a,Group:d.a,Icon:v.a,Search:n.a,receSearch:l,Popup:u.a},mounted:function(){var t=this;a()(".to").click(function(t){}),this.widths=a()(window).width()/5,this.widths2=a()(window).width(),this.$nextTick(function(){t.init()})},methods:{log:function(){},vueTouch:function(t){"INPUT"!==t.target.tagName&&this.$router.push({path:"/receivinfo"})},toInfo:function(t){},change:function(){},init:function(){var t=a()(window),e=a()(".t_r_content"),i=a()(".t_l_freeze"),s=i.find("table"),n=a()(".t_r_t table");function r(){t.height();i.height(400),e.height(400)}r(),t.on("resize",r);var c=new IScroll(".t_r_content",{scrollX:!0,scrollY:!0,probeType:3});function o(){var t=this.y,e=this.x;s.css("transform","translate(0px, "+t+"px) translateZ(0px)"),n.css("transform","translate("+e+"px, 0px) translateZ(0px)")}e.on("touchmove mousewheel",function(t){t.preventDefault()}),c.on("scroll",o),c.on("scrollEnd",o)}}}),p={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"wrap",attrs:{id:"wrap"}},[i("search",{nativeOn:{click:function(e){t.show=!0}}}),t._v(" "),i("div",{directives:[{name:"transfer-dom",rawName:"v-transfer-dom"}]},[i("popup",{attrs:{position:"top"},on:{"on-hide":function(e){return t.log("hide")},"on-show":function(e){return t.log("show")}},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[i("rece-search")],1)],1),t._v(" "),i("div",{staticClass:"funcList"},[i("ul",[i("li",[t._v("查看送货")]),t._v(" "),i("li",[t._v("查看退货")]),t._v(" "),i("li",[t._v("送货单详情")]),t._v(" "),i("li",[i("router-link",{attrs:{to:"/delivery"}},[t._v("生成送货单")])],1)])]),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),i("div",{staticClass:"data-table"},[i("div",{staticClass:"t_r"},[i("div",{staticClass:"t_r_t"},[i("table",{staticStyle:{width:"inherit"}},[i("tbody",[i("tr",[t._l(t.tableHead,function(e,s){return i("th",{key:s,style:0==s||1===s?"width:"+(t.widths-10)+"px":"width:"+(t.widths+10)+"px"},[t._v(t._s(e))])}),t._v(" "),i("th",{staticStyle:{width:"50px"},on:{click:function(e){t.isAll=!t.isAll}}},[t.isAll?i("icon",{staticStyle:{color:"#aa0000","font-size":"24px",margin:"0 auto"},attrs:{type:"success"}}):i("div",{staticClass:"select"})],1)],2)])])]),t._v(" "),i("div",{staticClass:"t_r_content"},[i("table",{staticStyle:{width:"inherit"}},[i("tbody",{directives:[{name:"tap",rawName:"v-tap",value:function(e){return t.vueTouch(e)},expression:"(e)=>vueTouch(e)"}]},t._l(30,function(e,s){return i("tr",{key:s,staticClass:"to",attrs:{id:s}},[i("td",{staticStyle:{width:"60px"}},[t._v("35")]),t._v(" "),i("td",{staticStyle:{width:"60px"}},[t._v("100")]),t._v(" "),i("td",[t._v("50")]),t._v(" "),i("td",[t._v("50")]),t._v(" "),t._m(2,!0),t._v(" "),i("td",{staticStyle:{width:"40px"}},[i("icon",{staticStyle:{color:"#aa0000","font-size":"24px"},attrs:{type:"success"}})],1)])}),0)])])])])],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"item-top mt20"},[e("div",{staticClass:"item"},[e("div",{staticClass:"item-left"},[this._v("指令： j190000001")]),this._v(" "),e("div",{staticClass:"item-right"},[this._v("型体：xb000001-b")])]),this._v(" "),e("div",{staticClass:"item mt20"},[this._v("收料通知单号：sl000000001")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"btm-item"},[e("div",{staticClass:"fixedItem"},[e("div",{staticClass:"btn-selected"},[this._v("代办事项")]),this._v(" "),e("div",[this._v("已办事项")]),this._v(" "),e("div",[this._v("全部")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",[e("input",{staticClass:"tr-input",staticStyle:{width:"40px",background:"white"},attrs:{type:"number"}})])}]};var f=i("C7Lr")(_,p,!1,function(t){i("+gvy")},"data-v-97d48ee0",null);e.default=f.exports}});
//# sourceMappingURL=6.bb664cd0d96189b230c4.js.map