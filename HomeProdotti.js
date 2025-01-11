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





  // chiamata asincrona Prodotti.json
  

  fetch('./Prodotti.json').then((response) => response.json()).then((data) => {
    let contenitoreProdotti = document.querySelector('.contenitoreProdotti');
  
    function showCard() {
      data.forEach((annuncio) => {
        let card = document.createElement('div');
        let front = document.createElement('div');
        let back = document.createElement('div');
  
        card.classList.add('cardProdotti');
        front.classList.add('face', 'front');
        back.classList.add('face', 'back');
  
        front.innerHTML = `
          <h4>${annuncio.name}</h4>
          <p>${annuncio.category}</p>
          <p>${annuncio.ml}</p>
          <img src="${annuncio.url}" alt="">
        `;
  
        back.innerHTML = `
          <p>${annuncio.descrizione}</p>
        `;
  
        card.appendChild(front);
        card.appendChild(back);
  
        contenitoreProdotti.appendChild(card);
      });
    }
  
    showCard();
  });
  