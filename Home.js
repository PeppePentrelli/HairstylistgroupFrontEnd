// Elementi catturati
let navCustom = document.querySelector('.navCustom');
let navCustomScrolled = document.querySelector('.navCustomScrolled');
let navlink = document.querySelectorAll('.nav-link');
let navLinkScrolled = document.querySelectorAll('.navLinkScrolled');
let logoCustom = document.querySelector('.logoCustom');



// Logiche per Navbar

window.addEventListener('scroll', () => {

    let scrolled = window.scrollY;

    if (scrolled > 0) {

        navCustom.classList.remove('navCustom');
        navCustom.classList.add('navCustomScrolled');
        logoCustom.src = 'Media/Logo-Black.png'


        navlink.forEach(link => {

            link.classList.remove('nav-link');
            link.classList.add('navLinkScrolled');

        });

    } else {


        navCustom.classList.add('navCustom');
        navCustom.classList.remove('navCustomScrolled');
        logoCustom.src = 'Media/Logo-White.png';



        navlink.forEach(link => {

            link.classList.remove('navLinkScrolled');
            link.classList.add('nav-link');
        });

    };

});


