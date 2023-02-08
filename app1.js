function lel() {
    var inputRanre = document.querySelector('.range')
    var sliderLine = document.querySelector('.slider-line')
    var sliderLineWidth = sliderLine.offsetWidth //730
    var countImg = document.querySelectorAll('.slider-line img').length //18
    var imgWidth = document.querySelector('.slider-line img').offsetWidth +20 // 100
    var imgsWidth = imgWidth*countImg //2160
    var errorSlider = imgsWidth - sliderLineWidth//1430
    var onePercent = errorSlider/100 //14.3
    var inputValue = onePercent*inputRanre.value
    
   
    // if (inputValue>= errorSlider){
    //     inputValue = errorSlider
    // }
    sliderLine.style.transform = "translateX(" + (-inputValue) + "px)"

  
}