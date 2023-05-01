const modal = () => {
  const openPopUp = document.getElementById("open-pop-up");
  const closePopUp = document.getElementById("pop-up__close");
  const popUp = document.getElementById("pop-up");

  openPopUp.addEventListener("click", function (e) {
    e.preventDefault();
    popUp.classList.add("active");
    popUp.classList.remove("none");
  });

  closePopUp.addEventListener("click", () => {
    popUp.classList.remove("active");
    popUp.classList.add("none");
  });
};

export default modal;
