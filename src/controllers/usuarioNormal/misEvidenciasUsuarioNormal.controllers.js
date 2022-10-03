const { Pool } = require('pg');
const {response} = require("express");


const config = {
       
    user: 'postgres',
    host: 'localhost',
    password: '7551',
    database: 'evidencias'
}
const pool = new Pool (config);


const get_Evidencia_UsuarioNormal = async(req, res) => {

    try {  
        const id =  req.params.id;
        const selectEvidenciasDirector= await pool.query('SELECT id_evidencias, numero_folio, fecha_evidencia, fk_id_registros, fk_id_procesos, nombre_procesos, nombre_registros, nombre_unidad, nombre_ambito_academico, estado_evidencia_responsable, estado_evidencia_dac, revisado_reponsable, revisado_dac FROM evidencias INNER JOIN procesos ON evidencias.fk_id_procesos = procesos.id_procesos INNER JOIN registros ON evidencias.fk_id_registros = registros.id_registros INNER JOIN usuarios ON evidencias.fk_id_usuario = usuarios.rut INNER JOIN rol ON usuarios.fk_id_rol = rol.id_rol INNER JOIN ambito_academico ON evidencias.fk_id_ambito_academico = ambito_academico.id_ambito_academico INNER JOIN unidad ON evidencias.fk_id_unidad = unidad.id_unidad where evidencias.fk_id_usuario = $1 and usuarios.fk_id_rol = 2' , [id] );
   
        res.status(200).json(selectEvidenciasDirector.rows);

    } catch (error) {
        console.log("EL ERROR get_Evidencia_UsuarioNormal ES: ",error)
          res.status(400).json( {
        ok: true,
        msg: 'Error Get Todas Evidencias '
    }) 
    }

}

const delete_Mi_evidencia_UsuarioNormal = async (req, res) => {
    
    try {
        
        const id =  req.params.id;
        const deleteUsuario = await pool.query('DELETE FROM evidencias USING usuarios, rol WHERE evidencias.fk_id_usuario = usuarios.rut and usuarios.fk_id_rol = rol.id_rol and id_evidencias = $1 and id_rol = 2 ', [id]);
        console.log(deleteUsuario);
        res.status(200).json(`Evidencia ${id} borrada Satisfactoriamente`);
    } catch (error) {
        console.log(error);
        res.status(400).json( {
            ok: false,
            msg: 'Error Delete Evidencia del delete_Mi_evidencia_UsuarioNormal'
    })
    }

};

const get_Evidencia_Id = async (req, res) => {
    const id =  req.params.id;
    const data = await pool.query('select *, evidencias.fk_id_unidad as id_unidad_evidencia FROM evidencias INNER JOIN procesos ON evidencias.fk_id_procesos = procesos.id_procesos INNER JOIN registros ON evidencias.fk_id_registros = registros.id_registros INNER JOIN debilidades ON evidencias.fk_id_debilidades = debilidades.id_debilidades INNER JOIN criterios ON evidencias.fk_id_criterios = criterios.id_criterios INNER JOIN ambito_geografico ON evidencias.fk_id_ambito_geografico = ambito_geografico.id_ambito_geografico INNER JOIN ambito_academico ON evidencias.fk_id_ambito_academico  = ambito_academico.id_ambito_academico INNER JOIN unidad ON evidencias.fk_id_unidad  = unidad.id_unidad JOIN usuarios ON evidencias.fk_id_usuario = usuarios.rut INNER JOIN rol ON usuarios.fk_id_rol = rol.id_rol WHERE id_evidencias = $1', [id]);
    res.status(200).json(data.rows);  
};  



module.exports = {

get_Evidencia_UsuarioNormal,
delete_Mi_evidencia_UsuarioNormal,
get_Evidencia_Id,


}