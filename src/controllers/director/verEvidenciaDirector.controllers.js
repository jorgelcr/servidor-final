const { Pool } = require('pg');
const {response} = require("express");


const config = {
       
    user: 'postgres',
    host: 'localhost',
    password: '7551',
    database: 'evidencias'
}
const pool = new Pool (config);


const get_Evidencia = async(req, res) => {

    try {  
        const id =  req.params.id;
        const selectEvidencias= await pool.query('SELECT id_evidencias, numero_folio, nombre_procesos, nombre_registros, nombre_debilidades, nombre_criterios, id_usuarios, id_rol, estado_evidencia_responsable, estado_evidencia_dac, revisado_dac, revisado_reponsable, id_unidad as idUnidades, nombres_usuario, usuarios.fk_id_unidad as idUnidadUsuario, evidencias.fk_id_unidad as idUnidadEvidencia FROM evidencias INNER JOIN procesos ON evidencias.fk_id_procesos = procesos.id_procesos INNER JOIN registros ON evidencias.fk_id_registros = registros.id_registros INNER JOIN debilidades ON evidencias.fk_id_debilidades = debilidades.id_debilidades INNER JOIN criterios ON evidencias.fk_id_criterios = criterios.id_criterios INNER JOIN usuarios ON evidencias.fk_id_usuario = usuarios.rut INNER JOIN rol ON usuarios.fk_id_rol = rol.id_rol INNER JOIN unidad ON evidencias.fk_id_unidad = unidad.id_unidad and usuarios.fk_id_rol = rol.id_rol where evidencias.fk_id_unidad = $1 and estado_evidencia_dac = 1 and revisado_dac = true ', [id]);
    
        res.status(200).json(selectEvidencias.rows);

    } catch (error) {
        console.log("EL ERROR ES: ",error)
          res.status(400).json( {
        ok: true,
        msg: 'Error Get Todas Evidencias '
    }) 
    }

}

const delete_evidencia = async (req, res) => {
    
    try {
        
        const id =  req.params.id;
        const deleteUsuario = await pool.query('DELETE FROM evidencias WHERE id_evidencias = $1', [id]);
        console.log(deleteUsuario);
        res.status(200).json(`Evidencia ${id} borrada Satisfactoriamente`);
    } catch (error) {
        console.log(error);
        res.status(400).json( {
            ok: true,
            msg: 'Error Delete Evidencia'
    })
    }

};

const get_Evidencia_Id = async (req, res) => {
    const id =  req.params.id;
    const data = await pool.query('select * FROM evidencias INNER JOIN procesos ON evidencias.fk_id_procesos = procesos.id_procesos INNER JOIN registros ON evidencias.fk_id_registros = registros.id_registros INNER JOIN debilidades ON evidencias.fk_id_debilidades = debilidades.id_debilidades INNER JOIN criterios ON evidencias.fk_id_criterios = criterios.id_criterios INNER JOIN ambito_geografico ON evidencias.fk_id_ambito_geografico = ambito_geografico.id_ambito_geografico INNER JOIN ambito_academico ON evidencias.fk_id_ambito_academico  = ambito_academico.id_ambito_academico INNER JOIN unidad ON evidencias.fk_id_unidad  = unidad.id_unidad JOIN usuarios ON evidencias.fk_id_usuario = usuarios.rut INNER JOIN rol ON usuarios.fk_id_rol = rol.id_rol WHERE id_evidencias = $1', [id]);
    res.status(200).json(data.rows);  
};  

const update_EvidenciaDirector= async (req, res) => {
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
module.exports = {

    get_Evidencia,
    delete_evidencia,
    get_Evidencia_Id,
    update_EvidenciaDirector,
}