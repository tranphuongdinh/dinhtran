window.addEventListener("load", function () {
    let countTimes = 0;
    setInterval(function () {
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
    }, 4500);

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
        showElementsOnScroll(".about-me-decription");
        showElementsOnScroll(".contact");
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
