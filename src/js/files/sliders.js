/*
Документация по работе в шаблоне: 
Документация слайдера: https://swiperjs.com/
Сниппет(HTML): swiper
*/

// Подключаем слайдер Swiper из node_modules
// При необходимости подключаем дополнительные модули слайдера, указывая их в {} через запятую
// Пример: { Navigation, Autoplay }
import Swiper, { Navigation, Pagination } from 'swiper';
/*
Основниые модули слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Подробнее смотри https://swiperjs.com/
*/

// Стили Swiper
// Базовые стили
import "../../scss/base/swiper.scss";
// Полный набор стилей из scss/libs/swiper.scss
// import "../../scss/libs/swiper.scss";
// Полный набор стилей из node_modules
// import 'swiper/css';

// Инициализация слайдеров
// Перечень слайдеров
// Проверяем, есть ли слайдер на стронице
if (document.querySelector('.reviews__slider')) { // Указываем скласс нужного слайдера
	// Создаем слайдер
	new Swiper('.reviews__slider', { // Указываем скласс нужного слайдера
		// Подключаем модули слайдера
		// для конкретного случая
		modules: [Navigation, Pagination],
		observer: true,
		observeParents: true,
		slidesPerView: 2.5,
		spaceBetween: 35,
		autoHeight: false,
		speed: 800,

		//touchRatio: 0,
		//simulateTouch: false,
		//loop: true,
		//preloadImages: false,
		lazy: true,

		/*
		// Эффекты
		effect: 'fade',
		autoplay: {
			delay: 3000,
			disableOnInteraction: false,
		},
		*/

		// Пагинация
		pagination: {
			el: '.reviews__dotts',
			clickable: true,
		},

		// Скроллбар
		/*
		scrollbar: {
			el: '.swiper-scrollbar',
			draggable: true,
		},
		*/

		// Кнопки "влево/вправо"
		navigation: {
			prevEl: '.reviews__arrow-prev',
			nextEl: '.reviews__arrow-next',
		},

		// Брейкпоинты

		breakpoints: {
			0: {
				slidesPerView: 1.1,
				spaceBetween: 20,
			},
			550: {
				slidesPerView: 2,
				spaceBetween: 20,
			},
			768: {
				slidesPerView: 2,
				spaceBetween: 20,
			},
			992: {
				slidesPerView: 2.5,
				spaceBetween: 35,
			},
		},
		// События
		on: {

		}
	});
}

if (document.querySelector('.webinar__slider')) { // Указываем скласс нужного слайдера
	// Создаем слайдер
	new Swiper('.webinar__slider', { // Указываем скласс нужного слайдера
		// Подключаем модули слайдера
		// для конкретного случая
		modules: [Navigation],
		observer: true,
		observeParents: true,
		slidesPerView: 1.5,
		spaceBetween: 0,
		autoHeight: true,
		speed: 800,

		//touchRatio: 0,
		//simulateTouch: false,
		//loop: true,
		//preloadImages: false,
		lazy: true,

		/*
		// Эффекты
		effect: 'fade',
		autoplay: {
			delay: 3000,
			disableOnInteraction: false,
		},
		*/

		// Скроллбар
		/*
		scrollbar: {
			el: '.swiper-scrollbar',
			draggable: true,
		},
		*/

		// Кнопки "влево/вправо"
		navigation: {
			prevEl: '.webinar__arrow-prev',
			nextEl: '.webinar__arrow-next',
		},

		// Брейкпоинты

		breakpoints: {
			0: {
				slidesPerView: 1,
			},
			991.98: {
				slidesPerView: 1.5,
			},
		},
		// События
		on: {

		}
	});
}