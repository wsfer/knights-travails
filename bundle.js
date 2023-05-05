(()=>{"use strict";var e={192:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(81),i=n.n(r),o=n(645),s=n.n(o)()(i());s.push([e.id,'header{background-color:#805d93;width:100%;padding:2rem;display:flex;justify-content:left;align-items:center}header h1{color:#f0edee;display:flex;justify-content:center;align-items:center;gap:1rem}header svg{width:3rem;height:3rem}header svg>path{fill:#f0edee}.board{display:grid;grid-template-columns:repeat(8, 1fr);grid-template-rows:repeat(8, 1fr);position:relative;height:50vw;width:50vw}.board>div:nth-child(even) .square:nth-child(even){background-color:#f0edee}.board>div:nth-child(even) .square:nth-child(odd){background-color:#0a090c}.board>div:nth-child(odd) .square:nth-child(even){background-color:#0a090c}.board>div:nth-child(odd) .square:nth-child(odd){background-color:#f0edee}.board>.invisible{position:absolute;width:100%;height:100%;opacity:0}.square{height:100%;display:flex;justify-content:center;align-items:center}.square#knight{background-color:#805d93}.square#target{background-color:#f70}.square>.knight-icon>path{fill:#f0edee}main{background-color:#f0edee;display:flex;justify-content:center;flex-wrap:wrap;gap:2rem;padding:2rem 4rem}.board-status{display:flex;flex-direction:column;gap:1rem}.board-status *{text-align:center}.board-status .from,.board-status .path span:first-child{font-weight:bold;color:#805d93}.board-status .to,.board-status .path span:first-child+span{font-weight:bold;color:#f70}.board-status .path{list-style:none}.board-status .steps{font-weight:bold}footer{background-color:#805d93;width:100%;padding:1rem;display:flex;flex-direction:column;justify-content:center;align-items:center;gap:.5rem}footer>h3{color:#f0edee}footer>.links{display:flex;justify-content:center;gap:.5rem}footer svg{width:2rem;height:2rem}footer svg>path{fill:#f0edee}*{font-family:system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen,Ubuntu,Cantarell,"Open Sans","Helvetica Neue",sans-serif;box-sizing:border-box;padding:0;margin:0;color:inherit;text-decoration:none}body{min-height:100vh;display:grid;grid-template-rows:auto 1fr auto}',""]);const a=s},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,i,o){"string"==typeof e&&(e=[[null,e,void 0]]);var s={};if(r)for(var a=0;a<this.length;a++){var d=this[a][0];null!=d&&(s[d]=!0)}for(var c=0;c<e.length;c++){var h=[].concat(e[c]);r&&s[h[0]]||(void 0!==o&&(void 0===h[5]||(h[1]="@layer".concat(h[5].length>0?" ".concat(h[5]):""," {").concat(h[1],"}")),h[5]=o),n&&(h[2]?(h[1]="@media ".concat(h[2]," {").concat(h[1],"}"),h[2]=n):h[2]=n),i&&(h[4]?(h[1]="@supports (".concat(h[4],") {").concat(h[1],"}"),h[4]=i):h[4]="".concat(i)),t.push(h))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var o={},s=[],a=0;a<e.length;a++){var d=e[a],c=r.base?d[0]+r.base:d[0],h=o[c]||0,l="".concat(c," ").concat(h);o[c]=h+1;var u=n(l),p={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==u)t[u].references++,t[u].updater(p);else{var f=i(p,r);r.byIndex=a,t.splice(a,0,{identifier:l,updater:f,references:1})}s.push(l)}return s}function i(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,i){var o=r(e=e||[],i=i||{});return function(e){e=e||[];for(var s=0;s<o.length;s++){var a=n(o[s]);t[a].references--}for(var d=r(e,i),c=0;c<o.length;c++){var h=n(o[c]);0===t[h].references&&(t[h].updater(),t.splice(h,1))}o=d}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var i=void 0!==n.layer;i&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,i&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var o=n.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var i=t[r];if(void 0!==i)return i.exports;var o=t[r]={id:r,exports:{}};return e[r](o,o.exports,n),o.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{var e=n(379),t=n.n(e),r=n(795),i=n.n(r),o=n(569),s=n.n(o),a=n(565),d=n.n(a),c=n(216),h=n.n(c),l=n(589),u=n.n(l),p=n(192),f={};f.styleTagTransform=u(),f.setAttributes=d(),f.insert=s().bind(null,"head"),f.domAPI=i(),f.insertStyleElement=h(),t()(p.Z,f),p.Z&&p.Z.locals&&p.Z.locals;(new class{constructor(){this.interface=new class{constructor(){this.range=new Range,this.from=document.querySelector(".from"),this.to=document.querySelector(".to"),this.path=document.querySelector(".path"),this.steps=document.querySelector(".steps"),this.board=document.querySelector(".board")}startKnightMove(e,t,n){this.from.textContent=`From ${e.position}`,this.to.textContent=`To ${t.position}`,this.path.textContent="",this.steps.textContent=`Takes ${n} steps`,this.board.appendChild(this.range.createContextualFragment('<div class="invisible"></div>')),t.square.setAttribute("id","target")}insertPath(e,t){this.path.appendChild(this.range.createContextualFragment(`<li>From <span>${e.position}</span> go to <span>${t.position}</span></li>`))}},this.nodes=Array(8).fill().map((()=>Array(8).fill(null))),this.knightNode=this.buildNode([0,0]),this.knightNode.knight=!0}buildNode([e,t]){const n=new class{#e;constructor(e){this.position=e,this.neighbors=[],this.#e=!1,this.visitedBy=null,this.square=(new Range).createContextualFragment('<div class="square"></div>').querySelector(".square")}set knight(e){e?(this.#e=!0,this.square.removeAttribute("id"),this.square.setAttribute("id","knight"),this.square.appendChild((new Range).createContextualFragment('<svg class="knight-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">\n                        <title>Knight</title>\n                        <path d="M20 8V16L17 17L13.91 11.5C13.65 11.04 12.92 11.27 13 11.81L14 21L4 17L5.15 8.94C5.64 5.53 8.56 3 12 3H20L18.42 5.37C19.36 5.88 20 6.86 20 8Z" />\n                    </svg>'))):(this.#e=!1,this.square.removeAttribute("id"),this.square.removeChild(this.square.querySelector(".knight-icon")))}get knight(){return this.#e}}(`${["a","b","c","d","e","f","g","h"][e]}${t}`);return this.nodes[e][t]=n,n.square.addEventListener("click",(e=>{this.knightMoves(n)})),function([e,t]){return[[e+1,t+2],[e+2,t+1],[e+2,t-1],[e+1,t-2],[e-1,t-2],[e-2,t-1],[e-2,t+1],[e-1,t+2]].filter((([e,t])=>e>=0&&e<=7&&t>=0&&t<=7))}([e,t]).forEach((([e,t])=>{n.neighbors.push(this.nodes[e][t]?this.nodes[e][t]:this.buildNode([e,t]))})),n}knightMoves(e){if(e===this.knightNode)return;const t=[];this.knightNode.visitedBy=-1,t.push(this.knightNode);const n=this.findPath(e,t.shift(),t).slice(1);this.knightNode.visitedBy=null,this.interface.startKnightMove(this.knightNode,e,n.length-1),this.knightNode=n[n.length-1];for(let e=0;e<n.length-1;e+=1)setTimeout((()=>{n[e].knight=!1,n[e+1].knight=!0,this.interface.insertPath(n[e],n[e+1])}),1500*e+1e3);setTimeout((()=>{this.interface.board.removeChild(this.interface.board.querySelector(".invisible")),this.interface.steps.textContent="Done!"}),1500*n.length)}findPath(e,t,n){if(t===e)return[t.visitedBy,t];const r=t.neighbors.filter((e=>null===e.visitedBy));r.forEach((e=>{e.visitedBy=t,n.push(e)}));const i=this.findPath(e,n.shift(),n);return t===i[0]&&i.unshift(t.visitedBy),r.forEach((e=>{e.visitedBy=null})),i}}).nodes.forEach((e=>{const t=document.createElement("div");e.forEach((e=>{t.appendChild(e.square)})),document.querySelector(".board").appendChild(t)}))})()})();