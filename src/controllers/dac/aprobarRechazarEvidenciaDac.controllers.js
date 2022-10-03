const { Pool } = require('pg');
const {response} = require("express");


const config = {
       
    user: 'postgres',
    host: 'localhost',
    password: '7551',
    database: 'evidencias'
}
const pool = new Pool (config);


const get_Evidencia_Id_Dac = async (req, res) => {
    
    try {
        const id =  req.params.id;
        const data = await pool.query('select evidencias.fk_id_unidad, id_evidencias, numero_folio, fecha_evidencia, numero_mejoras, descripcion, resultado, almacenamiento, unidades_personas_evidencias, palabra_clave, nombre_corto_evidencia, revisado_reponsable, revisado_dac,vigente_responsable, estado_evidencia_responsable,estado_evidencia_dac,fk_id_usuario,fk_id_debilidades,fk_id_criterios,fk_id_registros,fk_id_procesos,fk_id_ambito_academico,fk_id_ambito_geografico,observaciones_responsable, observaciones_dac,fk_id_usuario_responsable,id_procesos, codigo_procesos, nombre_procesos, estado_procesos, id_registros, codigo_registros, nombre_registros, estado_registros, id_debilidades, codigo_debilidades, nombre_debilidades, descripcion_debilidades, estado_debilidades, fk_id_criterio, id_criterios, nombre_criterios, codigo_criterios, descripcion_criterios, estado_criterios, id_ambito_geografico, nombre_ambito_geografico, estado_ambito_geografico, codigo_ambito_academico, nombre_ambito_academico, estado_ambito_academico, id_unidad, codigo_unidad, nombre_unidad, unidad_defecto, id_usuarios, rut, nombres_usuario, apellidos_usuario, correo_usuario, contrasena, estado, fk_id_rol, estado_unidad_responsable, id_rol, numero_rol, nombre_rol, nombre_registros, estado_registros, id_debilidades, codigo_debilidades, nombre_debilidades, descripcion_debilidades, estado_debilidades, fk_id_criterio, id_criterios, nombre_criterios, codigo_criterios, descripcion_criterios, estado_criterios, id_ambito_geografico, nombre_ambito_geografico, estado_ambito_geografico FROM evidencias INNER JOIN procesos ON evidencias.fk_id_procesos = procesos.id_procesos INNER JOIN registros ON evidencias.fk_id_registros = registros.id_registros INNER JOIN debilidades ON evidencias.fk_id_debilidades = debilidades.id_debilidades INNER JOIN criterios ON evidencias.fk_id_criterios = criterios.id_criterios INNER JOIN ambito_geografico ON evidencias.fk_id_ambito_geografico = ambito_geografico.id_ambito_geografico INNER JOIN ambito_academico ON evidencias.fk_id_ambito_academico  = ambito_academico.id_ambito_academico INNER JOIN unidad ON evidencias.fk_id_unidad  = unidad.id_unidad JOIN usuarios ON evidencias.fk_id_usuario = usuarios.rut INNER JOIN rol ON usuarios.fk_id_rol = rol.id_rol WHERE numero_folio = $1 ', [id]);
        const data2 = await pool.query('select rut, nombres_usuario, correo_usuario FROM evidencias INNER JOIN usuarios ON evidencias.fk_id_usuario_responsable = usuarios.rut  WHERE numero_folio = $1 and vigente_responsable = true', [id]);           
        res.status(200).json({
                            resultado1: data.rows,
                            resultado2: data2.rows});  
        
    } catch (error) {
        console.log("ERROR get_Evidencia_Id_Dac ES: ",error)
          res.status(400).json( {
        ok: false,
        msg: 'Error Get POR ID get_Evidencia_Id_Dac'
    }) 
    }
};  

const get_Unidad = async(req, res) => {

   
    try { 
         
        const selectUnidad= await pool.query('SELECT * FROM unidad INNER JOIN usuarios ON usuarios.fk_id_unidad = unidad.id_unidad INNER JOIN rol ON usuarios.fk_id_rol = rol.id_rol where unidad_defecto = true and usuarios.fk_id_rol = 4');
      /* where unidad_defecto = false */
        res.status(200).json({
            ok: true,
            resultado: selectUnidad.rows});
    } catch (error) {
        console.log("ERROR OBTENER UNIDAD",error)
          res.status(400).json( {
        ok: true,
        msg: 'Error Get Unidad'
    }) 
    } 

}


const get_TipoRegistro = async(req, res) => {

    try { 
         
        const selectRegistros= await pool.query('SELECT * FROM registros where estado_registros = true');
      
        res.status(200).json(selectRegistros.rows);

    } catch (error) {
          res.status(400).json( {
        ok: true,
        msg: 'Error Get Registros'
    }) 
    }

}

const get_AmbitoAcademico = async(req, res) => {

    try { 
         
        const selectAmbitoAcademico= await pool.query('SELECT * FROM ambito_academico where estado_ambito_academico = true');
      
        res.status(200).json(selectAmbitoAcademico.rows);

    } catch (error) {
          res.status(400).json( {
        ok: true,
        msg: 'Error Get ambito_academico'
    }) 
    }

}

const get_Criterios = async(req, res) => {

    try {
        
        const selectCriterio= await pool.query('SELECT * FROM criterios where estado_criterios = true');
      
        res.status(200).json(selectCriterio.rows);

    } catch (error) {
          res.status(400).json( {
        ok: true,
        msg: 'Error Get Criterio'
    }) 
    }

}

const get_Procesos = async(req, res) => {

    try {
        
        const selectProcesos= await pool.query('SELECT * FROM procesos where estado_procesos = true');
      
        res.status(200).json(selectProcesos.rows);
  
    } catch (error) {
          res.status(400).json( {
        ok: true,
        msg: 'Error Get Procesos'
    }) 
    }

}

const get_AmbitoGeografico = async(req, res) => {

    try { 
         
        const selectAmbitoGeografico= await pool.query('SELECT * FROM ambito_geografico where estado_ambito_geografico = true');
      
        res.status(200).json(selectAmbitoGeografico.rows);

    } catch (error) {
          res.status(400).json( {
        ok: true,
        msg: 'Error Get Ambito Geografico'
    }) 
    }

}

const get_Debilidad = async(req, res) => {

    try { 
         
        const selectDebilidades= await pool.query('SELECT id_debilidades, codigo_debilidades, nombre_debilidades, descripcion_debilidades, estado_debilidades, nombre_unidad, nombre_criterios FROM debilidades INNER JOIN unidad ON debilidades.fk_id_unidad = unidad.id_unidad INNER JOIN criterios ON debilidades.fk_id_criterio = criterios.id_criterios where estado_debilidades = true');

        res.status(200).json(selectDebilidades.rows);

    } catch (error) {
          res.status(400).json( {
        ok: true,
        msg: 'Error Get Debilidades'
    }) 
    }

}

const update_EvicenciaDac= async(req, res = response) => {

        try {
            
            const { estado_evidencia_responsable, revisado_reponsable, fk_id_usuario_dac } = req.body;
            let id = await req.params.id;
     
            const updateEvidenciaDac = await pool.query('update evidencias set fk_id_usuario_dac = $1, estado_evidencia_dac = 1, revisado_dac = true, vigente_responsable = true where numero_folio=$2 ',
            [fk_id_usuario_dac,     
             id ]);
     /* estado_evidencia_responsable, revisado_reponsable, se usan para que el usuario lo ingrese en algun  formulario   */ 
            console.log(updateEvidenciaDac.rows);
            res.json( 'Evidencia APROBADA EXITOSAMENTE DAC');
            console.log(fk_id_usuario_dac)
        } catch (error) {
            console.log("EL ERROR ES updateEvidenciaDac: ",error); 
         res.status(400).json( {
             ok: true,
             msg: 'Error ACTUALIZAR EVIDENCIA DAC'
        })
     }
 } 

 const update_EvicenciaObservacionesDac= async(req, res = response) => {

    try {
        
        const { observaciones_dac, fk_id_usuario_dac} = req.body;
        let id = await req.params.id;
  
        const updateEvidenciaDacc = await pool.query('update evidencias set fk_id_usuario_dac = $1, observaciones_dac  = $2, estado_evidencia_dac = 2, revisado_dac = true where numero_folio=$3',
        [  fk_id_usuario_dac,
            observaciones_dac,    
         id ]);
 /* estado_evidencia_responsable, revisado_reponsable, se usan para que el usuario lo ingrese en algun  formulario   */
        console.log(fk_id_usuario_dac);
        res.json({resultado: updateEvidenciaDacc.rows,
                msg: 'Evidencia RECHAZADA EXITOSAMENTE DAC'});
 
    } catch (error) {
        console.log("EL ERROR ES updateEvidenciaDacc: ",error);
     res.status(400).json( {
         ok: true,
         msg: 'Error RECHAZADAR EVIDENCIA DAC updateEvidenciaDacc'
    })
 }
 }   
 
 
module.exports = {

    get_Evidencia_Id_Dac, 
    get_Unidad,
    get_TipoRegistro,
    get_AmbitoAcademico,
    get_Criterios,
    get_Procesos,
    get_AmbitoGeografico,
    get_Debilidad,
    update_EvicenciaDac,
    update_EvicenciaObservacionesDac
}