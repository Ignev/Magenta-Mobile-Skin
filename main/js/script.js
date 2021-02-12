$(".slider").slick({
  infinite: true,
  draggable: true,
  slidesPerRow: 1,
  slidesToShow: 1,
  slidesToScroll: 1,
  waitForAnimate: true,
  swipeToSlide: true,
  touchThreshold: 100,
  speed: 500,
  pauseOnHover: true,
  autoplaySpeed: 3000,
  arrows: true,
  autoplay: false,
  prevArrow: ".slider__pre",
  nextArrow: ".slider__next",
});

const items = document.querySelectorAll(".slider__img");
const phone = document.querySelectorAll(".img__media");
const popup = document.querySelectorAll(".slider__popup");



// items.forEach((it, k) => {
//   phone.forEach((item, i) => {
//     popup.forEach((itm, j) => {
//         it.addEventListener("click", () => {
//             if (!item.classList.contains("img__media-active")) {
//               item.classList.add("img__media-active");
//             } else {
//               item.classList.remove("img__media-active");

//             }
//             if(item.classList.contains("img__media-active")){
//                 itm.classList.add("slider__popup-active");
//             }
//             else{
//                 itm.classList.remove("slider__popup-active");
//             }
//           });
//     })
//   });
// });
slider__item1.addEventListener("click", (e) => {
  e.preventDefault();
	e.stopPropagation();
  if (!img__media1.classList.contains("img__media-active")) {
    img__media1.classList.add("img__media-active");
  } else {
    img__media1.classList.remove("img__media-active");
  }
  if (img__media1.classList.contains("img__media-active")) {
    slider__popup1.classList.add("slider__popup-active");
  } else {
    slider__popup1.classList.remove("slider__popup-active");
  }
  tap.style.display = "none";
});
slider__item2.addEventListener("click", (e) => {
  e.preventDefault();
	e.stopPropagation();
  if (!img__media2.classList.contains("img__media-active")) {
    img__media2.classList.add("img__media-active");
  } else {
    img__media2.classList.remove("img__media-active");
  }
  if (img__media2.classList.contains("img__media-active")) {
    slider__popup2.classList.add("slider__popup-active");
  } else {
    slider__popup2.classList.remove("slider__popup-active");
  }
});
slider__item3.addEventListener("click", (e) => {
  e.preventDefault();
	e.stopPropagation();
  if (!img__media3.classList.contains("img__media-active")) {
    img__media3.classList.add("img__media-active");
  } else {
    img__media3.classList.remove("img__media-active");
  }
  if (img__media3.classList.contains("img__media-active")) {
    slider__popup3.classList.add("slider__popup-active");
  } else {
    slider__popup3.classList.remove("slider__popup-active");
  }
});
slider__item4.addEventListener("click", (e) => {
  e.preventDefault();
	e.stopPropagation();
  if (!img__media4.classList.contains("img__media-active")) {
    img__media4.classList.add("img__media-active");
  } else {
    img__media4.classList.remove("img__media-active");
  }
  if (img__media4.classList.contains("img__media-active")) {
    slider__popup4.classList.add("slider__popup-active");
  } else {
    slider__popup4.classList.remove("slider__popup-active");
  }
});

$(".slider").on(
  "afterChange",
  function (event, slick, currentSlide, nextSlide) {
    phone.forEach((item) => {
      item.classList.remove("img__media-active");
    });
    popup.forEach((item) => {
      item.classList.remove("slider__popup-active");
    });
  }
);
