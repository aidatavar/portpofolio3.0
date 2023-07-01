function revealFunction() {

    window.sr = ScrollReveal({ duration: 1350, distance: '300px',  easing: 'ease-out'});

    sr.reveal('.title', {origin: 'left', reset: true});
    sr.reveal('.item', {origin: 'bottom', reset: true});
    sr.reveal('.about', {origin: 'right', reset: true});
    sr.reveal('.contact', {origin: 'left', reset: true});

}

window.addEventListener('load', () => {
    revealFunction()
})