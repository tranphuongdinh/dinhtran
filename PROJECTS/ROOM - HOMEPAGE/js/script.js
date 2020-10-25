$(document).ready(()=>{
    let i = 0;
    let isOpen = false;
    let imagesSources = [
        {
            imgSrc:"./images/desktop-image-hero-1.jpg",
            imgSrcMob:"./images/mobile-image-hero-1.jpg",
        },
        {
            imgSrc:"./images/desktop-image-hero-2.jpg",
            imgSrcMob:"./images/mobile-image-hero-2.jpg",
        },
        {
            imgSrc:"./images/desktop-image-hero-3.jpg",
            imgSrcMob:"./images/mobile-image-hero-3.jpg",
        }
    ]

    let deviceWidth = (window.innerWidth > 0) ? window.innerWidth : screen.width;

     for (let j = 0; j < imagesSources.length; j++)
        if (deviceWidth >= 768)
            $($('.container__top__first__sliders__img')[j]).attr('src',`${imagesSources[j].imgSrc}`)
        else     
            $($('.container__top__first__sliders__img')[j]).attr('src',`${imagesSources[j].imgSrcMob}`)

    let autoSlider = setInterval(() => {
        i++;
        if(i === imagesSources.length) i = 0;
        $('.container__top__first__sliders').animate({left:`-${100*(i)}%`}, 1000)
        $('.container__top__second__content__sliders').animate({left:`-${100*(i)}%`}, 1000) 
        for(let j = 0; j < imagesSources.length; j++)
        {
            if(j === i) 
                $($('.container__top__first__label')[j]).addClass('active');
            else 
                $($('.container__top__first__label')[j]).removeClass('active');
        }
    }, 4000);
         

    $('.container__top__second_buttons--left').click(function(){
        clearInterval(autoSlider)
        i--;
        if(i === -1) i = imagesSources.length - 1;
        $('.container__top__first__sliders').animate({left:`-${100*(i)}%`}, 1000)
        $('.container__top__second__content__sliders').animate({left:`-${100*(i)}%`}, 1000)
        for(let j = 0; j < imagesSources.length; j++)
        {
            if(j === i) 
                $($('.container__top__first__label')[j]).addClass('active');
            else 
                $($('.container__top__first__label')[j]).removeClass('active');
        }
    })

    $('.container__top__second_buttons--right').click(function(){
        clearInterval(autoSlider)
        i++;
        if(i === imagesSources.length) i = 0;
        $('.container__top__first__sliders').animate({left:`-${100*(i)}%`}, 1000)
        $('.container__top__second__content__sliders').animate({left:`-${100*(i)}%`}, 1000) 
        for(let j = 0; j < imagesSources.length; j++)
        {
            if(j === i) 
                $($('.container__top__first__label')[j]).addClass('active');
            else 
                $($('.container__top__first__label')[j]).removeClass('active');
        }
    })


    $('.menu-icon').click(function(){
        if(isOpen === false) {
            $('.nav-list').addClass('active')
            $('.menu-icon').addClass('rotate')
            $('.menu-icon-img').attr('src','./images/icon-close.svg')
            isOpen = true;
        }
        else {
            $('.nav-list').removeClass('active')
            $('.menu-icon').removeClass('rotate')
            $('.menu-icon-img').attr('src','./images/icon-hamburger.svg')
            isOpen = false;
        }
    })
})
