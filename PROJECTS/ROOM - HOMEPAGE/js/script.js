$(document).ready(()=>{
    let i = 1;
    let isOpen = false;
    let contents = [
        {
            imgSrc:"./images/desktop-image-hero-1.jpg",
            imgSrcMob:"./images/mobile-image-hero-1.jpg",
            header:'Discover innovative ways to decorate',
            content:'We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form andnfunction in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.'
        },
        {
            imgSrc:"./images/desktop-image-hero-2.jpg",
            imgSrcMob:"./images/mobile-image-hero-2.jpg",
            header:'We are available all across the globe',
            content:"With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today."
        },
        {
            imgSrc:"./images/desktop-image-hero-3.jpg",
            imgSrcMob:"./images/mobile-image-hero-3.jpg",
            header:'Manufactured with the best materials',
            content:"Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office."
        }
    ]

    $('.container__top__second_buttons--left').click(function(){
        let deviceWidth = (window.innerWidth > 0) ? window.innerWidth : screen.width;
        if (deviceWidth >= 768)
            $('.container__top__first').css({
                "background": `url(${contents[i].imgSrc})`,
                "background-size": 'cover'
            })
        else 
            $('.container__top__first').css({
                "background": `url(${contents[i].imgSrcMob})`,
                "background-size": 'cover'
            })

        $('.container__top__second__content--header').text(`${contents[i].header}`)
        $('.container__top__second__content--paragraph').text(`${contents[i].content}`)
        i--;
        if (i === -1) i = contents.length - 1;
    })

    $('.container__top__second_buttons--right').click(function(){
        let deviceWidth = (window.innerWidth > 0) ? window.innerWidth : screen.width;
        console.log(deviceWidth)
        if (deviceWidth >= 768)
            $('.container__top__first').css({
                "background": `url(${contents[i].imgSrc})`,
                "background-size": 'cover'
            })
        else 
            $('.container__top__first').css({
                "background": `url(${contents[i].imgSrcMob})`,
                "background-size": 'cover'
            })

        $('.container__top__second__content--header').text(`${contents[i].header}`)
        $('.container__top__second__content--paragraph').text(`${contents[i].content}`)
        i++;
        if (i === contents.length) i = 0;
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
