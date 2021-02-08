"use strict";

AOS.init({
  duration: 1500
}); //BACK TO TOP BUTTON

var backToTopButton = document.querySelector("#back-to-top-btn");
window.addEventListener('scroll', scrollFunction);

function scrollFunction() {
  if (window.pageYOffset > 20) {
    if (!backToTopButton.classList.contains('btnEntrance')) {
      backToTopButton.classList.remove('btnExit');
      backToTopButton.classList.add('btnEntrance');
      backToTopButton.style.display = 'block';
    }
  } else {
    if (backToTopButton.classList.contains('btnEntrance')) {
      backToTopButton.classList.remove('btnEntrance');
      backToTopButton.classList.add('btnExit');
      setTimeout(function () {
        backToTopButton.style.display = 'none';
      }, 250);
    }
  }
}

backToTop = function backToTop() {
  window.scrollTo(0, 0);
};

backToTopButton.addEventListener('click', backToTop); //BACK TO TOP BUTTON

$(document).ready(function () {
  $('#loading').fadeOut('slow');
  $('.img-full-screen').hide();
  var images = $('.certificates__img');
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = images[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      img = _step.value;
      $(img).click(function () {
        var imgSrc = $(this).attr('src');
        var imgLink = $(this).attr('data-link');
        var fullSrcImg = $('#img-full-screen__img');
        $(fullSrcImg).attr('src', imgSrc);
        $('.img-full-screen__link').attr('href', imgLink);
        $('.img-full-screen').show('slow');
      });
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  $('.img-full-screen__close-btn').click(function () {
    $('.img-full-screen').hide('slow');
  });
  var isDark = false;
  $('#dark-mode-btn').click(function () {
    if (!isDark) {
      $('html').addClass('dark-mode');
      $('#home').addClass('dark-mode');
      $('img').addClass('dark-mode');
      $('.project-card').addClass('dark-mode');
      $('footer').addClass('dark-mode');
      $('#dark-mode-btn-content').removeClass('fa-moon');
      $('#dark-mode-btn-content').addClass('fa-sun');
      isDark = true;
    } else {
      $('html').removeClass('dark-mode');
      $('#home').removeClass('dark-mode');
      $('img').removeClass('dark-mode');
      $('.project-card').removeClass('dark-mode');
      $('footer').removeClass('dark-mode');
      $('#dark-mode-btn-content').removeClass('fa-sun');
      $('#dark-mode-btn-content').addClass('fa-moon');
      isDark = false;
    }
  });
});