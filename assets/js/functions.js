/* top */
$(function(){
  // main mv
  $('.main-mv-slide').slick({
    infinite: true,
    arrows: false,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    pauseOnHover: false,
    autoplay: true
  });

  // pick up section
  $('.pickup-slide').slick({
    infinite: true,
    dots: true,
    centerMode: true,
    variableWidth: true,
    slidesToScroll: 1,
    slidesToShow: 2
  });
});

/* common */
$(function(){
  // link anchor
  $('a[href^="#"]').on('click', function() {
    const href = $(this).attr('href');
    const $target = $(href !== '#' ? href : 'html');
    if($target.length) {
      let position = $target.offset().top;
      // ヘッダー追従の場合は、ヘッダー分調整する
      position = $target.offset().top - $('.header-inr').outerHeight();
      $('body,html').animate({scrollTop:position}, 400, 'swing');
      return false;
    }
  });
});