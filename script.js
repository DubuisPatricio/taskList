// date info.
const dateNumber = document.getElementById("dateNumber");
const dateMonth = document.getElementById("dateMonth");
const dateYear = document.getElementById("dateYear");
const dateNameDay = document.getElementById("dateNameDay");
//container info.
const taskContainer = document.getElementById("taskContainer");

const setDate = () => {
  //le da el valor de la fecha actual a los elementos que los definen.
  const date = new Date();
  dateNumber.textContent = date.toLocaleString("es", { day: "numeric" });
  dateNameDay.textContent = date.toLocaleString("es", { weekday: "long" });
  dateMonth.textContent = date.toLocaleString("es", { month: "short" });
  dateYear.textContent = date.toLocaleString("es", { year: "numeric" });
};
const addNewTask = (event) => {
  //saca las opciones de base del form.
  event.preventDefault();
  //setea a el value, el volor escrito en el texto.
  const { value } = event.target.taskText;
  //hace que si no hay un valor en value, corte la funcion.
  if (!value) return;
  //crea un div llamado task.
  const task = document.createElement("div");
  //le agrega clases al div task.
  task.classList.add("task", "roundBorder");
  //agrega un onclick y lo conecta con una function al task.
  task.addEventListener("click", changeTaskState);
  //le agrega el contenido de value al task.
  task.textContent = value;
  //agrega el task al principio del taskContainer (prepend== principio de la lista).
  taskContainer.prepend(task);
  //resetea la form para dejar vacio el input.
  event.target.reset();
};
const changeTaskState = (event) => {
  //entra a la lista de clases de el elemento y si tiene la clase done se la saca, si no se la agrega.
  event.target.classList.toggle("done");
};
const order = () => {
  //array de tareas echas.
  const done = [];
  //array de tareas por hacer.
  const toDo = [];
  //accede a la clase taskContainer e itera por cada elemento hijo del contenedor.
  taskContainer.childNodes.forEach((elem) => {
    //verifica si la clase done, esta en el elem, si lo tiene pushea el elemento dentro de el array done.
    //si no lo tiene pushe el elemento dentro del array toDo.
    elem.classList.contains("done") ? done.push(elem) : toDo.push(elem);
  });
  // retorno las 2 listas, primero la de tareas por hacer y luego la de tareas echas.
  return [...toDo, ...done];
};
const renderOrderTask = () => {
  //toma los elementos del array de order, y los mete dentro del task container en ese orden.
  order().forEach((elem) => taskContainer.appendChild(elem));
};
setDate();
