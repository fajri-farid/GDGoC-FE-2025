// Ambil elemen penting
const todoForm = document.getElementById("todo-form");
const todoInput = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");

todoForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const taskText = todoInput.value.trim();

  if (taskText !== "") {
    addTodoItem(taskText, false);
    todoInput.value = "";
  }
});

function addTodoItem(taskText, isCompleted) {
  const listItem = document.createElement("li");

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.checked = isCompleted;

  checkbox.addEventListener("change", () => {
    listItem.classList.toggle("completed", checkbox.checked);
  });

  const taskLabel = document.createElement("span");
  taskLabel.textContent = taskText;

  listItem.appendChild(checkbox);
  listItem.appendChild(taskLabel);

  if (!isCompleted) {
    todoList.prepend(listItem);
  } else {
    todoList.appendChild(listItem);
  }
}

function reorderTodos() {
  const todos = Array.from(todoList.children);

  const pendingTodos = todos.filter(
    (todo) => !todo.querySelector("input").checked
  );
  const completedTodos = todos.filter(
    (todo) => todo.querySelector("input").checked
  );

  pendingTodos.forEach((todo) => todoList.appendChild(todo));
  completedTodos.forEach((todo) => todoList.appendChild(todo));
}
