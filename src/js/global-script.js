$( document ).ready(function() {

  $("#main-portfolio-carousel").owlCarousel({
    items: 3,
    nav: true,
    margin: 30,
    loop: true,
    // center: true,
    responsive : {
      0 : {
        items: 1,
        nav: true,
        loop: true,
        center: true,
      },
      480 : {
        items: 3,
      },
      768 : {
        items: 3,
      },
      992 : {
        items: 3,
      },
      1200 : {
        items: 4,
      },
      1800 : {
        items: 4,
      }
    }
  });

  $("#page-portfolio-carousel").owlCarousel({
    items: 3,
    nav: true,
    margin: 30,
    loop: true,
    // center: true,
    responsive : {
      0 : {
        items: 1,
        nav: true,
        loop: true,
        center: true,
      },
      480 : {
        items: 3,
      },
      768 : {
        items: 3,
      },
      992 : {
        items: 3,
      },
      1200 : {
        items: 3,
      },
      1800 : {
        items: 3,
      }
    }
  });

});
