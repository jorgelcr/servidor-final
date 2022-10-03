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

    const id =  req.params.id;
    try { 
         
        const get_TotalEvidencias= await pool.query('SELECT count(id_evidencias) as cantevidencias FROM evidencias where fk_id_usuario = $1', [id]);
        const get_AprobadaRechazada= await pool.query('SELECT count(estado_evidencia_dac) as aprobadas, (select count(*) from evidencias where estado_evidencia_dac = 2 or estado_evidencia_responsable = 2 and fk_id_usuario = $1) as rechazadas, (select count(estado_evidencia_dac) from evidencias where estado_evidencia_dac = 0 and estado_evidencia_responsable = 1  and fk_id_usuario = $1 ) as enespera FROM evidencias where  estado_evidencia_dac = 1 and fk_id_usuario = $1', [id]);
        const get_AprobadaRechazadaResponsable= await pool.query('SELECT count(estado_evidencia_responsable) as aprobadas, (select count(*) from evidencias where estado_evidencia_responsable = 2 and fk_id_usuario_responsable = $1) as rechazadas, (select count(estado_evidencia_responsable) from evidencias where estado_evidencia_responsable = 0 ) as enespera FROM evidencias where  estado_evidencia_responsable = 1 and fk_id_usuario_responsable = $1', [id]);
        const get_AprobadaRechazadaDac= await pool.query('SELECT count(estado_evidencia_dac) as aprobadas, (select count(estado_evidencia_dac) from evidencias where estado_evidencia_dac = 2 and fk_id_usuario = $1) as rechazadas, (select count(estado_evidencia_dac) from evidencias where estado_evidencia_dac = 0 and estado_evidencia_responsable = 1) as enespera FROM evidencias where  estado_evidencia_dac = 1 and fk_id_usuario_dac = $1', [id]);
        const get_TotalEvidenciasDirector= await pool.query('SELECT count(id_evidencias) as cantevidencias FROM evidencias where fk_id_usuario = $1', [id]);
        const get_AprobadaRechazadaDirector= await pool.query('SELECT count(estado_evidencia_dac) as aprobadas, (select count(*) from evidencias where estado_evidencia_dac = 2 and fk_id_usuario = $1 or estado_evidencia_responsable = 2 and fk_id_usuario = $1) as rechazadas, (select count(estado_evidencia_dac) from evidencias where (estado_evidencia_dac = 0 and estado_evidencia_responsable = 1) or (estado_evidencia_dac = 0 and estado_evidencia_responsable = 0)  and fk_id_usuario = $1 ) as enespera FROM evidencias where  estado_evidencia_dac = 1 and fk_id_usuario = $1', [id]);
        const get_TotalUsuariosCreados= await pool.query('SELECT count(id_usuarios) as cantusuarioscreados, (select count(id_usuarios) from usuarios where estado = false) as cantusuariosactivos FROM usuarios ');
        res.status(200).json({
            ok: true,
            resultado: get_TotalEvidencias.rows, 
            resultado2: get_AprobadaRechazada.rows,
            resultado3: get_AprobadaRechazadaResponsable.rows,
            resultado4: get_AprobadaRechazadaDac.rows,
            resultado5: get_TotalEvidenciasDirector.rows,
            resultado6: get_AprobadaRechazadaDirector.rows,
            resultado7: get_TotalUsuariosCreados.rows
        
        });
    } catch (error) {
        console.log("ERROR get_TotalEvidencias",error)
          res.status(400).json( {
        ok: false,
        msg: 'Error Get Unidad get_TotalEvidencias'
    }) 
    } 

}

module.exports = {

    get_TotalEvidencias,

}