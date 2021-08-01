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