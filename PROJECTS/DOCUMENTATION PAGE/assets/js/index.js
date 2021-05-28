$(document).ready(function () {
    let menuItems = $(".menu-bar__inner-navlist__item");
    let sections = $(".section");
    let searchBars = $(".search-bar");
    let featureBar = $(".menu-features");
    let content = $(".content");
    let homeItems = $(".homepage__inner-item");
    let sectionName = $(".section-name");
    let buttonDarkMode = $(".button-darkmode");
    let buttonDarkModeItem = $(".button-darkmode-item");
    let buttonAlert = $(".button-alert");

    $(buttonAlert).click(function () {
        alert(
            "Thông báo: Đã cập nhật link các bài giảng online các môn Toán tổ hợp, Lập trình hướng đối tượng, Cơ sở dữ liệu (drive Tổng hợp)"
        );
    });

    $(buttonDarkMode).click(function () {
        $("body").toggleClass("dark-mode");
        if ($(this).attr("src").includes("sun")) {
            $(this).attr("src", $(this).attr("src").replace("sun", "moon"));
            $(buttonDarkModeItem).addClass("shine");
        } else {
            $(this).attr("src", $(this).attr("src").replace("moon", "sun"));
            $(buttonDarkModeItem).removeClass("shine");
        }
    });

    function filterSectionById(sections, id) {
        if (id === "home" || id === "contribution") {
            $(content).addClass("full");
        } else {
            $(content).removeClass("full");
        }
        for (section of sections) {
            if (id === $(section).attr("id")) {
                $(section).fadeIn(0);
            } else {
                $(section).fadeOut(0);
            }
        }
    }

    function filterSearchBarById(searchBars, id) {
        for (searchBar of searchBars) {
            if ($(searchBar).attr("data-id") === id) {
                $(searchBar).fadeIn(0);
            } else {
                $(searchBar).fadeOut(0);
            }
        }
    }

    for (item of homeItems) {
        $(item).click(function () {
            let id = $(this).attr("data-id");
            for (menuItem of menuItems) {
                if ($(menuItem).attr("data-id") === id) {
                    $(menuItem).addClass("active");
                    $(content).removeClass("full");
                    $(featureBar).fadeIn(0);
                    if (
                        id === "courses" ||
                        id === "documents" ||
                        id === "tests"
                    ) {
                        if (id === "courses") {
                            $(sectionName).html("khoá học");
                        } else if (id == "documents") {
                            $(sectionName).html("tài liệu");
                        } else {
                            $(sectionName).html("đề thi");
                        }
                        filterSearchBarById(searchBars, id);
                    }
                } else {
                    $(menuItem).removeClass("active");
                }
            }
            filterSectionById(sections, id);
        });
    }

    for (item of menuItems) {
        $(item).click(function (e) {
            for (item of menuItems) {
                $(item).removeClass("active");
            }
            $(this).addClass("active");
            let id = $(this).attr("data-id");

            if (id === "courses" || id === "documents" || id === "tests") {
                if (id === "courses") {
                    $(sectionName).html("khoá học");
                } else if (id == "documents") {
                    $(sectionName).html("tài liệu");
                } else {
                    $(sectionName).html("đề thi");
                }
                filterSearchBarById(searchBars, id);
                $(featureBar).fadeIn(0);
            } else {
                $(featureBar).fadeOut(0);
            }

            filterSectionById(sections, id);
        });
        if ($(item).attr("data-id") === "home") {
            $(item).addClass("active");
            filterSectionById(sections, "home");
            $(featureBar).fadeOut(0);
        }
    }

    function removeVietnameseTones(str) {
        str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
        str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
        str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
        str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
        str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
        str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
        str = str.replace(/đ/g, "d");
        str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "A");
        str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "E");
        str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "I");
        str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "O");
        str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "U");
        str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "Y");
        str = str.replace(/Đ/g, "D");
        // Some system encode vietnamese combining accent as individual utf-8 characters
        // Một vài bộ encode coi các dấu mũ, dấu chữ như một kí tự riêng biệt nên thêm hai dòng này
        str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, ""); // ̀ ́ ̃ ̉ ̣  huyền, sắc, ngã, hỏi, nặng
        str = str.replace(/\u02C6|\u0306|\u031B/g, ""); // ˆ ̆ ̛  Â, Ê, Ă, Ơ, Ư
        // Remove extra spaces
        // Bỏ các khoảng trắng liền nhau
        str = str.replace(/ + /g, " ");
        str = str.trim();
        // Remove punctuations
        // Bỏ dấu câu, kí tự đặc biệt
        str = str.replace(
            /!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g,
            " "
        );
        return str;
    }

    listCoursesLink = document.querySelectorAll(".courses-item-link");
    listCoursesItem = document.querySelectorAll(".courses-item");

    listDocumentsLink = document.querySelectorAll(".documents-item-link");
    listDocumentsItem = document.querySelectorAll(".documents-item");

    listTestsLink = document.querySelectorAll(".tests-item-link");
    listTestsItem = document.querySelectorAll(".tests-item");

    function search(listCoursesLink, listCoursesItem, searchBar) {
        let input, filter, documentTitles, textValue;
        let isFound = false;
        let minIndexFound = Number.MAX_VALUE;

        $(searchBar).keyup(function (e) {
            input,
                filter,
                documentTitles,
                listCoursesLink,
                listCoursesItem,
                textValue;
            isFound = false;
            minIndexFound = Number.MAX_VALUE;
            input = $(searchBar);
            filter = removeVietnameseTones($(searchBar).val().toUpperCase());
            for (let i = 0; i < listCoursesLink.length; i++) {
                textValue =
                    removeVietnameseTones(listCoursesLink[i].innerText) ||
                    removeVietnameseTones(listCoursesLink[i].textContent);
                if (textValue.toUpperCase().indexOf(filter) > -1) {
                    listCoursesItem[i].style.display = "";
                    if (i < minIndexFound) minIndexFound = i;
                    isFound = true;
                    listCoursesItem[minIndexFound].scrollIntoView();
                } else {
                    listCoursesItem[i].style.display = "none";
                }
            }
        });

        $(searchBar).keypress(function (e) {
            if (e.keyCode === 13) {
                if (!isFound) {
                    //alert('Không tìm thấy tài nguyên phù hợp!')
                    if (
                        confirm(
                            "Không tìm thấy tài nguyên phù hợp! Bạn có muốn tiếp tục nhập thông tin tìm kiếm không ?"
                        )
                    ) {
                    } else {
                        input.value = "";
                        isFound = false;
                        for (let i = 0; i < listCoursesLink.length; i++) {
                            listCoursesItem[i].style.display = "";
                        }
                    }
                } else {
                    alert(
                        `Tìm thấy tài nguyên: ${listCoursesItem[minIndexFound].textContent}`
                    );
                    listCoursesItem[minIndexFound].scrollIntoView();
                }
            }
        });
    }

    search(listCoursesLink, listCoursesItem, searchBars[0]);
    search(listDocumentsLink, listDocumentsItem, searchBars[1]);
    search(listTestsLink, listTestsItem, searchBars[2]);

    function activeLinkOnClick(links) {
        for (link of links) {
            $(link).click(function () {
                for (link of links) {
                    $(link).removeClass("active");
                }
                $(this).addClass("active");
            });
        }
    }

    let coursesLink = $(".courses-link");
    let documentsLink = $(".documents-link");
    let testsLink = $(".tests-link");

    activeLinkOnClick(coursesLink);
    activeLinkOnClick(documentsLink);
    activeLinkOnClick(testsLink);

    function activeLinkOnHover(links, listItems) {
        for (let i = 0; i < listItems.length; i++) {
            $(listItems[i]).mouseover(function () {
                for (link of links) {
                    $(link).removeClass("active");
                }
                $(links[i]).addClass("active");
                links[i].scrollIntoView();
            });
        }
    }

    let coursesListItem = $(".coursesList-item");
    let documentsListItem = $(".documentsList-item");
    let testsListItem = $(".testsList-item");

    activeLinkOnHover(coursesLink, coursesListItem);
    activeLinkOnHover(documentsLink, documentsListItem);
    activeLinkOnHover(testsLink, testsListItem);
});
