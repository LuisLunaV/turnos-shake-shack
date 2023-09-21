import {
  printCustomerList,
  removeCustomerOfList,
  addEmptyElementToList,
} from "./components/publico.js";
import { firstTwenty } from "./utils/primeros-diez.js";

const socket = io();
const nameOfThePage = window.location.pathname;

let amountOfCustomers = 0;

socket.on("pedidos", ( orders ) => {
  if (amountOfCustomers != orders.length) {
    const customers = firstTwenty( orders );

    if (nameOfThePage === "/publico.html") {
      removeCustomerOfList();
      printCustomerList( customers )
      amountOfCustomers = orders.length;
      addEmptyElementToList();
      return;
    }
  }
});
