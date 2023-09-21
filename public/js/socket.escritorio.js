import { printNameAndTotalInQueue, noOrders } from "./components/escritorio.js";
const btnNext = document.querySelector(".btn-next");

const socket = io();

const customers = [];

let amountOfCustomers = 0;

socket.on("pedidos", ( customer ) => {
  if (amountOfCustomers != customer.length) {
    if (customers.length === 0 ) {
        customers.push(...customer);
       (customers[0])?printNameAndTotalInQueue(customers[0].Nombre, customers.length):'';
    }
    amountOfCustomers = customer.length;
  }
});

btnNext.addEventListener("click", () => {
  if (customers.length > 0) {
    const { id } = customers.shift();
    
    (customers.length > 0)?printNameAndTotalInQueue(customers[0].Nombre, customers.length):noOrders();
  
    socket.emit("siguiente-turno", id);
 
  }
});
