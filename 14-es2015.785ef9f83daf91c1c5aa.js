(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"7wo0":function(e,n,o){"use strict";o.r(n),o.d(n,"SettingsPageModule",(function(){return M}));var t=o("ofXK"),a=o("3Pt+"),i=o("TEn/"),r=o("tyNb"),s=o("mrSG"),c=o("LEUy"),l=o("9qQK"),b=o("fXoL");function f(e,n){if(1&e&&(b.Mb(0,"ion-select-option",9),b.kc(1),b.Lb()),2&e){const e=n.$implicit;b.bc("value",e),b.zb(1),b.mc(" ",e," ")}}function d(e,n){if(1&e&&(b.Mb(0,"ion-select-option",9),b.kc(1),b.Lb()),2&e){const e=n.$implicit;b.bc("value",e),b.zb(1),b.mc(" ",e," ")}}function u(e,n){if(1&e&&(b.Mb(0,"ion-select-option",9),b.kc(1),b.Lb()),2&e){const e=n.$implicit;b.bc("value",e.value),b.zb(1),b.mc(" ",e.key," ")}}const g=[{path:"",component:(()=>{class e{constructor(e){this.storage=e,this.rootSwaras=l.b,this.lastSwaras=l.a,this.thaats=l.d,this.defaultConf={rootSwara:l.b[0],lastSwara:l.a[0],thaat:l.f.Bilaval},this.prefersDark=window.matchMedia("(prefers-color-scheme: dark)"),this.originalOrder=(e,n)=>0,this.getDeviceDarkMode(),this.getDefaultConf(),this.prefersDark.addEventListener("change",this.getDeviceDarkMode.bind(this))}ngOnInit(){}getDefaultConf(){return Object(s.a)(this,void 0,void 0,(function*(){const e=yield this.storage.getPreference(c.b.DefaultConfig);e&&(this.defaultConf=e)}))}getDeviceDarkMode(){return Object(s.a)(this,void 0,void 0,(function*(){this.isDarkMode=this.prefersDark.matches||document.body.classList.contains("dark");const e=yield this.storage.getPreference(c.b.DarkMode);null==e&&null==e||(this.isDarkMode=e)}))}toggle(e){e.detail.checked?(document.body.classList.add("dark"),this.storage.savePreference(c.b.DarkMode,!0)):(document.body.classList.remove("dark"),this.storage.savePreference(c.b.DarkMode,!1))}onConfChange(){this.storage.savePreference(c.b.DefaultConfig,this.defaultConf)}}return e.\u0275fac=function(n){return new(n||e)(b.Jb(c.c))},e.\u0275cmp=b.Db({type:e,selectors:[["app-settings"]],decls:33,vars:11,consts:[[3,"translucent"],["slot","start"],["interface","popover","placeholder","Root Swara",3,"ngModel","ionChange","ngModelChange"],[3,"value",4,"ngFor","ngForOf"],["interface","popover","placeholder","Last Swara",3,"ngModel","ionChange","ngModelChange"],["interface","popover","placeholder","Thaat",3,"ngModel","ionChange","ngModelChange"],["lines","full"],["slot","start","name","moon"],["slot","end",3,"ngModel","ngModelChange","ionChange"],[3,"value"]],template:function(e,n){1&e&&(b.Mb(0,"ion-header",0),b.Mb(1,"ion-toolbar"),b.Mb(2,"ion-buttons",1),b.Kb(3,"ion-menu-button"),b.Kb(4,"ion-back-button"),b.Lb(),b.Mb(5,"ion-title"),b.kc(6,"Settings"),b.Lb(),b.Lb(),b.Lb(),b.Mb(7,"ion-content"),b.Mb(8,"ion-list"),b.Mb(9,"ion-list-header"),b.Mb(10,"ion-label"),b.kc(11,"Choose Default Configuration"),b.Lb(),b.Lb(),b.Mb(12,"ion-item"),b.Mb(13,"ion-label"),b.kc(14,"Choose Root Swara"),b.Lb(),b.Mb(15,"ion-select",2),b.Ub("ionChange",(function(){return n.onConfChange()}))("ngModelChange",(function(e){return n.defaultConf.rootSwara=e})),b.ic(16,f,2,2,"ion-select-option",3),b.Lb(),b.Lb(),b.Mb(17,"ion-item"),b.Mb(18,"ion-label"),b.kc(19,"Choose Last Swara"),b.Lb(),b.Mb(20,"ion-select",4),b.Ub("ionChange",(function(){return n.onConfChange()}))("ngModelChange",(function(e){return n.defaultConf.lastSwara=e})),b.ic(21,d,2,2,"ion-select-option",3),b.Lb(),b.Lb(),b.Mb(22,"ion-item"),b.Mb(23,"ion-label"),b.kc(24,"Choose Thaat"),b.Lb(),b.Mb(25,"ion-select",5),b.Ub("ionChange",(function(){return n.onConfChange()}))("ngModelChange",(function(e){return n.defaultConf.thaat=e})),b.ic(26,u,2,2,"ion-select-option",3),b.Xb(27,"keyvalue"),b.Lb(),b.Lb(),b.Mb(28,"ion-item",6),b.Kb(29,"ion-icon",7),b.Mb(30,"ion-label"),b.kc(31," Toggle Dark Theme "),b.Lb(),b.Mb(32,"ion-toggle",8),b.Ub("ngModelChange",(function(e){return n.isDarkMode=e}))("ionChange",(function(e){return n.toggle(e)})),b.Lb(),b.Lb(),b.Lb(),b.Lb()),2&e&&(b.bc("translucent",!0),b.zb(15),b.bc("ngModel",n.defaultConf.rootSwara),b.zb(1),b.bc("ngForOf",n.rootSwaras),b.zb(4),b.bc("ngModel",n.defaultConf.lastSwara),b.zb(1),b.bc("ngForOf",n.lastSwaras),b.zb(4),b.bc("ngModel",n.defaultConf.thaat),b.zb(1),b.bc("ngForOf",b.Yb(27,8,n.thaats,n.originalOrder)),b.zb(6),b.bc("ngModel",n.isDarkMode))},directives:[i.m,i.D,i.h,i.t,i.e,i.f,i.B,i.j,i.q,i.r,i.p,i.o,i.x,i.J,a.d,a.e,t.j,i.n,i.C,i.b,i.y],pipes:[t.f],styles:[""]}),e})()}];let h=(()=>{class e{}return e.\u0275mod=b.Hb({type:e}),e.\u0275inj=b.Gb({factory:function(n){return new(n||e)},imports:[[r.k.forChild(g)],r.k]}),e})(),M=(()=>{class e{}return e.\u0275mod=b.Hb({type:e}),e.\u0275inj=b.Gb({factory:function(n){return new(n||e)},imports:[[t.b,a.a,i.E,h]]}),e})()}}]);