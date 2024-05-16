var splide = new Splide( '.splide', {
    type   : 'loop',
    perPage: 4,
    perMove: 1,
    breakpoints: {
        1300: {
          perPage: 3
        },
        991: {
          perPage: 2
        },
        768: {
            perPage: 1
        }
    },
  });


  splide.mount();
 