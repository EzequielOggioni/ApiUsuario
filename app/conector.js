var mysql = require('mysql');
var md5 = require('md5');

 var conexion =  mysql.createConnection({
    host: 'localhost',
    user: 'negocio',
    password: '123456',
    database: 'negocio'
    });

function conectar(){

    conexion.connect(function(err){
        if(err) console.log(err);
        else{
            console.log("conexion exitosa");
        }
    })
}


exports.buscarPersonas = function(){
    conectar();
    conexion.query("select * from usuario", function(err, resultado, filas){
        if(err) throw err;
        console.log(resultado);
        

    } );
    
}



exports.insertarPersona = function(usuario){
    conectar();
    var sql = "insert into usuario (Nombre,Apellido,FecNac,Usuario,Password)";
    sql= sql + " values ('" + usuario.nombre + "',";
    sql= sql + "'" + usuario.apellido + "',";
    sql= sql + "'" + usuario.nacimiento + "',";
    sql= sql + "'" + usuario.usuario + "',";
    sql= sql + "'" + md5("clavesupersecreta" + usuario.password) + "')";
     

    conexion.query(sql,
     function(err, resultado, filas){
        if(err) throw err;
        console.log(resultado);
        

    } );
    
}



exports.buscarPersona = function(usuario,res){
    conectar();
    var sql = "select * from usuario ";
    sql= sql + "where usuario = '" + usuario.usuario + "'";
    sql= sql + " and  password = '" + md5("clavesupersecreta" + usuario.password) + "' ";
    conexion.query(sql,
     function(err, resultado, filas){
        if(err) throw err;
        res.json( resultado);
    } );
    
}