$(document).ready(() => {
    $('#recipeCardControls').carousel();

    $(".carousel-control-prev").click(() => {
      $("#recipeCardControls").carousel("prev");
    });

    $(".carousel-control-next").click(() => {
      $("#recipeCardControls").carousel("next");
    });

    $('.navbar-toggler').click(() => {
      $('.collapse').collapse("toggle");
    });

  });