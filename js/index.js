$(function(){$(document).ready(function(){var e=1e3;$("#navbar").onePageNav({filter:":not(.external)",scrollSpeed:e,begin:function(){$("body").append('<div id="device-dummy" style="height: 1px;"></div>')},end:function(){$("#device-dummy").remove()},changeHash:!1}),$(".contact_button").click(function(){$("html, body").animate({scrollTop:$("#have_a_project").offset().top},e)}),$("#getstarted").waypoint({handler:function(e){"down"===e&&($("#started-sidebar").addClass("show"),$("#started-sidebar").removeClass("fade"))},offset:50}),$("#blog").waypoint({handler:function(e){"down"===e?($("#started-sidebar").addClass("fade"),$("#started-sidebar").removeClass("show")):"up"===e&&($("#started-sidebar").addClass("show"),$("#started-sidebar").removeClass("fade"))},offset:20}),$("#who_we_are").waypoint({handler:function(e){"up"===e&&($("#started-sidebar").addClass("fade"),$("#started-sidebar").removeClass("show"))},offset:"bottom-in-view"}),$("#contact_form").validate(),$("#tailored").tipsy({gravity:"sw",fade:!0}),$("#tradition").tipsy({gravity:"s",fade:!0}),$("#technologies").tipsy({gravity:"se",fade:!0}),$("#testimonials").slick({dots:!0,adaptiveHeight:!0})})});