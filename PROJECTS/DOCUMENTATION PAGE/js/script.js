window.addEventListener('load', function() {
    document.querySelector('.back-to-top').addEventListener('click', function() {
        window.scrollTo(0, 0)
    })

    document.querySelector('.open-feature-btn').addEventListener('click', function() {
        document.querySelector('.feature-list').classList.toggle('active');
        document.querySelector('.navigation-bar').classList.toggle('active');
        document.querySelector('.open-feature-btn').classList.toggle('active');
    })

    document.querySelector('.light-mode-btn').addEventListener('click', function() {
        if (document.querySelector('.documents-menu') != null) {
            document.querySelector('.documents-menu').classList.toggle('light-mode')
        }
        if (document.querySelector('.documents-list') != null) {
            document.querySelector('.documents-list').classList.toggle('light-mode')
        }
        if (document.querySelector('.feature-bar') != null) {
            document.querySelector('.feature-bar').classList.toggle('light-mode')
        }
        document.querySelector('section').classList.toggle('light-mode')
        document.querySelector('header').classList.toggle('light-mode')
        document.querySelector('.footer').classList.toggle('light-mode')
        document.querySelector('.light-mode-btn').classList.toggle('light-mode')
        document.querySelectorAll('.document-title').forEach(function(e) {
            e.classList.toggle('light-mode')
        })
    })

    document.querySelector('.notification-btn').addEventListener('click', function() {
        alert('Bạn có thể tắt/mở nhạc nền bằng cách click vào dãy sóng âm thanh :D')
    })

    let documentLinks, documentSubjects;
    if (document.querySelectorAll('.documents-link') != null && document.querySelectorAll('.document-subject') != null) {
        documentLinks = document.querySelectorAll('.documents-link')
        documentSubjects = document.querySelectorAll('.document-subject')

        for (let i = 0; i < documentSubjects.length; i++) {
            if (documentLinks[i] != null) {
                documentLinks[i].addEventListener('click', function() {
                    documentLinks[i].classList.add('active')
                    for (let j = 0; j < documentLinks.length; j++) {
                        if (j != i) {
                            documentLinks[j].classList.remove('active')
                        }
                    }
                })
            }
        }

        for (let i = 0; i < documentSubjects.length; i++) {
            documentSubjects[i].addEventListener('mouseover', function() {
                if (documentLinks[i] != null) {
                    documentLinks[i].classList.add('active')
                    for (let j = 0; j < documentLinks.length; j++) {
                        if (j != i) {
                            documentLinks[j].classList.remove('active')
                        }
                    }
                }
            })
        }
    }
})