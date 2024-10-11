export class MyTodoList {
  constructor(todos) {
    this.todos = todos;
    this.todoList = document.querySelector(".todo-list");
    this.todoInput = document.querySelector(".add-todo-input");
    this.addTodoButton = document.querySelector(".add-todo-button");
    this.clearTodosButton = document.querySelector(".clear-todos-button");
    this.todoTemplate = document.querySelector("#todo-template").content;
    this.addTodoButton.addEventListener("click", () => {
      this.addTodo();
    });
    this.todoInput.addEventListener("focus", () => {
      document.addEventListener("keydown", this.handleEnterPress);
    });

    this.todoInput.addEventListener("blur", () => {
      document.removeEventListener("keydown", this.handleEnterPress);
    });
    this.clearTodosButton.addEventListener("click", () => {
      this.clearTodos();
    });
  }
  handleEnterPress = (event) => {
    if (event.key === "Enter") {
      this.addTodo();
    }
  };

  setTodos(todo) {
    if (todo) {
      this.todos.push({ text: todo, completed: false });
      localStorage.setItem("todos", JSON.stringify(this.todos));
    }
  }

  addTodo() {
    const todoText = this.todoInput.value;
    this.setTodos(todoText);
    this.todoInput.value = "";
    this.showTodos();
  }

  getTodos() {
    return this.todos;
  }
  showTodos() {
    this.todoList.innerHTML = "";

    this.todos.forEach((element, index) => {
      const todoItem = this.todoTemplate.cloneNode(true);
      const listItem = todoItem.querySelector(".todo-list__item");
      const todoText = todoItem.querySelector(".todo-text");
      const checkbox = todoItem.querySelector(".todo-checkbox");
      const deleteButton = todoItem.querySelector(".delete-todo-button");

      if (element.completed) {
        listItem.classList.add("completed");
      }

      todoText.textContent = element.text;
      checkbox.checked = element.completed;
      checkbox.addEventListener("change", () => {
        this.todos[index].completed = checkbox.checked;
        localStorage.setItem("todos", JSON.stringify(this.todos));
        if (checkbox.checked) {
          listItem.classList.add("completed");
        } else {
          listItem.classList.remove("completed");
        }
      });
      deleteButton.addEventListener("click", () => {
        this.deleteTodo(index);
      });

      this.todoList.appendChild(todoItem);
    });
  }

  deleteTodo(index) {
    this.todos.splice(index, 1);
    localStorage.setItem("todos", JSON.stringify(this.todos));
    this.showTodos();
  }

  clearTodos() {
    this.todos = [];
    localStorage.removeItem("todos");
    this.showTodos();
  }
}
