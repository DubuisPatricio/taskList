const dateNumber = document.getElementById("dateNumber");
const dateMonth = document.getElementById("dateMonth");
const dateYear = document.getElementById("dateYear");
const dateNameDay = document.getElementById("dateNameDay");
const taskContainer = document.getElementById("taskContainer");

const setDate = () => {
  const date = new Date();
  dateNumber.textContent = date.toLocaleString("es", { day: "numeric" });
  dateNameDay.textContent = date.toLocaleString("es", { weekday: "long" });
  dateMonth.textContent = date.toLocaleString("es", { month: "short" });
  dateYear.textContent = date.toLocaleString("es", { year: "numeric" });
};
const addNewTask = (event) => {
  event.preventDefault();
  const { value } = event.target.taskText;
  if (!value) return;
  const task = document.createElement("div");
  task.classList.add("task", "roundBorder");
  task.addEventListener("click", changeTaskState);
  task.textContent = value;
  taskContainer.prepend(task);
  event.target.reset();
};
const changeTaskState = (event) => {
  event.target.classList.toggle("done");
};
const order = () => {
  const done = [];
  const toDo = [];
  taskContainer.childNodes.forEach((elem) => {
    elem.classList.contains("done") ? done.push(elem) : toDo.push(elem);
  });
  return [...toDo, ...done];
};
const renderOrderTask = () => {
  order().forEach((elem) => taskContainer.appendChild(elem));
};
setDate();
