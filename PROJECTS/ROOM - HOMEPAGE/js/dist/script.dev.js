"use strict";

$(document).ready(function () {
  var i = 0;
  var isOpen = false;
  var imagesSources = [{
    imgSrc: "./images/desktop-image-hero-1.jpg",
    imgSrcMob: "./images/mobile-image-hero-1.jpg"
  }, {
    imgSrc: "./images/desktop-image-hero-2.jpg",
    imgSrcMob: "./images/mobile-image-hero-2.jpg"
  }, {
    imgSrc: "./images/desktop-image-hero-3.jpg",
    imgSrcMob: "./images/mobile-image-hero-3.jpg"
  }];
  var deviceWidth = window.innerWidth > 0 ? window.innerWidth : screen.width;

  for (var j = 0; j < imagesSources.length; j++) {
    if (deviceWidth >= 768) $($('.container__top__first__sliders__img')[j]).attr('src', "".concat(imagesSources[j].imgSrc));else $($('.container__top__first__sliders__img')[j]).attr('src', "".concat(imagesSources[j].imgSrcMob));
  }

  var autoSlider = setInterval(function () {
    i++;
    if (i === imagesSources.length) i = 0;
    $('.container__top__first__sliders').animate({
      left: "-".concat(100 * i, "%")
    }, 1000);
    $('.container__top__second__content__sliders').animate({
      left: "-".concat(100 * i, "%")
    }, 1000);

    for (var _j = 0; _j < imagesSources.length; _j++) {
      if (_j === i) $($('.container__top__first__label')[_j]).addClass('active');else $($('.container__top__first__label')[_j]).removeClass('active');
    }
  }, 4000);
  $('.container__top__second_buttons--left').click(function () {
    clearInterval(autoSlider);
    i--;
    if (i === -1) i = imagesSources.length - 1;
    $('.container__top__first__sliders').animate({
      left: "-".concat(100 * i, "%")
    }, 1000);
    $('.container__top__second__content__sliders').animate({
      left: "-".concat(100 * i, "%")
    }, 1000);

    for (var _j2 = 0; _j2 < imagesSources.length; _j2++) {
      if (_j2 === i) $($('.container__top__first__label')[_j2]).addClass('active');else $($('.container__top__first__label')[_j2]).removeClass('active');
    }
  });
  $('.container__top__second_buttons--right').click(function () {
    clearInterval(autoSlider);
    i++;
    if (i === imagesSources.length) i = 0;
    $('.container__top__first__sliders').animate({
      left: "-".concat(100 * i, "%")
    }, 1000);
    $('.container__top__second__content__sliders').animate({
      left: "-".concat(100 * i, "%")
    }, 1000);

    for (var _j3 = 0; _j3 < imagesSources.length; _j3++) {
      if (_j3 === i) $($('.container__top__first__label')[_j3]).addClass('active');else $($('.container__top__first__label')[_j3]).removeClass('active');
    }
  });
  $('.menu-icon').click(function () {
    if (isOpen === false) {
      $('.nav-list').addClass('active');
      $('.menu-icon').addClass('rotate');
      $('.menu-icon-img').attr('src', './images/icon-close.svg');
      isOpen = true;
    } else {
      $('.nav-list').removeClass('active');
      $('.menu-icon').removeClass('rotate');
      $('.menu-icon-img').attr('src', './images/icon-hamburger.svg');
      isOpen = false;
    }
  });
});