webpackJsonp([14],{"0X+U":function(t,e){},uHI0:function(t,e){},yQJJ:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=i("Dd8w"),s=i.n(o),a=i("7biW"),r=i("Xxa5"),n=i.n(r),c=i("exGp"),l=i.n(c),d=i("7Ah8"),p=i("UNGY"),u=i("NYxO"),_=i("1h8J"),v=new Date,h=(v.getFullYear(),v.getMonth()+1<10?v.getMonth():v.getMonth(),v.getDate()<10?v.getDate():v.getDate(),s()({},Object(u.b)({supplierInfo:function(t){return t.mutaions.suplierinfo},procheckinfo:function(t){return t.mutaions.procheckinfo}})),p.a,d.a,new Date),m=h.getFullYear()+"-"+(h.getMonth()+1<10?"0"+(h.getMonth()+1):h.getMonth()+1)+"-"+(h.getDate()<10?"0"+h.getDate():h.getDate()),f={data:function(){return{show:!1,startDate:this.getSSionStorage("productcheck")?JSON.parse(this.getSSionStorage("productcheck")).split(",")[0]:m,endDate:this.getSSionStorage("productcheck")?JSON.parse(this.getSSionStorage("productcheck")).split(",")[1]:m,form:{I_DATEF:m,I_DATET:m,I_ZZGCXT:"",I_VBELN:"",I_MATNR:"",I_LIFNR:"",I_ZCHECKBNO:"",I_ZTEMPRENO:"",I_ZTYPE:"",I_ZBILLER:"",I_EBELN:"",I_EBELP:"",I_ETENR:"",I_ZDELIADDRESS:"",I_ZBILLDATE_TEMPRE:"",I_ZCALLER:"OUT",I_ROLEPER:"",I_WERKS:""},sorter:"不合格数量",sorterType:[this.getSSionStorage("check_sorter")?this.getSSionStorage("check_sorter").replace(/\"/g,""):"不合格数量"],sorter_list:[["不合格数量","合格数量","全部"]],visibility:!1,visibility2:!1,widths:100,tableHead:["订单编号","订单日期","物料名称物料名称","币别","金额"]}},computed:s()({},Object(u.b)({supplierInfo:function(t){return t.mutaions.suplierinfo},procheckinfo:function(t){return t.mutaions.procheckinfo}})),components:{Datetime:p.a,PopupPicker:d.a},mounted:function(){this.getSSionStorage("productcheck")&&(this.form.I_DATEF=JSON.parse(this.getSSionStorage("productcheck")).split(",")[0],this.form.I_DATET=JSON.parse(this.getSSionStorage("productcheck")).split(",")[1]),this.form.I_LIFNR=this.supplierInfo.supplierInfo.FNumber;var t=this.getSSionStorage("check_sorter")?this.getSSionStorage("check_sorter").replace(/\"/g,""):"不合格数量";this.form.I_ZTYPE="不合格数量"===t?"01":"合格数量"===t?"02":"",this.widths=6*this.widths+"px",void 0!=this.procheckinfo&&""!=this.procheckinfo&&(this.form.I_DATEF="",this.form.I_DATET="",this.form.I_EBELN=this.procheckinfo.ebeln,this.form.I_EBELP=this.procheckinfo.ebelp,this.form.I_ETENR=this.procheckinfo.etenr,this.form.I_ZTYPE="01",this.setSSionStorage("check_sorter","不合格数量")),this.getList()},methods:{search:function(){var t=this;return l()(n.a.mark(function e(){return n.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t.$store.commit("SAVE_PROCHECKINFO",""),t.form.I_EBELN="",t.form.I_EBELP="",t.form.I_ETENR="",t.getList();case 5:case"end":return e.stop()}},e,t)}))()},getList:function(){var t=this;return l()(n.a.mark(function e(){var i;return n.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t.form),t.recordSearch(),e.prev=2,t.$store.commit("updateLoadingStatus",{isLoading:!0}),e.next=6,Object(_.r)(t.form);case 6:i=e.sent,t.$store.commit("SET_CHECKLIST",i),t.$nextTick(function(){t.$emit("init2")}),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(2),t.$store.commit("SET_CHECKLIST",[]),t.$store.commit("updateLoadingStatus",{isLoading:!1});case 15:return e.prev=15,t.$emit("close"),t.$store.commit("updateLoadingStatus",{isLoading:!1}),e.finish(15);case 19:case"end":return e.stop()}},e,t,[[2,11,15,19]])}))()},recordSearch:function(){this.setSSionStorage("productcheck",this.form.I_DATEF+","+this.form.I_DATET)},log:function(){},popup:function(){},change:function(){},changeSorter:function(t){this.setSSionStorage("check_sorter",""+t[0]);var e=t[0];this.form.I_ZTYPE="不合格数量"===e?"01":"合格数量"===e?"02":""}}},g={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"wrap",attrs:{id:"wrap"}},[i("datetime",{staticStyle:{display:"none"},attrs:{show:t.visibility},on:{"on-change":function(e){t.form.I_DATEF=t.startDate},"update:show":function(e){t.visibility=e}},model:{value:t.startDate,callback:function(e){t.startDate=e},expression:"startDate"}}),t._v(" "),i("datetime",{staticStyle:{display:"none"},attrs:{show:t.visibility2},on:{"on-change":function(e){t.form.I_DATET=t.endDate},"update:show":function(e){t.visibility2=e}},model:{value:t.endDate,callback:function(e){t.endDate=e},expression:"endDate"}}),t._v(" "),i("div",{staticClass:"searchBox"},[i("div",{staticClass:"title"},[t._v("日期范围")]),t._v(" "),i("div",{staticClass:"date"},[i("div",{staticClass:"choose"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.startDate,expression:"startDate"}],attrs:{placeholder:"请选择开始时间",readonly:""},domProps:{value:t.startDate},on:{click:function(e){t.visibility=!0},input:function(e){e.target.composing||(t.startDate=e.target.value)}}})]),t._v(" "),i("span",[t._v("至")]),t._v(" "),i("div",{staticClass:"choose"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.endDate,expression:"endDate"}],attrs:{placeholder:"请选择结束时间",readonly:""},domProps:{value:t.endDate},on:{click:function(e){t.visibility2=!0},input:function(e){e.target.composing||(t.endDate=e.target.value)}}})])]),t._v(" "),i("div",{staticClass:"title",staticStyle:{"margin-top":"5px"}},[t._v("指令单号")]),t._v(" "),i("div",{staticClass:"number"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.form.I_VBELN,expression:"form.I_VBELN"}],attrs:{type:"number",placeholder:"请输入指令单号"},domProps:{value:t.form.I_VBELN},on:{input:function(e){e.target.composing||t.$set(t.form,"I_VBELN",e.target.value)}}})]),t._v(" "),i("div",{staticClass:"title",staticStyle:{"margin-top":"5px"}},[t._v("型体")]),t._v(" "),i("div",{staticClass:"number"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.form.I_ZZGCXT,expression:"form.I_ZZGCXT"}],attrs:{type:"text",placeholder:"请输入型体"},domProps:{value:t.form.I_ZZGCXT},on:{input:function(e){e.target.composing||t.$set(t.form,"I_ZZGCXT",e.target.value)}}})]),t._v(" "),i("div",{staticClass:"title",staticStyle:{"margin-top":"5px"}},[t._v("物料代码")]),t._v(" "),i("div",{staticClass:"number"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.form.I_MATNR,expression:"form.I_MATNR"}],attrs:{type:"text",placeholder:"请输入物料代码"},domProps:{value:t.form.I_MATNR},on:{input:function(e){e.target.composing||t.$set(t.form,"I_MATNR",e.target.value)}}})]),t._v(" "),i("div",{staticClass:"title",staticStyle:{"margin-top":"5px"}},[t._v("品检单号")]),t._v(" "),i("div",{staticClass:"number"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.form.I_ZCHECKBNO,expression:"form.I_ZCHECKBNO"}],attrs:{type:"text",placeholder:"请输入品检单号"},domProps:{value:t.form.I_ZCHECKBNO},on:{input:function(e){e.target.composing||t.$set(t.form,"I_ZCHECKBNO",e.target.value)}}})]),t._v(" "),i("div",{staticClass:"title",staticStyle:{"margin-top":"5px"}},[t._v("暂收单号")]),t._v(" "),i("div",{staticClass:"number"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.form.I_ZTEMPRENO,expression:"form.I_ZTEMPRENO"}],attrs:{type:"text",placeholder:"请输入暂收单号"},domProps:{value:t.form.I_ZTEMPRENO},on:{input:function(e){e.target.composing||t.$set(t.form,"I_ZTEMPRENO",e.target.value)}}})]),t._v(" "),i("div",{staticClass:"title",staticStyle:{"margin-top":"5px"}},[t._v("工厂代码")]),t._v(" "),i("div",{staticClass:"number"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.form.I_WERKS,expression:"form.I_WERKS"}],attrs:{type:"text",placeholder:"请输入工厂代码"},domProps:{value:t.form.I_WERKS},on:{input:function(e){e.target.composing||t.$set(t.form,"I_WERKS",e.target.value)}}})]),t._v(" "),i("div",{staticClass:"title",staticStyle:{"margin-top":"5px"}},[t._v("展示方式")]),t._v(" "),i("div",{staticClass:"number"},[i("popup-picker",{staticStyle:{width:"99%","align-items":"center","line-height":"30px"},attrs:{"popup-style":{"z-index":"999"},data:t.sorter_list,placeholder:"请选择展示方式"},on:{"on-change":t.changeSorter},model:{value:t.sorterType,callback:function(e){t.sorterType=e},expression:"sorterType"}})],1),t._v(" "),i("div",{staticClass:"searchButton",on:{click:t.search}},[t._v("搜索")])])],1)},staticRenderFns:[]};var S=i("VU/8")(f,g,!1,function(t){i("uHI0")},"data-v-f07d3950",null).exports,E=i("7t+N"),I=i.n(E),w=i("ignk"),T=i("rHil"),x=i("HD9R"),C=i("63CM"),b=i("162o"),N=(s()({},Object(u.b)({checkList:function(t){return t.mutaions.checklist}})),C.a,w.a,p.a,T.a,a.a,x.a,{data:function(){return{show:!1,startDate:"",endDate:"",visibility:!1,visibility2:!1,widths:120,tableHead:["组织","工厂","检验单号","采购订单","采购行项目","采购计划行","采购类型","生产单号","型体","分配型体","物料代码","尺码","常用单位","检验数量","抽检数量","合格数量","不合格数量","短码数量","不合格原因","备注","制单人","制单日期","送货地点"]}},computed:s()({},Object(u.b)({checkList:function(t){return t.mutaions.checklist}})),directives:{TransferDom:C.a},components:{XTable:w.a,Datetime:p.a,Group:T.a,Search:a.a,Popup:x.a,orderSearch:S},mounted:function(){console.log(this.$store),this.widths=this.tableHead.length*this.widths+"px",console.log(I()(window).width());var t=this;Object(b.setTimeout)(function(){console.log(t.checkList)},3e3)},methods:{vueTouch:function(t,e){console.log(e)},close:function(){this.show=!1},getOrderList:function(t){this.orderList=t,console.log(t)},log:function(){},popup:function(){alert("0")},toInfo:function(){this.$router.push({path:"/orderInfo"})},change:function(){},init:function(){var t=I()(window),e=I()(".t_r_content"),i=I()(".t_l_freeze"),o=i.find("table"),s=I()(".t_r_t table");function a(){var o=t.height()-90;i.height(o),e.height(o)}a(),t.on("resize",a);var r=new IScroll(".t_r_content",{scrollX:!0,scrollY:!0,probeType:3});function n(){var t=this.y,e=this.x;o.css("transform","translate(0px, "+t+"px) translateZ(0px)"),s.css("transform","translate("+e+"px, 0px) translateZ(0px)")}e.on("touchmove mousewheel",function(t){t.preventDefault()}),r.on("scroll",n),r.on("scrollEnd",n)}}}),L={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"wrap",attrs:{id:"wrap"}},[i("search",{nativeOn:{click:function(e){t.show=!0}}}),t._v(" "),i("div",{directives:[{name:"transfer-dom",rawName:"v-transfer-dom"}]},[i("popup",{attrs:{position:"top"},on:{"on-hide":function(e){return t.log("hide")},"on-show":function(e){return t.log("show")}},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[i("order-search",{on:{getOrderList:t.getOrderList,close:t.close,init2:t.init}})],1)],1),t._v(" "),i("div",{staticClass:"data-table"},[i("div",{staticClass:"t_r"},[i("div",{staticClass:"t_r_t"},[i("table",{staticStyle:{width:"2400px"}},[i("tbody",[i("tr",t._l(t.tableHead,function(e,o){return i("th",{key:o,style:"组织"===e||"采购类型"===e||"尺码"===e||"常用单位"===e||"制单人"===e?"width: 50px !important;":"width: 120px !important",attrs:{id:"tableHead"+o}},[t._v(t._s(e))])}),0)])])]),t._v(" "),i("div",{staticClass:"t_r_content"},[i("table",{staticStyle:{width:"2400px"}},[i("tbody",t._l(t.checkList,function(e,o){return i("tr",{directives:[{name:"tap",rawName:"v-tap",value:function(e){return t.vueTouch(e,o)},expression:"(e)=>vueTouch(e, index)"}],key:o,staticClass:"tablerow",attrs:{id:o}},[i("td",{staticStyle:{width:"50px !important"}},[t._v(t._s(e.BUKRS))]),t._v(" "),i("td",{attrs:{width:"120"}},[t._v(t._s(e.WERKS))]),t._v(" "),i("td",{attrs:{width:"120"}},[t._v(t._s(e.ZCHECKBNO))]),t._v(" "),i("td",{attrs:{width:"120"}},[t._v(t._s(e.EBELN))]),t._v(" "),i("td",{attrs:{width:"120"}},[t._v(t._s(e.EBELP))]),t._v(" "),i("td",{attrs:{width:"120"}},[t._v(t._s(e.ETENR))]),t._v(" "),i("td",{staticStyle:{width:"50px !important"}},[t._v(t._s(e.BSART))]),t._v(" "),i("td",{attrs:{width:"120"}},[t._v(t._s(e.VBELN))]),t._v(" "),i("td",{attrs:{width:"120"}},[t._v(t._s(e.ZZGCXT))]),t._v(" "),i("td",{attrs:{width:"120"}},[t._v(t._s(e.ZXT))]),t._v(" "),i("td",{attrs:{width:"120"}},[t._v(t._s(e.MATNR))]),t._v(" "),i("td",{staticStyle:{width:"50px !important"}},[t._v(t._s(e.SIZE1))]),t._v(" "),i("td",{staticStyle:{width:"50px !important"}},[t._v(t._s(e.ZCOMMUNIT))]),t._v(" "),i("td",{attrs:{width:"120"}},[t._v(t._s(e.ZCHECKQTY))]),t._v(" "),i("td",{attrs:{width:"120"}},[t._v(t._s(e.ZSCALEQTY))]),t._v(" "),i("td",{attrs:{width:"120"}},[t._v(t._s(e.ZQUALIQTY))]),t._v(" "),i("td",{attrs:{width:"120"}},[t._v(t._s(e.ZUNQUALIQTY))]),t._v(" "),i("td",{attrs:{width:"120"}},[t._v(t._s(e.ZSHORTCQTY))]),t._v(" "),i("td",{staticStyle:{width:"120px !important"}},[t._v(t._s(e.ZUNQUALITEXT))]),t._v(" "),i("td",{staticStyle:{width:"120px !important","word-break":"break-all"}},[t._v(t._s(e.ZREMARK))]),t._v(" "),i("td",{staticStyle:{width:"50px !important"}},[t._v(t._s(e.ZBILLER))]),t._v(" "),i("td",{attrs:{width:"120"}},[t._v(t._s(e.ZBILLDATE)+" "+t._s(e.ZBILLTIME))]),t._v(" "),i("td",{attrs:{width:"120"}},[t._v(t._s(e.ZDELIADDRESS))])])}),0)])])])])],1)},staticRenderFns:[]};var y=i("VU/8")(N,L,!1,function(t){i("0X+U")},"data-v-feb676a8",null);e.default=y.exports}});
//# sourceMappingURL=14.a85310ab561d9b7b16ec.js.map