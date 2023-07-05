// Dark-light mode
window.addEventListener('DOMContentLoaded', () => {
  const slider = document.querySelector('.mode');
  const moonIcon = document.querySelector('.uil-moon');
  const sunIcon = document.querySelector('.uil-sun');

  slider.addEventListener('click', () => {
      if (moonIcon.style.display === 'none') {
          moonIcon.style.display = 'block';
          sunIcon.style.display = 'none';
      } else {
          moonIcon.style.display = 'none';
          sunIcon.style.display = 'block';
      }
  });
});

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

//navbar-responsive 
let listElements = document.querySelectorAll('.list-button-click');
let arrowIn = document.querySelector('.arrow-in');
let navResponsive = document.querySelector('.navbar-responsive');
let navLinks = document.querySelectorAll('.nav-link');
let arrows = document.querySelectorAll('.list-arrow');
let menuResponsive = document.querySelector('.list')

listElements.forEach(listElement => {
    listElement.addEventListener('click', () => {

        listElement.classList.toggle('arrow');

        let height = 0;
        let menu = listElement.nextElementSibling;
        if (menu.clientHeight == "0") {
            height = menu.scrollHeight;
        }

        menu.style.height = `${height}px`;

    })
});

arrowIn.addEventListener('click', () => {
    if (navResponsive.style.width === '300px') {
        navResponsive.style.width = '50px';
        menuResponsive.style.visibility='hidden';
        navLinks.forEach(link => {
            link.style.opacity = '0';
        });
        arrows.forEach(arrow => {
            arrow.style.display = 'none';
        });
        arrowIn.classList.remove('rotate');
    } else {
        navResponsive.style.width = '300px';
        menuResponsive.style.visibility='visible';
        navLinks.forEach(link => {
            link.style.opacity = '1';
        });
        arrows.forEach(arrow => {
            arrow.style.display = 'block';
        });
        arrowIn.classList.add('rotate');
    }
});

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

//formulario de contacto
const $form = document.querySelector('#form');
const $buttonMailTo = document.querySelector('#mail-to')

$form.addEventListener('submit', handleSubmit)

function handleSubmit(event){
    event.preventDefault()
    const form = new FormData(this)
    $buttonMailTo.setAttribute('href', `mailto:ballian.eliana@gmail.com?subject= Nombre: ${form.get('name')} Correo: ${form.get('email')}&body=${form.get('message')}`)
    $buttonMailTo.click()
}