import { transitionOfDirectionY } from "../utils/transitions-of-the-orders.js";
import { addElementLiEmpty } from "../utils/add-element-li.js";
const leftPage = document.querySelector(".pagina-izquierda ul");
const rigthPage = document.querySelector(".pagina-derecha ul");

//Ordenes listas.
const printReadyOrders = (data) => {
  let readyOrders = data.slice(-19);
  //Imprimimos el elemento en la lista dependiendo el numero de posicion asignado.
  readyOrders.forEach((value) => {
    const nameOfCustomer = `<li data-id='${value.id}'><p>${value.Nombre}</p></li>`;
    if (value.id % 2 === 0) {
      rigthPage.innerHTML += nameOfCustomer;
    } else {
      leftPage.innerHTML += nameOfCustomer;
    }
    transitionOfDirectionY(rigthPage);
    transitionOfDirectionY(leftPage);
  });
};

const removeElementLi = (id) => {
  const liToDelete = nextOrders.querySelector(`li[data-id='${id}']`);
  if (liToDelete) {
    liToDelete.classList.add("ocultar");
    setTimeout(() => {
      nextOrders.removeChild(liToDelete);
    }, 500);
  }
};

function removeCustomerOfListReadyOrders() {
  rigthPage.innerHTML = "";
  leftPage.innerHTML = "";
}

function addEmptyElementToList() {
  addElementLiEmpty(leftPage);
  addElementLiEmpty(rigthPage);
}

export {
  removeElementLi,
  printReadyOrders,
  removeCustomerOfListReadyOrders,
  addEmptyElementToList,
};
