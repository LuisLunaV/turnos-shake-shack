const paginaIzquierda = document.querySelector(".pagina-izquierda ul");
const paginaDerecha = document.querySelector(".pagina-derecha ul");

// Inicializa un contador para realizar un seguimiento del número de tareas
let contadorNombres = 1;
// const imprimirNombresDisponibles = ({ id, Nombre }) => {
const imprimirNombresDisponibles = (arr) => {
  let contadorNombres = 0;
  arr.forEach((value) => {
    const nuevoNombre = `<li data-id='${value.id}'>${value.Nombre}</li>`;
    if (contadorNombres % 2 === 0) {
      paginaIzquierda.innerHTML += nuevoNombre;
    } else {
      paginaDerecha.innerHTML += nuevoNombre;
    }
    contadorNombres++;
  });
};

function limpiarListaDeTurnos() {
  paginaDerecha.innerHTML = "";
  paginaIzquierda.innerHTML = "";
}

function cantidadDeElementosList() {
  const numElementoIzq = paginaIzquierda.querySelectorAll("li").length;
  const numElementoDer = paginaDerecha.querySelectorAll("li").length;
  const elementosFaltantesIzq = 10 - numElementoIzq;
  const elementosFaltantesDer = 10 - numElementoDer;

  if (elementosFaltantesIzq > 0) {
    for (let i = 0; i < elementosFaltantesIzq; i++) {
      const nuevoLi = document.createElement("li");
      paginaIzquierda.appendChild(nuevoLi);
    }
  }

  if (elementosFaltantesDer > 0) {
    for (let i = 0; i < elementosFaltantesDer; i++) {
      const nuevoLi = document.createElement("li");
      paginaDerecha.appendChild(nuevoLi);
    }
  }
}

export {
  imprimirNombresDisponibles,
  limpiarListaDeTurnos,
  cantidadDeElementosList,
};
