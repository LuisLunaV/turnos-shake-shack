const leftPage = document.querySelector(".pagina-izquierda ul");
const rigthPage   = document.querySelector(".pagina-derecha ul");

const printCustomerList = (arr) => {
  let positionNumber = 0;
  arr.forEach((value) => {
    const nameOfCustomer = `<li data-id='${value.id}'>${value.Nombre}</li>`;
    if (positionNumber % 2 === 0) {
      leftPage.innerHTML  += nameOfCustomer;
    } else {
      rigthPage.innerHTML += nameOfCustomer;
    }
    positionNumber++;
  });
};

function removeCustomerOfList() {
  rigthPage.innerHTML = "";
  leftPage.innerHTML  = "";
}

function addEmptyElementToList() {
  //Contamos los elemento li ocupados de la lista ul.
  const usedLiEmentsLeft  = leftPage.querySelectorAll("li").length;
  const usedLiEmentsRigth = rigthPage.querySelectorAll("li").length;

  //Obtenemos la cantidad de elemento li faltantes en cada una de las listas ul.
  // Cada ul debe tener 10 elementos li: 10 menos cantida de elementos li ocupados
  const leftAvailableLiElemnt  = 10 - usedLiEmentsLeft;  
  const rigthAvailableLiElemnt = 10 - usedLiEmentsRigth;
  
  //Agregamos elemento li faltantes en la lista izquierda
  if (leftAvailableLiElemnt > 0) {
    for (let i = 0; i < leftAvailableLiElemnt; i++) {
      const newElementLi = document.createElement("li");
      leftPage.appendChild( newElementLi );
    }
  }

  //Agregamos elemento li faltantes en la lista derecha
  if (rigthAvailableLiElemnt > 0) {
    for (let i = 0; i < rigthAvailableLiElemnt; i++) {
      const newElementLi = document.createElement("li");
      rigthPage.appendChild( newElementLi );
    }
  }
}

export {
  printCustomerList,
  removeCustomerOfList,
  addEmptyElementToList,
};
