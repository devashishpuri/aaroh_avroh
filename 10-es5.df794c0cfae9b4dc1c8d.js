function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function _createClass(t,e,n){return e&&_defineProperties(t.prototype,e),n&&_defineProperties(t,n),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"ct+p":function(t,e,n){"use strict";n.r(e),n.d(e,"HomePageModule",(function(){return S}));var i=n("ofXK"),a=n("3Pt+"),o=n("TEn/"),r=n("tyNb"),s=n("mrSG"),c=n("LEUy"),l=n("9qQK"),u=n("fXoL"),b=n("NhPE"),h=["phrase"],f=["content"];function p(t,e){if(1&t&&(u.Mb(0,"ion-select-option",19),u.kc(1),u.Lb()),2&t){var n=e.$implicit;u.bc("value",n),u.zb(1),u.mc(" ",n," ")}}function d(t,e){if(1&t&&(u.Mb(0,"ion-select-option",19),u.kc(1),u.Lb()),2&t){var n=e.$implicit;u.bc("value",n),u.zb(1),u.mc(" ",n," ")}}function g(t,e){if(1&t&&(u.Mb(0,"ion-select-option",19),u.kc(1),u.Lb()),2&t){var n=e.$implicit;u.bc("value",n.value),u.zb(1),u.mc(" ",n.key," ")}}function v(t,e){if(1&t){var n=u.Nb();u.Mb(0,"ion-chip",20),u.Ub("press",(function(){u.fc(n);var t=e.$implicit;return u.Wb().onPress(t)}))("click",(function(){u.fc(n);var t=e.$implicit;return u.Wb().addSwara(t)})),u.Mb(1,"ion-label"),u.kc(2),u.Lb(),u.Lb()}if(2&t){var i=e.$implicit,a=u.Wb();u.bc("outline",a.isVargit(i))("color",a.isVargit(i)?"danger":""),u.zb(2),u.lc(i)}}var w,m,k,M=[{path:"",component:(w=function(){function t(e,n,i){_classCallCheck(this,t),this.router=e,this.storage=n,this.platform=i,this.rootSwaras=l.b,this.lastSwaras=l.a,this.thaats=l.d,this.selectedRootSwara=this.rootSwaras[0],this.selectedLastSwara=this.lastSwaras[0],this.selectedThaat=l.f.Bilaval,this.highlightTextArea=!1,this.showAllSwaras=!1,this.vargitSwaras=[],this.result=[],this.originalOrder=function(t,e){return 0},this.fluteSwaras=l.e[this.selectedThaat].swaraSelection,this.getDefaultConf()}return _createClass(t,[{key:"ngOnInit",value:function(){}},{key:"getDefaultConf",value:function(){return Object(s.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.storage.getPreference(c.b.DefaultConfig);case 2:(e=t.sent)&&(this.selectedRootSwara=e.rootSwara,this.selectedLastSwara=e.lastSwara,this.selectedThaat=e.thaat);case 4:case"end":return t.stop()}}),t,this)})))}},{key:"onThaatChange",value:function(t){this.fluteSwaras=l.e[t.target.value].swaraSelection}},{key:"addSwara",value:function(t){var e=this;this.isVargit(t)||(this.result.push(t),this.resultPhrase=this.result.join(", "),this.highlightTextArea=!0,setTimeout((function(){e.highlightTextArea=!1}),300))}},{key:"onPress",value:function(t){var e=this.vargitSwaras.indexOf(t);this.platform.is("ios")||window.navigator.vibrate(50),-1===e?(this.vargitSwaras.push(t),this.result=this.result.filter((function(e){return e!=t}))):this.vargitSwaras.splice(e,1)}},{key:"isVargit",value:function(t){return-1!==this.vargitSwaras.indexOf(t)}},{key:"clearResult",value:function(){this.result=[],this.resultPhrase=null,this.selectedRootSwara=this.rootSwaras[0],this.selectedLastSwara=this.lastSwaras[0]}},{key:"preview",value:function(){return Object(s.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!this.result.length){t.next=5;break}return e={state:{alankarPhrase:{rootSwara:this.selectedRootSwara,lastSwara:this.selectedLastSwara,phrase:this.result,thaat:this.selectedThaat,vargitSwaras:this.vargitSwaras}}},t.next=4,this.router.navigate(["preview"],e);case 4:this.clearResult();case 5:case"end":return t.stop()}}),t,this)})))}},{key:"textChange",value:function(t){var e;"insertLineBreak"===t.detail.inputType&&document.activeElement.blur();var n=t.detail.data,i=null===(e=t.srcElement)||void 0===e?void 0:e.value;i=(i=null==i?void 0:i.replace(/(\d+|\n)/,"")).replace(n,""),this.result=null==i?void 0:i.split(", ").filter((function(t){return t})),this.resultPhrase=this.result.join(", "),this.phrase.value=this.resultPhrase}},{key:"onKeyboardOpen",value:function(){var t=this;setTimeout((function(){window.scrollTo({top:128}),t.content.scrollToBottom()}),300)}}]),t}(),w.\u0275fac=function(t){return new(t||w)(u.Jb(r.i),u.Jb(c.c),u.Jb(o.H))},w.\u0275cmp=u.Db({type:w,selectors:[["app-home"]],viewQuery:function(t,e){var n;1&t&&(u.nc(h,!0),u.nc(f,!0)),2&t&&(u.dc(n=u.Vb())&&(e.phrase=n.first),u.dc(n=u.Vb())&&(e.content=n.first))},decls:47,vars:14,consts:[[3,"translucent"],["slot","start"],["slot","end"],["routerLink","/settings","routerDirection","forward"],["slot","icon-only","name","settings-sharp","routerLink","/settings"],[3,"fullscreen"],["content",""],["interface","popover","placeholder","Root Swara",3,"ngModel","ngModelChange"],[3,"value",4,"ngFor","ngForOf"],["interface","popover","placeholder","Root Swara",3,"ngModel","ionChange","ngModelChange"],[1,"ion-padding-horizontal"],[1,"ion-padding-vertical"],[3,"outline","color","press","click",4,"ngFor","ngForOf"],["enterkeyhint","done","inputmode","numeric","placeholder","Result...",3,"color","value","ionFocus","ionInput"],["phrase",""],["vertical","bottom","horizontal","end","edge","","slot","fixed"],[1,"fab-button",3,"click"],["slot","start","name","checkmark"],[3,"click"],[3,"value"],[3,"outline","color","press","click"]],template:function(t,e){1&t&&(u.Mb(0,"ion-header",0),u.Mb(1,"ion-toolbar"),u.Mb(2,"ion-buttons",1),u.Kb(3,"ion-menu-button"),u.Lb(),u.Mb(4,"ion-title"),u.kc(5,"Home"),u.Lb(),u.Mb(6,"ion-buttons",2),u.Mb(7,"ion-button",3),u.Kb(8,"ion-icon",4),u.Lb(),u.Lb(),u.Lb(),u.Lb(),u.Mb(9,"ion-content",5,6),u.Mb(11,"ion-list"),u.Mb(12,"ion-item"),u.Mb(13,"ion-label"),u.kc(14,"Choose Root Swara"),u.Lb(),u.Mb(15,"ion-select",7),u.Ub("ngModelChange",(function(t){return e.selectedRootSwara=t})),u.ic(16,p,2,2,"ion-select-option",8),u.Lb(),u.Lb(),u.Mb(17,"ion-item"),u.Mb(18,"ion-label"),u.kc(19,"Choose Last Swara"),u.Lb(),u.Mb(20,"ion-select",7),u.Ub("ngModelChange",(function(t){return e.selectedLastSwara=t})),u.ic(21,d,2,2,"ion-select-option",8),u.Lb(),u.Lb(),u.Mb(22,"ion-item"),u.Mb(23,"ion-label"),u.kc(24,"Choose Thaat"),u.Lb(),u.Mb(25,"ion-select",9),u.Ub("ionChange",(function(t){return e.onThaatChange(t)}))("ngModelChange",(function(t){return e.selectedThaat=t})),u.ic(26,g,2,2,"ion-select-option",8),u.Xb(27,"keyvalue"),u.Lb(),u.Lb(),u.Mb(28,"div",10),u.Mb(29,"h6"),u.kc(30,"Choose swaras to build first phrase"),u.Lb(),u.Mb(31,"span"),u.kc(32,"(Long press to make swara a vargit swara)"),u.Lb(),u.Mb(33,"div",11),u.ic(34,v,3,3,"ion-chip",12),u.Lb(),u.Lb(),u.Mb(35,"ion-item"),u.Mb(36,"ion-textarea",13,14),u.Ub("ionFocus",(function(){return e.onKeyboardOpen()}))("ionInput",(function(t){return e.textChange(t)})),u.Lb(),u.Lb(),u.Lb(),u.Mb(38,"ion-fab",15),u.Mb(39,"ion-button",16),u.Ub("click",(function(){return e.preview()})),u.Kb(40,"ion-icon",17),u.kc(41," Preview "),u.Lb(),u.Lb(),u.Lb(),u.Mb(42,"ion-footer"),u.Mb(43,"ion-toolbar"),u.Mb(44,"ion-buttons",1),u.Mb(45,"ion-button",18),u.Ub("click",(function(){return e.clearResult()})),u.kc(46," Clear "),u.Lb(),u.Lb(),u.Lb(),u.Lb()),2&t&&(u.bc("translucent",!0),u.zb(9),u.bc("fullscreen",!0),u.zb(6),u.bc("ngModel",e.selectedRootSwara),u.zb(1),u.bc("ngForOf",e.rootSwaras),u.zb(4),u.bc("ngModel",e.selectedLastSwara),u.zb(1),u.bc("ngForOf",e.lastSwaras),u.zb(4),u.bc("ngModel",e.selectedThaat),u.zb(1),u.bc("ngForOf",u.Yb(27,11,e.thaats,e.originalOrder)),u.zb(8),u.bc("ngForOf",e.fluteSwaras),u.zb(2),u.bc("color",e.highlightTextArea?"primary":"")("value",e.resultPhrase))},directives:[o.m,o.D,o.h,o.t,o.B,o.g,o.I,r.j,o.n,o.j,o.q,o.o,o.p,o.x,o.J,a.d,a.e,i.j,o.A,o.K,o.k,o.l,o.y,o.i,b.a],pipes:[i.f],styles:["ion-fab[_ngcontent-%COMP%]{width:120px;right:32px;bottom:-16px}ion-fab[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]::part(native){border-radius:32px;padding:24px}ion-textarea[_ngcontent-%COMP%]{font-size:large;margin-bottom:32px}ion-chip[_ngcontent-%COMP%]{font-size:medium;padding:18px 14px}"]}),w)}],L=((k=function t(){_classCallCheck(this,t)}).\u0275mod=u.Hb({type:k}),k.\u0275inj=u.Gb({factory:function(t){return new(t||k)},imports:[[r.k.forChild(M)],r.k]}),k),S=((m=function t(){_classCallCheck(this,t)}).\u0275mod=u.Hb({type:m}),m.\u0275inj=u.Gb({factory:function(t){return new(t||m)},imports:[[i.b,a.a,o.E,L]]}),m)}}]);