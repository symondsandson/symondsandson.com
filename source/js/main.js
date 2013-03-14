$('#navbar').onePageNav({
  filter: ':not(.external)',
  begin: function() {
    //Hack so you can click other menu items after the initial click
    $('body').append('<div id="device-dummy" style="height: 1px;"></div>');
  },
  end: function() {
    $('#device-dummy').remove();
  }
})

$(window).scroll(function() {
  if ($('#navbar').offset().top != 0) {
    $('#navbar').addClass('moving')
  } else {
    $('#navbar').removeClass('moving')
  }
})

$("#contact").validate();
$('#tailored').tipsy({gravity: 'sw', fade: true});
$('#tradition').tipsy({gravity: 's', fade: true});
$('#technologies').tipsy({gravity: 'se', fade: true});

