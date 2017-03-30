/**
 * Created by Administrator on 3/29/2017.
 */


var slideIndex = 1;
showDivs(slideIndex);


function plusDivs(n) {
    showDivs(slideIndex += n);
    console.log('pushed');
}

setTimeout(function () {
    showDivs(1)
}, 1000);

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");
    if (n > x.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = x.length
    }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex - 1].style.display = "block";
}