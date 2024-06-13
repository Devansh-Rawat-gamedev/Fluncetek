// Scroll to top 
let scrollBtn = document.querySelector(".scroll-top");
let header = document.querySelector('header');
window.onscroll = function () { scrollFunction() };


scrollBtn.addEventListener('click', topFunction);

function scrollFunction() {
    if (document.body.scrollTop > 520 || document.documentElement.scrollTop > 50) {
        scrollBtn.classList.add('active-scroll');
        header.classList.add('fixed');
    } else {
        scrollBtn.classList.remove('active-scroll')
        header.classList.remove('fixed ');
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// ************************************************************





// / ************************************************************

let videoPlay = document.querySelectorAll('.play-box');
let videoIframe = document.getElementById('videoIframe');
let videoModal = document.querySelector('.video-modal');
let videoOverlay = document.querySelector('.video-modal-overlay');
let videoClose = document.querySelector('.modal-btn');
videoPlay.forEach((e) => {
    e.addEventListener('click', function () {
        videoIframe.setAttribute("src", this.getAttribute('data-targetURL') + '?autoplay=1');
        videoModal.classList.add('active-modal');
        videoOverlay.classList.add('active-modal');
        document.body.classList.add('dont__scroll');
    })
})
videoClose.addEventListener('click', closeModal)
videoOverlay.addEventListener('click', closeModal);
function closeModal() {
    videoModal.classList.remove('active-modal');
    videoOverlay.classList.remove('active-modal');
    videoIframe.setAttribute('src', '');
    document.body.classList.remove('dont__scroll');
}


// Navbar Script Start 
let menuBoxes = document.querySelectorAll('.megamenu-boxes');
let navBoxes = document.querySelectorAll('.navMenu');
navBoxes.forEach((e)=>{
    e.addEventListener('click',function(){
      menuBoxes.forEach((e)=>{
        e.classList.remove('active');
      })
      navBoxes.forEach((e)=>{
        e.classList.remove('active');
      });
      this.classList.add('active');
      document.getElementById(this.getAttribute('data-navMenu')).classList.add('active');
    })
})
// Navbar Script end 
