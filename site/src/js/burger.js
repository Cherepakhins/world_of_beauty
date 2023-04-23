const burger = () => {
  let btnBurgerOpen = document.querySelector("#btn-burger--open");
  let btnBurgerClose = document.querySelector("#btn-burger--close");
  let mobileMenu = document.querySelector("#mobileMenu");

  btnBurgerOpen.addEventListener("click", () => {
    btnBurgerOpen.classList.add("none");
    btnBurgerOpen.classList.remove('burger')
    mobileMenu.classList.add("visible");
    btnBurgerClose.classList.add('block')
  });

  btnBurgerClose.addEventListener("click", () => {
    btnBurgerOpen.classList.remove("none");
    mobileMenu.classList.remove("visible");
    btnBurgerClose.classList.add('none')
  });
};
export default burger;
