BurgerHead = () => {
  const header = document.querySelector("header");
  const headerList = document.querySelectorAll(".nav-list ul li a");
  const burgerMenu = document.querySelector(".nav-burger");
  const headerLogo = document.querySelector(".nav-logo");
  const headerMenu = document.querySelector(".nav-list");

  burgerMenu.addEventListener("click", () => {
    header.classList.toggle("active");
    headerLogo.classList.toggle("active");
    headerMenu.classList.toggle("active");

    headerList.forEach((e) => {
      e.addEventListener("click", () => {
        header.classList.remove("active");
        headerLogo.classList.remove("active");
        headerMenu.classList.remove("active");
      });
    });
  });
};

BurgerHead();
