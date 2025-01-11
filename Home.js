// Elementi catturati
let navCustom = document.querySelector('.navCustom');
let navCustomScrolled = document.querySelector('.navCustomScrolled');
let navlink = document.querySelectorAll('.nav-link');
let navLinkScrolled = document.querySelectorAll('.navLinkScrolled');
let logoCustom = document.querySelector('.logoCustom');
let buttonJoinus = document.querySelector('.buttonJoinus')
let buttonJoinusBis = document.querySelector('.buttonJoinusBis')
let showInfo= document.querySelector('.showInfo')
let showInfo2= document.querySelector('.showInfo2')


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



/* Galleria HairStylistGroup */
var swiper = new Swiper(".mySwiper", {
  loop: true,
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
});
var swiper2 = new Swiper(".mySwiper2", {
  loop: true,
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: swiper,
  },
});



/* Galleria HairStylistGroup */


document.addEventListener('DOMContentLoaded', () => {
    const swiper = new Swiper('.swiper-container', {
        effect: 'coverflow', 
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
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
});


buttonJoinus.addEventListener('click', () => {
    let check = true;
    
    
    if (check) {
      if (!showInfo.innerHTML.trim()) {
        buttonJoinus.innerHTML= `Nascondi`
        let div = document.createElement('div');
        div.innerHTML = `<div>
          <ul>
            <li>Rivitalizza, rigenera e fortifica i capelli mentre colora</li>
            <li>Riempie le aree svuotate di cheratina</li>
            <li>Sigilla il colore ad ossidazione</li>
            <li>Rende i capelli più forti, più lucidi e luminosi</li>
            <li>Ripara le punte</li>
          </ul>
        </div> 
                  <div class="col-3 "></div>
          <img class="img-fluid imgJoinus3" src="Media/infinity-neautral-removebg-preview.png" alt="">

        </div>`;
        showInfo.appendChild(div);
      } else {
        showInfo.innerHTML = '';
        buttonJoinus.innerHTML= `Scorpi di più`

      }
      check = false;
    }
  });


  buttonJoinusBis.addEventListener('click', () => {
    const showInfo2 = document.getElementById('showInfo2'); // Assicurati di avere un ID univoco per showInfo2
  
    // Controlla se esiste già un elemento span all'interno di showInfo2
    const existingSpan = showInfo2.querySelector('span'); 
  
    if (!showInfo2.innerHTML.trim()) { 
      // Se showInfo2 è vuoto, crea e aggiungi lo span
      buttonJoinusBis.innerHTML = 'Nascondi';
      let span = document.createElement('span');
      span.innerHTML = `
        <div>
          <ul class= "text-start">
            <li>Rivitalizza, </li>
            <li>Riempie le </li>
            <li>Sigilla</li>
            <li>Rende </li>
            <li>Ripara le punte</li>
          </ul>
        </div>
        <div class="col-3 "> 
          <img class="img-fluid " src="Media/bonder-filler-600x900-removebg-preview.png" alt="">
        </div>
      `;
      showInfo2.appendChild(span);
    } else {
      // Se showInfo2 non è vuoto, rimuovi lo span esistente
      if (existingSpan) {
        showInfo2.removeChild(existingSpan); 
      }
      buttonJoinusBis.innerHTML = 'Scopri di più'; 
    }
  });



  // chiamata asincrona Prodotti.json
  

  fetch('./Prodotti.json').then((response) => response.json() ).then((data)=> { 


let contenitoreProdotti= document.querySelector('.contenitoreProdotti')

function showCard() {
  data.forEach( (annuncio) => { 
    let div = document.createElement('div');
    div.classList.add('cardProdotti');
    div.innerHTML= 
    `
    
    <p>${annuncio.name}</p>
    <p>${annuncio.category}</p>
    <p>${annuncio.ml}</p>
    <img src="${annuncio.url}" alt="">

    `

    contenitoreProdotti.appendChild(div)
  })
  
}

showCard()

  })