import { addElementLiEmpty } from "../utils/add-element-li.js";
import { transitionOfDirectionY, transitionOfDirectionX } from "../utils/transitions-of-the-orders.js";

const nextOrders = document.querySelector("#ulOnHold");
const leftPage = document.querySelector(".pagina-izquierda ul");
const rigthPage = document.querySelector(".pagina-derecha ul");

// Mantén un registro de los IDs ya impresos
const printedIDs = [];

//Ordenes en espera.
const printOrdersOnHold = (data) => {
  let onHold = data.slice(0, 5);
  onHold.forEach((value) => {
    // Verifica si el ID ya se ha impreso antes
    if (!printedIDs.includes(value.id)) {
      const nameOfCustomer = `<li data-id='${value.id}'><p>${value.Nombre}</p></li>`;
      nextOrders.innerHTML += nameOfCustomer;
      // Agrega el ID al registro de IDs impresos
      printedIDs.push(value.id);
    }
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

const removeElementLi =( id )=>{
  // Obtén una referencia al elemento <li> que deseas eliminar utilizando su ID.
const liToDelete = nextOrders.querySelector(`li[data-id='${id}']`);

// Verifica si el elemento existe antes de intentar eliminarlo.
if (liToDelete) {
  liToDelete.classList.add("ocultar");
  // Utiliza el método removeChild() para eliminar el elemento <li> del <ul>.
  nextOrders.removeChild(liToDelete);
  // setTimeout(()=>{
    // nextOrders.removeChild(liToDelete);
  // },2000)
} 
}

function removeCustomerOfListReadyOrders() {
  rigthPage.innerHTML = "";
  leftPage.innerHTML = "";
};


export {
  removeElementLi,
  printOrdersOnHold,
  printReadyOrders,
  removeCustomerOfListReadyOrders,
};
