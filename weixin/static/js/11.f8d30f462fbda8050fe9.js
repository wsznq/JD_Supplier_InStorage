webpackJsonp([11],{"e+iX":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("7biW"),i=n("dJYW"),s=n("eSZc"),o=n("+Up5"),r=n.n(o),c={show:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};t=r()({destroyOnHide:!0,isOneInstance:!0},t),(c.datetime=new s.a(t)).show()},hide:function(){c.datetime&&c.datetime.hide()}},l={install:function(t){var e=t.extend(i.a),n=document.createElement("div");if("undefined"!=typeof document){var a=new e({el:n});a.$el.style.display="none",a.$el.className+=" vux-datetime-style-inject",document.body.appendChild(a.$el)}t.$vux?t.$vux.datetime=c:t.$vux={datetime:c},t.mixin({created:function(){this.$vux=t.$vux}})}},d=n("xd7I");d.a.use(l);i.a;d.a.use(l);var u={data:function(){return{show:!1,startDate:"",endDate:"",visibility:!1,visibility2:!1,widths:100,tableHead:["订单编号","订单日期","物料名称物料名称","币别","金额"]}},components:{Datetime:i.a},mounted:function(){this.widths=6*this.widths+"px"},methods:{showPlugin:function(){this.$vux.datetime.show({cancelText:"取消",confirmText:"确定",format:"YYYY-MM-DD HH",value:"2017-05-20 18",onConfirm:function(t){},onShow:function(){},onHide:function(){}})},onConfirm:function(){},log:function(){},popup:function(){alert("0")},change:function(){}}},v={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrap",attrs:{id:"wrap"}},[n("div",{staticClass:"searchBox"},[n("div",{staticClass:"title"},[t._v("日期范围")]),t._v(" "),n("div",{staticClass:"date"},[n("div",{staticClass:"choose"},[n("input",{attrs:{placeholder:"请选择开始时间",readonly:"readonly","uv-model":"startDate"},on:{click:t.showPlugin}})]),t._v(" "),n("span",[t._v("至")]),t._v(" "),n("div",{staticClass:"choose"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.endDate,expression:"endDate"}],attrs:{placeholder:"请选择结束时间",readonly:"readonly",unselectable:"on"},domProps:{value:t.endDate},on:{click:t.showPlugin,input:function(e){e.target.composing||(t.endDate=e.target.value)}}})])]),t._v(" "),n("div",{staticClass:"title"},[t._v("指令单号")]),t._v(" "),t._m(0),t._v(" "),n("div",{staticClass:"title"},[t._v("工厂型体")]),t._v(" "),t._m(1),t._v(" "),n("div",{staticClass:"searchButton"},[t._v("搜索")])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"number"},[e("input",{attrs:{type:"number",placeholder:"请输入指令单号"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"number"},[e("input",{attrs:{type:"text",placeholder:"请输入工厂型体"}})])}]};var h=n("C7Lr")(u,v,!1,function(t){n("wija")},"data-v-1d978135",null).exports,f=n("5u2O"),p=n.n(f),_=n("f4DY"),m=n("Q/W4"),w=n("C5VE"),x=n("uiKT"),b=(x.a,_.a,i.a,m.a,a.a,w.a,{data:function(){return{show:!1,startDate:"",endDate:"",visibility:!1,visibility2:!1,widths:100,tableHead:["订单编号","订单日期","物料名称物料名称","币别","金额"]}},directives:{TransferDom:x.a},components:{XTable:_.a,Datetime:i.a,Group:m.a,Search:a.a,Popup:w.a,orderSearch:h},mounted:function(){var t=this;this.widths=6*this.widths+"px",this.$nextTick(function(){t.init()})},methods:{log:function(){},popup:function(){alert("0")},toInfo:function(){this.$router.push({path:"/orderInfo"})},change:function(){},init:function(){var t=p()(window),e=p()(".t_r_content"),n=p()(".t_l_freeze"),a=n.find("table"),i=p()(".t_r_t table");function s(){var a=t.height()-90;n.height(a),e.height(a)}s(),t.on("resize",s);var o=new IScroll(".t_r_content",{scrollX:!0,scrollY:!0,probeType:3});function r(){var t=this.y,e=this.x;a.css("transform","translate(0px, "+t+"px) translateZ(0px)"),i.css("transform","translate("+e+"px, 0px) translateZ(0px)")}e.on("touchmove mousewheel",function(t){t.preventDefault()}),o.on("scroll",r),o.on("scrollEnd",r)}}}),y={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrap",attrs:{id:"wrap"}},[n("search",{nativeOn:{click:function(e){t.show=!0}}}),t._v(" "),n("div",{directives:[{name:"transfer-dom",rawName:"v-transfer-dom"}]},[n("popup",{attrs:{position:"top"},on:{"on-hide":function(e){return t.log("hide")},"on-show":function(e){return t.log("show")}},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[n("order-search")],1)],1),t._v(" "),n("div",{staticClass:"data-table"},[n("div",{staticClass:"t_r"},[n("div",{staticClass:"t_r_t"},[n("table",[n("tbody",[n("tr",t._l(t.tableHead,function(e,a){return n("th",{key:a},[t._v(t._s(e))])}),0)])])]),t._v(" "),n("div",{staticClass:"t_r_content"},[n("table",[n("tbody",t._l(30,function(e,a){return n("tr",{key:a,on:{click:t.toInfo}},[n("td",[t._v("4500049833")]),t._v(" "),n("td",[t._v("2019-4-9")]),t._v(" "),n("td",[t._v("中底XD9089-2X")]),t._v(" "),n("td",[t._v("人民币")]),t._v(" "),n("td",[t._v("3799")])])}),0)])])])])],1)},staticRenderFns:[]};var C=n("C7Lr")(b,y,!1,function(t){n("pxgh")},"data-v-2e1b4b34",null);e.default=C.exports},pxgh:function(t,e){},wija:function(t,e){}});
//# sourceMappingURL=11.f8d30f462fbda8050fe9.js.map