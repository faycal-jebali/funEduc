"use strict";(self.webpackChunkfront=self.webpackChunkfront||[]).push([[337],{7337:(h,a,u)=>{u.r(a),u.d(a,{SectionExercicesFormComponent:()=>E});var e=u(1571),_=u(6895),i=u(433),p=u(646),m=u(2682),d=u(6999),f=u(7287);function x(r,o){1&r&&(e.TgZ(0,"div"),e._uU(1," Le titre est requis. "),e.qZA())}function g(r,o){if(1&r){const s=e.EpF();e.TgZ(0,"div"),e._UZ(1,"input",26),e.TgZ(2,"button",10),e.NdJ("click",function(){const c=e.CHM(s).index,l=e.oxw(2).index,T=e.oxw();return e.KtG(T.removeOption(l,c))}),e._uU(3,"\u274c"),e.qZA()()}if(2&r){const s=o.index;e.xp6(1),e.Q6J("formControlName",s)}}function v(r,o){if(1&r){const s=e.EpF();e.TgZ(0,"div")(1,"label"),e._uU(2,"Options :"),e.qZA(),e.TgZ(3,"div",24),e.YNc(4,g,4,1,"div",25),e.qZA(),e.TgZ(5,"button",10),e.NdJ("click",function(){e.CHM(s);const n=e.oxw().index,c=e.oxw();return e.KtG(c.addOption(n))}),e._uU(6," \u2795 Ajouter une option "),e.qZA()()}if(2&r){const s=e.oxw().index,t=e.oxw();e.xp6(4),e.Q6J("ngForOf",t.getOptions(s).controls)}}function Z(r,o){if(1&r){const s=e.EpF();e.TgZ(0,"div",12)(1,"h3"),e._uU(2),e.qZA(),e.TgZ(3,"label",13),e._uU(4,"Question :"),e.qZA(),e._UZ(5,"input",14),e.TgZ(6,"label",13),e._uU(7,"R\xe9ponse Correcte :"),e.qZA(),e._UZ(8,"input",15),e.TgZ(9,"label",13),e._uU(10,"Type :"),e.qZA(),e.TgZ(11,"select",16)(12,"option",17),e._uU(13,"Compl\xe9ter les blancs"),e.qZA(),e.TgZ(14,"option",18),e._uU(15,"Choix multiples"),e.qZA()(),e.YNc(16,v,7,1,"div",5),e.TgZ(17,"label",13),e._uU(18,"Difficult\xe9 :"),e.qZA(),e.TgZ(19,"select",19)(20,"option",20),e._uU(21,"Facile"),e.qZA(),e.TgZ(22,"option",21),e._uU(23,"Moyenne"),e.qZA(),e.TgZ(24,"option",22),e._uU(25,"Difficile"),e.qZA()(),e.TgZ(26,"label",13),e._uU(27,"Explication :"),e.qZA(),e._UZ(28,"textarea",23),e.TgZ(29,"button",10),e.NdJ("click",function(){const c=e.CHM(s).index,l=e.oxw();return e.KtG(l.removeExercice(c))}),e._uU(30," \u274c Supprimer l'exercice "),e.qZA()()}if(2&r){const s=o.$implicit,t=o.index;let n;e.Q6J("formGroupName",t),e.xp6(2),e.hij("Exercice ",t+1,""),e.xp6(1),e.MGl("for","question-",t,""),e.xp6(2),e.MGl("id","question-",t,""),e.xp6(1),e.MGl("for","correct_answer-",t,""),e.xp6(2),e.MGl("id","correct_answer-",t,""),e.xp6(1),e.MGl("for","type-",t,""),e.xp6(2),e.MGl("id","type-",t,""),e.xp6(5),e.Q6J("ngIf","multiple-choice"===(null==(n=s.get("type"))?null:n.value)),e.xp6(1),e.MGl("for","difficulty-",t,""),e.xp6(2),e.MGl("id","difficulty-",t,""),e.xp6(7),e.MGl("for","explanation-",t,""),e.xp6(2),e.MGl("id","explanation-",t,"")}}let E=(()=>{const o=class{constructor(t){this.fb=t,this.exercicesService=(0,e.f3M)(d.w),this.exerciceSectionService=(0,e.f3M)(m.i),this.router=(0,e.f3M)(p.F0),this.form=this.fb.group({section:this.fb.group({title:["",i.kI.required],description:[""],created_by:[f.i4.ADMIN]}),exercices:this.fb.array([])})}ngOnInit(){}get exercices(){return this.form.get("exercices")}addExercice(){this.exercices.push(this.createExerciceForm())}removeExercice(t){this.exercices.removeAt(t)}createExerciceForm(){return this.fb.group({type:["fill-in-the-blank",i.kI.required],question:["",i.kI.required],correct_answer:["",i.kI.required],options:this.fb.array([]),explanation:[""],difficulty:["easy",i.kI.required],section_id:[""]})}getOptions(t){return this.exercices.at(t).get("options")}addOption(t){this.getOptions(t).push(new i.NI("",i.kI.required))}removeOption(t,n){this.getOptions(t).removeAt(n)}submit(){this.form.valid?this.exerciceSectionService.createSectionWithExercices(this.form.value).subscribe(()=>{alert("Section et exercices cr\xe9\xe9s avec succ\xe8s !"),this.router.navigate(["/"])},t=>{alert("Erreur lors de l'enregistrement."),console.error(t)}):alert("Veuillez remplir tous les champs requis.")}};let r=o;return o.\u0275fac=function(n){return new(n||o)(e.Y36(i.qu))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-section-exercice-form"]],standalone:!0,features:[e.jDz],decls:18,vars:3,consts:[[1,"section-exercice-container"],[3,"formGroup","ngSubmit"],["formGroupName","section"],["for","title"],["id","title","formControlName","title","type","text"],[4,"ngIf"],["for","description"],["id","description","formControlName","description"],["formArrayName","exercices"],[3,"formGroupName",4,"ngFor","ngForOf"],["type","button",3,"click"],["type","submit"],[3,"formGroupName"],[3,"for"],["formControlName","question","type","text",3,"id"],["formControlName","correct_answer","type","text",3,"id"],["formControlName","type",3,"id"],["value","fill-in-the-blank"],["value","multiple-choice"],["formControlName","difficulty",3,"id"],["value","easy"],["value","medium"],["value","hard"],["formControlName","explanation",3,"id"],["formArrayName","options"],[4,"ngFor","ngForOf"],["type","text",3,"formControlName"]],template:function(n,c){if(1&n&&(e.TgZ(0,"div",0)(1,"h2"),e._uU(2,"Cr\xe9er une Section et ses Exercices"),e.qZA(),e.TgZ(3,"form",1),e.NdJ("ngSubmit",function(){return c.submit()}),e.TgZ(4,"div",2)(5,"label",3),e._uU(6,"Titre de la Section :"),e.qZA(),e._UZ(7,"input",4),e.YNc(8,x,2,0,"div",5),e.TgZ(9,"label",6),e._uU(10,"Description :"),e.qZA(),e._UZ(11,"textarea",7),e.qZA(),e.TgZ(12,"div",8),e.YNc(13,Z,31,13,"div",9),e.qZA(),e.TgZ(14,"button",10),e.NdJ("click",function(){return c.addExercice()}),e._uU(15," \u2795 Ajouter un Exercice "),e.qZA(),e.TgZ(16,"button",11),e._uU(17,"\u2705 Enregistrer"),e.qZA()()()),2&n){let l;e.xp6(3),e.Q6J("formGroup",c.form),e.xp6(5),e.Q6J("ngIf",(null==(l=c.form.get("section.title"))?null:l.invalid)&&(null==(l=c.form.get("section.title"))?null:l.touched)),e.xp6(5),e.Q6J("ngForOf",c.exercices.controls)}},dependencies:[_.ez,_.sg,_.O5,i.UX,i._Y,i.YN,i.Kr,i.Fj,i.EJ,i.JJ,i.JL,i.sg,i.u,i.x0,i.CE]}),r})()}}]);