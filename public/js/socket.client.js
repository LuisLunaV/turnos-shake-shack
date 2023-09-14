const socket = io();

const txtMensaje = document.querySelector('#txtMensaje');
const btnEnviar = document.querySelector('#enviar');

//Obtenesmos la respuesta del backend
socket.on('pedidos', ( clientes )=>{
    console.log(clientes)
})