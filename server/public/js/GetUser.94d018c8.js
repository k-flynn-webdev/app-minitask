(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["GetUser"],{"78b7":function(t,e,s){"use strict";s.r(e);var r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("br")},n=[],a=s("5dff"),o=s("b6dd"),u=s("8adc"),i=s("fbc4"),c=s("6ffa"),d=s("35ca"),f={name:"GetUser",props:{user:{type:String,default:o["a"].CLEAR}},mounted:function(){return this.getUser()},methods:{getUser:function(){var t=this;return d["a"].getUserDev({user:this.user}).then((function(e){return t.handleSuccess(e)})).catch((function(e){return t.handleError(e)}))},handleSuccess:function(t){var e=this,s={message:t.data.message,isTimed:!0,isError:!1};this.$store.commit("toasts/addToast",s),u["a"].timeDelay((function(){e.$router.push({name:a["a"].HOME})}),i["a"].DELAY)},handleError:function(t){var e=this;this.$store.commit("toasts/addToast",t),u["a"].timeDelay((function(){e.$store.commit("setStatus",c["a"].CLEAR)}),i["a"].DELAY_ERROR)}}},h=f,l=s("2877"),m=Object(l["a"])(h,r,n,!1,null,null,null);e["default"]=m.exports}}]);
//# sourceMappingURL=GetUser.94d018c8.js.map