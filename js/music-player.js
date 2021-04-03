window.onload = function () {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    const context = new AudioContext();
    const backgroundMusic = new Audio();

    const soundsName = [
        "Awakening",
        "Dissociation",
        "Filaments",
        "For When It Rains",
        "Lonesome Journey",
        "Memories",
        "Now The Silence",
        "Rebirth",
        "Very Young Old Man",
    ];

    let songIndex = 0;
    backgroundMusic.src = "sounds/" + soundsName[songIndex] + ".mp3";

    let src = context.createMediaElementSource(backgroundMusic);
    const analyser = context.createAnalyser();
    src.connect(analyser);
    analyser.connect(context.destination);

    //ANALYSER FFTSIZE
    analyser.fftSize = 16384 / 2;
    const bufferLength = analyser.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);

    const WIDTH = canvas.width;
    const HEIGHT = canvas.height;

    const barWidth = (WIDTH / bufferLength) * 5;
    let barHeight;
    let x = 0;

    function renderFrame() {
        requestAnimationFrame(renderFrame);
        x = 0;
        analyser.getByteFrequencyData(dataArray);
        ctx.clearRect(0, 0, WIDTH, HEIGHT);

        let r, g, b;
        let bars = 60;
        for (let i = 0; i < bars; i++) {
            barHeight = dataArray[i] * 0.5;
            if (dataArray[i] > 210) {
                r = 0;
                g = 0;
                b = 0;
            } else if (dataArray[i] > 150) {
                r = 40;
                g = 40;
                b = 40;
            } else if (dataArray[i] > 90) {
                r = 80;
                g = 80;
                b = 80;
            } else {
                r = 120;
                g = 120;
                b = 120;
            }

            ctx.fillStyle = `rgb(${r},${g},${b})`;
            ctx.fillRect(x, HEIGHT - barHeight, barWidth + 2, barHeight);
            x += barWidth + 5;
        }
    }

    //======================= CONTROL BUTTONS ============================
    const previousBtn = document.querySelector(".btn-previous");
    const playBtn = document.querySelector(".btn-play");
    const nextBtn = document.querySelector(".btn-next");
    let songName = document.querySelector(".music-name");
    let playIcon = document.querySelector(".play-icon");

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

    previousBtn.addEventListener("click", function () {
        [songIndex, playIcon] = soundController(songIndex, playIcon, false);
    });

    nextBtn.addEventListener("click", function () {
        [songIndex, playIcon] = soundController(songIndex, playIcon, true);
    });

    backgroundMusic.addEventListener("ended", function () {
        [songIndex, playIcon] = soundController(songIndex, playIcon, true);
    });

    playBtn.addEventListener("click", function () {
        if (playIcon.className === "fa fa-play play-icon") {
            backgroundMusic.play();
            playIcon.className = "fa fa-pause play-icon";
        } else {
            backgroundMusic.pause();
            playIcon.className = "fa fa-play play-icon";
        }
    });
    //======================= CONTROL BUTTONS ============================

    setTimeout(function () {
        backgroundMusic.play();
        renderFrame();
    }, 500);
};
