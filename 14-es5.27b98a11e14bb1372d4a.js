function _classCallCheck(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function _createClass(e,n,t){return n&&_defineProperties(e.prototype,n),t&&_defineProperties(e,t),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"7wo0":function(e,n,t){"use strict";t.r(n),t.d(n,"SettingsPageModule",(function(){return f}));var o,a,i,r=t("ofXK"),s=t("3Pt+"),c=t("TEn/"),l=t("tyNb"),b=t("fXoL"),d=[{path:"",component:(o=function(){function e(){_classCallCheck(this,e),this.prefersDark=window.matchMedia("(prefers-color-scheme: dark)"),this.getDeviceDarkMode(),this.prefersDark.addEventListener("change",this.getDeviceDarkMode.bind(this))}return _createClass(e,[{key:"ngOnInit",value:function(){}},{key:"getDeviceDarkMode",value:function(){this.isDarkMode=this.prefersDark.matches||document.body.classList.contains("dark")}},{key:"toggle",value:function(e){e.detail.checked?document.body.classList.add("dark"):document.body.classList.remove("dark")}}]),e}(),o.\u0275fac=function(e){return new(e||o)},o.\u0275cmp=b.Db({type:o,selectors:[["app-settings"]],decls:26,vars:2,consts:[[3,"translucent"],["color","primary"],["slot","start"],["slot","start","value","partial"],["slot","start","value","full"],["lines","full"],["slot","start","name","moon"],["slot","end",3,"ngModel","ngModelChange","ionChange"]],template:function(e,n){1&e&&(b.Mb(0,"ion-header",0),b.Mb(1,"ion-toolbar",1),b.Mb(2,"ion-buttons",2),b.Kb(3,"ion-menu-button"),b.Kb(4,"ion-back-button"),b.Lb(),b.Mb(5,"ion-title"),b.kc(6,"Settings"),b.Lb(),b.Lb(),b.Lb(),b.Mb(7,"ion-content"),b.Mb(8,"ion-list"),b.Mb(9,"ion-radio-group"),b.Mb(10,"ion-list-header"),b.Mb(11,"ion-label"),b.kc(12,"Choose Swara Selection"),b.Lb(),b.Lb(),b.Mb(13,"ion-item"),b.Mb(14,"ion-label"),b.kc(15,"Partial Madra Saptak, Madhya Saptak"),b.Lb(),b.Kb(16,"ion-radio",3),b.Lb(),b.Mb(17,"ion-item"),b.Mb(18,"ion-label"),b.kc(19,"Full Madra Saptak, Madhya Saptak"),b.Lb(),b.Kb(20,"ion-radio",4),b.Lb(),b.Lb(),b.Mb(21,"ion-item",5),b.Kb(22,"ion-icon",6),b.Mb(23,"ion-label"),b.kc(24," Toggle Dark Theme "),b.Lb(),b.Mb(25,"ion-toggle",7),b.Ub("ngModelChange",(function(e){return n.isDarkMode=e}))("ionChange",(function(e){return n.toggle(e)})),b.Lb(),b.Lb(),b.Lb(),b.Lb()),2&e&&(b.bc("translucent",!0),b.zb(25),b.bc("ngModel",n.isDarkMode))},directives:[c.k,c.D,c.f,c.r,c.c,c.d,c.B,c.h,c.o,c.v,c.J,c.p,c.n,c.m,c.u,c.H,c.l,c.C,c.a,s.d,s.e],styles:[""]}),o)}],u=((i=function e(){_classCallCheck(this,e)}).\u0275mod=b.Hb({type:i}),i.\u0275inj=b.Gb({factory:function(e){return new(e||i)},imports:[[l.i.forChild(d)],l.i]}),i),f=((a=function e(){_classCallCheck(this,e)}).\u0275mod=b.Hb({type:a}),a.\u0275inj=b.Gb({factory:function(e){return new(e||a)},imports:[[r.b,s.a,c.E,u]]}),a)}}]);