webpackJsonp([22],{"2M6p":function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=a("Xxa5"),n=a.n(i),e=a("exGp"),_=a.n(e),v=a("7t+N"),d=a.n(v),l=a("ignk"),r=a("UNGY"),o=a("rHil"),c=a("1h8J"),h=(l.a,r.a,o.a,{data:function(){return{isChange:!1,startDate:"",endDate:"",visibility:!1,visibility2:!1,widths:"",tableHead:["交货日期","物料编号","物料名称","规格型号","暂收数量","采购单行号","暂收单号","暂收单行号","生产单号","型体","分配型体","尺码","检验数量","合格数量","不合格数量","入库数量","备注（注明件数，箱容）","送货单号","送货单行号"],dataInfo:""}},components:{XTable:l.a,Datetime:r.a,Group:o.a},mounted:function(){console.log(this.tableHead.length),this.getInfo(),this.widths=120*this.tableHead.length+"px",console.log(d()(window).width())},methods:{getInfo:function(){var t=this;return _()(n.a.mark(function s(){var a;return n.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Object(c.n)({Type:"TempInstock",Zno:t.$route.query.Zno});case 2:a=s.sent,console.log(a),t.dataInfo=a,t.$nextTick(function(){t.init()});case 6:case"end":return s.stop()}},s,t)}))()},toInfo:function(){this.$router.push({path:"/orderInfo"})},change:function(){"850px"===this.widths?this.isChange=!0:(this.isChange=!1,this.widths="850px")},init:function(){var t=d()(window),s=d()(".t_r_content"),a=d()(".t_l_freeze"),i=a.find("table"),n=d()(".t_r_t table");function e(){t.height();a.height(320),s.height(320)}e(),t.on("resize",e);var _=new IScroll(".t_r_content",{scrollX:!0,scrollY:!0,probeType:3});function v(){var t=this.y,s=this.x;i.css("transform","translate(0px, "+t+"px) translateZ(0px)"),n.css("transform","translate("+s+"px, 0px) translateZ(0px)")}s.on("touchmove mousewheel",function(t){t.preventDefault()}),_.on("scroll",v),_.on("scrollEnd",v)}}}),p={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"wrap orderInfo",attrs:{id:"wrap"}},[a("ul",[a("li",[a("div",{staticClass:"title"},[t._v("组织")]),t._v(" "),a("div",{staticClass:"name"},[t._v(t._s(t.dataInfo.ZCOMPANYNAME))])]),t._v(" "),a("li",[a("div",{staticClass:"title"},[t._v("供应商")]),t._v(" "),a("div",{staticClass:"name"},[t._v(t._s(t.dataInfo.ZSUPPLIERNAME))])]),t._v(" "),a("li",[a("div",{staticClass:"title"},[t._v("合同编号")]),t._v(" "),a("div",{staticClass:"name"},[t._v(t._s(t.dataInfo.ZEBELN))])]),t._v(" "),a("li",[a("div",{staticClass:"title"},[t._v("制单日期")]),t._v(" "),a("div",{staticClass:"name"},[t._v(t._s(t.dataInfo.ZBILLDATE))])]),t._v(" "),a("li",[a("div",{staticClass:"title"},[t._v("制单人工号")]),t._v(" "),a("div",{staticClass:"name"},[t._v(t._s(t.dataInfo.ZBILLER))])]),t._v(" "),a("li",[a("div",{staticClass:"title"},[t._v("制单人名字")]),t._v(" "),a("div",{staticClass:"name"},[t._v(t._s(t.dataInfo.ZBILLERNAME))])]),t._v(" "),a("li",[a("div",{staticClass:"title"},[t._v("采购类型")]),t._v(" "),a("div",{staticClass:"name"},[t._v(t._s(t.dataInfo.ZBATXT))])]),t._v(" "),a("li",[a("div",{staticClass:"title"},[t._v("暂收单日期")]),t._v(" "),a("div",{staticClass:"name"},[t._v(t._s(t.dataInfo.ZTEMPREDATE))])])]),t._v(" "),a("div",{staticClass:"data-table mt20"},[a("div",{staticClass:"t_r"},[a("div",{staticClass:"t_r_t"},[a("table",{staticStyle:{width:"2160px"}},[a("tbody",[a("tr",t._l(t.tableHead,function(s,i){return a("th",{key:i,attrs:{rowspan:"1",colspan:9,width:"120"}},[a("span",[t._v(t._s(s))])])}),0)])])]),t._v(" "),a("div",{staticClass:"t_r_content"},[a("table",{staticStyle:{width:"2160px",background:"white"}},[a("tbody",t._l(t.dataInfo.Receipt,function(s,i){return a("tr",{key:i},[a("td",{attrs:{width:"120"}},[a("span",[t._v(" "+t._s(s.ZDELIVERYDATE))])]),t._v(" "),a("td",{attrs:{width:"120"}},[a("span",[t._v(" "+t._s(s.ZMATERIALCODE))])]),t._v(" "),a("td",{attrs:{width:"120"}},[a("span",[t._v(" "+t._s(s.ZMATERIALNAME))])]),t._v(" "),a("td",{attrs:{width:"120"}},[a("span",[t._v(t._s(s.ZSPECIFICATION))])]),t._v(" "),a("td",{attrs:{width:"120"}},[a("span",[t._v(t._s(s.ZTEMPREQTY))])]),t._v(" "),a("td",{attrs:{width:"120"}},[a("span",[t._v(t._s(s.ZEBELP))])]),t._v(" "),a("td",{attrs:{width:"120"}},[a("span",[t._v(t._s(t.dataInfo.ZTEMPRENO))])]),t._v(" "),a("td",{attrs:{width:"120"}},[a("span",[t._v(t._s(s.ZTEMPRESEQ))])]),t._v(" "),a("td",{attrs:{width:"120"}},[a("span",[t._v(t._s(s.ZMTONO))])]),t._v(" "),a("td",{attrs:{width:"120"}},[a("span",[t._v(t._s(s.ZMODEL))])]),t._v(" "),a("td",{attrs:{width:"120"}},[a("span",[t._v(t._s(s.DistributionType))])]),t._v(" "),a("td",{attrs:{width:"120"}},[a("span",[t._v(" "+t._s(s.ZSIZE))])]),t._v(" "),a("td",{attrs:{width:"120"}},[a("span",[t._v(t._s(s.ZCHECKQTY))])]),t._v(" "),a("td",{attrs:{width:"120"}},[a("span",[t._v(" "+t._s(s.ZQUALIQTY))])]),t._v(" "),a("td",{attrs:{width:"120"}},[a("span",[t._v(" "+t._s(s.ZUNQUALIQTY))])]),t._v(" "),a("td",{attrs:{width:"120"}},[a("span",[t._v(t._s(s.ZINSTOCKQTY))])]),t._v(" "),a("td",{attrs:{width:"120"}},[a("span",[t._v(t._s(s.ZREMARK))])]),t._v(" "),a("td",{attrs:{width:"120"}},[a("span",[t._v(t._s(t.dataInfo.ZDELINO))])]),t._v(" "),a("td",{attrs:{width:"120"}},[a("span",[t._v(t._s(s.ZDELIISEQ))])])])}),0)])])])]),t._v(" "),a("ul",{staticClass:"mt20"},[a("li",[a("div",{staticClass:"title"},[t._v("审核人")]),t._v(" "),a("div",{staticClass:"name"},[t._v(t._s(t.dataInfo.ZAUDITOR))])]),t._v(" "),a("li",[a("div",{staticClass:"title"},[t._v("审核日期")]),t._v(" "),a("div",{staticClass:"name"},[t._v(t._s(t.dataInfo.ZAUDITDATE))])]),t._v(" "),a("li",[a("div",{staticClass:"title"},[t._v("审核时间")]),t._v(" "),a("div",{staticClass:"name"},[t._v(t._s(t.dataInfo.ZAUDITTIME))])])])])},staticRenderFns:[]};var f=a("VU/8")(h,p,!1,function(t){a("A24h")},"data-v-5ba5d0ae",null);s.default=f.exports},A24h:function(t,s){}});
//# sourceMappingURL=22.5737d5db53c4208da559.js.map