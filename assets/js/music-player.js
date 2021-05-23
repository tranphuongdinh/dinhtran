window.onload = function () {
    if (window.innerWidth > 768) {
        const canvas = document.getElementById("canvas");
        const musicPlayer = document.querySelector(".music-player");
        const ctx = canvas.getContext("2d");
        const context = new AudioContext();
        const backgroundMusic = new Audio();

        backgroundMusic.src = "sounds/background.mp3";

        backgroundMusic.loop = true;

        let src = context.createMediaElementSource(backgroundMusic);
        const analyser = context.createAnalyser();
        src.connect(analyser);
        analyser.connect(context.destination);

        //ANALYSER FFTSIZE
        analyser.fftSize = 16384 / 4;
        const bufferLength = analyser.frequencyBinCount;
        const dataArray = new Uint8Array(bufferLength);

        const WIDTH = canvas.width;
        const HEIGHT = canvas.height;

        const barWidth = (WIDTH / bufferLength) * 10;
        let barHeight;
        let x = 0;

        let isPlaying = localStorage.getItem("is-playing");
        if (isPlaying === null) {
            localStorage.setItem("is-playing", "true");
            isPlaying = localStorage.getItem("is-playing");
        }

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

        canvas.addEventListener("click", function () {
            if (isPlaying == "false") {
                isPlaying = "true";
                musicPlayer.classList.remove("pause");
                backgroundMusic.play();
                renderFrame();
            } else {
                isPlaying = "false";
                musicPlayer.classList.add("pause");
                backgroundMusic.pause();
            }

            localStorage.setItem("is-playing", isPlaying);
        });
        //======================= CONTROL BUTTONS ============================

        setTimeout(function () {
            if (isPlaying == "true") {
                backgroundMusic.play();
                renderFrame();
            } else {
                musicPlayer.classList.add("pause");
            }
        }, 500);
    }
};
