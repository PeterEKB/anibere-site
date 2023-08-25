"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[126],{126:(N,f,r)=>{r.r(f),r.d(f,{HomeModule:()=>X});var l=r(6895),s=r(1194),y=r(7579),C=r(2722),t=r(8256),b=r(4187),v=r(3440),x=r(8421),_=r(9751),Z=r(5577),O=r(1144),d=r(576),P=r(3268);const M=["addListener","removeListener"],w=["addEventListener","removeEventListener"],k=["on","off"];function p(e,o,n,i){if((0,d.m)(n)&&(i=n,n=void 0),i)return p(e,o,n).pipe((0,P.Z)(i));const[a,Y]=function E(e){return(0,d.m)(e.addEventListener)&&(0,d.m)(e.removeEventListener)}(e)?w.map(c=>m=>e[c](o,m,n)):function A(e){return(0,d.m)(e.addListener)&&(0,d.m)(e.removeListener)}(e)?M.map(g(e,o)):function T(e){return(0,d.m)(e.on)&&(0,d.m)(e.off)}(e)?k.map(g(e,o)):[];if(!a&&(0,O.z)(e))return(0,Z.z)(c=>p(c,o,n))((0,x.Xf)(e));if(!a)throw new TypeError("Invalid event target");return new _.y(c=>{const m=(...u)=>c.next(1<u.length?u:u[0]);return a(m),()=>Y(m)})}function g(e,o){return n=>i=>e[n](o,i)}var h=r(4986);let U=(()=>{class e{transform(n,i=!0){return i?("string"==typeof n&&(n=parseFloat(n)),isNaN(n)?"\u2014":n<0?"-$"+Math.abs(n):0===n?"$0":n%1?"$"+n.toFixed(2):n>0?"$"+n:n):"Sold Out"}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275pipe=t.Yjl({name:"cashFormat",type:e,pure:!0}),e})(),L=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-product-card"]],decls:19,vars:6,consts:[["id","cardCon","routerLink","store"],["id","productImgCon"],["id","productImg"],[1,"img"],["src","assets/images/fridayLook.jpg","alt","",1,"primaryImage"],["src","assets/images/saturdayLook.jpg","alt","",1,"secondaryImage"],["id","details"],["id","category"],["id","title"],["id","price"],["id","salePrice"],["id","fullPrice"]],template:function(n,i){1&n&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),t._UZ(4,"img",4),t.qZA(),t.TgZ(5,"div",3),t._UZ(6,"img",5),t.qZA()()(),t.TgZ(7,"div",6)(8,"div",7),t._uU(9,"Product Category"),t.qZA(),t.TgZ(10,"div",8),t._uU(11,"Title"),t.qZA(),t.TgZ(12,"div",9)(13,"div",10),t._uU(14),t.ALo(15,"cashFormat"),t.qZA(),t.TgZ(16,"div",11),t._uU(17),t.ALo(18,"cashFormat"),t.qZA()()()()),2&n&&(t.xp6(14),t.Oqu(t.lcZ(15,2,5.5)),t.xp6(3),t.Oqu(t.lcZ(18,4,10)))},dependencies:[s.rH,U],styles:["[_nghost-%COMP%]{width:300px}#cardCon[_ngcontent-%COMP%]{width:100%;padding-bottom:1rem;border-radius:.3rem;cursor:pointer;overflow:hidden;transition-duration:.2s}#productImgCon[_ngcontent-%COMP%]{aspect-ratio:1;width:100%;border-radius:.4rem;background-color:var(--light-gray);transition:border-radius .2s ease-in-out;overflow:hidden}#productImg[_ngcontent-%COMP%]{display:flex;height:100%;transition:transform .3s ease-in-out}#productImg[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%]{aspect-ratio:1;flex:1 0 100%;height:100%;overflow:hidden}#productImg[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:100%;min-width:100%;min-height:100%;object-fit:cover;scale:1.1;transition:scale .3s ease-in-out}#details[_ngcontent-%COMP%]{display:flex;flex-direction:column;padding:1rem}#details[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]{font-size:1.2rem}#details[_ngcontent-%COMP%]   #category[_ngcontent-%COMP%]{margin-bottom:.5rem;color:#b3b3b3;font-size:1rem;font-style:italic}#price[_ngcontent-%COMP%]{display:flex;gap:.5rem}#fullPrice[_ngcontent-%COMP%]{order:-1}#salePrice[_ngcontent-%COMP%]{color:red}#salePrice[_ngcontent-%COMP%] + #fullPrice[_ngcontent-%COMP%]{text-decoration:line-through}[_nghost-%COMP%]:hover{z-index:1}[_nghost-%COMP%]:hover   #cardCon[_ngcontent-%COMP%]{box-shadow:0 0 4px 1px #0000004d}[_nghost-%COMP%]:hover   #productImgCon[_ngcontent-%COMP%]{border-radius:.4rem .4rem 0 0}[_nghost-%COMP%]:hover   #productImg[_ngcontent-%COMP%]{transform:translate(-100%);transition:transform .3s .3s ease-in-out}[_nghost-%COMP%]:hover   #productImg[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{scale:1}"]}),e})();const D=["container"],B=["prev"],q=["next"],S=function(e,o){return{flex:e,width:o}};function F(e,o){if(1&e&&(t.ynx(0),t._UZ(1,"app-product-card",9),t.BQk()),2&e){const n=t.oxw();t.xp6(1),t.Q6J("ngStyle",t.WLB(1,S,"1 0 calc(100% / "+n.number+" - (1rem * 2))","calc(100% / "+n.number+" - (1rem * 2))"))}}let z=(()=>{class e{constructor(){this.test=Array(20),this.number=6,this.nextPrevVisibility=()=>{this.container.nativeElement.scrollLeft<=50?this.prevButton.nativeElement.classList.add("disabled"):this.prevButton.nativeElement.classList.remove("disabled"),this.container.nativeElement.scrollLeft+this.container.nativeElement.offsetWidth+50>=this.container.nativeElement.scrollWidth?this.nextButton.nativeElement.classList.add("disabled"):this.nextButton.nativeElement.classList.remove("disabled")}}ngAfterViewInit(){this.nextPrevVisibility(),this.scroll=p(this.container.nativeElement,"scroll"),this.scroll.subscribe(this.nextPrevVisibility)}scrollRight(){this.container.nativeElement.scrollLeft+=this.container.nativeElement.offsetWidth,h.z.schedule(this.nextPrevVisibility,400)}scrollLeft(){this.container.nativeElement.scrollLeft-=this.container.nativeElement.offsetWidth,h.z.schedule(this.nextPrevVisibility,400)}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-product-carousel"]],viewQuery:function(n,i){if(1&n&&(t.Gf(D,5),t.Gf(B,5),t.Gf(q,5)),2&n){let a;t.iGM(a=t.CRH())&&(i.container=a.first),t.iGM(a=t.CRH())&&(i.prevButton=a.first),t.iGM(a=t.CRH())&&(i.nextButton=a.first)}},inputs:{products:"products",number:"number"},decls:12,vars:1,consts:[["id","carouselCon"],["id","productCardCon"],["container",""],[4,"ngFor","ngForOf"],["id","prev",1,"arrows",3,"click"],["prev",""],[1,"material-symbols-outlined"],["id","next",1,"arrows",3,"click"],["next",""],[1,"products",3,"ngStyle"]],template:function(n,i){1&n&&(t.TgZ(0,"div",0)(1,"div",1,2),t.YNc(3,F,2,4,"ng-container",3),t.qZA(),t.TgZ(4,"div",4,5),t.NdJ("click",function(){return i.scrollLeft()}),t.TgZ(6,"span",6),t._uU(7," keyboard_double_arrow_left "),t.qZA()(),t.TgZ(8,"div",7,8),t.NdJ("click",function(){return i.scrollRight()}),t.TgZ(10,"span",6),t._uU(11," keyboard_double_arrow_right "),t.qZA()()()),2&n&&(t.xp6(3),t.Q6J("ngForOf",i.products||i.test))},dependencies:[l.sg,l.PC,L],styles:["[_nghost-%COMP%]{display:block}[_nghost-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar{height:.3rem}#carouselCon[_ngcontent-%COMP%]{display:block;position:relative;width:100%;overflow:hidden}#productCardCon[_ngcontent-%COMP%]{display:flex;width:100%;scroll-snap-type:x mandatory;scroll-padding:1rem;scroll-behavior:smooth;overflow-x:auto}.products[_ngcontent-%COMP%]{width:auto;margin:1rem;scroll-snap-align:start}.arrows[_ngcontent-%COMP%]{opacity:0;display:flex;justify-content:center;align-items:center;position:absolute;top:50%;transform:translateY(-50%);aspect-ratio:.5;width:2rem;background-color:#fff;box-shadow:0 0 4px 1px #0000004d;transition:opacity 0;z-index:5}#prev[_ngcontent-%COMP%]{left:.5rem}#next[_ngcontent-%COMP%]{left:unset;right:.5rem}.disabled[_ngcontent-%COMP%]{opacity:0;pointer-events:none}[_nghost-%COMP%]:hover   .arrows[_ngcontent-%COMP%]:not(.disabled){opacity:1;transition:opacity .3s .1s}[_nghost-%COMP%]:hover   [_ngcontent-%COMP%]::-webkit-scrollbar{height:.7rem;cursor:pointer}"]}),e})();const j=["*"];let G=(()=>{class e{constructor(){this._metaData={route:""},this.route=""}set metaData(n){this._metaData={...this.metaData,...n}}get metaData(){return this._metaData}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-button"]],inputs:{route:"route",metaData:"metaData"},ngContentSelectors:j,decls:6,vars:3,consts:[[1,"link",3,"routerLink"],["id","buttonType"],["id","iconLeft",1,"icon",3,"disable"],["id","buttonContent"],["id","iconRight",1,"icon",3,"disable"]],template:function(n,i){1&n&&(t.F$t(),t.TgZ(0,"a",0)(1,"div",1),t._UZ(2,"div",2),t.TgZ(3,"span",3),t.Hsn(4),t.qZA(),t._UZ(5,"div",4),t.qZA()()),2&n&&(t.Q6J("routerLink",i.metaData.route||i.route),t.xp6(1),t.Tol(i.metaData.type))},dependencies:[s.rH],styles:["#buttonType[_ngcontent-%COMP%]{display:flex;gap:.5rem;min-width:200px;background:hsla(332,100%,80%,.5);-webkit-backdrop-filter:blur(5px);backdrop-filter:blur(5px);padding:1rem 40px;border:2px solid var(--pink-transparency);border-bottom:0;border-right:0;box-shadow:0 1px 2px #0000004d,0 0 5px 1px #fff3 inset;text-align:center;font-size:1.5rem;font-weight:700;transition-duration:.3s}.rounded[_ngcontent-%COMP%]{border-radius:10rem}#buttonType[_ngcontent-%COMP%]:hover{background:hsla(332,70%,75%,.7);border-color:#fff;box-shadow:0 3px 2px #0000004d,0 0 5px 1px #fff3 inset}"]}),e})(),H=(()=>{class e{constructor(){this._metaData={route:"",img:"",alt:""},this.route="",this.img=""}set metaData(n){this._metaData={...this.metaData,...n}}get metaData(){return this._metaData}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-card"]],inputs:{route:"route",img:"img",metaData:"metaData"},decls:10,vars:9,consts:[["id","link","routerLinkActive","active",3,"routerLink"],["id","image",1,"ace--center"],[3,"src","alt"],["id","textArea",1,"ace--center"],["id","primaryText",1,"ace--center"],["id","secondaryText",1,"ace--center"]],template:function(n,i){1&n&&(t.TgZ(0,"a",0)(1,"div",1),t._UZ(2,"img",2),t.qZA(),t.TgZ(3,"div",3)(4,"h4",4),t._uU(5),t.ALo(6,"titlecase"),t.qZA(),t.TgZ(7,"h4",5),t._uU(8),t.ALo(9,"titlecase"),t.qZA()()()),2&n&&(t.Q6J("routerLink",i.route||i.metaData.route),t.xp6(2),t.Q6J("src",i.img||i.metaData.img,t.LSH)("alt",i.metaData.alt),t.xp6(3),t.Oqu(t.lcZ(6,5,null==i.metaData.textArea?null:i.metaData.textArea.first)),t.xp6(3),t.Oqu(t.lcZ(9,7,null==i.metaData.textArea?null:i.metaData.textArea.second)))},dependencies:[s.rH,s.Od,l.rS],styles:['[_nghost-%COMP%]{display:block;position:relative;aspect-ratio:1;border-radius:5px}#link[_ngcontent-%COMP%]{display:block;position:relative;height:100%;background-color:var(--light-grey);border-left:1.2px solid hsl(0,0%,100%);border-right:1.2px solid hsla(0,0%,50%,.3);border-top:1.2px solid hsl(0,0%,100%);border-bottom:1.2px solid hsla(0,0%,50%,.3);border-radius:5px;box-shadow:1px 1px 4px 1px #0000004d;transition-duration:.3s;z-index:0;overflow:hidden}[_nghost-%COMP%]:hover   #link[_ngcontent-%COMP%]{box-shadow:2px 2px 8px 1px #00000080;scale:1.05;z-index:1}#link[_ngcontent-%COMP%]:after{content:"";display:block;position:relative;width:100%;height:100%;outline:4px auto white;outline-offset:-10px;transition-duration:.5s}[_nghost-%COMP%]:hover   #link[_ngcontent-%COMP%]:after{outline-color:var(--pink)}#image[_ngcontent-%COMP%]{width:100%;height:100%}#image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;min-width:100%;min-height:100%;object-fit:cover}#textArea[_ngcontent-%COMP%]{width:100%;height:100%}#textArea[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{top:unset;bottom:20px;color:#fff;font-size:1.7rem;font-weight:900;text-shadow:.5px .5px 2px black}#textArea[_ngcontent-%COMP%]   #secondaryText[_ngcontent-%COMP%]{left:unset;right:8px;bottom:8px;font-size:1.2rem}']}),e})();const J=function(e,o){return{first:e,second:o}},I=function(e,o,n){return{route:e,img:o,textArea:n}};function Q(e,o){if(1&e&&(t.ynx(0),t._UZ(1,"app-card",65),t.BQk()),2&e){const n=o.$implicit,i=t.oxw();t.xp6(1),t.Q6J("metaData",t.kEZ(4,I,n.route,n.img,t.WLB(1,J,n.day,n.name[i.gender])))}}let R=(()=>{class e{constructor(){this.cTAData={type:"rounded",route:"booking"},this.gender="female",this.weekdays={sunday:{day:"sunday",route:"store",img:"assets/images/sundayLook.jpg",name:{male:"afua",female:"Esi"}},monday:{day:"monday",img:"assets/images/mondayLook.jpg",name:{male:"afua",female:"Adwoa"}},tuesday:{day:"tuesday",img:"assets/images/tuesdayLook.jpg",name:{male:"afua",female:"Abena"}},wednesday:{day:"wednesday",img:"assets/images/wednesdayLook.jpg",name:{male:"afua",female:"Ekua"}},thursday:{day:"thursday",img:"assets/images/thursdayLook.jpg",name:{male:"afua",female:"Aba/Ya"}},friday:{day:"friday",img:"assets/images/fridayLook.jpg",name:{male:"afua",female:"Efua"}},saturday:{day:"saturday",img:"assets/images/saturdayLook.jpg",name:{male:"afua",female:"Ama"}}},this.weekdaysArray=this._weedaysArray}ngAfterViewInit(){}get _weedaysArray(){return Object.entries(this.weekdays).map(([n,i])=>({key:n,...i}))}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-home-banner"]],decls:85,vars:5,consts:[[1,"videoCon"],["autoplay","","muted","","loop","","oncanplay","this.play()","onloadedmetadata","this.muted = true"],["src","assets/videos/BannerHairFlip.mp4","type","video/mp4"],[1,"videoOverlay"],["id","banner-Welcome",1,"banner-Bg-Text","ace--center"],["id","banner-Akwaaba",1,"banner-Bg-Text","ace--center"],["id","foreground"],["id","bAA",1,"ace--center",3,"metaData"],["id","bookTheLookCon",1,"ace--center"],["routerLink","store","routerLinkActive","active",1,"link"],["id","bookTheLookText"],["id","miniCalendar"],[4,"ngFor","ngForOf"],["id","tagline",1,"ace--center"],["id","quote"],["id","treSwatch"],["xmlns","http://www.w3.org/2000/svg",0,"xmlns","xlink","http://www.w3.org/1999/xlink","width","66.427","height","25","viewBox","0 0 66.427 25"],["id","Ellipse_5","x","41.427","y","0","width","25","height","25","filterUnits","userSpaceOnUse"],["dx","-1","dy","-1","input","SourceAlpha"],["stdDeviation","1.5","result","blur"],["flood-color","#030303"],["operator","in","in2","blur"],["id","Ellipse_5-2","x","41.427","y","0","width","25","height","25","filterUnits","userSpaceOnUse"],["dx","1","dy","1","input","SourceAlpha"],["stdDeviation","1.5","result","blur-2"],["flood-opacity","0.31","result","color"],["operator","out","in","SourceGraphic","in2","blur-2"],["operator","in","in","color"],["operator","in","in2","SourceGraphic"],["id","Ellipse_6","x","20.62","y","0","width","25","height","25","filterUnits","userSpaceOnUse"],["stdDeviation","1.5","result","blur-3"],["operator","in","in2","blur-3"],["id","Ellipse_6-2","x","20.62","y","0","width","25","height","25","filterUnits","userSpaceOnUse"],["stdDeviation","1.5","result","blur-4"],["flood-opacity","0.31","result","color-2"],["operator","out","in","SourceGraphic","in2","blur-4"],["operator","in","in","color-2"],["id","Ellipse_7","x","0","y","0","width","25","height","25","filterUnits","userSpaceOnUse"],["stdDeviation","1.5","result","blur-5"],["operator","in","in2","blur-5"],["id","Ellipse_7-2","x","0","y","0","width","25","height","25","filterUnits","userSpaceOnUse"],["stdDeviation","1.5","result","blur-6"],["flood-opacity","0.31","result","color-3"],["operator","out","in","SourceGraphic","in2","blur-6"],["operator","in","in","color-3"],["id","Logo_3","data-name","Logo 3","transform","translate(-6.5 -70.74)"],["data-type","innerShadowGroup"],["transform","matrix(1, 0, 0, 1, 6.5, 70.74)","filter","url(#Ellipse_5)"],["id","Ellipse_5-3","data-name","Ellipse 5","cx","7.5","cy","7.5","r","7.5","transform","translate(47.43 6)","fill","#df1c48","stroke","rgba(35,31,32,0.1)","stroke-miterlimit","10","stroke-width","1"],["id","Ellipse_5-4","data-name","Ellipse 5","cx","7.5","cy","7.5","r","7.5","transform","translate(53.927 76.74)","fill","#df1c48"],["transform","matrix(1, 0, 0, 1, 6.5, 70.74)","filter","url(#Ellipse_5-2)"],["id","Ellipse_5-5","data-name","Ellipse 5","cx","7.5","cy","7.5","r","7.5","transform","translate(47.43 6)","fill","#fff"],["id","Ellipse_5-6","data-name","Ellipse 5","cx","7.5","cy","7.5","r","7.5","transform","translate(53.927 76.74)","fill","none","stroke","rgba(35,31,32,0.1)","stroke-miterlimit","10","stroke-width","1"],["transform","matrix(1, 0, 0, 1, 6.5, 70.74)","filter","url(#Ellipse_6)"],["id","Ellipse_6-3","data-name","Ellipse 6","cx","7.5","cy","7.5","r","7.5","transform","translate(26.62 6)","fill","#fff100","stroke","rgba(35,31,32,0.1)","stroke-miterlimit","10","stroke-width","1"],["id","Ellipse_6-4","data-name","Ellipse 6","cx","7.5","cy","7.5","r","7.5","transform","translate(33.12 76.74)","fill","#fff100"],["transform","matrix(1, 0, 0, 1, 6.5, 70.74)","filter","url(#Ellipse_6-2)"],["id","Ellipse_6-5","data-name","Ellipse 6","cx","7.5","cy","7.5","r","7.5","transform","translate(26.62 6)","fill","#fff"],["id","Ellipse_6-6","data-name","Ellipse 6","cx","7.5","cy","7.5","r","7.5","transform","translate(33.12 76.74)","fill","none","stroke","rgba(35,31,32,0.1)","stroke-miterlimit","10","stroke-width","1"],["transform","matrix(1, 0, 0, 1, 6.5, 70.74)","filter","url(#Ellipse_7)"],["id","Ellipse_7-3","data-name","Ellipse 7","cx","7.5","cy","7.5","r","7.5","transform","translate(6 6)","fill","#ec81b3","stroke","rgba(35,31,32,0.1)","stroke-miterlimit","10","stroke-width","1"],["id","Ellipse_7-4","data-name","Ellipse 7","cx","7.5","cy","7.5","r","7.5","transform","translate(12.5 76.74)","fill","#ec81b3"],["transform","matrix(1, 0, 0, 1, 6.5, 70.74)","filter","url(#Ellipse_7-2)"],["id","Ellipse_7-5","data-name","Ellipse 7","cx","7.5","cy","7.5","r","7.5","transform","translate(6 6)","fill","#fff"],["id","Ellipse_7-6","data-name","Ellipse 7","cx","7.5","cy","7.5","r","7.5","transform","translate(12.5 76.74)","fill","none","stroke","rgba(35,31,32,0.1)","stroke-miterlimit","10","stroke-width","1"],[3,"metaData"]],template:function(n,i){1&n&&(t.TgZ(0,"div",0)(1,"video",1),t._UZ(2,"source",2),t.qZA(),t._UZ(3,"div",3),t.qZA(),t.TgZ(4,"div",4)(5,"b"),t._uU(6,"|"),t.qZA(),t._uU(7,"Welcome\n"),t.qZA(),t.TgZ(8,"div",5),t._uU(9,"Akwaaba"),t.qZA(),t.TgZ(10,"div",6)(11,"app-button",7),t._uU(12),t.ALo(13,"titlecase"),t.qZA(),t.TgZ(14,"div",8)(15,"a",9)(16,"div",10)(17,"h1"),t._uU(18,"Get the look"),t.qZA()()(),t.TgZ(19,"div",11),t.YNc(20,Q,2,8,"ng-container",12),t.qZA()(),t.TgZ(21,"div",13)(22,"div",14),t._uU(23,'"beautiful inside and out"'),t.qZA(),t.TgZ(24,"div",15),t.O4$(),t.TgZ(25,"svg",16)(26,"defs")(27,"filter",17),t._UZ(28,"feOffset",18)(29,"feGaussianBlur",19)(30,"feFlood",20)(31,"feComposite",21),t.qZA(),t.TgZ(32,"filter",22),t._UZ(33,"feOffset",23)(34,"feGaussianBlur",24)(35,"feFlood",25)(36,"feComposite",26)(37,"feComposite",27)(38,"feComposite",28),t.qZA(),t.TgZ(39,"filter",29),t._UZ(40,"feOffset",18)(41,"feGaussianBlur",30)(42,"feFlood",20)(43,"feComposite",31),t.qZA(),t.TgZ(44,"filter",32),t._UZ(45,"feOffset",23)(46,"feGaussianBlur",33)(47,"feFlood",34)(48,"feComposite",35)(49,"feComposite",36)(50,"feComposite",28),t.qZA(),t.TgZ(51,"filter",37),t._UZ(52,"feOffset",18)(53,"feGaussianBlur",38)(54,"feFlood",20)(55,"feComposite",39),t.qZA(),t.TgZ(56,"filter",40),t._UZ(57,"feOffset",23)(58,"feGaussianBlur",41)(59,"feFlood",42)(60,"feComposite",43)(61,"feComposite",44)(62,"feComposite",28),t.qZA()(),t.TgZ(63,"g",45)(64,"g",46)(65,"g",47),t._UZ(66,"circle",48),t.qZA(),t._UZ(67,"circle",49),t.TgZ(68,"g",50),t._UZ(69,"circle",51),t.qZA(),t._UZ(70,"circle",52),t.qZA(),t.TgZ(71,"g",46)(72,"g",53),t._UZ(73,"circle",54),t.qZA(),t._UZ(74,"circle",55),t.TgZ(75,"g",56),t._UZ(76,"circle",57),t.qZA(),t._UZ(77,"circle",58),t.qZA(),t.TgZ(78,"g",46)(79,"g",59),t._UZ(80,"circle",60),t.qZA(),t._UZ(81,"circle",61),t.TgZ(82,"g",62),t._UZ(83,"circle",63),t.qZA(),t._UZ(84,"circle",64),t.qZA()()()()()()),2&n&&(t.xp6(11),t.Q6J("metaData",i.cTAData),t.xp6(1),t.Oqu(t.lcZ(13,3,"book an appointment")),t.xp6(8),t.Q6J("ngForOf",i.weekdaysArray))},dependencies:[l.sg,s.rH,s.Od,G,H,l.rS],styles:["[_nghost-%COMP%]{display:block;height:100vh!important;min-height:800px;position:relative;overflow:hidden}.videoCon[_ngcontent-%COMP%]{position:absolute;height:80%;width:100%;overflow:hidden}video[_ngcontent-%COMP%]{position:absolute;left:50%;top:50%;height:100%;min-width:100%;min-height:110%;object-fit:cover;transform:translate(-50%,-50%) scale(1.3)}.videoOverlay[_ngcontent-%COMP%]{position:absolute;inset:0;background-color:#e6e6e666;-webkit-backdrop-filter:blur(15px);backdrop-filter:blur(15px)}.banner-Bg-Text[_ngcontent-%COMP%]{top:40%;color:#fff;text-shadow:0 3px 6px hsla(0,0%,0%,.2);font-size:20rem;font-weight:600}#banner-Welcome[_ngcontent-%COMP%]{opacity:0;animation:_ngcontent-%COMP%_SlideToLeft 8s 4s linear infinite}#banner-Welcome[_ngcontent-%COMP%]   b[_ngcontent-%COMP%]{display:none}#banner-Akwaaba[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_SlideToLeft 8s linear infinite}#foreground[_ngcontent-%COMP%]{position:absolute;left:0;top:0;width:100%;height:100%}#bAA[_ngcontent-%COMP%]{top:53%}#bookTheLookCon[_ngcontent-%COMP%]{display:flex;position:absolute;top:72%;flex-direction:column;align-items:center;height:23%}#bookTheLookText[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]{padding:0 0 1rem;color:var(--gold);text-transform:capitalize;font-size:3rem;font-weight:900;text-shadow:.5px .5px 2px hsla(0,0%,0%,.5)}#miniCalendar[_ngcontent-%COMP%]{flex:1;display:flex;gap:2rem;width:100%;justify-content:center}#tagline[_ngcontent-%COMP%]{box-sizing:border-box;display:flex;flex-direction:column;justify-content:center;align-items:center;gap:1rem;top:unset;bottom:0;width:50%;padding:0 0 2rem;border-bottom:2px solid hsl(0,0%,90%);transform:translate(-50%)}#tagline[_ngcontent-%COMP%]   #quote[_ngcontent-%COMP%]{font-size:3rem;font-weight:700;font-style:italic}@keyframes _ngcontent-%COMP%_SlideToLeft{0%{opacity:0;transform:translate3d(-40%,-50%,0)}2%{opacity:1;transform:translate3d(-45%,-50%,0)}38%{opacity:1;transform:translate3d(-55%,-50%,0)}40%{opacity:0;transform:translate3d(-60%,-50%,0)}to{opacity:0;transform:translate3d(-60%,-50%,0)}}"]}),e})();const $=[{path:"",component:(()=>{class e{constructor(n,i){this.s_nav=n,this.s_body=i,this.notifier$=new y.x,this.numberOfProductsVisible=4,n.setDefaultStyle={transparent:!0,overlay:!0},i.scrollPosition$.pipe((0,C.R)(this.notifier$)).subscribe(a=>{a.position.y>50?n.getStyle.transparent&&n.makeTransparent(!1):n.getStyle.transparent||n.makeTransparent(!0)})}ngOnDestroy(){this.s_nav.useDefaultStyle(),this.stopObs()}stopObs(){this.notifier$.next(null),this.notifier$.complete(),this.notifier$.unsubscribe()}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(b.h),t.Y36(v.K))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-main"]],decls:16,vars:1,consts:[["setbg",""],["id","newReleasesCon","setbg","half"],["id","newReleases",3,"number"],["id","leafCardCon"],["id","leafCard1",1,"leafCards"],[1,"leafBg"],[1,"leafText"],["id","leafCard2",1,"leafCards"],["id","leafCard3",1,"leafCards"]],template:function(n,i){1&n&&(t.TgZ(0,"div",0),t._UZ(1,"app-home-banner"),t.qZA(),t.TgZ(2,"div",1),t._UZ(3,"app-product-carousel",2),t.qZA(),t.TgZ(4,"div",1)(5,"div",3)(6,"div",4),t._UZ(7,"div",5),t.TgZ(8,"div",6),t._uU(9,"Wigs"),t.qZA()(),t.TgZ(10,"div",7),t._UZ(11,"div",5)(12,"div",6),t.qZA(),t.TgZ(13,"div",8),t._UZ(14,"div",5)(15,"div",6),t.qZA()()()),2&n&&(t.xp6(3),t.Q6J("number",i.numberOfProductsVisible))},dependencies:[z,R],styles:["[_nghost-%COMP%]{display:contents}#newReleases[_ngcontent-%COMP%]{width:70%;margin:auto}"]}),e})()}];let W=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[s.Bz.forChild($),s.Bz]}),e})(),V=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[l.ez,s.Bz]}),e})(),X=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[l.ez,W,V]}),e})()}}]);