// Dark-light mode

function toggleMode() {
  const body = document.body;
  const iconContainer = document.querySelector('.icon-container');
  const moonIcon = document.querySelector('.uil-moon');
  const sunIcon = document.querySelector('.uil-sun');

  body.classList.toggle('dark-mode');

  if (iconContainer.classList.contains('left')) {
    iconContainer.classList.remove('left');
    moonIcon.style.color = '#000';
    sunIcon.style.color = '#fff';
  } else {
    iconContainer.classList.add('left');
    moonIcon.style.color = '#fff';
    sunIcon.style.color = '#000';
  }
}

//Submenu

let timeoutId;
let isSubMenu1Visible = false;

function showSubMenu1() {
  const submenu1 = document.querySelector('.submenu1');
  clearTimeout(timeoutId);
  if (!isSubMenu1Visible) {
    submenu1.classList.add('show');
    isSubMenu1Visible = true;
  }
}

function hideSubMenu1() {
  const submenu1 = document.querySelector('.submenu1');
  clearTimeout(timeoutId);
  if (isSubMenu1Visible) {
    timeoutId = setTimeout(() => {
      submenu1.classList.remove('show');
      isSubMenu1Visible = false;
    }, 100);
  }
}

function cancelHideSubMenu1() {
  clearTimeout(timeoutId);
}

let timeoutId2;
let isSubMenu1Visible2 = false;

function showSubMenu2() {
  const submenu2 = document.querySelector('.submenu2');
  clearTimeout(timeoutId2);
  if (!isSubMenu1Visible2) {
    submenu2.classList.add('show2');
    isSubMenu1Visible2 = true;
  }
}

function hideSubMenu2() {
  const submenu2 = document.querySelector('.submenu2');
  clearTimeout(timeoutId2);
  if (isSubMenu1Visible2) {
    timeoutId2 = setTimeout(() => {
      submenu2.classList.remove('show2');
      isSubMenu1Visible2 = false;
    }, 100);
  }
}

function cancelHideSubMenu2() {
  clearTimeout(timeoutId2);
}

//Botón scroll arriba

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

window.addEventListener('scroll', function () {
  let nosotrosSection = document.getElementById('nosotros');
  let scrollTopButton = document.querySelector('.scroll-top-button');

  let nosotrosSectionPosition = nosotrosSection.getBoundingClientRect().top;

  if (nosotrosSectionPosition <= 0) {
    scrollTopButton.classList.add('show');
  } else {
    scrollTopButton.classList.remove('show');
  }
});

//wsp animacion 

const whatsappButton = document.querySelector('.whatsapp-button');

const delay = 200;

setTimeout(() => {
  whatsappButton.classList.add('animate-appear');
}, delay);

// carrusel

const btnLeft = document.querySelector(".btn-left"),
btnRight = document.querySelector(".btn-right"),
slideer = document.querySelector("#slideer"),
sliderImg = document.querySelectorAll(".slider-img");


btnLeft.addEventListener("click", e => moveToLeft())     
btnRight.addEventListener("click", e => moveToRight())

setInterval(() => {
    moveToRight()
}, 3000);

let operation = 0,
    counter = 0,
    widthImg = 100 / sliderImg.length;

function moveToRight(){
    if (counter >= sliderImg.length-1){
      counter= 0;
      operation= 0;
      slideer.style.transform = `translate(-${operation}%)`
      slideer.style.transition = "none";
      return;
    }
    counter++;
    operation = operation + widthImg;
    slideer.style.transform = `translate(-${operation}%)`
    slideer.style.transition = "all ease .6s" 
}

function moveToLeft(){
    counter--;
    if( counter < 0 ){
      counter = sliderImg.length-1;
      operation= widthImg * (sliderImg.length-1)
      slideer.style.transform = `translate(-${operation}%)`
      slideer.style.transition = "none";
      return;
    }
    operation = operation - widthImg;
    slideer.style.transform = `translate(-${operation}%)`
    slideer.style.transition = "all ease .6s"
}

//animacion escritura 

const typedText = document.getElementById('typed-text');
const textToType = '¡Estamos aquí!';
const typingDelay = 100; // Retraso entre cada caracter
const erasingDelay = 50; // Retraso después de completar el texto
const newTextDelay = 2000; // Retraso antes de empezar a escribir de nuevo

let textIndex = 0;
let isDeleting = false;

function type() {
  const currentText = typedText.textContent;
  const length = currentText.length;

  if (isDeleting) {
    typedText.textContent = currentText.slice(0, length - 1);
  } else {
    typedText.textContent = textToType.slice(0, length + 1);
  }

  if (!isDeleting && typedText.textContent === textToType) {
    isDeleting = true;
    setTimeout(type, newTextDelay);
  } else if (isDeleting && typedText.textContent === '') {
    isDeleting = false;
    textIndex = 0;
    setTimeout(type, typingDelay);
  } else {
    setTimeout(type, isDeleting ? erasingDelay : typingDelay);
  }
}

type();