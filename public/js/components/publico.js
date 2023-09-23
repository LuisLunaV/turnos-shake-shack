import { addElementLiEmpty } from "../utils/add-element-li.js";
const nextOrders = document.querySelector(".libreta-en-espera ul");
const leftPage   = document.querySelector(".pagina-izquierda ul");
const rigthPage  = document.querySelector(".pagina-derecha ul");

const printCustomerList = (data) => {

  //Tomamos los ultimos 8 nombres para agregarlos en la lista de 'en espera - onhold'
  let onHold = data.slice(-8);
  
  onHold.forEach((value) => {
    const nameOfCustomer = `<li data-id='${value.id}'><p>${value.Nombre}</p></li>`;    
    // Agregamos el nuevo elemento 'nameOfCustomer' al principio del contenido existente. 
    nextOrders.innerHTML = nameOfCustomer + nextOrders.innerHTML;
  });
  
  if (onHold.length === 8) {
    //Invertimos los elementos del arreglo para irlos imprimiendo de la manera requerida, de arriba hacia abajo. 
    let readyOrders = data.slice(0, data.length - 8).reverse();

    //Imprimimos el elemnto en la lista dependiendo el numero de posicion asignado.
    let positionNumber = 0;
    readyOrders.forEach((value) => {
      const nameOfCustomer = `<li data-id='${value.id}'><p>${value.Nombre}</p></li>`;
      if (positionNumber % 2 === 0) {
        leftPage.innerHTML += nameOfCustomer;
      } else {
        rigthPage.innerHTML += nameOfCustomer;
      }
      positionNumber++;
    });
  }
};

function removeCustomerOfList() {
  nextOrders.innerHTML = "";
  rigthPage.innerHTML  = "";
  leftPage.innerHTML   = "";
}

function addEmptyElementToList() {
  addElementLiEmpty(nextOrders);
  addElementLiEmpty(leftPage);
  addElementLiEmpty(rigthPage);
}

export { printCustomerList, removeCustomerOfList, addEmptyElementToList };
