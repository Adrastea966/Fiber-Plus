//Dark - light mode 
const toggleMode = () => {
  const slider = document.querySelector('.mode');
  const moonIcon = document.querySelector('.uil-moon');
  const sunIcon = document.querySelector('.uil-sun');
  const imageElements = document.querySelectorAll('.img-light, .slide-img img');

  const checkLocalStorage = () => {
    const mode = localStorage.getItem('mode');
    if (mode === 'light') {
      document.body.classList.add('light');
      moonIcon.style.display = 'none';
      sunIcon.style.display = 'block';
      imageElements.forEach((imageElement) => {
        if (imageElement.classList.contains('img-light')) {
          imageElement.src = 'https://res.cloudinary.com/adrastea/image/upload/v1689179582/Fiber-plus/Phone-light-mode_urmyeb.png';
        } else {
          switch (imageElement.alt) {
            case 'Logo de DirectTv':
              imageElement.src = 'https://res.cloudinary.com/adrastea/image/upload/v1689187089/Fiber-plus/direct_b6qfxm.png';
              break;
            case 'Logo de ESPN':
              imageElement.src = 'https://res.cloudinary.com/adrastea/image/upload/v1689187089/Fiber-plus/espn-light_emj18g.png';
              break;
            case 'Logo de FOX':
              imageElement.src = 'https://res.cloudinary.com/adrastea/image/upload/v1689187089/Fiber-plus/fox-light_m1mgju.png';
              break;
            case 'Logo de HBO':
              imageElement.src = 'https://res.cloudinary.com/adrastea/image/upload/v1689187090/Fiber-plus/hbo-light_dezpsy.png';
              break;
            case 'Logo de TyC sports':
              imageElement.src = 'https://res.cloudinary.com/adrastea/image/upload/v1689187089/Fiber-plus/tyc-light_eu4rcs.png';
              break;
            case 'Logo de TNT sports':
              imageElement.src = 'https://res.cloudinary.com/adrastea/image/upload/v1689187089/Fiber-plus/tn-light_zonqyw.png';
              break;
            case 'Logo de universal':
              imageElement.src = 'https://res.cloudinary.com/adrastea/image/upload/v1689187089/Fiber-plus/universal-light_ndvg2g.png';
              break;
            default:
              break;
          }
        }
      });
    }
  };

  checkLocalStorage();

  slider.addEventListener('click', () => {
    document.body.classList.toggle('light');
    if (document.body.classList.contains('light')) {
      moonIcon.style.display = 'none';
      sunIcon.style.display = 'block';
      localStorage.setItem('mode', 'light');
      imageElements.forEach((imageElement) => {
        if (imageElement.classList.contains('img-light')) {
          imageElement.src = 'https://res.cloudinary.com/adrastea/image/upload/v1689179582/Fiber-plus/Phone-light-mode_urmyeb.png';
        } else {
          switch (imageElement.alt) {
            case 'Logo de DirectTv':
              imageElement.src = 'https://res.cloudinary.com/adrastea/image/upload/v1689187089/Fiber-plus/direct_b6qfxm.png';
              break;
            case 'Logo de ESPN':
              imageElement.src = 'https://res.cloudinary.com/adrastea/image/upload/v1689187089/Fiber-plus/espn-light_emj18g.png';
              break;
            case 'Logo de FOX':
              imageElement.src = 'https://res.cloudinary.com/adrastea/image/upload/v1689187089/Fiber-plus/fox-light_m1mgju.png';
              break;
            case 'Logo de HBO':
              imageElement.src = 'https://res.cloudinary.com/adrastea/image/upload/v1689187090/Fiber-plus/hbo-light_dezpsy.png';
              break;
            case 'Logo de TyC sports':
              imageElement.src = 'https://res.cloudinary.com/adrastea/image/upload/v1689187089/Fiber-plus/tyc-light_eu4rcs.png';
              break;
            case 'Logo de TNT sports':
              imageElement.src = 'https://res.cloudinary.com/adrastea/image/upload/v1689187089/Fiber-plus/tn-light_zonqyw.png';
              break;
            case 'Logo de universal':
              imageElement.src = 'https://res.cloudinary.com/adrastea/image/upload/v1689187089/Fiber-plus/universal-light_ndvg2g.png';
              break;
            default:
              break;
          }
        }
      });
    } else {
      moonIcon.style.display = 'block';
      sunIcon.style.display = 'none';
      localStorage.setItem('mode', 'dark');
      imageElements.forEach((imageElement) => {
        if (imageElement.classList.contains('img-light')) {
          imageElement.src = 'https://res.cloudinary.com/adrastea/image/upload/v1689095835/Fiber-plus/Phone_tc7fpf.png';
        } else {
          switch (imageElement.alt) {
            case 'Logo de DirectTv':
              imageElement.src = 'https://res.cloudinary.com/adrastea/image/upload/v1688572408/Fiber-plus/direct_bhequk.svg';
              break;
            case 'Logo de ESPN':
              imageElement.src = 'https://res.cloudinary.com/adrastea/image/upload/v1688572416/Fiber-plus/espn_eok1yx.svg';
              break;
            case 'Logo de FOX':
              imageElement.src = 'https://res.cloudinary.com/adrastea/image/upload/v1688572408/Fiber-plus/fox_by6mav.svg';
              break;
            case 'Logo de HBO':
              imageElement.src = 'https://res.cloudinary.com/adrastea/image/upload/v1688572409/Fiber-plus/hbo_kjcdxx.svg';
              break;
            case 'Logo de TyC sports':
              imageElement.src = 'https://res.cloudinary.com/adrastea/image/upload/v1688572410/Fiber-plus/tyc_ggbm3t.svg';
              break;
            case 'Logo de TNT sports':
              imageElement.src = 'https://res.cloudinary.com/adrastea/image/upload/v1688572408/Fiber-plus/tnt_rdjvbc.svg';
              break;
            case 'Logo de universal':
              imageElement.src = 'https://res.cloudinary.com/adrastea/image/upload/v1688572418/Fiber-plus/universal_p4dpqz.svg';
              break;
            default:
              break;
          }
        }
      });
    }
  });

  if (!localStorage.getItem('mode')) {
    const defaultMode = document.body.classList.contains('light') ? 'light' : 'dark';
    localStorage.setItem('mode', defaultMode);
  }
};

toggleMode();

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
  navResponsive.classList.toggle('active');

  if (navResponsive.classList.contains('active')) {
    menuResponsive.style.visibility = 'visible';
    navLinks.forEach(link => {
      link.style.opacity = '1';
    });
    arrows.forEach(arrow => {
      arrow.style.display = 'block';
    });
    arrowIn.classList.add('rotate');
  } else {
    menuResponsive.style.visibility = 'hidden';
    navLinks.forEach(link => {
      link.style.opacity = '0';
    });
    arrows.forEach(arrow => {
      arrow.style.display = 'none';
    });
    arrowIn.classList.remove('rotate');
  }
});