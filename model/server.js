const express = require("express");
const cors = require("cors");
const { createDataBase } = require("../db/config.js");

const { socketController, consultarTabla } = require('../controller/socket.controller.js')

class Server {

    constructor() {
    this.app    = express();
    this.port   = process.env.PORT;
    this.server = require('http').createServer( this.app );
    this.io     = require('socket.io')(this.server);
    this.paths  = {
      turno: '/api/clientes'
    }
    //Ejecutamos los middlewares
    this.middlewares();

    //Ejecutamos el socket
    this.sockets();

    this.dataBase();

    this.router();
  }

  middlewares() {

    //CORS
    this.app.use( cors() );

    //Lectura y parseo del body
    this.app.use(express.json() );

    //Directorio publico
    this.app.use( express.static('public'));

  }

 async dataBase(){
    await createDataBase()
  }

  sockets(){
    this.io.on('connection', socketController);
  }

  router(){
    this.app.use( this.paths.turno, require('../routes/clientes.routes.js'))
  }

  listen() {
    this.server.listen( this.port, ()=>{
        console.log(`App leventada en el puerto:${this.port}`);
    });
  }
}

module.exports = {
  Server
}
