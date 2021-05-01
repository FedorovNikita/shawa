"use strict";

var mainMenu = document.querySelector(".main-nav__list");
var mainHamburger = document.querySelector(".hamburger");
mainHamburger.addEventListener("click", function () {
  mainMenu.classList.toggle("main-nav__list--active");
  mainHamburger.classList.toggle("hamburger--active");
});
$(".slider").slick({
  infinite: true,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
  variableWidth: true,
  prevArrow: $('.arrows__prev'),
  nextArrow: $('.arrows__next'),
  responsive: [{
    breakpoint: 1200,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 1,
      infinite: true
    }
  }, {
    breakpoint: 767,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1
    }
  }]
});