window.addEventListener("load", function () {
    function detectPosition(element) {
        let y =
            window.scrollY +
            document.querySelector(element).getBoundingClientRect().top;
        let x =
            window.scrollX +
            document.querySelector(element).getBoundingClientRect().left;
        return [x, y];
    }

    function showElementsOnScroll(element) {
        document.querySelectorAll(element).forEach(function (card) {
            let cardY = window.scrollY + card.getBoundingClientRect().top;

            if (window.pageYOffset + window.innerHeight > cardY) {
                card.classList.add("show");
            } else {
                card.classList.remove("show");
            }
        });
    }

    function toggleDarkMode(elements) {
        document.querySelectorAll(elements).forEach(function (element) {
            element.classList.toggle("dark-mode");
        });
    }

    let lightModeOn = localStorage.getItem("light-mode-on");
    if (lightModeOn === null) {
        localStorage.setItem("light-mode-on", 0);
        lightModeOn = localStorage.getItem("light-mode-on");
    } else if (lightModeOn != 0) {
        activeDarkMode();
    }

    function activeDarkMode() {
        if (
            document
                .querySelector(".dark-mode-icon")
                .classList.contains("fa-sun-o")
        ) {
            document
                .querySelector(".dark-mode-icon")
                .classList.replace("fa-sun-o", "fa-moon-o");
        } else {
            document
                .querySelector(".dark-mode-icon")
                .classList.replace("fa-moon-o", "fa-sun-o");
        }

        toggleDarkMode("header");
        toggleDarkMode(".section");
        toggleDarkMode(".section-title");
        toggleDarkMode(".about-me-title");
        toggleDarkMode(".about-me-description");
        toggleDarkMode(".about-me-img");
        toggleDarkMode(".education-title");
        toggleDarkMode(".education-row");
        toggleDarkMode(".skills-row");
        toggleDarkMode(".skill-tag");
        toggleDarkMode(".certificates-img");
        toggleDarkMode("#img-full-screen-src");
        toggleDarkMode(".contact-title");
        toggleDarkMode(".contact-description");
        toggleDarkMode(".contact-icon");
        toggleDarkMode(".copyright");
        toggleDarkMode(".back-to-top");
        toggleDarkMode("footer");
    }

    document
        .querySelector(".dark-mode-switch")
        .addEventListener("click", function () {
            activeDarkMode();
            if (lightModeOn == 0) lightModeOn = 1;
            else lightModeOn = 0;
            localStorage.setItem("light-mode-on", lightModeOn);
        });

    window.addEventListener("scroll", function () {
        if (window.pageYOffset > 0) {
            document.querySelector(".back-to-top").classList.add("active");
        } else {
            document.querySelector(".back-to-top").classList.remove("active");
        }

        let [mainX, mainY] = detectPosition("#about-me-main");

        if (window.pageYOffset > mainY) {
            document.querySelector("header").classList.add("on-scroll");
        } else {
            document.querySelector("header").classList.remove("on-scroll");
        }

        showElementsOnScroll(".education-title");
        showElementsOnScroll(".education-col");
        showElementsOnScroll(".skills-col");
        showElementsOnScroll(".education-row");
        showElementsOnScroll(".skills-row");
        showElementsOnScroll(".certificates-img");
        showElementsOnScroll(".contact");
        showElementsOnScroll(".contact-title");
        showElementsOnScroll(".contact-description");
    });

    document.querySelectorAll(".certificates-img").forEach(function (img) {
        img.addEventListener("click", function () {
            let imgSrc = img.getAttribute("src");
            document
                .querySelector("#img-full-screen-src")
                .setAttribute("src", imgSrc);
            document.querySelector("#img-full-screen").classList.add("active");
            document.querySelector("main").classList.add("blur");
            document.querySelector("header").classList.add("blur");
            document.querySelector("footer").classList.add("blur");
            document.querySelector(".back-to-top").classList.add("blur");
        });
    });

    document
        .querySelector("#img-full-screen")
        .addEventListener("click", function () {
            document
                .querySelector("#img-full-screen")
                .classList.remove("active");
            document.querySelector("main").classList.remove("blur");
            document.querySelector("header").classList.remove("blur");
            document.querySelector("footer").classList.remove("blur");
            document.querySelector(".back-to-top").classList.remove("blur");
        });

    document
        .querySelector(".back-to-top")
        .addEventListener("click", function () {
            window.scrollTo(0, 0);
        });

    document.querySelectorAll(".aboutMe").forEach(function (item) {
        item.addEventListener("mouseover", function () {
            activeNavItem(1);
        });
    });

    document
        .querySelector("#contact")
        .addEventListener("mouseover", function () {
            activeNavItem(3);
        });

    function activeNavItem(index) {
        let navItems = document.querySelectorAll(".nav-item");

        navItems.forEach(function (navItem) {
            navItem.classList.remove("active");
        });
        navItems[index].classList.add("active");
    }

    document.querySelectorAll(".nav-item").forEach(function (item, index) {
        item.addEventListener("mouseover", function () {
            activeNavItem(index);
        });
    });
});
