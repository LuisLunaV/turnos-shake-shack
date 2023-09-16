import { nombresDisponibles } from "./turnos.js";
const socket = io();

let nombres = [];
let cantidad = 0;
//Obtenesmos la respuesta del backend
socket.on('pedidos', ( clientes )=>{
    if( cantidad != clientes.length ){
      console.log(clientes)
      cantidad = clientes.length;
      return;
    }



//  console.log(nombre)
})
