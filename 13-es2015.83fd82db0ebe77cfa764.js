(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{upH8:function(t,n,i){"use strict";i.r(n),i.d(n,"SavedPageModule",(function(){return v}));var e=i("ofXK"),a=i("3Pt+"),o=i("TEn/"),r=i("tyNb"),s=i("mrSG"),c=i("gcOT"),l=i("fXoL"),b=i("LEUy");function u(t,n){1&t&&l.Kb(0,"div")}function h(t,n){if(1&t){const t=l.Nb();l.Mb(0,"ion-list"),l.Mb(1,"ion-item",7),l.Ub("click",(function(){l.fc(t);const i=n.$implicit;return l.Wb(2).preview(i)})),l.Mb(2,"ion-label"),l.Mb(3,"h2"),l.kc(4),l.Lb(),l.Mb(5,"h3"),l.kc(6),l.Lb(),l.Mb(7,"p"),l.kc(8),l.Xb(9,"date"),l.Lb(),l.Lb(),l.Mb(10,"ion-button",8),l.Ub("click",(function(i){l.fc(t);const e=n.$implicit;return l.Wb(2).share(i,e)})),l.Kb(11,"ion-icon",9),l.Lb(),l.Mb(12,"ion-button",8),l.Ub("click",(function(i){l.fc(t);const e=n.$implicit;return l.Wb(2).remove(i,e)})),l.Kb(13,"ion-icon",10),l.Lb(),l.Lb(),l.Lb()}if(2&t){const t=n.$implicit,i=l.Wb(2);l.zb(4),l.lc(t.title),l.zb(2),l.lc(i.getDescription(t.phrase)),l.zb(2),l.lc(l.Yb(9,3,t.date,"short"))}}function p(t,n){if(1&t&&l.ic(0,h,14,6,"ion-list",6),2&t){const t=l.Wb();l.bc("ngForOf",t.alankars)}}function f(t,n){1&t&&(l.Mb(0,"div",11),l.kc(1," No Data Found "),l.Lb())}const{Share:d}=c.a,k=[{path:"",component:(()=>{class t{constructor(t,n){this.router=t,this.storage=n,this.alankars=[],this.fetchAlankars()}ngOnInit(){}fetchAlankars(){return Object(s.a)(this,void 0,void 0,(function*(){this.alankars=yield this.storage.getSavedAlankars()}))}preview(t){return Object(s.a)(this,void 0,void 0,(function*(){let n={state:{alankarPhrase:t,saved:!0}};yield this.router.navigate(["preview"],n)}))}remove(t,n){return Object(s.a)(this,void 0,void 0,(function*(){t.stopPropagation(),yield this.storage.deleteAlankar(n.id);const i=this.alankars.indexOf(n);this.alankars.splice(i,1)}))}share(t,n){t.stopPropagation(),d.share({title:n.title,text:"View this alankar on the Alankar app",url:`https://devashishpuri.github.io/aaroh_avroh/home?phrase=${n.phrase}&thaat=${n.thaat}&rootSwara=${n.rootSwara}&lastSwara=${n.lastSwara}&title=${n.title}`,dialogTitle:n.title})}getDescription(t){return t.join(", ")}}return t.\u0275fac=function(n){return new(n||t)(l.Jb(r.i),l.Jb(b.c))},t.\u0275cmp=l.Db({type:t,selectors:[["app-saved"]],decls:12,vars:5,consts:[[3,"translucent"],["slot","start"],[3,"fullscreen"],[4,"ngIf","ngIfThen","ngIfElse"],["savedAlankars",""],["noData",""],[4,"ngFor","ngForOf"],["button","",3,"click"],["slot","end","fill","clear",3,"click"],["slot","icon-only","ios","share-social","md","share-social"],["slot","icon-only","ios","trash","md","trash"],[1,"no-data"]],template:function(t,n){if(1&t&&(l.Mb(0,"ion-header",0),l.Mb(1,"ion-toolbar"),l.Mb(2,"ion-buttons",1),l.Kb(3,"ion-menu-button"),l.Lb(),l.Mb(4,"ion-title"),l.kc(5,"Saved Alankars"),l.Lb(),l.Lb(),l.Lb(),l.Mb(6,"ion-content",2),l.ic(7,u,1,0,"div",3),l.ic(8,p,1,1,"ng-template",null,4,l.jc),l.ic(10,f,2,0,"ng-template",null,5,l.jc),l.Lb()),2&t){const t=l.ec(9),i=l.ec(11);l.bc("translucent",!0),l.zb(6),l.bc("fullscreen",!0),l.zb(1),l.bc("ngIf",n.alankars&&n.alankars.length)("ngIfThen",t)("ngIfElse",i)}},directives:[o.m,o.D,o.h,o.t,o.B,o.j,e.k,e.j,o.q,o.o,o.p,o.g,o.n],pipes:[e.d],styles:[".no-data[_ngcontent-%COMP%]{text-align:center;margin-top:8vh}"]}),t})()}];let g=(()=>{class t{}return t.\u0275mod=l.Hb({type:t}),t.\u0275inj=l.Gb({factory:function(n){return new(n||t)},imports:[[r.k.forChild(k)],r.k]}),t})(),v=(()=>{class t{}return t.\u0275mod=l.Hb({type:t}),t.\u0275inj=l.Gb({factory:function(n){return new(n||t)},imports:[[e.b,a.a,o.E,g]]}),t})()}}]);