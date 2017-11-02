$( document ).ready(function() {

  $('nav#menu').mmenu();

  $("#main-portfolio-carousel").owlCarousel({
    items: 3,
    nav: true,
    margin: 30,
    dots: false,
    loop: true,
    navText: ['<svg width="100%" height="100%" viewBox="0 0 11 20"><path style="fill:none;stroke-width: 1px;" d="M9.554,1.001l-8.607,8.607l8.607,8.606"/></svg>', '<svg width="100%" height="100%" viewBox="0 0 11 20" version="1.1"><path style="fill:none;stroke-width: 1px;" d="M1.054,18.214l8.606,-8.606l-8.606,-8.607"/></svg>'],
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
    dots: false,
    margin: 30,
    navText: ['<svg width="100%" height="100%" viewBox="0 0 11 20"><path style="fill:none;stroke-width: 1px;" d="M9.554,1.001l-8.607,8.607l8.607,8.606"/></svg>', '<svg width="100%" height="100%" viewBox="0 0 11 20" version="1.1"><path style="fill:none;stroke-width: 1px;" d="M1.054,18.214l8.606,-8.606l-8.606,-8.607"/></svg>'],
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

  // Яндекс карты в контактах
  var myMap;

  ymaps.ready(function () {
      myMap = new ymaps.Map("contactsMap", {
          center: [51.758862, 36.186805],
          zoom: 17
      });
      myGeoObject = new ymaps.GeoObject({
          geometry: {
              type: "Point",// тип геометрии - точка
              coordinates: [51.758862, 36.187805] // координаты точки
         }
      });
      myMap.geoObjects.add(myGeoObject); // Размещение геообъекта на карте.
  });

});
