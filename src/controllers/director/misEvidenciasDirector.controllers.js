const { Pool } = require('pg');
const {response} = require("express");


const config = {
       
    user: 'postgres',
    host: 'localhost',
    password: '7551',
    database: 'evidencias'
}
const pool = new Pool (config);


const get_Evidencia_Director = async(req, res) => {

    try {  
        const id =  req.params.id;
        const selectEvidenciasDirector= await pool.query('SELECT id_evidencias, numero_folio, fecha_evidencia, fk_id_registros, fk_id_procesos, nombre_procesos, nombre_registros, nombre_unidad, nombre_ambito_academico, estado_evidencia_responsable, estado_evidencia_dac, revisado_reponsable, revisado_dac, vigente_responsable FROM evidencias INNER JOIN procesos ON evidencias.fk_id_procesos = procesos.id_procesos INNER JOIN registros ON evidencias.fk_id_registros = registros.id_registros INNER JOIN usuarios ON evidencias.fk_id_usuario = usuarios.rut INNER JOIN rol ON usuarios.fk_id_rol = rol.id_rol INNER JOIN ambito_academico ON evidencias.fk_id_ambito_academico = ambito_academico.id_ambito_academico INNER JOIN unidad ON evidencias.fk_id_unidad = unidad.id_unidad where evidencias.fk_id_usuario = $1 and usuarios.fk_id_rol = 5' , [id] );
     //   const selectEvidenciasDirector= await pool.query('SELECT id_evidencias FROM evidencias INNER JOIN procesos ON evidencias.fk_id_procesos = procesos.id_procesos INNER JOIN registros ON evidencias.fk_id_registros = registros.id_registros INNER JOIN estados ON evidencias.fk_id_estado = estados.id_estados INNER JOIN usuarios ON evidencias.fk_id_usuario = usuarios.id_usuarios INNER JOIN rol ON usuarios.fk_id_rol = rol.id_rol INNER JOIN ambito_academico ON evidencias.fk_id_ambito_academico = ambito_academico.id_ambito_academico INNER JOIN unidad ON evidencias.fk_id_unidad = unidad.id_unidad where usuarios.fk_id_rol = 5');
        res.status(200).json(selectEvidenciasDirector.rows);

    } catch (error) {
        console.log("EL ERROR ES: ",error)
          res.status(400).json( {
        ok: true,
        msg: 'Error Get Todas Evidencias '
    }) 
    }

}

const delete_Mi_evidencia_director = async (req, res) => {
    
    try {
        
        const id =  req.params.id;
        const deleteUsuario = await pool.query('DELETE FROM evidencias USING usuarios, rol WHERE evidencias.fk_id_usuario = usuarios.id_usuarios and usuarios.fk_id_rol = rol.id_rol and id_evidencias = $1 and id_rol = 5 ', [id]);
        console.log(deleteUsuario);
        res.status(200).json(`Evidencia ${id} borrada Satisfactoriamente`);
    } catch (error) {
        console.log(error);
        res.status(400).json( {
            ok: false,
            msg: 'Error Delete Evidencia del Director'
    })
    }

};

module.exports = {

get_Evidencia_Director,
delete_Mi_evidencia_director

}