(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{223:function(e,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var t=function(e,n,a){return n&&r(e.prototype,n),a&&r(e,a),e};function r(e,n){for(var a=0;a<n.length;a++){var t=n[a];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}var o,i=a(0),l=(o=i)&&o.__esModule?o:{default:o},c=a(4),d=a(278),s=a(243),u=a(8),p=a(20);a(279);var f=(function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}(m,l.default.Component),t(m,[{key:"render",value:function(){return l.default.createElement(l.default.Fragment,null,l.default.createElement(p.CloseButton,{classNames:"page narrow contact"}),l.default.createElement("div",{id:"visitor-contact",className:"container narrow-container shadowed",onClick:function(e){return e.stopPropagation()}},this.pageHeaderProvider("far fa-envelope",{pl:"Kontakt",en:"Contact"}),l.default.createElement("div",{className:"company"},"Warsaw Digital Sp. z o.o."),l.default.createElement("div",{className:"address"},this.languageHandler("ul. Twarda 18","Twarda 18 St.")),l.default.createElement("div",{className:"address"},this.languageHandler("00-105 Warszawa","00-105 Warsaw")),l.default.createElement("div",{className:"email"},"Email: ",l.default.createElement("i",null,this.languageHandler("kontakt@warsaw.digital","contact@warsaw.digital")))))}}]),m);function m(e){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,m);var n=function(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}(this,(m.__proto__||Object.getPrototypeOf(m)).call(this,e));return n.pageHeaderProvider=s.pageHeaderProvider.bind(n),n.languageHandler=u.languageHandler.bind(n),n.languageObjectHandler=u.languageObjectHandler.bind(n),n}n.default=(0,c.connect)(d.mapStateToProps,d.mapDispatchToProps)(f)},243:function(e,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.pageHeaderProvider=function(e,n){return o.default.createElement("h2",{className:"page-header"},o.default.createElement("i",{className:e}),o.default.createElement("span",{className:"text"},this.languageObjectHandler(n)))},n.sectionHeaderProvider=function(e,n){return o.default.createElement("h3",{className:"section-header"},o.default.createElement("i",{className:e}),o.default.createElement("span",{className:"text"},this.languageObjectHandler(n)))};var t,r=a(0),o=(t=r)&&t.__esModule?t:{default:t}},278:function(e,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0});n.mapStateToProps=function(e){return{language:e.app.language}},n.mapDispatchToProps=function(){return{}}},279:function(e,n,a){var t=a(280);"string"==typeof t&&(t=[[e.i,t,""]]);var r={hmr:!0,transform:void 0};a(6)(t,r);t.locals&&(e.exports=t.locals)},280:function(e,n,a){(e.exports=a(5)(!1)).push([e.i,".container {\n  position: relative;\n  background: #FDFEFE;\n  border-radius: 3px;\n  padding: 25px; }\n\n.wide-container {\n  width: 1200px; }\n\n.medium-container {\n  width: 720px; }\n  @media only screen and (max-width: 769px) {\n    .medium-container {\n      width: auto; } }\n  @media only screen and (max-width: 480px) {\n    .medium-container {\n      padding: 15px; } }\n\n.narrow-container {\n  width: 456px; }\n  @media only screen and (max-width: 480px) {\n    .narrow-container {\n      padding: 15px;\n      width: 100%; } }\n\n.shadowed {\n  box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 3px 8px 3px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12); }\n\n#visitor-contact .company {\n  font-weight: bold;\n  margin-bottom: 8px; }\n\n#visitor-contact .address {\n  margin-bottom: 8px; }\n\n#visitor-contact .email {\n  margin-top: 48px; }\n\n@media only screen and (max-width: 480px) {\n  #visitor-contact {\n    min-width: auto;\n    width: 100%; } }\n",""])}}]);