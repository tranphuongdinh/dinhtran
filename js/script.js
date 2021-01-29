//show loading function

//function expression to select elements
const selectElement = (s) => document.querySelector(s);
//Open menu on click
selectElement('.open').addEventListener('click', () => {
    selectElement('.nav-list').classList.add('active');
});

//Close menu on click
selectElement('.close').addEventListener('click', () => {
    selectElement('.nav-list').classList.remove('active');
});

let navLinks = document.getElementsByClassName('nav-link')

for (var i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener('click', () => {
        selectElement('.nav-list').classList.remove('active');
    })
}

//SCROLLSPY
let home = document.querySelector('#home')
let aboutme = document.querySelector('#about-me')
let experience = document.querySelector('#experience')
let projects = document.querySelector('#projects')
let contact = document.querySelector('#contact')

window.addEventListener('scroll', () => {
        var windo = window.pageYOffset

        if (home.offsetTop <= windo && aboutme.offsetTop > windo) {
            for (var i = 0; i < 5; i++)
                if (i === 0)
                    navLinks[i].setAttribute("class", "nav-link current")
                else
                    navLinks[i].setAttribute("class", "nav-link")
        }

        if (aboutme.offsetTop <= windo + 20 && experience.offsetTop > windo) {
            for (var i = 0; i < 5; i++)
                if (i === 1)
                    navLinks[i].setAttribute("class", "nav-link current")
                else
                    navLinks[i].setAttribute("class", "nav-link")
        }

        if (experience.offsetTop <= windo + 20 && projects.offsetTop > windo) {
            for (var i = 0; i < 5; i++)
                if (i === 2)
                    navLinks[i].setAttribute("class", "nav-link current")
                else
                    navLinks[i].setAttribute("class", "nav-link")
        }

        if (projects.offsetTop <= windo + 20 && contact.offsetTop > windo) {
            for (var i = 0; i < 5; i++)
                if (i === 3)
                    navLinks[i].setAttribute("class", "nav-link current")
                else
                    navLinks[i].setAttribute("class", "nav-link")
        }

        if (contact.offsetTop <= windo + 20) {
            for (var i = 0; i < 5; i++)
                if (i === 4)
                    navLinks[i].setAttribute("class", "nav-link current")
                else
                    navLinks[i].setAttribute("class", "nav-link")
        }
    })
    //SCROLLSPY

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
let totalHeight = document.body.offsetHeight;

window.onscroll = () => {
        let progressHeight = (window.pageYOffset / totalHeight) * 120;
        progress.style.height = progressHeight + "vh";
    }
    //SCROLL BAR

AOS.init({ duration: 1500 })

const submitForm = () => { alert('This feature is being updated! Please comeback later^^') }

$(document).ready(() => {
    $('#loading').fadeOut('slow')

    let projectCard = $('.project-card')
    let isHide = true;
    let isDark = false;

    $('#dark-mode-btn').click(function() {
        if (!isDark) {
            $('html').addClass('dark-mode')
            $('#home').addClass('dark-mode')
            $('img').addClass('dark-mode')
            $('.project-card').addClass('dark-mode')
            $('footer').addClass('dark-mode')
            $('#dark-mode-btn-content').removeClass('fa-sun')
            $('#dark-mode-btn-content').addClass('fa-moon')
            isDark = true;
        } else {
            $('html').removeClass('dark-mode')
            $('#home').removeClass('dark-mode')
            $('img').removeClass('dark-mode')
            $('.project-card').removeClass('dark-mode')
            $('footer').removeClass('dark-mode')
            $('#dark-mode-btn-content').removeClass('fa-moon')
            $('#dark-mode-btn-content').addClass('fa-sun')
            isDark = false;
        }
    })

    for (let i = 6; i < projectCard.length; i++)
        $(projectCard[i]).hide()

    $('.list').click(function() {
        const value = $(this).attr('data-filter')
        if (value == 'all') {
            $('.project-card').show('1000')
            for (let i = 6; i < projectCard.length; i++)
                $(projectCard[i]).hide()
            $('.product__btn-see-more').show('1000')
        } else {
            $('.product__btn-see-more').hide()
            $('.project-card').not('.' + value).hide('1000')
            $('.project-card').filter('.' + value).show('1000')
        }
    })

    $('.list').click(function() {
        $(this).addClass('projectActive').siblings().removeClass('projectActive')
    })

    $('.product__btn-see-more').click(function() {
        if (isHide) {
            for (let i = 6; i < projectCard.length; i++)
                $(projectCard[i]).show('1000')
            $(this).html('Hide');
            isHide = !isHide;
        } else {
            for (let i = 6; i < projectCard.length; i++)
                $(projectCard[i]).hide('1000')
            $(this).html('View all');
            isHide = !isHide;
        }
    })
})