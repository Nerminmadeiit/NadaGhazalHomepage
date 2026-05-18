"use strict";

document.getElementById("copyright-year").textContent =
  new Date().getFullYear();

const navContainer = document.querySelector(".nav-container");
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

if (navContainer && navToggle && navLinks) {
  const navToggleIcon = navToggle.querySelector("i");
  const firstNavLink = navLinks.querySelector("a");

  const setMenuState = function (isOpen, options = {}) {
    const { moveFocus = false } = options;

    navContainer.classList.toggle("nav-open", isOpen);
    navToggle.setAttribute("aria-expanded", String(isOpen));

    if (navToggleIcon) {
      navToggleIcon.classList.toggle("fa-bars", !isOpen);
      navToggleIcon.classList.toggle("fa-xmark", isOpen);
    }

    if (moveFocus) {
      if (isOpen && firstNavLink) {
        firstNavLink.focus();
      }

      if (!isOpen) {
        navToggle.focus();
      }
    }
  };

  navToggle.addEventListener("click", function () {
    const isOpen = navContainer.classList.contains("nav-open");
    setMenuState(!isOpen, { moveFocus: true });
  });

  navLinks.addEventListener("click", function (event) {
    if (event.target.closest("a") && window.innerWidth <= 1200) {
      setMenuState(false);
    }
  });

  window.addEventListener("resize", function () {
    if (window.innerWidth > 1200) {
      setMenuState(false);
    }
  });

  document.addEventListener("keydown", function (event) {
    const isOpen = navContainer.classList.contains("nav-open");

    if (event.key === "Escape" && isOpen) {
      setMenuState(false, { moveFocus: true });
    }
  });
}

const footerAccordionBtns = document.querySelectorAll(".footer-accordion-btn");

footerAccordionBtns.forEach((btn) => {
  btn.addEventListener("click", function () {
    const section = this.getAttribute("data-section");
    const content = document.getElementById(section);
    const isOpen = content.style.display !== "none";

    footerAccordionBtns.forEach((otherBtn) => {
      const otherSection = otherBtn.getAttribute("data-section");
      const otherContent = document.getElementById(otherSection);
      otherContent.style.display = "none";
      otherBtn.setAttribute("aria-expanded", "false");
      const icon = otherBtn.querySelector("i");
      if (icon) {
        icon.classList.remove("fa-chevron-up");
        icon.classList.add("fa-chevron-down");
      }
    });

    if (!isOpen) {
      content.style.display = "block";
      this.setAttribute("aria-expanded", "true");
      const icon = this.querySelector("i");
      if (icon) {
        icon.classList.remove("fa-chevron-down");
        icon.classList.add("fa-chevron-up");
      }
    }
  });
});

const heroVideo = document.getElementById("heroVideo");
const soundToggle = document.getElementById("soundToggle");
const soundIcon = document.getElementById("soundIcon");

if (heroVideo && soundToggle && soundIcon) {
  soundToggle.addEventListener("click", function () {
    heroVideo.muted = !heroVideo.muted;

    if (heroVideo.muted) {
      soundIcon.classList.remove("fa-volume-high");
      soundIcon.classList.add("fa-volume-xmark");
      soundToggle.setAttribute("aria-label", "Unmute video");
    } else {
      soundIcon.classList.remove("fa-volume-xmark");
      soundIcon.classList.add("fa-volume-high");
      soundToggle.setAttribute("aria-label", "Mute video");
    }
  });
}

const socialCarousel = document.getElementById("socialCarousel");
const carouselPrev = document.querySelector(".carousel-btn-prev");
const carouselNext = document.querySelector(".carousel-btn-next");

if (socialCarousel && carouselPrev && carouselNext) {
  const getScrollAmount = function () {
    const firstImage = socialCarousel.querySelector("img");

    if (!firstImage) {
      return 300;
    }

    const imageWidth = firstImage.getBoundingClientRect().width;
    return imageWidth + 24;
  };

  carouselPrev.addEventListener("click", function () {
    socialCarousel.scrollBy({
      left: -getScrollAmount(),
      behavior: "smooth",
    });
  });

  carouselNext.addEventListener("click", function () {
    socialCarousel.scrollBy({
      left: getScrollAmount(),
      behavior: "smooth",
    });
  });
}
