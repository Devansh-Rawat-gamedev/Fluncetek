
let isDownSix = false;
let startXSix;
let scrollLeftSix;
const sliderSix = document.querySelector('.video-section.home .items');
let arrowsSix = document.querySelectorAll(".video-section.home .icon i");

const endSix = () => {
    isDownSix = false;
    sliderSix.classList.remove('active');
}

const startSix = (e) => {
    isDownSix = true;
    sliderSix.classList.add('active');
    startXSix = e.pageX || e.touches[0].pageX - sliderSix.offsetLeft;
    scrollLeftSix = sliderSix.scrollLeft;
}

const moveSix = (e) => {
    if (!isDownSix) return;
    e.preventDefault();
    const x = e.pageX || e.touches[0].pageX - sliderSix.offsetLeft;
    const dist = (x - startXSix);
    sliderSix.scrollLeft = scrollLeftSix - dist;
}

(() => {
    sliderSix.addEventListener('mousedown', startSix);
    sliderSix.addEventListener('touchstart', startSix);
    sliderSix.addEventListener('mousemove', moveSix);
    sliderSix.addEventListener('touchmove', moveSix);
    sliderSix.addEventListener('mouseleave', endSix);
    sliderSix.addEventListener('mouseup', endSix);
    sliderSix.addEventListener('touchend', endSix);
})();