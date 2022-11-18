"use strict";
const select = document.querySelectorAll("input");
const btn_sign_up = document.querySelector("#btn-submit");
// console.log(select);

const sign_up = () => {
  let register = {
    firstName: select[0].value,
    lastName: select[1].value,
    username: select[2].value,
    password: select[3].value,
    confirm: select[4].value,
  };
  console.log(register.password.length);
  const x = valid_user(register);
  console.log(x);
  if (register.password != register.confirm) {
    alert(`confirm passowrd is not correct`);
    return;
  } else if (register.password.length < 9) {
    alert(`Password is not strong enough`);
    return;
  } else if (x == true) {
    alert(`This username is already used`);
    return;
  } else {
    user_data.push(register);
    const x = JSON.stringify(user_data);
    localStorage.setItem("users", x);
    console.log(user_data);
  }
  window.location.href = "../pages/login.html";
};

btn_sign_up.addEventListener("click", sign_up);
