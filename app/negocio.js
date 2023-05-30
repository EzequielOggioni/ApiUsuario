var conector = require('./conector')


exports.mensaje = function(){
    conector.buscarPersonas();
    return 'hola mundo2';
}

exports.insertar = function(usuario){
    conector.insertarPersona(usuario);
    
}

exports.login = function(usuario, res){
    return conector.buscarPersona(usuario, res);
}
