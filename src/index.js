import './index.html';
import './index.scss';
import Swiper from 'swiper';
import { Pagination } from 'swiper';

/* ------------------------swiper--------------------------- */
Swiper.use([Pagination]);
const swiper = new Swiper('.swiper', {
	slidesPerView: 'auto',
	spaceBetween: 16,
	observer: true,
	breakpoints: {
		1119: {
			enabled: false,
		},
	},
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
		type: 'bullets',
	},
});
/* ------------------------swiper--------------------------- */

const sidebar = document.querySelector('.sidebar');
const burger = document.querySelector('.burger__button');
const burger_close = document.querySelector('.burger__close');
const chat_sidebar = document.querySelector('.chat__sidebar');
const chat_btn = document.querySelectorAll('.chat__button');
const modal_overlay = document.querySelector('.modal__overlay');
const chat_close = document.querySelector('.chat__close');
const callback_btn = document.querySelectorAll('.callback__button');
const callback_sidebar = document.querySelector('.callback__sidebar');
const callback_close = document.querySelector('.callback__close');
const sidebar_nav = document.querySelectorAll('.sidebar__navigation--main--items li a');
/* ------------------------sidebar--------------------------- */
burger.addEventListener('click', () => {
	sidebar.classList.add('sidebar__open');
	burger_close.addEventListener('click', () => {
		sidebar.classList.remove('sidebar__open');
	});
});

sidebar_nav.forEach(item => {
	item.addEventListener('click', e => {
		sidebar_nav.forEach(el => {
			el.classList.remove('active');
		});
		item.classList.add('active');
	});
});
/* ------------------------sidebar--------------------------- */

/* ------------------------chat--------------------------- */
chat_btn.forEach((chat_btn_curr, index) => {
	chat_btn_curr.addEventListener('click', () => {
		chat_sidebar.classList.add('chat__sidebar--open');

		modal_overlay.classList.add('modal__overlay--open');
	});
	chat_close.addEventListener('click', () => {
		chat_sidebar.classList.remove('chat__sidebar--open');
		modal_overlay.classList.remove('modal__overlay--open');
	});
});
/* ------------------------chat--------------------------- */

/* ------------------------callback--------------------------- */
callback_btn.forEach((callback_btn_curr, index) => {
	callback_btn_curr.addEventListener('click', () => {
		callback_sidebar.classList.add('callback__sidebar--open');
		modal_overlay.classList.add('modal__overlay--open');
		callback_close.addEventListener('click', () => {
			callback_sidebar.classList.remove('callback__sidebar--open');
			modal_overlay.classList.remove('modal__overlay--open');
		});
	});
});
/* ------------------------callback--------------------------- */
