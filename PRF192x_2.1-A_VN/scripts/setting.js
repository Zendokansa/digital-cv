"use strict";
const category = [
  "business",
  "entertainment",
  "general",
  "health",
  "science",
  "sports",
  "technology",
];

const submit = document.querySelector("#btn-submit");
const input_category = document.querySelector("#input-category");
let option = "";
for (let i = 0; i < category.length; i++)
  option += `<option value="${category[i]}">${category[i]}</option>`;
input_category.innerHTML = option;
const news_on_page = document.querySelector("#input-page-size");
document.querySelector("#btn-submit").addEventListener("click", function () {
  const index = setting_info.findIndex(
    (t) => t.username == user_setting.username
  );
  console.log(index);
  const setting = {
    username: user_info.username,
    category: input_category.value,
    number_on_page: news_on_page.value,
  };
  if (setting_info == "") setting_info.push(setting);
  else {
    if (index < 0) setting_info.push(setting);
    else {
      setting_info[index].category = input_category.value;
      setting_info[index].number_on_page = news_on_page.value;
    }
  }
  localStorage.setItem("Setting", JSON.stringify(setting_info));
});
