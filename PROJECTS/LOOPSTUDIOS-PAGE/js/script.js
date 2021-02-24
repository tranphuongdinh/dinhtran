window.addEventListener('load', function() {
    window.addEventListener('scroll', function() {
        var header = document.querySelector('header')
        if (window.pageYOffset > 0) {
            document.querySelector('header').classList.add('on-scroll');
        } else {
            document.querySelector('header').classList.remove('on-scroll');
        }
    })
    document.querySelector('.menu-icon').addEventListener('click', function() {
        document.querySelector('.nav-bar').classList.add('open');
        document.querySelector('main').classList.add('blur');
        document.querySelector('footer').classList.add('blur');
    });
    document.querySelector('.close-icon').addEventListener('click', function() {
        document.querySelector('.nav-bar').classList.remove('open');
        document.querySelector('main').classList.remove('blur');
        document.querySelector('footer').classList.remove('blur');
    });
})