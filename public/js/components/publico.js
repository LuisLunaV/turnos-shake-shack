import { addElementLiEmpty } from "../utils/add-element-li.js";
const nextOrders = document.querySelector(".libreta-en-espera ul");
const leftPage = document.querySelector(".pagina-izquierda ul");
const rigthPage = document.querySelector(".pagina-derecha ul");

//Ordenes en espera.
const printOrdersOnHold = (data) => {

  let onHold = data.slice(0, 8);
  onHold.forEach((value) => {
    const nameOfCustomer = `<li data-id='${value.id}'><p>${value.Nombre}</p></li>`;
    // Agregamos el nuevo elemento 'nameOfCustomer' al principio del contenido existente.
    nextOrders.innerHTML = nameOfCustomer + nextOrders.innerHTML;
  });
};

//Ordenes listas.
const printReadyOrders = (data) => {
  let readyOrders = data.slice(-16);
  let positionNumber = 0;
  //Imprimimos el elemento en la lista dependiendo el numero de posicion asignado.
  readyOrders.forEach((value) => {
    const nameOfCustomer = `<li data-id='${value.id}'><p>${value.Nombre}</p></li>`;
    if (positionNumber % 2 === 0) {
      leftPage.innerHTML += nameOfCustomer;
    } else {
      rigthPage.innerHTML += nameOfCustomer;
    }
    positionNumber++;
  });
};

function removeCustomerOfList() {
  nextOrders.innerHTML = "";
  rigthPage.innerHTML = "";
  leftPage.innerHTML = "";
}

function addEmptyElementToList() {
  addElementLiEmpty(nextOrders);
  addElementLiEmpty(leftPage);
  addElementLiEmpty(rigthPage);
}

export {
  printOrdersOnHold,
  printReadyOrders,
  removeCustomerOfList,
  addEmptyElementToList,
};
