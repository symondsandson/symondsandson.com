$("#navbar").onePageNav({filter:":not(.external)",begin:function(){$("body").append('<div id="device-dummy" style="height: 1px;"></div>')},end:function(){$("#device-dummy").remove()}}),$(window).scroll(function(){$("#navbar").offset().top!=0?$("#navbar").addClass("moving"):$("#navbar").removeClass("moving")}),$("#contact").validate(),$("#tailored").tipsy({gravity:"sw",fade:!0}),$("#tradition").tipsy({gravity:"s",fade:!0}),$("#technologies").tipsy({gravity:"se",fade:!0});