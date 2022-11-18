"use strict";
const user_name = document.getElementById("input-username");
const password = document.getElementById("input-password");
const btn_submit = document.getElementById("btn-submit");
// console.log(user_data);

btn_submit.addEventListener("click", function () {
  //   console.log(user_name.value, password.value);

  if (user_name.value == "" || password.value == "")
    alert(`input valid data, please`);
  const x = user_check(user_name.value, password.value);
  console.log(x);
  let current_state = 0;
  if (x > -1) current_state = 1;
  else current_state = 0;
  console.log(current_state);
  const valid_user = {
    index: x,
    current_state: current_state,
  };
  localStorage.setItem("valid_user", JSON.stringify(valid_user));
  window.location.href = "../index.html";
});
