import "./index.html";
import "./index.scss";

import Swiper, { Navigation, Pagination } from "swiper";
Swiper.use([Pagination]);

var swiper = new Swiper(".swiper", {
  slidesPerView: "auto",
  spaceBetween: 16,
  grabCursor: true,
  breakpoints: {
    768: {
      enabled: false,
      spaceBetween: 24,
    },
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    type: "bullets",
  },
});

/* sidebar */
const sidebar = document.querySelector(".sidebar");
const burger = document.querySelector(".burger__button");
const burger_close = document.querySelector(".burger__close");

callback = document.querySelector(".callback__sidebar")

burger.addEventListener("click", () => {
  sidebar.classList.toggle("sidebar__open");
  burger_close.addEventListener("click", () => {
    sidebar.classList.remove("sidebar__open");
  });
});

const sidebar_nav = document.querySelectorAll(
  ".sidebar__navigation--main--items li a"
);

sidebar_nav.forEach((item) => {
  item.addEventListener("click", (e) => {
    sidebar_nav.forEach((el) => {
      el.classList.remove("active");
    });
    item.classList.add("active");
  });
});
/* sidebar */

/* show all button */

/* show all button */
