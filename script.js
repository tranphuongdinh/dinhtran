//function expression to select elements
const selectElement = (s) => document.querySelector(s);
//Open menu on click
selectElement('.open').addEventListener('click', () =>{
    selectElement('.nav-list').classList.add('active');
});

//Close menu on click
selectElement('.close').addEventListener('click', () =>{
    selectElement('.nav-list').classList.remove('active');
});

let navLinks = document.getElementsByClassName('nav-link')

for (var i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener('click', () => {
        selectElement('.nav-list').classList.remove('active');
    })
}

console.log(navLinks)

let home = document.querySelector('#home')
let aboutme = document.querySelector('#about-me')
let experience = document.querySelector('#experience')
let projects = document.querySelector('#projects')
let contact = document.querySelector('#contact')

window.addEventListener('scroll', ()=>{
    var windo = window.pageYOffset

    if(home.offsetTop <= windo && aboutme.offsetTop > windo) {
        for (var i = 0; i < 5; i++)
            if (i === 0)
                navLinks[i].setAttribute("class", "nav-link current")
            else
            navLinks[i].setAttribute("class", "nav-link")
    }

    if(aboutme.offsetTop <= windo + 20 && experience.offsetTop > windo) {
        for (var i = 0; i < 5; i++)
            if (i === 1)
                navLinks[i].setAttribute("class", "nav-link current")
            else
            navLinks[i].setAttribute("class", "nav-link")
    }

    if(experience.offsetTop <= windo + 20 && projects.offsetTop > windo) {
        for (var i = 0; i < 5; i++)
            if (i === 2)
                navLinks[i].setAttribute("class", "nav-link current")
            else
            navLinks[i].setAttribute("class", "nav-link")
    }

    if(projects.offsetTop <= windo + 20 && contact.offsetTop > windo) {
        for (var i = 0; i < 5; i++)
            if (i === 3)
                navLinks[i].setAttribute("class", "nav-link current")
            else
            navLinks[i].setAttribute("class", "nav-link")
    }

    if(contact.offsetTop <= windo + 20) {
        for (var i = 0; i < 5; i++)
            if (i === 4)
                navLinks[i].setAttribute("class", "nav-link current")
            else
            navLinks[i].setAttribute("class", "nav-link")
    }
})

function getEmail(){
    alert("My email: dinhblade123@gmail.com");
}

//BACK TO TOP BUTTON
const backToTopButton = document.querySelector("#back-to-top-btn");

window.addEventListener('scroll', scrollFunction);

function scrollFunction() {
    if (window.pageYOffset > 10){
        if(!backToTopButton.classList.contains('btnEntrance')) {
            backToTopButton.classList.remove('btnExit');
            backToTopButton.classList.add('btnEntrance');
            backToTopButton.style.display = 'block';
        }
    } 
    else {
        if(backToTopButton.classList.contains('btnEntrance')) {
            backToTopButton.classList.remove('btnEntrance');
            backToTopButton.classList.add('btnExit');
            setTimeout(function() {
                backToTopButton.style.display = 'none';
            }, 250);
        }
    }
}

backToTop = () => {
    window.scrollTo(0,0);
}

backToTopButton.addEventListener('click', backToTop);
//BACK TO TOP BUTTON

//SCROLL BAR
let progress = document.getElementById('progressbar');
let totalHeight = document.body.scrollHeight - window.innerHeight;

window.onscroll = () => {
    let progressHeight = (window.pageYOffset / totalHeight) * 100;
    progress.style.height = progressHeight + "%";
}
//SCROLL BAR

AOS.init({duration:1000})

$(document).ready(()=>{
    $('.list').click(function(){
        const value = $(this).attr('data-filter')
        if(value == 'all'){
            $('.project-card').show('1000')
        }
        else{

            $('.project-card').not('.'+value).hide('1000')
            $('.project-card').filter('.'+value).show('1000')
        }
    })

    $('.list').click(function(){
        $(this).addClass('projectActive').siblings().removeClass('projectActive')
    })
})