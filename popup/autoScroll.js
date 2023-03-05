
var slider = document.getElementByID("sliderValue");
var output = document.getElementByID("output");
output.innerHTML = slider.value;

slider.oninput = function() {
    output.innerHTML = this.value;
}

//    window.scrollBy(0,1);
//    scrollDelay = setTimeout(autoScroll, 40);
}

