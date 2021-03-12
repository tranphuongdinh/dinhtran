window.addEventListener('load', function() {
    document.querySelector('.back-to-top').addEventListener('click', function() {
        window.scrollTo(0, 0)
    })

    document.querySelector('.open-feature-btn').addEventListener('click', function() {
        document.querySelector('.feature-list').classList.toggle('active');
        document.querySelector('.navigation-bar').classList.toggle('active');
        document.querySelector('.open-feature-btn').classList.toggle('active');
    })

    document.querySelector('.dark-mode-btn').addEventListener('click', function() {
        if (document.querySelector('.documents-menu') != null) {
            document.querySelector('.documents-menu').classList.toggle('dark-mode')
        }
        if (document.querySelector('.feature-bar') != null) {
            document.querySelector('.feature-bar').classList.toggle('dark-mode')
        }
        document.querySelector('header').classList.toggle('dark-mode')
        document.querySelector('.dark-mode-btn').classList.toggle('dark-mode')
        document.querySelectorAll('.document-title').forEach(function(e) {
            e.classList.toggle('dark-mode')
        })
    })

    document.querySelector('.notification-btn').addEventListener('click', function() {
        alert('Tính năng sẽ sớm được cập nhật!')
    })

    function getOffset(el) {
        var _x = 0;
        var _y = 0;
        while (el && !isNaN(el.offsetLeft) && !isNaN(el.offsetTop)) {
            _x += el.offsetLeft - el.scrollLeft;
            _y += el.offsetTop - el.scrollTop;
            el = el.offsetParent;
        }
        return { top: _y, left: _x };
    }
})