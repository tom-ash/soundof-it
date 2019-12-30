(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{226:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=function(e,n,t){return n&&a(e.prototype,n),t&&a(e,t),e};function a(e,n){for(var t=0;t<n.length;t++){var i=n[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var o=m(t(0)),r=t(4),s=t(286),l=t(8),d=t(287),c=m(t(246)),p=t(240),u=t(20);function m(e){return e&&e.__esModule?e:{default:e}}t(288);var f=(function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}(h,o.default.Component),i(h,[{key:"render",value:function(){return o.default.createElement(o.default.Fragment,null,o.default.createElement(u.CloseButton,{classNames:"page medium"}),o.default.createElement("div",{id:"visitor-cookies-policy",className:"container medium-container shadowed",onClick:function(e){return e.stopPropagation()}},this.pageHeaderProvider("fas fa-cookie-bite",{pl:"Polityka Cookies",en:"Cookies Policy"}),o.default.createElement("div",{className:"cookies-policy"},d.text.map(function(e,n){return o.default.createElement(c.default,{key:"cookiesPolicy"+n,data:{tier:e.tier,item:e.item,pl:e.pl,en:e.en}})}))))}}]),h);function h(e){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,h);var n=function(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}(this,(h.__proto__||Object.getPrototypeOf(h)).call(this,e));return n.languageHandler=l.languageHandler.bind(n),n.languageObjectHandler=l.languageObjectHandler.bind(n),n.pageHeaderProvider=p.pageHeaderProvider.bind(n),n}n.default=(0,r.connect)(s.mapStateToProps,s.mapDispatchToProps)(f)},240:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.pageHeaderProvider=function(e,n){return o.default.createElement("h2",{className:"page-header"},o.default.createElement("i",{className:e}),this.languageObjectHandler(n))},n.sectionHeaderProvider=function(e,n){return o.default.createElement("h3",{className:"section-header"},o.default.createElement("i",{className:e}),this.languageObjectHandler(n))};var i,a=t(0),o=(i=a)&&i.__esModule?i:{default:i}},246:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=function(e,n,t){return n&&a(e.prototype,n),t&&a(e,t),e};function a(e,n){for(var t=0;t<n.length;t++){var i=n[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var o,r=t(0),s=(o=r)&&o.__esModule?o:{default:o},l=t(4),d=t(247),c=t(8);t(248);var p=(function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}(u,s.default.Component),i(u,[{key:"render",value:function(){return s.default.createElement("div",{className:"provision "+this.props.data.tier},s.default.createElement("div",{className:"indent"}),s.default.createElement("div",{className:"mark"},this.props.data.item),s.default.createElement("div",{className:"text"},this.languageHandler(this.props.data.pl,this.props.data.en)),s.default.createElement("div",{className:"float-clear"}))}}]),u);function u(e){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,u);var n=function(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}(this,(u.__proto__||Object.getPrototypeOf(u)).call(this,e));return n.languageHandler=c.languageHandler.bind(n),n}n.default=(0,l.connect)(d.mapStateToProps,d.mapDispatchToProps)(p)},247:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});n.mapStateToProps=function(e){return{language:e.app.language}},n.mapDispatchToProps=function(){return{}}},248:function(e,n,t){var i=t(249);"string"==typeof i&&(i=[[e.i,i,""]]);var a={hmr:!0,transform:void 0};t(6)(i,a);i.locals&&(e.exports=i.locals)},249:function(e,n,t){(e.exports=t(5)(!1)).push([e.i,".container {\n  position: relative;\n  background: #FDFEFE;\n  border-radius: 3px;\n  padding: 25px; }\n\n.wide-container {\n  width: 1200px; }\n\n.medium-container {\n  width: 720px; }\n  @media only screen and (max-width: 768px) {\n    .medium-container {\n      width: auto; } }\n  @media only screen and (max-width: 480px) {\n    .medium-container {\n      padding: 15px; } }\n\n.narrow-container {\n  width: 456px; }\n  @media only screen and (max-width: 480px) {\n    .narrow-container {\n      padding: 15px;\n      width: 100%; } }\n\n.shadowed {\n  box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 3px 8px 3px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12); }\n\n.provision {\n  margin-bottom: 5px;\n  color: #2E4053;\n  font-size: 15px;\n  line-height: 20px; }\n  .provision.header {\n    margin-top: 24px;\n    font-weight: bold;\n    position: relative; }\n    .provision.header .mark {\n      position: absolute;\n      line-height: 20px; }\n    .provision.header .text {\n      float: left;\n      text-align: justify;\n      line-height: 20px;\n      padding-left: 48px; }\n      @media only screen and (max-width: 480px) {\n        .provision.header .text {\n          padding-left: 36px; } }\n  .provision.point .mark {\n    position: absolute;\n    line-height: 20px; }\n  .provision.point .text {\n    float: left;\n    text-align: justify;\n    width: 100%;\n    line-height: 20px;\n    padding-left: 48px; }\n    @media only screen and (max-width: 480px) {\n      .provision.point .text {\n        padding-left: 36px; } }\n  .provision.subpoint .mark {\n    position: absolute;\n    padding-left: 48px;\n    line-height: 20px; }\n    @media only screen and (max-width: 480px) {\n      .provision.subpoint .mark {\n        padding-left: 36px; } }\n  .provision.subpoint .text {\n    float: left;\n    padding-left: 86px;\n    text-align: justify;\n    line-height: 20px; }\n    @media only screen and (max-width: 480px) {\n      .provision.subpoint .text {\n        padding-left: 72px; } }\n",""])},286:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});n.mapStateToProps=function(e){return{language:e.app.language}},n.mapDispatchToProps=function(){return{}}},287:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.text=void 0;var i,a=t(0),o=(i=a)&&i.__esModule?i:{default:i};var r="2020.01.01";n.text=[{item:"1.",tier:"header",version:r,pl:o.default.createElement("span",null,"Czym są Pliki Cookies?"),en:o.default.createElement("span",null,"What are Cookies?")},{item:"",tier:"point",version:r,pl:o.default.createElement("span",null,'Przez "Pliki Cookies" w niniejszej Polityce Cookies, jak i w Regulaminie w ogólności, rozumiane są dane informatyczne, takie jak standardowe cookies, sesyjny magazyn (ang. ',o.default.createElement("i",null,"session storage"),"), lokalny magazyn (ang. ",o.default.createElement("i",null,"local storage"),"), itp., przechowywane na urządzeniach Odwiedzających, takich jak, np. komputer, telefon lub tablet, wysyłane na te urządzenia przez Serwis."),en:o.default.createElement("span",null,"As Cookies this Cookies Policy, and the Terms of Service as a whole, understand electronic data, such as standard cookies, session storage, local storage, etc., stored on the Visitors' devices, such as, for example, computer, phone and/or a tablet, send to those devices by the Service.")},{item:"2.",tier:"header",version:r,pl:o.default.createElement("span",null,"W jaki sposób wykorzystywane są Pliki Cookies w Serwisie?"),en:o.default.createElement("span",null,"In what manner Cookies are used in the Service?")},{item:"",tier:"point",version:r,pl:o.default.createElement("span",null,"Serwis wykorzystuje Pliki Cookies w celu zapewnienia swojego należytego funkcjonowania. Korzystanie z Serwisu bez zmiany ustawień przeglądarki w odniesieniu do Plików Cookies oznacza, że dane informatyczne pochodzące od Administratora oraz Zaufanych Partnerów wysyłane z Serwisu będą zapisywane w pamięci urządzenia."),en:o.default.createElement("span",null,"The Service uses the Cookies to ensure its proper functioning. Using of the Service without changing the browser's settings with respect to Cookies means that the electronic data from the Administrator and its Trusted Partners sent through the Service shall be stored in the device's memory.")},{item:"3.",tier:"header",version:r,pl:o.default.createElement("span",null,"W jakim celu wykorzystywane są Pliki Cookies w Serwisie?"),en:o.default.createElement("span",null,"What is the purpose of using Cookies in the Service?")},{item:"",tier:"point",version:r,pl:o.default.createElement("span",null,"Pliki Cookies umożliwiają Serwisowi między innymi: zapewnienie bezpieczeństwa, wprowadzenie funkcjonalności tworzenia i logowania do Konta przez Użytkowników, zapamiętywanie tych zalogowań pomiędzy sesjami, zapamiętywanie wyborów Odwiedzających, prowadzenie statystyk oraz personalizowania funkcjonalności Serwisu oraz treści marketingowych zawartych w Serwisie."),en:o.default.createElement("span",null,"Cookies allow the Service, among other things, to ensure security, introduction of functionality of Account registration and logging in by Users, remembering those logons throughout sessions, remembering of choices of Visitors, maintainig statistics and personalization of Service's features and marketing content included therein.")},{item:"4.",tier:"header",version:r,pl:o.default.createElement("span",null,"Jakie są rodzaje Plików Cookies wykorzystywanych w Serwisie?"),en:o.default.createElement("span",null,"What are the kinds of Cookies used in the Service?")},{item:"",tier:"point",version:r,pl:o.default.createElement("span",null,"Serwis wykorzystuje Pliki Cookies, które ze względu na swój cel można podzielić na trzy kategorie: niezbędne,  statystyczne oraz marketingowe. Korzystanie z Serwisu oznacza akceptację Plików Cookies o niezbędnym charakterze. Odwiedzający może odmówić zgody na otrzymywanie Plików Cookies statystycznych oraz marketingowych."),en:o.default.createElement("span",null,"The Service uses Cookies, which, based on their purpose, can be divided into three categories: indispensable, statistical and marketing. Using of the Service means the acceptance of the indispensalbe Cookies. A Visitor is free to not consent to using by the Service of statistical and marketing Cookies.")},{item:"",tier:"point",version:r,pl:o.default.createElement("span",null,"Ze względu na długość przechowywania Pliki Cookies mogą być podzielone na dwa rodzaje: sesyjne oraz czasowe. Pliki Cookies sesyjne wykasowywane są po zamknięciu przeglądarki, natomiast czasowe pozostają na urządzeniu Odwiedzającego przez określony czas. W Serwisie wykorzystywane są oba te rodzaje Plików Cookies."),en:o.default.createElement("span",null,"With respect to the period of storage Cookies can be divided into two kinds: session and periodic. The session Cookies are erased after closing of the web browser, and periodic Cookies remain on the device of the Visitor for a specified period. Both kinds of Cookies are used by the Service.")},{item:"5",tier:"header",version:r,pl:o.default.createElement("span",null,"Czy mogę nie zgodzić się na stosowanie Plików Cookies?"),en:o.default.createElement("span",null,"Can I not consent to using of Cookies?")},{item:"",tier:"point",version:r,pl:o.default.createElement("span",null,"Podczas pierwszego odwiedzenia Serwisu, jak i w każdym momencie później, Odwiedzający może odmówić zgody na otrzymywanie Plików Cookies o charakterze statystycznym lub marketingowym z Serwisu."),en:o.default.createElement("span",null,"During first visiting of the Service, as well as in any other moment, the Visitor may refuse its consent to receiving of statistical and/or marketing Cookies from the Service.")},{item:"",tier:"point",version:r,pl:o.default.createElement("span",null,"Ponadto, w ustawieniach przeglądarki istnieje możliwość zarządzania otrzymywaniem Plików Cookies."),en:o.default.createElement("span",null,"Furthermore, in the web browser's settings there is a possibility of management of receiving of the Cookies.")}]},288:function(e,n,t){var i=t(289);"string"==typeof i&&(i=[[e.i,i,""]]);var a={hmr:!0,transform:void 0};t(6)(i,a);i.locals&&(e.exports=i.locals)},289:function(e,n,t){(e.exports=t(5)(!1)).push([e.i,".container {\n  position: relative;\n  background: #FDFEFE;\n  border-radius: 3px;\n  padding: 25px; }\n\n.wide-container {\n  width: 1200px; }\n\n.medium-container {\n  width: 720px; }\n  @media only screen and (max-width: 768px) {\n    .medium-container {\n      width: auto; } }\n  @media only screen and (max-width: 480px) {\n    .medium-container {\n      padding: 15px; } }\n\n.narrow-container {\n  width: 456px; }\n  @media only screen and (max-width: 480px) {\n    .narrow-container {\n      padding: 15px;\n      width: 100%; } }\n\n.shadowed {\n  box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 3px 8px 3px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12); }\n\n#visitor-cookies-policy {\n  overflow-y: scroll;\n  max-height: 72%; }\n  @media only screen and (max-width: 480px) {\n    #visitor-cookies-policy {\n      max-height: none; } }\n",""])}}]);