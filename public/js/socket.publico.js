import { printReadyOrders, removeElementLi, removeCustomerOfListReadyOrders, addEmptyElementToList } from "./components/publico.js";
import { firstTwenty } from "./utils/first-twenty.js";

const socket = io();
const nameOfThePage = window.location.pathname;

let counterReadyOrderds = 0;
let interval1 = null; // Variable para el primer setInterval
let interval2 = null; // Variable para el segundo setInterval

socket.on("pedidos", (orders) => {
  
  if (nameOfThePage === "/publico.html") {
    const customers = firstTwenty(orders).reverse();
 
    // Controlamos cuál setInterval se debe activar o desactivar según la condición.
    if (customers.length < 3 && customers.length > 0) {
      clearInterval(interval2); // Detener el segundo setInterval
      interval1 = setInterval(() => {
        const deleteOrder = customers.pop();
        if(typeof deleteOrder != 'undefined'){
          socket.emit("quitar-orden", deleteOrder.id);
          return;
        }
        
      }, 15000);

    }else{
      clearInterval(interval1); // Detener el primer setInterval
      interval2 = setInterval(() => {
        const deleteOrder = customers.pop();
        if (typeof deleteOrder != 'undefined'){
          socket.emit("quitar-orden", deleteOrder.id);
          return;
        }

      }, 20000);

    }

    // Imprimimos los pedidos en las listas de ordenes en espera y ordenes listas.
    if (counterReadyOrderds != customers.length) {
      removeCustomerOfListReadyOrders();
      printReadyOrders(customers);
      addEmptyElementToList();
      counterReadyOrderds = customers.length;
    }
  }
});
