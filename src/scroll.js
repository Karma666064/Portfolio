const buttons = [
    document.querySelector('#btnAbout'),
    document.querySelector('#btnWork'),
    document.querySelector('#btnCreation'),
    document.querySelector('#btnMiniCreation')
];

const sections = [
    document.querySelector('#sectionAbout'),
    document.querySelector('#sectionWork'),
    document.querySelector('#sectionCreation'),
    document.querySelector('#sectionMiniProjects')
];

window.addEventListener('scroll', () => {
    const { scrollTop, clientHeight } = document.documentElement;

    sections.forEach((section, index) => {
        const topSectionToTopViewport = section.getBoundingClientRect().top;
        const verifScroll = (scrollTop + topSectionToTopViewport).toFixed() - clientHeight * 0.4;

        if (scrollTop > verifScroll && scrollTop < verifScroll + clientHeight) {
            buttons.forEach(button => button.classList.remove('active-btn'));
            buttons[index].classList.add('active-btn');
        }
    });
});