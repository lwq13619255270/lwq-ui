(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{634:function(t,i,e){},665:function(t,i,e){"use strict";var n=e(634);e.n(n).a},669:function(t,i,e){"use strict";e.r(i);var n={data:function(){return{hovering:!1,isExpanded:!1,fixedControl:!1,scrollParent:null,langConfig:{"hide-text":"隐藏代码","show-text":"显示代码"}}},computed:{iconClass:function(){return this.isExpanded?"el-icon-caret-top":"el-icon-caret-bottom"},controlText:function(){return this.isExpanded?this.langConfig["hide-text"]:this.langConfig["show-text"]}}},s=(e(665),e(32)),o=Object(s.a)(n,(function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"demo-block"},[e("div",{staticStyle:{padding:"24px"}},[t._t("source")],2),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.isExpanded,expression:"isExpanded"}],ref:"meta",staticClass:"meta"},[t.$slots.default?e("div",{staticClass:"description"},[t._t("default")],2):t._e(),t._v(" "),e("div",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"highlight "},[t._t("highlight")],2)]),t._v(" "),e("div",{ref:"control",staticClass:"demo-block-control",on:{click:function(i){t.isExpanded=!t.isExpanded}}},[e("i",{class:[t.iconClass,{hovering:t.hovering}]}),t._v("\n    "+t._s(t.controlText)+"\n  ")])])}),[],!1,null,null,null);i.default=o.exports}}]);