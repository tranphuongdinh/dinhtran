"use strict";

window.addEventListener('load', function () {
  document.querySelector('.back-to-top').addEventListener('click', function () {
    window.scrollTo(0, 0);
  });
  document.querySelector('.open-feature-btn').addEventListener('click', function () {
    document.querySelector('.feature-list').classList.toggle('active');
    document.querySelector('.navigation-bar').classList.toggle('active');
    document.querySelector('.open-feature-btn').classList.toggle('active');
  });
  document.querySelector('.dark-mode-btn').addEventListener('click', function () {
    if (document.querySelector('.documents-menu') != null) {
      document.querySelector('.documents-menu').classList.toggle('dark-mode');
    }

    if (document.querySelector('.feature-bar') != null) {
      document.querySelector('.feature-bar').classList.toggle('dark-mode');
    }

    document.querySelector('header').classList.toggle('dark-mode');
    document.querySelector('.dark-mode-btn').classList.toggle('dark-mode');
    document.querySelectorAll('.document-title').forEach(function (e) {
      e.classList.toggle('dark-mode');
    });
  });
  document.querySelector('.notification-btn').addEventListener('click', function () {
    alert('Tính năng sẽ sớm được cập nhật!');
  });
  var documentLinks, documentSubjects;

  if (document.querySelectorAll('.documents-link') != null && document.querySelectorAll('.document-subject') != null) {
    documentLinks = document.querySelectorAll('.documents-link');
    documentSubjects = document.querySelectorAll('.document-subject');

    var _loop = function _loop(i) {
      if (documentLinks[i] != null) {
        documentLinks[i].addEventListener('click', function () {
          documentLinks[i].classList.add('active');

          for (var j = 0; j < documentLinks.length; j++) {
            if (j != i) {
              documentLinks[j].classList.remove('active');
            }
          }
        });
      }
    };

    for (var i = 0; i < documentSubjects.length; i++) {
      _loop(i);
    }

    var _loop2 = function _loop2(_i) {
      documentSubjects[_i].addEventListener('mouseover', function () {
        if (documentLinks[_i] != null) {
          documentLinks[_i].classList.add('active');

          for (var j = 0; j < documentLinks.length; j++) {
            if (j != _i) {
              documentLinks[j].classList.remove('active');
            }
          }
        }
      });
    };

    for (var _i = 0; _i < documentSubjects.length; _i++) {
      _loop2(_i);
    }
  }
});