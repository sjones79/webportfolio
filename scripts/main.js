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

