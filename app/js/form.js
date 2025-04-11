const popUp = document.querySelector(".contact-pop-up");
const popUpOpenBtns = document.querySelectorAll(".contact-form-btn");
const popUpClose = document.querySelector(".contact-pop-up__close");
const popUpBody = document.querySelector(".contact-pop-up__body");
popUpOpenBtns.forEach((el) => {
  el.addEventListener("click", showPopUp);
});
function showPopUp(e) {
  popUp.classList.add("visible");
  document.body.classList.add("lock");
  popUpClose.addEventListener("click", closePopUp);
  popUp.addEventListener("click", handleClickOutside);
}
function closePopUp() {
  popUp.classList.remove("visible");
  document.body.classList.remove("lock");
  popUpClose.removeEventListener("click", closePopUp);
  popUp.removeEventListener("click", handleClickOutside);
}
function handleClickOutside(e) {
  if (!e.target.closest(".contact-pop-up__body")) closePopUp();
}
