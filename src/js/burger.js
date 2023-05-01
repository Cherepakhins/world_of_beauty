const burger = () => {
  const btnBurgerOpen = document.getElementById("btn-burger--open");
  const mobileMenu = document.querySelector("#mobileMenu");

  btnBurgerOpen.addEventListener("click", () => {
    btnBurgerOpen.classList.toggle("burger--active");
    mobileMenu.classList.toggle("visible");
  });

};
export default burger;
