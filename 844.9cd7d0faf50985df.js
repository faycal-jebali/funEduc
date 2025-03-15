"use strict";(self.webpackChunkfront=self.webpackChunkfront||[]).push([[844],{7844:(v,h,i)=>{i.r(h),i.d(h,{SubjectDetailComponent:()=>w});var _=i(6895),u=i(646),p=i(6173),m=i(6652);const y={title:"Conjugaison 1",list:[{type:"multiple-choice",sentence:"Marie _______ un g\xe2teau.",options:["fait","faire","fais"],correctAnswer:"fait"},{type:"multiple-choice",sentence:"Les enfants _______ \xe0 la r\xe9cr\xe9ation.",options:["jouent","jouer","jouait"],correctAnswer:"jouent"},{type:"multiple-choice",sentence:"Nous _______ le matin avant d'aller \xe0 l'\xe9cole.",options:["r\xe9veillons","r\xe9veiller","r\xe9veille"],correctAnswer:"r\xe9veillons"},{type:"multiple-choice",sentence:"Paul et moi _______ souvent au parc.",options:["jouons","jouer","jouait"],correctAnswer:"jouons"},{type:"multiple-choice",sentence:"Tu _______ des livres \xe0 la biblioth\xe8que.",options:["lis","lire","lit"],correctAnswer:"lis"},{type:"multiple-choice",sentence:"Vous _______ toujours des bonnes r\xe9ponses.",options:["donnez","donner","donne"],correctAnswer:"donnez"},{type:"multiple-choice",sentence:"Il _______ des dessins avec ses crayons.",options:["dessine","dessiner","dessinait"],correctAnswer:"dessine"},{type:"multiple-choice",sentence:"Nous _______ nos devoirs apr\xe8s l'\xe9cole.",options:["faisons","faire","fait"],correctAnswer:"faisons"},{type:"multiple-choice",sentence:"Je _______ mes l\xe9gumes.",options:["mange","manger","mang\xe9"],correctAnswer:"mange"},{type:"multiple-choice",sentence:"Vous _______ souvent des promenades.",options:["faites","faire","fait"],correctAnswer:"faites"}]},b={title:"Conjugaison 2",list:[{type:"multiple-choice",sentence:"Le chat _______ sur le canap\xe9.",options:["mange","manger","mang\xe9"],correctAnswer:"mange"},{type:"multiple-choice",sentence:"Nous _______ \xe0 l'\xe9cole chaque matin.",options:["allez","allons","aller"],correctAnswer:"allons"},{type:"multiple-choice",sentence:"Tu _______ tr\xe8s bien en fran\xe7ais.",options:["parles","parle","parler"],correctAnswer:"parles"},{type:"multiple-choice",sentence:"Elle _______ une pomme.",options:["mange","manger","mang\xe9"],correctAnswer:"mange"},{type:"multiple-choice",sentence:"Ils _______ au parc tous les dimanches.",options:["jouent","jouer","jouaient"],correctAnswer:"jouent"},{type:"multiple-choice",sentence:"Je _______ mes devoirs avant de sortir.",options:["fais","faire","fait"],correctAnswer:"fais"}]},x={title:"Conjugaison 3",list:[{type:"fill-in-the-blank",sentence:"Nous ______ \xe0 l'\xe9cole. (\xeatre)",correctAnswer:"sommes"},{type:"fill-in-the-blank",sentence:"______-tu un stylo? (avoir)",correctAnswer:"as"},{type:"multiple-choice",sentence:"Il ______ (avoir) un chien.",options:["as","a","avons"],correctAnswer:"a"},{type:"matching",correctAnswer:{Je:"suis",Tu:"es","Il/Elle":"est"},options:["suis","es","est"]}]};var a=i(8613);class l{static findById(e,n){for(const s of e){if(s.id===n)return s;if(s.children){const o=this.findById(s.children,n);if(o)return o}}return null}static isEmpty(e){return!!(null==e||"string"==typeof e&&""===e.trim()||Array.isArray(e)&&0===e.length||"object"==typeof e&&0===Object.keys(e).length)}static generateUUID(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){const n=16*Math.random()|0;return("x"===e?n:3&n|8).toString(16)})}static capitalize(e){return e?e.charAt(0).toUpperCase()+e.slice(1).toLowerCase():""}static formatDate(e){return e.toLocaleDateString("fr-FR")}static sortBy(e,n,s=!0){return e.sort((o,r)=>o[n]<r[n]?s?-1:1:o[n]>r[n]?s?1:-1:0)}}const j={title:"Adjectifs Qualificatifs",list:[{type:"matching",correctAnswer:{"1. La fille est ":"peureuse"},options:["peureux","peureuse"]},{type:"matching",correctAnswer:{"2. Le chien est ":"blanc"},options:["blanc","blanche"]},{type:"matching",correctAnswer:{"3. La robe est":"bleue"},options:["bleu","bleue"]},{type:"matching",correctAnswer:{"4. Le chocolat est ":"bon"},options:["bon","bonne"]},{type:"matching",correctAnswer:{"5. Maman est ":"f\xe2ch\xe9e"},options:["f\xe2ch\xe9","f\xe2ch\xe9e"]},{type:"matching",correctAnswer:{"6. La Terre est ":"ronde"},options:["rond","ronde"]},{type:"matching",correctAnswer:{"7. La cousine est ":"grande"},options:["grand","grande"]},{type:"matching",correctAnswer:{"8. Mary est ":"gaie"},options:["gai","gaie"]},{type:"matching",correctAnswer:{"9. La robe est ":"verte"},options:["vert","verte"]},{type:"matching",correctAnswer:{"10. Grand-m\xe8re est ":"fi\xe8re"},options:["fi\xe8r","fi\xe8re"]}]};var A=i(9300),t=i(1571);function I(c,e){if(1&c&&(t.TgZ(0,"mat-tab",1)(1,"h3"),t._uU(2),t.qZA(),t._UZ(3,"app-fill-the-blanks-by-type",2),t.qZA()),2&c){const n=e.$implicit;t.Q6J("label",n.title||"Exercies"),t.xp6(2),t.Oqu(n.title),t.xp6(1),t.Q6J("exercises",n.list)}}let w=(()=>{const e=class{constructor(s,o){this.route=s,this.router=o,this.conjugaisonList=[y,b,x],this.orthographeList=[j],this.classId=Number(this.route.snapshot.paramMap.get("classId")),this.subjectId=Number(this.route.snapshot.paramMap.get("subjectId")),this.lessonId=Number(this.route.snapshot.paramMap.get("lessonId")),this.subject=l.findById(a.n,this.subjectId),this.lesson=l.findById(a.n,this.lessonId),"conjugaison"===this.lesson?.alias&&(this.lesson.exercices=this.conjugaisonList),"orthographe"===this.lesson?.alias&&(this.lesson.exercices=this.orthographeList)}ngOnInit(){this.router.events.pipe((0,A.h)(s=>s instanceof u.m2)).subscribe(()=>{this.route.params.subscribe(s=>{this.loadData()})})}loadData(){this.classId=Number(this.route.snapshot.paramMap.get("classId")),this.subjectId=Number(this.route.snapshot.paramMap.get("subjectId")),this.lessonId=Number(this.route.snapshot.paramMap.get("lessonId")),console.log("Chargement des donn\xe9es avec les ids:",this.classId,this.subjectId,this.lessonId),this.subject=l.findById(a.n,this.subjectId),this.lesson=l.findById(a.n,this.lessonId),"conjugaison"===this.lesson?.alias&&(this.lesson.exercices=this.conjugaisonList),"orthographe"===this.lesson?.alias&&(this.lesson.exercices=this.orthographeList)}};let c=e;return e.\u0275fac=function(o){return new(o||e)(t.Y36(u.gz),t.Y36(u.F0))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-subject-detail"]],standalone:!0,features:[t.jDz],decls:4,vars:3,consts:[[3,"label",4,"ngFor","ngForOf"],[3,"label"],[3,"exercises"]],template:function(o,r){1&o&&(t.TgZ(0,"h2"),t._uU(1),t.qZA(),t.TgZ(2,"mat-tab-group"),t.YNc(3,I,4,3,"mat-tab",0),t.qZA()),2&o&&(t.xp6(1),t.AsE("D\xe9tails de la mati\xe8re : ",null==r.subject?null:r.subject.name,": ",null==r.lesson?null:r.lesson.name,""),t.xp6(2),t.Q6J("ngForOf",null==r.lesson?null:r.lesson.exercices))},dependencies:[_.ez,_.sg,p.Nh,p.uX,p.SP,m.c],encapsulation:2}),c})()}}]);