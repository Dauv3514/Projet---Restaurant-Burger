const toggleButton = document.getElementById ('toggle-button') ;
const sideBar = document.getElementById ('side-bar') ;

toggleButton.addEventListener ('click' , show) ;

function show() {
  sideBar.classList.toggle('active') ;

}

const content = document.querySelector ('.content') ;
content.addEventListener ('click', () => {
  sideBar.classList.remove ('active') ;

})




const images = document.querySelectorAll ('img') ;
const nbSlide = images.length ;
const suivant = document.querySelector ('.right') ;
const precedent = document.querySelector ('.right') ;
let compteur = 0 ;

function slideSuivante(){
  images[compteur].classList.remove('active');

  if(compteur < nbSlide - 1){
      compteur++;
  } else {
      compteur = 0;
  }

  images[compteur].classList.add('active')
  console.log(compteur);
  
}
suivant.addEventListener('click', slideSuivante)




