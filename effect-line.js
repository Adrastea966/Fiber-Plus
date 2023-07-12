let controller = new ScrollMagic.Controller();
let scene = new ScrollMagic.Scene({
        triggerElement: "#imagen-educacion-section",
        triggerHook: "onEnter",
        offset: 200 //offset
    })
    .setTween(".linea-blanca", {
        opacity: 0,
        x: "100%",
        ease: "power4.out",
        duration: 5
    })
    .addTo(controller);