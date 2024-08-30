$(document).ready(function(){
  $("img").imagesLoaded(function () {
    $(".thumnail-right-box img").on("click", function () {
      var img_src = $(this).attr("src");
      $(".thumnail-left-box img").attr("src", img_src);
    });
  });
});

