!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports["style/auto-hide-sidebar"]=e():t["style/auto-hide-sidebar"]=e()}(self,(function(){return function(){var t,e,n={285:function(t,e,n){var o=n(645)((function(t){return t[1]}));o.push([t.id,'body .be-settings::before {\n  content: "";\n  position: fixed;\n  width: 8px;\n  width: var(--auto-hide-sidebar-width, 8px);\n  height: 100vh;\n  top: 0;\n  left: 0;\n}\nbody .be-settings > .sidebar {\n  transition: transform 0.2s ease-out;\n}\nbody .be-settings:not(:hover) > .sidebar {\n  transform: translateX(calc(-100% * var(--direction))) translateY(-50%);\n}\nbody.settings-panel-dock-right .be-settings::before {\n  left: unset;\n  right: 0;\n}',""]),t.exports=o},645:function(t){"use strict";
// eslint-disable-next-line func-names
t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=t(e);return e[2]?"@media ".concat(e[2]," {").concat(n,"}"):n})).join("")},
// eslint-disable-next-line func-names
e.i=function(t,n,o){"string"==typeof t&&(
// eslint-disable-next-line no-param-reassign
t=[[null,t,""]]);var r={};if(o)for(var i=0;i<this.length;i++){
// eslint-disable-next-line prefer-destructuring
var a=this[i][0];null!=a&&(r[a]=!0)}for(var s=0;s<t.length;s++){var u=[].concat(t[s]);o&&r[u[0]]||(n&&(u[2]?u[2]="".concat(n," and ").concat(u[2]):u[2]=n),e.push(u))}},e}},879:function(t,e,n){var o=n(285);o&&o.__esModule&&(o=o.default),t.exports="string"==typeof o?o:o.toString()}},o={};function r(t){var e=o[t];if(void 0!==e)return e.exports;var i=o[t]={id:t,exports:{}};return n[t](i,i.exports,r),i.exports}e=Object.getPrototypeOf?function(t){return Object.getPrototypeOf(t)}:function(t){return t.__proto__},r.t=function(n,o){if(1&o&&(n=this(n)),8&o)return n;if("object"==typeof n&&n){if(4&o&&n.__esModule)return n;if(16&o&&"function"==typeof n.then)return n}var i=Object.create(null);r.r(i);var a={};t=t||[null,e({}),e([]),e(e)];for(var s=2&o&&n;"object"==typeof s&&!~t.indexOf(s);s=e(s))Object.getOwnPropertyNames(s).forEach((function(t){a[t]=function(){return n[t]}}));return a.default=function(){return n},r.d(i,a),i},r.d=function(t,e){for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var i={};return function(){"use strict";r.d(i,{component:function(){return e}});var t=coreApis.settings;const e={name:"autoHideSidebar",entry:()=>{(0,t.addComponentListener)("autoHideSidebar.triggerWidth",(t=>{document.documentElement.style.setProperty("--auto-hide-sidebar-width",`${t}px`)}),!0)},displayName:"自动隐藏侧栏",instantStyles:[{name:"autoHideSidebar",style:()=>Promise.resolve().then(r.t.bind(r,879,23)),important:!0}],tags:[componentsTags.style,componentsTags.general],options:{triggerWidth:{defaultValue:8,displayName:"触发区域宽度 (px)",validator:t=>lodash.clamp(t,1,1e3)}},description:{"zh-CN":"自动隐藏脚本的侧栏 (功能和设置图标). 设置面板停靠在右侧时不建议使用, 因为网页的滚动条会占用右边缘的触发区域."},commitHash:"28f22f84fd8d759d67bad253536c0934d9e32201",coreVersion:"2.1.2"}}(),i=i.component}()}));