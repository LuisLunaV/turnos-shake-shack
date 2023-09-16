const paginaIzquierda = document.querySelector(".pagina-izquierda ul");
const paginaDerecha = document.querySelector(".pagina-derecha ul");

// Inicializa un contador para realizar un seguimiento del número de tareas
let contadorNombres = 1;

export const nombresDisponibles =( nombre )=>{
  
  const nuevoNombre = document.createElement('li');
  nuevoNombre.textContent = nombre;

  if( contadorNombres % 2 === 0){
    paginaDerecha.appendChild( nuevoNombre );
  } else{
    paginaIzquierda.appendChild( nuevoNombre );
  }

  contadorNombres ++;
}

const eliminarNombre =( nombre )=>{

}