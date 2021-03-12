window.addEventListener('load', function() {
    document.querySelector('.courses').addEventListener('mouseover', function() {
        document.querySelector('.main-content').classList = "container home main-content courses-active"
    })
    document.querySelector('.documents').addEventListener('mouseover', function() {
        document.querySelector('.main-content').classList = "container home main-content documents-active"
    })
    document.querySelector('.tests').addEventListener('mouseover', function() {
        document.querySelector('.main-content').classList = "container home main-content tests-active"
    })
    document.querySelectorAll('.content').forEach(function() {
        this.addEventListener('mouseout', function() {
            document.querySelector('.main-content').classList = "container home main-content normal"
        })
    })
    var timeout;
    document.onmousemove = function() {
        clearTimeout(timeout);
        document.querySelectorAll('.content').forEach(function(content) {
            content.classList.remove('fade')
        })
        document.querySelector('header').classList.remove('fade')
        document.querySelector('.music-player').classList.remove('active')
        timeout = setTimeout(function() {
            document.querySelectorAll('.content').forEach(function(content) {
                content.classList.add('fade')
            })
            document.querySelector('header').classList.add('fade')
            document.querySelector('.music-player').classList.add('active')
        }, 5000);
    }
})