"use strict";
function check(val) {
  return val;
}
let x = false;
const valid_user = function (register) {
  if (user_data != []) {
    x = user_data.some((t) => t.username == register.username);
  }
  console.log(x);
  return x;
};

const user_check = function (user, pwd) {
  const x = user_data.findIndex((t) => t.username == user && t.password == pwd);
  return x;
};
