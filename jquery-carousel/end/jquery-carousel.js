(function () {
  "use strict";

  var $carousel = $(".carousel");
  var $carouselInner = $carousel.find(".carousel-inner");
  var $imgs = $carouselInner.children();

  //inner with
  var carouselInnerWidth = _.reduce($imgs, function (memo, img) {
    return memo + $(img).width();
  }, 0);
  $carouselInner.width(carouselInnerWidth);

  function activeImgAtIndex(index) {
    var imageWidth = $imgs.eq(0).width();
    var marginLeft = -(index * imageWidth);

//  Using css animations
    $carouselInner.css({"margin-left" : marginLeft + "px"});

//   Using jquery animations
//
//   $carouselInner.animate({
//     "margin-left": marginLeft
//   }, 300);

  }

  var currentIndex = 0;
  var totalImages = $imgs.length;

  setInterval(function () {
    currentIndex = (currentIndex + 1) % totalImages;
    activeImgAtIndex(currentIndex);
  }, 3000);

}());