(function(t){function e(e){for(var a,i,s=e[0],c=e[1],u=e[2],l=0,d=[];l<s.length;l++)i=s[l],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&d.push(o[i][0]),o[i]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);p&&p(e);while(d.length)d.shift()();return r.push.apply(r,u||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],a=!0,i=1;i<n.length;i++){var c=n[i];0!==o[c]&&(a=!1)}a&&(r.splice(e--,1),t=s(s.s=n[0]))}return t}var a={},o={app:0},r=[];function i(t){return s.p+"assets/js/"+({about:"about",create:"create",items:"items",login:"login",logout:"logout",recover:"recover",user:"user",verify:"verify"}[t]||t)+"."+{about:"6585459c",create:"3aeb7e3a",items:"9873bfca",login:"5fdafd63",logout:"6f1f411b",recover:"6f1fc0d2",user:"8fadebb9",verify:"18722aa7"}[t]+".js"}function s(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(t){var e=[],n=o[t];if(0!==n)if(n)e.push(n[2]);else{var a=new Promise((function(e,a){n=o[t]=[e,a]}));e.push(n[2]=a);var r,c=document.createElement("script");c.charset="utf-8",c.timeout=120,s.nc&&c.setAttribute("nonce",s.nc),c.src=i(t);var u=new Error;r=function(e){c.onerror=c.onload=null,clearTimeout(l);var n=o[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;u.message="Loading chunk "+t+" failed.\n("+a+": "+r+")",u.name="ChunkLoadError",u.type=a,u.request=r,n[1](u)}o[t]=void 0}};var l=setTimeout((function(){r({type:"timeout",target:c})}),12e4);c.onerror=c.onload=r,document.head.appendChild(c)}return Promise.all(e)},s.m=t,s.c=a,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(n,a,function(e){return t[e]}.bind(null,a));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/",s.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var p=u;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"28bc":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("svg",{staticClass:"icon",staticStyle:{"fill-rule":"evenodd","clip-rule":"evenodd","stroke-linejoin":"round","stroke-miterlimit":"2"},attrs:{viewBox:"0 0 200 200",version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","xml:space":"preserve","xmlns:serif":"http://www.serif.com/"}},[n("path",{attrs:{d:"M50,0l0,200l100,-100l-100,-100Z"}})])},o=[],r=n("2877"),i={},s=Object(r["a"])(i,a,o,!1,null,null,null);e["a"]=s.exports},4360:function(t,e,n){"use strict";n("a9e3");var a=n("2b0e"),o=n("2f62"),r=(n("4160"),n("4fad"),n("159b"),n("3835")),i=n("5a50"),s=n("c0dc"),c="user",u=function(){return{id:-1,name:null,email:null,role:null,meta:null}};function l(){var t=localStorage.getItem(c);return t?JSON.parse(t):u()}var p={namespaced:!0,state:{user:l(),isLoggedIn:!1},mutations:{isLoggedIn:function(t,e){t.isLoggedIn=e},set:function(t,e){Object.entries(e).forEach((function(e){var n=Object(r["a"])(e,2),o=n[0],i=n[1];a["a"].set(t.user,o,i)})),localStorage.setItem(c,JSON.stringify(t.user))}},actions:{get:function(t){return s["a"].get(i["i"].API.GET).then((function(e){var n=e.data;t.commit("set",n.user)}))}}},d=(n("d3b7"),n("a18c")),m=n("ec41"),f={namespaced:!0,state:{current:null,total:0,items:[],loading:!1},mutations:{setTotal:function(t,e){t.total=e},setLoading:function(t,e){t.loading=e},setCurrent:function(t,e){t.current=e},set:function(t,e){a["a"].set(t,"items",e)},post:function(t,e){t.items.unshift(e)},patch:function(t,e){for(var n=0;n<t.items.length;n++)if(t.items[n].id===e.id)return void a["a"].set(t.items,n,e)}},actions:{post:function(t,e){return t.commit("setLoading",!0),s["a"].post(i["g"].API.POST,e).then((function(e){Object(m["a"])(d["a"].currentRoute,"query.page")||t.commit("post",Object(m["a"])(e,"data.data"))})).finally((function(){return t.commit("setLoading",!1)}))},patch:function(t,e){return t.commit("setLoading",!0),s["a"].patch(i["g"].API.PATCH+"/"+e.id,e).then((function(e){t.commit("patch",Object(m["a"])(e,"data.data"))})).finally((function(){return t.commit("setLoading",!1)}))},remove:function(t,e){return t.commit("setLoading",!0),s["a"].remove(i["g"].API.DELETE+"/"+e).then((function(){t.dispatch("get",d["a"].currentRoute)})).finally((function(){return t.commit("setLoading",!1)}))},get:function(t,e){return t.commit("setLoading",!0),s["a"].get(i["g"].API.GET,{params:e.query}).then((function(e){t.commit("set",Object(m["a"])(e,"data.data")),t.commit("setTotal",Object(m["a"])(e,"data.total"))})).finally((function(){return t.commit("setLoading",!1)}))},getById:function(t,e){return t.commit("setLoading",!0),s["a"].get(i["g"].API.GET+"/"+e.id).finally((function(){return t.commit("setLoading",!1)}))}}},h={namespaced:!0,state:{current:null,total:0,items:[],loading:!1},mutations:{setTotal:function(t,e){t.total=e},setLoading:function(t,e){t.loading=e},setCurrent:function(t,e){t.current=e},set:function(t,e){a["a"].set(t,"items",e)},post:function(t,e){t.items.unshift(e)},patch:function(t,e){for(var n=0;n<t.items.length;n++)if(t.items[n].id===e.id)return void a["a"].set(t.items,n,e)}},actions:{post:function(t,e){return t.commit("setLoading",!0),s["a"].post(i["d"].API.POST,e).then((function(e){Object(m["a"])(d["a"].currentRoute,"query.page")||t.commit("post",Object(m["a"])(e,"data.data"))})).finally((function(){return t.commit("setLoading",!1)}))},patch:function(t,e){return t.commit("setLoading",!0),s["a"].patch(i["d"].API.PATCH+"/"+e.id,e).then((function(e){t.commit("patch",Object(m["a"])(e,"data.data"))})).finally((function(){return t.commit("setLoading",!1)}))},remove:function(t,e){return t.commit("setLoading",!0),s["a"].remove(i["d"].API.DELETE+"/"+e).then((function(){t.dispatch("get",d["a"].currentRoute)})).finally((function(){return t.commit("setLoading",!1)}))},get:function(t,e){return t.commit("setLoading",!0),s["a"].get(i["d"].API.GET,{params:e.query}).then((function(e){t.commit("set",Object(m["a"])(e,"data.data")),t.commit("setTotal",Object(m["a"])(e,"data.total"))})).finally((function(){return t.commit("setLoading",!1)}))},getById:function(t,e){return t.commit("setLoading",!0),s["a"].get(i["d"].API.GET+"/"+e.id).finally((function(){return t.commit("setLoading",!1)}))}}},v={namespaced:!0,state:{current:null,total:0,items:[],loading:!1},mutations:{setTotal:function(t,e){t.total=e},setLoading:function(t,e){t.loading=e},setCurrent:function(t,e){t.current=e},set:function(t,e){a["a"].set(t,"items",e)},post:function(t,e){t.items.unshift(e)},patch:function(t,e){for(var n=0;n<t.items.length;n++)if(t.items[n].id===e.id)return void a["a"].set(t.items,n,e)}},actions:{post:function(t,e){return t.commit("setLoading",!0),s["a"].post(i["e"].API.POST,e).then((function(e){Object(m["a"])(d["a"].currentRoute,"query.page")||t.commit("post",Object(m["a"])(e,"data.data"))})).finally((function(){return t.commit("setLoading",!1)}))},patch:function(t,e){return t.commit("setLoading",!0),s["a"].patch(i["e"].API.PATCH+"/"+e.id,e).then((function(e){t.commit("patch",Object(m["a"])(e,"data.data"))})).finally((function(){return t.commit("setLoading",!1)}))},remove:function(t,e){return t.commit("setLoading",!0),s["a"].remove(i["e"].API.DELETE+"/"+e).then((function(){t.dispatch("get",d["a"].currentRoute)})).finally((function(){return t.commit("setLoading",!1)}))},get:function(t,e){return t.commit("setLoading",!0),s["a"].get(i["e"].API.GET,{params:e.query}).then((function(e){t.commit("set",Object(m["a"])(e,"data.data")),t.commit("setTotal",Object(m["a"])(e,"data.total"))})).finally((function(){return t.commit("setLoading",!1)}))},getById:function(t,e){return t.commit("setLoading",!0),s["a"].get(i["e"].API.GET+"/"+e.id).finally((function(){return t.commit("setLoading",!1)}))}}},g="sortType",b="sortDirection";function y(){var t=localStorage.getItem(g)||i["a"].sort.types[0].value,e=localStorage.getItem(b)||i["a"].sort.direction[0].value;return{type:t,direction:Number(e)}}a["a"].use(o["a"]);e["a"]=new o["a"].Store({state:{mode:{},query:{},opened:{},sort:y()},mutations:{setSortType:function(t,e){e||(e=null),a["a"].set(t.sort,"type",e),localStorage.setItem(g,e)},setSortDirection:function(t,e){e||(e=null),a["a"].set(t.sort,"direction",e),localStorage.setItem(b,e)},setQuery:function(t,e){e||(e={}),t.query=e},setOpened:function(t,e){e||(e={}),t.opened=e},mode:function(t,e){a["a"].set(t,"mode",e)}},getters:{getSortObj:function(t,e){var n={};return n[t.sort.type]=t.sort.direction,n}},modules:{user:p,tasks:f,plans:h,projects:v}})},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("navbar"),t.showSelectBar?n("select-bar"):t._e(),n("router-view"),n("page-footer")],1)},r=[],i=(n("b0c0"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"is-flex select-bar"},[n("b-button",{staticClass:"is-size-7-tablet z-index-3",class:{"is-primary":t.isProject},attrs:{disabled:!t.projectBtnRoute,loading:t.projectLoading},on:{click:function(e){return t.loadPage(t.projectBtnRoute)}}},[t._v(" "+t._s(t.TYPES.project.text)+" "),n("tri",{staticClass:"icon tri is-large",class:{"fill-primary":t.isProject}})],1),n("b-button",{staticClass:"is-size-7-tablet extra-pad z-index-2",class:{"is-primary":t.isPlan},attrs:{disabled:!t.planBtnRoute,loading:t.planLoading},on:{click:function(e){return t.loadPage(t.planBtnRoute)}}},[t._v(" "+t._s(t.TYPES.plan.text)+" "),n("tri",{staticClass:"icon tri is-large",class:{"fill-primary":t.isPlan}})],1),n("b-button",{staticClass:"is-size-7-tablet extra-pad z-index-1",class:{"is-primary":t.isTask},attrs:{disabled:!t.taskBtnRoute,loading:t.taskLoading},on:{click:function(e){return t.loadPage(t.taskBtnRoute)}}},[t._v(" "+t._s(t.TYPES.task.text)+" "),n("tri",{staticClass:"icon tri is-large",class:{"fill-primary":t.isTask}})],1)],1)}),s=[],c=n("5a50"),u=n("28bc"),l={name:"selectBar",components:{tri:u["a"]},data:function(){return{TYPES:c["h"]}},computed:{mode:function(){return this.$store.state.mode},hasQuery:function(){return this.$store.state.query},opened:function(){return this.$store.state.opened},current:function(){return this.$store.state[this.mode.store].current},hasSelected:function(){return!!(this.current&&this.current.id>0)},isProject:function(){return this.mode.value===c["h"].project.value},isPlan:function(){return this.mode.value===c["h"].plan.value},isTask:function(){return this.mode.value===c["h"].task.value},projectLoading:function(){return this.$store.state[c["h"].project.store].loading},planLoading:function(){return this.$store.state[c["h"].plan.store].loading},taskLoading:function(){return this.$store.state[c["h"].task.store].loading},projectBtnRoute:function(){return this.isProject||this.isPlan||this.isTask?{name:c["h"].project.route.name}:void 0},planBtnRoute:function(){return this.isProject?this.hasSelected?{name:c["h"].plan.route.name,query:{project:this.current.id}}:null:this.isPlan?{name:c["h"].plan.route.name,query:this.query}:this.isTask?{name:c["h"].plan.route.name,query:{project:this.opened.project}}:void 0},taskBtnRoute:function(){return this.isProject?null:this.isPlan?this.hasSelected?{name:c["h"].task.route.name,query:{plan:this.current.id}}:null:this.isTask?{name:c["h"].task.route.name,query:this.query}:void 0}},methods:{loadPage:function(t){this.$router.push(t)}}},p=l,d=n("2877"),m=Object(d["a"])(p,i,s,!1,null,null,null),f=m.exports,h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"parent"},[n("div",{ref:"footer",attrs:{id:"footer"}},[n("div",{staticClass:"is-flex has-text-light"},[t._v(" Made with "),n("svg",{staticClass:"icon px-2 fill-light",attrs:{viewBox:"0 0 907 828"}},[n("path",{attrs:{d:"M730.084,312.85c4.226,113.133 -40.828,236.381 -79.883,320.702c-29.137,63.033 -92.165,103.467 -161.607,103.675c-58.148,0.184 -129.832,0.398 -188.066,0.573c-68.886,0.206 -131.752,-39.215 -161.569,-101.314c-43.597,-90.793 -96.522,-224.663 -88.059,-325.713"}}),n("path",{attrs:{d:"M710,410.13l137.329,0c0,0 27.947,188.444 -226.001,233.406"}})]),t._v(" by "),n("a",{staticClass:"pl-2",attrs:{rel:"noreferrer",target:"_blank",href:"https://github.com/k-flynn-webdev"}},[t._v(" k-flynn-webdev ")])]),n("div",{staticClass:"is-hidden-mobile pl-2"},[n("small",{staticClass:"has-text-light"},[t._v(" alpha "+t._s(t.version)+" ")])])])])},v=[],g={name:"PageFooter",computed:{version:function(){return"0.1.0"}},mounted:function(){document.body.appendChild(this.$refs.footer)},beforeDestroy:function(){document.body.removeChild(this.$refs.footer),this.$refs.parent.appendChild(this.$refs.footer)}},b=g,y=Object(d["a"])(b,h,v,!1,null,null,null),j=y.exports,k=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("b-navbar",{staticClass:"navbar",class:{"is-active":t.isOpen},attrs:{centered:"",transparent:"",active:t.isOpen,mobileBurger:!1},on:{"update:active1":t.closeNavBar}},[n("template",{slot:"brand"},[n("b-navbar-item",{attrs:{tag:"router-link",to:t.home.route}},[n("svg",{staticClass:"app-icon icon fill-primary",staticStyle:{"fill-rule":"evenodd","clip-rule":"evenodd","stroke-linejoin":"round","stroke-miterlimit":"2"},attrs:{viewBox:"0 0 100 100",version:"1.1"}},[n("path",{staticStyle:{fill:"rgba(0, 0, 0, 0.2)"},attrs:{d:"M76.37,36.698c0,-9.812 -7.966,-17.778 -17.778,-17.778l-35.555,0c-9.812,0 -17.778,7.966 -17.778,17.778l-0,35.556c-0,9.812 7.966,17.778 17.778,17.778l35.555,-0c9.812,-0 17.778,-7.966 17.778,-17.778l0,-35.556Z"}}),n("path",{attrs:{d:"M43.492,84.926l-35.66,-35.661l18.228,-18.229l17.369,17.37l35.538,-35.538l18.292,18.291l-53.767,53.767Z"}})])]),n("b-navbar-item",{staticClass:"navbar__main",attrs:{tag:"router-link",to:t.home.route}},[n("h1",{staticClass:"is-size-4 navbar__main-title"},[n("strong",[t._v(" "+t._s(t.title)+" ")])])]),n("b-button",{staticClass:"navbar__btn is-transparent",on:{click:function(e){t.isOpen=!t.isOpen}}},[n("icOption",{staticClass:"fill-light"})],1)],1)],2),n("navMenu",{class:{"is-active":t.isOpen},on:{close:function(e){t.isOpen=!t.isOpen}}})],1)},_=[],T=n("5530"),O=n("2f62"),x=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"navbar__options"},[n("b-button",{staticClass:"navbar__options-close is-transparent",on:{click:t.onClose}},[n("icClose",{staticClass:"is-medium"})],1),n("div",{staticClass:"option user"},[n("p",{staticClass:"title"},[t._v("User")]),n("div",{staticClass:"control"},[t.isLoggedIn?[n("b-button",{staticClass:"mb-2",attrs:{expanded:"",type:"is-secondary1",tag:"router-link",to:{name:"user"}}},[t._v(" User ")]),n("btnLogout")]:[n("b-button",{staticClass:"mb-2",attrs:{expanded:"",type:"is-primary",tag:"router-link",to:{name:"create"}}},[t._v(" Sign up ")]),n("b-button",{staticClass:"mb-2",attrs:{expanded:"",tag:"router-link",to:{name:"login"}}},[t._v(" Login ")])]],2)]),n("div",{staticClass:"option sort"},[n("p",{staticClass:"title"},[t._v("Sort")]),n("b-field",{attrs:{label:"Direction"}},[n("div",{staticClass:"block p-0"},t._l(t.appVars.sort.direction,(function(e,a){return n("b-radio",{attrs:{name:"sortOrder","native-value":e.value},model:{value:t.sortDirection,callback:function(e){t.sortDirection=e},expression:"sortDirection"}},[t._v(" "+t._s(e.name)+" ")])})),1)]),n("b-field",{attrs:{label:"Sort by"}},[n("div",{staticClass:"is-flex start column p-0"},t._l(t.appVars.sort.types,(function(e,a){return n("b-radio",{staticClass:"mb-2",attrs:{name:"sortType","native-value":e.value},model:{value:t.sortType,callback:function(e){t.sortType=e},expression:"sortType"}},[t._v(" "+t._s(e.name)+" ")])})),1)])],1)],1)},P=[],L=n("b05c"),w=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-button",{staticClass:"mb-2",attrs:{type:"is-primary",expanded:"",loading:t.isLoading},on:{click:t.submitForm}},[t._v(" Logout ")])},C=[],E=n("c0dc"),S=n("ec41"),I={name:"btnLogout",data:function(){return{isLoading:!1}},methods:{submitForm:function(){var t=this;if(!this.isLoading)return this.isLoading=!0,E["a"].remove(c["c"].API.DELETE).then((function(e){E["a"].authRemove(),t.isLoading=!1,t.$buefy.toast.open({duration:1500,message:Object(S["a"])(e,"data.message","success"),position:"is-top",type:"is-success"}),t.$router.push(c["b"].route)})).catch((function(e){throw t.isLoading=!1,t.$buefy.toast.open({duration:5e3,message:Object(S["a"])(e,"response.data.message","error"),position:"is-top",type:"is-danger"}),e}))}}},$=I,A=Object(d["a"])($,w,C,!1,null,null,null),B=A.exports,D={name:"navMenu",components:{icClose:L["a"],btnLogout:B},computed:Object(T["a"])({appVars:function(){return c["a"]},sortType:{get:function(){return this.$store.state.sort.type},set:function(t){this.$store.commit("setSortType",t)}},sortDirection:{get:function(){return this.$store.state.sort.direction},set:function(t){this.$store.commit("setSortDirection",t)}}},Object(O["b"])("user",["isLoggedIn","user"])),methods:{onClose:function(){this.$emit("close")}}},M=D,q=Object(d["a"])(M,x,P,!1,null,null,null),R=q.exports,z=n("fb6e"),G={name:"navbar",data:function(){return{home:c["h"].home,isOpen:!1}},components:{icOption:z["a"],navMenu:R},computed:Object(T["a"])(Object(T["a"])({},Object(O["b"])({mode:function(t){return t.mode}})),{},{title:function(){if(this.mode.value===c["h"].project.value)return c["a"].name;var t=this.$store.state.opened;return t.value?t.value:c["a"].name}}),watch:{$route:function(){this.closeNavBar()},"$store.state.sort":{handler:"closeNavBar",deep:!0}},methods:{closeNavBar:function(){if(this.isOpen){var t=this;setTimeout((function(){t.isOpen=!1}),300)}}}},H=G,N=Object(d["a"])(H,k,_,!1,null,null,null),Z=N.exports,F={name:"App",components:{selectBar:f,navbar:Z,pageFooter:j},computed:{showSelectBar:function(){return!(!c["h"][this.$route.name]||!c["h"][this.$route.name].store)}}},Y=F,J=Object(d["a"])(Y,o,r,!1,null,null,null),U=J.exports,V=n("a18c"),Q=n("4360"),W=n("289d"),X=(n("5abe"),n("85c3"),n("4de4"),n("4160"),n("a15b"),n("159b"),function(t,e){var n=new Date(t[e]),a=n.getDate(),o=n.getMonth()+1,r=n.getFullYear();return[a,o,r]}),K={name:"itemLogin",filter:function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],a=!(arguments.length>3&&void 0!==arguments[3])||arguments[3];if(!t)return"";if(!t.login_at)return"";var o=[],r=X(t,"login_at");return e&&o.push(r[0]),n&&o.push(r[1]),a&&o.push(r[2]),o.join("/")}},tt={name:"itemUpdate",filter:function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],a=!(arguments.length>3&&void 0!==arguments[3])||arguments[3];if(!t)return"";if(!t.updated_at)return"";var o=[],r=X(t,"updated_at");return e&&o.push(r[0]),n&&o.push(r[1]),a&&o.push(r[2]),o.join("/")}},et={name:"itemDate",filter:function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],a=!(arguments.length>3&&void 0!==arguments[3])||arguments[3];if(!t)return"";if(!t.created_at)return"";var o=[],r=X(t,"created_at");return e&&o.push(r[0]),n&&o.push(r[1]),a&&o.push(r[2]),o.join("/")}},nt=[K,et,tt],at=function(t){nt.forEach((function(e){return t.filter(e.name,e.filter)}))};a["a"].config.productionTip=!1,at(a["a"]),a["a"].use(W["a"]),new a["a"]({router:V["a"],store:Q["a"],render:function(t){return t(U)}}).$mount("#app")},"5a50":function(t,e,n){"use strict";n.d(e,"a",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"j",(function(){return r})),n.d(e,"f",(function(){return i})),n.d(e,"i",(function(){return s})),n.d(e,"e",(function(){return c})),n.d(e,"d",(function(){return u})),n.d(e,"g",(function(){return l})),n.d(e,"b",(function(){return p})),n.d(e,"h",(function(){return d}));var a={name:"Minitask",pageLimit:20,sort:{direction:[{name:"asc",value:1},{name:"desc",value:-1}],types:[{name:"created",value:"created_at"},{name:"updated",value:"updated_at"},{name:"done",value:"done_at"}]}},o={value:"login",route:{name:"login",path:"/login"},API:{POST:"/api/authentication",DELETE:"/api/authentication"}},r={value:"verify",route:{name:"verify",path:"/verify"},API:{GET:"/api/verify"}},i={value:"recover",route:{name:"recover",path:"/recover"},API:{GET:"/api/recover",PATCH:"/api/recover"}},s={value:"user",store:"user",route:{name:"user",path:"/user"},API:{GET:"/api/users/me",POST:"/api/users",PATCH:"/api/users",DELETE:"/api/users"}},c={index:3,text:"projects",value:"project",store:"projects",parent:null,child:"plan",children:["project","plan","task"],route:{name:"project",path:"/projects"},API:{GET:"/api/projects",POST:"/api/projects",PATCH:"/api/projects",DELETE:"/api/projects"}},u={index:2,text:"plans",value:"plan",store:"plans",parent:"project",child:"task",children:["plan","task"],route:{name:"plan",path:"/plans"},API:{GET:"/api/plans",POST:"/api/plans",PATCH:"/api/plans",DELETE:"/api/plans"}},l={index:1,text:"tasks",value:"task",store:"tasks",parent:"plan",child:null,children:["task"],route:{name:"task",path:"/tasks"},API:{GET:"/api/tasks",POST:"/api/tasks",PATCH:"/api/tasks",DELETE:"/api/tasks"}},p={value:"Minitask",route:{name:"home",path:"/"}},d={home:p,project:c,plan:u,task:l}},"85c3":function(t,e,n){},a18c:function(t,e,n){"use strict";n("99af"),n("d3b7");var a=n("2909"),o=n("2b0e"),r=n("8c4f"),i=(n("b0c0"),n("5a50")),s=[{path:i["i"].route.path,name:i["i"].route.name,component:function(){return n.e("user").then(n.bind(null,"1511"))}},{path:"/create",name:"create",component:function(){return n.e("create").then(n.bind(null,"d879"))}},{path:i["c"].route.path,name:i["c"].route.name,component:function(){return n.e("login").then(n.bind(null,"a55b"))}},{path:"/logout",name:"logout",component:function(){return n.e("logout").then(n.bind(null,"c100"))}},{path:i["j"].route.path+"/:token",name:i["j"].route.name,component:function(){return n.e("verify").then(n.bind(null,"b6d1"))}},{path:i["f"].route.path,name:i["f"].route.name,component:function(){return n.e("recover").then(n.bind(null,"4889"))}},{path:i["f"].route.path+"/:token",name:i["f"].route.name+"-token",component:function(){return n.e("recover").then(n.bind(null,"4889"))}}],c=[{path:i["e"].route.path,name:i["e"].route.name,props:{type:"project"},component:function(){return n.e("items").then(n.bind(null,"acca"))}},{path:i["d"].route.path,name:i["d"].route.name,props:{type:"plan"},component:function(){return n.e("items").then(n.bind(null,"0d1e"))}},{path:i["g"].route.path,name:i["g"].route.name,props:{type:"task"},component:function(){return n.e("items").then(n.bind(null,"eb1f"))}}],u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"my-1 pb-3"},[n("router-link",{staticClass:"has-text-link",attrs:{to:{name:"project"}}},[t._v(" Projects ")]),n("router-link",{staticClass:"has-text-link",attrs:{to:{name:"plan"}}},[t._v(" Plans ")]),n("router-link",{staticClass:"has-text-link",attrs:{to:{name:"task"}}},[t._v(" Tasks ")]),t._m(0)],1)},l=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",{staticClass:"columns is-centered"},[n("div",{staticClass:"column is-8 has-text-light has-text-centered"},[n("p",{staticClass:"is-size-4 has-text-weight-bold is-uppercase"},[t._v(" Welcome to Minitask ")]),n("p",{staticClass:"is-size-5"},[t._v(" A simple, fast, no-frills task manager. ")]),n("p",{staticClass:"is-size-6"},[t._v(" To get started, choose a option from below. ")])])])])}],p={name:"Home",created:function(){this.$store.commit("mode",i["h"]["home"]),this.$store.commit("setOpened",{})}},d=p,m=n("2877"),f=Object(m["a"])(d,u,l,!1,null,null,null),h=f.exports;o["a"].use(r["a"]);var v=[{path:"/",name:"home",component:h},{path:"/about",name:"about",component:function(){return n.e("about").then(n.bind(null,"f820"))}}].concat(Object(a["a"])(s),Object(a["a"])(c)),g=new r["a"]({mode:"history",base:"/",routes:v});e["a"]=g},b05c:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("svg",{staticClass:"icon",staticStyle:{"fill-rule":"evenodd","clip-rule":"evenodd","stroke-linejoin":"round","stroke-miterlimit":"2"},attrs:{viewBox:"0 0 200 200",version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","xml:space":"preserve","xmlns:serif":"http://www.serif.com/"}},[n("path",{attrs:{d:"M100,68.887l50.205,-50.204l31.112,31.112l-50.204,50.205l50.204,50.205l-31.112,31.112l-50.205,-50.204l-50.205,50.204l-31.112,-31.112l50.204,-50.205l-50.204,-50.205l31.112,-31.112l50.205,50.204Z"}})])},o=[],r=n("2877"),i={},s=Object(r["a"])(i,a,o,!1,null,null,null);e["a"]=s.exports},c0dc:function(t,e,n){"use strict";var a=n("a18c"),o=n("4360"),r=n("bc3a"),i=n.n(r),s=n("4328"),c="accessToken";function u(t){i.a.defaults.headers.common.authorization="Bearer ".concat(t),localStorage.setItem(c,t),o["a"].commit("user/isLoggedIn",!0)}function l(){i.a.defaults.headers.common.authorization=null,localStorage.removeItem(c),o["a"].commit("user/isLoggedIn",!1)}function p(t){return t.data&&t.data.accessToken&&u(t.data.accessToken),t}function d(t){throw 401===t.response.status&&"Unauthorized"===t.response.statusText&&(l(),setTimeout((function(){a["a"].push({name:"login"})}),500)),t}function m(t,e){return i.a.get(t,e)}function f(t,e){return i.a.post(t,e)}function h(t,e){return i.a.put(t,e)}function v(t,e){return i.a.patch(t,e)}function g(t,e){return i.a.delete(t,e)}i.a.defaults.headers.common["Accept-Version"]="v1",i.a.defaults.headers.common["X-Requested-With"]="XMLHttpRequest",i.a.defaults.paramsSerializer=function(t){return s.stringify(t,{encode:!1})},function(){var t=localStorage.getItem(c);t?u(t):l()}(),i.a.interceptors.response.use(p,d);var b={get:m,post:f,put:h,patch:v,remove:g,authSet:u,authRemove:l};e["a"]=b},fb6e:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("svg",{staticClass:"icon",staticStyle:{"fill-rule":"evenodd","clip-rule":"evenodd","stroke-linejoin":"round","stroke-miterlimit":"2"},attrs:{viewBox:"0 0 200 200",version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","xml:space":"preserve","xmlns:serif":"http://www.serif.com/"}},[n("path",{attrs:{d:"M0,155.556l178.182,0l21.818,44.444l-180,0l-20,-44.444Zm0,-77.778l178.182,0l21.818,44.444l-180,0l-20,-44.444Zm0,-77.778l178.182,0l21.818,44.444l-180,0l-20,-44.444Z"}})])},o=[],r=n("2877"),i={},s=Object(r["a"])(i,a,o,!1,null,null,null);e["a"]=s.exports}});