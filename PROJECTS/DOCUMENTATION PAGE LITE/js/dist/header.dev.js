"use strict";

window.addEventListener('load', function () {
  document.querySelectorAll('.content').forEach(function () {
    this.addEventListener('mouseout', function () {
      document.querySelector('.main-content').classList = "container main-content normal";
    });
  });
  document.querySelector('.document-item').addEventListener('click', function () {
    document.querySelector('.nav-courses-list').classList.toggle('active');
    document.querySelector('.left-border').classList.toggle('active');
    document.querySelector('.document-item-logo').classList.toggle('active');
    document.querySelector('.document-item-link').classList.toggle('active');
  });
});