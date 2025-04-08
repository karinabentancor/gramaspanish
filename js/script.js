document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll(".navbar ul li a").forEach(link => {
        if (link.href === window.location.href) {
            link.classList.add("active");
        }
    });

    var swiper = new Swiper('.swiper-container', {
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    function toggleDropdown() {
        const dropdownMenu = document.getElementById('dropdown-menu');
        dropdownMenu.classList.toggle('show');
    }

    function changeLanguage(language, flagUrl) {
        document.getElementById('selected-flag').src = flagUrl;
    }

    document.querySelector('.dropdown-toggle').addEventListener('click', toggleDropdown);
    window.changeLanguage = changeLanguage;
});
