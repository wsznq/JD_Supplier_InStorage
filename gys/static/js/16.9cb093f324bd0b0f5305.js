webpackJsonp([16],{"9duH":function(t,e){},QWMn:function(t,e){},mKP0:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i("mvHQ"),a=i.n(s),r=i("Dd8w"),o=i.n(r),n=i("7t+N"),l=i.n(n),c=i("7biW"),v=i("Xxa5"),d=i.n(v),h=i("exGp"),u=i.n(h),p=i("7Ah8"),_=i("UNGY"),T=i("NYxO"),f=i("1h8J"),L=new Date;L.setDate(L.getDate()+3);var m=new Date;m.setMonth(m.getMonth()),0===m.getMonth()&&m.setMonth(m.getMonth()+1);m.getFullYear(),m.getMonth(),m.getMonth(),m.getDate(),m.getDate(),L.getFullYear(),L.getMonth(),L.getMonth(),L.getDate(),L.getDate(),o()({},Object(T.b)({supplierInfo:function(t){return t.mutaions.suplierinfo}})),_.a,p.a;var E=new Date;E.setDate(E.getDate()+3);var Z=new Date;Z.setMonth(Z.getMonth()),0===Z.getMonth()&&Z.setMonth(Z.getMonth()+1);var S=Z.getFullYear()+"-"+(Z.getMonth()<10?"0"+Z.getMonth():Z.getMonth())+"-"+(Z.getDate()<10?"0"+Z.getDate():Z.getDate()),g=E.getFullYear()+"-"+(E.getMonth()+1<10?"0"+(E.getMonth()+1):E.getMonth()+1)+"-"+(E.getDate()<10?"0"+E.getDate():E.getDate()),y={data:function(){return{show:!1,form:{I_DATEF:"20190325",I_DATET:"20190513",I_ZZGCXT:"",I_VBELN:"",I_LIFNR:"",I_SIZE1:"",I_ZTYPE:"01",I_EBELN:"",I_MATNR:"",I_ZQY:"",I_WERKS:"",I_SORT:"采购订单"},sorter:"采购订单",sorterType:[this.getSSionStorage("sorter")?this.getSSionStorage("sorter").replace(/\"/g,""):"采购订单"],sorter_list:[["采购订单","物料代码","物料综合"]],startDate:this.getSSionStorage("receiving")?JSON.parse(this.getSSionStorage("receiving")).split(",")[0]:S,endDate:this.getSSionStorage("receiving")?JSON.parse(this.getSSionStorage("receiving")).split(",")[1]:g,visibility:!1,visibility2:!1,widths:100,tableHead:["订单编号","订单日期","物料名称","币别","金额"],infos:""}},computed:o()({},Object(T.b)({supplierInfo:function(t){return t.mutaions.suplierinfo}})),components:{Datetime:_.a,PopupPicker:p.a},mounted:function(){this.change(),this.form.I_LIFNR=this.supplierInfo.supplierInfo.FNumber,this.form.I_SORT=this.getSSionStorage("sorter")?this.getSSionStorage("sorter").replace(/\"/g,""):"采购订单",this.getList(),this.widths=6*this.widths+"px"},methods:{getList:function(t){var e=this;return u()(d.a.mark(function i(){var s;return d.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return e.$store.commit("SET_DELIVERY",[]),t&&(e.form.I_ZTYPE=t),e.recordSearch(),i.prev=3,e.$store.commit("updateLoadingStatus",{isLoading:!0}),i.next=7,Object(f.q)(e.form);case 7:s=i.sent,e.$store.commit("SET_DELIVERY",s),i.next=13;break;case 11:i.prev=11,i.t0=i.catch(3);case 13:return i.prev=13,e.$emit("close"),e.$store.commit("updateLoadingStatus",{isLoading:!1}),i.finish(13);case 17:case"end":return i.stop()}},i,e,[[3,11,13,17]])}))()},recordSearch:function(){this.setSSionStorage("receiving",this.startDate+","+this.endDate)},log:function(){},popup:function(){alert("0")},change:function(){var t=new RegExp("-","g");this.form.I_DATEF=this.startDate.replace(t,""),this.form.I_DATET=this.endDate.replace(t,"")},changeSorter:function(t){this.setSSionStorage("sorter",""+t[0]),this.form.I_SORT=t[0]}}},I={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"wrap",attrs:{id:"wrap"}},[i("datetime",{staticStyle:{display:"none"},attrs:{show:t.visibility},on:{"on-change":t.change,"update:show":function(e){t.visibility=e}},model:{value:t.startDate,callback:function(e){t.startDate=e},expression:"startDate"}}),t._v(" "),i("datetime",{staticStyle:{display:"none"},attrs:{show:t.visibility2},on:{"on-change":t.change,"update:show":function(e){t.visibility2=e}},model:{value:t.endDate,callback:function(e){t.endDate=e},expression:"endDate"}}),t._v(" "),i("div",{staticClass:"searchBox"},[i("div",{staticClass:"title"},[t._v("交货日期范围")]),t._v(" "),i("div",{staticClass:"date"},[i("div",{staticClass:"choose"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.startDate,expression:"startDate"}],attrs:{placeholder:"请选择开始时间",readonly:""},domProps:{value:t.startDate},on:{click:function(e){t.visibility=!0},input:function(e){e.target.composing||(t.startDate=e.target.value)}}})]),t._v(" "),i("span",[t._v("至")]),t._v(" "),i("div",{staticClass:"choose"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.endDate,expression:"endDate"}],attrs:{placeholder:"请选择结束时间",readonly:""},domProps:{value:t.endDate},on:{click:function(e){t.visibility2=!0},input:function(e){e.target.composing||(t.endDate=e.target.value)}}})])]),t._v(" "),i("div",{staticClass:"title",staticStyle:{"margin-top":"5px"}},[t._v("指令单号")]),t._v(" "),i("div",{staticClass:"number"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.form.I_VBELN,expression:"form.I_VBELN"}],attrs:{type:"text",placeholder:"指令输入"},domProps:{value:t.form.I_VBELN},on:{input:function(e){e.target.composing||t.$set(t.form,"I_VBELN",e.target.value)}}})]),t._v(" "),i("div",{staticClass:"title",staticStyle:{"margin-top":"5px"}},[t._v("采购单号")]),t._v(" "),i("div",{staticClass:"number"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.form.I_EBELN,expression:"form.I_EBELN"}],attrs:{type:"text",placeholder:"采购单号输入"},domProps:{value:t.form.I_EBELN},on:{input:function(e){e.target.composing||t.$set(t.form,"I_EBELN",e.target.value)}}})]),t._v(" "),i("div",{staticClass:"title",staticStyle:{"margin-top":"5px"}},[t._v("物料代码")]),t._v(" "),i("div",{staticClass:"number"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.form.I_MATNR,expression:"form.I_MATNR"}],attrs:{type:"text",placeholder:"物料代码输入"},domProps:{value:t.form.I_MATNR},on:{input:function(e){e.target.composing||t.$set(t.form,"I_MATNR",e.target.value)}}})]),t._v(" "),i("div",{staticClass:"title",staticStyle:{"margin-top":"5px"}},[t._v("送货地点")]),t._v(" "),i("div",{staticClass:"number"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.form.I_ZQY,expression:"form.I_ZQY"}],attrs:{type:"text",placeholder:"送货地点输入"},domProps:{value:t.form.I_ZQY},on:{input:function(e){e.target.composing||t.$set(t.form,"I_ZQY",e.target.value)}}})]),t._v(" "),i("div",{staticClass:"title",staticStyle:{"margin-top":"5px"}},[t._v("工厂代码")]),t._v(" "),i("div",{staticClass:"number"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.form.I_WERKS,expression:"form.I_WERKS"}],attrs:{type:"text",placeholder:"工厂代码输入"},domProps:{value:t.form.I_WERKS},on:{input:function(e){e.target.composing||t.$set(t.form,"I_WERKS",e.target.value)}}})]),t._v(" "),i("div",{staticClass:"title",staticStyle:{"margin-top":"5px"}},[t._v("展示方式")]),t._v(" "),i("div",{staticClass:"number"},[i("popup-picker",{staticStyle:{width:"99%","align-items":"center","line-height":"30px"},attrs:{"popup-style":{"z-index":"999"},data:t.sorter_list,placeholder:"请选择展示方式"},on:{"on-change":t.changeSorter},model:{value:t.sorterType,callback:function(e){t.sorterType=e},expression:"sorterType"}})],1),t._v(" "),i("div",{staticClass:"searchButton",on:{click:function(e){return t.getList()}}},[t._v("搜索")])])],1)},staticRenderFns:[]};var x=i("VU/8")(y,I,!1,function(t){i("QWMn")},"data-v-38304bf0",null).exports,M=i("rHil"),D=i("oWtu"),C=i("HD9R"),w=i("63CM"),N=i("pDNl"),b=(i("o/zv"),w.a,o()({},Object(T.b)({deliveryList:function(t){return t.user.delivery}})),_.a,M.a,D.a,c.a,C.a,N.a,{data:function(){return{I_ZTYPE:"01",row:{target:{cellIndex:1}},aa:"",show:!1,isAll:!1,startDate:"",endDate:"",visibility:!1,visibility2:!1,widths:60,widths2:60,tableHead:["尺码","数量","已送货数量","欠数","不合格数量","本次送货数量","分配型体","库位","备注"],firstChoose:"",deliveryList2:[],liIndex:"",index:""}},directives:{TransferDom:w.a},computed:o()({},Object(T.b)({deliveryList:function(t){return t.user.delivery}})),components:{Datetime:_.a,Group:M.a,Icon:D.a,Search:c.a,receSearch:x,Popup:C.a,XInput:N.a},mounted:function(){this.widths=l()(window).width()/5},watch:{deliveryList:function(t){this.deliveryList2=JSON.parse(a()(t));for(var e=0;e<this.deliveryList2.length;e++){this.$set(this.deliveryList2[e],"ZREMARK",""),this.$set(this.deliveryList2[e],"isAll",!1);for(var i=0,s=0,r=0,o=0,n=0,l=0;l<this.deliveryList2[e].ZCGSLTZD_ITEM.length;l++)this.$set(this.deliveryList2[e].ZCGSLTZD_ITEM[l],"status",!1),this.$set(this.deliveryList2[e].ZCGSLTZD_ITEM[l],"ZDELIQTY",this.deliveryList2[e].ZCGSLTZD_ITEM[l].WK_NUM),i+=parseFloat(this.deliveryList2[e].ZCGSLTZD_ITEM[l].MENGE),s+=parseFloat(this.deliveryList2[e].ZCGSLTZD_ITEM[l].YK_NUM),r+=parseFloat(this.deliveryList2[e].ZCGSLTZD_ITEM[l].WK_NUM),o+=parseFloat(this.deliveryList2[e].ZCGSLTZD_ITEM[l].ZDELIQTY),n+=parseFloat(this.deliveryList2[e].ZCGSLTZD_ITEM[l].NO_EINME);this.deliveryList2[e].ZCGSLTZD_ITEM.push({SIZE1:"合计",MENGE:parseFloat(i).toFixed(3),YK_NUM:parseFloat(s).toFixed(3),WK_NUM:parseFloat(r).toFixed(3),ZDELIQTY:parseFloat(o).toFixed(3),NO_EINME:parseFloat(n).toFixed(3)}),this.$set(this.deliveryList2[e],"PUTSUM",parseFloat(r).toFixed(3))}}},methods:{getSearch:function(t){this.I_ZTYPE=t,this.$refs.search.getList(t)},toList:function(){this.$router.push({path:"/deliveryList"})},allSelect:function(t){this.$set(this.deliveryList2[t],"isAll",!this.deliveryList2[t].isAll);for(var e=0;e<this.deliveryList2[t].ZCGSLTZD_ITEM.length;e++)this.deliveryList2[t].isAll?(this.firstChoose||0===this.firstChoose||(this.firstChoose=t),this.deliveryList2[t].ZQY===this.deliveryList2[this.firstChoose].ZQY&&this.deliveryList2[t].WERKS===this.deliveryList2[this.firstChoose].WERKS?parseFloat(this.deliveryList2[t].ZCGSLTZD_ITEM[e].ZDELIQTY)>0&&this.$set(this.deliveryList2[t].ZCGSLTZD_ITEM[e],"status",!0):this.$vux.toast.text("选择有误：不同厂区不同工厂不能合并开单")):this.$set(this.deliveryList2[t].ZCGSLTZD_ITEM[e],"status",!1);var i=!1;this.deliveryList2.forEach(function(t,e){t.ZCGSLTZD_ITEM.forEach(function(t,e){t.status&&(i=!0)})}),i||(this.firstChoose="")},watchRemark:function(t){isNaN(parseInt(this.deliveryList2[t].ZREMARK))?this.$vux.toast.text("件数必须为数值"):parseInt(this.deliveryList2[t].ZREMARK)<=0&&this.$vux.toast.text("件数不得少于等于0件")},watchPUTSUM:function(t){var e=0;""!==this.deliveryList2[t].PUTSUM&&(e=parseFloat(this.deliveryList2[t].PUTSUM)),console.log(e);for(var i=0,s=0;s<this.deliveryList2[t].ZCGSLTZD_ITEM.length-1;s++)i+=parseFloat(this.deliveryList2[t].ZCGSLTZD_ITEM[s].WK_NUM);if(console.log(i),parseFloat(e.toFixed(3))>parseFloat(i.toFixed(3))){this.$vux.toast.text("输入送货量不得大于欠数合计数量"+i.toFixed(3)),this.$set(this.deliveryList2[t],"PUTSUM",i.toFixed(3));for(var a=0;a<this.deliveryList2[t].ZCGSLTZD_ITEM.length-1;a++)this.deliveryList2[t].ZCGSLTZD_ITEM[a].ZDELIQTY=this.deliveryList2[t].ZCGSLTZD_ITEM[a].WK_NUM;this.deliveryList2[t].ZCGSLTZD_ITEM[this.deliveryList2[t].ZCGSLTZD_ITEM.length-1].ZDELIQTY=e.toFixed(3)}else if(e<0)this.$vux.toast.text("输入送货量不得少于等于0");else{for(var r=!1,o=0;o<this.deliveryList2[t].ZCGSLTZD_ITEM.length-1;o++){if(!r){if(!(e>=parseFloat(this.deliveryList2[t].ZCGSLTZD_ITEM[o].WK_NUM))){this.deliveryList2[t].ZCGSLTZD_ITEM[o].ZDELIQTY=e.toFixed(3),r=!0;continue}this.deliveryList2[t].ZCGSLTZD_ITEM[o].ZDELIQTY=this.deliveryList2[t].ZCGSLTZD_ITEM[o].WK_NUM,e-=parseFloat(this.deliveryList2[t].ZCGSLTZD_ITEM[o].WK_NUM)}r&&(this.deliveryList2[t].ZCGSLTZD_ITEM[o].ZDELIQTY=0,this.$set(this.deliveryList2[t].ZCGSLTZD_ITEM[o],"status",!1))}this.deliveryList2[t].ZCGSLTZD_ITEM[this.deliveryList2[t].ZCGSLTZD_ITEM.length-1].ZDELIQTY=parseFloat(this.deliveryList2[t].PUTSUM).toFixed(3)}},watchValue:function(t,e){this.liIndex=e,this.index=t;var i=0;""!==this.deliveryList2[e].ZCGSLTZD_ITEM[t].ZDELIQTY&&(i=parseFloat(this.deliveryList2[e].ZCGSLTZD_ITEM[t].ZDELIQTY));var s=parseFloat(this.deliveryList2[e].ZCGSLTZD_ITEM[t].WK_NUM);i<=0?(this.$vux.toast.text("输入送货量不得少于等于0"),this.$set(this.deliveryList2[e].ZCGSLTZD_ITEM[t],"status",!1)):i>s&&(this.$vux.toast.text("送货数量超出"),this.deliveryList2[e].ZCGSLTZD_ITEM[t].ZDELIQTY=s.toFixed(3),this.$set(this.deliveryList2[e].ZCGSLTZD_ITEM[t],"status",!1)),this.total()},total:function(){for(var t=0;t<this.deliveryList2.length;t++){for(var e=0,i=this.deliveryList2[t].ZCGSLTZD_ITEM.length,s=0;s<this.deliveryList2[t].ZCGSLTZD_ITEM.length-1;s++){var a=this.deliveryList2[t].ZCGSLTZD_ITEM[s].ZDELIQTY?this.deliveryList2[t].ZCGSLTZD_ITEM[s].ZDELIQTY:0;e+=parseFloat(a)}this.$set(this.deliveryList2[t].ZCGSLTZD_ITEM[i-1],"ZDELIQTY",e.toFixed(3)),this.deliveryList2[t].PUTSUM=e.toFixed(3)}},toDetail:function(){var t=this;this.$store.commit("SET_CHOOSEITEM",[]);var e=[],i=0,s=0;this.deliveryList2.forEach(function(a,r){i=0,a.ZCGSLTZD_ITEM.forEach(function(r,o){if(r.status&&"合计"!==r.SIZE1&&r.ZDELIQTY>0){""!==a.ZREMARK&&void 0!==a.ZREMARK||(t.$vux.toast.text("必须输入件数"),s=1,forEach.break),parseInt(a.ZREMARK)<=0&&(t.$vux.toast.text("输入件数不能小于等于0"),s=2,forEach.break);new RegExp(/^[0-9]+$/).test(a.ZREMARK)||(t.$vux.toast.text("输入整数，不能带小数点"),s=2,forEach.break),r.MAKTX_YB=a.MAKTX_YB,r.ZQY=a.ZQY,r.ZREMARK=0===i?a.ZREMARK:"0",r.LIFNR=a.LIFNR,r.BUKRS=a.BUKRS,r.WERKS=a.WERKS,r.ZZXTNO=a.ZZXTNO,r.VBELN=a.VBELN,e.push(r),i++}}),s>0&&forEach.break}),1!==s?2!==s?e.length?(console.log(e),this.$store.commit("SET_CHOOSEITEM",e),this.$router.push({path:"/delivery"})):this.$vux.toast.text("请选择送货单"):this.$vux.toast.text("输入件数不能小于0"):this.$vux.toast.text("必须输入件数")},close:function(){this.show=!1},log:function(){},vueTouch:function(t,e,i,s){if(e!==this.deliveryList2[i].ZCGSLTZD_ITEM.length-1){if(document.getElementById("blurInput").blur(),this.firstChoose||0===this.firstChoose||(this.firstChoose=i),t.target.cellIndex<4||"DIV"===t.target.tagName)if(this.deliveryList2[i].ZCGSLTZD_ITEM[e].status)this.$set(this.deliveryList2[i].ZCGSLTZD_ITEM[e],"status",!this.deliveryList2[i].ZCGSLTZD_ITEM[e].status);else if(this.deliveryList2[i].ZQY===this.deliveryList2[this.firstChoose].ZQY&&this.deliveryList2[i].WERKS===this.deliveryList2[this.firstChoose].WERKS){var a=parseFloat(this.deliveryList2[i].ZCGSLTZD_ITEM[e].ZDELIQTY);if(0==a)return void this.$vux.toast.text("请填写本次送货数量");if(a>parseFloat(this.deliveryList2[i].ZCGSLTZD_ITEM[e].WK_NUM))return void this.$vux.toast.text("本次送货数量超出");this.$set(this.deliveryList2[i].ZCGSLTZD_ITEM[e],"status",!this.deliveryList2[i].ZCGSLTZD_ITEM[e].status)}else this.$vux.toast.text("选择有误：不同厂区不同工厂不能合并开单");t.target.tagName;var r=!1;this.deliveryList2.forEach(function(t,e){t.ZCGSLTZD_ITEM.forEach(function(t,e){t.status&&(r=!0)})}),r||(this.firstChoose="")}},toInfo:function(t){console.log(t)},change:function(){},init:function(){var t=l()(window),e=l()(".t_r_content"),i=l()(".t_l_freeze").find("table"),s=l()(".t_r_t table");function a(){t.height()}a(),t.on("resize",a);var r=new IScroll(".t_r_content",{scrollX:!0,scrollY:!1,probeType:3});function o(){var t=this.y,e=this.x;i.css("transform","translate(0px, "+t+"px) translateZ(0px)"),s.css("transform","translate("+e+"px, 0px) translateZ(0px)")}e.on("touchmove mousewheel",function(t){t.preventDefault()}),r.on("scroll",o),r.on("scrollEnd",o)}}}),R={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"wrap",staticStyle:{"padding-top":"2rem"},attrs:{id:"wrap"}},[i("search",{staticStyle:{position:"fixed",width:"100%",background:"#f5f5f5",height:"1.2rem",top:"0"},nativeOn:{click:function(e){t.show=!0}}}),t._v(" "),i("div",{directives:[{name:"transfer-dom",rawName:"v-transfer-dom"}]},[i("popup",{attrs:{position:"top",id:"rece-search"},on:{"on-hide":function(e){return t.log("hide")},"on-show":function(e){return t.log("show")}},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[i("rece-search",{ref:"search",on:{close:t.close}})],1)],1),t._v(" "),i("div",{staticClass:"funcList"},[i("ul",[i("li",{on:{click:t.toDetail}},[t._v("生成送货单")]),t._v(" "),i("li",{on:{click:t.toList}},[t._v("送货单列表")])])]),t._v(" "),t._l(t.deliveryList2,function(e,s){return i("div",{key:s,staticClass:"delivery",style:s===t.deliveryList2.length-1?"margin-bottom: 60px":""},[i("div",{staticClass:"item-top"},[i("div",{staticClass:"item"},[i("div",{staticClass:"item-left"},[t._v("物"),i("span",{staticClass:"spaces2"}),t._v("料："+t._s(e.SATNR)+"-"+t._s(e.MAKTX_YB))]),t._v(" "),e.EINDT_QR?i("div",{staticClass:"item-right"},[t._v("确认交期："+t._s(e.EINDT_QR))]):t._e()]),t._v(" "),i("div",{staticClass:"item",staticStyle:{"margin-top":"8px"}},[e.VBELN?i("div",{staticClass:"item-left"},[t._v("指"),i("span",{staticClass:"spaces2"}),t._v("令： "+t._s(e.VBELN))]):t._e(),t._v(" "),e.ZZXTNO?i("div",{staticClass:"item-right"},[t._v("型"),i("span",{staticClass:"spaces2"}),t._v("体："+t._s(e.ZZXTNO))]):t._e()]),t._v(" "),i("div",{staticClass:"item",staticStyle:{"margin-top":"8px"}},[i("div",{staticClass:"item-left"},[t._v("厂"),i("span",{staticClass:"spaces2"}),t._v("区： "+t._s(e.ZQY))]),t._v(" "),e.EBELN?i("div",{staticClass:"item-right"},[t._v("采购订单号："+t._s(e.EBELN))]):t._e()]),t._v(" "),i("div",{staticClass:"item",staticStyle:{"margin-top":"8px"}},[i("div",{staticClass:"item-left"},[t._v("工"),i("span",{staticClass:"spaces2"}),t._v("厂："+t._s(e.WERKS)+"-"+t._s(e.NAME1_W)+"-"+t._s("X"===e.ISNOCHECK?"免检":"非免检"))])]),t._v(" "),i("div",{staticClass:"Remarks"},[i("div",{staticClass:"item-left"},[t._v("\n          送货量： "),i("input",{directives:[{name:"model",rawName:"v-model",value:e.PUTSUM,expression:"item.PUTSUM"}],staticStyle:{width:"60%"},attrs:{type:"number"},domProps:{value:e.PUTSUM},on:{keyup:function(e){return t.watchPUTSUM(s)},input:function(i){i.target.composing||t.$set(e,"PUTSUM",i.target.value)}}})]),t._v(" "),i("div",{staticClass:"item-right"},[i("span",{staticStyle:{color:"red"}},[t._v("*")]),t._v("件数："),i("input",{directives:[{name:"model",rawName:"v-model",value:e.ZREMARK,expression:"item.ZREMARK"}],staticStyle:{width:"50%"},attrs:{type:"number"},domProps:{value:e.ZREMARK},on:{keyup:function(e){return t.watchRemark(s)},input:function(i){i.target.composing||t.$set(e,"ZREMARK",i.target.value)}}})])])]),t._v(" "),i("div",{staticClass:"data-table"},[i("div",{staticClass:"t_r"},[i("div",{staticClass:"table-data"},[i("div",{staticClass:"selectwrap"},[i("div",{staticClass:"select-box",on:{click:function(e){return t.allSelect(s)}}},[e.isAll?i("icon",{staticStyle:{color:"#aa0000","font-size":"24px",margin:"0 auto"},attrs:{type:"success"}}):i("div",{staticClass:"select"})],1),t._v(" "),t._l(e.ZCGSLTZD_ITEM,function(a,r){return r!=e.ZCGSLTZD_ITEM.length-1?i("div",{key:r,staticClass:"select-box"},[a.status?i("icon",{staticStyle:{color:"#aa0000","font-size":"24px"},attrs:{type:"success"},nativeOn:{click:function(e){return t.vueTouch(t.row,r,s)}}}):i("div",{staticClass:"select",on:{click:function(e){return t.vueTouch(t.row,r,s)}}})],1):t._e()})],2),t._v(" "),i("div",{staticClass:"new-table"},[i("div",{staticClass:"table-head",staticStyle:{width:"800px"}},t._l(t.tableHead,function(e,a){return i("div",{key:a,style:0===a?"width: 60px":"",on:{click:function(e){return t.allSelect(s)}}},[t._v(t._s(e))])}),0),t._v(" "),i("div",{staticClass:"table-body",staticStyle:{width:"800px"}},t._l(e.ZCGSLTZD_ITEM,function(a,r){return i("div",{key:r,staticClass:"tableRow"},[i("div",{directives:[{name:"tap",rawName:"v-tap",value:function(e){return t.vueTouch(e,r,s,1)},expression:"(e)=>vueTouch(e, index, index1, 1)"}],staticStyle:{width:"60px"}},[t._v(t._s(a.SIZE1))]),t._v(" "),i("div",{directives:[{name:"tap",rawName:"v-tap",value:function(e){return t.vueTouch(e,r,s,1)},expression:"(e)=>vueTouch(e, index, index1, 1)"}],staticStyle:{width:"100px"}},[t._v(t._s(a.MENGE))]),t._v(" "),i("div",{directives:[{name:"tap",rawName:"v-tap",value:function(e){return t.vueTouch(e,r,s,1)},expression:"(e)=>vueTouch(e, index, index1, 1)"}],staticStyle:{width:"100px"}},[t._v(t._s(a.YK_NUM))]),t._v(" "),i("div",{directives:[{name:"tap",rawName:"v-tap",value:function(e){return t.vueTouch(e,r,s,1)},expression:"(e)=>vueTouch(e, index, index1, 1)"}],staticStyle:{width:"100px"}},[t._v(t._s(a.WK_NUM))]),t._v(" "),i("div",{staticStyle:{width:"100px"}},[t._v(t._s(a.NO_EINME))]),t._v(" "),i("div",{staticStyle:{width:"100px"}},[i("input",{directives:[{name:"model",rawName:"v-model",value:a.ZDELIQTY,expression:"item1.ZDELIQTY"}],staticClass:"tr-input",staticStyle:{width:"40px",background:"white"},attrs:{type:"number",id:"blurInput",disabled:r===e.ZCGSLTZD_ITEM.length-1},domProps:{value:a.ZDELIQTY},on:{keyup:function(e){return t.watchValue(r,s)},input:function(e){e.target.composing||t.$set(a,"ZDELIQTY",e.target.value)}}})]),t._v(" "),i("div",{staticStyle:{width:"100px","line-height":"15px","word-break":"break-all",overflow:"scroll","-webkit-overflow-scrolling":"touch"}},[t._v(t._s(a.ZXT))]),t._v(" "),i("div",{staticStyle:{width:"60px","line-height":"15px"}},[t._v(t._s(a.ZLGORT)+t._s(a.LGOBE))]),t._v(" "),i("div",{staticStyle:{width:"140px","line-height":"15px","word-break":"break-all",overflow:"scroll","-webkit-overflow-scrolling":"touch"}},[t._v(t._s(a.ZREMARK))])])}),0)])])])])])}),t._v(" "),i("div",{staticClass:"btm-item"},[i("div",{staticClass:"fixedItem"},[i("div",{class:"01"===t.I_ZTYPE?"btn-selected":"",on:{click:function(e){return t.getSearch("01")}}},[t._v("代办事项")]),t._v(" "),i("div",{class:"02"===t.I_ZTYPE?"btn-selected":"",on:{click:function(e){return t.getSearch("02")}}},[t._v("已办事项")]),t._v(" "),i("div",{class:"0"===t.I_ZTYPE?"btn-selected":"",on:{click:function(e){return t.getSearch("0")}}},[t._v("全部")])])])],2)},staticRenderFns:[]};var G=i("VU/8")(b,R,!1,function(t){i("9duH")},"data-v-4d366fd3",null);e.default=G.exports}});
//# sourceMappingURL=16.9cb093f324bd0b0f5305.js.map