webpackJsonp([18],{Wp50:function(t,e){},"g/fJ":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=a("Xxa5"),i=a.n(o),s=a("exGp"),n=a.n(s),r=a("Dd8w"),l=a.n(r),c=a("7t+N"),d=a.n(c),v=a("7biW"),p=a("NYxO"),u=a("UNGY"),m=a("rHil"),h=a("oWtu"),f=a("63CM"),g=a("HD9R"),_=a("1h8J"),y=new Date,S=(y.getFullYear(),y.getMonth()+1<10?y.getMonth():y.getMonth(),y.getDate()<10?y.getDate():y.getDate(),l()({},Object(p.b)({openId:function(t){return t.user.userInfo}})),f.a,u.a,m.a,h.a,v.a,g.a,new Date),x=S.getFullYear()+"-"+(S.getMonth()+1<10?"0"+(S.getMonth()+1):S.getMonth()+1)+"-"+(S.getDate()<10?"0"+S.getDate():S.getDate()),w={data:function(){return{show:!1,form:{StartDate:this.getSSionStorage("temporary")?JSON.parse(this.getSSionStorage("temporary")).split(",")[0]:x,EndDate:this.getSSionStorage("temporary")?JSON.parse(this.getSSionStorage("temporary")).split(",")[1]:x,TempreNo:"",Mtono:"",FactoryType:"",WeChatOpenID:"",MaterialCode:"",FactoryNo:""},isChange:!1,startDate:this.getSSionStorage("temporary")?JSON.parse(this.getSSionStorage("temporary")).split(",")[0]:x,endDate:this.getSSionStorage("temporary")?JSON.parse(this.getSSionStorage("temporary")).split(",")[1]:x,visibility:!1,visibility2:!1,widths:100,list:[],oldIndex:"",Zno:""}},computed:l()({},Object(p.b)({openId:function(t){return t.user.userInfo}})),directives:{TransferDom:f.a},components:{Datetime:u.a,Group:m.a,Icon:h.a,Search:v.a,Popup:g.a},mounted:function(){var t=this;this.widths="850px",console.log(d()(window).width()),this.getList(),this.$nextTick(function(){t.init()})},methods:{log:function(){},toInfo:function(){this.Zno?this.$router.push({path:"/temporaryInfo",query:{type:1,Zno:this.Zno}}):this.$vux.toast.text("请选择要查询的数据")},changeStatus:function(t){(this.oldIndex||0===this.oldIndex)&&this.$set(this.list[this.oldIndex],"status",!1),this.$set(this.list[t],"status",!this.list[t].status),this.oldIndex=t,this.Zno=this.list[t].TemporaryNo,this.toInfo()},getList:function(){var t=this;return n()(i.a.mark(function e(){var a;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.recordSearch(),e.prev=1,t.form.WeChatOpenID=t.openId,t.$store.commit("updateLoadingStatus",{isLoading:!0}),e.next=6,Object(_.o)(t.form);case 6:a=e.sent,console.log(a),t.list=a,t.list.forEach(function(e){t.$set(e,"status",!1);var a=0;e.TemporaryReceipt.forEach(function(t){console.log(),a+=parseFloat(t.Qty)}),t.$set(e,"allAmount",a.toFixed(2))}),e.next=14;break;case 12:e.prev=12,e.t0=e.catch(1);case 14:return e.prev=14,t.show=!1,t.$store.commit("updateLoadingStatus",{isLoading:!1}),e.finish(14);case 18:case"end":return e.stop()}},e,t,[[1,12,14,18]])}))()},recordSearch:function(){this.setSSionStorage("temporary",this.startDate+","+this.endDate)},change:function(){"850px"===this.widths?this.isChange=!0:(this.isChange=!1,this.widths="850px")},init:function(){var t=d()(window),e=d()(".t_r_content"),a=d()(".t_l_freeze"),o=a.find("table"),i=d()(".t_r_t table");function s(){t.height();a.height(400),e.height(400)}s(),t.on("resize",s);var n=new IScroll(".t_r_content",{scrollX:!0,scrollY:!0,probeType:3});function r(){var t=this.y,e=this.x;o.css("transform","translate(0px, "+t+"px) translateZ(0px)"),i.css("transform","translate("+e+"px, 0px) translateZ(0px)")}e.on("touchmove mousewheel",function(t){t.preventDefault()}),n.on("scroll",r),n.on("scrollEnd",r)}}},D={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"wrap temporaryReceipt",attrs:{id:"wrap"}},[a("search",{nativeOn:{click:function(e){t.show=!0}}}),t._v(" "),a("div",{directives:[{name:"transfer-dom",rawName:"v-transfer-dom"}]},[a("popup",{attrs:{position:"top"},on:{"on-hide":function(e){return t.log("hide")},"on-show":function(e){return t.log("show")}},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[a("div",{staticClass:"searchBox"},[a("div",{staticClass:"date"},[a("div",{staticClass:"title"},[t._v("交期")]),t._v(" "),a("div",{staticClass:"choose"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.startDate,expression:"startDate"}],attrs:{readonly:""},domProps:{value:t.startDate},on:{click:function(e){t.visibility=!0},input:function(e){e.target.composing||(t.startDate=e.target.value)}}})]),t._v(" "),a("span",[t._v("至")]),t._v(" "),a("div",{staticClass:"choose"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.endDate,expression:"endDate"}],attrs:{readonly:""},domProps:{value:t.endDate},on:{click:function(e){t.visibility2=!0},input:function(e){e.target.composing||(t.endDate=e.target.value)}}})])]),t._v(" "),a("div",{staticClass:"title"},[t._v("工厂型体")]),t._v(" "),a("div",{staticClass:"number"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.FactoryType,expression:"form.FactoryType"}],attrs:{type:"number",placeholder:"型体"},domProps:{value:t.form.FactoryType},on:{input:function(e){e.target.composing||t.$set(t.form,"FactoryType",e.target.value)}}})]),t._v(" "),a("div",{staticClass:"title"},[t._v("单号")]),t._v(" "),a("div",{staticClass:"number"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.TempreNo,expression:"form.TempreNo"}],attrs:{type:"text",placeholder:"单号"},domProps:{value:t.form.TempreNo},on:{input:function(e){e.target.composing||t.$set(t.form,"TempreNo",e.target.value)}}})]),t._v(" "),a("div",{staticClass:"title"},[t._v("指令号")]),t._v(" "),a("div",{staticClass:"number"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.Mtono,expression:"form.Mtono"}],attrs:{type:"text",placeholder:"指令号"},domProps:{value:t.form.Mtono},on:{input:function(e){e.target.composing||t.$set(t.form,"Mtono",e.target.value)}}})]),t._v(" "),a("div",{staticClass:"title"},[t._v("物料代码")]),t._v(" "),a("div",{staticClass:"number"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.MaterialCode,expression:"form.MaterialCode"}],attrs:{type:"text",placeholder:"物料代码"},domProps:{value:t.form.MaterialCode},on:{input:function(e){e.target.composing||t.$set(t.form,"MaterialCode",e.target.value)}}})]),t._v(" "),a("div",{staticClass:"title"},[t._v("工厂代码")]),t._v(" "),a("div",{staticClass:"number"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.FactoryNo,expression:"form.FactoryNo"}],attrs:{type:"text",placeholder:"工厂代码"},domProps:{value:t.form.FactoryNo},on:{input:function(e){e.target.composing||t.$set(t.form,"FactoryNo",e.target.value)}}})]),t._v(" "),a("div",{staticClass:"searchButton",on:{click:t.getList}},[t._v("搜索")])])])],1),t._v(" "),a("datetime",{staticStyle:{display:"none"},attrs:{show:t.visibility},on:{"on-change":function(e){t.form.StartDate=t.startDate},"update:show":function(e){t.visibility=e}},model:{value:t.startDate,callback:function(e){t.startDate=e},expression:"startDate"}}),t._v(" "),a("datetime",{staticStyle:{display:"none"},attrs:{show:t.visibility2},on:{"on-change":function(e){t.form.EndDate=t.EndDate},"update:show":function(e){t.visibility2=e}},model:{value:t.endDate,callback:function(e){t.endDate=e},expression:"endDate"}}),t._v(" "),a("div",{staticClass:"delivery-list"},[a("ul",t._l(t.list,function(e,o){return a("li",{key:o,style:0===o?"margin-top: 0":""},[a("div",{staticClass:"head",on:{click:function(e){return t.changeStatus(o)}}},[a("div",{staticClass:"head-left"},[a("div",{staticClass:"contentLeft"},[a("div",[t._v("指令："+t._s(e.mtono))]),t._v(" "),a("div",[t._v("暂收单号："+t._s(e.TemporaryNo))]),t._v(" "),a("div",[t._v("物料名称："+t._s(e.MaterialCode)+"-"+t._s(e.MaterialName))])]),t._v(" "),a("div",{staticClass:"contentRight"},[a("div",[t._v("型体："+t._s(e.Model))]),t._v(" "),a("div",[t._v("单位："+t._s(e.Unit))]),t._v(" "),a("div",[t._v("备注："+t._s(e.Remark))])])])]),t._v(" "),a("div",{staticStyle:{position:"relative"}},[a("div",{staticClass:"fixedDiv"},[a("div",[t._v("合计")]),t._v(" "),a("div",[t._v(t._s(e.allAmount))])]),t._v(" "),a("div",{staticClass:"sizes"},[a("div",{staticClass:"tp",style:"width: "+80*e.TemporaryReceipt.length+"px"},t._l(e.TemporaryReceipt,function(e){return a("div",[t._v(t._s(e.Size))])}),0),t._v(" "),a("div",{staticClass:"bm",style:"width: "+80*e.TemporaryReceipt.length+"px"},t._l(e.TemporaryReceipt,function(e){return a("div",[t._v(t._s(e.Qty))])}),0)])])])}),0)])],1)},staticRenderFns:[]};var C=a("VU/8")(w,D,!1,function(t){a("siw0"),a("Wp50")},"data-v-00f4d014",null);e.default=C.exports},siw0:function(t,e){}});
//# sourceMappingURL=18.87ddad2079d53f729dcb.js.map