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
      emotions.classList.add("review-form__textarea--error");

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
        emotions.classList.remove("review-form__textarea--error");
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
