"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

window.onload = function () {
  setTimeout(function () {
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext('2d');
    var context = new AudioContext();
    var backgroundMusic = new Audio();
    var soundsName = ['Weight Of The World', 'Alien Manifestation', 'Ashes Of Dreams', 'Fortress Of Lies', 'Song Of Ancients', 'The Tower', 'Voice Of No Return', 'Wretched Weaponry'];
    var songIndex = 0;
    backgroundMusic.src = "sounds/" + soundsName[songIndex] + ".mp3";
    var src = context.createMediaElementSource(backgroundMusic);
    var analyser = context.createAnalyser();
    src.connect(analyser);
    analyser.connect(context.destination); //ANALYSER FFTSIZE

    analyser.fftSize = 16384;
    var bufferLength = analyser.frequencyBinCount;
    var dataArray = new Uint8Array(bufferLength);
    var WIDTH = canvas.width;
    var HEIGHT = canvas.height;
    var barWidth = WIDTH / bufferLength * 13;
    var barHeight;
    var x = 0;

    function renderFrame() {
      requestAnimationFrame(renderFrame);
      x = 0;
      analyser.getByteFrequencyData(dataArray);
      ctx.clearRect(0, 0, WIDTH, HEIGHT);
      var r, g, b;
      var bars = 60;

      for (var i = 0; i < bars; i++) {
        barHeight = dataArray[i] * 0.5;

        if (dataArray[i] > 210) {
          r = 255;
          g = 81;
          b = 0;
        } else if (dataArray[i] > 150) {
          r = 226;
          g = 119;
          b = 49;
        } else if (dataArray[i] > 90) {
          r = 184;
          g = 98;
          b = 40;
        } else {
          r = 145;
          g = 77;
          b = 32;
        }

        ctx.fillStyle = "rgb(".concat(r, ",").concat(g, ",").concat(b, ")");
        ctx.fillRect(x, HEIGHT - barHeight, barWidth + 2, barHeight);
        x += barWidth + 5;
      }
    } //======================= CONTROL BUTTONS ============================


    var previousBtn = document.querySelector('.btn-previous');
    var playBtn = document.querySelector('.btn-play');
    var nextBtn = document.querySelector('.btn-next');
    var songName = document.querySelector('.music-name');
    var playIcon = playBtn.firstChild;

    function soundController(songIndex, playIcon, isNext) {
      if (!isNext) {
        if (songIndex === 0) {
          songIndex = soundsName.length - 1;
        } else songIndex--;
      } else {
        if (songIndex === soundsName.length - 1) {
          songIndex = 0;
        } else songIndex++;
      }

      songName.innerHTML = soundsName[songIndex];
      backgroundMusic.src = "sounds/" + soundsName[songIndex] + ".mp3";
      backgroundMusic.play();
      playIcon.className = "fa fa-pause";
      renderFrame();
      return [songIndex, playIcon];
    }

    previousBtn.addEventListener('click', function () {
      var _soundController = soundController(songIndex, playIcon, false);

      var _soundController2 = _slicedToArray(_soundController, 2);

      songIndex = _soundController2[0];
      playIcon = _soundController2[1];
    });
    nextBtn.addEventListener('click', function () {
      var _soundController3 = soundController(songIndex, playIcon, true);

      var _soundController4 = _slicedToArray(_soundController3, 2);

      songIndex = _soundController4[0];
      playIcon = _soundController4[1];
    });
    backgroundMusic.addEventListener('ended', function () {
      var _soundController5 = soundController(songIndex, playIcon, true);

      var _soundController6 = _slicedToArray(_soundController5, 2);

      songIndex = _soundController6[0];
      playIcon = _soundController6[1];
    });
    playBtn.addEventListener('click', function () {
      if (playIcon.className === "fa fa-play") {
        backgroundMusic.play();
        playIcon.className = "fa fa-pause";
      } else {
        backgroundMusic.pause();
        playIcon.className = "fa fa-play";
      }
    }); //======================= CONTROL BUTTONS ============================

    backgroundMusic.play();
    renderFrame();
  }, 2500);
};