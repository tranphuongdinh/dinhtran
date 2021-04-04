window.addEventListener("load", function () {
    let countTimes = 0;

    setInterval(
        function () {
            if (
                document.querySelector(".home-info-title").innerHTML ===
                "A Programmer"
            ) {
                document.querySelector(".home-info-title").innerHTML =
                    "Tran Phuong Dinh";
            } else {
                document.querySelector(".home-info-title").innerHTML =
                    "A Programmer";
            }
        },

        4500
    );

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
        toggleDarkMode(".project-name");
        toggleDarkMode(".project-description");
        toggleDarkMode(".info-tag");
        toggleDarkMode(".project-info-btn");
        toggleDarkMode(".project-img");
        toggleDarkMode(".work-img");
        toggleDarkMode("footer");
        toggleDarkMode(".about-me-title");
        toggleDarkMode(".about-me-description");
        toggleDarkMode(".about-link");
        toggleDarkMode(".contact-title");
        toggleDarkMode(".contact-description");
        toggleDarkMode(".contact-icon");
        toggleDarkMode(".copyright");
        toggleDarkMode(".back-to-top");
    }

    document
        .querySelector(".dark-mode-switch")
        .addEventListener("click", function () {
            activeDarkMode();
            if (lightModeOn == 0) lightModeOn = 1;
            else lightModeOn = 0;
            localStorage.setItem("light-mode-on", lightModeOn);
        });

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

    window.addEventListener("scroll", function () {
        if (window.pageYOffset > 0) {
            document.querySelector(".back-to-top").classList.add("active");
        } else {
            document.querySelector(".back-to-top").classList.remove("active");
        }

        let [mainX, mainY] = detectPosition("#portfolioMain");

        if (window.pageYOffset > mainY) {
            document.querySelector("header").classList.add("on-scroll");
        } else {
            document.querySelector("header").classList.remove("on-scroll");
        }

        showElementsOnScroll(".section-title");
        showElementsOnScroll(".project-card");
        showElementsOnScroll(".work-card");
        showElementsOnScroll(".about-me-title");
        showElementsOnScroll(".about-me-description");
        showElementsOnScroll(".contact");
        showElementsOnScroll(".contact-title");
        showElementsOnScroll(".contact-description");
    });

    document
        .querySelector(".back-to-top")
        .addEventListener("click", function () {
            window.scrollTo(0, 0);
        });

    document.querySelectorAll(".portfolio").forEach(function (item) {
        item.addEventListener("mouseover", function () {
            activeNavItem(0);
        });
    });

    document
        .querySelector("#about-me")
        .addEventListener("mouseover", function () {
            activeNavItem(1);
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
