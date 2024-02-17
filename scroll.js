const btnAbout = document.querySelector('#btnAbout');
const btnWork = document.querySelector('#btnWork');
const btnCreation = document.querySelector('#btnCreation');
const btnMiniCreation = document.querySelector('#btnMiniCreation');

const sectionAbout = document.querySelector('#sectionAbout');
const sectionWork = document.querySelector('#sectionWork');
const sectionCreation = document.querySelector('#sectionCreation');
const sectionMiniProjects = document.querySelector('#sectionMiniProjects');


window.addEventListener('scroll', () => {
    const { scrollTop, clientHeight } = document.documentElement;

    const topSectionAboutToTopViewport = sectionAbout.getBoundingClientRect().top;
    const topSectionWorkToTopViewport = sectionWork.getBoundingClientRect().top;
    const topSectionCreationToTopViewport = sectionCreation.getBoundingClientRect().top;
    const topSectionMiniProjectsToTopViewport = sectionMiniProjects.getBoundingClientRect().top;

    const verifScrollAbout = (scrollTop + topSectionAboutToTopViewport).toFixed() - clientHeight * 0.4;
    const verifScrollWork = (scrollTop + topSectionWorkToTopViewport).toFixed() - clientHeight * 0.4;
    const verifScrollCreation = (scrollTop + topSectionCreationToTopViewport).toFixed() - clientHeight * 0.4;
    const verifScrollMiniCreation = (scrollTop + topSectionMiniProjectsToTopViewport).toFixed() - clientHeight * 0.4;

    console.log(scrollTop > verifScrollWork && scrollTop < verifScrollCreation);
    if (scrollTop > verifScrollAbout && scrollTop < verifScrollWork) {
        btnAbout.classList.add('active-btn');
        btnWork.classList.remove('active-btn');
        btnCreation.classList.remove('active-btn');
        btnMiniCreation.classList.remove('active-btn');

    } else if (scrollTop > verifScrollWork && scrollTop < verifScrollCreation) {
        btnAbout.classList.remove('active-btn');
        btnWork.classList.add('active-btn');
        btnCreation.classList.remove('active-btn');
        btnMiniCreation.classList.remove('active-btn');

    } else if (scrollTop > verifScrollCreation && scrollTop < verifScrollMiniCreation) {
        btnAbout.classList.remove('active-btn');
        btnWork.classList.remove('active-btn');
        btnCreation.classList.add('active-btn');
        btnMiniCreation.classList.remove('active-btn');

    } else if (scrollTop > verifScrollMiniCreation) {
        btnAbout.classList.remove('active-btn');
        btnWork.classList.remove('active-btn');
        btnCreation.classList.remove('active-btn');
        btnMiniCreation.classList.add('active-btn');
    }
});