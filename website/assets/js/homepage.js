// ************************************************************

// Tabs Section Script One
let isDown = false;
let startX;
let scrollLeft;
const slider = document.querySelector('.tabs-section.upper-tab .items');
let arrows = document.querySelectorAll(".tabs-section.upper-tab .icon i");
const end = () => {
    isDown = false;
    slider.classList.remove('active');
}

const start = (e) => {
    isDown = true;
    slider.classList.add('active');
    startX = e.pageX || e.touches[0].pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
    handleIcons(slider.scrollLeft)
}

const move = (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX || e.touches[0].pageX - slider.offsetLeft;
    const dist = (x - startX);
    slider.scrollLeft = scrollLeft - dist;
    handleIcons(slider.scrollLeft)
}

(() => {
    slider.addEventListener('mousedown', start);
    slider.addEventListener('touchstart', start);
    slider.addEventListener('mousemove', move);
    slider.addEventListener('touchmove', move);
    slider.addEventListener('mouseleave', end);
    slider.addEventListener('mouseup', end);
    slider.addEventListener('touchend', end);
})();

const handleIcons = (scrollVal) => {
    let maxScrollableWidth = slider.scrollWidth - slider.clientWidth;
    arrows[0].parentElement.style.display = scrollVal <= 0 ? "none" : "flex";
    arrows[1].parentElement.style.display = maxScrollableWidth - scrollVal <= 1 ? "none" : "flex";
}

arrows.forEach((e) => {
    e.addEventListener("click", () => {
        let scrollWidth = slider.scrollLeft += e.id === "left" ? -150 : 150;
        handleIcons(scrollWidth);
    });
});
// ************************************************************





// / ************************************************************
// Tabs Section Script Two
let isDownTwo = false;
let startXTwo;
let scrollLeftTwo;
const sliderTwo = document.querySelector('.different-section.upper .items');
let arrowsTwo = document.querySelectorAll(".different-section.upper .icon i");

const handleIconstTwo = (scrollVal) => {
    let maxScrollableWidth = sliderTwo.scrollWidth - sliderTwo.clientWidth;
    arrowsTwo[0].parentElement.style.display = scrollVal <= 0 ? "none" : "flex";
    arrowsTwo[1].parentElement.style.display = maxScrollableWidth - scrollVal <= 1 ? "none" : "flex";
}

const endTwo = () => {
    isDownTwo = false;
    sliderTwo.classList.remove('active');
}

const startTwo = (e) => {
    isDownTwo = true;
    sliderTwo.classList.add('active');
    startXTwo = e.pageX || e.touches[0].pageX - sliderTwo.offsetLeft;
    scrollLeftTwo = sliderTwo.scrollLeft;
    handleIconstTwo(scrollLeftTwo)
}

const moveTwo = (e) => {
    if (!isDownTwo) return;
    e.preventDefault();
    const x = e.pageX || e.touches[0].pageX - sliderTwo.offsetLeft;
    const dist = (x - startXTwo);
    sliderTwo.scrollLeft = scrollLeftTwo - dist;
    handleIconstTwo(sliderTwo.scrollLeft)
}

(() => {
    sliderTwo.addEventListener('mousedown', startTwo);
    sliderTwo.addEventListener('touchstart', startTwo);
    sliderTwo.addEventListener('mousemove', moveTwo);
    sliderTwo.addEventListener('touchmove', moveTwo);
    sliderTwo.addEventListener('mouseleave', endTwo);
    sliderTwo.addEventListener('mouseup', endTwo);
    sliderTwo.addEventListener('touchend', endTwo);
})();



arrowsTwo.forEach((e) => {
    e.addEventListener("click", () => {
        let scrollWidth = sliderTwo.scrollLeft += e.id === "diff_sec_left" ? -150 : 150;
        handleIconstTwo(scrollWidth);
    });
});
// ************************************************************





// / ************************************************************
// Tabs Section Script Three
let isDownThree = false;
let startXThree;
let scrollLeftThree;
const sliderThree = document.querySelector('.differ-tab-section .items');
let arrowsThree = document.querySelectorAll(".differ-tab-section .icon i");

const handleIconsThree = (scrollVal) => {
    let maxScrollableWidth = sliderThree.scrollWidth - sliderThree.clientWidth;
    arrowsThree[0].parentElement.style.display = scrollVal <= 0 ? "none" : "flex";
    arrowsThree[1].parentElement.style.display = maxScrollableWidth - scrollVal <= 1 ? "none" : "flex";
}

const endThree = () => {
    isDownThree = false;
    sliderThree.classList.remove('active');
}

const startThree = (e) => {
    isDownThree = true;
    sliderThree.classList.add('active');
    startXThree = e.pageX || e.touches[0].pageX - sliderThree.offsetLeft;
    scrollLeftThree = sliderThree.scrollLeft;
    handleIconsThree(scrollLeftThree)
}

const moveThree = (e) => {
    if (!isDownThree) return;
    e.preventDefault();
    const x = e.pageX || e.touches[0].pageX - sliderThree.offsetLeft;
    const dist = (x - startXThree);
    sliderThree.scrollLeft = scrollLeftThree - dist;
    handleIconsThree(sliderThree.scrollLeft)
}

(() => {
    sliderThree.addEventListener('mousedown', startThree);
    sliderThree.addEventListener('touchstart', startThree);
    sliderThree.addEventListener('mousemove', moveThree);
    sliderThree.addEventListener('touchmove', moveThree);
    sliderThree.addEventListener('mouseleave', endThree);
    sliderThree.addEventListener('mouseup', endThree);
    sliderThree.addEventListener('touchend', endThree);
})();
arrowsThree.forEach((e) => {
    e.addEventListener("click", () => {
        let scrollWidth = sliderThree.scrollLeft += e.id === "diff_left" ? -100 : 100;
        handleIconsThree(scrollWidth);
    });
});
// ************************************************************





// / ************************************************************
// Tabs Section Script Four
let isDownFour = false;
let startXFour;
let scrollLeftFour;
const sliderFour = document.querySelector('.lower .items');
let arrowsFour = document.querySelectorAll(".lower .icon i");

const handleIconsFour = (scrollVal) => {
    let maxScrollableWidth = sliderFour.scrollWidth - sliderFour.clientWidth;
    arrowsFour[0].parentElement.style.display = scrollVal <= 0 ? "none" : "flex";
    arrowsFour[1].parentElement.style.display = maxScrollableWidth - scrollVal <= 1 ? "none" : "flex";
}

const endFour = () => {
    isDownFour = false;
    sliderFour.classList.remove('active');
}

const startFour = (e) => {
    isDownFour = true;
    sliderFour.classList.add('active');
    startXFour = e.pageX || e.touches[0].pageX - sliderFour.offsetLeft;
    scrollLeftFour = sliderFour.scrollLeft;
    handleIconsFour(scrollLeftFour)
}

const moveFour = (e) => {
    if (!isDownFour) return;
    e.preventDefault();
    const x = e.pageX || e.touches[0].pageX - sliderFour.offsetLeft;
    const dist = (x - startXFour);
    sliderFour.scrollLeft = scrollLeftFour - dist;
    handleIconsFour(sliderFour.scrollLeft)
}

(() => {
    sliderFour.addEventListener('mousedown', startFour);
    sliderFour.addEventListener('touchstart', startFour);
    sliderFour.addEventListener('mousemove', moveFour);
    sliderFour.addEventListener('touchmove', moveFour);
    sliderFour.addEventListener('mouseleave', endFour);
    sliderFour.addEventListener('mouseup', endFour);
    sliderFour.addEventListener('touchend', endFour);
})();
arrowsFour.forEach((e) => {
    e.addEventListener("click", () => {
        let scrollWidth = sliderFour.scrollLeft += e.id === "diff_sec_left_lower" ? -200 : 200;
        handleIconsFour(scrollWidth);
    });
});
// ************************************************************





// / ************************************************************
// Tabs Section Script Five
let isDownFive = false;
let startXFive;
let scrollLeftFive;
const sliderFive = document.querySelector('.lower-tab-section .items');
let arrowsFive = document.querySelectorAll(".lower-tab-section .icon i");

const handleIconsFive = (scrollVal) => {
    let maxScrollableWidth = sliderFive.scrollWidth - sliderFive.clientWidth;
    arrowsFive[0].parentElement.style.display = scrollVal <= 0 ? "none" : "flex";
    arrowsFive[1].parentElement.style.display = maxScrollableWidth - scrollVal <= 1 ? "none" : "flex";
}

const endFive = () => {
    isDownFive = false;
    sliderFive.classList.remove('active');
}

const startFive = (e) => {
    isDownFive = true;
    sliderFive.classList.add('active');
    startXFive = e.pageX || e.touches[0].pageX - sliderFive.offsetLeft;
    scrollLeftFive = sliderFive.scrollLeft;
    handleIconsFive(scrollLeftFive)
}

const moveFive = (e) => {
    if (!isDownFive) return;
    e.preventDefault();
    const x = e.pageX || e.touches[0].pageX - sliderFive.offsetLeft;
    const dist = (x - startXFive);
    sliderFive.scrollLeft = scrollLeftFive - dist;
    handleIconsFive(sliderFive.scrollLeft)
}

(() => {
    sliderFive.addEventListener('mousedown', startFive);
    sliderFive.addEventListener('touchstart', startFive);
    sliderFive.addEventListener('mousemove', moveFive);
    sliderFive.addEventListener('touchmove', moveFive);
    sliderFive.addEventListener('mouseleave', endFive);
    sliderFive.addEventListener('mouseup', endFive);
    sliderFive.addEventListener('touchend', endFive);
})();
arrowsFive.forEach((e) => {
    e.addEventListener("click", () => {
        let scrollWidth = sliderFive.scrollLeft += e.id === "lower-tab-section-left" ? -200 : 200;
        handleIconsFive(scrollWidth);
    });
});

// ************************************************************



// Cotent Hide show toggle tabs 

// Tabs 1 
const tabBtns = document.querySelectorAll('.upper-tab .item');
const tabContents = document.querySelectorAll('.upper-tab .slider-content');

tabBtns.forEach((e) => {
    e.addEventListener('click', function () {
        tabContents.forEach((e) => {
            e.classList.remove('active')
        })
        tabBtns.forEach((e) => {
            e.classList.remove('active-tab')
        })
        document.getElementById(this.getAttribute('data-target')).classList.add('active');
        this.classList.add('active-tab');
    })
})



// Tabs 2
const tabBtnsTwo = document.querySelectorAll('.different-section.upper .item');
const tabContentsTwo = document.querySelectorAll('.different-section.upper  .slider-content');

tabBtnsTwo.forEach((e) => {
    e.addEventListener('click', function () {
        tabContentsTwo.forEach((e) => {
            e.classList.remove('active')
        })
        tabBtnsTwo.forEach((e) => {
            e.classList.remove('active-tab')
        })
        document.getElementById(this.getAttribute('data-target')).classList.add('active');
        this.classList.add('active-tab');
    })
})




// Tabs 3
const tabBtnsThree = document.querySelectorAll('.differ-tab-section .differ-item');
const tabBtnsThreeArr2 = document.querySelectorAll('.differ-tab-section .item');
const tabContentsThree = document.querySelectorAll('.differ-tab-section  .differ-tab-content');

tabBtnsThree.forEach((e) => {
    e.addEventListener('click', function () {
        tabContentsThree.forEach((e) => {
            e.classList.remove('active')
        })
        tabBtnsThree.forEach((e) => {
            e.classList.remove('active')
        })
        document.getElementById(this.getAttribute('data-target')).classList.add('active');
        this.classList.add('active');
    })
})

tabBtnsThreeArr2.forEach((e) => {
    e.addEventListener('click', function () {
        tabContentsThree.forEach((e) => {
            e.classList.remove('active')
        })
        tabBtnsThreeArr2.forEach((e) => {
            e.classList.remove('active-tab')
        })
        document.getElementById(this.getAttribute('data-target')).classList.add('active');
        this.classList.add('active-tab');
    })
})


// Tabs 4
const tabBtnsFour = document.querySelectorAll('.different-section.lower .item');
const tabContentsFour = document.querySelectorAll('.different-section.lower  .slider-content');

tabBtnsFour.forEach((e) => {
    e.addEventListener('click', function () {
        tabContentsFour.forEach((e) => {
            e.classList.remove('active')
        })
        tabBtnsFour.forEach((e) => {
            e.classList.remove('active-tab')
        })
        document.getElementById(this.getAttribute('data-target')).classList.add('active');
        this.classList.add('active-tab');
    })
})


// Tabs 5
const tabBtnsFive = document.querySelectorAll('.lower-tab-section .item');
const tabContentsFive = document.querySelectorAll('.lower-tab-section  .slider-content');

tabBtnsFive.forEach((e) => {
    e.addEventListener('click', function () {
        tabContentsFive.forEach((e) => {
            e.classList.remove('active')
        })
        tabBtnsFive.forEach((e) => {
            e.classList.remove('active-tab')
        })
        document.getElementById(this.getAttribute('data-target')).classList.add('active');
        this.classList.add('active-tab');
    })
})




// Banner Video Autoplay Script Start 
const video = document.getElementById('banner_video');
window.setTimeout(function () {
    video.play();
}, 5000);
    // Banner Video Autoplay Script end