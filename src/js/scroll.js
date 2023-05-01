const scroll = () => {
  let btnBurgerOpen = document.querySelector("#btn-burger--open");
  let mobileMenu = document.querySelector("#mobileMenu");
  document.addEventListener("scroll", (event) => {
  });

  const smoothScrollLinks = document.querySelectorAll(".smooth-scroll");

  for (let link of smoothScrollLinks) {
    link.addEventListener("click", (event) => {
      btnBurgerOpen.classList.remove("none");
      mobileMenu.classList.remove("visible");
      event.preventDefault();

      const target = event.target;
      const elementToScroll = document.querySelector(
        target.getAttribute("href")
      );
      elementToScroll.scrollIntoView({ behavior: "smooth", block: "end" });
    });
  }
};

export default scroll;
