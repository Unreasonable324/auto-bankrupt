function lel() {
    var inputRanre = document.querySelector('.range')
    console.log(inputRanre.value);
    var sliderLine = document.querySelector('.slider-line')
    var sliderLineWidth =sliderLine.offsetWidth
    var sliderLineWidthAll = widthImg *100
    console.log(sliderLineWidthAll);
    console.log(sliderLineWidth);
    // console.log(sliderLine);
    var widthImg = document.querySelectorAll('.slider-line img').length *120/100
    
    var widthImgs = widthImg *inputRanre.value
    console.log(widthImgs);
    console.log(widthImg);
    if (widthImgs>= 1430){
        widthImgs=1430
    }
    sliderLine.style.transform = "translateX(" + (-widthImgs) + "px)"
    

    // var img = document.querySelector('.btn')
    // img.style.height = inputRanre.value + 'px'
}