// Récupération des éléments
const burgerContainer = document.querySelector('#burger_container');
const navbarMobile = document.querySelector('#navbar_mobile');

// Toggle du menu au clic
burgerContainer.addEventListener('click', () => {
    // Transforme le burger en croix
    console.log("clic")
    burgerContainer.classList.toggle('active');
    
    // Ouvre/ferme le menu mobile
    navbarMobile.classList.toggle('nav_open');
});
