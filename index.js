const modalBtn = document.querySelector(".modal-btn");
const closeBtn = document.querySelector(".close-btn");
const modalWrapper = document.querySelector(".modal-wrapper");
const container = document.querySelector(".container");
const confirmation = document.querySelector(".confirmation");
const deleteBtn = document.querySelector(".delete-btn");
const conBtn = document.querySelector(".con-btn");

modalBtn.addEventListener("click", (e) => {
  modalWrapper.classList.add("show");
  container.style.backgroundColor = red;
});

closeBtn.addEventListener("click", (e) => {
  modalWrapper.classList.remove("show");
});

deleteBtn.addEventListener("click", (e) => {
  confirmation.classList.add("show");
});

conBtn.addEventListener("click", (e) => {
  confirmation.classList.remove("show");
  modalWrapper.classList.remove("show");
});
