// Scroll animation imported from ScrollReveal website

const sr = ScrollReveal({
    distance: '30px',
    duration: 1000,
    reset: true
});

sr.reveal('#greeting, #name,.section-title, .title-animation', { delay: 200, origin: 'top' });
sr.reveal('#banner-title, .back-end, .version-control, .about-me-content, .projects-section', { delay: 200, origin: 'bottom' });
sr.reveal('.back-end, .design, .img-slider, .primary-btn, .vertical-name', { delay: 200, origin: 'right' });
sr.reveal('.underline-div, .front-end, .database, .location', { delay: 200, origin: 'left' });
