document.addEventListener('DOMContentLoaded', () => {
    const todoForm = document.getElementById('todo-form');
    const todoInput = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');
  
    todoForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const task = todoInput.value.trim();
      if (task) {
        addTask(task);
        todoInput.value = '';
      }
    });
  
    function addTask(task) {
      const li = document.createElement('li');
      li.textContent = task;
      li.addEventListener('click', () => {
        li.classList.toggle('completed');
      });
      li.addEventListener('dblclick', () => {
        todoList.removeChild(li);
      });
      todoList.appendChild(li);
    }
  });
  