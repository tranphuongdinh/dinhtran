$(document).ready(function() {
    var events = [{
        date: 'Front-end basic',
        content: 'HTML - CSS - JS'
    }, {
        date: 'Front-end Libraries & Frameworks',
        content: 'React / Jquery / Bootstrap 4'
    }, {
        date: 'Designs',
        content: 'Adobe Premere / Adobe Photoshop'
    }, {
        date: 'Others',
        content: 'NodeJS / AJAX / Git / SASS'
    }];

    $('#my-knowledge').roadmap(events, {
        eventsPerSlide: 4,
        slide: 1,
        prevArrow: '<i class="fa fa-arrow-circle-left"></i>',
        nextArrow: '<i class="fa fa-arrow-circle-right"></i>'
    });
});