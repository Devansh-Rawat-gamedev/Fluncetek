
const navExpand = [].slice.call(document.querySelectorAll('.nav-expand'));
const backLink = `<li class="nav-item">
<a class="nav-link nav-back-link" href="javascript:;">
Back
</a>
</li>`;
navExpand.forEach(item => {
    item.querySelector('.nav-expand-content').insertAdjacentHTML('afterbegin', backLink);
    item.querySelector('.nav-link').addEventListener('click', () => item.classList.add('active'));
    item.querySelector('.nav-back-link').addEventListener('click', () => item.classList.remove('active'));
});

// ---------------------------------------
// not-so-important stuff starts here

const ham = document.getElementById('ham');
const closeMenu = document.querySelector('.menu-close');
const MenuOverlay = document.querySelector('.menu-overlay');
ham.addEventListener('click', function() {
    document.body.classList.add('nav-is-toggled');
    MenuOverlay.classList.add('menu-overlay-active');
});
closeMenu.addEventListener('click', function() {
    document.body.classList.remove('nav-is-toggled');
    MenuOverlay.classList.remove('menu-overlay-active');
});
MenuOverlay.addEventListener('click', function() {
    document.body.classList.remove('nav-is-toggled');
    MenuOverlay.classList.remove('menu-overlay-active');
});