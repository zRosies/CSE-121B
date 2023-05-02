// events.js
let tasks = [];

function renderTasks(tasks) {
  // get the list element from the DOM
  // make sure it is empty
  // loop through the tasks array. for each of them we need to add the HTML markup for a todo.
  const listElement= document.querySelector('#todoList');
  listElement.innerHTML="";
    tasks.forEach((task)=>{
      listElement.innerHTML+=`
      <li ${task.completed ? 'class="strike"' : ""}>
        <p>${task.detail}</p>
        <div>
          <span data-function="delete">❎</span>
          <span data-function="complete">✅</span>
        </div>
        </li>`;
      }
  )
}

function newTask() {
  // get the value entered into the #todo input
  const task = document.querySelector('#todo').value;
  // add it to our arrays tasks
  tasks.push({detail: task, completed: false});

  // render out the list.
  renderTasks(tasks);
}

function removeTask(taskElement) {
  // note the use of Array.filter to remove the element from our task array
  tasks = tasks.filter(
    (task) => task.detail != taskElement.childNodes[1].innerText
  );
  // this line removes the HTML element from the DOM
  taskElement.remove();
}

function completeTask(taskElement) {
  // In this case we need to find the index of the task so we can modify it.
  // once we have the index we can modify the complete field.
  // tasks[taskIndex].completed ? false : true is a ternary expression.
  // If the first part is true (left of the ?), then the value on the left of the : will get returned, otherwise the value on the right of the : will be returned.
   // toggle adds a class if it is not there, removes it if it is.
  const taskIndex = tasks.findIndex(
    (task) => task.detail === taskElement.childNodes[1].innerText
  );
  
  tasks[taskIndex].completed = tasks[taskIndex].completed ? false : true;
 
  taskElement.classList.toggle("strike");
  console.log(tasks);
}

  function manageTasks(event) {
    // did they click the delete or complete icon?
    // event.target will point to the actual icon clicked on. We need to get the parent li to work with however. HINT: Remember element.closest()? Look it up if you don't
    // because we added 'data-function="delete"' to each icon in a task we can access a dataset property on our target
    // use that in a couple of if statements to decide whether to run removeTask or completeTask
    console.log(event.target);

    const parent = event.target.closest("li");
    if(event.target.dataset.function ==="delete"){
      removeTask(parent);
    }
    if(event.target.dataset.function ==='complete'){
      completeTask(parent)
    }

  }



document.querySelector('#submitTask').addEventListener('click', newTask);
document.querySelector('#todoList').addEventListener('click', manageTasks);

renderTasks(tasks);


// we need to attach listeners to the submit button and the list. Listen for a click, call the 'newTask' function on submit and call the 'manageTasks' function if either of the icons are clicked in the list of tasks.