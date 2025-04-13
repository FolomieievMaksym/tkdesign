const popUp = document.querySelector(".contact-pop-up");
const popUpOpenBtns = document.querySelectorAll("[data-form-open]");
const popUpClose = document.querySelector(".contact-pop-up__close");
const popUpBody = document.querySelector(".contact-pop-up__body");
const form = document.querySelector(".contact-pop-up__form");
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
form.addEventListener("submit", handleForm);
async function handleForm(e) {
  e.preventDefault();
  const name = e.target.name.value.trim();
  const email = e.target.email.value.trim();
  const message = e.target.message.value.trim();

  // const res = await fetch("https://artdesign.com.de/contact", {
  const res = await fetch("http://localhost:5000/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, email, message }),
  });

  const result = await res.json();
  console.log(result);
}
