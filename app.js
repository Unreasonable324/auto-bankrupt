function lel() {
    var inputRanre = document.querySelector('.range')
    var sliderLine = document.querySelector('.slider-line')
    var sliderLineWidth = sliderLine.offsetWidth //730
    var countImg = document.querySelectorAll('.slider-line img').length //18
    var imgWidth = document.querySelector('.slider-line img').offsetWidth + 20 // 100
    var imgsWidth = imgWidth * countImg //2160
    var errorSlider = imgsWidth - sliderLineWidth//1430
    var onePercent = errorSlider / 100 //14.3
    var inputValue = onePercent * inputRanre.value

    sliderLine.style.transform = "translateX(" + (-inputValue) + "px)"
}

const buttons = document.querySelectorAll('.btn__tabs')
const tabsItem = document.querySelectorAll('.tab')
buttons.forEach(function (item) {
    item.addEventListener('click', function () {
        let currentBtn = item
        let tabId = currentBtn.getAttribute('data-tab')
        let currentTab = document.querySelector(tabId)
        if (!currentBtn.classList.contains('active')) {
            buttons.forEach(function (item) {
                item.classList.remove('active')
            })
            tabsItem.forEach(function (item) {
                item.classList.remove('tab_active')
            })
            currentBtn.classList.add('active')
            currentTab.classList.add('tab_active')
        }

    })
})
document.querySelector('.btn__tabs').click()



const btnBurger = document.querySelector('.menu-burger')
const menuNavBurger = document.querySelector('.menu-nav-burger')
const anchor = document.querySelectorAll('.menu-nav-burger a')
const body = document.body

btnBurger.addEventListener('click', () => {
    console.log(anchor);
    menuNavBurger.classList.toggle('menu-nav-burger__active')
    body.style.overflow = body.style.overflow === 'hidden' ? '' : 'hidden';
    btnBurger.style.color = btnBurger.style.color === 'var(--bgMainDark)' ? '' : 'var(--bgMainDark)'
})
 anchor.forEach(function(anchorItem){
    anchorItem.addEventListener('click', () =>{
        menuNavBurger.classList.remove('menu-nav-burger__active')
    body.style.overflow = body.style.overflow === 'hidden' ? '' : 'hidden';
    btnBurger.style.color = btnBurger.style.color === 'var(--bgMainDark)' ? '' : 'var(--bgMainDark)'
    })
 })