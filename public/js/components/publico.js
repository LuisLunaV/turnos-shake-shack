import { addElementLiEmpty } from "../utils/add-element-li.js";
import { transitionOfDirectionY, transitionOfDirectionX } from "../utils/transitions-of-the-orders.js";

const nextOrders = document.querySelector(".libreta-en-espera ul");
const leftPage = document.querySelector(".pagina-izquierda ul");
const rigthPage = document.querySelector(".pagina-derecha ul");

//Ordenes en espera.
const printOrdersOnHold = (data) => {
  let onHold = data.slice(0, 5);

  onHold.forEach((value) => {
    const nameOfCustomer = `<li data-id='${value.id}'><p>${value.Nombre}</p></li>`;
    nextOrders.innerHTML += nameOfCustomer;
  });
  //Agreganis la transicion al elemento li.
  transitionOfDirectionY(nextOrders);
};

//Ordenes listas.
const printReadyOrders = (data) => {
  let readyOrders = data.slice(-10);
  let positionNumber = 0;
  //Imprimimos el elemento en la lista dependiendo el numero de posicion asignado.
  readyOrders.forEach((value) => {
    const nameOfCustomer = `<li data-id='${value.id}'><p>${value.Nombre}</p></li>`;
    if (positionNumber % 2 === 0) {
      leftPage.innerHTML += nameOfCustomer;
    } else {
      rigthPage.innerHTML += nameOfCustomer;
    }

    //Agreganis la transicion al elemento li.
    transitionOfDirectionX(leftPage);
    transitionOfDirectionX(rigthPage);

    positionNumber++;
  });
};

function removeCustomerOfListOnHold() {
  nextOrders.innerHTML = "";
};

function removeCustomerOfListReadyOrders() {
  rigthPage.innerHTML = "";
  leftPage.innerHTML = "";
};

function addEmptyElementToList() {
  addElementLiEmpty(nextOrders);
  addElementLiEmpty(leftPage);
  addElementLiEmpty(rigthPage);
};

export {
  printOrdersOnHold,
  printReadyOrders,
  removeCustomerOfListOnHold,
  removeCustomerOfListReadyOrders,
  addEmptyElementToList,
};
