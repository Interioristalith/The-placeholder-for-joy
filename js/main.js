// Microscroll of background while scrolling the webpage


// Expanding the side panel

function expandPanel () {
    const leftPanel = document.getElementById('left-panel')
    leftPanel.addEventListener('mouseenter', slideRight)

    leftPanel.addEventListener('mouseleave', slideBack)

    function slideRight () {
        leftPanel.classList.toggle('left-panel__expanded')
    }

    function slideBack () {
        leftPanel.classList.toggle('left-panel__expanded')
    }
}
expandPanel();


// Temporary scrolling down

window.scroll(0, 200)
window.onload = scrollDown;

function scrollDown () {
    window.scroll(0, document.body.scrollHeight)
}


// Anime.js

const container = document.querySelector('.container')
for (let i=0; i <=100; i++) {
    const blocks = document.createElement('div')
    blocks.classList.add('block')
    container.appendChild(blocks)
}



function getWidth() {
    const first = document.getElementsByClassName('anime-js')[0]
    let width = window.getComputedStyle(first).width
    return width;
}

function getHeight() {
    const first = document.getElementsByClassName('anime-js')[0]
    let height = window.getComputedStyle(first).height
    return height;
}

window.addEventListener('resize', getNewParam)

function getNewParam () {
    let param = [parseInt(getWidth())/2 - 25, parseFloat(getHeight())/2 - 50]
    getHeight(), getWidth()
    return param
}



function animateBlocks () {
    anime ({
        targets: '.block',
        translateX: function () {
            return anime.random((-1)*getNewParam()[0], getNewParam()[0])
        },
        translateY: function () {
            return anime.random(-1*getNewParam()[1], getNewParam()[1])
        },
        scale: function () {
            return anime.random(1,1.5)
        },
        easing: 'linear',
        duration: 3000,
        delay: anime.stagger(10),
        complete: animateBlocks
    })
}
animateBlocks()