$(document).ready(function() {
    var events = [{
        date: 'Sep 2019 - Present',
        content: 'VNU - University of Science <small>Faculty of Information Technology</small>'
    }, {
        date: '2016 - 2019',
        content: 'My Lac Senior High School <small>Student</small>'
    }, {
        date: '2012 - 2016',
        content: 'My Lac Junior High School <small>Student</small>'
    }, {
        date: '2007 - 2012',
        content: 'My Lac Primary School <small>Student</small>'
    }];

    $('#my-timeline').roadmap(events, {
        eventsPerSlide: 4,
        slide: 1,
        prevArrow: '<i class="fa fa-arrow-circle-left"></i>',
        nextArrow: '<i class="fa fa-arrow-circle-right"></i>'
    });
});