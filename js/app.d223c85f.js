(function(n){function t(t){for(var r,i,c=t[0],s=t[1],u=t[2],f=0,p=[];f<c.length;f++)i=c[f],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&p.push(a[i][0]),a[i]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(n[r]=s[r]);l&&l(t);while(p.length)p.shift()();return o.push.apply(o,u||[]),e()}function e(){for(var n,t=0;t<o.length;t++){for(var e=o[t],r=!0,c=1;c<e.length;c++){var s=e[c];0!==a[s]&&(r=!1)}r&&(o.splice(t--,1),n=i(i.s=e[0]))}return n}var r={},a={app:0},o=[];function i(t){if(r[t])return r[t].exports;var e=r[t]={i:t,l:!1,exports:{}};return n[t].call(e.exports,e,e.exports,i),e.l=!0,e.exports}i.m=n,i.c=r,i.d=function(n,t,e){i.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:e})},i.r=function(n){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},i.t=function(n,t){if(1&t&&(n=i(n)),8&t)return n;if(4&t&&"object"===typeof n&&n&&n.__esModule)return n;var e=Object.create(null);if(i.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var r in n)i.d(e,r,function(t){return n[t]}.bind(null,r));return e},i.n=function(n){var t=n&&n.__esModule?function(){return n["default"]}:function(){return n};return i.d(t,"a",t),t},i.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},i.p="/urban-change-page/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var l=s;o.push([0,"chunk-vendors"]),e()})({0:function(n,t,e){n.exports=e("56d7")},1:function(n,t){},2:function(n,t){},"3b60":function(n,t,e){},"56d7":function(n,t,e){"use strict";e.r(t);e("e260"),e("e6cf"),e("cca6"),e("a79d");var r=e("2b0e"),a=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("v-app",[e("v-main",[e("landing-page")],1)],1)},o=[],i=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("v-container",{staticClass:"scl-container outliner",attrs:{fluid:"","fill-height":""}},[e("v-row",{staticClass:"outliner d-flex",attrs:{align:"center",justify:"center"}},[e("v-col",{staticClass:"outliner",attrs:{cols:"10",sm:"6",md:"3",lg:"3"}},[e("div",{staticClass:"scl-title mb-6"},[n._v("Urban"),e("br"),n._v("Changes")]),e("div",{staticClass:"scl-subtitle mb-10"},[n._v(" Help us recognize the changes that occur in cities! ")]),e("v-btn",{staticClass:"scl-button depressed mb-16 white--text",attrs:{tile:"",large:"",color:"#54B0AE"},on:{click:function(t){return n.randomLink()}}},[n._v("LAUNCH SURVEY")]),e("div",{staticClass:"scl-team"},[e("b",[n._v("A project by MIT Senseable City Lab: ")]),n._v(" "),e("br"),n._v(" Zhuangyuan Fan, Kee Jang Moon, Fan Zhang, Pietro Leoni, Fabio Duarte ")])],1)],1)],1)},c=[],s=(e("d3b7"),e("d81d"),e("9911"),e("86ec")),u=e.n(s),l={name:"LandingPage",data:function(){return{links:null}},methods:{randomLink:function(){if(this.links){var n=this.links[Math.floor(Math.random()*this.links.length)];window.open(n,"_blank")}}},mounted:function(){var n=this;fetch("https://raw.githubusercontent.com/brookefzy/urban-change/main/assets/surveylinks.csv").then((function(n){return n.text()})).then((function(t){n.links=u()(t,{columns:!0,skip_empty_lines:!0}).map((function(n){return n.link}))})).catch((function(n){return console.log(n)}))}},f=l,p=(e("eb9e"),e("2877")),d=e("6544"),b=e.n(d),v=e("8336"),h=e("62ad"),g=e("a523"),m=e("0fd9"),y=Object(p["a"])(f,i,c,!1,null,"55cb1b45",null),_=y.exports;b()(y,{VBtn:v["a"],VCol:h["a"],VContainer:g["a"],VRow:m["a"]});var w={name:"App",components:{LandingPage:_},data:function(){return{}}},k=w,j=e("7496"),O=e("f6c4"),C=Object(p["a"])(k,a,o,!1,null,null,null),x=C.exports;b()(C,{VApp:j["a"],VMain:O["a"]});var P=e("2f62");r["a"].use(P["a"]);var M=new P["a"].Store({state:{},mutations:{},actions:{},modules:{}}),S=e("f309");r["a"].use(S["a"]);var L=new S["a"]({});e("5aea");r["a"].config.productionTip=!1,new r["a"]({store:M,vuetify:L,render:function(n){return n(x)}}).$mount("#app")},"5aea":function(n,t,e){},eb9e:function(n,t,e){"use strict";e("3b60")}});
//# sourceMappingURL=app.d223c85f.js.map