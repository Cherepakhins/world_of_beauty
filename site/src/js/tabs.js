const tab = () => {
  let tabNav = document.querySelectorAll(".tabs-nav__item");
  let tabContent = document.querySelectorAll(".tab");
  let tabName;

  tabNav.forEach((item) => {
    item.addEventListener("click", selectTabNav);
  });

  function selectTabNav() {
    tabNav.forEach((item) => {
      item.classList.remove("tabs-nav__item--active");
    });
    this.classList.add("tabs-nav__item--active");
    tabName = this.getAttribute("data");
    selectTabContent(tabName);
  }
  function selectTabContent(tabName) {
    tabContent.forEach((item) => {
      item.classList.contains(tabName)
        ? item.classList.add("tab--active")
        : item.classList.remove("tab--active");
    });
  }
};

export default tab;
