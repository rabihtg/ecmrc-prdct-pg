const menuOpen = document.querySelector(".menu-icon.burger");
const menuClose = document.querySelector(".menu-icon.close");
const navCont = document.querySelector(".nav-items-cont");
const nav = document.querySelector(".nav-shadow");
const sliderNext = document.querySelector(".slider-next");
const sliderPrev = document.querySelector(".slider-prev");
const sliderImages = document.querySelectorAll(".slider-img");
const increaseBtn = document.querySelector(".increase-btn");
const decreaseBtn = document.querySelector(".decrease-btn");
const amountText = document.querySelector(".amount-number");

const thumbs = document.querySelectorAll(".thumb-cont");
const thumbsArr = Array.from(thumbs);

const addToCartBtn = document.querySelector(".cart-cta");
const cartItemRemove = document.querySelector(".cart-item-remove");

const cartIconCont = document.querySelector(".cart-icon-number-cont");

const cartState = document.querySelector(".cart-state");
const cartItemAmount = document.querySelector(".cart-item-amount");
const cartItemTotal = document.querySelector(".cart-item-total");
const cartItemPrice = document.querySelector(".cart-item-price");
const cartItemsNumber = document.querySelector(".cart-items-number");

const boxSliderImages = document.querySelectorAll(".slider-img--light-box");
const boxThumbs = document.querySelectorAll(".thumb-cont--light-box");
const boxThumbsArr = Array.from(boxThumbs);
const lightBox = document.querySelector(".light-box");
const lightBoxCloseBtn = document.querySelector(".light-box-close-btn");
const lightBoxNext = document.querySelector(".slider-light-box--next");
const lightBoxPrev = document.querySelector(".slider-light-box--prev");
const body = document.querySelector("body");
const sliderFigure = document.querySelectorAll(".slider figure");

let currentImageIndex = 0;
const numberOfImages = sliderImages.length;

cartIconCont.addEventListener("click", () => {
  cartIconCont.classList.toggle("selected");
});

sliderImages.forEach((img) => {
  img.addEventListener("click", () => {
    lightBox.classList.remove("off");
  });
});

thumbs.forEach((th) => {
  th.addEventListener("click", () => {
    currentImageIndex = thumbsArr.indexOf(th);
    setSelectedThumb();
    setCurrentImg();
  });
});

boxThumbs.forEach((bt) => {
  bt.addEventListener("click", () => {
    currentImageIndex = boxThumbsArr.indexOf(bt);
    setSelectedThumb();
    setCurrentImg();
  });
});

increaseBtn.addEventListener("click", () => {
  amountText.textContent = parseInt(amountText.textContent) + 1;
});

decreaseBtn.addEventListener("click", () => {
  if (amountText.textContent > 1) {
    amountText.textContent -= 1;
  }
});

sliderNext.addEventListener("click", () => {
  currentImageIndex += 1;
  currentImageIndex %= numberOfImages;
  setCurrentImg();
});

sliderPrev.addEventListener("click", () => {
  currentImageIndex -= 1;
  currentImageIndex = (currentImageIndex + numberOfImages) % numberOfImages;
  setCurrentImg();
});

lightBoxNext.addEventListener("click", () => {
  currentImageIndex += 1;
  currentImageIndex %= numberOfImages;

  setSelectedThumb();
  setCurrentImg();
});

lightBoxPrev.addEventListener("click", () => {
  currentImageIndex -= 1;
  currentImageIndex = (currentImageIndex + numberOfImages) % numberOfImages;

  setSelectedThumb();
  setCurrentImg();
});

menuOpen.addEventListener("click", () => {
  navCont.classList.remove("off");
  nav.classList.add("on");
  body.classList.add("no-scroll");
});

menuClose.addEventListener("click", () => {
  navCont.classList.add("off");
  nav.classList.remove("on");
  body.classList.remove("no-scroll");
});

addToCartBtn.addEventListener("click", () => {
  cartItemAmount.textContent = amountText.textContent;
  cartItemsNumber.textContent = amountText.textContent;
  cartItemsNumber.classList.remove("zero");
  cartItemTotal.textContent =
    "$" +
    parseInt(amountText.textContent) *
      parseInt(cartItemPrice.textContent.split("$")[1]);
  cartState.classList.remove("empty");
  amountText.textContent = 1;
});
cartItemRemove.addEventListener("click", () => {
  cartState.classList.add("empty");
  cartItemsNumber.classList.add("zero");
});

lightBoxCloseBtn.addEventListener("click", () => {
  lightBox.classList.add("off");
});

function setCurrentImg() {
  sliderFigure.forEach((figure) => {
    figure.style.transform = "translateX(" + -100 * currentImageIndex + "%)";
  });
}

function setSelectedThumb() {
  thumbs.forEach((t) => {
    t.classList.remove("selected");
  });
  boxThumbs.forEach((b) => {
    b.classList.remove("selected");
  });
  const th = boxThumbsArr[currentImageIndex];
  const bt = thumbsArr[currentImageIndex];
  th.classList.add("selected");
  bt.classList.add("selected");
}
