var express = require('express');
var cors = require('cors');
var negocio = require('./negocio');


var app = express();
app.use(cors());
app.use(express.json());

app.post('/loguear/', (req, res)=>{
    var usuario = req.body;
    res.json(negocio.buscarUsuario(usuario));
    
});

app.post('/usuario/', (req, res)=>{
    var usuario = req.body;
    res.json(negocio.insertar(usuario));
    res.json(negocio.mensaje());
});
app.post('/login/', (req, res)=>{
    var usuario = req.body;
    negocio.login(usuario,res);
    
});

app.listen(7200, ()=>{
    console.log('escuchando el puerto');
})