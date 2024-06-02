$(document).ready(function() {
  var swiper = new Swiper(".slide-content", {
    slidesPerView: 4,
    spaceBetween: 25,
    loop: true,
    centerSlides: true,
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 15,
      },
      425: {
        slidesPerView: 1,
        spaceBetween: 15,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 25,
      },
      1600: {
        slidesPerView: 4,
        spaceBetween: 30,
      }
    }
  });
});



$('button').on('click', function() {
  $('#popupForm').css('display', 'flex');
});

$('#closeBtn').on('click', function() {
  $('#popupForm').css('display', 'none');
});

$(document).ready(function() {
  const templates = $('.container-3-right .template');
  const images = $('.container-3-left .template-img');

  templates.on('click', function() {
    images.css('display', 'none');
    const index = parseInt($(this).attr('data-image')) - 1;
    if (images[index]) {
      $(images[index]).css('display', 'block');
    }
  });
});