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

var rangeXbox360 = document.querySelector('#rangeXbox360')
var setXbox360 = function() {
    var priceXbox360 = document.querySelector('#priceXbox360')
    var daysXbox360 = document.querySelector('#daysXbox360')

    var days = rangeXbox360.value
    var price
    var word

    switch (true) {
        case (days==1): {
            price = 10
            word = 'para'
            break
        } case (days<7): {
            price = 10 + (days-1)*5
            word = 'paros'
            break
        } case (days==7): {
            price = 35
            word = 'paros'
            break
        }case (days<10): {
            price = 35 + (days-7)*3
            word = 'paros'
            break
        } case (days<12): {
            price = 35 + (days-7)*3
            word = 'parų'
            break
        }
        case (days<15): {
            price = 50
            word = 'parų'
            break
        }
        default:
            break;
    }
    priceXbox360.innerHTML = price
    daysXbox360.innerHTML = days + ' ' + word
}

rangeXbox360.addEventListener("input", setXbox360);


//Init Scrollspy

$('body').scrollspy({ target: '#main-nav' });

