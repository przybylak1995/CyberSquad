const swiper = new Swiper('.swiper-container', {
    slidesPerView: 4, // Display 4 images at a time
    spaceBetween: 10, // Space between images
    loop: true, // Enable loop
    autoplay: {
      delay: 3000, // Auto slide every 3 seconds
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      // Responsive breakpoints
      1024: {
        slidesPerView: 4, // For larger screens, display 4 slides
      },
      768: {
        slidesPerView: 2, // For medium screens, display 2 slides
      },
      480: {
        slidesPerView: 1, // For small screens, display 1 slide
      },
    },
  });