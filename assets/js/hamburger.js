import { $, _, __ } from "./utils";

const hamburgerBtn = document.getElementById("hamburger-btn");
const mobileMenu = $("mobile-menu");
const closeBtn = $("close-btn");

const openMobileNav = () => {
  mobileMenu.classList.add("translate-x-0");
  mobileMenu.classList.remove("translate-x-full");
};

const closeMobileNav = () => {
  mobileMenu.classList.add("translate-x-full");
  mobileMenu.classList.remove("translate-x-0");
};

const isOpen = () => {
  return mobileMenu.classList.contains("translate-x-0");
};

const init = () => {
  if (!hamburgerBtn) return;
  hamburgerBtn.addEventListener("click", () => {
    if (isOpen()) {
      closeMobileNav();
    } else {
      openMobileNav();
    }
  });

  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      closeMobileNav();
    });
  }
};

export default hamburger = { init };
