(this.webpackJsonpflip=this.webpackJsonpflip||[]).push([[0],{114:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(3),l=n.n(c),o=(n(74),n(68)),i=n(65),u=n(41),s=n(24),h=n(25),d=n(64),f=n(67),p=n(21),m=n(116),v=(n(75),n(51)),b=n.n(v),w=(n(80),n(52)),E=n.n(w),g=(n(81),function(){function e(t,n){Object(s.a)(this,e),this.id=t,this.choosen=n}return Object(h.a)(e,[{key:"whoChooseMe",value:function(e){var t=this,n=[];return e.filter((function(e){return e.id!==t.id})).forEach((function(e){e.choosen.find((function(e){return e===t.id}))&&n.push(e.id)})),n}},{key:"whoIsMrsRight",value:function(e){var t=[],n=this.whoChooseMe(e);return this.choosen.forEach((function(e){n.includes(e)&&t.push(e)})),t}}]),e}());var j=function(e){var t=e.col;return r.a.createElement("th",{style:{width:t.width}},t.label)},y=function(e){Object(f.a)(n,e);var t=Object(d.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){var e=this.props,t=e.className,n=e.columns;return r.a.createElement("table",{className:t},r.a.createElement("thead",null,r.a.createElement("tr",null,n.map((function(e,t){return r.a.createElement(j,{key:e.label,col:e,columnIndex:t})})))),r.a.createElement("tbody",null,this.props.children))}}]),n}(a.PureComponent);function O(e){var t=function(e,t,n){var a=new g(e,t),r=a.whoChooseMe(n),c=a.whoIsMrsRight(n),l="";return 0===r.length?l="\u5f88\u9057\u61be\u6ca1\u6709\u4eba\u9009\u60a8\uff0c\u8003\u8651\u4e00\u4e0b\u5185\u90e8\u6d88\u5316\uff1f":(l="".concat(a.id,": \u88ab ").concat(r.join(",")," \u7b49").concat(r.length,"\u4eba\u9009\u62e9"),c.length>0&&(l+="\uff0c\u800c\u4e14\uff0c\u4f60\u5fc3\u52a8\u7684 ".concat(c.join(",")," \u4e5f\u9009\u62e9\u4e86\u4f60\uff01\uff01\uff01"))),l}(e.id,e.choosen,e.dataSource);return r.a.createElement("p",null,t)}var x=[{label:"\u7537\u4e3b/\u5973\u4e3b",width:"100px"},{label:"\u9009\u62e91",width:"100px"},{label:"\u9009\u62e92",width:"100px"},{label:"\u9009\u62e93",width:"100px"},{label:"\u9009\u62e94",width:"100px"},{label:"\u9009\u62e95",width:"100px"},{label:"\u9009\u62e96",width:"100px"},{label:"\u9009\u62e97",width:"100px"},{label:"\u9009\u62e98",width:"100px"},{label:"\u9009\u62e99",width:"100px"},{label:"\u9009\u62e910",width:"100px"}],k=E.a.namespace("flip");var C=function(){var e,t=Object(a.useState)(k.get("grid")||(e=11,new Array(50).fill(0).map((function(t){return new Array(e).fill(0).map((function(){return{value:""}}))})))),n=Object(u.a)(t,2),c=n[0],l=n[1],s=Object(a.useState)(!1),h=Object(u.a)(s,2),d=h[0],f=h[1],v=Object(a.useCallback)((function(e){var t=c.map((function(e){return Object(i.a)(e)}));e.forEach((function(e){e.cell;var n=e.row,a=e.col,r=e.value;t[n]&&t[n][a]&&(t[n][a]=Object(o.a)({},t[n][a],{value:r}))})),l(t),k.set("grid",t)}),[c]),w=c.filter((function(e){return!!e[0].value.trim()})),E=w.map((function(e){return{id:e[0].value,choosen:e.slice(1).map((function(e){return e.value.trim()}))}}));return r.a.createElement("div",{className:"App"},r.a.createElement(p.a,{type:"primary",size:"large",onClick:function(){f(!0)}},"\u8ba1\u7b97\u5339\u914d"),r.a.createElement("div",{className:"wrapper"},r.a.createElement(b.a,{data:c,sheetRenderer:function(e){return r.a.createElement(y,Object.assign({columns:x},e))},valueRenderer:function(e){return e.value},onCellsChanged:v})),d?r.a.createElement(m.a,{width:1200,title:"\u8ba1\u7b97\u5339\u914d",visible:!0,footer:null,onCancel:function(){f(!1)}},w.map((function(e,t){var n=e.slice(1).map((function(e){return e.value}));return r.a.createElement(O,{key:t,id:e[0].value,choosen:n,dataSource:E})}))):null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(C,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},69:function(e,t,n){e.exports=n(114)},74:function(e,t,n){},81:function(e,t,n){}},[[69,1,2]]]);
//# sourceMappingURL=main.796a717a.chunk.js.map