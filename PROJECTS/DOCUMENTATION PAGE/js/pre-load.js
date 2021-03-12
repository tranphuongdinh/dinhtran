document.body.classList.add('page-loading')

window.addEventListener('load', function() {
    document.body.classList.remove('page-loading')
    loadScreen = document.getElementById('loading')
    loadScreen.classList.add('fade-out')
}, false);