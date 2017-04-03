jQuery(document).ready(function ($) {

    $(".rightArrow").click(function () {
        var leftPos = $('.innerWrapper').scrollLeft();
        $(".innerWrapper").animate({scrollLeft: leftPos + 200}, 800);
    });
    $(".leftArrow").click(function () {
        var leftPos = $('.innerWrapper').scrollLeft();
        $(".innerWrapper").animate({scrollLeft: leftPos - 200}, 800);
    });

    $(".rightArrow2").click(function () {
        var leftPos = $('.innerWrapper2').scrollLeft();
        $(".innerWrapper2").animate({scrollLeft: leftPos + 200}, 800);
    });
    $(".leftArrow2").click(function () {
        var leftPos = $('.innerWrapper2').scrollLeft();
        $(".innerWrapper2").animate({scrollLeft: leftPos - 200}, 800);
    });

});