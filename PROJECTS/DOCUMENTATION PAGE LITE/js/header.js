window.addEventListener('load', function() {
    document.querySelectorAll('.content').forEach(function() {
        this.addEventListener('mouseout', function() {
            document.querySelector('.main-content').classList = "container main-content normal"
        })
    })
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 0) {
            document.querySelector('.back-to-top').classList.add('active')
        } else {
            document.querySelector('.back-to-top').classList.remove('active')
        }
    })
})