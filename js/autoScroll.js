var range = document.querySelector('.slider');
var field = document.querySelector('.input');

// These two lines are set up as mutual listeners of each other's inputs. The
// The first line listens to range input and adjusts the value of the field
// accordingly, and vice-versa for the field to the range on the second line.
range.addEventListener('input', function(setting) { field.value = setting.target.value; });
field.addEventListener('input', function(setting) { range.value = setting.target.value; });


var scrollerID;
var paused = true;
var speed = document.getElementById('fieldInput')

// This function will begin scrolling at an interval calculated from the
// external variables found above.

function startScroll() {
    var interval = 120 / speed.value;
    // The function does nothing if the speed is set to zero or less.
    if (speed.value <= 0) {
        return;
    }
    // If the speed is non-zero, the following scrolls until the bottom of the
    // page is reached.
    else {
        var scroll  = setInterval(function () {
            window.scrollBy(0,1);
            if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight){
            stopScroll();
            }
        }, interval);
        return scroll;
    }
}

// This function stops the scrolling by eliminating the interval upon which
// it operates.

function stopScroll(){
    clearInterval(scrollerID);
}

// This block listens for presses of the enter key to start and stop
// scrolling.

document.body.addEventListener('keypress', function(event) {
    if (event.which == 13 || event.keyCode == 13) {
        if (paused == true) {
            scrollerID = startScroll();
            paused = false;
        }
        else {
            stopScroll();
            paused = true;
        }
    }
}, true);

