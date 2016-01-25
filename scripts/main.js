$(document).ready( function() {

	// Logo
	var $logo 	= $('#logo');
	 if (location.href.indexOf("#") != -1) {
        if(location.href.substr(location.href.indexOf("#"))!='#about'){
        	$logo.show();
        }
    }
    
	// Show logo 
	$('#tab-container .tab a').click(function() {
	  $logo.slideDown('slow');
	});
	// Hide logo
	$('#tab-about').click(function() {
	  $logo.slideUp('slow');
	});
    
    //show database skills by default
    $('#tab-skills').click(function() {
        $('.skillnav-tabs li.active').removeClass('active');
        $('#dbli').addClass('active');
        $('#database').show();
    });
    
    $('.skillnav-tabs').on('click', 'li', function(event) {
        $('.skillnav-tabs li.active').removeClass('active');
        $(this).addClass('active');
        if(event.currentTarget.id != 'dbli') {
            $('#database').hide();
        } else {
             $('#database').show();
        }
    });
    
    	// Easy Pie chart 
	//*^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^*/
    //Initialize Bar color
	var barChangeColor = "skyblue";
	var trackChangeColor = "#eeeeee";
	var initPieChart = function() {    
		$('.percentage').easyPieChart({
			barColor: barChangeColor,
			trackColor: trackChangeColor,
			scaleColor: false,
			lineCap: 'butt',
			lineWidth: 25,
			animate: 1000,
			size:130
		});
	}

	initPieChart();
    
    // Education Accordion
    	function close_accordion_section() {
		$('.accordion .accordion-section-title').removeClass('active');
		$('.accordion .accordion-section-content').slideUp(300).removeClass('open');
	}

	$('.accordion-section-title').click(function(e) {
		// Grab current anchor value
		var currentAttrValue = $(this).attr('href');

		if($(e.target).is('.active')) {
			close_accordion_section();
		}else {
			close_accordion_section();

			// Add active class to section title
			$(this).addClass('active');
			// Open up the hidden content panel
			$('.accordion ' + currentAttrValue).slideDown(300).addClass('open'); 
		}

		e.preventDefault();
	});
    
    
/*----------------------------------------------------*/
/*	Modal Popup
------------------------------------------------------*/

    $('.item-wrap a').magnificPopup({

       type:'inline',
       fixedContentPos: false,
       removalDelay: 200,
       showCloseBtn: false,
       mainClass: 'mfp-fade'

    });

    $(document).on('click', '.popup-modal-dismiss', function (e) {
        //dismiss the popup by clicking outside the window
    		e.preventDefault();
    		$.magnificPopup.close();
    });

    
function animMeter(){
    $(".meter > span").each(function() {
                $(this)
                    .data("origWidth", $(this).width())
                    .width(0)
                    .animate({
                        width: $(this).data("origWidth")
                    }, 1200);
            });
}
animMeter();

      $('#tab-container').easytabs({
        animate			: true,
        updateHash		: true,
        transitionIn	: 'slideDown',
        transitionOut	: 'slideUp',
        animationSpeed	: 600,
        tabActiveClass	: 'active'}).bind('easytabs:midTransition', function(event, $clicked, $targetPanel){
            if($targetPanel.selector=='#resume'){
                    animMeter();
            }
        });
    
    
    
    
    
    }); //end document ready

