window.addEventListener('load', function() {
    document.querySelector('.back-to-top').addEventListener('click', function() {
        window.scrollTo(0, 0)
    })

    document.querySelector('.open-feature-btn').addEventListener('click', function() {
        document.querySelector('.feature-list').classList.toggle('active');
        document.querySelector('.navigation-bar').classList.toggle('active');
        document.querySelector('.open-feature-btn').classList.toggle('active');
    })

    document.querySelector('.dark-mode-btn').addEventListener('click', function() {
        if (document.querySelector('.documents-menu') != null) {
            document.querySelector('.documents-menu').classList.toggle('dark-mode')
        }
        if (document.querySelector('.feature-bar') != null) {
            document.querySelector('.feature-bar').classList.toggle('dark-mode')
        }
        document.querySelector('header').classList.toggle('dark-mode')
        document.querySelector('.dark-mode-btn').classList.toggle('dark-mode')
        document.querySelectorAll('.document-title').forEach(function(e) {
            e.classList.toggle('dark-mode')
        })
    })

    document.querySelector('.notification-btn').addEventListener('click', function() {
        alert('Tính năng sẽ sớm được cập nhật!')
    })

    let documentLinks = document.querySelectorAll('.documents-link')
    let documentSubjects = document.querySelectorAll('.document-subject')

    for (let i = 0; i < documentSubjects.length; i++) {
        documentLinks[i].addEventListener('click', function() {
            documentLinks[i].classList.add('active')
            for (let j = 0; j < documentLinks.length; j++) {
                if (j != i) {
                    documentLinks[j].classList.remove('active')
                }
            }
        })
    }

    for (let i = 0; i < documentSubjects.length; i++) {
        documentSubjects[i].addEventListener('mouseover', function() {
            documentLinks[i].classList.add('active')
            for (let j = 0; j < documentLinks.length; j++) {
                if (j != i) {
                    documentLinks[j].classList.remove('active')
                }
            }
        })
    }
})