"use strict";

document.getElementById("copyright-year").textContent =
  new Date().getFullYear();

const navContainer = document.querySelector(".nav-container");
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

if (navContainer && navToggle && navLinks) {
  const navToggleIcon = navToggle.querySelector("i");

  const setMenuState = function (isOpen) {
    navContainer.classList.toggle("nav-open", isOpen);
    navToggle.setAttribute("aria-expanded", String(isOpen));

    if (navToggleIcon) {
      navToggleIcon.classList.toggle("fa-bars", !isOpen);
      navToggleIcon.classList.toggle("fa-xmark", isOpen);
    }
  };

  navToggle.addEventListener("click", function () {
    const isOpen = navContainer.classList.contains("nav-open");
    setMenuState(!isOpen);
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
}

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
