"use strict";
const todo_list = document.querySelector("#todo-list");
const input_task = document.querySelector("#input-task");
const add = document.querySelector("#btn-add");
console.log(user_info.username);
let task = user.task();
console.log(task);
const task_data = JSON.parse(localStorage.getItem("task_data")) || [];
console.log(task_data);

// if (!task_data) task_data = [];
// render list
const close = document.querySelector(".close");
const index = task_data.findIndex(
  (element) => element.username == user_info.username
);

const list_create = function (element) {};
const render_list = function () {
  const list_task = document.querySelectorAll(".list");
  for (const li of list_task) li.parentElement.removeChild();
  const task_data = JSON.parse(localStorage.getItem("task_data")) || [];
  for (let i = 0; i < task_data[index].task.length; i++) {
    const list = document.createElement("li");
    if (task_data[index].task[i].isDone == "true") li.classList.add("checked");
    list.textContent = task_data[index].task[i].task;
    list.className = "list";
    const span = document.createElement("span");
    span.classList.add("close");
    span.textContent = "x";
    list.appendChild(span);
    // element.insertAdjacentElement("beforeend");
    todo_list.insertAdjacentElement("beforeend", list);
  }
};

if (task_data != "") {
  console.log(task_data);
  render_list();
}
const list_task = document.querySelectorAll(".list");
const new_task = {
  username: user_info.username,
  task: [],
};

add.addEventListener("click", function () {
  // console.log(list_task[0].parentElement.children);

  const task_checked = { task: input_task.value, isDone: false };
  new_task.task.push(task_checked);
  if (index < 0) task_data.push(new_task);
  else task_data[index].task.push(task_checked);
  // console.log(new_task, index, task_data[index]);
  localStorage.setItem("task_data", JSON.stringify(task_data));
  window.location.reload();
  const list = document.createElement("li");
  list.textContent = input_task.value;
  list.className = "list";
  todo_list.appendChild(list);
  const span = document.createElement("span");
  span.classList.add("close");
  span.textContent = "x";
  list.appendChild(span);
  todo_list.insertAdjacentElement("beforeend", list);
});

console.log(list_task);
let isDone = false;
for (let i = 0; i < list_task.length; i++) {
  list_task[i].addEventListener("click", function () {
    const li = list_task[i].closest(".list");
    task_data[index].task[i].isDone =
      task_data[index].task[i].isDone == false ? true : false;
    console.log(task_data[index].task[i]);
    localStorage.setItem("task_data", JSON.stringify(task_data));
    li.classList.toggle("checked");
  });
}
// button

const done = document.querySelectorAll(".close");

for (let i = 0; i < done.length; i++) {
  done[i].addEventListener("click", function () {
    task_data[index].task.splice(i, 1);
    console.log(task_data[index]);
    localStorage.setItem("task_data", JSON.stringify(task_data));
    list_task[i].parentElement.removeChild(list_task[i]);
  });
}
