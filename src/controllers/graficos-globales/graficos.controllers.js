const { Pool } = require('pg');
const {response} = require("express");


const config = {
       
    user: 'postgres',
    host: 'localhost',
    password: '7551',
    database: 'evidencias'
}
const pool = new Pool (config);

const get_TotalEvidencias = async(req, res) => {

    const {id, inicio, fin}=  req.params /* req.params.id */;
    console.log(id, 'id',inicio,'-',fin);
    try { 
         
        const get_TotalEvidencias= await pool.query('SELECT count(id_evidencias) as cantevidencias FROM evidencias where fk_id_usuario = $1 and fecha_evidencia between $2 and $3', [id, inicio,fin]);


        res.status(200).json({
            ok: true,
            resultado: get_TotalEvidencias.rows, 
        
        });
    
    } catch (error) {
        console.log("ERROR get_TotalEvidencias",error)
          res.status(400).json( {
        ok: false,
        msg: 'Error Get Unidad get_TotalEvidencias'
    }) 
    } 

}

const get_TotalEvidenciasUnidades = async(req, res) => {

    const {id, inicio, fin}=  req.params /* req.params.id */;
    console.log(id, 'id',inicio,'-',fin);
    try { 
         
        const get_TotalEvidenciasUnidades= await pool.query('SELECT nombre_unidad, count(id_evidencias) as cantevidenciasunidad FROM evidencias INNER JOIN unidad ON evidencias.fk_id_unidad = unidad.id_unidad where fk_id_usuario = $1 or fk_id_usuario_responsable = $1 or fk_id_usuario_dac = $1 and fecha_evidencia between $2 and $3 GROUP BY fk_id_unidad, nombre_unidad', [id, inicio,fin]);


        res.status(200).json({
            ok: true,
            resultado: get_TotalEvidenciasUnidades.rows, 
        
        });
    
    } catch (error) {
        console.log("ERROR get_TotalEvidenciasUnidades",error)
          res.status(400).json( {
        ok: false,
        msg: 'Error Get Unidad get_TotalEvidenciasUnidades'
    }) 
    } 

}
const get_TotalEvidenciasTiposRegistros = async(req, res) => {

    const {id, inicio, fin}=  req.params /* req.params.id */;
    console.log(id, 'id',inicio,'-',fin);
    try { 
         
        const get_TotalEvidenciasTiposRegistros = await pool.query('SELECT nombre_registros, count(fk_id_registros) as cantevidenciasregistros FROM evidencias INNER JOIN registros ON evidencias.fk_id_registros = registros.id_registros where fk_id_usuario = $1 or fk_id_usuario_responsable = $1 or fk_id_usuario_dac = $1 and fecha_evidencia between $2 and $3 GROUP BY fk_id_registros, nombre_registros', [id, inicio,fin]);


        res.status(200).json({
            ok: true,
            resultado: get_TotalEvidenciasTiposRegistros .rows, 
        
        });
    
    } catch (error) {
        console.log("ERROR get_TotalEvidenciasTiposRegistros",error)
          res.status(400).json( {
        ok: false,
        msg: 'Error Get Unidad get_TotalEvidenciasTiposRegistros'
    }) 
    } 

}
const get_TotalEvidenciasDebilidades = async(req, res) => {

    const {id, inicio, fin}=  req.params /* req.params.id */;
    console.log(id, 'id',inicio,'-',fin);
    try { 
         
        const get_TotalEvidenciasDebilidades= await pool.query('SELECT nombre_debilidades, count(id_debilidades) as cantevidenciasdebilidades FROM evidencias INNER JOIN debilidades ON evidencias.fk_id_debilidades = debilidades.id_debilidades where fk_id_usuario = $1 or fk_id_usuario_responsable = $1 or fk_id_usuario_dac = $1 and fecha_evidencia between $2 and $3 GROUP BY fk_id_debilidades, nombre_debilidades', [id, inicio,fin]);


        res.status(200).json({
            ok: true,
            resultado: get_TotalEvidenciasDebilidades.rows, 
        
        });
    
    } catch (error) {
        console.log("ERROR get_TotalEvidenciasDebilidades",error)
          res.status(400).json( {
        ok: false,
        msg: 'Error Get Unidad get_TotalEvidenciasDebilidades'
    }) 
    } 

}
const get_TotalEvidenciasCriterios = async(req, res) => {

    const {id, inicio, fin}=  req.params /* req.params.id */;
    console.log(id, 'id',inicio,'-',fin);
    try { 
         
        const get_TotalEvidenciasCriterios= await pool.query('SELECT nombre_criterios, count(id_criterios) as cantevidenciascriterios FROM evidencias INNER JOIN criterios ON evidencias.fk_id_criterios = criterios.id_criterios where fk_id_usuario = $1 or fk_id_usuario_responsable = $1 or fk_id_usuario_dac = $1 and fecha_evidencia between $2 and $3 GROUP BY fk_id_criterios, nombre_criterios', [id, inicio,fin]);


        res.status(200).json({
            ok: true,
            resultado: get_TotalEvidenciasCriterios.rows, 
        
        });
    
    } catch (error) {
        console.log("ERROR get_TotalEvidenciasCriterios",error)
          res.status(400).json( {
        ok: false,
        msg: 'Error Get Unidad get_TotalEvidenciasCriterios'
    }) 
    } 

}

const get_TotalEvidenciasAmbitoAcademico = async(req, res) => {

    const {id, inicio, fin}=  req.params /* req.params.id */;
    console.log(id, 'id',inicio,'-',fin);
    try { 
         
        const get_TotalEvidenciasAmbitoAcademico = await pool.query('SELECT nombre_ambito_academico, count(id_ambito_academico) as cantevidenciasambitoacademico FROM evidencias INNER JOIN ambito_academico ON evidencias.fk_id_ambito_academico = ambito_academico.id_ambito_academico where fk_id_usuario = $1 or fk_id_usuario_responsable = $1 or fk_id_usuario_dac = $1 and fecha_evidencia between $2 and $3 GROUP BY fk_id_ambito_academico, nombre_ambito_academico', [id, inicio,fin]);


        res.status(200).json({
            ok: true,
            resultado: get_TotalEvidenciasAmbitoAcademico .rows, 
        
        });
    
    } catch (error) {
        console.log("ERROR get_TotalEvidenciasAmbitoAcademico",error)
          res.status(400).json( {
        ok: false,
        msg: 'Error Get Unidad get_TotalEvidenciasAmbitoAcademico'
    }) 
    } 

}


const get_TotalEvidenciasAprobadasRechazadas = async(req, res) => {

    const {id, inicio, fin, idunidad}=  req.params /* req.params.id */;
    console.log(id, 'id',inicio,'-',fin);
    try { 
         
        const get_AprobadaRechazada= await pool.query('SELECT count(estado_evidencia_dac) as APROBADAS, (select count(*) from evidencias where estado_evidencia_responsable = 2 and fk_id_usuario_responsable = $1 or estado_evidencia_dac = 2 and fk_id_usuario_dac = $1 and estado_evidencia_dac = 2) as RECHAZADAS, (select count(estado_evidencia_dac) from evidencias INNER JOIN usuarios ON evidencias.fk_id_usuario_responsable = usuarios.rut where estado_evidencia_responsable = 0  and evidencias.fk_id_unidad = $4 and fecha_evidencia between $2 and $3 or estado_evidencia_dac = 0  and evidencias.fk_id_unidad = $4 and fk_id_rol = 4 and fecha_evidencia between $2 and $3) as PENDIENTES  FROM evidencias where  estado_evidencia_responsable = 1 and fk_id_usuario_responsable = $1 and fecha_evidencia between $2 and $3', [id, inicio, fin, idunidad]);
/* , (select count(*) from evidencias where estado_evidencia_dac = 2 or estado_evidencia_responsable = 2 and fk_id_usuario = $1) as rechazadas, (select count(estado_evidencia_dac) from evidencias where estado_evidencia_dac = 0 and estado_evidencia_responsable = 1  and fk_id_usuario_responsable = $1 and fecha_evidencia between $2 and $3) as enespera */

        res.status(200).json({
            ok: true,
            resultado: get_AprobadaRechazada.rows, 
        
        });
    
    } catch (error) {
        console.log("ERROR get_AprobadaRechazada",error)
          res.status(400).json( {
        ok: false,
        msg: 'Error Get Unidad get_AprobadaRechazada'
    }) 
    } 

}

const get_TotalUsuarios = async(req, res) => {

    const {inicio, fin}=  req.params /* req.params.id */;
    console.log(inicio,'-',fin);
    try { 
         
        const get_TotalUsuariosCreados= await pool.query('SELECT count(estado_evidencia_dac) as APROBADAS, (select count(*) from evidencias where estado_evidencia_responsable = 2 or estado_evidencia_dac = 2 and estado_evidencia_dac = 2 and fecha_evidencia between $1 and $2) as RECHAZADAS, (select count(estado_evidencia_dac) from evidencias INNER JOIN usuarios ON evidencias.fk_id_usuario_responsable = usuarios.rut where estado_evidencia_dac = 0 and fecha_evidencia between $1 and $2) as PENDIENTES  FROM evidencias where  estado_evidencia_responsable = 1 and estado_evidencia_dac = 1 and fecha_evidencia between $1 and $2', [inicio, fin]);
        res.status(200).json({
            ok: true,
            resultado: get_TotalUsuariosCreados.rows
        
        });
    } catch (error) {
        console.log("ERROR get_TotalUsuariosCreados",error)
          res.status(400).json( {
        ok: false,
        msg: 'Error Get get_TotalUsuariosCreados'
    }) 
    } 

}
module.exports = {
   
    get_TotalEvidencias,
    get_TotalEvidenciasUnidades,
    get_TotalEvidenciasTiposRegistros,
    get_TotalEvidenciasDebilidades,
    get_TotalEvidenciasCriterios,
    get_TotalEvidenciasAmbitoAcademico,
    get_TotalEvidenciasAprobadasRechazadas,
    get_TotalUsuarios

}