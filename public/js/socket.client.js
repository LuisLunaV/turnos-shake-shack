import { nombresDisponibles } from "./publico.js";
const socket = io();
const nombrePagina = window.location.pathname;

let cantidad = 0;
let nombres = [];

socket.on('pedidos', ( clientes )=>{

    if( cantidad != clientes.length ){
      if( nombrePagina === '/publico.html')
      clientes.forEach(( value ) => {
           nombresDisponibles( value );
      });
      cantidad = clientes.length;
      return;
    }

});
