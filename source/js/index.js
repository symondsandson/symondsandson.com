$(function() {
  $(document).ready(function() {
    var scrollSpeed = 1000;
    $('#navbar').onePageNav({
      filter: ':not(.external)',
      scrollSpeed: scrollSpeed,
      begin: function() {
        //Hack so you can click other menu items after the initial click
        $('body').append('<div id="device-dummy" style="height: 1px;"></div>');
      },
      end: function() {
        $('#device-dummy').remove();
      },
      scrollChange: function($currentListItem) {
        $($currentListItem).addClass('current');
      },
      changeHash: false
    });

    $(window).scroll(function() {
      if ($('#navbar').offset().top != 0) {
        $('#navbar').addClass('moving')
      } else {
        $('#navbar').removeClass('moving')
      }
    })

    $("#contact_form").validate();

    $('#testimonials').slick({
      dots: true,
      adaptiveHeight: true
    });
  });
});
