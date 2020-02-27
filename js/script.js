// Get the current year for the copyright 

$('#year').text(new Date().getFullYear());

// Configure slider 

// $('.carousel').carousel({
//     interval: 6000,
//     pause: 'hover'
// });

//Video autoplay

$(document).ready(function () {
    autoPlayYouTubeModal();
});

function autoPlayYouTubeModal() {
        var trigger = $('.video');
    trigger.click(function () {
        var theModal = $(this).data("target");
        var videoSRC = $(this).attr("data-videoModal");
        var videoSRCauto = videoSRC + "?autoplay=1";
        $(theModal + ' iframe').attr('src', videoSRCauto);
        $(theModal).on('hidden.bs.modal', function (e) {
            $(theModal + ' iframe').attr('src', '');
        });
    });
};


// Preloader

$(window).on("load", function(){
    $(".loader-wrapper").fadeOut("slow");
});


// Range

var elem = document.querySelector('input[type="range"]');

var rangeValue = function(){
  var newValue = elem.value;
  var target = document.querySelector('.value');
  target.innerHTML = newValue;
}

elem.addEventListener("input", rangeValue);

//Init Scrollspy

$('body').scrollspy({ target: '#main-nav' });