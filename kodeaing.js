(function(e,t,n){var r=function(){for(var e=/audio(.min)?.js.*/,t=document.getElementsByTagName("script"),n=0,r=t.length;n<r;n++){var i=t[n].getAttribute("src");if(e.test(i))return i.replace(e,"")}}();n[e]={instanceCount:0,instances:{},flashSource:'<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" id="$1" width="1" height="1" name="$1" style="position: absolute; left: -1px;"> <param name="movie" value="$2?playerInstance='+e+'.instances[\'$1\']&datetime=$3"> <param name="allowscriptaccess" value="always"> <embed name="$1" src="$2?playerInstance='+e+'.instances[\'$1\']&datetime=$3" width="1" height="1" allowscriptaccess="always"> </object>',settings:{autoplay:false,loop:false,preload:true,imageLocation:r+"player-graphics.gif",swfLocation:r+"audiojs.swf",useFlash:function(){var e=document.createElement("audio");return!(e.canPlayType&&e.canPlayType("audio/mpeg;").replace(/no/,""))}(),hasFlash:function(){if(navigator.plugins&&navigator.plugins.length&&navigator.plugins["Shockwave Flash"])return true;else if(navigator.mimeTypes&&navigator.mimeTypes.length){var e=navigator.mimeTypes["application/x-shockwave-flash"];return e&&e.enabledPlugin}else try{new ActiveXObject("ShockwaveFlash.ShockwaveFlash");return true}catch(t){}return false}(),createPlayer:{markup:'<div class="play-pause"> <p class="play"></p> <p class="pause"></p> <p class="loading"></p> <p class="error"></p></div> <div class="scrubber"> <div class="progress"></div> <div class="loaded"></div></div> <div class="time"> <em class="played">00:00</em>/<strong class="duration">00:00</strong> </div> <div class="error-message"></div>',playPauseClass:"play-pause",scrubberClass:"scrubber",progressClass:"progress",loaderClass:"loaded",timeClass:"time",durationClass:"duration",playedClass:"played",errorMessageClass:"error-message",playingClass:"playing",loadingClass:"loading",errorClass:"error"},css:'.audiojs audio { position: absolute; left: -1px; } .audiojs {max-width: 460px; height: 36px; background: #21476d;overflow: hidden;font-family: monospace;font-size: 12px;background-image: -webkit-gradient(linear, left top, left bottom, color-stop(0, #21476d), color-stop(0.5, #21476d), color-stop(0.51, #21476d), color-stop(1, #17293b));background-image: -moz-linear-gradient(center top, #444 0%, #555 50%, #444 51%, #444 100%);margin: 10px auto;text-shadow: 1px 1px #21476d; border: 4px solid #49739a; -moz-border-radius: 8px; -webkit-border-radius: 8px; -o-border-radius: 8px; -ms-border-radius: 8px;-khtml-border-radius: 8px; border-radius: 8px;}.audiojs .play-pause { width: 25px; height: 40px; padding: 4px 6px; margin: 0px; float: left; overflow: hidden; border-right: 1px solid #000; } .audiojs p { display: none; width: 25px; height: 40px; margin: 0px; cursor: pointer; } .audiojs .play { display: block; } .audiojs .scrubber { position: relative; float: left; width: 190px; background: #5a5a5a; height: 14px; margin: 10px; border-top: 1px solid #3f3f3f; border-left: 0px; border-bottom: 0px; overflow: hidden; } .audiojs .progress { position: absolute; top: 0px; left: 0px; height: 14px; width: 0px; background: #ccc; z-index: 1; background-image: -webkit-gradient(linear, left top, left bottom, color-stop(0, #ccc), color-stop(0.5, #ddd), color-stop(0.51, #ccc), color-stop(1, #ccc)); background-image: -moz-linear-gradient(center top, #ccc 0%, #ddd 50%, #ccc 51%, #ccc 100%); } .audiojs .loaded { position: absolute; top: 0px; left: 0px; height: 14px; width: 0px; background: #000; background-image: -webkit-gradient(linear, left top, left bottom, color-stop(0, #222), color-stop(0.5, #333), color-stop(0.51, #222), color-stop(1, #222)); background-image: -moz-linear-gradient(center top, #222 0%, #333 50%, #222 51%, #222 100%); } .audiojs .time { float: left; height: 36px; line-height: 36px; margin: 0px 0px 0px 6px; padding: 0px 6px; border-left: 1px solid #000; color: #ddd; text-shadow: 1px 1px 0px rgba(0, 0, 0, 0.5); } .audiojs .time em { padding: 0px 2px 0px 0px; color: #f9f9f9; font-style: normal; } .audiojs .time strong { padding: 0px 0px 0px 2px; font-weight: normal; } .audiojs .error-message { float: left; display: none; margin: 0px 10px; height: 36px; width: 400px; overflow: hidden; line-height: 36px; white-space: nowrap; color: #fff; text-overflow: ellipsis; -o-text-overflow: ellipsis; -icab-text-overflow: ellipsis; -khtml-text-overflow: ellipsis; -moz-text-overflow: ellipsis; -webkit-text-overflow: ellipsis; } .audiojs .error-message a { color: #eee; text-decoration: none; padding-bottom: 1px; border-bottom: 1px solid #999; white-space: wrap; } .audiojs .play { background: url("css/images/play.png") -2px -1px no-repeat; } .audiojs .loading { background: url("$1") -2px -31px no-repeat; } .audiojs .error { background: url("$1") -2px -61px no-repeat; } .audiojs .pause { background: url("css/images/pause.png") -2px -1px no-repeat; } .playing .play, .playing .loading, .playing .error { display: none; } .playing .pause { display: block; } .loading .play, .loading .pause, .loading .error { display: none; } .loading .loading { display: block; } .error .time, .error .play, .error .pause, .error .scrubber, .error .loading { display: none; } .error .error { display: block; } .error .play-pause p { cursor: auto; } .error .error-message { display: block; } .erin-player {  background: #21476d; border: 5px solid #21476d;  font-family: arial;  font-weight: bold;  margin: 5px auto;  max-width: 100%;  overflow: auto;  text-shadow: 1px 1px #21476d;  text-transform: capitalize;  -moz-border-radius:8px;  -webkit-border-radius:8px;  -o-border-radius:8px;  -ms-border-radius:8px;  -khtml-border-radius:8px;  border-radius:8px;  } .erin-player .audiojs {  border-radius: 0; margin: 0; box-shadow: none;  border-top: 1px solid #666;  border-bottom: 1px solid #111;  border-left: 1px solid #111;  border-right: 1px solid #111;  width: auto !important;  max-width: 460px;  } .erin-player .erin-player-inner {  height: 350px !important;  } .erin-player .erin-player-inner .content {  border-bottom: 1px solid #111111;  border-left: 1px solid #111111;  border-top: 1px solid #111111;  } .erin-player ol {  border-left: 1px solid #111111;  border-right: 1px solid #111111;  color: #FFFFFF;  font-size: 12px;  margin: 0 0 0 37px;  max-width: 100%px;  padding: 0;  } .erin-player ol li {  border-bottom: 1px solid #111;  cursor: pointer;  list-style: decimal outside none;  position: relative;  border-top: 1px solid #666;  padding: 0;  margin: 0; line-height: 22px; } .erin-player ol li:last-child {  border-bottom: none;  } .erin-player ol li a { color: #eee;  display: block;  padding: 5px 10px;  transition: all 0.25s linear 0s;  -moz-transition: all 0.25s linear 0s;  -webkit-transition: all 0.25s linear 0s;  } .erin-player ol li a:hover { color: #fff; background: #555;  } .erin-player ol li.playing a {  background: #666;  color: #fff;  } .erin-player .nano {  position : relative;  width    : 100%;  height   : 100%;  overflow : hidden;  } .erin-player .nano .content { position: fixed; overflow: scroll; overflow-x: hidden; top: 0; right: 0; bottom: 0; left: 0;  } .erin-player .nano .content:focus { outline: thin dotted; } .erin-player .nano .content::-webkit-scrollbar { visibility: hidden; } .erin-player .has-scrollbar .content::-webkit-scrollbar { visibility: visible; } .erin-player .nano > .pane { background: rgba(0,0,0,.25); position: absolute; width: 10px; right: 0; top: 0; bottom: 0; visibility : hidden\9; /* Target only IE7 and IE8 with this hack */ opacity: .01; -webkit-transition: .2s; -moz-transition: .2s; -o-transition: .2s; transition: .2s; -moz-border-radius: 5px; -webkit-border-radius: 5px; border-radius: 5px; } .erin-player .nano > .pane > .slider { background: rgba(0,0,0,.5); position: relative; margin: 0 1px; -moz-border-radius: 3px; -webkit-border-radius: 3px; border-radius: 3px; } .erin-player .nano:hover > .pane, .pane.active, .pane.flashed { visibility: visible\9; /* Target only IE7 and IE8 with this hack */ opacity: 0.99; }',trackEnded:function(){},flashError:function(){var t=this.settings.createPlayer,r=i(t.errorMessageClass,this.wrapper),s='Missing <a href="http://get.adobe.com/flashplayer/">flash player</a> plugin.';if(this.mp3)s+=' <a href="'+this.mp3+'">Download audio file</a>.';n[e].helpers.removeClass(this.wrapper,t.loadingClass);n[e].helpers.addClass(this.wrapper,t.errorClass);r.innerHTML=s},loadError:function(){var t=this.settings.createPlayer,r=i(t.errorMessageClass,this.wrapper);n[e].helpers.removeClass(this.wrapper,t.loadingClass);n[e].helpers.addClass(this.wrapper,t.errorClass);r.innerHTML='Error loading: "'+this.mp3+'"'},init:function(){n[e].helpers.addClass(this.wrapper,this.settings.createPlayer.loadingClass)},loadStarted:function(){var t=this.settings.createPlayer,r=i(t.durationClass,this.wrapper),s=Math.floor(this.duration/60),o=Math.floor(this.duration%60);n[e].helpers.removeClass(this.wrapper,t.loadingClass);r.innerHTML=(s<10?"0":"")+s+":"+(o<10?"0":"")+o},loadProgress:function(e){var t=this.settings.createPlayer,n=i(t.scrubberClass,this.wrapper);i(t.loaderClass,this.wrapper).style.width=n.offsetWidth*e+"px"},playPause:function(){this.playing?this.settings.play():this.settings.pause()},play:function(){n[e].helpers.addClass(this.wrapper,this.settings.createPlayer.playingClass)},pause:function(){n[e].helpers.removeClass(this.wrapper,this.settings.createPlayer.playingClass)},updatePlayhead:function(e){var t=this.settings.createPlayer,n=i(t.scrubberClass,this.wrapper);i(t.progressClass,this.wrapper).style.width=n.offsetWidth*e+"px";t=i(t.playedClass,this.wrapper);n=this.duration*e;e=Math.floor(n/60);n=Math.floor(n%60);t.innerHTML=(e<10?"0":"")+e+":"+(n<10?"0":"")+n}},create:function(e,t){t=t||{};return e.length?this.createAll(t,e):this.newInstance(e,t)},createAll:function(e,t){var n=t||document.getElementsByTagName("audio"),r=[];e=e||{};for(var i=0,s=n.length;i<s;i++)r.push(this.newInstance(n[i],e));return r},newInstance:function(e,r){var i=this.helpers.clone(this.settings),s="audiojs"+this.instanceCount,u="audiojs_wrapper"+this.instanceCount;this.instanceCount++;if(e.getAttribute("autoplay")!=null)i.autoplay=true;if(e.getAttribute("loop")!=null)i.loop=true;if(e.getAttribute("preload")=="none")i.preload=false;r&&this.helpers.merge(i,r);if(i.createPlayer.markup)e=this.createPlayer(e,i.createPlayer,u);else e.parentNode.setAttribute("id",u);u=new n[t](e,i);i.css&&this.helpers.injectCss(u,i.css);if(i.useFlash&&i.hasFlash){this.injectFlash(u,s);this.attachFlashEvents(u.wrapper,u)}else i.useFlash&&!i.hasFlash&&this.settings.flashError.apply(u);if(!i.useFlash||i.useFlash&&i.hasFlash)this.attachEvents(u.wrapper,u);return this.instances[s]=u},createPlayer:function(e,t,n){var r=document.createElement("div"),i=e.cloneNode(true);r.setAttribute("class","audiojs");r.setAttribute("className","audiojs");r.setAttribute("id",n);if(i.outerHTML&&!document.createElement("audio").canPlayType){i=this.helpers.cloneHtml5Node(e);r.innerHTML=t.markup;r.appendChild(i);e.outerHTML=r.outerHTML;r=document.getElementById(n)}else{r.appendChild(i);r.innerHTML+=t.markup;e.parentNode.replaceChild(r,e)}return r.getElementsByTagName("audio")[0]},attachEvents:function(t,r){if(r.settings.createPlayer){var s=r.settings.createPlayer,o=i(s.playPauseClass,t),u=i(s.scrubberClass,t);n[e].events.addListener(o,"click",function(){r.playPause.apply(r)});n[e].events.addListener(u,"click",function(e){e=e.clientX;var t=this,n=0;if(t.offsetParent){do n+=t.offsetLeft;while(t=t.offsetParent)}r.skipTo((e-n)/u.offsetWidth)});if(!r.settings.useFlash){n[e].events.trackLoadProgress(r);n[e].events.addListener(r.element,"timeupdate",function(){r.updatePlayhead.apply(r)});n[e].events.addListener(r.element,"ended",function(){r.trackEnded.apply(r)});n[e].events.addListener(r.source,"error",function(){clearInterval(r.readyTimer);clearInterval(r.loadTimer);r.settings.loadError.apply(r)})}}},attachFlashEvents:function(e,t){t.swfReady=false;t.load=function(e){t.mp3=e;t.swfReady&&t.element.load(e)};t.loadProgress=function(e,n){t.loadedPercent=e;t.duration=n;t.settings.loadStarted.apply(t);t.settings.loadProgress.apply(t,[e])};t.skipTo=function(e){if(!(e>t.loadedPercent)){t.updatePlayhead.call(t,[e]);t.element.skipTo(e)}};t.updatePlayhead=function(e){t.settings.updatePlayhead.apply(t,[e])};t.play=function(){if(!t.settings.preload){t.settings.preload=true;t.element.init(t.mp3)}t.playing=true;t.element.pplay();t.settings.play.apply(t)};t.pause=function(){t.playing=false;t.element.ppause();t.settings.pause.apply(t)};t.setVolume=function(e){t.element.setVolume(e)};t.loadStarted=function(){t.swfReady=true;t.settings.preload&&t.element.init(t.mp3);t.settings.autoplay&&t.play.apply(t)}},injectFlash:function(e,t){var n=this.flashSource.replace(/\$1/g,t);n=n.replace(/\$2/g,e.settings.swfLocation);n=n.replace(/\$3/g,+(new Date)+Math.random());var r=e.wrapper.innerHTML,i=document.createElement("div");i.innerHTML=n+r;e.wrapper.innerHTML=i.innerHTML;e.element=this.helpers.getSwf(t)},helpers:{merge:function(e,t){for(attr in t)if(e.hasOwnProperty(attr)||t.hasOwnProperty(attr))e[attr]=t[attr]},clone:function(e){if(e==null||typeof e!=="object")return e;var t=new e.constructor,n;for(n in e)t[n]=arguments.callee(e[n]);return t},addClass:function(e,t){RegExp("(\\s|^)"+t+"(\\s|$)").test(e.className)||(e.className+=" "+t)},removeClass:function(e,t){e.className=e.className.replace(RegExp("(\\s|^)"+t+"(\\s|$)")," ")},injectCss:function(e,t){for(var n="",r=document.getElementsByTagName("style"),i=t.replace(/\$1/g,e.settings.imageLocation),s=0,o=r.length;s<o;s++){var u=r[s].getAttribute("title");if(u&&~u.indexOf("audiojs")){o=r[s];if(o.innerHTML===i)return;n=o.innerHTML;break}}r=document.getElementsByTagName("head")[0];s=r.firstChild;o=document.createElement("style");if(r){o.setAttribute("type","text/css");o.setAttribute("title","audiojs");if(o.styleSheet)o.styleSheet.cssText=n+i;else o.appendChild(document.createTextNode(n+i));s?r.insertBefore(o,s):r.appendChild(styleElement)}},cloneHtml5Node:function(e){var t=document.createDocumentFragment(),n=t.createElement?t:document;n.createElement("audio");n=n.createElement("div");t.appendChild(n);n.innerHTML=e.outerHTML;return n.firstChild},getSwf:function(e){e=document[e]||window[e];return e.length>1?e[e.length-1]:e}},events:{memoryLeaking:false,listeners:[],addListener:function(t,r,i){if(t.addEventListener)t.addEventListener(r,i,false);else if(t.attachEvent){this.listeners.push(t);if(!this.memoryLeaking){window.attachEvent("onunload",function(){if(this.listeners)for(var t=0,r=this.listeners.length;t<r;t++)n[e].events.purge(this.listeners[t])});this.memoryLeaking=true}t.attachEvent("on"+r,function(){i.call(t,window.event)})}},trackLoadProgress:function(e){if(e.settings.preload){var t,n;e=e;var r=/(ipod|iphone|ipad)/i.test(navigator.userAgent);t=setInterval(function(){if(e.element.readyState>-1)r||e.init.apply(e);if(e.element.readyState>1){e.settings.autoplay&&e.play.apply(e);clearInterval(t);n=setInterval(function(){e.loadProgress.apply(e);e.loadedPercent>=1&&clearInterval(n)})}},10);e.readyTimer=t;e.loadTimer=n}},purge:function(e){var t=e.attributes,n;if(t)for(n=0;n<t.length;n+=1)if(typeof e[t[n].name]==="function")e[t[n].name]=null;if(t=e.childNodes)for(n=0;n<t.length;n+=1)purge(e.childNodes[n])},ready:function(){return function(e){var t=window,n=false,r=true,i=t.document,s=i.documentElement,o=i.addEventListener?"addEventListener":"attachEvent",u=i.addEventListener?"removeEventListener":"detachEvent",a=i.addEventListener?"":"on",f=function(r){if(!(r.type=="readystatechange"&&i.readyState!="complete")){(r.type=="load"?t:i)[u](a+r.type,f,false);if(!n&&(n=true))e.call(t,r.type||r)}},l=function(){try{s.doScroll("left")}catch(e){setTimeout(l,50);return}f("poll")};if(i.readyState=="complete")e.call(t,"lazy");else{if(i.createEventObject&&s.doScroll){try{r=!t.frameElement}catch(c){}r&&l()}i[o](a+"DOMContentLoaded",f,false);i[o](a+"readystatechange",f,false);t[o](a+"load",f,false)}}}()}};n[t]=function(e,t){this.element=e;this.wrapper=e.parentNode;this.source=e.getElementsByTagName("source")[0]||e;this.mp3=function(e){var t=e.getElementsByTagName("source")[0];return e.getAttribute("src")||(t?t.getAttribute("src"):null)}(e);this.settings=t;this.loadStartedCalled=false;this.loadedPercent=0;this.duration=1;this.playing=false};n[t].prototype={updatePlayhead:function(){this.settings.updatePlayhead.apply(this,[this.element.currentTime/this.duration])},skipTo:function(e){if(!(e>this.loadedPercent)){this.element.currentTime=this.duration*e;this.updatePlayhead()}},load:function(t){this.loadStartedCalled=false;this.source.setAttribute("src",t);this.element.load();this.mp3=t;n[e].events.trackLoadProgress(this)},loadError:function(){this.settings.loadError.apply(this)},init:function(){this.settings.init.apply(this)},loadStarted:function(){if(!this.element.duration)return false;this.duration=this.element.duration;this.updatePlayhead();this.settings.loadStarted.apply(this)},loadProgress:function(){if(this.element.buffered!=null&&this.element.buffered.length){if(!this.loadStartedCalled)this.loadStartedCalled=this.loadStarted();this.loadedPercent=this.element.buffered.end(this.element.buffered.length-1)/this.duration;this.settings.loadProgress.apply(this,[this.loadedPercent])}},playPause:function(){this.playing?this.pause():this.play()},play:function(){/(ipod|iphone|ipad)/i.test(navigator.userAgent)&&this.element.readyState==0&&this.init.apply(this);if(!this.settings.preload){this.settings.preload=true;this.element.setAttribute("preload","auto");n[e].events.trackLoadProgress(this)}this.playing=true;this.element.play();this.settings.play.apply(this)},pause:function(){this.playing=false;this.element.pause();this.settings.pause.apply(this)},setVolume:function(e){this.element.volume=e},trackEnded:function(){this.skipTo.apply(this,[0]);this.settings.loop||this.pause.apply(this);this.settings.trackEnded.apply(this)}};var i=function(e,t){var n=[];t=t||document;if(t.getElementsByClassName)n=t.getElementsByClassName(e);else{var r,i,s=t.getElementsByTagName("*"),o=RegExp("(^|\\s)"+e+"(\\s|$)");r=0;for(i=s.length;r<i;r++)o.test(s[r].className)&&n.push(s[r])}return n.length>1?n:n[0]}})("audiojs","audiojsInstance",this);$(function(){var e=audiojs.createAll({trackEnded:function(){var e=$("ol li.playing").next();if(!e.length)e=$("ol li").first();e.addClass("playing").siblings().removeClass("playing");t.load($("a",e).attr("data-src"));t.play()}});var t=e[0];first=$("ol a").attr("data-src");$("ol li").first().addClass("playing");t.load(first);$("ol li").click(function(e){e.preventDefault();$(this).addClass("playing").siblings().removeClass("playing");t.load($("a",this).attr("data-src"));t.play()});$(document).keydown(function(e){var n=e.charCode?e.charCode:e.keyCode;if(n==39){var r=$("li.playing").next();if(!r.length)r=$("ol li").first();r.click()}else if(n==37){var i=$("li.playing").prev();if(!i.length)i=$("ol li").last();i.click()}else if(n==32){t.playPause()}})});(function(e,t,n){"use strict";var r,i,s,o,u,a,f,l,c,h,p,d,v,m,g,y,b,w,E,S,x,T,N;T={paneClass:"pane",sliderClass:"slider",contentClass:"content",iOSNativeScrolling:false,preventPageScrolling:false,disableResize:false,alwaysVisible:false,flashDelay:1500,sliderMinHeight:20,sliderMaxHeight:null};w="scrollbar";b="scroll";h="mousedown";p="mousemove";v="mousewheel";d="mouseup";y="resize";u="drag";S="up";g="panedown";s="DOMMouseScroll";o="down";x="wheel";a="keydown";c="keyup";E="touchmove";r=t.navigator.appName==="Microsoft Internet Explorer"&&/msie 7./i.test(t.navigator.appVersion)&&t.ActiveXObject;i=null;l={};f={up:38,down:40,pgup:33,pgdown:34,home:36,end:35};N=function(){var e,t,r;e=n.createElement("div");t=e.style;t.position="absolute";t.width="100px";t.height="100px";t.overflow=b;t.top="-9999px";n.body.appendChild(e);r=e.offsetWidth-e.clientWidth;n.body.removeChild(e);return r};m=function(){function f(r,s){this.el=r;this.options=s;i||(i=N());this.$el=e(this.el);this.doc=e(n);this.win=e(t);this.generate();this.createEvents();this.addEvents();this.reset()}f.prototype.preventScrolling=function(e,t){if(!this.isActive){return}if(e.type===s){if(t===o&&e.originalEvent.detail>0||t===S&&e.originalEvent.detail<0){e.preventDefault()}}else if(e.type===v){if(!e.originalEvent||!e.originalEvent.wheelDelta){return}if(t===o&&e.originalEvent.wheelDelta<0||t===S&&e.originalEvent.wheelDelta>0){e.preventDefault()}}};f.prototype.updateScrollValues=function(){var e;e=this.content[0];this.maxScrollTop=e.scrollHeight-e.clientHeight;this.contentScrollTop=e.scrollTop;this.maxSliderTop=this.paneHeight-this.sliderHeight;this.sliderTop=this.contentScrollTop*this.maxSliderTop/this.maxScrollTop};f.prototype.createEvents=function(){var e=this;this.events={down:function(t){e.isBeingDragged=true;e.offsetY=t.pageY-e.slider.offset().top;e.pane.addClass("active");e.doc.bind(p,e.events[u]).bind(d,e.events[S]);return false},drag:function(t){e.sliderY=t.pageY-e.$el.offset().top-e.offsetY;e.scroll();e.updateScrollValues();if(e.contentScrollTop>=e.maxScrollTop){e.$el.trigger("scrollend")}else if(e.contentScrollTop===0){e.$el.trigger("scrolltop")}return false},up:function(t){e.isBeingDragged=false;e.pane.removeClass("active");e.doc.unbind(p,e.events[u]).unbind(d,e.events[S]);return false},resize:function(t){e.reset()},panedown:function(t){e.sliderY=(t.offsetY||t.originalEvent.layerY)-e.sliderHeight*.5;e.scroll();e.events.down(t);return false},scroll:function(t){if(e.isBeingDragged){return}e.updateScrollValues();e.sliderY=e.sliderTop;e.slider.css({top:e.sliderTop});if(t==null){return}if(e.contentScrollTop>=e.maxScrollTop){if(e.options.preventPageScrolling){e.preventScrolling(t,o)}e.$el.trigger("scrollend")}else if(e.contentScrollTop===0){if(e.options.preventPageScrolling){e.preventScrolling(t,S)}e.$el.trigger("scrolltop")}},wheel:function(t){if(t==null){return}e.sliderY+=-t.wheelDeltaY||-t.delta;e.scroll();return false}}};f.prototype.addEvents=function(){var e;this.removeEvents();e=this.events;if(!this.options.disableResize){this.win.bind(y,e[y])}this.slider.bind(h,e[o]);this.pane.bind(h,e[g]).bind(""+v+" "+s,e[x]);this.content.bind(""+b+" "+v+" "+s+" "+E,e[b])};f.prototype.removeEvents=function(){var e;e=this.events;this.win.unbind(y,e[y]);this.slider.unbind();this.pane.unbind();this.content.unbind(""+b+" "+v+" "+s+" "+E,e[b]).unbind(a,e[a]).unbind(c,e[c])};f.prototype.generate=function(){var e,t,n,r,s;n=this.options;r=n.paneClass,s=n.sliderClass,e=n.contentClass;if(!this.$el.find(""+r).length&&!this.$el.find(""+s).length){this.$el.append('<div class="'+r+'"><div class="'+s+'" /></div>')}this.content=this.$el.children("."+e);this.content.attr("tabindex",0);this.slider=this.$el.find("."+s);this.pane=this.$el.find("."+r);if(i){t={right:-i};this.$el.addClass("has-scrollbar")}if(n.iOSNativeScrolling){if(t==null){t={}}t.WebkitOverflowScrolling="touch"}if(t!=null){this.content.css(t)}return this};f.prototype.restore=function(){this.stopped=false;this.pane.show();return this.addEvents()};f.prototype.reset=function(){var e,t,n,s,o,u,a,f,l;if(!this.$el.find("."+this.options.paneClass).length){this.generate().stop()}if(this.stopped){this.restore()}e=this.content[0];n=e.style;s=n.overflowY;if(r){this.content.css({height:this.content.height()})}t=e.scrollHeight+i;u=this.pane.outerHeight();f=parseInt(this.pane.css("top"),10);o=parseInt(this.pane.css("bottom"),10);a=u+f+o;l=Math.round(a/t*a);if(l<this.options.sliderMinHeight){l=this.options.sliderMinHeight}else if(this.options.sliderMaxHeight!=null&&l>this.options.sliderMaxHeight){l=this.options.sliderMaxHeight}if(s===b&&n.overflowX!==b){l+=i}this.maxSliderTop=a-l;this.contentHeight=t;this.paneHeight=u;this.paneOuterHeight=a;this.sliderHeight=l;this.slider.height(l);this.events.scroll();this.pane.show();this.isActive=true;if(this.pane.outerHeight(true)>=e.scrollHeight&&s!==b){this.pane.hide();this.isActive=false}else if(this.el.clientHeight===e.scrollHeight&&s===b){this.slider.hide()}else{this.slider.show()}if(this.options.alwaysVisible){this.pane.css({opacity:1,visibility:"visible"})}else{this.pane.css({opacity:"",visibility:""})}return this};f.prototype.scroll=function(){this.sliderY=Math.max(0,this.sliderY);this.sliderY=Math.min(this.maxSliderTop,this.sliderY);this.content.scrollTop((this.paneHeight-this.contentHeight+i)*this.sliderY/this.maxSliderTop*-1);this.slider.css({top:this.sliderY});return this};f.prototype.scrollBottom=function(e){this.reset();this.content.scrollTop(this.contentHeight-this.content.height()-e).trigger(v);return this};f.prototype.scrollTop=function(e){this.reset();this.content.scrollTop(+e).trigger(v);return this};f.prototype.scrollTo=function(t){var n,r,i;this.reset();i=e(t).offset().top;if(i>this.maxSliderTop){n=i/this.contentHeight;r=this.maxSliderTop*n;this.sliderY=r;this.scroll()}return this};f.prototype.stop=function(){this.stopped=true;this.removeEvents();this.pane.hide();return this};f.prototype.flash=function(){var e=this;this.reset();this.pane.addClass("flashed");setTimeout(function(){e.pane.removeClass("flashed")},this.options.flashDelay);return this};return f}();e.fn.nanoScroller=function(t){return this.each(function(){var n,r;if(!(r=this.nanoscroller)){n=e.extend({},T,t);this.nanoscroller=r=new m(this,n)}if(t&&typeof t==="object"){e.extend(r.options,t);if(t.scrollBottom){return r.scrollBottom(t.scrollBottom)}if(t.scrollTop){return r.scrollTop(t.scrollTop)}if(t.scrollTo){return r.scrollTo(t.scrollTo)}if(t.scroll==="bottom"){return r.scrollBottom(0)}if(t.scroll==="top"){return r.scrollTop(0)}if(t.scroll&&t.scroll instanceof e){return r.scrollTo(t.scroll)}if(t.stop){return r.stop()}if(t.flash){return r.flash()}}return r.reset()})}})(jQuery,window,document);$(function(){$(".nano").nanoScroller({preventPageScrolling:true});$(".erin-player-inner").find(".description").load("readme.html",function(){$(".nano").nanoScroller()})})