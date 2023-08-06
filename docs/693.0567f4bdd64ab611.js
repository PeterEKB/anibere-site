"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[693],{8693:(q,c,r)=>{r.r(c),r.d(c,{HomeModule:()=>L});var l=r(6895),s=r(9253),p=r(7579),m=r(2722),t=r(8256),u=r(4187),f=r(3440),d=r(4986);let g=(()=>{class n{transform(e,o=!0){return o?("string"==typeof e&&(e=parseFloat(e)),isNaN(e)?"\u2014":e<0?"-$"+Math.abs(e):0===e?"$0":e%1?"$"+e.toFixed(2):e>0?"$"+e:e):"Sold Out"}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275pipe=t.Yjl({name:"cashFormat",type:n,pure:!0}),n})(),h=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-product-card"]],decls:19,vars:6,consts:[["id","cardCon","routerLink","store"],["id","productImgCon"],["id","productImg"],[1,"img"],["src","assets/images/fridayLook.jpg","alt","",1,"primaryImage"],["src","assets/images/saturdayLook.jpg","alt","",1,"secondaryImage"],["id","details"],["id","category"],["id","title"],["id","price"],["id","salePrice"],["id","fullPrice"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),t._UZ(4,"img",4),t.qZA(),t.TgZ(5,"div",3),t._UZ(6,"img",5),t.qZA()()(),t.TgZ(7,"div",6)(8,"div",7),t._uU(9,"Product Category"),t.qZA(),t.TgZ(10,"div",8),t._uU(11,"Title"),t.qZA(),t.TgZ(12,"div",9)(13,"div",10),t._uU(14),t.ALo(15,"cashFormat"),t.qZA(),t.TgZ(16,"div",11),t._uU(17),t.ALo(18,"cashFormat"),t.qZA()()()()),2&e&&(t.xp6(14),t.Oqu(t.lcZ(15,2,5.5)),t.xp6(3),t.Oqu(t.lcZ(18,4,10)))},dependencies:[s.rH,g],styles:["[_nghost-%COMP%]{width:300px}#cardCon[_ngcontent-%COMP%]{width:100%;padding-bottom:1rem;border-radius:.3rem;cursor:pointer;overflow:hidden;transition-duration:.2s}#productImgCon[_ngcontent-%COMP%]{aspect-ratio:1;width:100%;border-radius:.4rem;background-color:var(--light-gray);transition:border-radius .2s ease-in-out;overflow:hidden}#productImg[_ngcontent-%COMP%]{display:flex;height:100%;transition:transform .3s ease-in-out}#productImg[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%]{aspect-ratio:1;flex:1 0 100%;height:100%;overflow:hidden}#productImg[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:100%;min-width:100%;min-height:100%;object-fit:cover;scale:1.1;transition:scale .3s ease-in-out}#details[_ngcontent-%COMP%]{display:flex;flex-direction:column;padding:1rem}#details[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]{font-size:1.2rem}#details[_ngcontent-%COMP%]   #category[_ngcontent-%COMP%]{margin-bottom:.5rem;color:#b3b3b3;font-size:1rem;font-style:italic}#price[_ngcontent-%COMP%]{display:flex;gap:.5rem}#fullPrice[_ngcontent-%COMP%]{order:-1}#salePrice[_ngcontent-%COMP%]{color:red}#salePrice[_ngcontent-%COMP%] + #fullPrice[_ngcontent-%COMP%]{text-decoration:line-through}[_nghost-%COMP%]:hover{z-index:1}[_nghost-%COMP%]:hover   #cardCon[_ngcontent-%COMP%]{box-shadow:0 0 4px 1px #0000004d}[_nghost-%COMP%]:hover   #productImgCon[_ngcontent-%COMP%]{border-radius:.4rem .4rem 0 0}[_nghost-%COMP%]:hover   #productImg[_ngcontent-%COMP%]{transform:translate(-100%);transition:transform .3s .3s ease-in-out}[_nghost-%COMP%]:hover   #productImg[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{scale:1}"]}),n})();const C=["container"],_=["prev"],y=["next"],b=function(n,i){return{flex:n,width:i}};function x(n,i){if(1&n&&(t.ynx(0),t._UZ(1,"app-product-card",9),t.BQk()),2&n){const e=t.oxw();t.xp6(1),t.Q6J("ngStyle",t.WLB(1,b,"1 0 calc(100% / "+e.number+" - (1rem * 2))","calc(100% / "+e.number+" - (1rem * 2))"))}}let v=(()=>{class n{constructor(){this.test=Array(20),this.number=6,this.nextPrevVisibility=()=>{this.container.nativeElement.scrollLeft<=50?this.prevButton.nativeElement.classList.add("disabled"):this.prevButton.nativeElement.classList.remove("disabled"),this.container.nativeElement.scrollLeft+this.container.nativeElement.offsetWidth+50>=this.container.nativeElement.scrollWidth?this.nextButton.nativeElement.classList.add("disabled"):this.nextButton.nativeElement.classList.remove("disabled")}}ngAfterViewInit(){this.nextPrevVisibility()}scrollRight(){this.container.nativeElement.scrollLeft+=this.container.nativeElement.offsetWidth,d.z.schedule(this.nextPrevVisibility,400)}scrollLeft(){this.container.nativeElement.scrollLeft-=this.container.nativeElement.offsetWidth,d.z.schedule(this.nextPrevVisibility,400)}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-product-carousel"]],viewQuery:function(e,o){if(1&e&&(t.Gf(C,5),t.Gf(_,5),t.Gf(y,5)),2&e){let a;t.iGM(a=t.CRH())&&(o.container=a.first),t.iGM(a=t.CRH())&&(o.prevButton=a.first),t.iGM(a=t.CRH())&&(o.nextButton=a.first)}},inputs:{products:"products",number:"number"},decls:12,vars:1,consts:[["id","carouselCon"],["id","productCardCon"],["container",""],[4,"ngFor","ngForOf"],["id","prev",1,"arrows",3,"click"],["prev",""],[1,"material-symbols-outlined"],["id","next",1,"arrows",3,"click"],["next",""],[1,"products",3,"ngStyle"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0)(1,"div",1,2),t.YNc(3,x,2,4,"ng-container",3),t.qZA(),t.TgZ(4,"div",4,5),t.NdJ("click",function(){return o.scrollLeft()}),t.TgZ(6,"span",6),t._uU(7," keyboard_double_arrow_left "),t.qZA()(),t.TgZ(8,"div",7,8),t.NdJ("click",function(){return o.scrollRight()}),t.TgZ(10,"span",6),t._uU(11," keyboard_double_arrow_right "),t.qZA()()()),2&e&&(t.xp6(3),t.Q6J("ngForOf",o.products||o.test))},dependencies:[l.sg,l.PC,h],styles:["[_nghost-%COMP%]{display:block}[_nghost-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar{height:.3rem}#carouselCon[_ngcontent-%COMP%]{display:block;position:relative;width:100%;overflow:hidden}#productCardCon[_ngcontent-%COMP%]{display:flex;width:100%;scroll-snap-type:x mandatory;scroll-padding:1rem;scroll-behavior:smooth;overflow-x:auto}.products[_ngcontent-%COMP%]{width:auto;margin:1rem;scroll-snap-align:start}.arrows[_ngcontent-%COMP%]{opacity:0;display:flex;justify-content:center;align-items:center;position:absolute;top:50%;transform:translateY(-50%);aspect-ratio:.5;width:2rem;background-color:#fff;box-shadow:0 0 4px 1px #0000004d;transition:opacity 0;z-index:5}#prev[_ngcontent-%COMP%]{left:.5rem}#next[_ngcontent-%COMP%]{left:unset;right:.5rem}.disabled[_ngcontent-%COMP%]{opacity:0;pointer-events:none}[_nghost-%COMP%]:hover   .arrows[_ngcontent-%COMP%]:not(.disabled){opacity:1;transition:opacity .3s .1s}[_nghost-%COMP%]:hover   [_ngcontent-%COMP%]::-webkit-scrollbar{height:.7rem;cursor:pointer}"]}),n})();const Z=["*"];let O=(()=>{class n{constructor(){this._metaData={route:""},this.route=""}set metaData(e){this._metaData={...this.metaData,...e}}get metaData(){return this._metaData}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-button"]],inputs:{route:"route",metaData:"metaData"},ngContentSelectors:Z,decls:6,vars:3,consts:[[1,"link",3,"routerLink"],["id","buttonType"],["id","iconLeft",1,"icon",3,"disable"],["id","buttonContent"],["id","iconRight",1,"icon",3,"disable"]],template:function(e,o){1&e&&(t.F$t(),t.TgZ(0,"a",0)(1,"div",1),t._UZ(2,"div",2),t.TgZ(3,"span",3),t.Hsn(4),t.qZA(),t._UZ(5,"div",4),t.qZA()()),2&e&&(t.Q6J("routerLink",o.metaData.route||o.route),t.xp6(1),t.Tol(o.metaData.type))},dependencies:[s.rH],styles:["#buttonType[_ngcontent-%COMP%]{display:flex;gap:.5rem;min-width:200px;background:hsla(332,100%,80%,.5);-webkit-backdrop-filter:blur(5px);backdrop-filter:blur(5px);padding:1rem 40px;border:2px solid var(--pink-transparency);border-bottom:0;border-right:0;box-shadow:0 1px 2px #0000004d,0 0 5px 1px #fff3 inset;text-align:center;font-size:1.5rem;font-weight:700;transition-duration:.3s}.rounded[_ngcontent-%COMP%]{border-radius:10rem}#buttonType[_ngcontent-%COMP%]:hover{background:hsla(332,70%,75%,.7);border-color:#fff;box-shadow:0 3px 2px #0000004d,0 0 5px 1px #fff3 inset}"]}),n})(),P=(()=>{class n{constructor(){this._metaData={route:"",img:"",alt:""},this.route="",this.img=""}set metaData(e){this._metaData={...this.metaData,...e}}get metaData(){return this._metaData}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-card"]],inputs:{route:"route",img:"img",metaData:"metaData"},decls:10,vars:9,consts:[["id","link","routerLinkActive","active",3,"routerLink"],["id","image",1,"ace--center"],[3,"src","alt"],["id","textArea",1,"ace--center"],["id","primaryText",1,"ace--center"],["id","secondaryText",1,"ace--center"]],template:function(e,o){1&e&&(t.TgZ(0,"a",0)(1,"div",1),t._UZ(2,"img",2),t.qZA(),t.TgZ(3,"div",3)(4,"h4",4),t._uU(5),t.ALo(6,"titlecase"),t.qZA(),t.TgZ(7,"h4",5),t._uU(8),t.ALo(9,"titlecase"),t.qZA()()()),2&e&&(t.Q6J("routerLink",o.route||o.metaData.route),t.xp6(2),t.Q6J("src",o.img||o.metaData.img,t.LSH)("alt",o.metaData.alt),t.xp6(3),t.Oqu(t.lcZ(6,5,null==o.metaData.textArea?null:o.metaData.textArea.first)),t.xp6(3),t.Oqu(t.lcZ(9,7,null==o.metaData.textArea?null:o.metaData.textArea.second)))},dependencies:[s.rH,s.Od,l.rS],styles:['[_nghost-%COMP%]{display:block;position:relative;aspect-ratio:1;border-radius:5px}#link[_ngcontent-%COMP%]{display:block;position:relative;height:100%;background-color:var(--light-grey);border-left:1.2px solid hsl(0,0%,100%);border-right:1.2px solid hsla(0,0%,50%,.3);border-top:1.2px solid hsl(0,0%,100%);border-bottom:1.2px solid hsla(0,0%,50%,.3);border-radius:5px;box-shadow:1px 1px 4px 1px #0000004d;transition-duration:.3s;z-index:0;overflow:hidden}[_nghost-%COMP%]:hover   #link[_ngcontent-%COMP%]{box-shadow:2px 2px 8px 1px #00000080;scale:1.05;z-index:1}#link[_ngcontent-%COMP%]:after{content:"";display:block;position:relative;width:100%;height:100%;outline:4px auto white;outline-offset:-10px;transition-duration:.5s}[_nghost-%COMP%]:hover   #link[_ngcontent-%COMP%]:after{outline-color:var(--pink)}#image[_ngcontent-%COMP%]{width:100%;height:100%}#image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;min-width:100%;min-height:100%;object-fit:cover}#textArea[_ngcontent-%COMP%]{width:100%;height:100%}#textArea[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{top:unset;bottom:20px;color:#fff;font-size:1.7rem;font-weight:900;text-shadow:.5px .5px 2px black}#textArea[_ngcontent-%COMP%]   #secondaryText[_ngcontent-%COMP%]{left:unset;right:8px;bottom:8px;font-size:1.2rem}']}),n})();const w=function(n,i){return{first:n,second:i}},M=function(n,i,e){return{route:n,img:i,textArea:e}};function k(n,i){if(1&n&&(t.ynx(0),t._UZ(1,"app-card",64),t.BQk()),2&n){const e=i.$implicit,o=t.oxw();t.xp6(1),t.Q6J("metaData",t.kEZ(4,M,e.route,e.img,t.WLB(1,w,e.day,e.name[o.gender])))}}let A=(()=>{class n{constructor(){this.cTAData={type:"rounded",route:"booking"},this.gender="female",this.weekdays={sunday:{day:"sunday",route:"store",img:"/assets/images/sundayLook.jpg",name:{male:"afua",female:"Esi"}},monday:{day:"monday",img:"/assets/images/mondayLook.jpg",name:{male:"afua",female:"Adwoa"}},tuesday:{day:"tuesday",img:"/assets/images/tuesdayLook.jpg",name:{male:"afua",female:"Abena"}},wednesday:{day:"wednesday",img:"/assets/images/wednesdayLook.jpg",name:{male:"afua",female:"Ekua"}},thursday:{day:"thursday",img:"/assets/images/thursdayLook.jpg",name:{male:"afua",female:"Aba/Ya"}},friday:{day:"friday",img:"/assets/images/fridayLook.jpg",name:{male:"afua",female:"Efua"}},saturday:{day:"saturday",img:"/assets/images/saturdayLook.jpg",name:{male:"afua",female:"Ama"}}},this.weekdaysArray=this._weedaysArray}ngAfterViewInit(){}get _weedaysArray(){return Object.entries(this.weekdays).map(([e,o])=>({key:e,...o}))}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-home-banner"]],decls:84,vars:5,consts:[[1,"videoCon"],["autoplay","","muted","","loop","","oncanplay","this.play()","onloadedmetadata","this.muted = true"],[1,"videoOverlay"],["id","banner-Welcome",1,"banner-Bg-Text","ace--center"],["id","banner-Akwaaba",1,"banner-Bg-Text","ace--center"],["id","foreground"],["id","bAA",1,"ace--center",3,"metaData"],["id","bookTheLookCon",1,"ace--center"],["routerLink","store","routerLinkActive","active",1,"link"],["id","bookTheLookText"],["id","miniCalendar"],[4,"ngFor","ngForOf"],["id","tagline",1,"ace--center"],["id","quote"],["id","treSwatch"],["xmlns","http://www.w3.org/2000/svg",0,"xmlns","xlink","http://www.w3.org/1999/xlink","width","66.427","height","25","viewBox","0 0 66.427 25"],["id","Ellipse_5","x","41.427","y","0","width","25","height","25","filterUnits","userSpaceOnUse"],["dx","-1","dy","-1","input","SourceAlpha"],["stdDeviation","1.5","result","blur"],["flood-color","#030303"],["operator","in","in2","blur"],["id","Ellipse_5-2","x","41.427","y","0","width","25","height","25","filterUnits","userSpaceOnUse"],["dx","1","dy","1","input","SourceAlpha"],["stdDeviation","1.5","result","blur-2"],["flood-opacity","0.31","result","color"],["operator","out","in","SourceGraphic","in2","blur-2"],["operator","in","in","color"],["operator","in","in2","SourceGraphic"],["id","Ellipse_6","x","20.62","y","0","width","25","height","25","filterUnits","userSpaceOnUse"],["stdDeviation","1.5","result","blur-3"],["operator","in","in2","blur-3"],["id","Ellipse_6-2","x","20.62","y","0","width","25","height","25","filterUnits","userSpaceOnUse"],["stdDeviation","1.5","result","blur-4"],["flood-opacity","0.31","result","color-2"],["operator","out","in","SourceGraphic","in2","blur-4"],["operator","in","in","color-2"],["id","Ellipse_7","x","0","y","0","width","25","height","25","filterUnits","userSpaceOnUse"],["stdDeviation","1.5","result","blur-5"],["operator","in","in2","blur-5"],["id","Ellipse_7-2","x","0","y","0","width","25","height","25","filterUnits","userSpaceOnUse"],["stdDeviation","1.5","result","blur-6"],["flood-opacity","0.31","result","color-3"],["operator","out","in","SourceGraphic","in2","blur-6"],["operator","in","in","color-3"],["id","Logo_3","data-name","Logo 3","transform","translate(-6.5 -70.74)"],["data-type","innerShadowGroup"],["transform","matrix(1, 0, 0, 1, 6.5, 70.74)","filter","url(#Ellipse_5)"],["id","Ellipse_5-3","data-name","Ellipse 5","cx","7.5","cy","7.5","r","7.5","transform","translate(47.43 6)","fill","#df1c48","stroke","rgba(35,31,32,0.1)","stroke-miterlimit","10","stroke-width","1"],["id","Ellipse_5-4","data-name","Ellipse 5","cx","7.5","cy","7.5","r","7.5","transform","translate(53.927 76.74)","fill","#df1c48"],["transform","matrix(1, 0, 0, 1, 6.5, 70.74)","filter","url(#Ellipse_5-2)"],["id","Ellipse_5-5","data-name","Ellipse 5","cx","7.5","cy","7.5","r","7.5","transform","translate(47.43 6)","fill","#fff"],["id","Ellipse_5-6","data-name","Ellipse 5","cx","7.5","cy","7.5","r","7.5","transform","translate(53.927 76.74)","fill","none","stroke","rgba(35,31,32,0.1)","stroke-miterlimit","10","stroke-width","1"],["transform","matrix(1, 0, 0, 1, 6.5, 70.74)","filter","url(#Ellipse_6)"],["id","Ellipse_6-3","data-name","Ellipse 6","cx","7.5","cy","7.5","r","7.5","transform","translate(26.62 6)","fill","#fff100","stroke","rgba(35,31,32,0.1)","stroke-miterlimit","10","stroke-width","1"],["id","Ellipse_6-4","data-name","Ellipse 6","cx","7.5","cy","7.5","r","7.5","transform","translate(33.12 76.74)","fill","#fff100"],["transform","matrix(1, 0, 0, 1, 6.5, 70.74)","filter","url(#Ellipse_6-2)"],["id","Ellipse_6-5","data-name","Ellipse 6","cx","7.5","cy","7.5","r","7.5","transform","translate(26.62 6)","fill","#fff"],["id","Ellipse_6-6","data-name","Ellipse 6","cx","7.5","cy","7.5","r","7.5","transform","translate(33.12 76.74)","fill","none","stroke","rgba(35,31,32,0.1)","stroke-miterlimit","10","stroke-width","1"],["transform","matrix(1, 0, 0, 1, 6.5, 70.74)","filter","url(#Ellipse_7)"],["id","Ellipse_7-3","data-name","Ellipse 7","cx","7.5","cy","7.5","r","7.5","transform","translate(6 6)","fill","#ec81b3","stroke","rgba(35,31,32,0.1)","stroke-miterlimit","10","stroke-width","1"],["id","Ellipse_7-4","data-name","Ellipse 7","cx","7.5","cy","7.5","r","7.5","transform","translate(12.5 76.74)","fill","#ec81b3"],["transform","matrix(1, 0, 0, 1, 6.5, 70.74)","filter","url(#Ellipse_7-2)"],["id","Ellipse_7-5","data-name","Ellipse 7","cx","7.5","cy","7.5","r","7.5","transform","translate(6 6)","fill","#fff"],["id","Ellipse_7-6","data-name","Ellipse 7","cx","7.5","cy","7.5","r","7.5","transform","translate(12.5 76.74)","fill","none","stroke","rgba(35,31,32,0.1)","stroke-miterlimit","10","stroke-width","1"],[3,"metaData"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0),t._UZ(1,"video",1)(2,"div",2),t.qZA(),t.TgZ(3,"div",3)(4,"b"),t._uU(5,"|"),t.qZA(),t._uU(6,"Welcome\n"),t.qZA(),t.TgZ(7,"div",4),t._uU(8,"Akwaaba"),t.qZA(),t.TgZ(9,"div",5)(10,"app-button",6),t._uU(11),t.ALo(12,"titlecase"),t.qZA(),t.TgZ(13,"div",7)(14,"a",8)(15,"div",9)(16,"h1"),t._uU(17,"Get the look"),t.qZA()()(),t.TgZ(18,"div",10),t.YNc(19,k,2,8,"ng-container",11),t.qZA()(),t.TgZ(20,"div",12)(21,"div",13),t._uU(22,'"beautiful inside and out"'),t.qZA(),t.TgZ(23,"div",14),t.O4$(),t.TgZ(24,"svg",15)(25,"defs")(26,"filter",16),t._UZ(27,"feOffset",17)(28,"feGaussianBlur",18)(29,"feFlood",19)(30,"feComposite",20),t.qZA(),t.TgZ(31,"filter",21),t._UZ(32,"feOffset",22)(33,"feGaussianBlur",23)(34,"feFlood",24)(35,"feComposite",25)(36,"feComposite",26)(37,"feComposite",27),t.qZA(),t.TgZ(38,"filter",28),t._UZ(39,"feOffset",17)(40,"feGaussianBlur",29)(41,"feFlood",19)(42,"feComposite",30),t.qZA(),t.TgZ(43,"filter",31),t._UZ(44,"feOffset",22)(45,"feGaussianBlur",32)(46,"feFlood",33)(47,"feComposite",34)(48,"feComposite",35)(49,"feComposite",27),t.qZA(),t.TgZ(50,"filter",36),t._UZ(51,"feOffset",17)(52,"feGaussianBlur",37)(53,"feFlood",19)(54,"feComposite",38),t.qZA(),t.TgZ(55,"filter",39),t._UZ(56,"feOffset",22)(57,"feGaussianBlur",40)(58,"feFlood",41)(59,"feComposite",42)(60,"feComposite",43)(61,"feComposite",27),t.qZA()(),t.TgZ(62,"g",44)(63,"g",45)(64,"g",46),t._UZ(65,"circle",47),t.qZA(),t._UZ(66,"circle",48),t.TgZ(67,"g",49),t._UZ(68,"circle",50),t.qZA(),t._UZ(69,"circle",51),t.qZA(),t.TgZ(70,"g",45)(71,"g",52),t._UZ(72,"circle",53),t.qZA(),t._UZ(73,"circle",54),t.TgZ(74,"g",55),t._UZ(75,"circle",56),t.qZA(),t._UZ(76,"circle",57),t.qZA(),t.TgZ(77,"g",45)(78,"g",58),t._UZ(79,"circle",59),t.qZA(),t._UZ(80,"circle",60),t.TgZ(81,"g",61),t._UZ(82,"circle",62),t.qZA(),t._UZ(83,"circle",63),t.qZA()()()()()()),2&e&&(t.xp6(10),t.Q6J("metaData",o.cTAData),t.xp6(1),t.Oqu(t.lcZ(12,3,"book an appointment")),t.xp6(8),t.Q6J("ngForOf",o.weekdaysArray))},dependencies:[l.sg,s.rH,s.Od,O,P,l.rS],styles:["[_nghost-%COMP%]{display:block;height:100vh!important;min-height:800px;position:relative;overflow:hidden}.videoCon[_ngcontent-%COMP%]{position:absolute;height:80%;width:100%;overflow:hidden}video[_ngcontent-%COMP%]{position:absolute;left:50%;top:50%;height:100%;min-width:100%;min-height:110%;object-fit:cover;transform:translate(-50%,-50%) scale(1.3)}.videoOverlay[_ngcontent-%COMP%]{position:absolute;inset:0;background-color:#e6e6e666;-webkit-backdrop-filter:blur(15px);backdrop-filter:blur(15px)}.banner-Bg-Text[_ngcontent-%COMP%]{top:40%;color:#fff;text-shadow:0 3px 6px hsla(0,0%,0%,.2);font-size:20rem;font-weight:600}#banner-Welcome[_ngcontent-%COMP%]{opacity:0;animation:_ngcontent-%COMP%_SlideToLeft 8s 4s linear infinite}#banner-Welcome[_ngcontent-%COMP%]   b[_ngcontent-%COMP%]{display:none}#banner-Akwaaba[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_SlideToLeft 8s linear infinite}#foreground[_ngcontent-%COMP%]{position:absolute;left:0;top:0;width:100%;height:100%}#bAA[_ngcontent-%COMP%]{top:53%}#bookTheLookCon[_ngcontent-%COMP%]{display:flex;position:absolute;top:72%;flex-direction:column;align-items:center;height:23%}#bookTheLookText[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]{padding:0 0 1rem;color:var(--gold);text-transform:capitalize;font-size:3rem;font-weight:900;text-shadow:.5px .5px 2px hsla(0,0%,0%,.5)}#miniCalendar[_ngcontent-%COMP%]{flex:1;display:flex;gap:2rem;width:100%;justify-content:center}#tagline[_ngcontent-%COMP%]{box-sizing:border-box;display:flex;flex-direction:column;justify-content:center;align-items:center;gap:1rem;top:unset;bottom:0;width:50%;padding:0 0 2rem;border-bottom:2px solid hsl(0,0%,90%);transform:translate(-50%)}#tagline[_ngcontent-%COMP%]   #quote[_ngcontent-%COMP%]{font-size:3rem;font-weight:700;font-style:italic}@keyframes _ngcontent-%COMP%_SlideToLeft{0%{opacity:0;transform:translate3d(-40%,-50%,0)}2%{opacity:1;transform:translate3d(-45%,-50%,0)}38%{opacity:1;transform:translate3d(-55%,-50%,0)}40%{opacity:0;transform:translate3d(-60%,-50%,0)}to{opacity:0;transform:translate3d(-60%,-50%,0)}}"]}),n})();const T=[{path:"",component:(()=>{class n{constructor(e,o){this.s_nav=e,this.s_body=o,this.notifier$=new p.x,this.numberOfProductsVisible=4,e.setDefaultStyle={transparent:!0,overlay:!0},o.scrollPosition$.pipe((0,m.R)(this.notifier$)).subscribe(a=>{a.position.y>50?e.getStyle.transparent&&e.makeTransparent(!1):e.getStyle.transparent||e.makeTransparent(!0)})}ngOnDestroy(){this.s_nav.useDefaultStyle(),this.stopObs()}stopObs(){this.notifier$.next(null),this.notifier$.complete(),this.notifier$.unsubscribe()}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(u.h),t.Y36(f.K))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-main"]],decls:16,vars:1,consts:[["setbg",""],["id","newReleasesCon","setbg","half"],["id","newReleases",3,"number"],["id","leafCardCon"],["id","leafCard1",1,"leafCards"],[1,"leafBg"],[1,"leafText"],["id","leafCard2",1,"leafCards"],["id","leafCard3",1,"leafCards"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0),t._UZ(1,"app-home-banner"),t.qZA(),t.TgZ(2,"div",1),t._UZ(3,"app-product-carousel",2),t.qZA(),t.TgZ(4,"div",1)(5,"div",3)(6,"div",4),t._UZ(7,"div",5),t.TgZ(8,"div",6),t._uU(9,"Wigs"),t.qZA()(),t.TgZ(10,"div",7),t._UZ(11,"div",5)(12,"div",6),t.qZA(),t.TgZ(13,"div",8),t._UZ(14,"div",5)(15,"div",6),t.qZA()()()),2&e&&(t.xp6(3),t.Q6J("number",o.numberOfProductsVisible))},dependencies:[v,A],styles:["[_nghost-%COMP%]{display:contents}#newReleases[_ngcontent-%COMP%]{width:70%;margin:auto}"]}),n})()}];let U=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[s.Bz.forChild(T),s.Bz]}),n})(),E=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[l.ez,s.Bz]}),n})(),L=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[l.ez,U,E]}),n})()}}]);