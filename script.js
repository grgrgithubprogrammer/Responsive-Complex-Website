/* Dropdown */

const headerDropdown = document.querySelector(".header-dropdown");
const headerDropdownOpen = document.querySelector(".header-dropdown-open");
const headerDropdownClose = document.querySelector(".header-dropdown-close");
const headerImageLinks = document.querySelector(".header-menu");

headerImageLinks.classList.add("hidden");

headerDropdown.addEventListener("click", () => {
  headerDropdownOpen.classList.toggle("hidden");
  headerDropdownClose.classList.toggle("hidden");
  headerImageLinks.classList.toggle("hidden");
});

/* Mode */

const modeElements = document.querySelectorAll(
  "header,.header-menu,footer,.section-1-container-div-1,.section-1-container-div-2,.section-1-container-div-3,form,form input"
);

const mode = document.querySelector("#mode");
const modeScrollToTop = document.querySelector("#scrollToTop");
const modeSectionOne = document.querySelector(".section-1");
const modeFormButton = document.querySelector("button");

const modeLight = document.querySelector(".light");
const modeDark = document.querySelector(".dark");

mode.addEventListener("click", () => {
  modeScrollToTop.classList.toggle("scroll-to-top-shadow-dark-mode");
  modeSectionOne.classList.toggle("section-1-dark-mode");
  modeFormButton.classList.toggle("form-button-dark-mode");

  modeLight.classList.toggle("hidden");
  modeDark.classList.toggle("hidden");

  modeElements.forEach((modeElement, index) => {
    modeElement.classList.toggle("dark-mode");
    if (index > 5 && index < 11) {
      modeElement.classList.toggle("input-dark-mode");
    }
  });
});

/* Scroll to top*/

const scrollToTop = document.querySelector("#scrollToTop");

const scrollFunction = () => {
  const scrollPosition = window.scrollY || document.documentElement.scrollTop;

  if (
    scrollPosition >
    document.documentElement.scrollHeight - window.innerHeight - 0.5
  ) {
    scrollToTop.style.display = "block";
  } else {
    scrollToTop.style.display = "none";
  }
};

scrollToTop.addEventListener("click", () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

window.addEventListener("scroll", scrollFunction);

window.addEventListener("DOMContentLoaded", () => {
  scrollFunction();
});
