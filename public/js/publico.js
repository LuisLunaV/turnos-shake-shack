const paginaIzquierda = document.querySelector(".pagina-izquierda ul");
const paginaDerecha = document.querySelector(".pagina-derecha ul");

// Inicializa un contador para realizar un seguimiento del número de tareas
let contadorNombres = 1;

export const nombresDisponibles =( { id, Nombre } )=>{
  const nuevoNombre = `<li data-id='${id}'>${Nombre}</li>`;
  
  if( contadorNombres %2 === 0){
    paginaDerecha.innerHTML += nuevoNombre;
  } else{
    paginaIzquierda.innerHTML += nuevoNombre;
  }
 contadorNombres ++;
}

const eliminarNombre =( nombre )=>{

}
 