// scroll动画
let scrolls = document.querySelectorAll('.scroll')
window.addEventListener('scroll', addShow)
function addShow() {
    let triggerBottom = window.innerHeight
    for (let i = 0; i < scrolls.length; i++) {
        let boxesTop = scrolls[i].getBoundingClientRect().top
        if(boxesTop < triggerBottom) {
            scrolls[i].classList.add('show')
        } else {
            scrolls[i].classList.remove('show')
        }
    }
}
addShow()