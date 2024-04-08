
$(document).ready(function () {
    $("#testimonial-slider1").owlCarousel({
      items: 1,
      loop: true,
      autoplay: true,
      dots: true,
      responsive: {
        0: {
          items: 1 // Show one item on small screens
        },
        600: {
          items: 2 // Show two items on screens 600px and larger
        },
        1000: {
          items: 3 // Show three items on screens 1000px and larger
        }
      }
    });
  });

$(document).ready(function () {
    $("#testimonial-slider2").owlCarousel({
      items: 1,
      loop: true,
      autoplay: true,
      dots: false,
      responsive: {
        0: {
          items: 1 // Show one item on small screens
        },
        600: {
          items: 2 // Show two items on screens 600px and larger
        },
        1000: {
          items: 5 // Show three items on screens 1000px and larger
        }
      }
    });
  });


  
$(document).ready(function () {
  $("#testimonial-slider32").owlCarousel({
    items: 3,
    pagination: true,
    autoplay: true,
    autoplayTimeout: 2000,
    dots: true,
    loop: true,
    responsive: {
      0: {
        items: 1 // Show one item on small screens
      },
      600: {
        items: 2 // Show two items on screens 600px and larger
      },
      1000: {
        items: 3 // Show three items on screens 1000px and larger
      }
    }
  });
});




