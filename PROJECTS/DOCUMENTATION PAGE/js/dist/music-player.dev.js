"use strict";

window.onload = function () {
  if (window.innerWidth >= 768) {
    var renderFrame = function renderFrame() {
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
          g = 255;
          b = 255;
        } else if (dataArray[i] > 150) {
          r = 225;
          g = 225;
          b = 225;
        } else if (dataArray[i] > 90) {
          r = 200;
          g = 200;
          b = 200;
        } else {
          r = 175;
          g = 175;
          b = 175;
        }

        ctx.fillStyle = "rgb(".concat(r, ",").concat(g, ",").concat(b, ")");
        ctx.fillRect(x, HEIGHT - barHeight, barWidth + 2, barHeight);
        x += barWidth + 5;
      }
    };

    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext('2d');
    var context = new AudioContext();
    var backgroundMusic = new Audio();
    backgroundMusic.src = "../sounds/background-lofi.mp3";
    var src = context.createMediaElementSource(backgroundMusic);
    var analyser = context.createAnalyser();
    src.connect(analyser);
    analyser.connect(context.destination); //ANALYSER FFTSIZE

    analyser.fftSize = 16384 / 2;
    var bufferLength = analyser.frequencyBinCount;
    var dataArray = new Uint8Array(bufferLength);
    var WIDTH = canvas.width;
    var HEIGHT = canvas.height;
    var barWidth = WIDTH / bufferLength * 15;
    var barHeight;
    var x = 0;
    backgroundMusic.play();
    backgroundMusic.loop = true;
    renderFrame(); // setTimeout(function() {
    // }, 2500)
    //CONTROL

    var isPlaying = true;
    document.querySelector('.music-player').addEventListener('click', function () {
      if (isPlaying) {
        backgroundMusic.pause();
      } else {
        backgroundMusic.play();
      }

      isPlaying = !isPlaying;
    }, isPlaying);
  }
};