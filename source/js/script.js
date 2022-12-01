let navMain = document.querySelector('.header-navigation');
let navToggle = document.querySelector('.header-navigation__toggle');

navMain.classList.remove('header-navigation--nojs');

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('header-navigation--closed')) {
    navMain.classList.remove('header-navigation--closed');
    navMain.classList.add('header-navigation--opened');
  } else {
    navMain.classList.add('header-navigation--closed');
    navMain.classList.remove('header-navigation--opened');
  }
});


let reviewForm = document.querySelector(".review-form");
let modal = document.querySelector(".modal");
let modalErr = document.querySelector(".modal__window--error");
let modalSuccess = document.querySelector(".modal__window--success");
let buttonSubmit = document.querySelector(".review-form__submit");
let buttonErr = document.querySelector(".modal__button--err");
let buttonSuccess = document.querySelector(".modal__button--success");
let inputError = document.querySelector(".review-form__input");

let firstName = document.querySelector("#name");
let secondName = document.querySelector("#surname");
let tel = document.querySelector("#tel");
let email = document.querySelector("#email");
let emotions = document.querySelector("#emotions");




buttonSubmit.addEventListener("click", function (evt) {
    if ((!firstName.value) || (!secondName.value) || (!tel.value) || (!email.value) || (!emotions.value)) {
      evt.preventDefault();

      firstName.classList.add("review-form__input--error");
      secondName.classList.add("review-form__input--error");
      tel.classList.add("review-form__input--error");
      email.classList.add("review-form__input--error");
      emotions.classList.add("review-form__input--error");

      firstName.onclick = function() {
        firstName.classList.remove("review-form__input--error");
      };

      secondName.onclick = function() {
        secondName.classList.remove("review-form__input--error");
      };

      tel.onclick = function() {
        tel.classList.remove("review-form__input--error");
      };

      email.onclick = function() {
        email.classList.remove("review-form__input--error");
      };

      emotions.onclick = function() {
        emotions.classList.remove("review-form__input--error");
      };

      modal.classList.add("modal__window--show");
      modalErr.classList.add("modal__window--show");
      buttonErr.addEventListener("click", function () {
        modalErr.classList.remove("modal__window--show");
        modal.classList.remove("modal__window--show");
      });
    }
    else {
      evt.preventDefault();

      modal.classList.add("modal__window--show");
      modalSuccess.classList.add("modal__window--show");
      buttonSuccess.addEventListener("click", function () {
        modalSuccess.classList.remove("modal__window--show");
        modal.classList.remove("modal__window--show");
        reviewForm.reset();
    });
  }
}
);













let buttonShow = document.querySelector('.search-hotel__button');
let formSearch = document.querySelector('.form-search');

let dateArrival = formSearch.querySelector('#date-arrival');
let dateLeave = formSearch.querySelector('#date-leave');
let ticketAdult = formSearch.querySelector('#adult-ticket');
let ticketChildren = formSearch.querySelector('#children-ticket');

let isStorageSupport = true;
let storage = '';

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



