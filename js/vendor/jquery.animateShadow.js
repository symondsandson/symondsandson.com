/**!
 * @preserve Shadow animation 20130124
 * http://www.bitstorm.org/jquery/shadow-animation/
 * Copyright 2011, 2013 Edwin Martin <edwin@bitstorm.org>
 * Contributors: Mark Carver, Xavier Lepretre
 * Released under the MIT and GPL licenses.
 */
jQuery(function(e,r){function s(){var r=e("script:first"),s=r.css("color"),o=!1;if(/^rgba/.test(s))o=!0;else try{o=s!=r.css("color","rgba(0, 0, 0, 0.5)").css("color"),r.css("color",s)}catch(t){}return o}function o(r,s,o){var t=[];if(r.inset&&t.push("inset"),"undefined"!=typeof s.left&&t.push(parseInt(r.left+o*(s.left-r.left),10)+"px "+parseInt(r.top+o*(s.top-r.top),10)+"px"),"undefined"!=typeof s.blur&&t.push(parseInt(r.blur+o*(s.blur-r.blur),10)+"px"),"undefined"!=typeof s.spread&&t.push(parseInt(r.spread+o*(s.spread-r.spread),10)+"px"),"undefined"!=typeof s.color){var p="rgb"+(e.support.rgba?"a":"")+"("+parseInt(r.color[0]+o*(s.color[0]-r.color[0]),10)+","+parseInt(r.color[1]+o*(s.color[1]-r.color[1]),10)+","+parseInt(r.color[2]+o*(s.color[2]-r.color[2]),10);e.support.rgba&&(p+=","+parseFloat(r.color[3]+o*(s.color[3]-r.color[3]))),p+=")",t.push(p)}return t.join(" ")}function t(e){var r,s,o={};return(r=/#([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})/.exec(e))?s=[parseInt(r[1],16),parseInt(r[2],16),parseInt(r[3],16),1]:(r=/#([0-9a-fA-F])([0-9a-fA-F])([0-9a-fA-F])/.exec(e))?s=[17*parseInt(r[1],16),17*parseInt(r[2],16),17*parseInt(r[3],16),1]:(r=/rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(e))?s=[parseInt(r[1],10),parseInt(r[2],10),parseInt(r[3],10),1]:(r=/rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9\.]*)\s*\)/.exec(e))&&(s=[parseInt(r[1],10),parseInt(r[2],10),parseInt(r[3],10),parseFloat(r[4])]),o=(r=/(-?[0-9]+)(?:px)?\s+(-?[0-9]+)(?:px)?(?:\s+(-?[0-9]+)(?:px)?)?(?:\s+(-?[0-9]+)(?:px)?)?/.exec(e))?{left:parseInt(r[1],10),top:parseInt(r[2],10),blur:r[3]?parseInt(r[3],10):0,spread:r[4]?parseInt(r[4],10):0}:{left:0,top:0,blur:0,spread:0},o.inset=/inset/.test(e),o.color=s,o}e.extend(!0,e,{support:{rgba:s()}});var p,n=e("html").prop("style");e.each(["boxShadow","MozBoxShadow","WebkitBoxShadow"],function(e,r){var s=n[r];return"undefined"!=typeof s?(p=r,!1):void 0}),p&&(e.Tween.propHooks.boxShadow={get:function(r){return e(r.elem).css(p)},set:function(s){var n=s.elem.style,a=t(e(s.elem).get(0).style[p]||e(s.elem).css(p)),c=e.extend({},a,t(s.end));a.color==r&&(a.color=c.color||[0,0,0]),s.run=function(e){n[p]=o(a,c,e)}}})});