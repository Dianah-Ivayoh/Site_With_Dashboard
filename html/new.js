function updateDonutChart2(el, percent2, donut) {
    percent2 = Math.round(percent2);
    if (percent2 > 100) {
        percent2 = 100;
    } else if (percent2 < 0) {
        percent2 = 0;
    }
    var deg = Math.round(360 * (percent2 / 100));

    if (percent2 > 50) {
        $(el + ' .pie').css('clip', 'rect(auto, auto, auto, auto)');
        $(el + ' .right-side').css('transform', 'rotate(180deg)');
    } else {
        $(el + ' .pie').css('clip', 'rect(0, 1em, 1em, 0.5em)');
        $(el + ' .right-side').css('transform', 'rotate(0deg)');
    }
   
        $(el + ' .right-side').css('border-width', '0.1em');
        $(el + ' .left-side').css('border-width', '0.1em');
        $(el + ' .shadow').css('border-width', '0.1em');
    
    $(el + ' .num').text(percent2);
    $(el + ' .left-side').css('transform', 'rotate(' + deg + 'deg)');
}

// Pass in a number for the percent2
updateDonutChart2('#specificChart2', 66.67, true);

// //Ignore the rest, it's for the input and checkbox

$('#percent2').change(function () {
    var percent2 = $(this).val();
    var donut = $('#donut input').is(':checked');
    updateDonutChart2('#specificChart2', percent2, donut);
}).keyup(function () {
    var percent2 = $(this).val();
    var donut = $('#donut input').is(':checked');
    updateDonutChart2('#specificChart2', percent2, donut);
});;