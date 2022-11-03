let buttonShow = document.querySelector('.search-hotel__button');
let formSearch = document.querySelector('.form-search');

let dateArrival = formSearch.querySelector('#date-arrival');
let dateLeave = formSearch.querySelector('#date-leave');
let ticketAdult = formSearch.querySelector('#adult-ticket');
let ticketChildren = formSearch.querySelector('#children-ticket');

var isStorageSupport = true;
var storage = '';

/* Доступен ли localStorage */
try {
  storage = localStorage.getItem('ticketAdult');
} catch (err) {
  isStorageSupport = false;
}

/* Скрываем открытую форму по умолчанию */
formSearch.classList.remove('form-search--show');
formSearch.classList.add('form-search--hide');

/* Открытие и закрытие формы по кнопке */
buttonShow.addEventListener('click', function (evt) {
  evt.preventDefault();
  formSearch.classList.toggle('form-search--hide');
  formSearch.classList.toggle('form-search--show');
  formSearch.classList.remove('form-search--error');
  dateArrival.focus();

  ticketAdult.value = localStorage.getItem('ticketAdult');
  ticketChildren.value = localStorage.getItem('ticketChildren');
});

/* Проверка заполненности полей формы перед отправкой,
тряска формы при отсутствии данных,
загрузках данных из localStorage, если доступно */
formSearch.addEventListener('submit', function (evt) {
  if (!dateArrival.value || !dateLeave.value || !ticketAdult.value || !ticketChildren.value) {
    evt.preventDefault();
    formSearch.classList.remove('form-search--error');
    formSearch.offsetWidth = formSearch.offsetWidth;
    formSearch.classList.add('form-search--error');
  } else {
    if (isStorageSupport) {
      localStorage.setItem('ticketAdult', ticketAdult.value);
      localStorage.setItem('ticketChildren', ticketChildren.value);
    }
  }
});

/* Закрытие формы клавишой ESC */
window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    if (formSearch.classList.contains('form-search--show')) {
      evt.preventDefault();
      formSearch.classList.toggle('form-search--hide');
      formSearch.classList.toggle('form-search--show');
      formSearch.classList.remove('form-search--error');
    }
  }
})


let navMain = document.querySelector('.header-navigation');
let navToggle = document.querySelector('.header-navigation__toggle');

navMain.classList.remove('header-navigation--nojs');

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('header-navigation--closed')) {
    navMain.classList.remove('header-navigation--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('header-navigation--closed');
    navMain.classList.remove('main-nav--opened');
  }
});

