import {  printReadyOrders, removeElementLi, removeCustomerOfListReadyOrders, addEmptyElementToList } from "./components/publico.js";
import { firstTwenty } from "./utils/first-twenty.js";

const socket = io();
const nameOfThePage = window.location.pathname;

let counterReadyOrderds = 0;

socket.on("pedidos", (orders) => {
  const customers = firstTwenty(orders).reverse();

  if (nameOfThePage === "/publico.html") {
   
    //Quitamos el primer elemento de la lista de ordenes listas.
    setInterval(() => {
      const deleteOrder = customers.pop();
      if (!deleteOrder) return;
      socket.emit("quitar-orden", deleteOrder.id);
    }, 40000);


    //Imprimimos los pedidos en las listas de ordenes en espera y ordenes listas.
   /** Controlamos que no se esten imprimiendo los nombres de los clientes cada segundo en el DOM. 
    Solo se imprimiran dependiendo el tiempo establecido de sus cambios de status*/

    if (counterReadyOrderds != customers.length){
    removeCustomerOfListReadyOrders();
    printReadyOrders(customers);
    addEmptyElementToList();
    counterReadyOrderds = customers.length;
  }

  }
});
