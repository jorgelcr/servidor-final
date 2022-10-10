/* la respuesta es irte a la carpeta raiz con 'cd /' luego hacer cd a 
"C:\Program Files\PostgreSQL\9.5\bin>" y ahi poner ".\psql -d nombre de la bd -U postgres -W"
 */

const express = require('express');
const app = express();
const cors = require('cors');
const  path  = require('path');

require('dotenv').config();


app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors());
///Rutas
//########################## ADMINISTRADOR ####################################
app.use('/api/unidad', require('./routes/routes-administrador/unidad.js'));
app.use('/api/criterio', require('./routes/routes-administrador/criterios.js'));
app.use('/api/proceso', require('./routes/routes-administrador/procesos.js'));
app.use('/api/tiporegistro', require('./routes/routes-administrador/tiposDeRegistros.js'));
app.use('/api/ambitoacademico', require('./routes/routes-administrador/ambitoAcademico.js'));
app.use('/api/usuario', require('./routes/routes-administrador/usuario.js'));
app.use('/api/debilidad', require('./routes/routes-administrador/debilidad.js'));
app.use('/api/ambitogeografico', require('./routes/routes-administrador/ambitoGeografico.js'));


//########################## DIRECTOR ####################################
 
app.use('/api/director', require('./routes/routes-director/guardarEvidenciaDirector.js'));
app.use('/api/ver-director', require('./routes/routes-director/verEvidenciaDirector'));
app.use('/api/misEvidencias-director', require('./routes/routes-director/misEvidenciasDirector'));

  
//########################## USUARIO-RESPONSABLE ####################################
  
app.use('/api/ver-responsable', require('./routes/routes-responsable/verEvidenciasResponsable'));
app.use('/api/guardarEvidenciasResponsable', require('./routes/routes-responsable/guardarEvidenciaResponsable'));
 

//########################## USUARIO-DAC ####################################
  
app.use('/api/ver-dac', require('./routes/routes-dac/verEvidenciasDac'));
app.use('/api/aprobarRechazarEvidenciaDac', require('./routes/routes-dac/aprobarRechazarEvidenciaDac'));
 

//########################## LOGIN ####################################
  
app.use('/api/login', require('./routes/routes-login/login'));


//########################## USUARIO-NORMAL ####################################

app.use('/api/misEvidencias-usuarionormal', require('./routes/routes-usuarioNormal/misEvidenciasUsuarioNormal.js'));
app.use('/api/usuarionormal', require('./routes/routes-usuarioNormal/guardarEvidenciaUsuarioNormal.js'));
app.use('/api/mi-perfil', require('./routes/routes-usuarioNormal/mi-perfil.js'));

//########################## GRAFICOS #######################################

app.use('/api/graficos', require('./routes/routes-graficosGlobales/graficos.js'));

//################################ PUBLIC ######################################
app.use( express.static('src/public'));

app.get('*', ( req, res ) => {
    res.sendFile( path.resolve(__dirname, 'public/index.html'))
})

app.listen(process.env.PORT  , () =>{
    console.log(`servidor en puerto: ${process.env.PORT } `)

});
/* const PORT = process.env.PORT || 4000 */

/* app.listen(PORT, function(){
    console.log("Servidor listen onsdsds port: ", PORT)
}) */

//app.listen(3000)