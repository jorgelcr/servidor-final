"use strict";(self.webpackChunkevidencia=self.webpackChunkevidencia||[]).push([[543],{1543:(ne,f,n)=>{n.r(f),n.d(f,{UsuarioDacModule:()=>se});var u=n(9808),m=n(4100),e=n(5e3),Z=n(8462);let A=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-menu"]],decls:1,vars:0,template:function(i,o){1&i&&e._UZ(0,"app-menu-usuarionormal")},directives:[Z.b],styles:[""]}),t})(),C=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-home"]],decls:10,vars:0,consts:[[1,"container-fluid"],[1,"row"],[1,"col-lg-6","col-md-6","col-sm-6","text-center"],[1,"fs-1","text-dark"],[1,"fs-3","text-dark"],["src","./assets/img/Escudo_UCM.png","alt","ucm",1,"h-75","w-75"],[1,"col-lg-6","col-md-6","col-sm-6","mt-5"],["src","./assets/img/ucm-logo1.jpeg","alt","ucm",1,"img-fluid","mt-5"]],template:function(i,o){1&i&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"h1",3),e._uU(4,"BIENVENIDO"),e.qZA(),e.TgZ(5,"h2",4),e._uU(6,"Sistema Evidencias"),e.qZA(),e._UZ(7,"img",5),e.qZA(),e.TgZ(8,"div",6),e._UZ(9,"img",7),e.qZA()()())},styles:[""]}),t})();var a=n(3075),E=n(2340),T=n(520);let g=(()=>{class t{constructor(i){this.http=i,this.urlBackend=E.N.urlBackend}obtenerEvidenciasDac(i,o){return this.http.get(`${this.urlBackend}/ver-dac/${i}/${o}`)}obtenerEvidenciaIdDac(i){return this.http.get(`${this.urlBackend}/aprobarRechazarEvidenciaDac/id/${i}`)}obtenerUnidad(){return this.http.get(`${this.urlBackend}/aprobarRechazarEvidenciaDac/unidad`)}obtenertiposRegistros(){return this.http.get(`${this.urlBackend}/aprobarRechazarEvidenciaDac/tiporegistro`)}obtenerAmbitoAcademico(){return this.http.get(`${this.urlBackend}/aprobarRechazarEvidenciaDac/ambitoacademico`)}obtenerCriterio(){return this.http.get(`${this.urlBackend}/aprobarRechazarEvidenciaDac/criterio`)}obtenerProcesos(){return this.http.get(`${this.urlBackend}/aprobarRechazarEvidenciaDac/proceso`)}obtenerAmbitoGeografico(){return this.http.get(`${this.urlBackend}/aprobarRechazarEvidenciaDac/ambitogeografico`)}obtenerDebilidad(){return this.http.get(`${this.urlBackend}/aprobarRechazarEvidenciaDac/debilidad`)}actualizarAprobarEvidenciaDac(i,o){return this.http.put(`${this.urlBackend}/aprobarRechazarEvidenciaDac/aprobar/${i}`,o)}actualizarRechazarEvidenciaDac(i,o){return this.http.put(`${this.urlBackend}/aprobarRechazarEvidenciaDac/rechazar/${i}`,o)}}return t.\u0275fac=function(i){return new(i||t)(e.LFG(T.eN))},t.\u0275prov=e.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var h=n(5736),D=n(924),U=n(1102);const k=["termino"];function q(t,s){1&t&&(e.TgZ(0,"td",29),e._UZ(1,"input",30),e.qZA())}function x(t,s){1&t&&(e.TgZ(0,"td",29),e._UZ(1,"i",31),e.qZA())}function N(t,s){1&t&&(e.TgZ(0,"td",29),e._UZ(1,"i",32),e.qZA())}const S=function(t,s){return["../administrar-Evidencias",t,s]};function y(t,s){if(1&t&&(e.TgZ(0,"tr")(1,"th",26),e._uU(2),e.qZA(),e.TgZ(3,"td"),e._uU(4),e.qZA(),e.TgZ(5,"td"),e._uU(6),e.qZA(),e.TgZ(7,"td"),e._uU(8),e.qZA(),e.TgZ(9,"td"),e._uU(10),e.qZA(),e.TgZ(11,"td"),e._uU(12),e.qZA(),e.TgZ(13,"td"),e._uU(14),e.qZA(),e.TgZ(15,"td"),e._uU(16),e.qZA(),e.YNc(17,q,2,0,"td",27),e.YNc(18,x,2,0,"td",27),e.YNc(19,N,2,0,"td",27),e.TgZ(20,"td"),e._UZ(21,"i",28),e.qZA()()),2&t){const i=s.$implicit;e.xp6(2),e.Oqu(i.numero_folio),e.xp6(2),e.Oqu(i.nombres_usuario),e.xp6(2),e.Oqu(i.rut),e.xp6(2),e.Oqu(i.nombre_unidad),e.xp6(2),e.Oqu(i.nombre_criterios),e.xp6(2),e.Oqu(i.nombre_procesos),e.xp6(2),e.Oqu(i.nombre_registros),e.xp6(2),e.Oqu(i.nombre_debilidades),e.xp6(1),e.Q6J("ngIf",0==i.estado_evidencia_dac&&0==i.revisado_dac),e.xp6(1),e.Q6J("ngIf",1==i.estado_evidencia_dac&&1==i.revisado_dac),e.xp6(1),e.Q6J("ngIf",2==i.estado_evidencia_dac&&1==i.revisado_dac),e.xp6(2),e.Q6J("routerLink",e.WLB(12,S,i.numero_folio,i.id_evidencias))}}let F=(()=>{class t{constructor(i,o,r){var l;this.fb=i,this.dacService=o,this.usuarioService=r,this.listaEvidenciasDac=[],this.filterPost="",this.sel="",this.FormularioDac=this.fb.group({estado_select:["",[a.kI.required]]}),null===(l=this.FormularioDac.get("estado_select"))||void 0===l||l.valueChanges.subscribe(d=>{this.sel=d}),this.usuario=r.usuario}ngOnInit(){this.obtenerEvidencia()}obtenerEvidencia(){this.dacService.obtenerEvidenciasDac(this.usuario.fk_id_unidad,this.usuario.rut).subscribe(i=>{console.log(this.usuario.rut,": INFO MIS EVIDENCIAS DAC: ",i),this.listaEvidenciasDac=i,this.listaEvidenciasDac.reverse()})}filtrar(i){5!==i.length&&9!==i.length||(i=i.concat("-".toString()));let o=this.txtTermino.nativeElement.value=i;this.filterPost=o}}return t.\u0275fac=function(i){return new(i||t)(e.Y36(a.qu),e.Y36(g),e.Y36(h.r))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-ver-evidencias"]],viewQuery:function(i,o){if(1&i&&e.Gf(k,5),2&i){let r;e.iGM(r=e.CRH())&&(o.txtTermino=r.first)}},decls:54,vars:8,consts:[[1,"container"],[1,"row","mt-4"],[1,"col-12"],[1,"card"],[1,"card-body"],[1,"mb-5","fs-1"],[1,"row","col-11","mb-4"],[1,"col-md-6","mb-2"],["oninput","this.value = this.value.toUpperCase()","type","text","placeholder","Buscar por codigo",1,"fs-5","col-md-9","border-0","border-bottom",3,"keyup"],["termino",""],[1,"col-auto","mt-2"],[1,"fs-6"],[1,"col-auto","mb-1"],[3,"formGroup"],["formControlName","estado_select","name","numero_folio","mat-button","","id","cars","name","cars",1,"estado"],["value",""],["value","0"],["value","1"],["value","2"],[1,"my-custom-scrollbar"],[1,"table","table-bordered","table-hover"],[1,"s","bg-info"],[1,"text-center"],["scope","col"],[1,"text-center","align-middle"],[4,"ngFor","ngForOf"],["scope","row"],["class","col-12 col-md-2",4,"ngIf"],[1,"cursor-pointer","text-primary","fs-3","fa","fa-solid","fa-eye",3,"routerLink"],[1,"col-12","col-md-2"],["placeholder","En espera","readonly","",1,"w-input","text-center","me-2","col-7","rounded","border-0","bg-warning"],[1,"text-success","me-2","fs-3","fa-solid","fa-check"],[1,"text-danger","fs-4","fa-regular","fa-x"]],template:function(i,o){if(1&i){const r=e.EpF();e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"h1",5),e._uU(6,"Evidencias"),e.qZA(),e.TgZ(7,"div",6)(8,"div",7)(9,"input",8,9),e.NdJ("keyup",function(){e.CHM(r);const d=e.MAs(10);return o.filtrar(d.value)}),e.qZA()(),e.TgZ(11,"div",10)(12,"span",11)(13,"strong"),e._uU(14,"Filtro Por Estados: "),e.qZA()()(),e.TgZ(15,"div",12)(16,"form",13)(17,"select",14)(18,"option",15),e._uU(19,"Todos"),e.qZA(),e.TgZ(20,"option",16),e._uU(21,"En Espera"),e.qZA(),e.TgZ(22,"option",17),e._uU(23,"Aprobada"),e.qZA(),e.TgZ(24,"option",18),e._uU(25,"Rechazada"),e.qZA()()()()(),e.TgZ(26,"div",19)(27,"table",20)(28,"thead",21)(29,"tr",22)(30,"th",23),e._uU(31,"Codigo"),e.qZA(),e.TgZ(32,"th",23),e._uU(33,"Nombre"),e.qZA(),e.TgZ(34,"th",23),e._uU(35,"Usuario"),e.qZA(),e.TgZ(36,"th",23),e._uU(37,"Unidad"),e.qZA(),e.TgZ(38,"th",23),e._uU(39,"Criterio"),e.qZA(),e.TgZ(40,"th",23),e._uU(41,"Proceso"),e.qZA(),e.TgZ(42,"th",23),e._uU(43,"Registro"),e.qZA(),e.TgZ(44,"th",23),e._uU(45,"Debilidad"),e.qZA(),e.TgZ(46,"th",23),e._uU(47,"Estado"),e.qZA(),e.TgZ(48,"th",23),e._uU(49,"Acci\xf3n"),e.qZA()()(),e.TgZ(50,"tbody",24),e.YNc(51,y,22,15,"tr",25),e.ALo(52,"filterState"),e.ALo(53,"select"),e.qZA()()()()()()()()}2&i&&(e.xp6(16),e.Q6J("formGroup",o.FormularioDac),e.xp6(35),e.Q6J("ngForOf",e.xi3(52,2,e.xi3(53,5,o.listaEvidenciasDac,o.sel),o.filterPost)))},directives:[a._Y,a.JL,a.sg,a.EJ,a.JJ,a.u,a.YN,a.Kr,u.sg,u.O5,m.rH],pipes:[D.H,U.z],styles:[".my-custom-scrollbar[_ngcontent-%COMP%]{position:relative;height:350px;overflow:auto}.s[_ngcontent-%COMP%]{position:sticky;top:0}.estado[_ngcontent-%COMP%]{width:150px;height:30px}[_ngcontent-%COMP%]::-webkit-input-placeholder{color:#000}.cursor-pointer[_ngcontent-%COMP%]{cursor:pointer}@media screen and (max-width: 800px){.w-input[_ngcontent-%COMP%]{width:100px}}"]}),t})();var I=n(5226),p=n.n(I);function R(t,s){if(1&t&&(e.TgZ(0,"option",55),e.ALo(1,"number"),e._uU(2),e.qZA()),2&t){const i=s.$implicit;e.Q6J("value",e.lcZ(1,2,i.id_unidad)),e.xp6(2),e.hij(" ",i.nombre_unidad,"")}}function O(t,s){if(1&t&&(e.TgZ(0,"option",55),e.ALo(1,"number"),e._uU(2),e.qZA()),2&t){const i=s.$implicit;e.Q6J("value",e.lcZ(1,2,i.id_registros)),e.xp6(2),e.hij(" ",i.nombre_registros,"")}}function J(t,s){if(1&t&&(e.TgZ(0,"option",55),e.ALo(1,"number"),e._uU(2),e.qZA()),2&t){const i=s.$implicit;e.Q6J("value",e.lcZ(1,2,i.id_ambito_academico)),e.xp6(2),e.hij(" ",i.nombre_ambito_academico,"")}}function B(t,s){if(1&t&&(e.TgZ(0,"option",55),e.ALo(1,"number"),e._uU(2),e.qZA()),2&t){const i=s.$implicit;e.Q6J("value",e.lcZ(1,2,i.id_criterios)),e.xp6(2),e.hij(" ",i.nombre_criterios,"")}}function w(t,s){if(1&t&&(e.TgZ(0,"div",18)(1,"span",19),e._uU(2),e.ALo(3,"date"),e.qZA()()),2&t){const i=e.oxw();e.xp6(2),e.Oqu(e.xi3(3,1,i.fechaActual,"shortDate"))}}function M(t,s){if(1&t&&(e.TgZ(0,"option",55),e.ALo(1,"number"),e._uU(2),e.qZA()),2&t){const i=s.$implicit;e.Q6J("value",e.lcZ(1,2,i.id_procesos)),e.xp6(2),e.hij(" ",i.nombre_procesos,"")}}function Y(t,s){if(1&t&&(e.TgZ(0,"option",55),e.ALo(1,"number"),e._uU(2),e.qZA()),2&t){const i=s.$implicit;e.Q6J("value",e.lcZ(1,2,i.id_ambito_geografico)),e.xp6(2),e.hij(" ",i.nombre_ambito_geografico,"")}}function G(t,s){if(1&t&&(e.TgZ(0,"option",55),e.ALo(1,"number"),e._uU(2),e.qZA()),2&t){const i=s.$implicit;e.Q6J("value",e.lcZ(1,2,i.id_debilidades)),e.xp6(2),e.hij(" ",i.nombre_debilidades,"")}}function L(t,s){if(1&t){const i=e.EpF();e.TgZ(0,"button",56),e.NdJ("click",function(){return e.CHM(i),e.oxw().guardar()}),e._uU(1,"Aprobar Por DAC"),e.qZA()}}function Q(t,s){if(1&t){const i=e.EpF();e.TgZ(0,"button",57),e.NdJ("click",function(){return e.CHM(i),e.oxw().rechazara()}),e._uU(1,"Rechazar Por DAC"),e.qZA()}}const P=function(){return["../todas-evidencias"]};function j(t,s){if(1&t){const i=e.EpF();e.TgZ(0,"button",58),e.NdJ("click",function(){return e.CHM(i),e.oxw().Volver()}),e._uU(1,"Volver"),e.qZA()}2&t&&e.Q6J("routerLink",e.DdM(1,P))}let _=(()=>{class t{constructor(i,o,r,l,d){this.fb=i,this.dacService=o,this.usuarioService=r,this.router=l,this.activatedRouter=d,this.listaEvidenciaResponsable=[],this.listaUnidad=[],this.listatiposRegistros=[],this.listaAmbitoAcademico=[],this.listaCriterio=[],this.listaProcesos=[],this.listaAmbitoGeografico=[],this.listaDebilidad=[],this.disabledInput=!1,this.titulo="Ver evidencias",this.estadoEvidencia=!1,this.estadoEvidenciaActualizar=!1,this.obtenerNombreFolio="",this.id_rol=0,this.FormularioDac=this.fb.group({numero_folio:[{value:"",disabled:!0},[a.kI.required,a.kI.minLength(3)]],fecha_evidencia:[{value:"",disabled:!0},[a.kI.required,a.kI.minLength(3)]],numero_mejoras:[{value:"",disabled:!0},[a.kI.required,a.kI.minLength(3)]],descripcion:[{value:"",disabled:!0},[a.kI.required,a.kI.minLength(3)]],resultado:[{value:"",disabled:!0},[a.kI.required,a.kI.minLength(3)]],almacenamiento:[{value:"",disabled:!0},[a.kI.required,a.kI.minLength(3)]],unidades_personas_evidencias:[{value:"",disabled:!0},[a.kI.required,a.kI.minLength(3)]],palabra_clave:[{value:"",disabled:!0},[a.kI.required,a.kI.minLength(3)]],nombre_corto_evidencia:[{value:"",disabled:!0},[a.kI.required,a.kI.minLength(3)]],fk_id_usuario:[{value:"",disabled:!0}],fk_id_debilidades:[{value:"",disabled:!0},a.kI.required],fk_id_unidad:[{value:"",disabled:!0},a.kI.required],fk_id_criterios:[{value:"",disabled:!0},a.kI.required],fk_id_registros:[{value:"",disabled:!0},a.kI.required],fk_id_procesos:[{value:"",disabled:!0},a.kI.required],fk_id_estado:[{value:"",disabled:!0},a.kI.required],fk_id_ambito_academico:[{value:"",disabled:!0},a.kI.required],fk_id_ambito_geografico:[{value:"",disabled:!0},a.kI.required],rut:[{value:"",disabled:!0},a.kI.required],correo_usuario:[{value:"",disabled:!0},a.kI.required],observaciones_responsable:[{value:"",disabled:!0},[a.kI.required]],observaciones_dac:[{value:"",disabled:!1},[a.kI.required,a.kI.minLength(3)]],fk_id_usuario_responsable:[{value:"",disabled:!0},a.kI.required],fk_id_usuario_dac:[{value:"",disabled:!0},a.kI.required],correo_conectado:[{value:"",disabled:!0},a.kI.required],correo_responsable:[{value:"",disabled:!0},a.kI.required]}),this.id=this.activatedRouter.snapshot.paramMap.get("id"),this.usuario=r.usuario,console.log("EL USUARIO ES: ",this.usuario)}ngOnInit(){this.FormularioDac.reset({fk_id_usuario_dac:this.usuario.rut,correo_conectado:this.usuario.correo_usuario}),this.mostrarEvidenciasIdDac(),this.obtenerUnidad(),this.obtenerTiposRegistros(),this.obtenerAmbitoAcademico(),this.obtenerCriterio(),this.obtenerProcesos(),this.obtenerAmbitoGeografico(),this.obtenerDebilidad()}Volver(){this.router.navigate(["usuario-dac/ver-evidencias"])}formResponsabledisable(){}campoNoEsValido(i){return this.FormularioDac.controls[i].errors&&this.FormularioDac.controls[i].touched}uperCase(){var i;this.arregloObject={fk_id_usuario_dac:this.FormularioDac.get("fk_id_usuario_dac").value.toUpperCase(),correo_conectado:this.FormularioDac.get("correo_conectado").value,observaciones_dac:null===(i=this.FormularioDac.get("observaciones_dac").value)||void 0===i?void 0:i.toUpperCase()}}guardar(){this.id&&(this.uperCase(),this.FormularioDac.controls.fk_id_usuario_dac.enable(),this.dacService.actualizarAprobarEvidenciaDac(this.id,this.arregloObject).subscribe({next:i=>{console.log(this.usuario.rut),p().fire(`La Evidencia ${this.id} Fue Aprobada`,"Evidencia Aprobada Con EXITO ","success"),this.router.navigate(["usuario-dac/ver-evidencias"]),this.FormularioDac.reset({fk_id_usuario_dac:this.usuario.rut})},error:i=>{p().fire("Error","Error al APROBAR LA EVIDENCIA","error"),console.log(i)}}))}rechazara(){if(this.FormularioDac.invalid)return this.FormularioDac.markAllAsTouched(),p().fire("Error","Llene el campo observaciones Dac","error"),void console.log("asdfghjkl\xf1");this.id&&(this.uperCase(),this.FormularioDac.controls.fk_id_usuario_dac.enable(),this.dacService.actualizarRechazarEvidenciaDac(this.id,this.arregloObject).subscribe({next:i=>{p().fire("Evidencia RECHAZADA","Evidencia RECHAZADA con EXITO ","info"),console.log("'Evidencia RECHAZADA', Evidencia RECHAZADA con EXITO , 'info'"),this.router.navigate(["usuario-dac/ver-evidencias"]),this.FormularioDac.reset({fk_id_usuario_dac:this.usuario.id_usuarios})},error:i=>{p().fire("Error","Error al RECHAZAR LA EVIDENCIA","error"),console.log(i)}}))}obtenerUnidad(){this.dacService.obtenerUnidad().subscribe(i=>{console.log("DATSOS DE LA UNIDAD: ",i.resultado),this.listaUnidad=i.resultado,this.listaUnidad.reverse()})}obtenerTiposRegistros(){this.dacService.obtenertiposRegistros().subscribe(i=>{this.listatiposRegistros=i,this.listatiposRegistros.reverse()})}obtenerAmbitoAcademico(){this.dacService.obtenerAmbitoAcademico().subscribe(i=>{console.log(i),this.listaAmbitoAcademico=i,this.listaAmbitoAcademico.reverse()})}obtenerCriterio(){this.dacService.obtenerCriterio().subscribe(i=>{this.listaCriterio=i,this.listaCriterio.reverse()})}obtenerProcesos(){this.dacService.obtenerProcesos().subscribe(i=>{this.listaProcesos=i,this.listaProcesos.reverse()})}obtenerAmbitoGeografico(){this.dacService.obtenerAmbitoGeografico().subscribe(i=>{this.listaAmbitoGeografico=i,this.listaAmbitoGeografico.reverse()})}obtenerDebilidad(){this.dacService.obtenerDebilidad().subscribe(i=>{this.listaDebilidad=i,this.listaDebilidad.reverse()})}mostrarEvidenciasIdDac(){null!==this.id&&(this.estadoEvidencia=!0,this.titulo="Editar Evidencia",this.dacService.obtenerEvidenciaIdDac(this.id).subscribe({next:i=>{console.log("LOS DATOS SONNNNNNNNNNNNNNNNNNNNNNN: ",i.resultado1[0]),this.obtenerNombreFolio=i.resultado1[0].numero_folio,this.fechaActual=i.resultado1[0].fecha_evidencia,this.id_rol=i.resultado1[0].id_rol,this.revisado_dac=i.resultado1[0].revisado_dac,1==this.revisado_dac&&this.FormularioDac.controls.observaciones_dac.disable(),this.FormularioDac.patchValue({numero_folio:i.resultado1[0].numero_folio,fecha_evidencia:i.resultado1[0].fecha_evidencia,numero_mejoras:i.resultado1[0].numero_mejoras,descripcion:i.resultado1[0].descripcion,resultado:i.resultado1[0].resultado,almacenamiento:i.resultado1[0].almacenamiento,unidades_personas_evidencias:i.resultado1[0].unidades_personas_evidencias,palabra_clave:i.resultado1[0].palabra_clave,nombre_corto_evidencia:i.resultado1[0].nombre_corto_evidencia,fk_id_debilidades:i.resultado1[0].fk_id_debilidades,fk_id_unidad:i.resultado1[0].fk_id_unidad,fk_id_criterios:i.resultado1[0].fk_id_criterios,fk_id_registros:i.resultado1[0].fk_id_registros,fk_id_procesos:i.resultado1[0].fk_id_procesos,fk_id_estado:i.resultado1[0].fk_id_estado,fk_id_ambito_academico:i.resultado1[0].fk_id_ambito_academico,fk_id_ambito_geografico:i.resultado1[0].fk_id_ambito_geografico,rut:i.resultado1[0].rut,correo_usuario:i.resultado1[0].correo_usuario,fk_id_usuario_responsable:i.resultado2[0].rut,correo_responsable:i.resultado2[0].correo_usuario})},error:i=>{console.log("EL ERROSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSsR ES: ",i)}}))}}return t.\u0275fac=function(i){return new(i||t)(e.Y36(a.qu),e.Y36(g),e.Y36(h.r),e.Y36(m.F0),e.Y36(m.gz))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-administrar-evidencias"]],decls:176,vars:14,consts:[["charset","utf-8"],[1,"bg-light","col-10","mx-auto"],[1,"card"],[1,"card-body"],[1,"container"],[1,"row"],["src","./assets/img/ucm-logo1.jpeg","alt","UCM",1,"col-4","mb-3"],[1,"text-center","fs-2"],[1,"text-center","fs-5","mb-5"],[1,"container","mb-5"],[1,"text-center"],[3,"formGroup"],[1,"mb-3","row"],[1,"col-sm-6"],[1,"row","g-3"],[1,""],[1,"form-group","row"],["for","inputEmail3",1,"fw-bold","col-sm-3","col-form-label"],[1,"col-sm-8"],[1,"fs-5"],[1,"mb-3"],["formControlName","rut","type","text",1,"col-12","border"],["formControlName","fk_id_unidad","aria-label",".form-select-sm example",1,"form-select","form-select-sm"],[3,"value",4,"ngFor","ngForOf"],["formControlName","fk_id_registros","aria-label",".form-select-sm example",1,"form-select","form-select-sm",3,"value"],["formControlName","fk_id_ambito_academico","aria-label",".form-select-sm example",1,"form-select","form-select-sm"],["formControlName","fk_id_criterios","aria-label",".form-select-sm example",1,"form-select","form-select-sm"],["for","inputEmail3",1,"fw-bold","col-sm-4","col-form-label"],["class","col-sm-8",4,"ngIf"],["formControlName","correo_usuario","type","text",1,"col-12","border"],["formControlName","fk_id_procesos","aria-label",".form-select-sm example",1,"form-select","form-select-sm"],["formControlName","numero_mejoras","type","text",1,"col-12"],["formControlName","fk_id_ambito_geografico","aria-label",".form-select-sm example",1,"form-select","form-select-sm"],["formControlName","fk_id_debilidades","aria-label",".form-select-sm example",1,"form-select","form-select-sm"],["for","inputUnidad",1,"fw-bold","col-sm-3","col-form-label"],[1,"col-sm-9"],["formControlName","descripcion","id","exampleFormControlTextarea1","rows","3",1,"form-control"],["formControlName","resultado","id","exampleFormControlTextarea1","rows","3",1,"form-control"],["formControlName","almacenamiento","type","text","id","firstName","placeholder","","value","","required","",1,"form-control"],["formControlName","unidades_personas_evidencias","id","exampleFormControlTextarea1","rows","3",1,"form-control"],["formControlName","palabra_clave","type","text","id","firstName","placeholder","","value","","required","",1,"form-control"],["formControlName","nombre_corto_evidencia","type","text","id","firstName","placeholder","","value","","required","",1,"form-control"],[1,"mb-3","col-6"],["for","inputEmail3",1,"fw-bold","col-sm-6","col-form-label"],["formControlName","fk_id_usuario_responsable","type","text",1,"col-12","border"],["formControlName","correo_responsable","type","text",1,"col-12","border"],["formControlName","observaciones_responsable","id","exampleFormControlTextarea1","rows","3",1,"form-control","border"],["formControlName","fk_id_usuario_dac","type","text",1,"col-12","border"],["formControlName","correo_conectado","type","text",1,"col-12","border"],["formControlName","observaciones_dac","id","exampleFormControlTextarea1","rows","3",1,"form-control","border"],[1,"mb-3","row","mt-4"],[1,"mb-5","mt-5","row"],["class","btn btn-primary text-center col-md-3","type","submit",3,"click",4,"ngIf"],["class","btn btn-danger float-end col-md-3 offset-md-6","type","submit",3,"click",4,"ngIf"],["class","btn btn-danger col-md-4 offset-md-4","type","text",3,"routerLink","click",4,"ngIf"],[3,"value"],["type","submit",1,"btn","btn-primary","text-center","col-md-3",3,"click"],["type","submit",1,"btn","btn-danger","float-end","col-md-3","offset-md-6",3,"click"],["type","text",1,"btn","btn-danger","col-md-4","offset-md-4",3,"routerLink","click"]],template:function(i,o){1&i&&(e.TgZ(0,"head"),e._UZ(1,"meta",0),e.TgZ(2,"title"),e._uU(3,"Hola mundo con Javascript - victor robles"),e.qZA()(),e.TgZ(4,"body",1)(5,"div",2)(6,"div",3)(7,"div",4)(8,"div",5),e._UZ(9,"img",6),e.TgZ(10,"h3",7),e._uU(11,"Universidad Catolica del Maule"),e.qZA(),e.TgZ(12,"h6",8),e._uU(13,"Departamento de Aseguramiento de la Calidad"),e.qZA()()(),e.TgZ(14,"div",9)(15,"h2",10),e._uU(16,"Documento del Sistema de Gestion de Calidad"),e.qZA(),e.TgZ(17,"h3",10),e._uU(18,"Registros del Sistema de Gestion de Calidad"),e.qZA(),e.TgZ(19,"h4",10),e._uU(20,"Identificacion de Registros"),e.qZA()(),e.TgZ(21,"form",11)(22,"div",4)(23,"div",12)(24,"div",13)(25,"div",14)(26,"div",15)(27,"div",16)(28,"label",17),e._uU(29,"N\xb0 folio"),e.qZA(),e.TgZ(30,"div",18)(31,"span",19),e._uU(32),e.qZA()()()(),e.TgZ(33,"div",20)(34,"div",16)(35,"label",17),e._uU(36,"Usuario"),e.qZA(),e.TgZ(37,"div",18),e._UZ(38,"input",21),e.qZA()()(),e.TgZ(39,"div",20)(40,"div",16)(41,"label",17),e._uU(42,"Unidad"),e.qZA(),e.TgZ(43,"div",18)(44,"select",22),e.YNc(45,R,3,4,"option",23),e.qZA()()()(),e.TgZ(46,"div",20)(47,"div",16)(48,"label",17),e._uU(49,"Tipo Registro"),e.qZA(),e.TgZ(50,"div",18)(51,"select",24),e.YNc(52,O,3,4,"option",23),e.qZA()()()(),e.TgZ(53,"div",20)(54,"div",16)(55,"label",17),e._uU(56,"Ambito"),e.qZA(),e.TgZ(57,"div",18)(58,"select",25),e.YNc(59,J,3,4,"option",23),e.qZA()()()(),e.TgZ(60,"div",20)(61,"div",16)(62,"label",17),e._uU(63,"Criterio"),e.qZA(),e.TgZ(64,"div",18)(65,"select",26),e.YNc(66,B,3,4,"option",23),e.qZA()()()()()(),e.TgZ(67,"div",13)(68,"div",14)(69,"label",27),e._uU(70,"fecha Actual"),e.qZA(),e.YNc(71,w,4,4,"div",28),e.TgZ(72,"div",20)(73,"div",16)(74,"label",27),e._uU(75,"Email"),e.qZA(),e.TgZ(76,"div",18),e._UZ(77,"input",29),e.qZA()()(),e.TgZ(78,"div",20)(79,"div",16)(80,"label",27),e._uU(81,"Proceso"),e.qZA(),e.TgZ(82,"div",18)(83,"select",30),e.YNc(84,M,3,4,"option",23),e.qZA()()()(),e.TgZ(85,"div",20)(86,"div",16)(87,"label",27),e._uU(88,"N\xb0 Plan de Mejoras"),e.qZA(),e.TgZ(89,"div",18),e._UZ(90,"input",31),e.qZA()()(),e.TgZ(91,"div",20)(92,"div",16)(93,"label",27),e._uU(94,"Ambito Geografico"),e.qZA(),e.TgZ(95,"div",18)(96,"select",32),e.YNc(97,Y,3,4,"option",23),e.qZA()()()(),e.TgZ(98,"div",20)(99,"div",16)(100,"label",27),e._uU(101,"Debilidad"),e.qZA(),e.TgZ(102,"div",18)(103,"select",33),e.YNc(104,G,3,4,"option",23),e.qZA()()()()()()(),e.TgZ(105,"div",12)(106,"label",34),e._uU(107,"Descripcion"),e.qZA(),e.TgZ(108,"div",35),e._UZ(109,"textarea",36),e.qZA()(),e.TgZ(110,"div",12)(111,"label",34),e._uU(112,"Resultado"),e.qZA(),e.TgZ(113,"div",35),e._UZ(114,"textarea",37),e.qZA()(),e.TgZ(115,"div",12)(116,"label",34),e._uU(117,"Almacenamiento"),e.qZA(),e.TgZ(118,"div",35),e._UZ(119,"input",38),e.qZA()(),e.TgZ(120,"div",12)(121,"label",34),e._uU(122,"Unidades y/o Personas Relacionadas a la evidencia"),e.qZA(),e.TgZ(123,"div",35),e._UZ(124,"textarea",39),e.qZA()(),e.TgZ(125,"div",12)(126,"label",34),e._uU(127,"Palabra clave"),e.qZA(),e.TgZ(128,"div",35),e._UZ(129,"input",40),e.qZA()(),e.TgZ(130,"div",12)(131,"label",34),e._uU(132,"Nombre corto evidencia"),e.qZA(),e.TgZ(133,"div",35),e._UZ(134,"input",41),e.qZA()(),e.TgZ(135,"div",5)(136,"div",42)(137,"div",16)(138,"label",43),e._uU(139," Responsable"),e.qZA(),e.TgZ(140,"div",13),e._UZ(141,"input",44),e.qZA()()(),e.TgZ(142,"div",42)(143,"div",16)(144,"label",17),e._uU(145,"Email"),e.qZA(),e.TgZ(146,"div",35),e._UZ(147,"input",45),e.qZA()()()(),e.TgZ(148,"div",12)(149,"label",34),e._uU(150,"Observaciones Responsable"),e.qZA(),e.TgZ(151,"div",35),e._UZ(152,"textarea",46),e.qZA()(),e.TgZ(153,"div",5)(154,"div",42)(155,"div",16)(156,"label",43),e._uU(157," DAC"),e.qZA(),e.TgZ(158,"div",13),e._UZ(159,"input",47),e.qZA()()(),e.TgZ(160,"div",42)(161,"div",16)(162,"label",17),e._uU(163,"Email"),e.qZA(),e.TgZ(164,"div",35),e._UZ(165,"input",48),e.qZA()()()(),e.TgZ(166,"div",12)(167,"label",34),e._uU(168,"Observaciones DAC"),e.qZA(),e.TgZ(169,"div",35),e._UZ(170,"textarea",49),e.qZA()(),e.TgZ(171,"div",50)(172,"div",51),e.YNc(173,L,2,0,"button",52),e.YNc(174,Q,2,0,"button",53),e.YNc(175,j,2,2,"button",54),e.qZA()()()()()()()),2&i&&(e.xp6(21),e.Q6J("formGroup",o.FormularioDac),e.xp6(11),e.Oqu(o.obtenerNombreFolio),e.xp6(13),e.Q6J("ngForOf",o.listaUnidad),e.xp6(6),e.Q6J("value",o.formResponsabledisable()),e.xp6(1),e.Q6J("ngForOf",o.listatiposRegistros),e.xp6(7),e.Q6J("ngForOf",o.listaAmbitoAcademico),e.xp6(7),e.Q6J("ngForOf",o.listaCriterio),e.xp6(5),e.Q6J("ngIf",1==o.estadoEvidencia),e.xp6(13),e.Q6J("ngForOf",o.listaProcesos),e.xp6(13),e.Q6J("ngForOf",o.listaAmbitoGeografico),e.xp6(7),e.Q6J("ngForOf",o.listaDebilidad),e.xp6(69),e.Q6J("ngIf",!1===o.revisado_dac),e.xp6(1),e.Q6J("ngIf",!1===o.revisado_dac),e.xp6(1),e.Q6J("ngIf",!0===o.revisado_dac))},directives:[a._Y,a.JL,a.sg,a.Fj,a.JJ,a.u,a.EJ,u.sg,a.YN,a.Kr,u.O5,a.Q7,m.rH],pipes:[u.JJ,u.uU],styles:[".no-space-break[_ngcontent-%COMP%]{white-space:nowrap;margin-top:2px}.redbar[_ngcontent-%COMP%]{text-align:center;border-image:none;border-radius:3px!important;display:block!important;width:50px!important;margin:auto auto auto 50px;float:none}"]}),t})();var z=n(8851),$=n(5042),V=n(508),v=n(7322),b=n(6856),H=n(9257);let X=(()=>{class t{constructor(i,o,r,l){this.usuarioService=i,this.fb=o,this.graficosGlobales=r,this.dateAdapter=l,this.barChartData={labels:[],datasets:[{data:[],label:""},{data:[],label:""}]},this.pieChartData={labels:[],datasets:[{data:[],backgroundColor:[]}]},this.pieChartData2={labels:[],datasets:[{data:[],backgroundColor:[]}]},this.pieChartData3={labels:[],datasets:[{data:[],backgroundColor:[]}]},this.pieChartData4={labels:[],datasets:[{data:[],backgroundColor:[]}]},this.pieChartData5={labels:[],datasets:[{data:[],backgroundColor:[]}]},this.pipe=new u.uU("en-US"),this.start1="",this.end1="",this.dateStart="",this.dateEnd="",this.FormularioDac=this.fb.group({start:[,[a.kI.required]],end:[,[a.kI.required]]}),this.usuario=i.usuario,this.id_unidad=this.usuario.fk_id_unidad}ngOnInit(){}formatDate(){this.start1=this.FormularioDac.value.start,this.end1=this.FormularioDac.value.end,this.dateStart=this.pipe.transform(this.start1,"dd-MM-yyyy"),this.dateEnd=this.pipe.transform(this.end1,"dd-MM-yyyy")}pieChartDataUser(){this.formatDate(),this.graficosGlobales.obtenerCantidadEvidenciasGraficosResponsableAPR(this.usuario.rut,this.dateStart,this.dateEnd,this.id_unidad).subscribe(i=>{i=i.resultado[0],console.log(Object.values(i.aprobadas),"wwewewe: ",i),this.barChartData={labels:["EVIDENCIAS"],datasets:[{data:Object.values(i.aprobadas),label:"APROBADAS",backgroundColor:["#00E69A"],hoverBackgroundColor:"#3007E0"},{data:Object.values(i.rechazadas),label:"RECHAZADAS",backgroundColor:["#0800F5"],hoverBackgroundColor:"#3007E0"},{data:Object.values(i.pendientes),label:"PENDIENTES",backgroundColor:["#1EE6D5"],hoverBackgroundColor:"#3007E0"}]}}),console.log(this.dateStart,"sswws",this.dateEnd),this.graficosGlobales.obtenerCantidadEvidenciasGraficosUnidades(this.usuario.rut,this.dateStart,this.dateEnd).subscribe(i=>{let r,l,o=0,d=[],c=[];for(;o<i.resultado.length;o++)r=i.resultado[o],l=r.cantevidenciasunidad,r=r.nombre_unidad,d.push(r),c.push(l),console.log(c,"sswws",d),this.pieChartData={labels:d,datasets:[{data:c,backgroundColor:["#08FAE9","#13ABF5","#076CE0"],hoverBackgroundColor:["#0B9BDE","#0B48E0","#0D20FA"]}]}}),this.graficosGlobales.obtenerCantidadEvidenciasGraficosTiposRegistros(this.usuario.rut,this.dateStart,this.dateEnd).subscribe(i=>{let r,l,o=0,d=[],c=[];for(;o<i.resultado.length;o++)r=i.resultado[o],l=r.cantevidenciasregistros,r=r.nombre_registros,d.push(r),c.push(l),console.log(c,"sswws",d),this.pieChartData2={labels:d,datasets:[{data:c,backgroundColor:["#08FAE9","#13ABF5","#076CE0"],hoverBackgroundColor:["#0B9BDE","#0B48E0","#0D20FA"]}]}}),this.graficosGlobales.obtenerCantidadEvidenciasGraficosDebilidades(this.usuario.rut,this.dateStart,this.dateEnd).subscribe(i=>{let r,l,o=0,d=[],c=[];for(;o<i.resultado.length;o++)r=i.resultado[o],l=r.cantevidenciasdebilidades,r=r.nombre_debilidades,d.push(r),c.push(l),console.log(c,"sswws",d),this.pieChartData3={labels:d,datasets:[{data:c,backgroundColor:["#08FAE9","#13ABF5","#076CE0"],hoverBackgroundColor:["#0B9BDE","#0B48E0","#0D20FA"]}]}}),this.graficosGlobales.obtenerCantidadEvidenciasGraficosCriterios(this.usuario.rut,this.dateStart,this.dateEnd).subscribe(i=>{let r,l,o=0,d=[],c=[];for(;o<i.resultado.length;o++)r=i.resultado[o],l=r.cantevidenciascriterios,r=r.nombre_criterios,d.push(r),c.push(l),console.log(c,"sswws",d),this.pieChartData4={labels:d,datasets:[{data:c,backgroundColor:["#08FAE9","#13ABF5","#076CE0"],hoverBackgroundColor:["#0B9BDE","#0B48E0","#0D20FA"]}]}}),this.graficosGlobales.obtenerCantidadEvidenciasGraficosAmbitoAcademico(this.usuario.rut,this.dateStart,this.dateEnd).subscribe(i=>{let r,l,o=0,d=[],c=[];for(;o<i.resultado.length;o++)r=i.resultado[o],l=r.cantevidenciasambitoacademico,r=r.nombre_ambito_academico,d.push(r),c.push(l),console.log(c,"sswws",d),this.pieChartData5={labels:d,datasets:[{data:c,backgroundColor:["#08FAE9","#13ABF5","#076CE0"],hoverBackgroundColor:["#0B9BDE","#0B48E0","#0D20FA"]}]}})}}return t.\u0275fac=function(i){return new(i||t)(e.Y36(h.r),e.Y36(a.qu),e.Y36($.T),e.Y36(V._A))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-graficos"]],decls:51,vars:14,consts:[["lang","es"],["charset","utf-8"],["name","viewport","content","width=device-width, initial-scale=1"],[1,"bg-light","col-10","mx-auto"],[1,"card"],[1,"card-body"],[1,"container"],["autocomplete","off",3,"formGroup","ngSubmit"],[1,"row"],["src","./assets/img/ucm-logo1.jpeg","alt","UCM",1,"col-4","mb-3"],[1,"text-center","fs-2"],[1,"text-center","fs-5","mb-5"],[1,"container","px-1","px-sm-5","mx-auto","mb-5"],[1,"flex-row","d-flex","justify-content-center"],[1,"col-lg-6","col-11","px-1"],[1,"input-group","input-daterange"],[1,"col-sm-4"],["appearance","fill"],[3,"rangePicker"],["matStartDate","","formControlName","start","placeholder","Fecha de inicio"],["matEndDate","","formControlName","end","placeholder","Fecha final"],["matSuffix","",3,"for"],["picker",""],[1,"container","mb-5"],[1,"bg-light","col-12","mx-auto","mb-3"],[1,"d-grid","gap-2"],["type","submit","data-bs-toggle","collapse","data-bs-target","#collapseExample","aria-expanded","false","aria-controls","collapseExample",1,"btn","btn-outline-secondary",3,"disabled"],["id","collapseExample",1,"collapse"],[1,"card","card-body"],[2,"display","block"],[3,"barChartData","pieChartData","pieChartData2","pieChartData3","pieChartData4","pieChartData5"]],template:function(i,o){if(1&i&&(e.TgZ(0,"html",0)(1,"head"),e._UZ(2,"meta",1),e.TgZ(3,"title"),e._uU(4,"Hola mundo con Javascript - victor robles"),e.qZA(),e._UZ(5,"meta",2),e.qZA(),e.TgZ(6,"body",3)(7,"div",4)(8,"div",5)(9,"div",6)(10,"form",7),e.NdJ("ngSubmit",function(){return o.pieChartDataUser()}),e.TgZ(11,"div",8),e._UZ(12,"img",9),e.TgZ(13,"h3",10),e._uU(14,"Universidad Catolica del Maule"),e.qZA(),e.TgZ(15,"h6",11),e._uU(16,"Estadisticas y Graficos"),e.qZA()(),e.TgZ(17,"div",12)(18,"section",6)(19,"div",13)(20,"div",14)(21,"div",15)(22,"div",16)(23,"mat-form-field",17)(24,"mat-label"),e._uU(25,"Seleccione el rango de fecha"),e.qZA(),e.TgZ(26,"mat-date-range-input",18),e._UZ(27,"input",19)(28,"input",20),e.qZA(),e.TgZ(29,"mat-hint"),e._uU(30,"MM/DD/YYYY \u2013 MM/DD/YYYY"),e.qZA(),e._UZ(31,"mat-datepicker-toggle",21)(32,"mat-date-range-picker",null,22),e.qZA(),e.TgZ(34,"p"),e._uU(35),e.ALo(36,"json"),e.qZA(),e.TgZ(37,"p"),e._uU(38,"valid"),e.qZA(),e.TgZ(39,"p"),e._uU(40),e.qZA()()()()()()(),e.TgZ(41,"div",23)(42,"body",24)(43,"div",25)(44,"button",26),e._uU(45," Evidencias Encontradas en el rango de fechas "),e.qZA()(),e.TgZ(46,"div",27)(47,"div",28)(48,"div",8)(49,"div",29),e._UZ(50,"app-graficos-gloval",30),e.qZA()()()()()()()()()()()()),2&i){const r=e.MAs(33);e.xp6(10),e.Q6J("formGroup",o.FormularioDac),e.xp6(16),e.Q6J("rangePicker",r),e.xp6(5),e.Q6J("for",r),e.xp6(4),e.hij("Selected range: ",e.lcZ(36,12,o.FormularioDac.value),""),e.xp6(5),e.hij("Selected range: ",o.FormularioDac.valid,""),e.xp6(4),e.Q6J("disabled",o.FormularioDac.invalid),e.xp6(6),e.Q6J("barChartData",o.barChartData)("pieChartData",o.pieChartData)("pieChartData2",o.pieChartData2)("pieChartData3",o.pieChartData3)("pieChartData4",o.pieChartData4)("pieChartData5",o.pieChartData5)}},directives:[a._Y,a.JL,a.sg,v.KE,v.hX,b.wx,b.zY,a.Fj,a.JJ,a.u,b.By,v.bx,b.nW,v.R9,b._g,H.l],pipes:[u.Ts],styles:[""]}),t})();var K=n(442);const W=[{path:"",component:A,children:[{path:"home",component:C},{path:"ver-evidencias",component:F},{path:"administrar-Evidencias",component:_},{path:"administrar-Evidencias/:id/:id2",component:_},{path:"estadisticas",component:z.l},{path:"graficos",component:X},{path:"mi-perfil",component:K.f},{path:"**",redirectTo:"home"}]}];let ee=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[m.Bz.forChild(W)],m.Bz]}),t})();var ie=n(443),te=n(3423),oe=n(7958),ae=n(4679),re=n(1210);let se=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[u.ez,ee,ie.R,a.UX,te.d,oe.c,ae.w,re.h]]}),t})()}}]);