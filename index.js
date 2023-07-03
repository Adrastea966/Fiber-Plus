//wsp animacion 

const whatsappButton = document.querySelector('.whatsapp-button');

const delay = 200;

setTimeout(() => {
  whatsappButton.classList.add('animate-appear');
}, delay);

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

// codigo acceso

const btn = document.getElementById('btn');
const seccionSinCodigo = document.querySelector('.seccion-sin-codigo');
const seccionConCodigo = document.querySelector('.seccion-con-codigo');

btn.addEventListener('click', function() {
    seccionSinCodigo.style.display = seccionSinCodigo.style.display === 'none' ? 'block' : 'none';
    seccionConCodigo.style.display = seccionConCodigo.style.display === 'none' ? 'block' : 'none';
});