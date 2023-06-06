var conector = require('./conector')
var jwt = require('jsonwebtoken');

exports.mensaje = function () {
    conector.buscarPersonas();
    return 'hola mundo2';
}

exports.insertar = function (usuario) {
    conector.insertarPersona(usuario);

}

exports.login = function (usuario, res) {
    conector.buscarPersona(usuario, usu => res.json(crearToken(usu)));
}

function crearToken(usuario){
    
    if (usuario.length == 1) {
        usuario = {
            token: jwt.sign({
                //una hora y expira
                exp: Math.floor(Date.now() / 1000) + (60 * 60),
                data: usuario
            }, "clavesupersecreta")};
        
        return usuario;
    } else{

        return {token:""};
    }

}
