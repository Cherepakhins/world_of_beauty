const Modal = () => {
  const openPopUp = document.getElementById("open-pop-up");
  const closePopUp = document.getElementById("pop-up__close");
  const popUp = document.getElementById("pop-up");

  openPopUp.addEventListener("click", function (e) {
    e.preventDefault();
    popUp.classList.add("active");
  });

  closePopUp.addEventListener("click", () => {
    popUp.classList.remove("active");
  });
};

export default Modal;


