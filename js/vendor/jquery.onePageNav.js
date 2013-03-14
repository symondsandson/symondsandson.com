/*
 * jQuery One Page Nav Plugin
 * http://github.com/davist11/jQuery-One-Page-Nav
 *
 * Copyright (c) 2010 Trevor Davis (http://trevordavis.net)
 * Dual licensed under the MIT and GPL licenses.
 * Uses the same license as jQuery, see:
 * http://jquery.org/license
 *
 * @version 2.2
 *
 * Example usage:
 * $('#nav').onePageNav({
 *   currentClass: 'current',
 *   changeHash: false,
 *   scrollSpeed: 750
 * });
 */
(function(e,t,n,r){var i=function(r,i){this.elem=r,this.$elem=e(r),this.options=i,this.metadata=this.$elem.data("plugin-options"),this.$nav=this.$elem.find("a"),this.$win=e(t),this.sections={},this.didScroll=!1,this.$doc=e(n),this.docHeight=this.$doc.height()};i.prototype={defaults:{currentClass:"current",changeHash:!1,easing:"swing",filter:"",scrollSpeed:750,scrollOffset:0,scrollThreshold:.5,begin:!1,end:!1,scrollChange:!1},init:function(){var t=this;return t.config=e.extend({},t.defaults,t.options,t.metadata),t.config.filter!==""&&(t.$nav=t.$nav.filter(t.config.filter)),t.$nav.on("click.onePageNav",e.proxy(t.handleClick,t)),t.getPositions(),t.bindInterval(),t.$win.on("resize.onePageNav",e.proxy(t.getPositions,t)),this},adjustNav:function(e,t){e.$elem.find("."+e.config.currentClass).removeClass(e.config.currentClass),t.addClass(e.config.currentClass)},bindInterval:function(){var e=this,t;e.$win.on("scroll.onePageNav",function(){e.didScroll=!0}),e.t=setInterval(function(){t=e.$doc.height(),e.didScroll&&(e.didScroll=!1,e.scrollChange()),t!==e.docHeight&&(e.docHeight=t,e.getPositions())},250)},getHash:function(e){return e.attr("href").split("#")[1]},getPositions:function(){var t=this,n,r,i;t.$nav.each(function(){n=t.getHash(e(this)),i=e("#"+n),i.length&&(r=i.offset().top,t.sections[n]=Math.round(r)-t.config.scrollOffset)})},getSection:function(e){var t=null,n=Math.round(this.$win.height()*this.config.scrollThreshold);for(var r in this.sections)this.sections[r]-n<e&&(t=r);return t},handleClick:function(n){var r=this,i=e(n.currentTarget),s=i.parent(),o="#"+r.getHash(i);s.hasClass(r.config.currentClass)||(r.config.begin&&r.config.begin(),r.adjustNav(r,s),r.unbindInterval(),e.scrollTo(o,r.config.scrollSpeed,{axis:"y",easing:r.config.easing,offset:{top:-r.config.scrollOffset},onAfter:function(){r.config.changeHash&&(t.location.hash=o),r.bindInterval(),r.config.end&&r.config.end()}})),n.preventDefault()},scrollChange:function(){var e=this.$win.scrollTop(),t=this.getSection(e),n;t!==null&&(n=this.$elem.find('a[href$="#'+t+'"]').parent(),n.hasClass(this.config.currentClass)||(this.adjustNav(this,n),this.config.scrollChange&&this.config.scrollChange(n)))},unbindInterval:function(){clearInterval(this.t),this.$win.unbind("scroll.onePageNav")}},i.defaults=i.prototype.defaults,e.fn.onePageNav=function(e){return this.each(function(){(new i(this,e)).init()})}})(jQuery,window,document);