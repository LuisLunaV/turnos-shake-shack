import { printOrdersOnHold,printReadyOrders,removeCustomerOfList,addEmptyElementToList } from "./components/publico.js";
import { firstTwenty } from "./utils/first-twenty.js";

const socket = io();
const nameOfThePage = window.location.pathname;

socket.on("pedidos", ( orders ) => {
    const customers = firstTwenty( orders );

      if (nameOfThePage === "/publico.html") {

        const ordersOnHold = customers.filter( value => value.status === 0 );
        const readyOrders  = customers.filter( value => value.status === 1 ).reverse();
        
        //Quitamos el primer elemento de la lista ordenes en espera.
        setInterval(()=>{
          const readyOrder = ordersOnHold.shift();
          if(!readyOrder)return;
          socket.emit("orden-lista", readyOrder.id);
        },20000)

        //Quitamos el primer elemento de la lista de ordenes listas.
        setInterval(()=>{
          const deleteOrder = readyOrders.pop();
          if(!deleteOrder)return;
          socket.emit("quitar-orden", deleteOrder.id);
        },60000)

      //Pintamos los pedidos en las listas de ordenes en espera y ordenes listas.
      removeCustomerOfList();
      printOrdersOnHold( ordersOnHold );
      printReadyOrders( readyOrders );
      addEmptyElementToList();
      return;
    }

});
