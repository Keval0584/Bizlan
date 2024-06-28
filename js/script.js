$(document).ready(function(){

    $(window).scroll(function(){
        var sticky = $('.sticky'),
            scroll = $(window).scrollTop();
      
        if (scroll >= 300) sticky.addClass('fixed');
        else sticky.removeClass('fixed');
    });

    $('.header_menu li > a').click(function() {
        $('.header_menu li > a').removeClass('active');
        $($(this).addClass('active'));
    });

    $('#s1').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        items:1,
        // mouseDrag:false,
        dots:false,
        navText:['<img src="images/asset 3.png">','<img src="images/asset 4.png">'],
        smartSpeed:800,
    });

    var owl = $('#s1');
    owl.owlCarousel();
    // Listen to owl events:
    owl.on('changed.owl.carousel', function(event){
        new WOW().init();
    })

    wow = new WOW({
        boxClass:     'wow',      // default
        animateClass: 'animated', // default
        offset:       0,          // default
        mobile:       true,       // default
        live:         true        // default
    })
    wow.init();

    $('#s2').owlCarousel({
        loop:true,
        // margin:10,
        nav:true,
        dots:false,
        items:1,
        navText:['<i class="fa-solid fa-angle-left"></i>','<i class="fa-solid fa-angle-right"></i>']
    })

    // init Isotope
    var $grid = $('.grid').isotope({
        itemSelector: '.grid-item',
        percentPosition: true,
        masonry: {
            // use outer width of grid-sizer for columnWidth
            columnWidth: '.grid-sizer'
        }
    });
    // filter items on button click
    $('.filter-button-group').on( 'click', 'button', function() {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue });
        $('button').removeClass('active');
        $(this).addClass('active');
    });

    $("a.group").fancybox({
		'transitionIn'	:	'elastic',
		'transitionOut'	:	'elastic',
		'speedIn'		:	600, 
		'speedOut'		:	200, 
		'overlayShow'	:	false
	});

    $('#s3').owlCarousel({
        loop:true,
        margin:30,
        nav:true,
        items:4,
    })

    $('#s4').owlCarousel({
        loop:true,
        margin:0,
        nav:false,
        items:3,
        dotsEach:1,
        smartSpeed:1000,
        center:true,
    })

    $('#s5').owlCarousel({
        loop:true,
        margin:0,
        nav:false,
        items:6,
        dots:false,
    })

});