"use strict";

console.log(user_info);
const login_modal = document.querySelector("#login-modal");
const main_content = document.querySelector("#main-content");
const btn_in_out = document.querySelector("#button-in-out");
const btn_logout = document.querySelector("#btn-logout");

// console.log(JSON.parse(user_data)[current_user]);
const welcome_msg = document.querySelector("#welcome-message");
login_modal.classList.add("hidden");
main_content.classList.add("hidden");
if (current_user.current_state == 1) {
  const p = `<p> Welcome ${user_info.firstName} back</p>`;
  console.log(p);
  welcome_msg.innerHTML = p;
  main_content.classList.remove("hidden");
} else {
  login_modal.classList.remove("hidden");
  alert("Password or username is not correct!");
}

btn_logout.addEventListener("click", function () {
  current_user.index = "";
  current_user.current_state = 0;
  console.log(current_user);
  localStorage.setItem("valid_user", JSON.stringify(current_user));
  main_content.classList.add("hidden");
  login_modal.classList.remove("hidden");
});
