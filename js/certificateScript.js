AOS.init({ duration: 1500 })
    //BACK TO TOP BUTTON
const backToTopButton = document.querySelector("#back-to-top-btn");

window.addEventListener('scroll', scrollFunction);

function scrollFunction() {
    if (window.pageYOffset > 20) {
        if (!backToTopButton.classList.contains('btnEntrance')) {
            backToTopButton.classList.remove('btnExit');
            backToTopButton.classList.add('btnEntrance');
            backToTopButton.style.display = 'block';
        }
    } else {
        if (backToTopButton.classList.contains('btnEntrance')) {
            backToTopButton.classList.remove('btnEntrance');
            backToTopButton.classList.add('btnExit');
            setTimeout(function() {
                backToTopButton.style.display = 'none';
            }, 250);
        }
    }
}

backToTop = () => {
    window.scrollTo(0, 0);
}

backToTopButton.addEventListener('click', backToTop);
//BACK TO TOP BUTTON

//SCROLL BAR
let progress = document.getElementById('progressbar');
let totalHeight = document.body.scrollHeight;

window.onscroll = () => {
        let progressHeight = (window.pageYOffset / totalHeight) * 160;
        progress.style.height = progressHeight + "%";
    }
    //SCROLL BAR

$(document).ready(function() {
    $('#loading').fadeOut('slow')
    $('.img-full-screen').hide();
    var images = $('.certificates__img');
    for (img of images) {
        $(img).click(function() {
            let imgSrc = $(this).attr('src');
            let imgLink = $(this).attr('data-link');
            let fullSrcImg = $('#img-full-screen__img');
            $(fullSrcImg).attr('src', imgSrc);
            $('.img-full-screen__link').attr('href', imgLink);
            $('.img-full-screen').show('slow')
        })
    }

    $('.img-full-screen__close-btn').click(function() {
        $('.img-full-screen').hide('slow')
    })

    let isDark = false;

    $('#dark-mode-btn').click(function() {
        if (!isDark) {
            $('html').addClass('dark-mode')
            $('#home').addClass('dark-mode')
            $('img').addClass('dark-mode')
            $('.project-card').addClass('dark-mode')
            $('footer').addClass('dark-mode')
            $('#dark-mode-btn-content').removeClass('fa-moon')
            $('#dark-mode-btn-content').addClass('fa-sun')
            isDark = true;
        } else {
            $('html').removeClass('dark-mode')
            $('#home').removeClass('dark-mode')
            $('img').removeClass('dark-mode')
            $('.project-card').removeClass('dark-mode')
            $('footer').removeClass('dark-mode')
            $('#dark-mode-btn-content').removeClass('fa-sun')
            $('#dark-mode-btn-content').addClass('fa-moon')
            isDark = false;
        }
    })
})