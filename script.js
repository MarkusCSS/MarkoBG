var map = L.map('map').setView([44.8189, 20.4559], 15); // Promenjene koordinate na Dorćol, Beograd

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
  maxZoom: 18,
}).addTo(map);

// Dodavanje markera na Dorćol
L.marker([44.8189, 20.4559]) 
  .addTo(map)
  .bindPopup('We are here.') 
  .openPopup();

window.addEventListener('load', () => {
  window.scrollTo(0, 0); 
  removeWow();
});
window.addEventListener('resize', removeWow);
const mapLeaflet= document.getElementById('map');
const imgAboutUs = document.getElementById('img-about-us');
const toggler = document.querySelector('.navbar-toggler');
const callNumber = document.querySelector('.disappear-large');
const navbar = document.querySelector('.navbar-collapse');
var switcher = true;

toggler.addEventListener('click', () => {
  if (switcher) {
    callNumber.classList.add('margin-auto');
  } else {
    callNumber.classList.remove('margin-auto');
  }
  switcher = !switcher;
});

document.querySelectorAll('.nav-link').forEach((link) => {
  link.addEventListener('click', () => {
    if (navbar.classList.contains('show')) {
      navbar.classList.remove('show');
      callNumber.classList.remove('margin-auto');
    }
    switcher = true;
  });
});

function removeWow() {
  if (!imgAboutUs) return; // Proveri da li imgAboutUs postoji

  if (window.innerWidth < 768) {
    imgAboutUs.classList.remove('animate__animated');
    mapLeaflet.classList.remove('animate__animated');
  } else {
    imgAboutUs.classList.add('animate__animated');
    mapLeaflet.classList.add('animate__animated');
  }
}
