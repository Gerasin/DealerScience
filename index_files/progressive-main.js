medQry = function () {
    if ($('.sniffer#mobile-snif').css('float') == 'left') {
        //console.log('mobile');
        return "mobile";
    }
    if ($('.sniffer#tablet-snif').css('float') == 'left') {
        //console.log('tablet');
        return "tablet";
    }
    if ($('.sniffer#desktop-snif').css('float') == 'left') {
        //console.log('desktop');
        return "desktop";
    }
};

var modalStatus = null;
var modalFormSource = "/Misc/Modal-Contact-Us";

$(document).on('opened', '#mapModal[data-reveal]', function () {
    if (modalStatus == null) {
        $('#modalContactForm').attr('src', modalFormSource, function () {
            modalStatus = "opened";
        });
        // set modal height to show whole form.
        $('#modalContactForm').on('load',function(){
            var cform = $(this).contents().find('.custom-content.cf');
            $(this).height(cform.height());
        });
    }
}).on('close', '#mapModal[data-reveal]', function () {
    $('#modalContactForm').attr('src', "", function () {
        modalStatus = null;
    });
});

function resizeModelModal() {
    var $types = $('#modelModal .content');

    // Loop through each vehicle type
    $types.each(function () {
        var $cars = $(this).children('.car-container');
        var newWidth = 305 * $cars.length;

        if ($(window).width() >= 1280) {
            $(this).width(newWidth);
        } else if ($(window).width() > 640 && $(window).width() < 1280) {
            if ($cars.length > 3) {
                $(this).css("min-width", "1280px");
            }
            $(this).width(newWidth);
            //console.log(newWidth);
        } else {
            $cars.width('100%');
            $(this).width('initial');
        }
    });
    $('.car-type').on('click', function (e) {
        $('.car-type').removeClass('active');
        $(e.currentTarget).addClass('active');
    });
}

$(function () {
    // Function for Model modal accordions < 640
    $('.car-type-header h3').on('click', function () {
        var tabMenuItem = $(this).text().toLowerCase().replace(/\s+/g, '');

        if ($(this).attr('class') == "active") {
            $(this).removeClass('active');
            $(this).parent().next('.content').removeClass('active');
            $('#' + tabMenuItem).removeClass('active');
        } else {
            $('.car-type-header h3').removeClass('active');
            $(this).addClass('active');
            $('#' + tabMenuItem + ' a').trigger('click');
        }
    });
    $('.car-type-header h3:not(.active)').on('click', function () {
        $('body, html').animate({
            scrollTop: 0
        }, 1000);
    });

    var modelBarDropIn = {
        // assign modal
        modelbar: $('#modelModal'),

        // assign nav link
        link: $('a[href*="Lexus-Model-Showcase"]'),

        // function to actually open the model bar
        openModelBar: function () {
            $(modelBarDropIn.modelbar).foundation('reveal', 'open');
        },

        // clicking on the specified nav item triggers the model bar modal
        assignClick: function () {
            $(modelBarDropIn.link).on('click', function (e) {
                if ($(this).parent().hasClass('NewModels')) {
                    if ($(window).width() > 940) {
                        e.stopPropagation();
                        e.preventDefault();
                        modelBarDropIn.openModelBar();
                    }
                } else {
                    e.stopPropagation();
                    e.preventDefault();
                    modelBarDropIn.openModelBar();
                }
            });
        },

        // on touch, ignore the touch event and trigger the click event (above)
        assignTouch: function () {
            $(modelBarDropIn.link).on('touchend', function (e) {
                e.preventDefault();
                e.target.click();
            });
        },

        // execute event assignments.
        setup: function () {
            modelBarDropIn.assignClick();
            modelBarDropIn.assignTouch();
        }
    };

    modelBarDropIn.setup();
    
    $(window).on('load resize', resizeModelModal());
});