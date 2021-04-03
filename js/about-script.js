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
