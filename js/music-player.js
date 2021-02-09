window.onload = function() {
    setTimeout(function() {
        const canvas = document.getElementById("canvas")
        const ctx = canvas.getContext('2d')
        const context = new AudioContext()
        const backgroundMusic = new Audio()

        const soundsName = ['Weight Of The World', 'Alien Manifestation', 'Ashes Of Dreams', 'Fortress Of Lies', 'Song Of Ancients', 'The Tower', 'Voice Of No Return', 'Wretched Weaponry']

        let songIndex = 0
        backgroundMusic.src = "sounds/" + soundsName[songIndex] + ".mp3"

        let src = context.createMediaElementSource(backgroundMusic)
        const analyser = context.createAnalyser()
        src.connect(analyser)
        analyser.connect(context.destination)

        //ANALYSER FFTSIZE
        analyser.fftSize = 16384
        const bufferLength = analyser.frequencyBinCount
        const dataArray = new Uint8Array(bufferLength)

        const WIDTH = canvas.width
        const HEIGHT = canvas.height

        const barWidth = (WIDTH / bufferLength) * 13
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
                    g = 81
                    b = 0
                } else if (dataArray[i] > 150) {
                    r = 226
                    g = 119
                    b = 49
                } else if (dataArray[i] > 90) {
                    r = 184
                    g = 98
                    b = 40
                } else {
                    r = 145
                    g = 77
                    b = 32
                }

                ctx.fillStyle = `rgb(${r},${g},${b})`
                ctx.fillRect(x, (HEIGHT - barHeight), barWidth + 2, barHeight)
                x += barWidth + 5
            }
        }

        //======================= CONTROL BUTTONS ============================
        const previousBtn = document.querySelector('.btn-previous')
        const playBtn = document.querySelector('.btn-play')
        const nextBtn = document.querySelector('.btn-next')
        let songName = document.querySelector('.music-name')
        let playIcon = playBtn.firstChild

        function soundController(songIndex, playIcon, isNext) {
            if (!isNext) {
                if (songIndex === 0) {
                    songIndex = soundsName.length - 1
                } else
                    songIndex--
            } else {
                if (songIndex === soundsName.length - 1) {
                    songIndex = 0
                } else
                    songIndex++
            }
            songName.innerHTML = soundsName[songIndex]
            backgroundMusic.src = "sounds/" + soundsName[songIndex] + ".mp3"
            backgroundMusic.play()
            playIcon.className = "fa fa-pause"
            renderFrame()
            return [songIndex, playIcon]
        }

        previousBtn.addEventListener('click', function() {
            [songIndex, playIcon] = soundController(songIndex, playIcon, false)
        })

        nextBtn.addEventListener('click', function() {
            [songIndex, playIcon] = soundController(songIndex, playIcon, true)
        })

        backgroundMusic.addEventListener('ended', function() {
            [songIndex, playIcon] = soundController(songIndex, playIcon, true)
        })

        playBtn.addEventListener('click', function() {
                if (playIcon.className === "fa fa-play") {
                    backgroundMusic.play()
                    playIcon.className = "fa fa-pause"
                } else {
                    backgroundMusic.pause()
                    playIcon.className = "fa fa-play"
                }
            })
            //======================= CONTROL BUTTONS ============================

        backgroundMusic.play()
        renderFrame()
    }, 2500)
}