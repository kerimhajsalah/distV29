(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"/DJm":function(t,e,i){"use strict";i.r(e),i.d(e,"AbonnementPaypalModule",(function(){return g}));var c=i("ofXK"),s=i("tyNb"),a=i("fXoL"),n=i("az2D"),r=i("4Dxv"),o=i("+iKM"),l=i("oOf3"),p=i("Qu3c"),u=i("sYmb");const b=function(t){return["/professionnel/detaildossier",t]};function d(t,e){if(1&t&&(a.bc(0,"div",16),a.Wb(1,"img",17),a.bc(2,"div",18),a.bc(3,"div",19),a.Wb(4,"i",20),a.ac(),a.Wb(5,"br"),a.bc(6,"div",6),a.bc(7,"button",21),a.bc(8,"h6",22),a.Pc(9),a.ac(),a.ac(),a.Wb(10,"div",23),a.ac(),a.ac(),a.ac()),2&t){const t=a.mc().$implicit;a.Jb(7),a.sc("routerLink",a.wc(2,b,t._id)),a.Jb(2),a.Qc(t.name.slice(0,20))}}function h(t,e){if(1&t&&(a.bc(0,"div",14),a.Nc(1,d,11,4,"div",15),a.ac()),2&t){const t=e.$implicit;a.tc("matTooltip",t.name),a.Jb(1),a.sc("ngIf",!t.status)}}const m=function(t){return{itemsPerPage:8,currentPage:t,id:"p"}},y=[{path:"",component:(()=>{class t{constructor(t,e,i){this._patient=t,this.authPrp=e,this.PaymentService=i,this.i=1,this.status="",this.price2=0,this.price1=0,this.dossiers=[],this.page=1,this.allDosssier=[],this.spinerLoading=!0,this.payment2={intent:"sale",payer:{payment_method:"paypal"},redirect_urls:{return_url:`http://localhost:3000/paypal/success/62988cc89705e81dbc08e45b/${this.price2}/'USD'/true`,cancel_url:"http://185.104.172.119:3000/paypal/cancel"},transactions:[{item_list:{items:[{name:"item",sku:"item",price:this.price2,currency:"USD",quantity:1}]},amount:{currency:"USD",total:this.price2},description:"This is the payment description."}]},this.payment1={intent:"sale",payer:{payment_method:"paypal"},redirect_urls:{return_url:"http://localhost:3000/paypal/success/62988cc89705e81dbc08e45b/23.55/'USD'/true",cancel_url:"http://185.104.172.119:3000/paypal/cancel"},transactions:[{item_list:{items:[{name:"item",sku:"item",price:23.55,currency:"USD",quantity:1}]},amount:{currency:"USD",total:23.55},description:"This is the payment description."}]},this.id=this.authPrp.geid()}ngOnInit(){this._patient.getAlldossier().subscribe(t=>{let e=0;t.map(t=>{t.status?e+=1:this.allDosssier.push(t)}),this.dossiers=t}),this.PaymentService.monthlyPrice().subscribe(t=>{this.monthly=t,this.price1=this.monthly[0].prix}),this.PaymentService.yearlyPrice().subscribe(t=>{this.yearly=t,this.price2=this.yearly[0].prix})}enableDisableRule(t){this.toggle=!this.toggle,this.status=this.toggle?"mensuel":"annuel"}pay(){("annuel"==this.status||"mensuel"==this.status)&&this.PaymentService.pay(this.id,this.payment1).subscribe(t=>{window.location.href=t.url})}openModal(t){}filterItem(t){this.allDosssier=this.dossiers.filter(e=>e.name.toLowerCase().includes(t.toLowerCase())||e.name.toLowerCase().includes(t.toLowerCase())||e.name.toLowerCase().includes(t))}getIdDossier(t){}}return t.\u0275fac=function(e){return new(e||t)(a.Vb(n.a),a.Vb(r.a),a.Vb(o.a))},t.\u0275cmp=a.Pb({type:t,selectors:[["app-abonnement-paypal"]],decls:22,vars:18,consts:[[1,"content"],[1,"container"],["aria-label","breadcrumb",1,"main-breadcrumb"],[1,"breadcrumb"],[1,"breadcrumb-item"],[2,"font-weight","bold","font-size","90%"],[1,"row"],[1,"form-group"],["type","text",1,"form-control",3,"placeholder","input"],[1,"row",2,"width","90%"],["class","col order-last","style","padding-bottom: 5%;","matTooltipPosition","above",3,"matTooltip",4,"ngFor","ngForOf"],[1,"parent"],[1,"col-sm-3","col-xl-12","text-center"],["id","p",1,"child",3,"previousLabel","nextLabel","pageChange"],["matTooltipPosition","above",1,"col","order-last",2,"padding-bottom","5%",3,"matTooltip"],["class","card1","style","height: 150px;",4,"ngIf"],[1,"card1",2,"height","150px"],["src","assets/dossier.svg","alt","","srcset",""],[1,"card-header"],[1,"row",2,"margin-left","1px","display","flex"],[1,"bi","bi-folder2","fa-lg"],[1,"col-sm",2,"cursor","pointer","background","transparent","border-color","transparent",3,"routerLink"],[1,"card-title"],[1,"col-sm"]],template:function(t,e){1&t&&(a.bc(0,"div",0),a.bc(1,"div",1),a.bc(2,"nav",2),a.bc(3,"ol",3),a.bc(4,"li",4),a.bc(5,"a",5),a.Pc(6),a.nc(7,"translate"),a.ac(),a.ac(),a.ac(),a.ac(),a.bc(8,"div",6),a.bc(9,"div",1),a.bc(10,"div",7),a.bc(11,"input",8),a.ic("input",(function(t){return e.filterItem(t.target.value)})),a.nc(12,"translate"),a.ac(),a.ac(),a.ac(),a.ac(),a.ac(),a.ac(),a.bc(13,"div",9),a.bc(14,"div",6),a.Nc(15,h,2,2,"div",10),a.nc(16,"paginate"),a.ac(),a.Wb(17,"div",11),a.bc(18,"div",12),a.bc(19,"pagination-controls",13),a.ic("pageChange",(function(t){return e.p=t})),a.nc(20,"translate"),a.nc(21,"translate"),a.ac(),a.ac(),a.ac()),2&t&&(a.Jb(6),a.Qc(a.oc(7,5,"FORMS.DO")),a.Jb(5),a.uc("placeholder","",a.oc(12,7,"LISTPATIENT.SEARCH"),"..."),a.Jb(4),a.sc("ngForOf",a.pc(16,9,e.allDosssier,a.wc(16,m,e.p))),a.Jb(4),a.tc("previousLabel",a.oc(20,12,"PAGINATION.PR")),a.tc("nextLabel",a.oc(21,14,"PAGINATION.NEXT")))},directives:[c.l,l.c,p.a,c.m,s.g],pipes:[u.c,l.b],styles:[".card-header[_ngcontent-%COMP%]{position:absolute;top:13%;justify-content:center;padding-left:62px;width:300px;display:flex;flex-direction:column;background-color:initial;border-color:transparent}"]}),t})()}];let f=(()=>{class t{}return t.\u0275mod=a.Tb({type:t}),t.\u0275inj=a.Sb({factory:function(e){return new(e||t)},imports:[[s.i.forChild(y)],s.i]}),t})(),g=(()=>{class t{}return t.\u0275mod=a.Tb({type:t}),t.\u0275inj=a.Sb({factory:function(e){return new(e||t)},imports:[[c.c,f,p.b,l.a,u.b]]}),t})()}}]);