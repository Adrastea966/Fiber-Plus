var splide = new Splide('.splide', {
    type: 'loop',
    autoplay: true,
    pagination: false
});
var bar = document.querySelector('.my-slider-progress-bar');

splide.on('mounted move', function () {
    var end = splide.length;
    var rate = Math.min((splide.index + 1) / end, 1);
    bar.style.width = String(100 * rate) + '%';
});

splide.mount();