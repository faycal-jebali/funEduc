import{a as q,c as z}from"./chunk-QVCCG6HG.js";import{b as J,h as K,i as Q}from"./chunk-OBVIGYWL.js";import{b as A,f as H,g as R,j as L,k as P}from"./chunk-J7QNAIPP.js";import{b as D,e as N,f as V,i as O,k as U,n as G,r as j,t as B}from"./chunk-THUYKHO4.js";import{b as $,d as k}from"./chunk-FBW2AEII.js";import"./chunk-H7H6RDXH.js";import{a as w}from"./chunk-ZANDB5YP.js";import{Db as s,Mb as n,Nb as r,Ob as v,Qc as x,Sb as E,Ub as d,Vb as M,Xc as I,a as C,b as F,bb as a,ec as m,ed as y,fc as S,gc as _,gd as T,ja as p,nb as g,pa as c,qa as f,rb as h}from"./chunk-6OGJQNIW.js";function W(o){let l=new Map,t=[];return o.forEach(e=>{l.set(e.id,F(C({},e),{children:[]}))}),l.forEach(e=>{if(e.parent_id){let i=l.get(e.parent_id);i&&i.children.push(e)}else t.push(e)}),t}function b(o,l=0){let t=[];for(let e of o)t.push({id:e.id,title:"\u2014".repeat(l)+" "+e.title}),e.children?.length&&t.push(...b(e.children,l+1));return t}function X(o,l){if(o&1&&(n(0,"mat-option",4),m(1),r()),o&2){let t=l.$implicit;s("value",t.id),a(),_(" ",t.title," ")}}function Y(o,l){if(o&1){let t=E();n(0,"mat-card",9)(1,"div",10)(2,"div")(3,"strong"),m(4),r()(),n(5,"div")(6,"button",11),d("click",function(){let i=c(t).$implicit,u=M();return f(u.edit(i))}),m(7,"\u270F\uFE0F Modifier"),r(),n(8,"button",12),d("click",function(){let i=c(t).$implicit,u=M();return f(u.delete(i.id))}),m(9," \u{1F5D1}\uFE0F Supprimer "),r()()()()}if(o&2){let t=l.$implicit;a(4),S(t.title)}}var Ft=(()=>{class o{constructor(){this.modules=[],this.modulesFlat=[],this.selectedModuleId=null,this.fb=p(j),this.http=p(y),this.apiUrl=w.apiUrl}ngOnInit(){this.form=this.fb.group({title:[""],parent_id:[null]}),this.loadModules()}loadModules(){this.http.get(`${this.apiUrl}/modules`).subscribe(t=>{this.modules=t;let e=W(t);this.modulesFlat=b(e),console.log("modules : ",this.modules),console.log("modulesFlat : ",this.modulesFlat)})}save(){this.selectedModuleId?this.http.put(`${this.apiUrl}/modules/${this.selectedModuleId}`,this.form.value).subscribe(()=>{this.reset()}):this.http.post(`${this.apiUrl}/modules`,this.form.value).subscribe(()=>{this.reset()})}edit(t){this.selectedModuleId=t.id;let e=this.modules.find(i=>i.id===t.id);this.form.patchValue(e)}delete(t){this.http.delete(`${this.apiUrl}/modules/${t}`).subscribe(()=>{this.reset()})}reset(){this.form.reset(),this.selectedModuleId=null,this.loadModules()}static{this.\u0275fac=function(e){return new(e||o)}}static{this.\u0275cmp=g({type:o,selectors:[["app-module-crud"]],decls:18,vars:5,consts:[[3,"ngSubmit","formGroup"],[1,"w-full"],["matInput","","formControlName","title"],["formControlName","parent_id"],[3,"value"],[3,"value",4,"ngFor","ngForOf"],["mat-raised-button","","color","primary","type","submit"],["mat-button","","type","button",3,"click"],["class","mt-4",4,"ngFor","ngForOf"],[1,"mt-4"],[1,"flex","justify-between","items-center"],["mat-button","",3,"click"],["mat-button","","color","warn",3,"click"]],template:function(e,i){e&1&&(n(0,"mat-card")(1,"form",0),d("ngSubmit",function(){return i.save()}),n(2,"mat-form-field",1)(3,"mat-label"),m(4,"Titre"),r(),v(5,"input",2),r(),n(6,"mat-form-field",1)(7,"mat-label"),m(8,"Parent"),r(),n(9,"mat-select",3)(10,"mat-option",4),m(11,"Aucun (module racine)"),r(),h(12,X,2,2,"mat-option",5),r()(),n(13,"button",6),m(14),r(),n(15,"button",7),d("click",function(){return i.reset()}),m(16,"R\xE9initialiser"),r()()(),h(17,Y,10,1,"mat-card",8)),e&2&&(a(),s("formGroup",i.form),a(9),s("value",null),a(2),s("ngForOf",i.modulesFlat),a(2),_(" ",i.selectedModuleId?"Mettre \xE0 jour":"Cr\xE9er"," "),a(3),s("ngForOf",i.modulesFlat))},dependencies:[I,x,B,O,D,N,V,U,G,T,R,H,A,P,L,Q,K,J,k,$,z,q],encapsulation:2})}}return o})();export{Ft as ModuleCrudComponent};
