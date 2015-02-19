$(function() {
  $(document).ready(function() {
    $('#navbar').onePageNav({
      filter: ':not(.external)',
      begin: function() {
        //Hack so you can click other menu items after the initial click
        $('body').append('<div id="device-dummy" style="height: 1px;"></div>');
      },
      end: function() {
        $('#device-dummy').remove();
      },
      changeHash: false
    });

    $("#contact_form").validate();
    $('#tailored').tipsy({gravity: 'sw', fade: true});
    $('#tradition').tipsy({gravity: 's', fade: true});
    $('#technologies').tipsy({gravity: 'se', fade: true});

    $('#rolodex').slick({
      dots: true
    });
  });
});
