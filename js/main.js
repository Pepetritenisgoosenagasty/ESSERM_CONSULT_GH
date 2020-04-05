$(document).ready(function () {

  // Scroll

  

      // Smooth Scroll
      $('a').on('click', function(e) {
        if (this.hash !== '') {
          e.preventDefault();

          const hash  = this.hash;

          $('html, body').animate(
            {
              scrollTop: $(hash).offset().top
            },
            1500
          );
        }
      });


     //  active class
     $(document).on('click', 'ul li', function() {
       $(this).addClass('active').siblings().removeClass('active');
     });


    //  animate on scroll
    AOS.init();


      // Owl Carousel
      $('.client').owlCarousel({
        loop: true,
                margin: 10,
                autoplay: true,
                autoplaySpeed: 1000,
                responsive:{
                    0:{
                        items:1
                    },
                    600:{
                        items:2
                    },
                    1000:{
                        items:3
                    }
        }
    });


});

 $('.counter').countUp({
      'time': 2000,
      'delay': 10
    }); 

    // Nav page
    $('#nav').onePageNav({
      currentClass: 'active',
      changeHash: false,
      scrollSpeed: 750,
      scrollThreshold: 0.5,
      filter: '',
      easing: 'swing',
      begin: function() {
        //I get fired when the animation is starting
      },
      end: function() {
        //I get fired when the animation is ending
      },
      scrollChange: function($currentListItem) {
        //I get fired when you enter a section and I pass the list item of the section
      }
    });