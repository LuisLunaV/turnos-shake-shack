//Agregamos elemento li faltantes en la lista izquierda o derecha
function addElementLiEmpty(page) {
  const usedLiEment = page.querySelectorAll("li").length;

  const availableItem = 10 - usedLiEment;

  if (availableItem > 0) {
    for (let i = 0; i < availableItem; i++) {
      const newElementLi = document.createElement("li");
      page.appendChild(newElementLi);
    }
  }
}

export { addElementLiEmpty };
