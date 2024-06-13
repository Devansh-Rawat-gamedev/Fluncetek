const btns = document.querySelectorAll('.footer-tabs button');
const footerContents = document.querySelectorAll('.footer_contents');
btns.forEach((e) => {
    e.addEventListener('click', function() {
        btns.forEach((e)=>{
            e.classList.remove('active');
        })

        footerContents.forEach((e) => {
            e.classList.remove('active');
        })
        this.classList.add('active');
        document.getElementById(this.getAttribute('data-footer')).classList.add('active');

    })
})