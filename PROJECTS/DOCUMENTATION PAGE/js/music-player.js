window.onload = function() {
    if (window.innerWidth >= 769) {
        const canvas = document.getElementById("canvas")
        const ctx = canvas.getContext('2d')
        const context = new AudioContext()
        const backgroundMusic = new Audio()

        backgroundMusic.src = "../sounds/background-lofi.mp3"

        let src = context.createMediaElementSource(backgroundMusic)
        const analyser = context.createAnalyser()
        src.connect(analyser)
        analyser.connect(context.destination)

        //ANALYSER FFTSIZE
        analyser.fftSize = 16384 / 2
        const bufferLength = analyser.frequencyBinCount
        const dataArray = new Uint8Array(bufferLength)

        const WIDTH = canvas.width
        const HEIGHT = canvas.height

        const barWidth = (WIDTH / bufferLength) * 15
        let barHeight
        let x = 0

        function renderFrame() {
            requestAnimationFrame(renderFrame)
            x = 0
            analyser.getByteFrequencyData(dataArray)
            ctx.clearRect(0, 0, WIDTH, HEIGHT)

            let r, g, b;
            let bars = 60
            for (let i = 0; i < bars; i++) {
                barHeight = (dataArray[i] * 0.5)
                if (dataArray[i] > 210) {
                    r = 255
                    g = 255
                    b = 255
                } else if (dataArray[i] > 150) {
                    r = 225
                    g = 225
                    b = 225
                } else if (dataArray[i] > 90) {
                    r = 200
                    g = 200
                    b = 200
                } else {
                    r = 175
                    g = 175
                    b = 175
                }

                ctx.fillStyle = `rgb(${r},${g},${b})`
                ctx.fillRect(x, (HEIGHT - barHeight), barWidth + 2, barHeight)
                x += barWidth + 5
            }
        }

        backgroundMusic.play()
        backgroundMusic.loop = true
        renderFrame()
            // setTimeout(function() {

        // }, 2500)
        //CONTROL
        let isPlaying = true;
        document.querySelector('.music-player').addEventListener('click', function() {
            if (isPlaying) {
                backgroundMusic.pause()
            } else {
                backgroundMusic.play()
            }
            isPlaying = !isPlaying
        }, isPlaying)
    }
}