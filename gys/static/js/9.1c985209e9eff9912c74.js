webpackJsonp([9],{"2GEE":function(t,e){},"6iCj":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i("Xxa5"),o=i.n(s),a=i("woOf"),n=i.n(a),r=i("exGp"),l=i.n(r),c=i("bOdI"),u=i.n(c),d=i("mvHQ"),v=i.n(d),f=i("Dd8w"),m=i.n(f),p=i("7t+N"),h=i.n(p),g=i("7biW"),_=i("UNGY"),S=i("1h8J"),D=i("NYxO"),E=new Date,N=(E.getFullYear(),E.getMonth()+1<10?E.getMonth():E.getMonth(),E.getDate()<10?E.getDate():E.getDate(),m()({},Object(D.b)({supplierInfo:function(t){return t.mutaions.suplierinfo}})),_.a,new Date),y=N.getFullYear()+"-"+(N.getMonth()+1<10?"0"+(N.getMonth()+1):N.getMonth()+1)+"-"+(N.getDate()<10?"0"+N.getDate():N.getDate()),w={data:function(){return{show:!1,startDate:"",endDate:"",visibility:!1,visibility2:!1,widths:100,tableHead:["订单编号","订单日期","物料名称","币别","金额"],form:{BeginDate:this.getSSionStorage("delivery")?JSON.parse(this.getSSionStorage("delivery")).split(",")[0]:y,EndDate:this.getSSionStorage("delivery")?JSON.parse(this.getSSionStorage("delivery")).split(",")[1]:y,ProductName:"",ScMONO:"",SupplyNo:"",DeliNO:"",MaterialNo:"",FactoryNo:""}}},computed:m()({},Object(D.b)({supplierInfo:function(t){return t.mutaions.suplierinfo}})),components:{Datetime:_.a},mounted:function(){this.form.SupplyNo=this.supplierInfo.supplierInfo.FNumber,this.widths=6*this.widths+"px",this.getList()},methods:{getList:function(){var t=this;return l()(o.a.mark(function e(){var i;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.recordSearch(),e.prev=1,e.next=4,Object(S.c)(t.form);case 4:i=e.sent,console.log(i),t.$store.commit("SET_DELIVERY2",i),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(1),t.$store.commit("SET_DELIVERY2",[]),console.log(e.t0);case 13:t.$nextTick(function(){t.$emit("init")}),t.$emit("close");case 15:case"end":return e.stop()}},e,t,[[1,9]])}))()},recordSearch:function(){this.setSSionStorage("delivery",this.form.BeginDate+","+this.form.EndDate)},log:function(){},popup:function(){},change:function(){}}},b={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"wrap",attrs:{id:"wrap"}},[i("datetime",{staticStyle:{display:"none"},attrs:{show:t.visibility},on:{"on-change":t.change,"update:show":function(e){t.visibility=e}},model:{value:t.form.BeginDate,callback:function(e){t.$set(t.form,"BeginDate",e)},expression:"form.BeginDate"}}),t._v(" "),i("datetime",{staticStyle:{display:"none"},attrs:{show:t.visibility2},on:{"on-change":t.change,"update:show":function(e){t.visibility2=e}},model:{value:t.form.EndDate,callback:function(e){t.$set(t.form,"EndDate",e)},expression:"form.EndDate"}}),t._v(" "),i("div",{staticClass:"searchBox"},[i("div",{staticClass:"title"},[t._v("日期范围")]),t._v(" "),i("div",{staticClass:"date"},[i("div",{staticClass:"choose"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.form.BeginDate,expression:"form.BeginDate"}],attrs:{placeholder:"请选择开始时间",readonly:""},domProps:{value:t.form.BeginDate},on:{click:function(e){t.visibility=!0},input:function(e){e.target.composing||t.$set(t.form,"BeginDate",e.target.value)}}})]),t._v(" "),i("span",[t._v("至")]),t._v(" "),i("div",{staticClass:"choose"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.form.EndDate,expression:"form.EndDate"}],attrs:{placeholder:"请选择结束时间",readonly:""},domProps:{value:t.form.EndDate},on:{click:function(e){t.visibility2=!0},input:function(e){e.target.composing||t.$set(t.form,"EndDate",e.target.value)}}})])]),t._v(" "),i("div",{staticClass:"number mt20"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.form.ScMONO,expression:"form.ScMONO"}],attrs:{type:"text",placeholder:"指令输入"},domProps:{value:t.form.ScMONO},on:{input:function(e){e.target.composing||t.$set(t.form,"ScMONO",e.target.value)}}})]),t._v(" "),i("div",{staticClass:"number mt20"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.form.ProductName,expression:"form.ProductName"}],attrs:{type:"text",placeholder:"型体输入"},domProps:{value:t.form.ProductName},on:{input:function(e){e.target.composing||t.$set(t.form,"ProductName",e.target.value)}}})]),t._v(" "),i("div",{staticClass:"number mt20"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.form.DeliNO,expression:"form.DeliNO"}],attrs:{type:"text",placeholder:"送货单输入"},domProps:{value:t.form.DeliNO},on:{input:function(e){e.target.composing||t.$set(t.form,"DeliNO",e.target.value)}}})]),t._v(" "),i("div",{staticClass:"number mt20"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.form.MaterialNo,expression:"form.MaterialNo"}],attrs:{type:"text",placeholder:"物料代码输入"},domProps:{value:t.form.MaterialNo},on:{input:function(e){e.target.composing||t.$set(t.form,"MaterialNo",e.target.value)}}})]),t._v(" "),i("div",{staticClass:"number mt20"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.form.FactoryNo,expression:"form.FactoryNo"}],attrs:{type:"text",placeholder:"工厂代码输入"},domProps:{value:t.form.FactoryNo},on:{input:function(e){e.target.composing||t.$set(t.form,"FactoryNo",e.target.value)}}})]),t._v(" "),i("div",{staticClass:"searchButton",on:{click:t.getList}},[t._v("搜索")])])],1)},staticRenderFns:[]};var C=i("VU/8")(w,b,!1,function(t){i("2GEE")},"data-v-7fa1dde4",null).exports,x=i("rHil"),I=i("oWtu"),O=i("HD9R"),M=i("63CM"),k=(M.a,m()({},Object(D.b)({list:function(t){return t.mutaions.delivery2},userInfo:function(t){return t.user.userInfo},suplierinfo:function(t){return t.mutaions.suplierinfo}})),u()({Datetime:_.a,Group:x.a,Icon:I.a,Search:g.a,Popup:O.a,listSearch:C},"Icon",I.a),{data:function(){return{row:{target:{cellIndex:1}},show:!1,isAll:!1,startDate:"",endDate:"",visibility:!1,visibility2:!1,widths:60,widths2:60,tableHead:["尺码","数量","已送货数量","欠数","本次送货数量"],list2:[],form:{MES_HeadsString:[],MES_ItemsString:[]}}},directives:{TransferDom:M.a},computed:m()({},Object(D.b)({list:function(t){return t.mutaions.delivery2},userInfo:function(t){return t.user.userInfo},suplierinfo:function(t){return t.mutaions.suplierinfo}})),watch:{list:function(t){var e=this;this.list2=JSON.parse(v()(t)),this.list2.forEach(function(t){var i=0;t.DeliSize.forEach(function(t){i+=parseFloat(t.Qty)}),e.$set(t,"allAmount",i.toFixed(3)),e.$set(t,"isAll",!1),e.$set(t,"status",!1)})}},components:u()({Datetime:_.a,Group:x.a,Icon:I.a,Search:g.a,Popup:O.a,listSearch:C},"Icon",I.a),mounted:function(){this.widths=h()(window).width()/5,this.widths2=h()(window).width()},methods:{allSelect:function(){this.isAll?this.isAll=!1:this.isAll=!0;for(var t=0;t<this.list2.length;t++)this.isAll?"X"===this.list2[t].ISEDITDEL&&this.$set(this.list2[t],"status",!0):this.$set(this.list2[t],"status",!1)},deleteConfirm:function(){var t=this;return l()(o.a.mark(function e(){var i,s,a,r;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(i=[],t.list2.forEach(function(t,e){if(t.status)for(var s in t)"DeliNo"===s&&-1===i.indexOf(t[s])&&i.push(t[s])}),console.log(i),!(i.length<=0)){e.next=6;break}return t.$vux.toast.text("请选择送货单"),e.abrupt("return");case 6:if(s="",i.forEach(function(t,e){s=s+t+";"}),1!=confirm(s+"确定要删除吗?")){e.next=27;break}return t.form.MES_HeadsString=[],a={ZDELINO:"",ZDELETEOPENID:"",ZDELETER:"",BUKRS:"",WERKS:"",LIFNR:""},t.list2.forEach(function(e,i){if(e.status){for(var s in e)"DeliNo"===s&&(a.ZDELINO=e[s]);a.ZDELETER=t.suplierinfo.supplierInfo.FContact,a.ZDELETEOPENID=t.userInfo,a.BUKRS="1000",a.LIFNR=t.suplierinfo.supplierInfo.FNumber,t.form.MES_HeadsString.push(a)}a=n()({},{ZDELINO:"",ZDELETEOPENID:"",ZDELETER:"",BUKRS:"",WERKS:"",LIFNR:""})}),t.form.MES_HeadsString=v()(t.form.MES_HeadsString),t.form.MES_ItemsString=v()(t.form.MES_ItemsString),console.log(t.form),e.prev=15,e.next=18,Object(S.u)(t.form);case 18:r=e.sent,t.list2.forEach(function(e,i){e.status&&t.list2.splice(i,1)}),t.$vux.toast.text(r),e.next=27;break;case 23:e.prev=23,e.t0=e.catch(15),console.log(e.t0),t.form.MES_HeadsString=JSON.parse(t.form.MES_HeadsString);case 27:case"end":return e.stop()}},e,t,[[15,23]])}))()},gotoInfo:function(t,e){this.$store.commit("SET_SINGLEINFO",e),this.$router.push({path:"/deliveryInfo2",query:{DeliNo:t}})},gotoInfo_Edit:function(t,e){this.$store.commit("SET_SINGLEINFO",e),this.$router.push({path:"/deliveryInfo2_edit",query:{DeliNo:t}})},close:function(){this.show=!1},log:function(){},vueTouch:function(t,e){this.list2[e].status,this.$set(this.list2[e],"status",!this.list2[e].status),t.target.tagName},toInfo:function(t){console.log(t)},change:function(){},init:function(){return}}}),$={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"wrap deliveryyy",attrs:{id:"wrap"}},[i("search",{staticStyle:{position:"fixed",width:"100%",background:"#f5f5f5",height:"1.2rem",top:"0","z-index":"200"},nativeOn:{click:function(e){t.show=!0}}}),t._v(" "),i("div",{directives:[{name:"transfer-dom",rawName:"v-transfer-dom"}]},[i("popup",{attrs:{position:"top"},on:{"on-hide":function(e){return t.log("hide")},"on-show":function(e){return t.log("show")}},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[i("list-search",{on:{init:t.init,close:t.close}})],1)],1),t._v(" "),i("div",{staticClass:"funcList"},[i("ul",[i("li",{on:{click:t.deleteConfirm}},[t._v("删除")])])]),t._v(" "),i("div",{staticClass:"data-table"},[i("div",{staticClass:"t_r"},[i("div",{staticClass:"table-data"},[i("div",{staticClass:"selectwrap_top"},[t.list2.length>0?i("div",{staticClass:"select-box",on:{click:function(e){return t.allSelect()}}},[t.isAll?i("icon",{staticStyle:{color:"#aa0000","font-size":"24px",margin:"0 auto"},attrs:{type:"success"}}):i("div",{staticClass:"select"})],1):t._e()]),t._v(" "),i("div",{staticClass:"selectwrap"},t._l(t.list2,function(e,s){return i("div",{key:s,staticClass:"select-box mt20",style:0===s?"margin-top: 0":""},[e.ISEDITDEL?i("div",{staticClass:"edit",on:{click:function(i){return t.gotoInfo_Edit(e.DeliNo,e)}}},[t._v("编辑")]):t._e(),t._v(" "),e.status&&e.ISEDITDEL?i("icon",{staticStyle:{color:"#aa0000","font-size":"24px"},attrs:{type:"success"},nativeOn:{click:function(e){return t.vueTouch(t.row,s)}}}):i("div",{class:"X"===e.ISEDITDEL?"select":"",on:{click:function(e){return t.vueTouch(t.row,s)}}})],1)}),0),t._v(" "),i("div",{staticClass:"delivery-list"},[i("ul",t._l(t.list2,function(e,s){return i("li",{key:s,staticClass:"mt20",style:0===s?"margin-top: 0":""},[i("div",{staticClass:"head",on:{click:function(i){return t.gotoInfo(e.DeliNo,e)}}},[i("div",{staticClass:"head-left"},[i("div",{staticClass:"item-top"},[i("div",{staticClass:"item"},[i("div",{staticClass:"item-left"},[t._v("送货单号："+t._s(e.DeliNo))]),t._v(" "),i("div",{staticClass:"item-right"},[t._v("确认交期："+t._s(e.DeliveryDate))])]),t._v(" "),i("div",{staticClass:"item"},[e.Mtono?i("div",{staticClass:"item-left"},[t._v("指"),i("span",{staticClass:"space2"}),t._v("令："+t._s(e.Mtono))]):t._e(),t._v(" "),e.Model?i("div",{staticClass:"item-right"},[t._v("型体："+t._s(e.Model))]):t._e()]),t._v(" "),i("div",{staticClass:"item"},[i("div",{staticClass:"item-left"},[t._v("送货地点："+t._s(e.DeliveryLocation))]),t._v(" "),i("div",{staticClass:"item-right",staticStyle:{overflow:"hidden","text-overflow":"ellipsis",display:"-webkit-box","-webkit-line-clamp":"2","-webkit-box-orient":"vertical"}},[t._v("物料名称："+t._s(e.MaterialCode)+"-"+t._s(e.MaterialName))])]),t._v(" "),i("div",{staticClass:"item"},[i("div",{staticClass:"item-left"},[t._v("供应商："+t._s(e.SupplierName)+" "),e.Remarks?i("span",{staticStyle:{"margin-left":"10px"}},[t._v("备注："+t._s(e.Remarks))]):t._e()])]),t._v(" "),i("div",{staticClass:"item"},[i("div",{staticClass:"item-left"},[t._v("制单日期："+t._s(e.BillDate)+" ")])])])])]),t._v(" "),i("div",{staticStyle:{position:"relative"}},[i("div",{staticClass:"fixedDiv"},[i("div",[t._v("合计")]),t._v(" "),i("div",[t._v(t._s(e.allAmount))])]),t._v(" "),i("div",{staticClass:"sizes"},[i("div",{staticClass:"tp",style:"width: "+100*e.DeliSize.length+"px"},t._l(e.DeliSize,function(e){return i("div",[t._v(t._s(e.Size))])}),0),t._v(" "),i("div",{staticClass:"bm",style:"width: "+100*e.DeliSize.length+"px"},t._l(e.DeliSize,function(e){return i("div",[t._v(t._s(e.Qty))])}),0)])])])}),0)])])])])],1)},staticRenderFns:[]};var L=i("VU/8")(k,$,!1,function(t){i("uiGE"),i("cDLr")},"data-v-2edc2d0a",null);e.default=L.exports},cDLr:function(t,e){},uiGE:function(t,e){}});
//# sourceMappingURL=9.1c985209e9eff9912c74.js.map