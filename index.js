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

const link1 = document.querySelector('.link1');
const link2 = document.querySelector('.link2');
const submenu1 = document.querySelector('.submenu1');
const submenu2 = document.querySelector('.submenu2');

link1.addEventListener('mouseenter', function() {
  submenu1.style.maxHeight = '500px';
  submenu1.style.opacity = '1';
});

link1.addEventListener('mouseleave', function() {
  submenu1.style.maxHeight = '0';
  submenu1.style.opacity = '0';
});

link2.addEventListener('mouseenter', function() {
  submenu2.style.maxHeight = '500px';
  submenu2.style.opacity = '1';
});

link2.addEventListener('mouseleave', function() {
  submenu2.style.maxHeight = '0';
  submenu2.style.opacity = '0';
});

//Botón scroll arriba

function scrollToTop() {
  window.scrollTo({
      top: 0,
      behavior: 'smooth'
  });
}

window.addEventListener('scroll', function() {
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
