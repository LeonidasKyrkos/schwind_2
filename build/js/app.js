!function t(i,e,n){function r(o,a){if(!e[o]){if(!i[o]){var h="function"==typeof require&&require;if(!a&&h)return h(o,!0);if(s)return s(o,!0);throw new Error("Cannot find module '"+o+"'")}var c=e[o]={exports:{}};i[o][0].call(c.exports,function(t){var e=i[o][1][t];return r(e?e:t)},c,c.exports,t,i,e,n)}return e[o].exports}for(var s="function"==typeof require&&require,o=0;o<n.length;o++)r(n[o]);return r}({1:[function(){"use strict";!function(t,i,e){t.fn.backstretch=function(n,r){return(n===e||0===n.length)&&t.error("No images were supplied for Backstretch"),0===t(i).scrollTop()&&i.scrollTo(0,0),this.each(function(){var i=t(this),e=i.data("backstretch");if(e){if("string"==typeof n&&"function"==typeof e[n])return void e[n](r);r=t.extend(e.options,r),e.destroy(!0)}e=new s(this,n,r),i.data("backstretch",e)})},t.backstretch=function(i,e){return t("body").backstretch(i,e).data("backstretch")},t.expr[":"].backstretch=function(i){return t(i).data("backstretch")!==e},t.fn.backstretch.defaults={centeredX:!0,centeredY:!0,duration:5e3,fade:0};var n={left:0,top:0,overflow:"hidden",margin:0,padding:0,height:"100%",width:"100%",zIndex:-999999},r={position:"absolute",display:"none",margin:0,padding:0,border:"none",width:"auto",height:"auto",maxHeight:"none",maxWidth:"none",zIndex:-999999},s=function(e,r,s){this.options=t.extend({},t.fn.backstretch.defaults,s||{}),this.images=t.isArray(r)?r:[r],t.each(this.images,function(){t("<img />")[0].src=this}),this.isBody=e===document.body,this.$container=t(e),this.$root=this.isBody?t(o?i:document):this.$container,e=this.$container.children(".backstretch").first(),this.$wrap=e.length?e:t('<div class="backstretch"></div>').css(n).appendTo(this.$container),this.isBody||(e=this.$container.css("position"),r=this.$container.css("zIndex"),this.$container.css({position:"static"===e?"relative":e,zIndex:"auto"===r?0:r,background:"none"}),this.$wrap.css({zIndex:-999998})),this.$wrap.css({position:this.isBody&&o?"fixed":"absolute"}),this.index=0,this.show(this.index),t(i).on("resize.backstretch",t.proxy(this.resize,this)).on("orientationchange.backstretch",t.proxy(function(){this.isBody&&0===i.pageYOffset&&(i.scrollTo(0,1),this.resize())},this))};s.prototype={resize:function(){try{var t,e={left:0,top:0},n=this.isBody?this.$root.width():this.$root.innerWidth(),r=n,s=this.isBody?i.innerHeight?i.innerHeight:this.$root.height():this.$root.innerHeight(),o=r/this.$img.data("ratio");o>=s?(t=(o-s)/2,this.options.centeredY&&(e.top="-"+t+"px")):(o=s,r=o*this.$img.data("ratio"),t=(r-n)/2,this.options.centeredX&&(e.left="-"+t+"px")),this.$wrap.css({width:n,height:s}).find("img:not(.deleteable)").css({width:r,height:o}).css(e)}catch(a){}return this},show:function(i){if(!(Math.abs(i)>this.images.length-1)){var e=this,n=e.$wrap.find("img").addClass("deleteable"),s={relatedTarget:e.$container[0]};return e.$container.trigger(t.Event("backstretch.before",s),[e,i]),this.index=i,clearInterval(e.interval),e.$img=t("<img />").css(r).bind("load",function(r){var o=this.width||t(r.target).width();r=this.height||t(r.target).height(),t(this).data("ratio",o/r),t(this).fadeIn(e.options.speed||e.options.fade,function(){n.remove(),e.paused||e.cycle(),t(["after","show"]).each(function(){e.$container.trigger(t.Event("backstretch."+this,s),[e,i])})}),e.resize()}).appendTo(e.$wrap),e.$img.attr("src",e.images[i]),e}},next:function(){return this.show(this.index<this.images.length-1?this.index+1:0)},prev:function(){return this.show(0===this.index?this.images.length-1:this.index-1)},pause:function(){return this.paused=!0,this},resume:function(){return this.paused=!1,this.next(),this},cycle:function(){return 1<this.images.length&&(clearInterval(this.interval),this.interval=setInterval(t.proxy(function(){this.paused||this.next()},this),this.options.duration)),this},destroy:function(e){t(i).off("resize.backstretch orientationchange.backstretch"),clearInterval(this.interval),e||this.$wrap.remove(),this.$container.removeData("backstretch")}};var o,a=navigator.userAgent,h=navigator.platform,c=a.match(/AppleWebKit\/([0-9]+)/),c=!!c&&c[1],d=a.match(/Fennec\/([0-9]+)/),d=!!d&&d[1],u=a.match(/Opera Mobi\/([0-9]+)/),f=!!u&&u[1],p=a.match(/MSIE ([0-9]+)/),p=!!p&&p[1];o=!((-1<h.indexOf("iPhone")||-1<h.indexOf("iPad")||-1<h.indexOf("iPod"))&&c&&534>c||i.operamini&&"[object OperaMini]"==={}.toString.call(i.operamini)||u&&7458>f||-1<a.indexOf("Android")&&c&&533>c||d&&6>d||"palmGetResource"in i&&c&&534>c||-1<a.indexOf("MeeGo")&&-1<a.indexOf("NokiaBrowser/8.5.0")||p&&6>=p)}(jQuery,window),$("body").backstretch("img/optimised/winter-mountain_473.jpg")},{}]},{},[1]);