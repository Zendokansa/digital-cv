"use strict";
const news = user.news_api();
console.log(news);

const pages = find_page(news, user_setting.number_on_page); // 5: number of setting news
console.log(pages);
render_perpage(news, 0, user_setting.number_on_page);

//  reder news
btn_prev.addEventListener("click", function () {
  prev(news);
});
btn_next.addEventListener("click", function () {
  next(news);
});
