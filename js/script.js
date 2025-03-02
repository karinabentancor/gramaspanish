function loadHTML(id, filename) {
        fetch(filename)
            .then(response => response.text())
            .then(data => {
                document.getElementById(id).innerHTML = data;
            });
    }

 
    loadHTML('navbar', 'base.html');
    loadHTML('footer', 'base.html');


    var swiper = new Swiper('.swiper-container', {
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });


    document.querySelectorAll(".navbar ul li a").forEach(link => {
        if (link.href === window.location.href) {
            link.classList.add("active");
        }
    });