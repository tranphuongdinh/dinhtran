"use strict";

window.addEventListener('load', function () {
  AOS.init();
  window.addEventListener('scroll', function () {
    console.log(window.pageYOffset);

    if (window.pageYOffset > 0) {
      if (window.innerWidth >= 769) {
        document.querySelector('header').classList.add('translateY');
      }

      document.querySelector('header').classList.add('on-scroll');
      document.querySelector('#back-to-top').classList.add('active');
    } else {
      if (window.innerWidth >= 769) {
        document.querySelector('header').classList.remove('translateY');
      }

      document.querySelector('header').classList.remove('on-scroll');
      document.querySelector('#back-to-top').classList.remove('active');
    }
  });
  document.querySelector('.menu-icon').addEventListener('click', function () {
    document.querySelector('.nav-bar').classList.add('active');
    document.querySelector('main').classList.add('blur');
    document.querySelector('footer').classList.add('blur');
  });
  document.querySelector('.close-icon').addEventListener('click', function () {
    document.querySelector('.nav-bar').classList.remove('active');
    document.querySelector('main').classList.remove('blur');
    document.querySelector('footer').classList.remove('blur');
  });
});