(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{nZBp:function(t,a,e){"use strict";e.r(a),e.d(a,"PreviewPageModule",(function(){return w}));var i=e("ofXK"),n=e("3Pt+"),r=e("TEn/"),o=e("tyNb"),s=e("mrSG"),l=e("gcOT"),c=e("9qQK"),b=e("fXoL"),h=e("LEUy");function p(t,a){if(1&t&&(b.Mb(0,"span",11),b.kc(1),b.Lb()),2&t){const t=a.$implicit,e=a.index,i=b.Wb().$implicit;b.zb(1),b.mc(" ",t+(e!=i.length-1?" ":"")," ")}}function u(t,a){if(1&t&&(b.Mb(0,"ion-item"),b.Mb(1,"ion-label",8),b.ic(2,p,2,1,"span",9),b.Mb(3,"strong",10),b.kc(4,","),b.Lb(),b.Lb(),b.Lb()),2&t){const t=a.$implicit;b.zb(2),b.bc("ngForOf",t)}}function d(t,a){if(1&t&&(b.Mb(0,"span",11),b.kc(1),b.Lb()),2&t){const t=a.$implicit,e=a.index,i=b.Wb().$implicit;b.zb(1),b.mc(" ",t+(e!=i.length-1?" ":"")," ")}}function g(t,a){if(1&t&&(b.Mb(0,"ion-item"),b.Mb(1,"ion-label",8),b.ic(2,d,2,1,"span",9),b.Mb(3,"strong",10),b.kc(4,","),b.Lb(),b.Lb(),b.Lb()),2&t){const t=a.$implicit;b.zb(2),b.bc("ngForOf",t)}}function k(t,a){if(1&t){const t=b.Nb();b.Mb(0,"ion-fab",12),b.Mb(1,"ion-button",13),b.Ub("click",(function(){return b.fc(t),b.Wb().save()})),b.Kb(2,"ion-icon",14),b.kc(3," Save "),b.Lb(),b.Lb()}}const{Share:v}=l.a,f=[{path:"",component:(()=>{class t{constructor(t,a,e,i,n,r){this.route=t,this.router=a,this.nav=e,this.alankarService=i,this.storageService=n,this.alertController=r,this.avroh=[],this.aaroh=[],this.alreadySaved=!1,this.route.queryParams.subscribe(t=>{if(this.router.getCurrentNavigation().extras.state){const t=this.router.getCurrentNavigation().extras.state.saved;this.alreadySaved=t||!1,this.alankar=this.router.getCurrentNavigation().extras.state.alankarPhrase}else{if(!t.phrase)return void this.router.navigate(["/home"]);this.alankar={phrase:t.phrase.split(","),rootSwara:t.rootSwara||c.b[0],lastSwara:t.lastSwara||c.a[0],thaat:+(t.thaat||c.f.Bilaval),title:t.title,vargitSwaras:(t.vargitSwaras||"").split(",")}}this.title=this.alankar.title||this.alankar.phrase.join(", "),this.preparePhrases()})}ngOnInit(){}preparePhrases(){const t=this.alankarService.getAlankar(this.alankar.phrase,this.alankar.rootSwara,this.alankar.lastSwara,this.alankar.thaat,this.alankar.vargitSwaras);this.aaroh=t.aaroh,this.avroh=t.avroh}share(){const t=this.alankar.phrase.join(", ");let a=`https://devashishpuri.github.io/aaroh_avroh/home/?phrase=${this.alankar.phrase}&thaat=${this.alankar.thaat}&rootSwara=${this.alankar.rootSwara}&lastSwara=${this.alankar.lastSwara}`;this.alankar.title&&(a+="&title="+this.alankar.title),v.share({title:this.alreadySaved?this.alankar.title:t,text:"View this alankar on the Alankar app",url:encodeURI(a),dialogTitle:this.alreadySaved?this.alankar.title:t})}save(){return Object(s.a)(this,void 0,void 0,(function*(){const t=this.alankar.phrase.join(", "),a=yield this.getTitle(this.alankar.title);(a||""===a)&&(yield this.storageService.saveAlankar(Object.assign(Object.assign({},this.alankar),{title:a||t,date:(new Date).getTime()})),this.nav.navigateRoot("/saved"))}))}getTitle(t){return Object(s.a)(this,void 0,void 0,(function*(){return new Promise((a,e)=>Object(s.a)(this,void 0,void 0,(function*(){const e=yield this.alertController.create({cssClass:"alankar-title",header:"Alankar Name",inputs:[{name:"title",type:"text",placeholder:"Name your Alankar",value:t}],buttons:[{text:"Cancel",role:"cancel",handler:()=>{a(null)}},{text:"Save",handler:t=>{e.dismiss(),a(t.title||"")}}]});yield e.present()})))}))}}return t.\u0275fac=function(a){return new(a||t)(b.Jb(o.a),b.Jb(o.i),b.Jb(r.G),b.Jb(h.a),b.Jb(h.c),b.Jb(r.a))},t.\u0275cmp=b.Db({type:t,selectors:[["app-preview"]],decls:26,vars:7,consts:[[3,"translucent"],["slot","start"],[1,"preview-page",3,"fullscreen","scrollX"],[1,"phrase-title"],[4,"ngFor","ngForOf"],["vertical","bottom","horizontal","end","edge","","slot","fixed",4,"ngIf"],[3,"click"],["slot","start","name","share-social"],[1,"ion-text-wrap"],["class","phrase-swara",4,"ngFor","ngForOf"],[1,"phrase-delimeter"],[1,"phrase-swara"],["vertical","bottom","horizontal","end","edge","","slot","fixed"],[1,"fab-button",3,"click"],["slot","start","name","checkmark"]],template:function(t,a){1&t&&(b.Mb(0,"ion-header",0),b.Mb(1,"ion-toolbar"),b.Mb(2,"ion-buttons",1),b.Kb(3,"ion-back-button"),b.Lb(),b.Mb(4,"ion-title"),b.kc(5),b.Lb(),b.Lb(),b.Lb(),b.Mb(6,"ion-content",2),b.Mb(7,"ion-list"),b.Mb(8,"ion-list-header"),b.Mb(9,"ion-label"),b.Mb(10,"span",3),b.kc(11,"Aaroh"),b.Lb(),b.Lb(),b.Lb(),b.ic(12,u,5,1,"ion-item",4),b.Lb(),b.Mb(13,"ion-list"),b.Mb(14,"ion-list-header"),b.Mb(15,"ion-label"),b.Mb(16,"span",3),b.kc(17,"Avroh"),b.Lb(),b.Lb(),b.Lb(),b.ic(18,g,5,1,"ion-item",4),b.Lb(),b.ic(19,k,4,0,"ion-fab",5),b.Lb(),b.Mb(20,"ion-footer"),b.Mb(21,"ion-toolbar"),b.Mb(22,"ion-buttons",1),b.Mb(23,"ion-button",6),b.Ub("click",(function(){return a.share()})),b.Kb(24,"ion-icon",7),b.kc(25," Share "),b.Lb(),b.Lb(),b.Lb(),b.Lb()),2&t&&(b.bc("translucent",!0),b.zb(5),b.lc(a.title||"Alankar Preview"),b.zb(1),b.bc("fullscreen",!0)("scrollX",!0),b.zb(6),b.bc("ngForOf",a.aaroh),b.zb(6),b.bc("ngForOf",a.avroh),b.zb(1),b.bc("ngIf",!a.alreadySaved))},directives:[r.m,r.D,r.h,r.e,r.f,r.B,r.j,r.q,r.r,r.p,i.j,i.k,r.l,r.g,r.n,r.o,r.k],styles:[".phrase-title[_ngcontent-%COMP%]{color:var(--ion-color-primary);font-size:large;font-weight:700}.phrase-swara[_ngcontent-%COMP%]{white-space:pre}ion-item[_ngcontent-%COMP%]:last-child   .phrase-delimeter[_ngcontent-%COMP%]{display:none}ion-content[_ngcontent-%COMP%]::part(scroll){margin-bottom:32px}ion-fab[_ngcontent-%COMP%]{width:120px;right:8px;bottom:-16px}ion-fab[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]::part(native){border-radius:32px;padding:24px}"]}),t})()},{path:"**",redirectTo:""}];let m=(()=>{class t{}return t.\u0275mod=b.Hb({type:t}),t.\u0275inj=b.Gb({factory:function(a){return new(a||t)},imports:[[o.k.forChild(f)],o.k]}),t})(),w=(()=>{class t{}return t.\u0275mod=b.Hb({type:t}),t.\u0275inj=b.Gb({factory:function(a){return new(a||t)},imports:[[i.b,n.a,r.E,m]]}),t})()}}]);