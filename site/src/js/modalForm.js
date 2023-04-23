const ModalForm = () => {
  const btns = document.querySelectorAll("#open-pop-up-form");
  const closePopUp = document.getElementById("pop-up__close-form");
  const popUp = document.getElementById("pop-up-form");
  btns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      e.preventDefault();
      popUp.classList.add("active");
    });
  });

  closePopUp.addEventListener("click", () => {
    popUp.classList.remove("active");
  });
};
export default ModalForm;
