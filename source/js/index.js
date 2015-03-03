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
      changeHash: false
    });

    $(".contact_button").click(function() {
      $('html, body').animate({
          scrollTop: $("#have_a_project").offset().top
      }, scrollSpeed);
    });

    $("#contact_form").validate();
    $('#tailored').tipsy({gravity: 'sw', fade: true});
    $('#tradition').tipsy({gravity: 's', fade: true});
    $('#technologies').tipsy({gravity: 'se', fade: true});

    $('#testimonials').slick({
      dots: true,
      adaptiveHeight: true
    });
  });
});
