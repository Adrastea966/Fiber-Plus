//Botón scroll arriba
 function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

//formulario de contacto
const $form = document.querySelector('#form');
const $buttonMailTo = document.querySelector('#mail-to')

$form.addEventListener('submit', handleSubmit)

function handleSubmit(event) {
    event.preventDefault()
    const form = new FormData(this)
    $buttonMailTo.setAttribute('href',
        `mailto:ballian.eliana@gmail.com?subject= Nombre: ${form.get('name')} Correo: ${form.get('email')}&body=${form.get('message')}`
    )
    $buttonMailTo.click()
}
//scroll seccion nosotros
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