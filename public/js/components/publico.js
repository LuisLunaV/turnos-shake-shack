import { transitionOfDirectionY } from "../utils/transitions-of-the-orders.js";
import { addElementLiEmpty } from "../utils/add-element-li.js";

const leftPage = document.querySelector(".pagina-izquierda ul");
const rigthPage = document.querySelector(".pagina-derecha ul");

//Ordenes listas.
const printReadyOrders = (data) => {
  let readyOrders = data.slice(-20);
  
  //Imprimimos el elemento en la lista dependiendo el numero de posicion asignado.
  readyOrders.forEach((value, index) => {
 
    const nameOfCustomer = `<li data-id='${index}'><p>${value.Nombre}</p></li>`;
 
    if (index % 2 === 0) {
      leftPage.innerHTML += nameOfCustomer;
    } else {
      rigthPage.innerHTML += nameOfCustomer;
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
