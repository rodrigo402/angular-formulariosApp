(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{odMU:function(o,r,e){"use strict";e.r(r),e.d(r,"ReactiveModule",function(){return h});var i=e("ofXK"),b=e("tyNb"),t=e("3Pt+"),n=e("fXoL");function c(o,r){1&o&&(n.Mb(0,"span",11),n.hc(1," Debe de ser de 3 letras "),n.Lb())}function a(o,r){1&o&&(n.Mb(0,"span",11),n.hc(1," El precio debe ser 0 o mayor "),n.Lb())}function s(o,r){1&o&&(n.Mb(0,"span",11),n.hc(1," Las existencias deben ser 0 o mayor "),n.Lb())}function l(o,r){1&o&&(n.Mb(0,"span",14),n.hc(1," Este campo es obligatorio "),n.Lb())}function m(o,r){if(1&o){const o=n.Nb();n.Mb(0,"div",15),n.Kb(1,"input",16),n.Mb(2,"button",17),n.Tb("click",function(){n.dc(o);const e=r.index;return n.Vb().borrar(e)}),n.hc(3," Eliminar "),n.Lb(),n.Lb()}if(2&o){const o=r.index;n.zb(1),n.Yb("formControlName",o)}}const u=[{path:"",children:[{path:"basicos",component:(()=>{class o{constructor(o){this.fb=o,this.miFormulario=this.fb.group({nombre:[,[t.t.required,t.t.minLength(3)]],precio:[,[t.t.required,t.t.min(0)]],existencias:[,[t.t.required,t.t.min(0)]]})}ngOnInit(){this.miFormulario.reset({nombre:"RTC123",precio:12})}campoEsValido(o){return this.miFormulario.controls[o].errors&&this.miFormulario.controls[o].touched}guardar(){this.miFormulario.invalid?this.miFormulario.markAllAsTouched():(console.log(this.miFormulario.value),this.miFormulario.reset())}}return o.\u0275fac=function(r){return new(r||o)(n.Jb(t.e))},o.\u0275cmp=n.Db({type:o,selectors:[["app-basicos"]],decls:56,vars:13,consts:[[1,"row"],[1,"col"],["autocomplete","off",3,"formGroup","ngSubmit"],[1,"mb-3","row"],[1,"col-sm-3","col-form-label"],[1,"col-sm-9"],["type","text","formControlName","nombre","placeholder","Nombre del producto",1,"form-control"],["class","form-text text-danger",4,"ngIf"],["type","number","formControlName","precio","placeholder","Precio del producto",1,"form-control"],["type","number","formControlName","existencias","placeholder","Existencias del producto",1,"form-control"],["type","submit",1,"btn","btn-primary","float-end"],[1,"form-text","text-danger"]],template:function(o,r){1&o&&(n.Mb(0,"h2"),n.hc(1,"Reactivos: Basicos"),n.Lb(),n.Kb(2,"hr"),n.Mb(3,"div",0),n.Mb(4,"div",1),n.Mb(5,"form",2),n.Tb("ngSubmit",function(){return r.guardar()}),n.Mb(6,"div",3),n.Mb(7,"label",4),n.hc(8,"Producto"),n.Lb(),n.Mb(9,"div",5),n.Kb(10,"input",6),n.gc(11,c,2,0,"span",7),n.Lb(),n.Lb(),n.Mb(12,"div",3),n.Mb(13,"label",4),n.hc(14,"Precio"),n.Lb(),n.Mb(15,"div",5),n.Kb(16,"input",8),n.gc(17,a,2,0,"span",7),n.Lb(),n.Lb(),n.Mb(18,"div",3),n.Mb(19,"label",4),n.hc(20,"Existencias"),n.Lb(),n.Mb(21,"div",5),n.Kb(22,"input",9),n.gc(23,s,2,0,"span",7),n.Lb(),n.Lb(),n.Mb(24,"div",0),n.Mb(25,"div",1),n.Mb(26,"button",10),n.hc(27," Guardar "),n.Lb(),n.Lb(),n.Lb(),n.Lb(),n.Lb(),n.Lb(),n.Mb(28,"h5"),n.hc(29,"Datos del formulario"),n.Lb(),n.Mb(30,"div",0),n.Mb(31,"div",1),n.Mb(32,"span"),n.hc(33,"Valid"),n.Lb(),n.Mb(34,"pre"),n.hc(35),n.Lb(),n.Mb(36,"span"),n.hc(37,"Pristine"),n.Lb(),n.Mb(38,"pre"),n.hc(39),n.Lb(),n.Mb(40,"span"),n.hc(41,"Touched"),n.Lb(),n.Mb(42,"pre"),n.hc(43),n.Lb(),n.Kb(44,"hr"),n.Mb(45,"span"),n.hc(46,"Value"),n.Lb(),n.Mb(47,"pre"),n.hc(48),n.Wb(49,"json"),n.Lb(),n.Kb(50,"br"),n.Mb(51,"span"),n.hc(52,"CustomDirective"),n.Lb(),n.Mb(53,"pre"),n.hc(54),n.Wb(55,"json"),n.Lb(),n.Lb(),n.Lb()),2&o&&(n.zb(5),n.Yb("formGroup",r.miFormulario),n.zb(6),n.Yb("ngIf",r.campoEsValido("nombre")),n.zb(6),n.Yb("ngIf",r.campoEsValido("precio")),n.zb(6),n.Yb("ngIf",r.campoEsValido("existencias")),n.zb(12),n.ic(r.miFormulario.valid),n.zb(4),n.ic(r.miFormulario.pristine),n.zb(4),n.ic(r.miFormulario.touched),n.zb(5),n.ic(n.Xb(49,9,r.miFormulario.value)),n.zb(6),n.ic(n.Xb(55,11,null==r.miFormulario.controls.existencias?null:r.miFormulario.controls.existencias.errors)))},directives:[t.u,t.m,t.h,t.c,t.l,t.g,i.j,t.p],pipes:[i.e],encapsulation:2}),o})()},{path:"dinamicos",component:(()=>{class o{constructor(o){this.fb=o,this.miFormulario=this.fb.group({nombre:[,[t.t.required,t.t.minLength(3)]],favoritos:this.fb.array([["Metal Gear",t.t.required],["Death Strading",t.t.required]],t.t.required)}),this.nuevoFavorito=this.fb.control("",t.t.required)}get favoritosArr(){return this.miFormulario.get("favoritos")}campoEsValido(o){return this.miFormulario.controls[o].errors&&this.miFormulario.controls[o].touched}agregarFavorito(){this.nuevoFavorito.invalid||(this.favoritosArr.push(this.fb.control(this.nuevoFavorito.value,t.t.required)),this.nuevoFavorito.reset())}guardar(){this.miFormulario.valid?(console.log(this.miFormulario.value),this.miFormulario.reset()):this.miFormulario.markAllAsTouched()}borrar(o){this.favoritosArr.removeAt(o)}}return o.\u0275fac=function(r){return new(r||o)(n.Jb(t.e))},o.\u0275cmp=n.Db({type:o,selectors:[["app-dinamicos"]],decls:47,vars:10,consts:[["autocomplete","off",3,"formGroup","ngSubmit"],[1,"mb-3","row"],[1,"col-sm-3","col-form-label"],[1,"col-sm-9"],["formControlName","nombre","placeholder","Nombre de la persona",1,"form-control"],["class","form-text text-danger",4,"ngIf"],[1,"input-group"],["placeholder","Agregar favorito",1,"form-control",3,"formControl","keyup.enter"],[1,"btn","btn-outline-primary",3,"click"],["formArrayName","favoritos",1,"col-sm-9"],["class","input-group mb-1",4,"ngFor","ngForOf"],[1,"row"],[1,"col-sm-12"],["type","submit",1,"btn","btn-primary","float-end"],[1,"form-text","text-danger"],[1,"input-group","mb-1"],[1,"form-control",3,"formControlName"],[1,"btn","btn-outline-danger",3,"click"]],template:function(o,r){1&o&&(n.Mb(0,"h2"),n.hc(1,"Reactivos: "),n.Mb(2,"small"),n.hc(3,"Dinamicos"),n.Lb(),n.Lb(),n.Kb(4,"hr"),n.Mb(5,"form",0),n.Tb("ngSubmit",function(){return r.guardar()}),n.Mb(6,"div",1),n.Mb(7,"label",2),n.hc(8,"Nombre"),n.Lb(),n.Mb(9,"div",3),n.Kb(10,"input",4),n.gc(11,l,2,0,"span",5),n.Lb(),n.Lb(),n.Mb(12,"div",1),n.Mb(13,"label",2),n.hc(14,"Agregar"),n.Lb(),n.Mb(15,"div",3),n.Mb(16,"div",6),n.Mb(17,"input",7),n.Tb("keyup.enter",function(){return r.agregarFavorito()}),n.Lb(),n.Mb(18,"button",8),n.Tb("click",function(){return r.agregarFavorito()}),n.hc(19," Agregar "),n.Lb(),n.Lb(),n.Lb(),n.Lb(),n.Mb(20,"div",1),n.Mb(21,"label",2),n.hc(22,"Favoritos"),n.Lb(),n.Mb(23,"div",9),n.gc(24,m,4,1,"div",10),n.Lb(),n.Lb(),n.Mb(25,"div",11),n.Mb(26,"div",12),n.Mb(27,"button",13),n.hc(28," Guardar "),n.Lb(),n.Lb(),n.Lb(),n.Lb(),n.Mb(29,"span"),n.hc(30,"Valid"),n.Lb(),n.Mb(31,"pre"),n.hc(32),n.Lb(),n.Kb(33,"br"),n.Mb(34,"span"),n.hc(35,"Value"),n.Lb(),n.Mb(36,"pre"),n.hc(37),n.Wb(38,"json"),n.Lb(),n.Kb(39,"br"),n.Mb(40,"span"),n.hc(41,"Agregar juego"),n.Lb(),n.Mb(42,"pre"),n.hc(43),n.Lb(),n.Kb(44,"br"),n.Mb(45,"pre"),n.hc(46),n.Lb()),2&o&&(n.zb(5),n.Yb("formGroup",r.miFormulario),n.zb(6),n.Yb("ngIf",r.campoEsValido("nombre")),n.zb(6),n.Yb("formControl",r.nuevoFavorito),n.zb(7),n.Yb("ngForOf",r.favoritosArr.controls),n.zb(8),n.ic(r.miFormulario.valid),n.zb(5),n.ic(n.Xb(38,8,r.miFormulario.value)),n.zb(6),n.ic(r.nuevoFavorito.valid),n.zb(3),n.ic(r.nuevoFavorito.value))},directives:[t.u,t.m,t.h,t.c,t.l,t.g,i.j,t.f,t.d,i.i],pipes:[i.e],encapsulation:2}),o})()},{path:"switches",component:(()=>{class o{constructor(o){this.fb=o,this.miFormulario=this.fb.group({genero:["M",t.t.required],notificaciones:[!0,t.t.required],condiciones:[!1,t.t.requiredTrue]}),this.persona={genero:"F",notificaciones:!0}}ngOnInit(){this.miFormulario.reset(Object.assign(Object.assign({},this.persona),{condociones:!1})),this.miFormulario.valueChanges.subscribe(o=>{var r=function(o,r){var e={};for(var i in o)Object.prototype.hasOwnProperty.call(o,i)&&r.indexOf(i)<0&&(e[i]=o[i]);if(null!=o&&"function"==typeof Object.getOwnPropertySymbols){var b=0;for(i=Object.getOwnPropertySymbols(o);b<i.length;b++)r.indexOf(i[b])<0&&Object.prototype.propertyIsEnumerable.call(o,i[b])&&(e[i[b]]=o[i[b]])}return e}(o,["condiciones"]);this.persona=r})}guardar(){const o=Object.assign({},this.miFormulario.value);delete o.condiciones,this.persona=o}}return o.\u0275fac=function(r){return new(r||o)(n.Jb(t.e))},o.\u0275cmp=n.Db({type:o,selectors:[["app-switches"]],decls:55,vars:8,consts:[["autocomplete","off",3,"formGroup","ngSubmit"],[1,"row","mb-3"],[1,"col-sm-3","col-form-label"],[1,"col--sm-9"],[1,"form-check"],["type","radio","value","M","formControlName","genero","id","radioMasculino",1,"form-check-input"],["for","radioMasculino",1,"form-check-label"],["type","radio","value","F","formControlName","genero","id","radioFemenino",1,"form-check-input"],["for","radioFemenino",1,"form-check-label"],[1,"col-sm-9"],[1,"form-check","form-switch","mt-2"],["type","checkbox","formControlName","notificaciones","id","flexSwitchCheckChecked",1,"form-check-input"],["for","flexSwitchCheckChecked",1,"form-check-label"],["type","checkbox","formControlName","condiciones","id","flexCheckDefault",1,"form-check-input"],["for","flexCheckDefault",1,"form-check-label"],[1,"row"],[1,"col"],["type","submit",1,"btn","btn-primary","float-end"]],template:function(o,r){1&o&&(n.Mb(0,"h2"),n.hc(1,"Reactivos: "),n.Mb(2,"small"),n.hc(3,"Swtiches"),n.Lb(),n.Lb(),n.Kb(4,"hr"),n.Mb(5,"form",0),n.Tb("ngSubmit",function(){return r.guardar()}),n.Mb(6,"div",1),n.Mb(7,"label",2),n.hc(8,"Genero"),n.Lb(),n.Mb(9,"div",3),n.Mb(10,"div",4),n.Kb(11,"input",5),n.Mb(12,"label",6),n.hc(13," Masculino "),n.Lb(),n.Lb(),n.Mb(14,"div",4),n.Kb(15,"input",7),n.Mb(16,"label",8),n.hc(17," Femenino "),n.Lb(),n.Lb(),n.Lb(),n.Lb(),n.Mb(18,"div",1),n.Mb(19,"label",2),n.hc(20,"Notificaciones"),n.Lb(),n.Mb(21,"div",9),n.Mb(22,"div",10),n.Kb(23,"input",11),n.Mb(24,"label",12),n.hc(25,"Quiero recibir Notificaciones"),n.Lb(),n.Lb(),n.Lb(),n.Lb(),n.Mb(26,"div",1),n.Kb(27,"label",2),n.Mb(28,"div",3),n.Mb(29,"div",4),n.Kb(30,"input",13),n.Mb(31,"label",14),n.hc(32," Terminos y condiciones de uso "),n.Lb(),n.Lb(),n.Lb(),n.Lb(),n.Mb(33,"div",15),n.Mb(34,"div",16),n.Mb(35,"button",17),n.hc(36,"Guardar"),n.Lb(),n.Lb(),n.Lb(),n.Lb(),n.Mb(37,"h5"),n.hc(38,"Valor del formulario"),n.Lb(),n.Mb(39,"pre"),n.hc(40),n.Wb(41,"json"),n.Lb(),n.Kb(42,"br"),n.Mb(43,"h5"),n.hc(44,"Persona"),n.Lb(),n.Mb(45,"pre"),n.hc(46),n.Wb(47,"json"),n.Lb(),n.Kb(48,"br"),n.Mb(49,"h5"),n.hc(50,"Valid"),n.Lb(),n.Mb(51,"pre"),n.hc(52),n.Lb(),n.Mb(53,"h5"),n.hc(54,"Terminos"),n.Lb()),2&o&&(n.zb(5),n.Yb("formGroup",r.miFormulario),n.zb(35),n.ic(n.Xb(41,4,r.miFormulario.value)),n.zb(6),n.ic(n.Xb(47,6,r.persona)),n.zb(6),n.ic(r.miFormulario.valid))},directives:[t.u,t.m,t.h,t.q,t.c,t.l,t.g,t.a],pipes:[i.e],encapsulation:2}),o})()},{path:"**",redirectTo:"basicos"}]}];let p=(()=>{class o{}return o.\u0275fac=function(r){return new(r||o)},o.\u0275mod=n.Hb({type:o}),o.\u0275inj=n.Gb({imports:[[b.c.forChild(u)]]}),o})(),h=(()=>{class o{}return o.\u0275fac=function(r){return new(r||o)},o.\u0275mod=n.Hb({type:o}),o.\u0275inj=n.Gb({imports:[[i.b,p,t.r]]}),o})()}}]);