(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{Yj9t:function(e,t,r){"use strict";r.r(t),r.d(t,"AuthModule",function(){return A});var i=r("ofXK"),o=r("tyNb"),s=r("fXoL");let n=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=s.Db({type:e,selectors:[["app-login"]],decls:2,vars:0,template:function(e,t){1&e&&(s.Mb(0,"p"),s.hc(1,"login works!"),s.Lb())},encapsulation:2}),e})();var a=r("3Pt+");let c=(()=>{class e{constructor(){this.nombreApellidoPattern="([a-zA-Z]+) ([a-zA-Z]+)",this.emailPattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$",this.noPuedeSerStrider=e=>{var t;return"strider"==(null===(t=e.value)||void 0===t?void 0:t.trim())?{noStrider:!0}:null}}camposIguales(e,t){return r=>{var i,o,s,n;return(null===(i=r.get(e))||void 0===i?void 0:i.value)!==(null===(o=r.get(t))||void 0===o?void 0:o.value)?(null===(s=r.get(t))||void 0===s||s.setErrors({noIguales:!0}),{noIguales:!0}):(null===(n=r.get(t))||void 0===n||n.setErrors(null),null)}}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=s.Fb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var l=r("quSY");class u extends l.a{constructor(e,t){super()}schedule(e,t=0){return this}}class d extends u{constructor(e,t){super(e,t),this.scheduler=e,this.work=t,this.pending=!1}schedule(e,t=0){if(this.closed)return this;this.state=e;const r=this.id,i=this.scheduler;return null!=r&&(this.id=this.recycleAsyncId(i,r,t)),this.pending=!0,this.delay=t,this.id=this.id||this.requestAsyncId(i,this.id,t),this}requestAsyncId(e,t,r=0){return setInterval(e.flush.bind(e,this),r)}recycleAsyncId(e,t,r=0){if(null!==r&&this.delay===r&&!1===this.pending)return t;clearInterval(t)}execute(e,t){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;const r=this._execute(e,t);if(r)return r;!1===this.pending&&null!=this.id&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))}_execute(e,t){let r,i=!1;try{this.work(e)}catch(o){i=!0,r=!!o&&o||new Error(o)}if(i)return this.unsubscribe(),r}_unsubscribe(){const e=this.id,t=this.scheduler,r=t.actions,i=r.indexOf(this);this.work=null,this.state=null,this.pending=!1,this.scheduler=null,-1!==i&&r.splice(i,1),null!=e&&(this.id=this.recycleAsyncId(t,e,null)),this.delay=null}}let h=(()=>{class e{constructor(t,r=e.now){this.SchedulerAction=t,this.now=r}schedule(e,t=0,r){return new this.SchedulerAction(this,e).schedule(r,t)}}return e.now=()=>Date.now(),e})();class b extends h{constructor(e,t=h.now){super(e,()=>b.delegate&&b.delegate!==this?b.delegate.now():t()),this.actions=[],this.active=!1,this.scheduled=void 0}schedule(e,t=0,r){return b.delegate&&b.delegate!==this?b.delegate.schedule(e,t,r):super.schedule(e,t,r)}flush(e){const{actions:t}=this;if(this.active)return void t.push(e);let r;this.active=!0;do{if(r=e.execute(e.state,e.delay))break}while(e=t.shift());if(this.active=!1,r){for(;e=t.shift();)e.unsubscribe();throw r}}}const m=new b(d);var p=r("7o/Q"),v=r("EY2u"),f=r("LRne"),g=r("HDdC");let w=(()=>{class e{constructor(e,t,r){this.kind=e,this.value=t,this.error=r,this.hasValue="N"===e}observe(e){switch(this.kind){case"N":return e.next&&e.next(this.value);case"E":return e.error&&e.error(this.error);case"C":return e.complete&&e.complete()}}do(e,t,r){switch(this.kind){case"N":return e&&e(this.value);case"E":return t&&t(this.error);case"C":return r&&r()}}accept(e,t,r){return e&&"function"==typeof e.next?this.observe(e):this.do(e,t,r)}toObservable(){switch(this.kind){case"N":return Object(f.a)(this.value);case"E":return e=this.error,new g.a(t=>t.error(e));case"C":return Object(v.b)()}var e;throw new Error("unexpected notification kind value")}static createNext(t){return void 0!==t?new e("N",t):e.undefinedValueNotification}static createError(t){return new e("E",void 0,t)}static createComplete(){return e.completeNotification}}return e.completeNotification=new e("C"),e.undefinedValueNotification=new e("N",void 0),e})();class L{constructor(e,t){this.delay=e,this.scheduler=t}call(e,t){return t.subscribe(new M(e,this.delay,this.scheduler))}}class M extends p.a{constructor(e,t,r){super(e),this.delay=t,this.scheduler=r,this.queue=[],this.active=!1,this.errored=!1}static dispatch(e){const t=e.source,r=t.queue,i=e.scheduler,o=e.destination;for(;r.length>0&&r[0].time-i.now()<=0;)r.shift().notification.observe(o);if(r.length>0){const t=Math.max(0,r[0].time-i.now());this.schedule(e,t)}else this.unsubscribe(),t.active=!1}_schedule(e){this.active=!0,this.destination.add(e.schedule(M.dispatch,this.delay,{source:this,destination:this.destination,scheduler:e}))}scheduleNotification(e){if(!0===this.errored)return;const t=this.scheduler,r=new y(t.now()+this.delay,e);this.queue.push(r),!1===this.active&&this._schedule(t)}_next(e){this.scheduleNotification(w.createNext(e))}_error(e){this.errored=!0,this.queue=[],this.destination.error(e),this.unsubscribe()}_complete(){this.scheduleNotification(w.createComplete()),this.unsubscribe()}}class y{constructor(e,t){this.time=e,this.notification=t}}var N=r("lJxs"),F=r("tk/3");let x=(()=>{class e{constructor(e){this.http=e}validate(e){const t=e.value;return console.log(t),this.http.get(`http://localhost:3000/usuarios/?q=${t}`).pipe(function(e,t=m){var r;const i=(r=e)instanceof Date&&!isNaN(+r)?+e-t.now():Math.abs(e);return e=>e.lift(new L(i,t))}(3e3),Object(N.a)(e=>0===e.length?null:{emailTomado:!0}))}}return e.\u0275fac=function(t){return new(t||e)(s.Qb(F.a))},e.\u0275prov=s.Fb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();function z(e,t){1&e&&(s.Mb(0,"span",13),s.hc(1," Debe de ser en formato de nombre y apellido "),s.Lb())}function I(e,t){if(1&e&&(s.Mb(0,"span",13),s.hc(1),s.Lb()),2&e){const e=s.Vb();s.zb(1),s.jc(" ",e.emailErrorMsg," ")}}function E(e,t){1&e&&(s.Mb(0,"span",13),s.hc(1," El username no puede ser strider "),s.Lb())}function j(e,t){1&e&&(s.Mb(0,"span",13),s.hc(1," La contrase\xf1a debe de ser mayor de 6 caracteres. "),s.Lb())}function C(e,t){1&e&&(s.Mb(0,"span",13),s.hc(1," Las contrase\xf1as deben de ser iguales. "),s.Lb())}const k=[{path:"",children:[{path:"registro",component:(()=>{class e{constructor(e,t,r){this.fb=e,this.validatorService=t,this.emailValidator=r,this.miFormulario=this.fb.group({nombre:["",[a.t.required,a.t.pattern(this.validatorService.nombreApellidoPattern)]],email:["",[a.t.required,a.t.pattern(this.validatorService.emailPattern)],[this.emailValidator]],username:["",[a.t.required,this.validatorService.noPuedeSerStrider]],password:["",[a.t.required,a.t.minLength(6)]],password2:["",[a.t.required]]},{validators:[this.validatorService.camposIguales("password","password2")]})}get emailErrorMsg(){var e;const t=null===(e=this.miFormulario.get("email"))||void 0===e?void 0:e.errors;return(null==t?void 0:t.required)?"Email es obligatorio":(null==t?void 0:t.pattern)?"El valor ingresado no tiene formato de correo":t.emailTomado?"El email ya existe":void 0}ngOnInit(){this.miFormulario.reset({nombre:"Fernando Herrera",email:"test1@test.com",username:"fernando_her85",password:"123456",password2:"123456"})}campoNovalido(e){var t,r;return(null===(t=this.miFormulario.get(e))||void 0===t?void 0:t.invalid)&&(null===(r=this.miFormulario.get(e))||void 0===r?void 0:r.touched)}submitFormulario(){console.log(this.miFormulario.value),this.miFormulario.markAllAsTouched()}}return e.\u0275fac=function(t){return new(t||e)(s.Jb(a.e),s.Jb(c),s.Jb(x))},e.\u0275cmp=s.Db({type:e,selectors:[["app-registro"]],decls:76,vars:28,consts:[[1,"row"],[1,"col"],["autocomplete","off",3,"formGroup","ngSubmit"],[1,"row","mb-3"],[1,"col-sm-3","col-form-label"],[1,"col-sm-9"],["type","text","formControlName","nombre","placeholder","Nombre del usuario",1,"form-control"],["class","form-text text-danger",4,"ngIf"],["type","email","formControlName","email","placeholder","Email del usuario",1,"form-control"],["type","text","formControlName","username","placeholder","Nombre codigo del usuario",1,"form-control"],["type","password","formControlName","password","placeholder","Password del usuario",1,"form-control"],["type","password","formControlName","password2","placeholder","Confirmar contrase\xf1a",1,"form-control"],["type","submit",1,"btn","btn-primary","float-end",3,"disabled"],[1,"form-text","text-danger"]],template:function(e,t){1&e&&(s.Mb(0,"h2"),s.hc(1,"Validaciones Reactivas"),s.Lb(),s.Kb(2,"hr"),s.Mb(3,"div",0),s.Mb(4,"div",1),s.Mb(5,"form",2),s.Tb("ngSubmit",function(){return t.submitFormulario()}),s.Mb(6,"div",3),s.Mb(7,"label",4),s.hc(8,"Nombre"),s.Lb(),s.Mb(9,"div",5),s.Kb(10,"input",6),s.gc(11,z,2,0,"span",7),s.Lb(),s.Lb(),s.Mb(12,"div",3),s.Mb(13,"label",4),s.hc(14,"Email"),s.Lb(),s.Mb(15,"div",5),s.Kb(16,"input",8),s.gc(17,I,2,1,"span",7),s.Lb(),s.Lb(),s.Mb(18,"div",3),s.Mb(19,"label",4),s.hc(20,"Username"),s.Lb(),s.Mb(21,"div",5),s.Kb(22,"input",9),s.gc(23,E,2,0,"span",7),s.Lb(),s.Lb(),s.Mb(24,"div",3),s.Mb(25,"label",4),s.hc(26,"Password"),s.Lb(),s.Mb(27,"div",5),s.Kb(28,"input",10),s.gc(29,j,2,0,"span",7),s.Lb(),s.Lb(),s.Mb(30,"div",3),s.Mb(31,"label",4),s.hc(32,"Confirmar"),s.Lb(),s.Mb(33,"div",5),s.Kb(34,"input",11),s.gc(35,C,2,0,"span",7),s.Lb(),s.Lb(),s.Mb(36,"div",0),s.Mb(37,"div",1),s.Mb(38,"button",12),s.hc(39," Crear "),s.Lb(),s.Lb(),s.Lb(),s.Lb(),s.Lb(),s.Lb(),s.Mb(40,"h2"),s.hc(41),s.Lb(),s.Mb(42,"h2"),s.hc(43),s.Lb(),s.Mb(44,"h2"),s.hc(45),s.Lb(),s.Mb(46,"h2"),s.hc(47,"Form errors:"),s.Lb(),s.Mb(48,"pre"),s.hc(49),s.Wb(50,"json"),s.Lb(),s.Mb(51,"h5"),s.hc(52,"Nombre"),s.Lb(),s.Mb(53,"pre"),s.hc(54),s.Wb(55,"json"),s.Lb(),s.Mb(56,"h5"),s.hc(57,"Email"),s.Lb(),s.Mb(58,"pre"),s.hc(59),s.Wb(60,"json"),s.Lb(),s.Mb(61,"h5"),s.hc(62,"Username"),s.Lb(),s.Mb(63,"pre"),s.hc(64),s.Wb(65,"json"),s.Lb(),s.Mb(66,"h5"),s.hc(67,"Password"),s.Lb(),s.Mb(68,"pre"),s.hc(69),s.Wb(70,"json"),s.Lb(),s.Mb(71,"h5"),s.hc(72,"Confirmar"),s.Lb(),s.Mb(73,"pre"),s.hc(74),s.Wb(75,"json"),s.Lb()),2&e&&(s.zb(5),s.Yb("formGroup",t.miFormulario),s.zb(6),s.Yb("ngIf",t.campoNovalido("nombre")),s.zb(6),s.Yb("ngIf",t.campoNovalido("email")),s.zb(6),s.Yb("ngIf",t.campoNovalido("username")),s.zb(6),s.Yb("ngIf",t.campoNovalido("password")),s.zb(6),s.Yb("ngIf",t.campoNovalido("password2")),s.zb(3),s.Yb("disabled",t.miFormulario.pending),s.zb(3),s.jc("Form Valid: ",t.miFormulario.valid,""),s.zb(2),s.jc("Form Status: ",t.miFormulario.status,""),s.zb(2),s.jc("Form Pending: ",t.miFormulario.pending,""),s.zb(4),s.ic(s.Xb(50,16,t.miFormulario.errors)),s.zb(5),s.ic(s.Xb(55,18,t.miFormulario.controls.nombre.errors)),s.zb(5),s.ic(s.Xb(60,20,t.miFormulario.controls.email.errors)),s.zb(5),s.ic(s.Xb(65,22,t.miFormulario.controls.username.errors)),s.zb(5),s.ic(s.Xb(70,24,t.miFormulario.controls.password.errors)),s.zb(5),s.ic(s.Xb(75,26,t.miFormulario.controls.password2.errors)))},directives:[a.u,a.m,a.h,a.c,a.l,a.g,i.j],pipes:[i.e],encapsulation:2}),e})()},{path:"login",component:n},{path:"**",redirectTo:"registro"}]}];let S=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=s.Hb({type:e}),e.\u0275inj=s.Gb({imports:[[o.c.forChild(k)],o.c]}),e})(),A=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=s.Hb({type:e}),e.\u0275inj=s.Gb({imports:[[i.b,a.r,S]]}),e})()}}]);