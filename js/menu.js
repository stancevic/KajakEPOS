const toggleButton = document.getElementsByClassName('toggle-button')[0];
const navigacijaLinkovi = document.getElementsByClassName('navigacija-linkovi')[0];
/*
toggleButton.addEventListener('click', () => {
  navigacijaLinkovi.classList.toggle('active');
})*/

toggleButton.addEventListener('click', funkcijaToggle);

function funkcijaToggle(){
    navigacijaLinkovi.classList.toggle('active');
}