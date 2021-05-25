const header = document.querySelector(".header");

//show menu for scroll
let lastScrollTop = 0;

window.addEventListener("scroll", function() {
  let currentScrollTop = this.pageYOffset;

  if (currentScrollTop > lastScrollTop) {
    console.log("DOWN");
    if (currentScrollTop > 105) {
      header.classList.add("hidden");
    }
  } else {
    console.log("UP");
    header.classList.remove("hidden");
  }
  lastScrollTop = currentScrollTop;
});

//menu
const menuButton = document.querySelector("#menu");
const mobileMenu = document.querySelector(".mobileMenu");
const body = document.querySelector("body");

menuButton.addEventListener("click", function() {
  menuButton.classList.toggle("active");
  mobileMenu.classList.toggle("active");
  body.style.overflow = body.style.overflow === "hidden" ? "auto" : "hidden";
});

//call-popup
const callback = document.querySelector("#callback");
const callPopup = document.querySelector(".call-popup");
const closePopupBtn = callPopup.querySelector(".closePopup");

const popupHidden = function() {
  callPopup.classList.add("hidden");
}

const popupShow = function() {
  callPopup.classList.remove("hidden");
}

closePopupBtn.addEventListener("click", function () {
  popupHidden();
});

callback.addEventListener("click", function() {
  if (callPopup.classList.contains("hidden")) {
    popupShow();
  }
});



