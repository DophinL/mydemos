(this.webpackJsonpflip=this.webpackJsonpflip||[]).push([[0],{103:function(e,t,n){},113:function(e,t,n){},152:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(4),l=n.n(o),c=(n(103),n(96)),i=n(68),u=n(69),s=n(41),h=n(42),m=n(94),f=n(97),p=n(155),d=n(37),v=n(156),E=n(159),y=(n(104),n(80)),b=n.n(y),g=(n(109),n(157)),w=n(81),j=n.n(w),C=n(62),O=(n(113),function(){function e(t,n){Object(s.a)(this,e),this.id=t,this.choosen=n}return Object(h.a)(e,[{key:"whoChooseMe",value:function(e){var t=this,n=[];return e.filter((function(e){return e.id!==t.id})).forEach((function(e){e.choosen.find((function(e){return e===t.id}))&&n.push(e.id)})),n}},{key:"whoIsMrsRight",value:function(e){var t=[],n=this.whoChooseMe(e);return this.choosen.forEach((function(e){n.includes(e)&&t.push(e)})),t}},{key:"whoChooseMeAndPriority",value:function(e){var t=this,n=[];return e.filter((function(e){return e.id!==t.id})).forEach((function(e){var a=e.choosen.findIndex((function(e){return e===t.id}));a>-1&&n.push({id:e.id,priority:a+1})})),n}}]),e}());function k(e){var t=e.children;return r.a.createElement("span",{style:{color:"#0055ff"}},t)}var x={1:"\u4e00",2:"\u4e8c",3:"\u4e09",4:"\u56db",5:"\u4e94"};function M(e,t,n){var a=new O(e,t);return{chooseMe:a.whoChooseMe(n),mrsRight:a.whoIsMrsRight(n),chooseMeAndPriority:a.whoChooseMeAndPriority(n)}}function R(e,t,n,a){var o=M(e,t,n).chooseMeAndPriority.map((function(e){return"".concat(e.id,"\uff1a\u7b2c").concat(x[e.priority])})).join("\uff0c");return a?r.a.createElement("span",null,"\u5bf9\u4f60\u5fc3\u52a8\u7684ta\uff0c\u628a\u4f60\u7684\u4f18\u5148\u7ea7\u6392\u5728\u4e86\uff1a",r.a.createElement(k,null,o)):"\u5bf9\u4f60\u5fc3\u52a8\u7684ta\uff0c\u628a\u4f60\u7684\u4f18\u5148\u7ea7\u6392\u5728\u4e86\uff1a"+o}function A(e,t,n){var a=M(e,t,n),r=a.chooseMe,o=a.mrsRight,l="".concat(e,"\uff1a\u9009\u62e9\u4e86 ").concat(t.join("\uff0c"),"\u3002");return 0===r.length?l+="\u5f88\u9057\u61be\u6ca1\u6709\u4eba\u9009\u60a8\uff0c\u8003\u8651\u4e00\u4e0b\u5185\u90e8\u6d88\u5316\uff1f":(l+="\u88ab ".concat(r.join(",")," \u7b49 ").concat(r.length," \u4eba\u9009\u62e9"),o.length>0&&(l+="\u3002\u800c\u4e14\uff0c\u4f60\u5fc3\u52a8\u7684 ".concat(o.join(",")," \u4e5f\u9009\u62e9\u4e86\u4f60\uff01\uff01\uff01")),l+=R(e,t,n)),l}var z=function(e){var t=e.col;return r.a.createElement("th",{style:{width:t.width}},t.label)},I=function(e){Object(f.a)(n,e);var t=Object(m.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){var e=this.props,t=e.className,n=e.columns;return r.a.createElement("table",{className:t},r.a.createElement("thead",null,r.a.createElement("tr",null,n.map((function(e,t){return r.a.createElement(z,{key:e.label,col:e,columnIndex:t})})))),r.a.createElement("tbody",null,this.props.children))}}]),n}(a.PureComponent);function N(e){var t=e.id,n=e.choosen,a=e.dataSource,o=M(t,n,a),l=o.chooseMe,c=o.mrsRight,i="",u=r.a.createElement("span",null,r.a.createElement(p.a,{style:{marginRight:"4px"},icon:r.a.createElement(g.a,null),size:"small"}),t,"\uff1a\u9009\u62e9\u4e86 ",r.a.createElement(k,null,n.join("\uff0c")),"\u3002");return i=0===l.length?r.a.createElement("span",null,u,"\u5f88\u9057\u61be\u6ca1\u6709\u4eba\u9009\u60a8\uff0c\u8003\u8651\u4e00\u4e0b\u5185\u90e8\u6d88\u5316\uff1f"):r.a.createElement("span",null,u,"\u88ab ",r.a.createElement("span",{style:{color:"#0055ff"}},l.join(","))," \u7b49 ",r.a.createElement("span",{style:{color:"#999"}},l.length)," \u4eba\u9009\u62e9\u3002",c.length>0?r.a.createElement("span",null,"\u800c\u4e14\uff0c\u4f60\u5fc3\u52a8\u7684 ",r.a.createElement("span",{style:{color:"#0055ff"}},c.join(","))," \u4e5f\u9009\u62e9\u4e86\u4f60\uff01\uff01\uff01"):null,r.a.createElement("br",null),R(t,n,a,!0)),r.a.createElement("p",null,i," ",r.a.createElement(C.CopyToClipboard,{text:A(t,n,a)},r.a.createElement(d.a,{style:{marginLeft:"10px"},type:"primary",size:"small"},"\u590d\u5236")))}function P(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;return new Array(e).fill(0).map((function(e,a){return new Array(t).fill(0).map((function(e,t){return 0===t?{readOnly:!0,value:n+a+1}:{value:""}}))}))}var S=[{label:"",width:"80px"},{label:"\u7537\u4e3b/\u5973\u4e3b",width:"200px"},{label:"\u9009\u62e91",width:"200px"},{label:"\u9009\u62e92",width:"200px"},{label:"\u9009\u62e93",width:"200px"},{label:"\u9009\u62e94",width:"200px"},{label:"\u9009\u62e95",width:"200px"}],L=j.a.namespace("flip");var B=function(){var e,t=Object(a.useState)(L.get("grid")||P(600,7)),n=Object(u.a)(t,2),o=n[0],l=n[1],s=Object(a.useState)(!1),h=Object(u.a)(s,2),m=h[0],f=h[1],p=Object(a.useCallback)((function(e){var t=o.map((function(e){return Object(i.a)(e)}));e.forEach((function(e){e.cell;var n=e.row,a=e.col,r=e.value;t[n]&&t[n][a]&&(t[n][a]=Object(c.a)({},t[n][a],{value:r}))})),l(t),L.set("grid",t)}),[o]),y=Object(a.useCallback)((function(){v.a.confirm({content:"\u786e\u5b9a\u8981\u6e05\u9664\u672c\u5730\u6570\u636e\u5417\uff1f\u4e0d\u53ef\u6062\u590d",title:"\u786e\u8ba4",onOk:function(){L.remove("grid"),l(P(600,7))}})}),[]),g=Object(a.useCallback)((function(){var e=o.map((function(e){return Object(i.a)(e)})),t=e.concat(P(1,7,e.length));l(t),L.set("grid",t)}),[o]),w=o.filter((function(e){return!!e[1].value.trim()})).map((function(e){return{id:e[1].value,choosen:e.slice(2).map((function(e){return e.value.trim()})).filter((function(e){return!!e}))}}));return r.a.createElement("div",{className:"App"},r.a.createElement(E.a,{message:"\u6570\u636e\u4f1a\u81ea\u52a8\u5b58\u50a8\u5728\u672c\u5730\uff0c\u8bf7\u4e0d\u7528\u62c5\u5fc3\u6570\u636e\u4e22\u5931",type:"success",closable:!0}),r.a.createElement("div",{className:"button-group"},r.a.createElement(d.a,{type:"primary",size:"large",onClick:function(){f(!0)}},"\u8ba1\u7b97\u5339\u914d"),r.a.createElement(d.a,{style:{marginLeft:"20px"},type:"primary",size:"large",onClick:g},"\u65b0\u589e\u884c"),r.a.createElement(d.a,{style:{marginLeft:"20px"},size:"large",onClick:y},"\u6e05\u9664\u672c\u5730\u7f13\u5b58")),r.a.createElement("div",{className:"wrapper"},r.a.createElement(b.a,{data:o,sheetRenderer:function(e){return r.a.createElement(I,Object.assign({columns:S},e))},valueRenderer:function(e){return e.value},onCellsChanged:p})),m?r.a.createElement(v.a,{width:1200,title:"\u8ba1\u7b97\u5339\u914d",visible:!0,footer:null,onCancel:function(){f(!1)}},r.a.createElement(C.CopyToClipboard,{text:(e=w,e.map((function(t){return A(t.id,t.choosen,e)})).join("\n"))},r.a.createElement(d.a,{style:{margin:"0 0 10px"},type:"primary"},"\u4e00\u952e\u590d\u5236\u5168\u90e8\u4fe1\u606f")),w.map((function(e,t){return r.a.createElement(N,{key:t,id:e.id,choosen:e.choosen,dataSource:w})}))):null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(B,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},98:function(e,t,n){e.exports=n(152)}},[[98,1,2]]]);
//# sourceMappingURL=main.906fa10f.chunk.js.map