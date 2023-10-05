import { printOrdersOnHold, printReadyOrders, removeCustomerOfListOnHold, removeCustomerOfListReadyOrders, addEmptyElementToList } from "./components/publico.js";
import { firstTwenty } from "./utils/first-twenty.js";

const socket = io();
const nameOfThePage = window.location.pathname;

let counterOnHold = 0;
let counterReadyOrderds = 0;

socket.on("pedidos", (orders) => {
  const customers = firstTwenty(orders);

  if (nameOfThePage === "/publico.html") {
    const ordersOnHold = customers.filter((value) => value.status === 0);
    const readyOrders = customers.filter((value) => value.status === 1).reverse();
    
    //Quitamos el primer elemento de la lista ordenes en espera.
    setInterval(() => {
      const readyOrder = ordersOnHold.shift();
      if (!readyOrder) return;
      socket.emit("orden-lista", readyOrder.id);
    }, 21000);

    //Quitamos el primer elemento de la lista de ordenes listas.
    setInterval(() => {
      const deleteOrder = readyOrders.pop();
      if (!deleteOrder) return;
      socket.emit("quitar-orden", deleteOrder.id);
    }, 50000);


    //Imprimimos los pedidos en las listas de ordenes en espera y ordenes listas.
   /** Controlamos que no se esten imprimiendo los nombres de los clientes cada segundo en el DOM. 
    Solo se imprimiran dependiendo el tiempo establecido de sus cambios de status*/
    if (counterOnHold != ordersOnHold.length){
    removeCustomerOfListOnHold();
    printOrdersOnHold(ordersOnHold);
    addEmptyElementToList();
    counterOnHold = ordersOnHold.length;
  }

    if (counterReadyOrderds != readyOrders.length){
    removeCustomerOfListReadyOrders();
    console.log('cambio')
    printReadyOrders(readyOrders);
    addEmptyElementToList();
    counterReadyOrderds = readyOrders.length;
  }

    return;
  }
});
