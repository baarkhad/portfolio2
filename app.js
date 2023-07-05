Fancybox.bind('[data-fancybox="gallery"]', {
    dragToClose: false,

    Toolbar: {
      display: {
        left: ['close'],
        middle: ["prev", "infobar", "next"],
        right: [
        "slideshow",
        "thumb",
        "zoomIn",
        "zoomOut",
        "iterateZoom",
        "toggle1to1",
        "rotateCCW",
        "rotateCW",
        "flipX",
        "flipY",
        "fullscreen",
    ],
      },
    },

    contentClick: "iterateZoom",
    Images: {
      Panzoom: {
        maxScale: 2,
      },
    },
  
    Thumbs: {
      type: 'modern',
    },
  
    Carousel: {
      transition: false,
      friction: 0,
    },
  
    on: {
      'Carousel.ready Carousel.change': (fancybox) => {
        fancybox.container.style.setProperty(
          '--bg-image',
          `url("${fancybox.getSlide().thumbSrc}")`
        );
      },
    },
});