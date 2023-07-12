// Active modal
const modal = document.querySelector('.modal');
const btn = document.querySelector('#btn');
const closeIcon = document.querySelector('.close'); 

btn.addEventListener('click', () => {
    modal.classList.add('active-modal');
});

closeIcon.addEventListener('click', () => {
    modal.classList.remove('active-modal');
});

//pop-up image
function showPopUp() {
    var popUp = document.getElementById("pop-up-image");
    popUp.style.display = "block";
}

function hidePopUp() {
    var popUp = document.getElementById("pop-up-image");
    popUp.style.display = "none";
}

//Descargar grilla
function downloadFile(url, filename) {
    fetch(url)
        .then(response => response.blob())
        .then(blob => {
            const link = document.createElement('a');
            link.href = URL.createObjectURL(blob);
            link.download = filename;
            link.click();
        });
}

//código de acceso con local Storage
const accessCodeInput = document.querySelector('#access-code');
const seccionSinCodigo = document.querySelector('.seccion-sin-codigo');
const seccionConCodigo = document.querySelector('.seccion-con-codigo');
const codigoIncorrecto = document.querySelector('.mensaje-error');
const codigoCorrecto = "1234";

const accessButton = document.querySelector('#access-button');
const errorMessage = document.querySelector('#error-message');

accessButton.addEventListener('click', () => {
    const accessCode = accessCodeInput.value;
    if (accessCode === codigoCorrecto) {
        seccionSinCodigo.style.display = 'none';
        seccionConCodigo.style.display = 'block';
        errorMessage.style.display = 'none';
        sessionStorage.setItem('codigoIngresado', 'true');
    } else {
        errorMessage.style.display = 'block';
        codigoIncorrecto.style.display ='block';
        errorMessage.textContent = 'Código de acceso incorrecto';
        sessionStorage.removeItem('codigoIngresado');
    }
});

window.addEventListener('load', () => {
    const codigoIngresado = sessionStorage.getItem('codigoIngresado');
    if (codigoIngresado === 'true') {
        seccionSinCodigo.style.display = 'none';
        seccionConCodigo.style.display = 'block';
    }
});

window.addEventListener('beforeunload', () => {
    const codigoIngresado = sessionStorage.getItem('codigoIngresado');
    if (codigoIngresado === 'false') {
        sessionStorage.removeItem('codigoIngresado');
    }
});