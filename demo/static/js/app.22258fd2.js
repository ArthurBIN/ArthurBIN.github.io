(function(){"use strict";var t={4017:function(t,e,s){var o=s(5471),n=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},r=[],i=s(1656),a={},l=(0,i.A)(a,n,r,!1,null,null,null),c=l.exports,u=s(173),f=function(){var t=this,e=t._self._c;return e("div",{staticClass:"All"},[t._m(0),e("div",{ref:"scrollArea",staticClass:"MiddleBox"},t._l(t.infoList,(function(s,o){return e("div",{key:o,staticClass:"DataBox",staticStyle:{"overflow-y":"scroll"}},[e("div",{staticClass:"DataItemBox",class:{"align-right":1===s.id,"align-left":2===s.id}},[e("div",{class:{DataItem1:1===s.id,DataItem2:2===s.id}},[t._v(t._s(s.data))])])])})),0),e("div",{staticClass:"speakBigBox"},[t.istext?e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.text,expression:"text"}],staticClass:"speakText",domProps:{value:t.text},on:{input:function(e){e.target.composing||(t.text=e.target.value)}}}):t._e(),e("div",{staticClass:"speakBox_Two"},[e("div",{staticClass:"jianPan",class:{small:t.isJpPressed},style:t.istext?{backgroundColor:"#4fabe5"}:{backgroundColor:"gray"},attrs:{ontouchstart:"return false;",onselectstart:"return false;"},on:{touchstart:function(e){return e.stopPropagation(),t.pressJpButton.apply(null,arguments)},touchend:function(e){return e.stopPropagation(),t.releaseJpButton.apply(null,arguments)}}},[e("i",{staticClass:"iconfont icon-jianpan1"})]),e("div",{staticClass:"SpeakBox",class:{small:t.isPressed},attrs:{ontouchstart:"return false;",onselectstart:"return false;"},on:{touchstart:function(e){return e.stopPropagation(),t.pressButton.apply(null,arguments)},touchend:function(e){return e.stopPropagation(),t.releaseButton.apply(null,arguments)}}},[e("i",{staticClass:"ht iconfont icon-huatong"}),t._v(" 按住说话 ")]),e("div",{staticClass:"faSong",class:{small:t.isFsPressed},style:t.text?{backgroundColor:"#4fabe5"}:{backgroundColor:"gray"},attrs:{ontouchstart:"return false;",onselectstart:"return false;"},on:{touchstart:function(e){return e.stopPropagation(),t.pressFsButton.apply(null,arguments)},touchend:function(e){return e.stopPropagation(),t.releaseFsButton.apply(null,arguments)}}},[e("i",{staticClass:"iconfont icon-fasong"})])])])])},p=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"TopBox"},[e("div",{staticClass:"TitleBox"},[t._v("文本翻译")])])}],d=(s(4114),s(4335)),h={name:"HomeView",data(){return{isPressed:!1,isJpPressed:!1,isFsPressed:!1,istext:!1,text:"",recognition:null,infoList:[]}},mounted(){this.getCachedData(),this.scrollToBottom()},methods:{scrollToBottom(){o.Ay.nextTick((()=>{this.$refs.scrollArea.scrollTop=this.$refs.scrollArea.scrollHeight}))},getCachedData(){const t=localStorage.getItem("infoList");t?(this.$data.infoList=JSON.parse(t),console.log(this.$data.infoList)):console.log("没有找到缓存数据")},pressButton(){this.isPressed=!0,this.recognition=new window.webkitSpeechRecognition,this.recognition.lang="zh-CN",this.recognition.continuous=!0,this.recognition.onresult=t=>{this.$data.text=t.results[t.results.length-1][0].transcript;for(let e=0;e<t.results.length;e++)console.log(t.results[e][0].transcript)},this.recognition.start()},releaseButton(){this.recognition&&(this.recognition.stop(),this.recognition=null),this.isPressed=!1},pressJpButton(){this.isJpPressed=!0},releaseJpButton(){this.isJpPressed=!1,this.istext=!this.istext},pressFsButton(){this.text&&(this.isFsPressed=!0)},releaseFsButton(){this.isFsPressed=!1,this.handleTranslate()},handleTranslate(){const t=this.$data.text,e={id:1,data:t};this.$data.text="",this.istext=!1,this.scrollToBottom();let s=JSON.parse(localStorage.getItem("infoList"))||[];s.push(e),localStorage.setItem("infoList",JSON.stringify(s)),this.getCachedData(),d.A.post("https://aip.baidubce.com/rpc/2.0/mt/texttrans/v1?access_token=24.8f9127728ff2e7ac7ff43a33eb40db88.2592000.1720589798.282335-80733545",{q:t,from:"zh",to:"en"},{headers:{"Content-Type":"application/json;charset=utf-8"}}).then((t=>{const e={id:2,data:t.data.result.trans_result[0].dst};let s=JSON.parse(localStorage.getItem("infoList"))||[];s.push(e),localStorage.setItem("infoList",JSON.stringify(s)),this.getCachedData(),this.scrollToBottom()})).catch((t=>{console.error(t)}))}}},g=h,v=(0,i.A)(g,f,p,!1,null,"e9dad8f4",null),m=v.exports;o.Ay.use(u.Ay);const y=[{path:"/",name:"home",component:m}],x=new u.Ay({routes:y});var b=x,C=s(5353);o.Ay.use(C.Ay);var B=new C.Ay.Store({state:{},getters:{},mutations:{},actions:{},modules:{}});o.Ay.config.productionTip=!1,new o.Ay({router:b,store:B,render:t=>t(c)}).$mount("#app")}},e={};function s(o){var n=e[o];if(void 0!==n)return n.exports;var r=e[o]={exports:{}};return t[o].call(r.exports,r,r.exports,s),r.exports}s.m=t,function(){var t=[];s.O=function(e,o,n,r){if(!o){var i=1/0;for(u=0;u<t.length;u++){o=t[u][0],n=t[u][1],r=t[u][2];for(var a=!0,l=0;l<o.length;l++)(!1&r||i>=r)&&Object.keys(s.O).every((function(t){return s.O[t](o[l])}))?o.splice(l--,1):(a=!1,r<i&&(i=r));if(a){t.splice(u--,1);var c=n();void 0!==c&&(e=c)}}return e}r=r||0;for(var u=t.length;u>0&&t[u-1][2]>r;u--)t[u]=t[u-1];t[u]=[o,n,r]}}(),function(){s.d=function(t,e){for(var o in e)s.o(e,o)&&!s.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){var t={524:0};s.O.j=function(e){return 0===t[e]};var e=function(e,o){var n,r,i=o[0],a=o[1],l=o[2],c=0;if(i.some((function(e){return 0!==t[e]}))){for(n in a)s.o(a,n)&&(s.m[n]=a[n]);if(l)var u=l(s)}for(e&&e(o);c<i.length;c++)r=i[c],s.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return s.O(u)},o=self["webpackChunkaichat"]=self["webpackChunkaichat"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=s.O(void 0,[504],(function(){return s(4017)}));o=s.O(o)})();
//# sourceMappingURL=app.22258fd2.js.map