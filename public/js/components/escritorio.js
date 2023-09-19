const nombreCliente = document.querySelector(".text-primary");
const totalPendientes = document.querySelector(".lblPendientes");
const divAlerta = document.querySelector(".alert");

export const imprimirInfoEscritorio = (nombre, total = 0) => {
  nombreCliente.innerText = nombre;
  totalPendientes.innerText = total - 1;
  if (!total) {
    divAlerta.style.display = "";
  }
};
