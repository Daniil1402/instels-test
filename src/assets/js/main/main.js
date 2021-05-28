const header = document.querySelector(".header");
const headerHeight = header.offsetHeight;

//show menu for scroll
let lastScrollTop = 0;

window.addEventListener("scroll", function() {
  let currentScrollTop = this.pageYOffset;

  if (currentScrollTop > lastScrollTop) {
    //console.log("DOWN");
    if (currentScrollTop > headerHeight) {
      header.classList.add("hidden");
    }
  } else {
    //console.log("UP");
    header.classList.remove("hidden");
  }
  lastScrollTop = currentScrollTop;
});

//header height
const sliderSection = document.querySelector(".slider");

sliderSection.style.paddingTop = `${headerHeight}px`


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
const closeCall = callPopup.querySelector(".closePopup");

const popupHidden = function(popup) {
  popup.classList.add("hidden");
}

const popupShow = function(popup) {
  popup.classList.remove("hidden");
}

closeCall.addEventListener("click", function () {
  popupHidden(callPopup);
});

// callback.addEventListener("click", function() {
//   if (callPopup.classList.contains("hidden")) {
//     popupShow(callPopup);
//   }
// });

body.addEventListener("click", function (evt) {
  if (evt.target.hasAttribute("data-callback")) {
    if (callPopup.classList.contains("hidden")) {
      popupShow(callPopup);
    }
  }
});

//info-popup
const infoPopup = document.querySelector(".info-popup");
const popupBtn = document.querySelector(".popupBtn");
const closeInfo = infoPopup.querySelector(".closePopup");

const computePopupCoord = function() {
  let popupBtnRect = popupBtn.getBoundingClientRect();
  let popupInfoRect = infoPopup.getBoundingClientRect();  
  const topOffset = popupBtn.offsetTop;
  const leftOffset = popupBtn.offsetLeft;
  console.log(topOffset);
  infoPopup.style = `top: ${topOffset - popupInfoRect.height - (popupBtnRect.height / 2)}px; left: ${(leftOffset + (popupBtnRect.width / 5)) - (popupInfoRect.width / 2)}px;`;
};

popupBtn.addEventListener("click", function () {
  if (infoPopup.classList.contains("hidden")) {
    popupShow(infoPopup);
    computePopupCoord();
  } else {
    popupHidden(infoPopup);
  }
  
});

closeInfo.addEventListener("click", function () {
  popupHidden(infoPopup);
});

