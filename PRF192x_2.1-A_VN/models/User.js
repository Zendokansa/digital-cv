// "use strict";
const btn_prev = document.querySelector("#btn-prev");
const btn_next = document.querySelector("#btn-next");
const new_container = document.querySelector("#news-container");
const nav_control = document.querySelector("#content");
const page_num = document.querySelector("#page-num");
// calc pages
const find_page = async function (api, news_on_page) {
  const pages = await api.then(
    (res) => res.length / user_setting.number_on_page
  );
  console.log(pages);
  return pages;
};
let current_user = JSON.parse(localStorage.getItem("valid_user")) || [];
console.log(current_user.index);
console.log(current_user.current_state);
const user_data = JSON.parse(localStorage.getItem("users")) || [];
// console.log(user_data);
if (current_user.index != "");
const user_info = user_data[current_user.index];
let setting_info = JSON.parse(localStorage.getItem("Setting"));
let user_setting = {
  username: "guest",
  category: "business",
  number_on_page: 7,
};
// console.log(setting_info);
if (setting_info == undefined || null || "") setting_info = [];
else {
  [user_setting] = setting_info.filter(
    (stt) => stt.username == user_info.username
  );
  console.log(user_setting);
  if (user_setting == "")
    user_setting = {
      category: "business",
      number_on_page: 4,
    };
}

if (user_setting == undefined)
  user_setting = {
    category: "business",
    number_on_page: 7,
  };
let div = "";
function renderdata(news) {
  div += `<div class="card flex-row flex-wrap">
<div class="card mb-3" style="">
    <div class="row no-gutters">
        <div class="col-md-4">
            <img src="${news.urlToImage}"
                class="card-img"
                alt="${news.description}">
        </div>
        <div class="col-md-8">
            <div class="card-body">
                <h5 class="card-title">${news.title}"</h5>
                <p class="card-text">${news.description}</p>
                <a href="${news.url}"
                    class="btn btn-primary">View</a>
            </div>
        </div>
    </div>
</div>
</div>`;
  return div;
}
let para = "";
const render_perpage = function (api, current_page, number_news) {
  para = "";
  div = "";
  console.log(api);
  new_container.innerHTML = para;
  api.then((res) => {
    console.log(current_page);
    console.log(Number(number_news));
    let news_start = current_page * Number(number_news);
    let news_last = news_start + Number(number_news);
    if (news_last >= res.length) news_last = res.length;
    console.log(news_start, news_last);
    // console.log(res.length); // res.length == 20

    for (let i = news_start; i < news_last; i++) {
      para = renderdata(res[i]);
    }
    new_container.innerHTML = para;
  });
};

let page = 0;
const prev = function (api) {
  page--;
  para = "";
  // const pages = find_page(api,user_setting.number_on_page);
  btn_next.classList.remove("hidden");
  new_container.innerHTML = "";
  if (page > 0) {
    btn_prev.classList.remove("hidden");
  } else {
    page = 0;
    btn_prev.classList.add("hidden");
  }
  render_perpage(api, page, user_setting.number_on_page);
  page_num.innerHTML = page + 1;
};

const next = function (api) {
  btn_prev.classList.remove("hidden");
  page++;
  para = "";
  const pages = find_page(api, user_setting.number_on_page);
  console.log(pages);
  console.log(pages);
  new_container.innerHTML = para;
  if (page >= pages) {
    page = pages;
    btn_next.classList.add("hidden");
  } else {
    btn_next.classList.remove("hidden");
  }
  render_perpage(api, page, user_setting.number_on_page);
  if (page + 1 == pages) page = pages - 1;
  page_num.innerHTML = page + 1;
};
//  Class user
class Users {
  constructor(firstName, lastName, username, password, confirm) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.username = username;
    this.password = password;
    this.confirm = confirm;
  }

  fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  //  get api

  news_api = async () => {
    let abc = "";
    await fetch(
      `https://newsapi.org/v2/top-headlines?category=${user_setting.category}&apiKey=ff9e8a35b18d418cb93a481a2045d758`
    )
      .then((res) => {
        if (res.ok) {
          const x = res.json();
          return x;
        }
      })
      .then((data) => {
        abc = data.articles;
        console.log(abc);
      });
    return abc;
  };

  search = async (request) => {
    let abc = "";
    await fetch(
      ` https://newsapi.org/v2/everything?q=${request}&apiKey=ff9e8a35b18d418cb93a481a2045d758`
    )
      .then((res) => {
        if (res.ok) {
          const x = res.json();
          return x;
        }
      })
      .then((data) => {
        abc = data.articles;
        console.log(abc);
      })
      .catch((err) => console.error(err))
      .finally(() => {
        return abc;
      });
    return abc;
  };
}
// setting(username, number, category) {
//   setting ={
//     username :setting_info.user ,
//     category:setting_info.category ,
//     number:setting_info.number_on_page,
// }
// return this.setting;

Users.prototype.task = function () {
  const task_data = JSON.parse(localStorage.getItem("task_data")) || [];
  const task_user = task_data.filter((task) => (task.username = this.username));
  return task_user;
};
let user = "";
if (current_user.current_state == 1) {
  user = new Users(
    user_info.firstName,
    user_info.lastName,
    user_info.username,
    user_info.password,
    user_info.confirm
  );
}
