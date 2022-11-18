"use strict";
const request = document.querySelector("#input-query");
const btn_submit = document.querySelector("#btn-submit");

// console.log(search);
let search = user.search(request.value);
const pages = find_page(search, page, user_setting.number_on_page);
btn_submit.addEventListener("click", function () {
  const search = user.search(request.value);
  render_perpage(search, page, user_setting.number_on_page);
  return search;
});

btn_prev.addEventListener("click", function () {
  const search = user.search(request.value);
  prev(search);
  return search;
});
btn_next.addEventListener("click", function () {
  const search = user.search(request.value);
  next(search);
  return search;
});
// console.log(search);
