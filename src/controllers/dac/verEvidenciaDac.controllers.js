const { Pool } = require('pg');
const {response} = require("express");


const config = {
       
    user: 'postgres',
    host: 'localhost',
    password: '7551',
    database: 'evidencias'
}
const pool = new Pool (config);

  
const get_Evidencia_Dac = async(req, res) => {

    try {  
        const {id, dac}=  req.params /* req.params.id */;

        console.log(id, "--", dac)
       // const {  fk_id_usuario_dac } = req.body;
        const selectEvidenciasDac= await pool.query('select e.*, un.nombre_unidad , u.rut, u.nombres_usuario, cr.nombre_criterios , pro.nombre_procesos, reg.nombre_registros, debi.nombre_debilidades from evidencias e join usuarios u on u.rut = e.fk_id_usuario join unidad un on un.id_unidad = e.fk_id_unidad INNER JOIN criterios cr on e.fk_id_criterios = cr.id_criterios INNER JOIN procesos pro on e.fk_id_procesos = pro.id_procesos INNER JOIN registros reg on e.fk_id_registros = reg.id_registros INNER JOIN debilidades debi on e.fk_id_debilidades = debi.id_debilidades where e.fk_id_unidad = $1 and vigente_responsable = true and estado_evidencia_responsable = 1 and revisado_reponsable = true and estado_evidencia_dac = 0 or e.fk_id_unidad = $1  and fk_id_usuario_dac = $2 and vigente_responsable = true and estado_evidencia_responsable = 1', [id, dac]);
       //  const selectEvidenciasDac= await pool.query('SELECT * FROM evidencias INNER JOIN unidad on evidencias.fk_id_unidad = unidad.id_unidad INNER JOIN usuarios on evidencias.fk_id_unidad = usuarios.fk_id_unidad INNER JOIN criterios on evidencias.fk_id_criterios = criterios.id_criterios INNER JOIN procesos on evidencias.fk_id_procesos = procesos.id_procesos INNER JOIN registros on evidencias.fk_id_registros = registros.id_registros INNER JOIN debilidades on evidencias.fk_id_debilidades = debilidades.id_debilidades WHERE usuarios.rut = $1', [id]);
        res.status(200).json( selectEvidenciasDac.rows);
 
    } catch (error) {
        console.log("EL ERROR ES selectEvidenciasDac: ",error)
          res.status(400).json( {
        ok: false,
        msg: 'Error Get Todas Evidencias '
    }) 
    }

}

module.exports = {

    get_Evidencia_Dac,

}