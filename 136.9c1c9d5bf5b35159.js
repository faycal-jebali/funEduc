"use strict";(self.webpackChunkfront=self.webpackChunkfront||[]).push([[136],{7136:(h,_,s)=>{s.r(_),s.d(_,{ExerciceFormComponent:()=>v});var a=s(6895),e=s(1571),t=s(433),p=s(646),m=s(2682),f=s(6999);function d(o,r){if(1&o){const c=e.EpF();e.TgZ(0,"div"),e._UZ(1,"input",25),e.TgZ(2,"button",24),e.NdJ("click",function(){const l=e.CHM(c).index,u=e.oxw(2);return e.KtG(u.removeOption(l))}),e._uU(3,"\u274c"),e.qZA()()}if(2&o){const c=r.index;e.xp6(1),e.Q6J("formControlName",c)}}function x(o,r){if(1&o){const c=e.EpF();e.TgZ(0,"div")(1,"label"),e._uU(2,"Options :"),e.qZA(),e.TgZ(3,"div",22),e.YNc(4,d,4,1,"div",23),e.qZA(),e.TgZ(5,"button",24),e.NdJ("click",function(){e.CHM(c);const n=e.oxw();return e.KtG(n.addOption())}),e._uU(6,"\u2795 Ajouter une option"),e.qZA()()}if(2&o){const c=e.oxw();e.xp6(4),e.Q6J("ngForOf",c.options.controls)}}function g(o,r){if(1&o&&(e.TgZ(0,"option",26),e._uU(1),e.qZA()),2&o){const c=r.$implicit;e.Q6J("value",c.id),e.xp6(1),e.hij(" ",c.title," ")}}let v=(()=>{const r=class{constructor(i){this.fb=i,this.sections=[],this.exercicesService=(0,e.f3M)(f.w),this.exerciceSectionService=(0,e.f3M)(m.i),this.router=(0,e.f3M)(p.F0),this.exerciceForm=this.fb.group({type:["fill-in-the-blank",[t.kI.required]],question:["",[t.kI.required]],correct_answer:["",[t.kI.required]],options:this.fb.array([]),explanation:[""],difficulty:["easy",[t.kI.required]],created_by:["teacher",[t.kI.required]],section_id:["",[t.kI.required]]}),this.exerciceForm.get("type")?.valueChanges.subscribe(n=>{"multiple-choice"===n?this.addOption():this.clearOptions()})}ngOnInit(){this.loadSections()}loadSections(){this.exerciceSectionService.getExercicesBySection().subscribe(i=>{console.log("Sections charg\xe9es:",i),this.sections=i})}get options(){return this.exerciceForm.get("options")}addOption(){this.options.push(new t.NI("",t.kI.required))}removeOption(i){this.options.removeAt(i)}clearOptions(){this.options.clear()}createExercice(){this.exerciceForm.valid?this.exercicesService.createExercice(this.exerciceForm.value).subscribe(i=>{alert("Exercice cr\xe9\xe9 avec succ\xe8s !"),this.exerciceForm.reset(),this.router.navigate(["/"])},i=>{alert("Erreur lors de la cr\xe9ation de l'exercice."),console.error(i)}):alert("Tous les champs sont requis.")}};let o=r;return r.\u0275fac=function(n){return new(n||r)(e.Y36(t.qu))},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-exercice-form"]],standalone:!0,features:[e.jDz],decls:36,vars:4,consts:[[1,"create-exercice"],[3,"formGroup","ngSubmit"],["for","question"],["id","question","formControlName","question","type","text"],["for","correct_answer"],["id","correct_answer","formControlName","correct_answer","type","text"],["for","type"],["id","type","formControlName","type"],["value","fill-in-the-blank"],["value","multiple-choice"],[4,"ngIf"],["for","section"],["id","section","formControlName","section_id"],[3,"value",4,"ngFor","ngForOf"],["for","difficulty"],["id","difficulty","formControlName","difficulty"],["value","easy"],["value","medium"],["value","hard"],["for","explanation"],["id","explanation","formControlName","explanation"],["type","submit",3,"disabled"],["formArrayName","options"],[4,"ngFor","ngForOf"],["type","button",3,"click"],["type","text",3,"formControlName"],[3,"value"]],template:function(n,l){if(1&n&&(e.TgZ(0,"div",0)(1,"h2"),e._uU(2,"Cr\xe9er un Exercice"),e.qZA(),e.TgZ(3,"form",1),e.NdJ("ngSubmit",function(){return l.createExercice()}),e.TgZ(4,"label",2),e._uU(5,"Question :"),e.qZA(),e._UZ(6,"input",3),e.TgZ(7,"label",4),e._uU(8,"R\xe9ponse Correcte :"),e.qZA(),e._UZ(9,"input",5),e.TgZ(10,"label",6),e._uU(11,"Type :"),e.qZA(),e.TgZ(12,"select",7)(13,"option",8),e._uU(14,"Compl\xe9ter les blancs"),e.qZA(),e.TgZ(15,"option",9),e._uU(16,"Choix multiples"),e.qZA()(),e.YNc(17,x,7,1,"div",10),e.TgZ(18,"label",11),e._uU(19,"Section :"),e.qZA(),e.TgZ(20,"select",12),e.YNc(21,g,2,2,"option",13),e.qZA(),e.TgZ(22,"label",14),e._uU(23,"Difficult\xe9 :"),e.qZA(),e.TgZ(24,"select",15)(25,"option",16),e._uU(26,"Facile"),e.qZA(),e.TgZ(27,"option",17),e._uU(28,"Moyenne"),e.qZA(),e.TgZ(29,"option",18),e._uU(30,"Difficile"),e.qZA()(),e.TgZ(31,"label",19),e._uU(32,"Explication (facultatif) :"),e.qZA(),e._UZ(33,"textarea",20),e.TgZ(34,"button",21),e._uU(35," \u2705 Cr\xe9er Exercice "),e.qZA()()()),2&n){let u;e.xp6(3),e.Q6J("formGroup",l.exerciceForm),e.xp6(14),e.Q6J("ngIf","multiple-choice"===(null==(u=l.exerciceForm.get("type"))?null:u.value)),e.xp6(4),e.Q6J("ngForOf",l.sections),e.xp6(13),e.Q6J("disabled",l.exerciceForm.invalid)}},dependencies:[a.ez,a.sg,a.O5,t.UX,t._Y,t.YN,t.Kr,t.Fj,t.EJ,t.JJ,t.JL,t.sg,t.u,t.CE]}),o})()}}]);