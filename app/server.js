var express = require('express');
var cors = require('cors');
var jwt = require('jsonwebtoken');
var negocio = require('./negocio');


var app = express();
app.use(cors());
app.use(express.json());

app.post('/loguear/', (req, res) => {
    var usuario = req.body;
    res.json(negocio.buscarUsuario(usuario));

});

app.post('/usuario/', (req, res) => {
    var token = req.headers.authorization;
    console.log(req.headers);

    if ((!token) || token.indexOf("Bearer ") == -1) res.sendStatus(401);
    try {
        
         jwt.verify(token.replace("Bearer ", ""), "clavesupersecreta")
    } catch (error) {
        
         res.sendStatus(401);
    }
    var usuario = req.body;
    //res.json(negocio.insertar(usuario));
    res.json(negocio.mensaje());
});
app.post('/login/', (req, res) => {
    var usuario = req.body;
    negocio.login(usuario, res);
});

app.listen(7200, () => {
    console.log('escuchando el puerto');
})