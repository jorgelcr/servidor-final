const { Pool } = require('pg');
const {response} = require("express");


const config = {
       
    user: 'postgres',
    host: 'localhost',
    password: '7551',
    database: 'evidencias'
}
const pool = new Pool (config);

const get_Unidad = async(req, res) => {

   
    try { 
         
        const selectUnidad= await pool.query('SELECT distinct id_unidad, nombre_unidad FROM unidad INNER JOIN usuarios ON usuarios.fk_id_unidad = unidad.id_unidad INNER JOIN rol ON usuarios.fk_id_rol = rol.id_rol where unidad_defecto = true and id_rol = 3');
      /* where unidad_defecto = false */
        res.status(200).json({
            ok: true,
            resultado: selectUnidad.rows});
    } catch (error) {
        console.log("QQQQQQQQQQQQQQQQQQQQQQQQQQQQQsdsds",error)
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

const post_EvicenciaUsuarioNormal= async(req, res = response) => {

      
    try {
        
        const { numero_folio, numero_mejoras, descripcion, resultado, almacenamiento, unidades_personas_evidencias, palabra_clave, nombre_corto_evidencia,fk_id_usuario, fk_id_debilidades, fk_id_unidad, fk_id_criterios, fk_id_registros, fk_id_procesos, fk_id_ambito_academico, fk_id_ambito_geografico} = req.body;

 
        const insertEvidenciaUsuarioNormal = await pool.query('INSERT INTO evidencias (numero_folio, numero_mejoras, descripcion, resultado, almacenamiento, unidades_personas_evidencias, palabra_clave, nombre_corto_evidencia, fk_id_usuario, fk_id_debilidades, fk_id_unidad, fk_id_criterios, fk_id_registros, fk_id_procesos, fk_id_ambito_academico, fk_id_ambito_geografico) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16)',[numero_folio, numero_mejoras, descripcion, resultado, almacenamiento, unidades_personas_evidencias, palabra_clave, nombre_corto_evidencia, fk_id_usuario, fk_id_debilidades, fk_id_unidad, fk_id_criterios, fk_id_registros, fk_id_procesos, fk_id_ambito_academico, fk_id_ambito_geografico]);
        console.log(insertEvidenciaUsuarioNormal);
        res.status(200).json({  
            ok: true, 
            message: 'La Evidencia del Usuario Normal fue agregada exitosamente xd',
            body: {
                producto: {numero_folio, numero_mejoras, descripcion, resultado, almacenamiento, unidades_personas_evidencias, palabra_clave, nombre_corto_evidencia, fk_id_usuario, fk_id_debilidades, fk_id_unidad, fk_id_criterios, fk_id_registros, fk_id_procesos, fk_id_ambito_academico, fk_id_ambito_geografico}
            }
        })   
    } catch (error) {
        console.log("EL ERROR ESQWQWQWQWQWQ",error);
        res.status(400).json( {
            ok: false,
            msg: 'Error Post Evidencia Usuario Normal'
    })
 
}}

const update_EvidenciaUsuarioNormal= async (req, res) => {
    
    try {
        
        const { numero_mejoras, descripcion, resultado, almacenamiento, unidades_personas_evidencias, palabra_clave, nombre_corto_evidencia, fk_id_debilidades, fk_id_unidad, fk_id_criterios, fk_id_registros, fk_id_procesos, fk_id_ambito_academico, fk_id_ambito_geografico} = req.body;
        let id = await req.params.id;
 
        const updateEvidencias = await pool.query('update evidencias set numero_mejoras = $1, descripcion= $2, resultado= $3, almacenamiento= $4, unidades_personas_evidencias= $5, palabra_clave= $6, nombre_corto_evidencia= $7, fk_id_debilidades= $8, fk_id_unidad= $9, fk_id_criterios= $10, fk_id_registros= $11, fk_id_procesos= $12, fk_id_ambito_academico= $13, fk_id_ambito_geografico= $14 where id_evidencias=$15',
        [numero_mejoras, 
        descripcion, 
        resultado,  
        almacenamiento, 
        unidades_personas_evidencias, 
        palabra_clave, 
        nombre_corto_evidencia, 
        fk_id_debilidades, 
        fk_id_unidad, 
        fk_id_criterios, 
        fk_id_registros, 
        fk_id_procesos,
        fk_id_ambito_academico, 
        fk_id_ambito_geografico,         
        id ]);
  
        console.log(updateEvidencias);
        res.json('Evidencia actualizada exitosamente ');
 
    } catch (error) {
        console.log("AAAAAAAAAAAA: ",error);
     res.status(400).json( {
         ok: true,
         msg: 'Error Update Evidencia'
    })
 }
 }

/* ###################################################################################################### */

module.exports = {

    get_Unidad,
    get_TipoRegistro, 
    get_AmbitoAcademico, 
    get_Criterios,
    get_Procesos,
    get_AmbitoGeografico,
    get_Debilidad,
    post_EvicenciaUsuarioNormal,
    update_EvidenciaUsuarioNormal
}