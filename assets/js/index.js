window.addEventListener("load", function () {
    $("#loading").fadeOut(2000);
});

$(document).ready(() => {
    function fillDataset(menuItems, sections, time) {
        for (item of menuItems) {
            $(item).click(function () {
                const sectionName = $(this).attr("data-filter");
                for (item of menuItems) {
                    $(item).removeClass("active");
                }
                $(this).addClass("active");
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

    fillDataset(menuItems, sections, 500);

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
                (mouseY > pos.top &&
                    mouseY < pos.top + $(this).height() - 20) ||
                (mouseX > pos.left && mouseX < $(this).width() && name != "")
            ) {
                $(projectTooltip).css({
                    left: `${mouseX + 20}px`,
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
});
