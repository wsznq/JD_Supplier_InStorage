webpackJsonp([20],{AZXw:function(t,e){},lZzm:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("Dd8w"),i=a.n(s),r=a("7t+N"),n=a.n(r),o=a("NYxO"),l=a("1h8J"),d=(a("o/zv"),i()({tableStyle:function(){return{width:"270px !important"}}},Object(o.b)({orderInfo:function(t){return t.mutaions.orderInfo}})),{data:function(){return{widths:"",tableHead:["生产单号","工厂型体","物料代码","物料名称","规格","颜色","材质","尺码","常用单位","订购数量","送货数","暂收数","入库数","不合格数","单价","金额","交货日期"],tableData:[["J1905887","DD182151G-1","090800275","DD182151g-13鞋桶成","123","黑色","皮革",["500","500","500","500","500","500","500","500","500"],"双","1500","1500","1500","1500","1500","1.5","8888","2019-8888"],["J1905887","DD182151G-1","090800275","DD182151g-13鞋桶成","123","黑色","皮革",["500","500","500","500","500","500","500","500","500"],"双","1500","1500","1500","1500","1500","1.5","8888","2019-8888"],["J1905887","DD182151G-1","090800275","DD182151g-13鞋桶成","123","黑色","皮革",["500","500","500","500","500","500","500","500","500"],"双","1500","1500","1500","1500","1500","1.5","8888","2019-8888"]],orderDetail:[],sizeList:[],isPeiMa:"否"}},computed:i()({tableStyle:function(){return{width:"270px !important"}}},Object(o.b)({orderInfo:function(t){return t.mutaions.orderInfo}})),components:{},mounted:function(){var t=this;console.log("orderInfo",this.orderInfo),this.widths=120*(this.tableHead.length-1)+150,Object(l.t)({CgOrderNo:this.orderInfo.ebeln}).then(function(e){console.log("---------------------"),console.log("order",e),console.log("---------------------"),""==e[0].FSizeArr?t.isPeiMa="否":(t.sizeList=e[0].FSizeArr.split(","),t.isPeiMa="是"),t.orderDetail=e,e.forEach(function(e,a){var s=[],i=function(a){t.sizeList.forEach(function(t,i){a===t&&s.push(e[a])})};for(var r in e)i(r);e.sizeList=s}),t.Total(),t.$nextTick(function(){t.init()})})},methods:{Total:function(){console.log("data",this.orderDetail);var t=[],e=0,a=0,s=0,i=0,r=0,n=0;this.orderDetail.forEach(function(o,l){0===l?(t=o.sizeList,e=parseFloat(o.FOrderQty),a=parseFloat(o.FSendQty),s=parseFloat(o.FTempReceiveQty),i=parseFloat(o.FInstockQty),r=parseFloat(o.FUnqualifiedQty),n=parseFloat(o.FAmount)):(console.log(a),o.sizeList.forEach(function(e,a){t[a]=parseFloat(t[a])+parseFloat(e)}),e+=parseFloat(o.FOrderQty),a+=parseFloat(o.FSendQty),s+=parseFloat(o.FTempReceiveQty),i+=parseFloat(o.FInstockQty),r+=parseFloat(o.FUnqualifiedQty),n+=parseFloat(o.FAmount))});var o={SCMONO:"合计",FProductName:"",FMaterailNumber:"",FMaterailName:"",FMaterailModel:"",FMaterailColor:"",FMaterial:"",sizeList:t,FUnitName:"",FOrderQty:e,FSendQty:a,FTempReceiveQty:s,FInstockQty:i,FUnqualifiedQty:r,FAuxPrice:"",FAmount:n,FFetchDate:""};this.orderDetail.push(o),console.log(a)},change:function(){},init:function(){var t=n()(window),e=n()(".t_r_content"),a=n()(".t_l_freeze"),s=a.find("table"),i=n()(".t_r_t table"),r=this;function o(){t.height();var s=40*(r.orderDetail.length<5?r.orderDetail.length:5);a.height(s),e.height(s)}o(),t.on("resize",o);var l=new IScroll(".t_r_content",{scrollX:!0,scrollY:!0,probeType:3});function d(){var t=this.y,e=this.x;s.css("transform","translate(0px, "+t+"px) translateZ(0px)"),i.css("transform","translate("+e+"px, 0px) translateZ(0px)")}e.on("touchmove mousewheel",function(t){t.preventDefault()}),l.on("scroll",d),l.on("scrollEnd",d)}}}),_={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"wrap orderInfo",attrs:{id:"wrap"}},[a("ul",[a("li",[a("div",{staticClass:"title"},[t._v("订单编号")]),t._v(" "),a("div",{staticClass:"name"},[t._v(t._s(t.orderInfo.ebeln))])]),t._v(" "),a("li",[a("div",{staticClass:"title"},[t._v("订单日期")]),t._v(" "),a("div",{staticClass:"name"},[t._v(t._s(t.orderInfo.eindt_qr))])]),t._v(" "),a("li",[a("div",{staticClass:"title"},[t._v("是否配码")]),t._v(" "),a("div",{staticClass:"name"},[t._v(t._s(t.isPeiMa))])])]),t._v(" "),a("div",{staticClass:"data-table mt20"},[a("div",{staticClass:"t_r"},[a("div",{staticClass:"t_r_t",style:"width: "+t.widths+"px"},[a("table",{style:"width: "+t.widths+"px"},[a("tbody",[a("tr",t._l(t.tableHead,function(e,s){return a("th",{key:s,style:"尺码"===e?"width: 400px !important":"width: 120px !important",attrs:{rowspan:"1"}},["尺码"!=e?a("span",[t._v(t._s(e))]):t._e(),t._v(" "),"尺码"==e?a("div",[t._v("尺码")]):t._e(),t._v(" "),"尺码"==e?a("div",{staticClass:"_size"},t._l(t.sizeList,function(e,s){return a("i",{key:s},[t._v(t._s(e))])}),0):t._e()])}),0)])])]),t._v(" "),a("div",{staticClass:"t_r_content"},[a("table",{style:"width: "+t.widths+"px"},[a("tbody",t._l(t.orderDetail,function(e,s){return a("tr",{key:s},[a("td",{attrs:{width:"120"}},[a("span",[t._v(" "+t._s(e.SCMONO))])]),t._v(" "),a("td",{attrs:{width:"120"}},[a("span",[t._v(" "+t._s(e.FProductName))])]),t._v(" "),a("td",{attrs:{width:"120"}},[a("span",[t._v(" "+t._s(e.FMaterailNumber))])]),t._v(" "),a("td",{attrs:{width:"120"}},[a("span",[t._v(" "+t._s(e.FMaterailName))])]),t._v(" "),a("td",{attrs:{width:"120"}},[a("span",[t._v(t._s(e.FMaterailModel))])]),t._v(" "),a("td",{attrs:{width:"120"}},[a("span",[t._v(" "+t._s(e.FMaterailColor))])]),t._v(" "),a("td",{attrs:{width:"120"}},[a("span",[t._v(t._s(e.FMaterial))])]),t._v(" "),a("td",{staticClass:"tdSize",attrs:{width:"400"}},t._l(e.sizeList,function(e,s){return a("i",{key:s,staticClass:"cell"},[t._v(t._s(e))])}),0),t._v(" "),a("td",{attrs:{width:"120"}},[a("span",[t._v(" "+t._s(e.FUnitName))])]),t._v(" "),a("td",{attrs:{width:"120"}},[a("span",[t._v(" "+t._s(e.FOrderQty))])]),t._v(" "),a("td",{attrs:{width:"120"}},[a("span",[t._v(t._s(e.FSendQty))])]),t._v(" "),a("td",{attrs:{width:"120"}},[a("span",[t._v(t._s(e.FTempReceiveQty))])]),t._v(" "),a("td",{attrs:{width:"120"}},[a("span",[t._v(t._s(e.FInstockQty))])]),t._v(" "),a("td",{attrs:{width:"120"}},[a("span",[t._v(t._s(e.FUnqualifiedQty))])]),t._v(" "),a("td",{attrs:{width:"120"}},[a("span",[t._v(t._s(e.FAuxPrice))])]),t._v(" "),a("td",{attrs:{width:"120"}},[a("span",[t._v(t._s(e.FAmount))])]),t._v(" "),a("td",{attrs:{width:"120"}},[a("span",[t._v(t._s(e.FFetchDate))])])])}),0)])])])])])},staticRenderFns:[]};var c=a("VU/8")(d,_,!1,function(t){a("AZXw")},"data-v-8cf81824",null);e.default=c.exports}});
//# sourceMappingURL=20.5f5ac273a4d538a18446.js.map