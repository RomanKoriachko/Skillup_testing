$(document).ready(function () {
  $(".slider").slick({
    arrows: false,
    infinite: true,
    dots: false,
    variableWidth: true,
    slidesToShow: 3,
    // slidesToScroll: 3,
    centerMode: true,
    centerPadding: "60px",
    responsive: [
      {
        breakpoint: 576,
        settings: {
          centerMode: false,
        },
      },
    ],
  });
});
