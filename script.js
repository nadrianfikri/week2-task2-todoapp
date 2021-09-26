const showTodo = document.getElementById('show-todo');
const inputTask = document.getElementById('input-task');

const todos = [];

function addTodo() {
  if (inputTask.value == '') {
    alert("The field can't be empty");
    return;
  }

  const todo = {
    id: Date.now(),
    taskName: inputTask.value,
    isDone: false,
  };

  todos.push(todo);
  inputTask.value = '';

  renderTodo();
}

function removeTodo(id) {
  for (let i = 0; i < todos.length; i++) {
    const todo = todos[i];
    if (id == todo.id) {
      todos.splice(i, 1);
    
    }
  }
  renderTodo();
}

function doneTodo(id) {
  for (let todo of todos) {
    if (id == todo.id) {
      todo.isDone = !todo.isDone;
    }
  }
  renderTodo();
}

function renderTodo() {
  let HTMLElements = '';

  if (todos.length < 1) {
    HTMLElements += `
    <div class="img-cont">
        <img class="img" src="images/undraw_attached_file_re_0n9b.svg" alt="empty" />
    </div>`;
  } else {
    for (let todo of todos) {
      let doneBtn = '';
      let doneText = '';

      if (todo.isDone) {
        doneBtn = 'done-btn';
        doneText = 'done-text';
      }

      HTMLElements += `
          <div class="todo">
            <div class="wraper done">
              <button class="btn ${doneBtn}" onclick="doneTodo(${todo.id})"><img src="images/icon-check.svg" alt="check-btn" /></button>
            </div>
            <p class="todo-name ${doneText}">${todo.taskName}</p>
            <div class="wraper delete">
              <button class="btn" onclick="removeTodo(${todo.id})"><img src="images/icon-cross.svg" alt="delete-btn" /></button>
            </div>
          </div>
        `;
    }
  }

  showTodo.innerHTML = HTMLElements;
}

// trigger button on enter keyup
inputTask.addEventListener('keyup', function (e) {
  if (e.keyCode === 13) {
    document.getElementById('btn-submit').click();
  }
});

renderTodo();
