(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{208:function(t,e,n){var content=n(273);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(8).default)("6570a8f6",content,!0,{sourceMap:!1})},235:function(t,e,n){"use strict";var o={data:function(){return{drawer:!1,items:[{icon:["fas","home"],title:"Home",to:"/"},{icon:["fas","laptop-code"],title:"Experience",to:"/experience"},{icon:["fas","graduation-cap"],title:"Education",to:"/education"}],title:"Hey, I’m Lee 👋🏼"}}},r=n(76),c=n(107),l=n.n(c),v=n(361),f=n(368),d=n(362),h=n(163),m=n(236),_=n(369),x=n(363),V=n(164),y=n(101),w=n(165),k=n(74),z=n(364),A=n(367),C=n(36),S=n(365),E=n(366),L=n(231),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{attrs:{dark:""}},[n("v-navigation-drawer",{attrs:{clipped:"","expand-on-hover":"",permanent:"",app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[n("v-list",t._l(t.items,(function(e,o){return n("v-list-item",{key:o,attrs:{to:e.to,router:"",exact:""}},[n("v-list-item-action",[n("fa-icon",{staticStyle:{"font-size":"20px"},attrs:{icon:e.icon}})],1),t._v(" "),n("v-list-item-content",[n("v-list-item-title",{domProps:{textContent:t._s(e.title)}})],1)],1)})),1)],1),t._v(" "),n("v-app-bar",{attrs:{"clipped-left":"",app:"","elevate-on-scroll":""}},[n("v-app-bar-nav-icon",[n("v-avatar",{attrs:{size:"40px"}},[n("img",{attrs:{alt:"Avatar",src:"/lee.jpeg"}})])],1),t._v(" "),n("v-toolbar-title",{domProps:{textContent:t._s(t.title)}}),t._v(" "),n("v-spacer"),t._v(" "),n("v-switch",{attrs:{"hide-details":""},model:{value:t.$vuetify.theme.dark,callback:function(e){t.$set(t.$vuetify.theme,"dark",e)},expression:"$vuetify.theme.dark"}}),t._v(" "),t.$vuetify.theme.dark?n("v-app-bar-nav-icon",[n("fa-icon",{staticStyle:{"font-size":"30px"},attrs:{icon:["fas","moon"]}})],1):n("v-app-bar-nav-icon",[n("fa-icon",{staticStyle:{"font-size":"30px"},attrs:{icon:["fas","sun"]}})],1)],1),t._v(" "),n("v-main",[n("v-sheet",{staticClass:"overflow-y-auto",attrs:{"min-height":"100%"}},[n("v-container",[n("nuxt")],1)],1)],1),t._v(" "),n("v-footer",{staticClass:"d-flex justify-space-between",attrs:{absolute:"",app:""}},[n("div",[n("span",[t._v("© "+t._s((new Date).getFullYear()))])]),t._v(" "),n("div",[n("v-btn",{attrs:{icon:"",href:"https://github.com/zygopleural",target:"_blank"}},[n("fa-icon",{staticStyle:{"font-size":"30px"},attrs:{icon:["fab","github"]}})],1),t._v(" "),n("v-btn",{attrs:{icon:"",href:"https://linkedin.com/in/lmstaples",target:"_blank"}},[n("fa-icon",{staticStyle:{"font-size":"30px"},attrs:{icon:["fab","linkedin"]}})],1)],1)])],1)}),[],!1,null,null,null);e.a=component.exports;l()(component,{VApp:v.a,VAppBar:f.a,VAppBarNavIcon:d.a,VAvatar:h.a,VBtn:m.a,VContainer:_.a,VFooter:x.a,VList:V.a,VListItem:y.a,VListItemAction:w.a,VListItemContent:k.a,VListItemTitle:k.b,VMain:z.a,VNavigationDrawer:A.a,VSheet:C.a,VSpacer:S.a,VSwitch:E.a,VToolbarTitle:L.a})},247:function(t,e,n){n(248),t.exports=n(249)},272:function(t,e,n){"use strict";n(208)},273:function(t,e,n){var o=n(7)(!1);o.push([t.i,"h1[data-v-495dc2cf]{font-size:20px}",""]),t.exports=o},68:function(t,e,n){"use strict";var o={layout:"empty",props:{error:{type:Object,default:null}},data:function(){return{pageNotFound:"404 Not Found",otherError:"An error occurred"}},head:function(){return{title:404===this.error.statusCode?this.pageNotFound:this.otherError}}},r=(n(272),n(76)),c=n(107),l=n.n(c),v=n(361),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{attrs:{dark:""}},[404===t.error.statusCode?n("h1",[t._v("\n    "+t._s(t.pageNotFound)+"\n  ")]):n("h1",[t._v("\n    "+t._s(t.otherError)+"\n  ")]),t._v(" "),n("NuxtLink",{attrs:{to:"/"}},[t._v(" Home page ")])],1)}),[],!1,null,"495dc2cf",null);e.a=component.exports;l()(component,{VApp:v.a})}},[[247,10,2,11]]]);