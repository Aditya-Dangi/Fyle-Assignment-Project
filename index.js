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



$('button').not('.nav-toggle').on('click', function() {
  $('#popupForm').addClass('active');
});

$('#closeBtn').on('click', function() {
  $('#popupForm').removeClass('active');
});

$('#popupForm').on('click', function(e) {
  if (e.target === this) {
    $(this).removeClass('active');
  }
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

// Sticky nav background + mobile toggle
$(document).ready(function() {
  const $nav = $('#siteNav');
  const $navToggle = $('#navToggle');
  const $navLinks = $('#navLinks');

  function updateNavBackground() {
    $nav.toggleClass('scrolled', $(window).scrollTop() > 30);
  }
  updateNavBackground();
  $(window).on('scroll', updateNavBackground);

  $navToggle.on('click', function() {
    const isOpen = $navLinks.toggleClass('open').hasClass('open');
    $navToggle.toggleClass('open', isOpen);
    $navToggle.attr('aria-expanded', isOpen);
  });

  $navLinks.find('a').on('click', function() {
    $navLinks.removeClass('open');
    $navToggle.removeClass('open').attr('aria-expanded', false);
  });
});

// Scroll-reveal animations
(function() {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const targets = document.querySelectorAll('[data-reveal], [data-reveal-group]');

  if (reduceMotion || !('IntersectionObserver' in window)) {
    targets.forEach(function(el) { el.classList.add('is-visible'); });
    return;
  }

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -60px 0px' });

  targets.forEach(function(el) { observer.observe(el); });
})();
