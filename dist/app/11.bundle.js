(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{225:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=function(e,n,t){return n&&i(e.prototype,n),t&&i(e,t),e};function i(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}var o=m(t(0)),r=t(4),l=t(282),s=t(8),d=t(283),c=m(t(246)),u=t(240),p=t(20);function m(e){return e&&e.__esModule?e:{default:e}}t(284);var h=(function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}(f,o.default.Component),a(f,[{key:"render",value:function(){return o.default.createElement(o.default.Fragment,null,o.default.createElement(p.CloseButton,{classNames:"page medium"}),o.default.createElement("div",{id:"visitor-terms-of-service",className:"container medium-container shadowed",onClick:function(e){return e.stopPropagation()}},this.pageHeaderProvider("fas fa-align-justify",{pl:"Regulamin",en:"Terms Of Service"}),o.default.createElement("div",{className:"terms-of-service"},d.text.map(function(e,n){return o.default.createElement(c.default,{key:"termsOfService"+n,data:{tier:e.tier,item:e.item,pl:e.pl,en:e.en}})}))))}}]),f);function f(e){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,f);var n=function(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}(this,(f.__proto__||Object.getPrototypeOf(f)).call(this,e));return n.languageHandler=s.languageHandler.bind(n),n.languageObjectHandler=s.languageObjectHandler.bind(n),n.pageHeaderProvider=u.pageHeaderProvider.bind(n),n}n.default=(0,r.connect)(l.mapStateToProps,l.mapDispatchToProps)(h)},240:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.pageHeaderProvider=function(e,n){return o.default.createElement("h2",{className:"page-header"},o.default.createElement("i",{className:e}),this.languageObjectHandler(n))},n.sectionHeaderProvider=function(e,n){return o.default.createElement("h3",{className:"section-header"},o.default.createElement("i",{className:e}),this.languageObjectHandler(n))};var a,i=t(0),o=(a=i)&&a.__esModule?a:{default:a}},246:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=function(e,n,t){return n&&i(e.prototype,n),t&&i(e,t),e};function i(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}var o,r=t(0),l=(o=r)&&o.__esModule?o:{default:o},s=t(4),d=t(247),c=t(8);t(248);var u=(function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}(p,l.default.Component),a(p,[{key:"render",value:function(){return l.default.createElement("div",{className:"provision "+this.props.data.tier},l.default.createElement("div",{className:"indent"}),l.default.createElement("div",{className:"mark"},this.props.data.item),l.default.createElement("div",{className:"text"},this.languageHandler(this.props.data.pl,this.props.data.en)),l.default.createElement("div",{className:"float-clear"}))}}]),p);function p(e){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,p);var n=function(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}(this,(p.__proto__||Object.getPrototypeOf(p)).call(this,e));return n.languageHandler=c.languageHandler.bind(n),n}n.default=(0,s.connect)(d.mapStateToProps,d.mapDispatchToProps)(u)},247:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});n.mapStateToProps=function(e){return{language:e.app.language}},n.mapDispatchToProps=function(){return{}}},248:function(e,n,t){var a=t(249);"string"==typeof a&&(a=[[e.i,a,""]]);var i={hmr:!0,transform:void 0};t(6)(a,i);a.locals&&(e.exports=a.locals)},249:function(e,n,t){(e.exports=t(5)(!1)).push([e.i,".container {\n  position: relative;\n  background: #FDFEFE;\n  border-radius: 3px;\n  padding: 25px; }\n\n.wide-container {\n  width: 1200px; }\n\n.medium-container {\n  width: 720px; }\n  @media only screen and (max-width: 768px) {\n    .medium-container {\n      width: auto; } }\n  @media only screen and (max-width: 480px) {\n    .medium-container {\n      padding: 15px; } }\n\n.narrow-container {\n  width: 456px; }\n  @media only screen and (max-width: 480px) {\n    .narrow-container {\n      padding: 15px;\n      width: 100%; } }\n\n.shadowed {\n  box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 3px 8px 3px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12); }\n\n.provision {\n  margin-bottom: 5px;\n  color: #2E4053;\n  font-size: 15px;\n  line-height: 20px; }\n  .provision.header {\n    margin-top: 24px;\n    font-weight: bold;\n    position: relative; }\n    .provision.header .mark {\n      position: absolute;\n      line-height: 20px; }\n    .provision.header .text {\n      float: left;\n      text-align: justify;\n      line-height: 20px;\n      padding-left: 48px; }\n      @media only screen and (max-width: 480px) {\n        .provision.header .text {\n          padding-left: 36px; } }\n  .provision.point .mark {\n    position: absolute;\n    line-height: 20px; }\n  .provision.point .text {\n    float: left;\n    text-align: justify;\n    width: 100%;\n    line-height: 20px;\n    padding-left: 48px; }\n    @media only screen and (max-width: 480px) {\n      .provision.point .text {\n        padding-left: 36px; } }\n  .provision.subpoint .mark {\n    position: absolute;\n    padding-left: 48px;\n    line-height: 20px; }\n    @media only screen and (max-width: 480px) {\n      .provision.subpoint .mark {\n        padding-left: 36px; } }\n  .provision.subpoint .text {\n    float: left;\n    padding-left: 86px;\n    text-align: justify;\n    line-height: 20px; }\n    @media only screen and (max-width: 480px) {\n      .provision.subpoint .text {\n        padding-left: 72px; } }\n",""])},282:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});n.mapStateToProps=function(e){return{language:e.app.language}},n.mapDispatchToProps=function(){return{}}},283:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.text=void 0;var a,i=t(0),o=(a=i)&&a.__esModule?a:{default:a};var r="2020.01.01";n.text=[{item:"1.",tier:"header",version:r,pl:o.default.createElement("span",null,"Wprowadzenie"),en:o.default.createElement("span",null,"Introduction")},{item:"",tier:"point",version:r,pl:o.default.createElement("span",null,"Niniejszy Regulamin określa zasady korzystania z Serwisu."),en:o.default.createElement("span",null,"These Terms of Service stipulate the terms of use of the Service.")},{item:"2.",tier:"header",version:r,pl:o.default.createElement("span",null,"Definicje"),en:o.default.createElement("span",null,"Definitions")},{item:"1.1.",tier:"point",version:r,pl:o.default.createElement("span",null,"W niniejszym Regulaminie wyrażenia pisane z wielkiej litery będą miały następujące znaczenia:"),en:o.default.createElement("span",null,"In these Terms of Service the capitalized expressions shall have the following meanings:")},{item:"a)",tier:"subpoint",version:r,pl:o.default.createElement("span",null,o.default.createElement("strong",null,"Serwis")," - serwis internetowy znajdujący się pod adresem ",o.default.createElement("u",null,"www.warsawlease.pl"),"."),en:o.default.createElement("span",null,o.default.createElement("strong",null,"Service")," - a web service located at the address ",o.default.createElement("u",null,"www.warsawlease.pl"),".")},{item:"b)",tier:"subpoint",version:r,pl:o.default.createElement("span",null,o.default.createElement("strong",null,"Administrator")," - Warsaw Digital Sp. z o.o., z siedzibą w Warszawie przy ul. Twardej 18, 00-105 Warszawa, zarejestrowana w rejestrze przedsiębiorców prowadzonym przez Sąd Rejonowy dla m. st. Warszawy, XII Wydział Gospodarczy Krajowego Rejestru Sądowego, pod numerem KRS 0000735294, o kapitale zakładowym 20.000,00 PLN, w pełni wpłaconym, posiadająca numer REGON 380529016 oraz numer NIP 5252753799."),en:o.default.createElement("span",null,o.default.createElement("strong",null,"Administrator"),"  - Warsaw Digital Sp. z o.o., with its registered office in Warsaw at Twarda 18 St., 00-105 Warsaw, registered in the register of entrepreneurs held by the District Court for the capital city of Warsaw, XII Commercial Division of the National Court Register, under the KRS number 0000735294, with the share capital of 20,000.00 PLN, fully paid, with REGON number 380529016, and NIP number 5252753799.")},{item:"c)",tier:"subpoint",version:r,pl:o.default.createElement("span",null,o.default.createElement("strong",null,"Ogłoszenie")," - zapis w bazie danych Serwisu zawierający dane dotyczące danej nieruchomości, który, po spełnieniu określonych warunków, jest publicznie, czasowo dostępny w Serwisie, dla wszystkich Odwiedzających."),en:o.default.createElement("span",null,o.default.createElement("strong",null,"Announcement")," - a record in the Service's database containing data regarding a given real estate, which, upon meeting specified conditions, is tenably publicly available within the Service to all Visitors.")},{item:"d)",tier:"subpoint",version:r,pl:o.default.createElement("span",null,o.default.createElement("strong",null,"Konto")," - umowa pomiędzy Administratorem oraz danym podmiotem i odpowiadający tej umowie zapis w bazie danych Serwisu umożliwiające temu podmiotowi, po spełnieniu określonych warunków, dodawanie Ogłoszeń w bazie danych Serwisu."),en:o.default.createElement("span",null,o.default.createElement("strong",null,"Account")," - an Agreement between the Administrator and a given entity and a corresponding record in the Service's database, which enable that entity, upon meeting specified conditions, adding Announcements in the Service's database. ")},{item:"e)",tier:"subpoint",version:r,pl:o.default.createElement("span",null,o.default.createElement("strong",null,"Odwiedzający")," - osoba, która uzyskała dostęp do Serwisu, np. poprzez przeglądarkę internetową."),en:o.default.createElement("span",null,o.default.createElement("strong",null,"Visitor")," - a person which obtained access to the Service, for example through a web browser.")},{item:"f)",tier:"subpoint",version:r,pl:o.default.createElement("span",null,o.default.createElement("strong",null,"Użytkownik")," - podmiot posiadający Konto w Serwisie."),en:o.default.createElement("span",null,o.default.createElement("strong",null,"User")," - an entity having an Account in the Service.")},{item:"g)",tier:"subpoint",version:r,pl:o.default.createElement("span",null,o.default.createElement("strong",null,"Ogłoszeniodawca")," - podmiot, który dodał Ogłoszenie w Serwisie."),en:o.default.createElement("span",null,o.default.createElement("strong",null,"Announcer")," - an entity, which added an Announcement in the Service.")},{item:"2.",tier:"header",version:r,pl:o.default.createElement("span",null,"Serwis"),en:o.default.createElement("span",null,"The Service")},{item:"2.1.",tier:"point",version:r,pl:o.default.createElement("span",null,"Właścicielem i administratorem Serwisu jest Administrator."),en:o.default.createElement("span",null,"The owner and the administrator of the Service is the Administrator.")},{item:"2.2.",tier:"point",version:r,pl:o.default.createElement("span",null,"Serwis przeznaczony jest do prezentowania Ogłoszeń odnoszących się do wynajmu biur oraz lokali użytkowych znajdujących się w obrębie m.st. Warszawy."),en:o.default.createElement("span",null,"The Service is intended to present Announcements regarding lease of offices and usable premises located in the area of the capital city of Warsaw.")},{item:"3.",tier:"header",version:r,pl:o.default.createElement("span",null,"Konta"),en:o.default.createElement("span",null,"Accounts")},{item:"3.1.",tier:"point",version:r,pl:o.default.createElement("span",null,"Konto w Serwisie może założyć wyłącznie podmiot posiadający status przedsiębiorcy działający samodzielnie lub poprzez osobę reprezentującą tego przedsiębiorcę."),en:o.default.createElement("span",null,"An Account in the Service can only be registered by an entity being an entrepreneur acting in its own name or by a person representing such an entrepreneur.")},{item:"3.2.",tier:"point",version:r,pl:o.default.createElement("span",null,"Administrator uprawniony jest do deaktywacji lub usunięcia Konta w przypadku stwierdzenia naruszenia Regulaminu przez Użytkownika."),en:o.default.createElement("span",null,"The Administrator is entitled to de-activate and/or delete the Account in case of determining of violation of these Terms of Service by the User.")},{item:"4.",tier:"header",version:r,pl:o.default.createElement("span",null,"Ogłoszenia"),en:o.default.createElement("span",null,"Annoucements")},{item:"4.1.",tier:"point",version:r,pl:o.default.createElement("span",null,"Ogłoszenia nie stanowią ofert w rozumieniu polskiego kodeksu cywilnego, a jedynie zaproszenia do rozpoczęcia negocjacji."),en:o.default.createElement("span",null,"Announcements do not constitute offers within meaning of the Polish Civil Code, but constitute only invitations to commence negotiations.")},{item:"4.2.",tier:"point",version:r,pl:o.default.createElement("span",null,"Ogłoszeniodawcy odpowiedzialni są za zapewnienie, aby treść Ogłoszeń przez nich dodawanych była zgodna z prawem, dobrymi obyczajami oraz normami etycznymi."),en:o.default.createElement("span",null,"Announcers are obligated to ensure that the content of the Announcements added by them is congruent with law, public decency and moral rules.")},{item:"4.3.",tier:"point",version:r,pl:o.default.createElement("span",null,"Odpowiedzialność za treść Ogłoszeń, dotyczącą między innymi ich pełności, aktualności oraz poprawności, ponoszą wyłącznie ich Ogłoszeniodawcy."),en:o.default.createElement("span",null,"The liability for the content of Announcements, regarding - among others - their completeness, up-to-date status and correctness, lies solely with the respective Announcers.")},{item:"4.4.",tier:"point",version:r,pl:o.default.createElement("span",null,"W trakcie dodawania Ogłoszenia, na podstawie podawanego przez Ogłoszeniodawcę miesięcznego czynszu netto, algorytmy Serwisu automatycznie wyliczają miesięczny czynsz brutto, poprzez pomnożenie miesięcznego czynszu netto przez 1,23. Ogłoszeniodawca dodający dane Ogłoszenie potwierdza poprawność tych wyliczeń."),en:o.default.createElement("span",null,"During adding an Annoucement, on the basis of the provided by its Announcer monthly net rent, the Service's algorithms automatically calculate monthly gross rent through mutliplying the monthly net rent by 1.23. The Announcer adding the Announcement confirms the correctness of those calculations.")},{item:"4.5.",tier:"point",version:r,pl:o.default.createElement("span",null,"W trakcie dodawania Ogłoszenia, na podstawie podawanych przez Ogłoszeniodawcę miesięcznego czynszu netto oraz powierzchni, oraz wyliczonego zgodnie z Punktem 4.4 miesięcznego czynszu brutto, algorytmy Serwisu automatycznie wyliczają stawki miesięcznego czynszu netto oraz brutto w odniesieniu do jednego metra kwadratowego powierzchni poprzez odpowiednie podzielenie tych czynszów przez podaną powierzchnię. Ogłoszeniodawca dodający dane Ogłoszenie potwierdza poprawność tych wyliczeń."),en:o.default.createElement("span",null,"During adding an Announcement, on the basis of the provided by its Announcer monthly net rent and the area, and monthly gross rent calculated pursuant to Point 4.4, the Service's algorithms automatically calculate the amounts of the monthly net rent and the monthly gross rent with respect to one square meter of the area through division of those rents by the provided area. The Announcer adding the respective Announcement confirms correctness of those calculations.")},{item:"4.6.",tier:"point",version:r,pl:o.default.createElement("span",null,"Wyliczenia, o których mowa w Punktach 4.4 oraz 4.5 dokonywane są do dwóch miejsc po przecinku z zastosowaniem zaokrąglenia w górę."),en:o.default.createElement("span",null,"The calculations referred to under Points 4.4 and 4.5 are made to two decimal points and with application of rounding up.")},{item:"4.7.",tier:"point",version:r,pl:o.default.createElement("span",null,"W okresie promocyjnym dodanie lub wydłużenie okresu aktywności Ogłoszenia w Serwisie jest nieodpłatne. Po tym okresie cena za dodanie lub wydłużenie okresu aktywności Ogłoszenia będzie ustalona zgodnie z cennikiem."),en:o.default.createElement("span",null,"During promotional period adding and/or extending activation period of an Announcement in the Service is gratuitous. After that period the price for adding and/or extending activation period of an Annoucement shall be provided in the price list.")},{item:"4.8.",tier:"point",version:r,pl:o.default.createElement("span",null,"Początek, czas trwania oraz zakres okresu promocyjnego ustala Administrator."),en:o.default.createElement("span",null,"The beginning, duration and extent of the promotional period is determined by the Administrator.")},{item:"4.9.",tier:"point",version:r,pl:o.default.createElement("span",null,"Dodane Ogłoszenie pozostaje aktywne przez okres 30 dni, chyba, że zostanie wcześniej usunięte przez Ogłoszeniodawcę lub Administratora. Po upływie tego okresu Ogłoszenie zostaje automatycznie usunięte, chyba, że okres aktywacji zostanie przedłużony przez Ogłoszeniodawcę. Ogłoszeniodawca może usunąć ogłoszenie w każdym momencie."),en:o.default.createElement("span",null,"An added Announcement stays active for the period of 30 days, unless, it is earlier deleted by the Announcer or the Administrator. After that period the Announcement is automatically deleted, unless the activation period is extended by the Announcer. The Announcement can be deleted by the Announcer at any time.")},{item:"4.10.",tier:"point",version:r,pl:o.default.createElement("span",null,"Ogłoszenie może być w każdym momencie ukryte przez Ogłoszeniodawcę, co pozostaje jednakże bez wpływu na okres aktywności. Ogłoszenie ukryte jest niewidoczne dla Odwiedzających."),en:o.default.createElement("span",null,"An Announcement can at any time be hidden by the Announcer, which however does not impact the activation period. The hidden Announcement is invisible to Visitors.")},{item:"4.11.",tier:"point",version:r,pl:o.default.createElement("span",null,"Administrator uprawniony jest do ukrycia, deaktywacji lub usunięcia Ogłoszenia w przypadku stwierdzenia naruszenia Regulaminu przez Ogłoszeniodawcę."),en:o.default.createElement("span",null,"The Administrator is entitled to hide, de-activate and/or delete the Annoucement in case of determining of violation of these Terms of Service by the Announcer.")},{item:"5.",tier:"header",version:r,pl:o.default.createElement("span",null,"Prawa i odpowiedzialność Administratora."),en:o.default.createElement("span",null,"The rights and liability of the Administrator")},{item:"5.1.",tier:"point",version:r,pl:o.default.createElement("span",null,"Administrator uprawniony jest w każdym momencie do zaprzestania świadczenia usług poprzez Serwis, jak i do wprowadzania przerw w świadczeniu tych usług, z zastrzeżeniem  Punktu 5.2."),en:o.default.createElement("span",null,"The Administrator is entitled at any time to terminate rendering of the services through the Service, and/or to interrupt rendering of those services, with the reservation of Point 5.2.")},{item:"5.2.",tier:"point",version:r,pl:o.default.createElement("span",null,"W przypadku zaprzestania świadczenia usług, bądź wprowadzenia przerw w ich świadczeniu, Ogłoszeniodawcy dotkniętemu takim zaprzestaniem lub przerwą przysługuje jedynie proporcjonalny zwrot kwoty zapłaconej Administratorowi za dodanie ogłoszenia dotkniętego takim zaprzestaniem lub przerwą."),en:o.default.createElement("span",null,"In case of termination of rendering of the services or their interruptions an Announcer affected by that termination or interruption is entitled only to a proportional reimbursement of the amount paid to the Administrator for adding of the Annoucement affected by that termination or interruption.")},{item:"5.3.",tier:"point",version:r,pl:o.default.createElement("span",null,"Odpowiedzialność Administratora wobec danego Ogłoszeniodawcy w odniesieniu do danego Ogłoszenia ograniczona jest do wysokości opłaty poniesionej przez tego Ogłoszeniodawcę w odniesieniu do tego Ogłoszenia na rzecz Administratora."),en:o.default.createElement("span",null,"The liability of the Administrator to a given Announcer with respect to a given Announcement is limited to the amount paid by that Announcer with respect to that Announcement to the Administrator.")},{item:"6.",tier:"header",version:r,pl:o.default.createElement("span",null,"Ochrona danych osobowych"),en:o.default.createElement("span",null,"Personal Data Protection")},{item:"6.1.",tier:"point",version:r,pl:o.default.createElement("span",null,"Integralnymi częściami niniejszego Regulaminu są Polityka Prywatności oraz Polityka Plików Cookies."),en:o.default.createElement("span",null,"The Privacy Policy and the Cookies Policy consitute integral parts of these Terms of Service.")},{item:"6.2.",tier:"point",version:r,pl:o.default.createElement("span",null,"Podmiot tworzący Konto upoważnia Administratora do przetwarzanie danych osobowych powiązanych z tym Kontem."),en:o.default.createElement("span",null,"An entity creating an Account authorizes the Administrator to process personal data connected with that Account.")},{item:"6.3.",tier:"point",version:r,pl:o.default.createElement("span",null,"Użytkownicy przyjmują do wiadomości, że dodanie Ogłoszenia w Serwisie wiąże się z nieograniczonym upublicznieniem ich nazwy (firmy) oraz numeru telefonu, podanych przy rejestracji Konta lub później."),en:o.default.createElement("span",null,"Users acknowledge that the adding of an Announcement in the Service is connected with unlimited publication of their business name and phone numbers, provided during creation of the Account or later.")},{item:"7.",tier:"header",version:r,pl:o.default.createElement("span",null,"Postanowienia końcowe"),en:o.default.createElement("span",null,"Final Provisions")},{item:"7.1.",tier:"point",version:r,pl:o.default.createElement("span",null,"Niniejszy Regulamin poddany jest prawu polskiemu."),en:o.default.createElement("span",null,"These Terms of Service are governed by the Polish law.")},{item:"7.2.",tier:"point",version:r,pl:o.default.createElement("span",null,"Spory wynikłe z niniejszego Regulaminu rozstrzygane będą przez sąd właściwy dla Administratora."),en:o.default.createElement("span",null,"Disputes arising out of these Terms of Service shall be determined by the court having jurisdiction over the Administrator.")},{item:"7.3.",tier:"point",version:r,pl:o.default.createElement("span",null,"Niniejszy Regulamin obowiązuje od dnia 1 stycznia 2020 r."),en:o.default.createElement("span",null,"These Terms of Service are applicable as of 1st January 2020.")},{item:"7.4.",tier:"point",version:r,pl:o.default.createElement("span",null,"Administrator ma prawo do zmiany Regulaminu, Polityki Prywatności, Polityki Cookies oraz Cennika poprzez zamieszczenie zmian tych dokumentów w Serwisie pod adresem ",o.default.createElement("i",null,"www.warsawlease.pl"),". Zmiany te wchodzą w życie po upływie okresu 14 dni od ich ogłoszenia."),en:o.default.createElement("span",null,"The Administrator is authorized to amend these Terms of Service, the Privacy Policy, the Cookies Policy and the Pricing through publication of the amendments to those documents within the Service under the address ",o.default.createElement("i",null,"www.warsawlease.pl"),". The amendments are applicable after the lapse of the period of 14 days from their publication.")}]},284:function(e,n,t){var a=t(285);"string"==typeof a&&(a=[[e.i,a,""]]);var i={hmr:!0,transform:void 0};t(6)(a,i);a.locals&&(e.exports=a.locals)},285:function(e,n,t){(e.exports=t(5)(!1)).push([e.i,".container {\n  position: relative;\n  background: #FDFEFE;\n  border-radius: 3px;\n  padding: 25px; }\n\n.wide-container {\n  width: 1200px; }\n\n.medium-container {\n  width: 720px; }\n  @media only screen and (max-width: 768px) {\n    .medium-container {\n      width: auto; } }\n  @media only screen and (max-width: 480px) {\n    .medium-container {\n      padding: 15px; } }\n\n.narrow-container {\n  width: 456px; }\n  @media only screen and (max-width: 480px) {\n    .narrow-container {\n      padding: 15px;\n      width: 100%; } }\n\n.shadowed {\n  box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 3px 8px 3px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12); }\n\n#visitor-terms-of-service {\n  overflow-y: scroll;\n  max-height: 72%; }\n  @media only screen and (max-width: 480px) {\n    #visitor-terms-of-service {\n      max-height: none; } }\n",""])}}]);