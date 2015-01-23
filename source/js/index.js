//= require idangerous.swiper.min
//= require idangerous.swiper.3dflow.min


$(function() {
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

  var mySwiper = new Swiper('#rolodex',{
    slidesPerView:3,
    loop:true,
    //Enable 3D Flow
    tdFlow: {
      rotate : 10,
      stretch :-50,
      depth: 400,
      modifier : 1,
      shadows:true
    }
  });

});
