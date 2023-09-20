const nombreCliente = document.querySelector("#text-name");
const totalPendientes = document.querySelector(".lblPendientes");

const imprimirInfoEscritorio = (nombre, total ) => {
  if (nombreCliente.classList.contains("text-danger")) {
    nombreCliente.classList.replace("text-danger", "text-success");
  }

  nombreCliente.innerText = nombre;
  totalPendientes.innerText = total - 1;
};

const sinPedidos = () => {
  nombreCliente.innerText = "Sin pedidos";
  nombreCliente.classList.replace("text-success", "text-danger");
};

export { imprimirInfoEscritorio, sinPedidos };
