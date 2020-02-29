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


//Init Scrollspy

$('body').scrollspy({ target: '#main-nav' });




// RANGES



// Range Oculus

var rangeOculus = document.querySelector('#rangeOculus')
var setOculus = function() {
    var priceOculus = document.querySelector('#priceOculus')
    var daysOculus = document.querySelector('#daysOculus')

    var days = rangeOculus.value
    var price
    var word

    switch (true) {
        case (days==1): {
            price = 25
            word = 'para'
            break
        } case (days<7): {
            price = 25 + (days-1)*5
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
    priceOculus.innerHTML = price
    daysOculus.innerHTML = days + ' ' + word
}

rangeOculus.addEventListener("input", setOculus);


// Range PSVR

var rangePsvr = document.querySelector('#rangePsvr')
var setPsvr = function() {
    var pricePsvr = document.querySelector('#pricePsvr')
    var daysPsvr = document.querySelector('#daysPsvr')

    var days = rangePsvr.value
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
    pricePsvr.innerHTML = price
    daysPsvr.innerHTML = days + ' ' + word
}

rangePsvr.addEventListener("input", setPsvr);


// Range Projector Full HD

var rangeProjectorFullHd = document.querySelector('#rangeProjectorFullHd')
var setProjectorFullHd = function() {
    var priceProjectorFullHd = document.querySelector('#priceProjectorFullHd')
    var daysProjectorFullHd = document.querySelector('#daysProjectorFullHd')

    var days = rangeProjectorFullHd.value
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
    priceProjectorFullHd.innerHTML = price
    daysProjectorFullHd.innerHTML = days + ' ' + word
}

rangeProjectorFullHd.addEventListener("input", setProjectorFullHd);


// Range Projector Medium Quality

var rangeProjectorMedium = document.querySelector('#rangeProjectorMedium')
var setProjectorMedium = function() {
    var priceProjectorMedium = document.querySelector('#priceProjectorMedium')
    var daysProjectorMedium = document.querySelector('#daysProjectorMedium')

    var days = rangeProjectorMedium.value
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
    priceProjectorMedium.innerHTML = price
    daysProjectorMedium.innerHTML = days + ' ' + word
}

rangeProjectorMedium.addEventListener("input", setProjectorMedium);


// Range Projector Low Quality

var rangeProjectorLow = document.querySelector('#rangeProjectorLow')
var setProjectorLow = function() {
    var priceProjectorLow = document.querySelector('#priceProjectorLow')
    var daysProjectorLow = document.querySelector('#daysProjectorLow')

    var days = rangeProjectorLow.value
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
    priceProjectorLow.innerHTML = price
    daysProjectorLow.innerHTML = days + ' ' + word
}

rangeProjectorLow.addEventListener("input", setProjectorLow);


// Range Xbox One

var rangeXboxOne = document.querySelector('#rangeXboxOne')
var setXboxOne = function() {
    var priceXboxOne = document.querySelector('#priceXboxOne')
    var daysXboxOne = document.querySelector('#daysXboxOne')

    var days = rangeXboxOne.value
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
    priceXboxOne.innerHTML = price
    daysXboxOne.innerHTML = days + ' ' + word
}

rangeXboxOne.addEventListener("input", setXboxOne);


// Range Xbox 360

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




$('.scroll').on('click',function(e) {
	e.preventDefault();
	var offset = 0;
	var target = this.hash;
	if ($(this).data('offset') != undefined) offset = $(this).data('offset');
	$('html, body').stop().animate({
		'scrollTop': $(target).offset().top - offset
	}, 500, 'swing', function() {
		// window.location.hash = target;
	});
});