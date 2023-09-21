const customer     = document.querySelector("#text-name");
const totalInQueue = document.querySelector(".lblPendientes");

const printNameAndTotalInQueue = (name, total ) => {
  if (customer.classList.contains("text-danger")) {
    customer.classList.replace("text-danger", "text-success");
  }
  customer.innerText     = name;
  totalInQueue.innerText = total - 1;
};

const noOrders = () => {
  customer.innerText = "Sin pedidos";
  customer.classList.replace("text-success", "text-danger");
};

export { printNameAndTotalInQueue, noOrders };
