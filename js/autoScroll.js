//if (slider !== undefined && slider !== null) {

    var slider = document.getElementById("sliderValue");
    var output = document.getElementById("output");
    output.innerHTML = slider.value;

    slider.oninput = function() {
        output.innerHTML = this.value;
    }
//}