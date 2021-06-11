window.addEventListener("load", function () {
    $("#loading").fadeOut(800);
    setTimeout(function () {
        $(".preload").addClass("active");
    }, 1000);
});

//magic cursor
var width = window.innerWidth;

if (width > 768) {
    var cursor = document.querySelector("#circle-cursor");
    var cursorDot = document.querySelector("#circle-cursor-dot");
    document.onmousemove = handleMouseMove;
    var isInElement = false,
        isOnIframe = false;
    function handleMouseMove(event) {
        var dot, eventDoc, doc, body, pageX, pageY;
        event = event || window.event;
        if (event.pageX == null && event.clientX != null) {
            eventDoc = (event.target && event.target.ownerDocument) || document;
            doc = eventDoc.documentElement;
            body = eventDoc.body;

            event.pageX =
                event.clientX +
                ((doc && doc.scrollLeft) || (body && body.scrollLeft) || 0) -
                ((doc && doc.clientLeft) || (body && body.clientLeft) || 0);
            event.pageY =
                event.clientY +
                ((doc && doc.scrollTop) || (body && body.scrollTop) || 0) -
                ((doc && doc.clientTop) || (body && body.clientTop) || 0);
        }
        //not my function, https://stackoverflow.com/questions/7790725/javascript-track-mouse-position

        if (!isInElement) {
            cursor.style.left = event.pageX - 20 + "px";
            cursor.style.top = event.pageY - 20 + "px";
            cursor.style.border = "1px solid #000";
            cursor.style.borderRadius = "999px";
            cursorDot.style.transform = "scale(1)";
            cursorDot.style.backgroundColor = "#767676";
        } else {
            cursor.style.left = event.pageX - 20 + "px";
            cursor.style.top = event.pageY - 20 + "px";
            cursor.style.borderRadius = "999px";
            cursorDot.style.transform = "scale(10)";
            cursorDot.style.backgroundColor = "rgba(76,76,76,.5)";
            cursor.style.border = "none";
        }

        if (!isOnIframe) {
            cursor.style.display = "flex";
        } else {
            cursor.style.display = "none";
        }
    }

    function handleCursorOnElements(elementsName) {
        let elements = document.querySelectorAll(elementsName);
        for (var i = 0; i < elements.length; i++) {
            var e = elements[i];
            e.addEventListener("mouseenter", enterCursor);
            e.addEventListener("mouseleave", leaveCursor);
        }
    }

    document.querySelectorAll("iframe").forEach(function (iframe) {
        iframe.addEventListener("mouseenter", function (e) {
            isOnIframe = true;
        });
        iframe.addEventListener("mouseleave", function (e) {
            isOnIframe = false;
        });
    });

    handleCursorOnElements("a");

    handleCursorOnElements(".button");

    handleCursorOnElements(".music-player");

    handleCursorOnElements(".galery-item");

    handleCursorOnElements(".button-darkmode");

    handleCursorOnElements(".button-darkmode-switch");

    function enterCursor(event) {
        isInElement = true;
    }
    function leaveCursor(event) {
        isInElement = false;
    }
}

//handle darkmode
let isDarkMode = localStorage.getItem("dinhtran-darkmode");
if (!isDarkMode) {
    localStorage.setItem("dinhtran-darkmode", "false");
    isDarkMode = localStorage.getItem("dinhtran-darkmode");
}

function toggleDarkModeIcon() {
    let buttonDarkmodeIcon = $(".button-darkmode-icon");
    let buttonDarkmodeTray = $(".button-darkmode-tray");
    $("body").toggleClass("dark-mode");
    if ($(buttonDarkmodeIcon).hasClass("fa-sun-o")) {
        $(buttonDarkmodeIcon).removeClass("fa-sun-o");
        $(buttonDarkmodeIcon).addClass("fa-moon-o");

        $(buttonDarkmodeTray).removeClass("on");
        $(buttonDarkmodeTray).addClass("on");
        isDarkMode = "true";
    } else {
        $(buttonDarkmodeIcon).removeClass("fa-moon-o");
        $(buttonDarkmodeIcon).addClass("fa-sun-o");
        isDarkMode = "false";
        $(buttonDarkmodeTray).removeClass("on");
    }
    localStorage.setItem("dinhtran-darkmode", isDarkMode);
}

if (isDarkMode == "true") {
    toggleDarkModeIcon();
} else {
    $("body").removeClass("dark-mode");
}

$(".button-darkmode").click(function () {
    toggleDarkModeIcon();
});

$(".button-darkmode-switch").click(function () {
    toggleDarkModeIcon();
});

$(".button-submit").click(function (e) {
    e.preventDefault();
    let form = document.querySelector(".contact-form");
    if (form.reportValidity()) {
        form.submit();
        form.reset();
    }
});

function fillDataset(menuItems, sections, time) {
    for (item of menuItems) {
        $(item).click(function () {
            const sectionName = $(this).attr("data-filter");
            for (item of menuItems) {
                if ($(item).attr("data-filter") != sectionName) {
                    $(item).removeClass("active");
                } else {
                    $(item).addClass("active");
                }
            }

            for (section of sections) {
                if ($(section).hasClass(sectionName)) {
                    $(section).fadeIn(time);
                } else {
                    $(section).fadeOut(0);
                }
            }
        });
    }
}

let sections = $(".section");

for (section of sections) {
    if ($(section).hasClass("home")) {
    } else {
        $(section).fadeOut(0);
    }
}

let menuItems = $(".menu-list__item");

for (item of menuItems) {
    if ($(item).attr("data-filter") === "home") {
        $(item).addClass("active");
    }
}

fillDataset(menuItems, sections, 250);

let portfolioItems = $(".portfolio-filter__item");

let galeryItems = $(".galery-item");

for (item of portfolioItems) {
    if ($(item).attr("data-filter") === "all") {
        $(item).addClass("active");
    }
}

fillDataset(portfolioItems, galeryItems, 0);

let projectModal = $(".project-modal");

let projectModalIframe = $(".project-modal__iframe");

projectModal.fadeOut(0);

for (item of galeryItems) {
    $(item).click(function () {
        const url = $(this).attr("data-url");

        projectModal.fadeIn(250);

        projectModalIframe.attr("src", url);
    });
}

$(".modal-close").click(function () {
    projectModal.fadeOut(250);
    projectModalIframe.attr("src", "");
});

let mouseX = 0,
    mouseY = 0;

let projectTooltip = $(".project-tooltip");

let galeryItemsTooltip = $(".galery-item-tooltip");

for (item of galeryItemsTooltip) {
    $(item).mousemove(function (e) {
        mouseX = e.clientX;
        mouseY = e.clientY;

        const name = $(this).attr("data-name");

        let pos = $(this).position();

        if (
            (mouseY > pos.top && mouseY < pos.top + $(this).height() - 20) ||
            (mouseX > pos.left && mouseX < $(this).width() && name != "")
        ) {
            $(projectTooltip).css({
                left: `${mouseX + 30}px`,
                top: `${mouseY}px`,
                visibility: "initial",
                pointerEvents: "initial",
                "background-color": "#fff",
            });
            $(projectTooltip).html(`${name}`);
        }
    });
    $(item).mouseout(function (e) {
        $(projectTooltip).css({
            left: `${mouseX + 20}px`,
            top: `${mouseY}px`,
            visibility: "hidden",
            pointerEvents: "none",
            "background-color": "transparent",
        });
        $(projectTooltip).html("");
    });
}

let btnLearnmore = $(".learn-more");
let descriptionModal = $(".description-modal");
let descriptionModalClose = $(".description-modal__close");

$(descriptionModal).fadeOut(0);

$(descriptionModalClose).click(function () {
    $(descriptionModal).fadeOut(250);
});

$(btnLearnmore).click(function () {
    $(descriptionModal).fadeIn(250);
});
