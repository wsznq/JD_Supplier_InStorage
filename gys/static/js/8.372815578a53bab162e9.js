webpackJsonp([8],{"5MfU":function(t,s){},"6eNF":function(t,s,i){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e=i("0FxO"),n={name:"msg",props:["icon","title","description","buttons"],methods:{onClick:function(t,s){"function"==typeof t&&t(),s&&Object(e.a)(s,this.$router)}}},c={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"weui-msg"},[i("div",{staticClass:"weui-msg__icon-area"},[i("i",{staticClass:"weui-icon_msg",class:"weui-icon-"+(t.icon||"success")})]),t._v(" "),i("div",{staticClass:"weui-msg__text-area"},[i("h2",{staticClass:"weui-msg__title",domProps:{innerHTML:t._s(t.title)}}),t._v(" "),i("p",{staticClass:"weui-msg__desc"},[t._t("description")],2),t._v(" "),t.description?i("p",{staticClass:"weui-msg__desc",domProps:{innerHTML:t._s(t.description)}}):t._e()]),t._v(" "),i("div",{staticClass:"weui-msg__opr-area"},[i("p",{staticClass:"weui-btn-area"},[t._t("buttons",t._l(t.buttons,function(s){return i("a",{staticClass:"weui-btn",class:"weui-btn_"+s.type,attrs:{href:"javascript:;"},on:{click:function(i){return t.onClick(s.onClick,s.link)}}},[t._v(t._s(s.text))])}))],2)])])},staticRenderFns:[]};var a=i("VU/8")(n,c,!1,function(t){i("o+gd")},null,null).exports,o={data:function(){return{description:'<p class="mt20" style="font-size:16px;">送货单号：<span style="color:#aa0000">'+this.$route.query.No+'</span></p><p class="mt20">是否查看生成的送货单</p>',icon:"success",buttons:[{type:"primary",text:"是",onClick:this.confirm.bind(this)},{type:"default",text:"否",link:"/receiving"}]}},components:{Msg:a},mounted:function(){},methods:{confirm:function(){this.$router.push({path:"/deliveryList"})}}},r={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"wrap result",staticStyle:{height:"100vh"},attrs:{id:"wrap"}},[s("msg",{staticClass:"msg",attrs:{title:"生成送货单成功",description:this.description,buttons:this.buttons,icon:this.icon}})],1)},staticRenderFns:[]};var u=i("VU/8")(o,r,!1,function(t){i("EAwU"),i("5MfU")},"data-v-e9dd2c64",null);s.default=u.exports},EAwU:function(t,s){},"o+gd":function(t,s){}});
//# sourceMappingURL=8.372815578a53bab162e9.js.map