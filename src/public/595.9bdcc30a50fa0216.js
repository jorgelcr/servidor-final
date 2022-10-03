"use strict";(self.webpackChunkevidencia=self.webpackChunkevidencia||[]).push([[595],{595:(de,f,n)=>{n.r(f),n.d(f,{UsuarioResponsableModule:()=>le});var u=n(9808),a=n(3075),e=n(5e3),Z=n(7579),A=n(2340),C=n(520);let g=(()=>{class i{constructor(o){this.http=o,this.urlBackend=A.N.urlBackend,this._refresh$=new Z.x}get refresh$(){return this._refresh$}obtenerEvidenciasResponsable(o){return this.http.get(`${this.urlBackend}/ver-responsable/${o}`)}obtenerEvidenciaIdResponsable(o){return this.http.get(`${this.urlBackend}/guardarEvidenciasResponsable/id/${o}`)}obtenerUnidad(){return this.http.get(`${this.urlBackend}/guardarEvidenciasResponsable/unidad`)}obtenertiposRegistros(){return this.http.get(`${this.urlBackend}/guardarEvidenciasResponsable/tiporegistro`)}obtenerAmbitoAcademico(){return this.http.get(`${this.urlBackend}/guardarEvidenciasResponsable/ambitoacademico`)}obtenerCriterio(){return this.http.get(`${this.urlBackend}/guardarEvidenciasResponsable/criterio`)}obtenerProcesos(){return this.http.get(`${this.urlBackend}/guardarEvidenciasResponsable/proceso`)}obtenerAmbitoGeografico(){return this.http.get(`${this.urlBackend}/guardarEvidenciasResponsable/ambitogeografico`)}obtenerDebilidad(){return this.http.get(`${this.urlBackend}/guardarEvidenciasResponsable/debilidad`)}actualizarAprobarEvidenciaResponsable(o,t){return this.http.put(`${this.urlBackend}/guardarEvidenciasResponsable/aprobar/${o}`,t)}actualizarRechazarEvidenciaResponsable(o,t){return this.http.put(`${this.urlBackend}/guardarEvidenciasResponsable/rechazar/${o}`,t)}}return i.\u0275fac=function(o){return new(o||i)(e.LFG(C.eN))},i.\u0275prov=e.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})();var h=n(5736),p=n(4100),E=n(924),T=n(1102);const U=["termino"];function k(i,s){1&i&&(e.TgZ(0,"td",29),e._UZ(1,"input",30),e.qZA())}function x(i,s){1&i&&(e.TgZ(0,"td",29),e._UZ(1,"i",31),e.qZA())}function q(i,s){1&i&&(e.TgZ(0,"td",29),e._UZ(1,"i",32),e.qZA())}const R=function(i,s){return["../administrar-evidencia",i,s]};function S(i,s){if(1&i&&(e.TgZ(0,"tr")(1,"th",26),e._uU(2),e.qZA(),e.TgZ(3,"td"),e._uU(4),e.qZA(),e.TgZ(5,"td"),e._uU(6),e.qZA(),e.TgZ(7,"td"),e._uU(8),e.qZA(),e.TgZ(9,"td"),e._uU(10),e.qZA(),e.YNc(11,k,2,0,"td",27),e.YNc(12,x,2,0,"td",27),e.YNc(13,q,2,0,"td",27),e.TgZ(14,"td"),e._UZ(15,"i",28),e.qZA()()),2&i){const o=s.$implicit;e.xp6(2),e.Oqu(o.numero_folio),e.xp6(2),e.Oqu(o.nombre_procesos),e.xp6(2),e.Oqu(o.nombre_registros),e.xp6(2),e.Oqu(o.nombre_debilidades),e.xp6(2),e.Oqu(o.nombre_criterios),e.xp6(1),e.Q6J("ngIf",0==o.estado_evidencia_responsable&&0==o.revisado_reponsable),e.xp6(1),e.Q6J("ngIf",1==o.estado_evidencia_responsable&&1==o.revisado_reponsable),e.xp6(1),e.Q6J("ngIf",2==o.estado_evidencia_responsable&&1==o.revisado_reponsable),e.xp6(2),e.Q6J("routerLink",e.WLB(9,R,o.numero_folio,o.id_evidencias))}}let N=(()=>{class i{constructor(o,t,r){var d;this.fb=o,this.responsableService=t,this.usuarioService=r,this.listaEvidenciasResponsable=[],this.filterPost="",this.sel="",this.FormularioResponsable=this.fb.group({estado_select:["",[a.kI.required]]}),this.usuario=r.usuario,null===(d=this.FormularioResponsable.get("estado_select"))||void 0===d||d.valueChanges.subscribe(l=>{this.sel=l})}ngOnInit(){this.obtenerEvidencia()}obtenerEvidencia(){this.responsableService.obtenerEvidenciasResponsable(this.usuario.rut).subscribe(o=>{console.log(this.usuario.rut,": INFO MIS EVIDENCIAS RESPONSABLE: ",o),this.listaEvidenciasResponsable=o,this.listaEvidenciasResponsable.reverse()})}filtrar(o){5!==o.length&&9!==o.length||(o=o.concat("-".toString()));let t=this.txtTermino.nativeElement.value=o;this.filterPost=t}}return i.\u0275fac=function(o){return new(o||i)(e.Y36(a.qu),e.Y36(g),e.Y36(h.r))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-ver-evidencias"]],viewQuery:function(o,t){if(1&o&&e.Gf(U,5),2&o){let r;e.iGM(r=e.CRH())&&(t.txtTermino=r.first)}},decls:48,vars:8,consts:[[1,"container"],[1,"row","mt-2"],[1,"col-12"],[1,"card"],[1,"card-body"],[1,"mb-5","fs-1"],[1,"row","col-11","mb-4"],[1,"col-md-6","mb-2"],["oninput","this.value = this.value.toUpperCase()","type","text","placeholder","Buscar por codigo",1,"fs-5","col-md-9","border-0","border-bottom",3,"keyup"],["termino",""],[1,"col-auto","mt-2"],[1,"fs-6"],[1,"col-auto","mb-1"],[3,"formGroup"],["formControlName","estado_select","name","numero_folio","mat-button","","id","cars","name","cars",1,"estado"],["value",""],["value","0"],["value","1"],["value","2"],[1,"my-custom-scrollbar"],[1,"table","table-bordered","table-hover"],[1,"s","bg-info"],[1,"text-center"],["scope","col"],[1,"text-center","align-middle"],[4,"ngFor","ngForOf"],["scope","row"],["class","col-12 col-md-2",4,"ngIf"],[1,"cursor-pointer","text-primary","fs-3","fa","fa-solid","fa-eye",3,"routerLink"],[1,"col-12","col-md-2"],["placeholder","En espera","readonly","",1,"w-input","text-center","me-2","col-7","rounded","border-0","bg-warning"],[1,"text-success","me-2","fs-3","fa-solid","fa-check"],[1,"text-danger","fs-4","fa-regular","fa-x"]],template:function(o,t){if(1&o){const r=e.EpF();e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"h1",5),e._uU(6,"Evidencias"),e.qZA(),e.TgZ(7,"div",6)(8,"div",7)(9,"input",8,9),e.NdJ("keyup",function(){e.CHM(r);const l=e.MAs(10);return t.filtrar(l.value)}),e.qZA()(),e.TgZ(11,"div",10)(12,"span",11)(13,"strong"),e._uU(14,"Filtro Por Estados: "),e.qZA()()(),e.TgZ(15,"div",12)(16,"form",13)(17,"select",14)(18,"option",15),e._uU(19,"Todos"),e.qZA(),e.TgZ(20,"option",16),e._uU(21,"En Espera"),e.qZA(),e.TgZ(22,"option",17),e._uU(23,"Aprobada"),e.qZA(),e.TgZ(24,"option",18),e._uU(25,"Rechazada"),e.qZA()()()()(),e.TgZ(26,"div",19)(27,"table",20)(28,"thead",21)(29,"tr",22)(30,"th",23),e._uU(31,"Codigo"),e.qZA(),e.TgZ(32,"th",23),e._uU(33,"Proceso"),e.qZA(),e.TgZ(34,"th",23),e._uU(35,"Tipo De Registro"),e.qZA(),e.TgZ(36,"th",23),e._uU(37,"Debilidad"),e.qZA(),e.TgZ(38,"th",23),e._uU(39,"Criterio"),e.qZA(),e.TgZ(40,"th",23),e._uU(41,"Estado"),e.qZA(),e.TgZ(42,"th",23),e._uU(43,"Acci\xf3n"),e.qZA()()(),e.TgZ(44,"tbody",24),e.YNc(45,S,16,12,"tr",25),e.ALo(46,"filterState"),e.ALo(47,"select"),e.qZA()()()()()()()()}2&o&&(e.xp6(16),e.Q6J("formGroup",t.FormularioResponsable),e.xp6(29),e.Q6J("ngForOf",e.xi3(46,2,e.xi3(47,5,t.listaEvidenciasResponsable,t.sel),t.filterPost)))},directives:[a._Y,a.JL,a.sg,a.EJ,a.JJ,a.u,a.YN,a.Kr,u.sg,u.O5,p.rH],pipes:[E.H,T.z],styles:[".my-custom-scrollbar[_ngcontent-%COMP%]{position:relative;height:350px;overflow:auto}.s[_ngcontent-%COMP%]{position:sticky;top:0}.estado[_ngcontent-%COMP%]{width:150px;height:30px}[_ngcontent-%COMP%]::-webkit-input-placeholder{color:#000}.cursor-pointer[_ngcontent-%COMP%]{cursor:pointer}@media screen and (max-width: 800px){.w-input[_ngcontent-%COMP%]{width:100px}}"]}),i})();var D=n(8462);let F=(()=>{class i{constructor(){}ngOnInit(){}}return i.\u0275fac=function(o){return new(o||i)},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-menu"]],decls:1,vars:0,template:function(o,t){1&o&&e._UZ(0,"app-menu-usuarionormal")},directives:[D.b],styles:[""]}),i})(),y=(()=>{class i{constructor(){}ngOnInit(){}}return i.\u0275fac=function(o){return new(o||i)},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-home"]],decls:10,vars:0,consts:[[1,"container-fluid"],[1,"row"],[1,"col-lg-6","col-md-6","col-sm-6","text-center"],[1,"fs-1","text-dark"],[1,"fs-3","text-dark"],["src","./assets/img/Escudo_UCM.png","alt","ucm",1,"h-75","w-75"],[1,"col-lg-6","col-md-6","col-sm-6","mt-5"],["src","./assets/img/ucm-logo1.jpeg","alt","ucm",1,"img-fluid","mt-5"]],template:function(o,t){1&o&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"h1",3),e._uU(4,"BIENVENIDO"),e.qZA(),e.TgZ(5,"h2",4),e._uU(6,"Sistema Evidencias"),e.qZA(),e._UZ(7,"img",5),e.qZA(),e.TgZ(8,"div",6),e._UZ(9,"img",7),e.qZA()()())},styles:[""]}),i})();var I=n(5226),m=n.n(I);function J(i,s){if(1&i&&(e.TgZ(0,"option",53),e.ALo(1,"number"),e._uU(2),e.qZA()),2&i){const o=s.$implicit;e.Q6J("value",e.lcZ(1,2,o.id_unidad)),e.xp6(2),e.hij(" ",o.nombre_unidad,"")}}function B(i,s){if(1&i&&(e.TgZ(0,"option",53),e.ALo(1,"number"),e._uU(2),e.qZA()),2&i){const o=s.$implicit;e.Q6J("value",e.lcZ(1,2,o.id_registros)),e.xp6(2),e.hij(" ",o.nombre_registros,"")}}function O(i,s){if(1&i&&(e.TgZ(0,"option",53),e.ALo(1,"number"),e._uU(2),e.qZA()),2&i){const o=s.$implicit;e.Q6J("value",e.lcZ(1,2,o.id_ambito_academico)),e.xp6(2),e.hij(" ",o.nombre_ambito_academico,"")}}function w(i,s){if(1&i&&(e.TgZ(0,"option",53),e.ALo(1,"number"),e._uU(2),e.qZA()),2&i){const o=s.$implicit;e.Q6J("value",e.lcZ(1,2,o.id_criterios)),e.xp6(2),e.hij(" ",o.nombre_criterios,"")}}function Y(i,s){if(1&i&&(e.TgZ(0,"div",17)(1,"span",18),e._uU(2),e.ALo(3,"date"),e.qZA()()),2&i){const o=e.oxw();e.xp6(2),e.Oqu(e.xi3(3,1,o.fechaActual,"shortDate"))}}function G(i,s){if(1&i&&(e.TgZ(0,"option",53),e.ALo(1,"number"),e._uU(2),e.qZA()),2&i){const o=s.$implicit;e.Q6J("value",e.lcZ(1,2,o.id_procesos)),e.xp6(2),e.hij(" ",o.nombre_procesos,"")}}function L(i,s){if(1&i&&(e.TgZ(0,"option",53),e.ALo(1,"number"),e._uU(2),e.qZA()),2&i){const o=s.$implicit;e.Q6J("value",e.lcZ(1,2,o.id_ambito_geografico)),e.xp6(2),e.hij(" ",o.nombre_ambito_geografico,"")}}function M(i,s){if(1&i&&(e.TgZ(0,"option",53),e.ALo(1,"number"),e._uU(2),e.qZA()),2&i){const o=s.$implicit;e.Q6J("value",e.lcZ(1,2,o.id_debilidades)),e.xp6(2),e.hij(" ",o.nombre_debilidades,"")}}function Q(i,s){1&i&&(e.TgZ(0,"span",54),e._uU(1," Nombre debe tener 3 letras"),e.qZA())}function j(i,s){if(1&i){const o=e.EpF();e.TgZ(0,"button",55),e.NdJ("click",function(){return e.CHM(o),e.oxw().guardar()}),e._uU(1,"Aprobar Por Responsable"),e.qZA()}}function P(i,s){if(1&i){const o=e.EpF();e.TgZ(0,"button",56),e.NdJ("click",function(){return e.CHM(o),e.oxw().rechazara()}),e._uU(1,"Rechazar Por Responsable"),e.qZA()}}const $=function(){return["../todas-evidencias"]};function V(i,s){if(1&i){const o=e.EpF();e.TgZ(0,"button",57),e.NdJ("click",function(){return e.CHM(o),e.oxw().Volver()}),e._uU(1,"Volver"),e.qZA()}2&i&&e.Q6J("routerLink",e.DdM(1,$))}let _=(()=>{class i{constructor(o,t,r,d,l){this.fb=o,this.responsableService=t,this.usuarioService=r,this.router=d,this.activatedRouter=l,this.listaUnidad=[],this.listatiposRegistros=[],this.listaAmbitoAcademico=[],this.listaCriterio=[],this.listaProcesos=[],this.listaAmbitoGeografico=[],this.listaDebilidad=[],this.disabledInput=!1,this.titulo="Ver evidencias",this.estadoEvidencia=!1,this.estadoEvidenciaActualizar=!1,this.obtenerNombreFolio="",this.id_rol=0,this.FormularioResponsable=this.fb.group({numero_folio:[{value:"",disabled:!0},[a.kI.required,a.kI.minLength(3)]],fecha_evidencia:[{value:"",disabled:!0},[a.kI.required,a.kI.minLength(3)]],numero_mejoras:[{value:"",disabled:!0},[a.kI.required,a.kI.minLength(3)]],descripcion:[{value:"",disabled:!0},[a.kI.required,a.kI.minLength(3)]],resultado:[{value:"",disabled:!0},[a.kI.required,a.kI.minLength(3)]],almacenamiento:[{value:"",disabled:!0},[a.kI.required,a.kI.minLength(3)]],unidades_personas_evidencias:[{value:"",disabled:!0},[a.kI.required,a.kI.minLength(3)]],palabra_clave:[{value:"",disabled:!0},[a.kI.required,a.kI.minLength(3)]],nombre_corto_evidencia:[{value:"",disabled:!0},[a.kI.required,a.kI.minLength(3)]],fk_id_usuario:[{value:"",disabled:!0}],fk_id_debilidades:[{value:"",disabled:!0},a.kI.required],fk_id_unidad:[{value:"",disabled:!0},a.kI.required],fk_id_criterios:[{value:"",disabled:!0},a.kI.required],fk_id_registros:[{value:"",disabled:!0},a.kI.required],fk_id_procesos:[{value:"",disabled:!0},a.kI.required],fk_id_estado:[{value:"",disabled:!0},a.kI.required],fk_id_ambito_academico:[{value:"",disabled:!0},a.kI.required],fk_id_ambito_geografico:[{value:"",disabled:!0},a.kI.required],rut:[{value:"",disabled:!0},a.kI.required],correo_usuario:[{value:"",disabled:!0},a.kI.required],observaciones_responsable:[{value:"",disabled:!1},[a.kI.required,a.kI.minLength(3)]],fk_id_usuario_responsable:[{value:"",disabled:!0},a.kI.required],correo_conectado:[{value:"",disabled:!0},a.kI.required]}),this.id=this.activatedRouter.snapshot.paramMap.get("id"),this.usuario=r.usuario,console.log("EL USUARIO ES: ",this.usuario),this.rut_responsable=this.usuario.rut}ngOnInit(){this.FormularioResponsable.reset({fk_id_usuario_responsable:this.usuario.rut,correo_conectado:this.usuario.correo_usuario}),this.mostrarEvidenciasIdResponsable(),this.obtenerUnidad(),this.obtenerTiposRegistros(),this.obtenerAmbitoAcademico(),this.obtenerCriterio(),this.obtenerProcesos(),this.obtenerAmbitoGeografico(),this.obtenerDebilidad()}Volver(){this.router.navigate(["usuario-responsable/ver-evidencias"])}formResponsabledisable(){}campoNoEsValido(o){return this.FormularioResponsable.controls[o].errors&&this.FormularioResponsable.controls[o].touched}uperCase(){var o;this.arregloObject={fk_id_usuario_responsable:this.FormularioResponsable.get("fk_id_usuario_responsable").value.toUpperCase(),correo_conectado:this.FormularioResponsable.get("correo_conectado").value,observaciones_responsable:null===(o=this.FormularioResponsable.get("observaciones_responsable").value)||void 0===o?void 0:o.toUpperCase()}}guardar(){this.id&&(this.uperCase(),this.FormularioResponsable.controls.fk_id_usuario_responsable.enable(),console.log(this.FormularioResponsable.value),this.responsableService.actualizarAprobarEvidenciaResponsable(this.id,this.arregloObject).subscribe({next:o=>{console.log(o),m().fire(`La Evidencia ${this.id} Fue Aprobada`,"Evidencia Aprobada Con EXITO ","success"),this.router.navigate(["usuario-responsable/ver-evidencias"]),this.FormularioResponsable.reset({fk_id_usuario_responsable:this.usuario.rut})},error:o=>{m().fire("Error","Error al APROBAR LA EVIDENCIA","error"),console.log(o)}}))}rechazara(){if(this.FormularioResponsable.invalid)return this.FormularioResponsable.markAllAsTouched(),this.FormularioResponsable.controls.fk_id_usuario_responsable.enable(),m().fire("Error","Llene el campo observaciones Responsable","error"),void console.log("asdfghjkl\xf1");this.id&&(this.uperCase(),this.FormularioResponsable.controls.fk_id_usuario_responsable.enable(),this.responsableService.actualizarRechazarEvidenciaResponsable(this.id,this.arregloObject).subscribe({next:o=>{m().fire("Evidencia RECHAZADA","Evidencia RECHAZADA con EXITO ","info"),console.log("'Evidencia RECHAZADA', Evidencia RECHAZADA con EXITO , 'info'"),this.router.navigate(["usuario-responsable/ver-evidencias"]),this.FormularioResponsable.reset({fk_id_usuario_responsable:this.usuario.id_usuarios})},error:o=>{m().fire("Error","Error al RECHAZAR LA EVIDENCIA","error"),console.log(o)}}))}obtenerUnidad(){this.responsableService.obtenerUnidad().subscribe(o=>{console.log("DATSOS DE LA UNIDAD: ",o.resultado),this.listaUnidad=o.resultado,this.listaUnidad.reverse()})}obtenerTiposRegistros(){this.responsableService.obtenertiposRegistros().subscribe(o=>{this.listatiposRegistros=o,this.listatiposRegistros.reverse()})}obtenerAmbitoAcademico(){this.responsableService.obtenerAmbitoAcademico().subscribe(o=>{console.log(o),this.listaAmbitoAcademico=o,this.listaAmbitoAcademico.reverse()})}obtenerCriterio(){this.responsableService.obtenerCriterio().subscribe(o=>{this.listaCriterio=o,this.listaCriterio.reverse()})}obtenerProcesos(){this.responsableService.obtenerProcesos().subscribe(o=>{this.listaProcesos=o,this.listaProcesos.reverse()})}obtenerAmbitoGeografico(){this.responsableService.obtenerAmbitoGeografico().subscribe(o=>{this.listaAmbitoGeografico=o,this.listaAmbitoGeografico.reverse()})}obtenerDebilidad(){this.responsableService.obtenerDebilidad().subscribe(o=>{this.listaDebilidad=o,this.listaDebilidad.reverse()})}mostrarEvidenciasIdResponsable(){null!==this.id&&(this.estadoEvidencia=!0,this.titulo="Editar Evidencia",this.responsableService.obtenerEvidenciaIdResponsable(this.id).subscribe({next:o=>{console.log(this.revisado_reponsable," : LOS DATOS SONNNNNNNNNNNNNNNNNNNNNNN: ",o[0].revisado_reponsable),this.obtenerNombreFolio=o[0].numero_folio,this.fechaActual=o[0].fecha_evidencia,this.id_rol=o[0].id_rol,this.revisado_reponsable=o[0].revisado_reponsable,1==this.revisado_reponsable&&this.FormularioResponsable.controls.observaciones_responsable.disable(),this.FormularioResponsable.patchValue({numero_folio:o[0].numero_folio,fecha_evidencia:o[0].fecha_evidencia,numero_mejoras:o[0].numero_mejoras,descripcion:o[0].descripcion,resultado:o[0].resultado,almacenamiento:o[0].almacenamiento,unidades_personas_evidencias:o[0].unidades_personas_evidencias,palabra_clave:o[0].palabra_clave,nombre_corto_evidencia:o[0].nombre_corto_evidencia,fk_id_debilidades:o[0].fk_id_debilidades,fk_id_unidad:o[0].fk_id_unidad,fk_id_criterios:o[0].fk_id_criterios,fk_id_registros:o[0].fk_id_registros,fk_id_procesos:o[0].fk_id_procesos,fk_id_estado:o[0].fk_id_estado,fk_id_ambito_academico:o[0].fk_id_ambito_academico,fk_id_ambito_geografico:o[0].fk_id_ambito_geografico,rut:o[0].rut,correo_usuario:o[0].correo_usuario})},error:o=>{console.log("EL ERROSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSsR ES: ",o)}}))}}return i.\u0275fac=function(o){return new(o||i)(e.Y36(a.qu),e.Y36(g),e.Y36(h.r),e.Y36(p.F0),e.Y36(p.gz))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-crear-evidencia"]],decls:159,vars:15,consts:[["charset","utf-8"],[1,"bg-light","col-10","mx-auto","mt-3","mb-5"],[1,"card"],[1,"card-body"],[1,"container"],[1,"mb-5","row"],["src","./assets/img/ucm-logo1.jpeg","alt","...",1,"col-4","mb-3"],[1,"text-center","fs-2"],[1,"text-center","fs-5"],[1,"text-center"],[3,"formGroup"],[1,"mb-3","row"],[1,"col-sm-6"],[1,"row","g-3"],[1,""],[1,"form-group","row"],["for","inputEmail3",1,"fw-bold","col-sm-3","col-form-label"],[1,"col-sm-8"],[1,"fs-5"],[1,"mb-3"],["formControlName","rut","type","text",1,"col-12","border"],["formControlName","fk_id_unidad","aria-label",".form-select-sm example",1,"form-select","form-select-sm"],[3,"value",4,"ngFor","ngForOf"],["formControlName","fk_id_registros","aria-label",".form-select-sm example",1,"form-select","form-select-sm",3,"value"],["formControlName","fk_id_ambito_academico","aria-label",".form-select-sm example",1,"form-select","form-select-sm"],["formControlName","fk_id_criterios","aria-label",".form-select-sm example",1,"form-select","form-select-sm"],["for","inputEmail3",1,"fw-bold","col-sm-4","col-form-label"],["class","col-sm-8",4,"ngIf"],["formControlName","correo_usuario","type","text",1,"col-12","border"],["formControlName","fk_id_procesos","aria-label",".form-select-sm example",1,"form-select","form-select-sm"],["formControlName","numero_mejoras","type","text",1,"col-12"],["formControlName","fk_id_ambito_geografico","aria-label",".form-select-sm example",1,"form-select","form-select-sm"],["formControlName","fk_id_debilidades","aria-label",".form-select-sm example",1,"form-select","form-select-sm"],["for","inputUnidad",1,"fw-bold","col-sm-3","col-form-label"],[1,"col-sm-9"],["formControlName","descripcion","id","exampleFormControlTextarea1","rows","3",1,"form-control"],["formControlName","resultado","id","exampleFormControlTextarea1","rows","3",1,"form-control"],["formControlName","almacenamiento","type","text","id","firstName","placeholder","","value","","required","",1,"form-control"],["formControlName","unidades_personas_evidencias","id","exampleFormControlTextarea1","rows","3",1,"form-control"],["formControlName","palabra_clave","type","text","id","firstName","placeholder","","value","","required","",1,"form-control"],["formControlName","nombre_corto_evidencia","type","text","id","firstName","placeholder","","value","","required","",1,"form-control"],[1,"row"],[1,"mb-3","col-6"],["for","inputEmail3",1,"fw-bold","col-sm-6","col-form-label"],["formControlName","fk_id_usuario_responsable","type","text",1,"col-12","border"],["formControlName","correo_conectado","type","text",1,"col-12","border"],["formControlName","observaciones_responsable","id","exampleFormControlTextarea1","rows","3",1,"form-control"],["class","form-text text-danger",4,"ngIf"],[1,"mb-3","row","mt-4"],[1,"mb-5","mt-5","row"],["class","btn btn-primary text-center col-md-3","type","submit",3,"click",4,"ngIf"],["class","btn btn-danger float-end col-md-3 offset-md-6",3,"click",4,"ngIf"],["class","btn btn-danger col-md-4 offset-md-4","type","text",3,"routerLink","click",4,"ngIf"],[3,"value"],[1,"form-text","text-danger"],["type","submit",1,"btn","btn-primary","text-center","col-md-3",3,"click"],[1,"btn","btn-danger","float-end","col-md-3","offset-md-6",3,"click"],["type","text",1,"btn","btn-danger","col-md-4","offset-md-4",3,"routerLink","click"]],template:function(o,t){1&o&&(e.TgZ(0,"head"),e._UZ(1,"meta",0),e.TgZ(2,"title"),e._uU(3,"Hola mundo con Javascript - victor robles"),e.qZA()(),e.TgZ(4,"body",1)(5,"div",2)(6,"div",3)(7,"div",4)(8,"div",5),e._UZ(9,"img",6),e.TgZ(10,"h3",7),e._uU(11,"Universidad Catolica del Maule"),e.qZA(),e.TgZ(12,"h6",8),e._uU(13,"Departamento de Aseguramiento de la Calidad"),e.qZA()()(),e.TgZ(14,"div",4)(15,"h2",9),e._uU(16,"Documento del Sistema de Gestion de Calidad"),e.qZA(),e.TgZ(17,"h3",9),e._uU(18,"Registros del Sistema de Gestion de Calidad"),e.qZA(),e.TgZ(19,"h4",9),e._uU(20,"Identificacion de Registros"),e.qZA()(),e.TgZ(21,"form",10)(22,"div",4)(23,"div",11)(24,"div",12)(25,"div",13)(26,"div",14)(27,"div",15)(28,"label",16),e._uU(29,"N\xb0 folio"),e.qZA(),e.TgZ(30,"div",17)(31,"span",18),e._uU(32),e.qZA()()()(),e.TgZ(33,"div",19)(34,"div",15)(35,"label",16),e._uU(36,"Usuario"),e.qZA(),e.TgZ(37,"div",17),e._UZ(38,"input",20),e.qZA()()(),e.TgZ(39,"div",19)(40,"div",15)(41,"label",16),e._uU(42,"Unidad"),e.qZA(),e.TgZ(43,"div",17)(44,"select",21),e.YNc(45,J,3,4,"option",22),e.qZA()()()(),e.TgZ(46,"div",19)(47,"div",15)(48,"label",16),e._uU(49,"Tipo Registro"),e.qZA(),e.TgZ(50,"div",17)(51,"select",23),e.YNc(52,B,3,4,"option",22),e.qZA()()()(),e.TgZ(53,"div",19)(54,"div",15)(55,"label",16),e._uU(56,"Ambito"),e.qZA(),e.TgZ(57,"div",17)(58,"select",24),e.YNc(59,O,3,4,"option",22),e.qZA()()()(),e.TgZ(60,"div",19)(61,"div",15)(62,"label",16),e._uU(63,"Criterio"),e.qZA(),e.TgZ(64,"div",17)(65,"select",25),e.YNc(66,w,3,4,"option",22),e.qZA()()()()()(),e.TgZ(67,"div",12)(68,"div",13)(69,"label",26),e._uU(70,"fecha Actual"),e.qZA(),e.YNc(71,Y,4,4,"div",27),e.TgZ(72,"div",19)(73,"div",15)(74,"label",26),e._uU(75,"Email"),e.qZA(),e.TgZ(76,"div",17),e._UZ(77,"input",28),e.qZA()()(),e.TgZ(78,"div",19)(79,"div",15)(80,"label",26),e._uU(81,"Proceso"),e.qZA(),e.TgZ(82,"div",17)(83,"select",29),e.YNc(84,G,3,4,"option",22),e.qZA()()()(),e.TgZ(85,"div",19)(86,"div",15)(87,"label",26),e._uU(88,"N\xb0 Plan de Mejoras"),e.qZA(),e.TgZ(89,"div",17),e._UZ(90,"input",30),e.qZA()()(),e.TgZ(91,"div",19)(92,"div",15)(93,"label",26),e._uU(94,"Ambito Geografico"),e.qZA(),e.TgZ(95,"div",17)(96,"select",31),e.YNc(97,L,3,4,"option",22),e.qZA()()()(),e.TgZ(98,"div",19)(99,"div",15)(100,"label",26),e._uU(101,"Debilidad"),e.qZA(),e.TgZ(102,"div",17)(103,"select",32),e.YNc(104,M,3,4,"option",22),e.qZA()()()()()()(),e.TgZ(105,"div",11)(106,"label",33),e._uU(107,"Descripcion"),e.qZA(),e.TgZ(108,"div",34),e._UZ(109,"textarea",35),e.qZA()(),e.TgZ(110,"div",11)(111,"label",33),e._uU(112,"Resultado"),e.qZA(),e.TgZ(113,"div",34),e._UZ(114,"textarea",36),e.qZA()(),e.TgZ(115,"div",11)(116,"label",33),e._uU(117,"Almacenamiento"),e.qZA(),e.TgZ(118,"div",34),e._UZ(119,"input",37),e.qZA()(),e.TgZ(120,"div",11)(121,"label",33),e._uU(122,"Unidades y/o Personas Relacionadas a la evidencia"),e.qZA(),e.TgZ(123,"div",34),e._UZ(124,"textarea",38),e.qZA()(),e.TgZ(125,"div",11)(126,"label",33),e._uU(127,"Palabra clave"),e.qZA(),e.TgZ(128,"div",34),e._UZ(129,"input",39),e.qZA()(),e.TgZ(130,"div",11)(131,"label",33),e._uU(132,"Nombre corto evidencia"),e.qZA(),e.TgZ(133,"div",34),e._UZ(134,"input",40),e.qZA()(),e.TgZ(135,"div",41)(136,"div",42)(137,"div",15)(138,"label",43),e._uU(139," Responsable"),e.qZA(),e.TgZ(140,"div",12),e._UZ(141,"input",44),e.qZA()()(),e.TgZ(142,"div",42)(143,"div",15)(144,"label",16),e._uU(145,"Email"),e.qZA(),e.TgZ(146,"div",17),e._UZ(147,"input",45),e.qZA()()()(),e.TgZ(148,"div",11)(149,"label",33),e._uU(150,"Observaciones Responsable"),e.qZA(),e.TgZ(151,"div",34),e._UZ(152,"textarea",46),e.YNc(153,Q,2,0,"span",47),e.qZA()(),e.TgZ(154,"div",48)(155,"div",49),e.YNc(156,j,2,0,"button",50),e.YNc(157,P,2,0,"button",51),e.YNc(158,V,2,2,"button",52),e.qZA()()()()()()()),2&o&&(e.xp6(21),e.Q6J("formGroup",t.FormularioResponsable),e.xp6(11),e.Oqu(t.obtenerNombreFolio),e.xp6(13),e.Q6J("ngForOf",t.listaUnidad),e.xp6(6),e.Q6J("value",t.formResponsabledisable()),e.xp6(1),e.Q6J("ngForOf",t.listatiposRegistros),e.xp6(7),e.Q6J("ngForOf",t.listaAmbitoAcademico),e.xp6(7),e.Q6J("ngForOf",t.listaCriterio),e.xp6(5),e.Q6J("ngIf",1==t.estadoEvidencia),e.xp6(13),e.Q6J("ngForOf",t.listaProcesos),e.xp6(13),e.Q6J("ngForOf",t.listaAmbitoGeografico),e.xp6(7),e.Q6J("ngForOf",t.listaDebilidad),e.xp6(49),e.Q6J("ngIf",t.campoNoEsValido("observaciones_responsable")),e.xp6(3),e.Q6J("ngIf",!1===t.revisado_reponsable),e.xp6(1),e.Q6J("ngIf",!1===t.revisado_reponsable),e.xp6(1),e.Q6J("ngIf",!0===t.revisado_reponsable))},directives:[a._Y,a.JL,a.sg,a.Fj,a.JJ,a.u,a.EJ,u.sg,a.YN,a.Kr,u.O5,a.Q7,p.rH],pipes:[u.JJ,u.uU],styles:[""]}),i})();var z=n(8851),H=n(5042),X=n(508),v=n(7322),b=n(6856),K=n(9257);let W=(()=>{class i{constructor(o,t,r,d){this.usuarioService=o,this.fb=t,this.graficosGlobales=r,this.dateAdapter=d,this.barChartData={labels:[],datasets:[{data:[],label:""},{data:[],label:""}]},this.pieChartData={labels:[],datasets:[{data:[],backgroundColor:[]}]},this.pieChartData2={labels:[],datasets:[{data:[],backgroundColor:[]}]},this.pieChartData3={labels:[],datasets:[{data:[],backgroundColor:[]}]},this.pieChartData4={labels:[],datasets:[{data:[],backgroundColor:[]}]},this.pieChartData5={labels:[],datasets:[{data:[],backgroundColor:[]}]},this.pipe=new u.uU("en-US"),this.start1="",this.end1="",this.dateStart="",this.dateEnd="",this.FormularioResponsable=this.fb.group({start:[,[a.kI.required]],end:[,[a.kI.required]]}),this.usuario=o.usuario,this.id_unidad=this.usuario.fk_id_unidad}ngOnInit(){}formatDate(){this.start1=this.FormularioResponsable.value.start,this.end1=this.FormularioResponsable.value.end,this.dateStart=this.pipe.transform(this.start1,"dd-MM-yyyy"),this.dateEnd=this.pipe.transform(this.end1,"dd-MM-yyyy")}pieChartDataUser(){this.formatDate(),this.graficosGlobales.obtenerCantidadEvidenciasGraficosResponsableAPR(this.usuario.rut,this.dateStart,this.dateEnd,this.id_unidad).subscribe(o=>{o=o.resultado[0],console.log(Object.values(o.aprobadas),"wwewewe: ",o),this.barChartData={labels:["EVIDENCIAS"],datasets:[{data:Object.values(o.aprobadas),label:"APROBADAS",backgroundColor:["#00E69A"],hoverBackgroundColor:"#3007E0"},{data:Object.values(o.rechazadas),label:"RECHAZADAS",backgroundColor:["#0800F5"],hoverBackgroundColor:"#3007E0"},{data:Object.values(o.pendientes),label:"PENDIENTES",backgroundColor:["#1EE6D5"],hoverBackgroundColor:"#3007E0"}]}}),console.log(this.dateStart,"sswws",this.dateEnd),this.graficosGlobales.obtenerCantidadEvidenciasGraficosUnidades(this.usuario.rut,this.dateStart,this.dateEnd).subscribe(o=>{let r,d,t=0,l=[],c=[];for(;t<o.resultado.length;t++)r=o.resultado[t],d=r.cantevidenciasunidad,r=r.nombre_unidad,l.push(r),c.push(d),console.log(c,"sswws",l),this.pieChartData={labels:l,datasets:[{data:c,backgroundColor:["#08FAE9","#13ABF5","#076CE0"],hoverBackgroundColor:["#0B9BDE","#0B48E0","#0D20FA"]}]}}),this.graficosGlobales.obtenerCantidadEvidenciasGraficosTiposRegistros(this.usuario.rut,this.dateStart,this.dateEnd).subscribe(o=>{let r,d,t=0,l=[],c=[];for(;t<o.resultado.length;t++)r=o.resultado[t],d=r.cantevidenciasregistros,r=r.nombre_registros,l.push(r),c.push(d),console.log(c,"sswws",l),this.pieChartData2={labels:l,datasets:[{data:c,backgroundColor:["#08FAE9","#13ABF5","#076CE0"],hoverBackgroundColor:["#0B9BDE","#0B48E0","#0D20FA"]}]}}),this.graficosGlobales.obtenerCantidadEvidenciasGraficosDebilidades(this.usuario.rut,this.dateStart,this.dateEnd).subscribe(o=>{let r,d,t=0,l=[],c=[];for(;t<o.resultado.length;t++)r=o.resultado[t],d=r.cantevidenciasdebilidades,r=r.nombre_debilidades,l.push(r),c.push(d),console.log(c,"sswws",l),this.pieChartData3={labels:l,datasets:[{data:c,backgroundColor:["#08FAE9","#13ABF5","#076CE0"],hoverBackgroundColor:["#0B9BDE","#0B48E0","#0D20FA"]}]}}),this.graficosGlobales.obtenerCantidadEvidenciasGraficosCriterios(this.usuario.rut,this.dateStart,this.dateEnd).subscribe(o=>{let r,d,t=0,l=[],c=[];for(;t<o.resultado.length;t++)r=o.resultado[t],d=r.cantevidenciascriterios,r=r.nombre_criterios,l.push(r),c.push(d),console.log(c,"sswws",l),this.pieChartData4={labels:l,datasets:[{data:c,backgroundColor:["#08FAE9","#13ABF5","#076CE0"],hoverBackgroundColor:["#0B9BDE","#0B48E0","#0D20FA"]}]}}),this.graficosGlobales.obtenerCantidadEvidenciasGraficosAmbitoAcademico(this.usuario.rut,this.dateStart,this.dateEnd).subscribe(o=>{let r,d,t=0,l=[],c=[];for(;t<o.resultado.length;t++)r=o.resultado[t],d=r.cantevidenciasambitoacademico,r=r.nombre_ambito_academico,l.push(r),c.push(d),console.log(c,"sswws",l),this.pieChartData5={labels:l,datasets:[{data:c,backgroundColor:["#08FAE9","#13ABF5","#076CE0"],hoverBackgroundColor:["#0B9BDE","#0B48E0","#0D20FA"]}]}})}}return i.\u0275fac=function(o){return new(o||i)(e.Y36(h.r),e.Y36(a.qu),e.Y36(H.T),e.Y36(X._A))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-graficos"]],decls:51,vars:14,consts:[["lang","es"],["charset","utf-8"],["name","viewport","content","width=device-width, initial-scale=1"],[1,"bg-light","col-10","mx-auto"],[1,"card"],[1,"card-body"],[1,"container"],["autocomplete","off",3,"formGroup","ngSubmit"],[1,"row"],["src","./assets/img/ucm-logo1.jpeg","alt","UCM",1,"col-4","mb-3"],[1,"text-center","fs-2"],[1,"text-center","fs-5","mb-5"],[1,"container","px-1","px-sm-5","mx-auto","mb-5"],[1,"flex-row","d-flex","justify-content-center"],[1,"col-lg-6","col-11","px-1"],[1,"input-group","input-daterange"],[1,"col-sm-4"],["appearance","fill"],[3,"rangePicker"],["matStartDate","","formControlName","start","placeholder","Fecha de inicio"],["matEndDate","","formControlName","end","placeholder","Fecha final"],["matSuffix","",3,"for"],["picker",""],[1,"container","mb-5"],[1,"bg-light","col-12","mx-auto","mb-3"],[1,"d-grid","gap-2"],["type","submit","data-bs-toggle","collapse","data-bs-target","#collapseExample","aria-expanded","false","aria-controls","collapseExample",1,"btn","btn-outline-secondary",3,"disabled"],["id","collapseExample",1,"collapse"],[1,"card","card-body"],[2,"display","block"],[3,"barChartData","pieChartData","pieChartData2","pieChartData3","pieChartData4","pieChartData5"]],template:function(o,t){if(1&o&&(e.TgZ(0,"html",0)(1,"head"),e._UZ(2,"meta",1),e.TgZ(3,"title"),e._uU(4,"Hola mundo con Javascript - victor robles"),e.qZA(),e._UZ(5,"meta",2),e.qZA(),e.TgZ(6,"body",3)(7,"div",4)(8,"div",5)(9,"div",6)(10,"form",7),e.NdJ("ngSubmit",function(){return t.pieChartDataUser()}),e.TgZ(11,"div",8),e._UZ(12,"img",9),e.TgZ(13,"h3",10),e._uU(14,"Universidad Catolica del Maule"),e.qZA(),e.TgZ(15,"h6",11),e._uU(16,"Estadisticas y Graficos"),e.qZA()(),e.TgZ(17,"div",12)(18,"section",6)(19,"div",13)(20,"div",14)(21,"div",15)(22,"div",16)(23,"mat-form-field",17)(24,"mat-label"),e._uU(25,"Seleccione el rango de fecha"),e.qZA(),e.TgZ(26,"mat-date-range-input",18),e._UZ(27,"input",19)(28,"input",20),e.qZA(),e.TgZ(29,"mat-hint"),e._uU(30,"MM/DD/YYYY \u2013 MM/DD/YYYY"),e.qZA(),e._UZ(31,"mat-datepicker-toggle",21)(32,"mat-date-range-picker",null,22),e.qZA(),e.TgZ(34,"p"),e._uU(35),e.ALo(36,"json"),e.qZA(),e.TgZ(37,"p"),e._uU(38,"valid"),e.qZA(),e.TgZ(39,"p"),e._uU(40),e.qZA()()()()()()(),e.TgZ(41,"div",23)(42,"body",24)(43,"div",25)(44,"button",26),e._uU(45," Evidencias Encontradas en el rango de fechas "),e.qZA()(),e.TgZ(46,"div",27)(47,"div",28)(48,"div",8)(49,"div",29),e._UZ(50,"app-graficos-gloval",30),e.qZA()()()()()()()()()()()()),2&o){const r=e.MAs(33);e.xp6(10),e.Q6J("formGroup",t.FormularioResponsable),e.xp6(16),e.Q6J("rangePicker",r),e.xp6(5),e.Q6J("for",r),e.xp6(4),e.hij("Selected range: ",e.lcZ(36,12,t.FormularioResponsable.value),""),e.xp6(5),e.hij("Selected range: ",t.FormularioResponsable.valid,""),e.xp6(4),e.Q6J("disabled",t.FormularioResponsable.invalid),e.xp6(6),e.Q6J("barChartData",t.barChartData)("pieChartData",t.pieChartData)("pieChartData2",t.pieChartData2)("pieChartData3",t.pieChartData3)("pieChartData4",t.pieChartData4)("pieChartData5",t.pieChartData5)}},directives:[a._Y,a.JL,a.sg,v.KE,v.hX,b.wx,b.zY,a.Fj,a.JJ,a.u,b.By,v.bx,b.nW,v.R9,b._g,K.l],pipes:[u.Ts],styles:[""]}),i})();var ee=n(442);const oe=[{path:"",component:F,children:[{path:"home",component:y},{path:"ver-evidencias",component:N},{path:"administrar-evidencia",component:_},{path:"administrar-evidencia/:id/:id2",component:_},{path:"estadisticas",component:z.l},{path:"graficos",component:W},{path:"mi-perfil",component:ee.f},{path:"**",redirectTo:"home"}]}];let ie=(()=>{class i{}return i.\u0275fac=function(o){return new(o||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[[p.Bz.forChild(oe)],p.Bz]}),i})();var te=n(443),ae=n(1210),re=n(3423),se=n(7958),ne=n(4679);let le=(()=>{class i{}return i.\u0275fac=function(o){return new(o||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[[u.ez,ie,te.R,ae.h,a.UX,re.d,se.c,ne.w]]}),i})()}}]);