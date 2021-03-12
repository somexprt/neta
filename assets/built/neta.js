/* clipboard.js
      –––––––––––––––––––––––––––––––––––––––––––––––––––– 
      Version : 2.0.6
      Website : clipboardjs.com
      Repo    : github.com/zenorocha/clipboard.js
      Author  : Zeno Rocha
      License : MIT
      –––––––––––––––––––––––––––––––––––––––––––––––––––– */
      !function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.ClipboardJS=e():t.ClipboardJS=e()}(this,function(){return o={},r.m=n=[function(t,e){t.exports=function(t){var e;if("SELECT"===t.nodeName)t.focus(),e=t.value;else if("INPUT"===t.nodeName||"TEXTAREA"===t.nodeName){var n=t.hasAttribute("readonly");n||t.setAttribute("readonly",""),t.select(),t.setSelectionRange(0,t.value.length),n||t.removeAttribute("readonly"),e=t.value}else{t.hasAttribute("contenteditable")&&t.focus();var o=window.getSelection(),r=document.createRange();r.selectNodeContents(t),o.removeAllRanges(),o.addRange(r),e=o.toString()}return e}},function(t,e){function n(){}n.prototype={on:function(t,e,n){var o=this.e||(this.e={});return(o[t]||(o[t]=[])).push({fn:e,ctx:n}),this},once:function(t,e,n){var o=this;function r(){o.off(t,r),e.apply(n,arguments)}return r._=e,this.on(t,r,n)},emit:function(t){for(var e=[].slice.call(arguments,1),n=((this.e||(this.e={}))[t]||[]).slice(),o=0,r=n.length;o<r;o++)n[o].fn.apply(n[o].ctx,e);return this},off:function(t,e){var n=this.e||(this.e={}),o=n[t],r=[];if(o&&e)for(var i=0,a=o.length;i<a;i++)o[i].fn!==e&&o[i].fn._!==e&&r.push(o[i]);return r.length?n[t]=r:delete n[t],this}},t.exports=n,t.exports.TinyEmitter=n},function(t,e,n){var d=n(3),h=n(4);t.exports=function(t,e,n){if(!t&&!e&&!n)throw new Error("Missing required arguments");if(!d.string(e))throw new TypeError("Second argument must be a String");if(!d.fn(n))throw new TypeError("Third argument must be a Function");if(d.node(t))return s=e,f=n,(u=t).addEventListener(s,f),{destroy:function(){u.removeEventListener(s,f)}};if(d.nodeList(t))return a=t,c=e,l=n,Array.prototype.forEach.call(a,function(t){t.addEventListener(c,l)}),{destroy:function(){Array.prototype.forEach.call(a,function(t){t.removeEventListener(c,l)})}};if(d.string(t))return o=t,r=e,i=n,h(document.body,o,r,i);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList");var o,r,i,a,c,l,u,s,f}},function(t,n){n.node=function(t){return void 0!==t&&t instanceof HTMLElement&&1===t.nodeType},n.nodeList=function(t){var e=Object.prototype.toString.call(t);return void 0!==t&&("[object NodeList]"===e||"[object HTMLCollection]"===e)&&"length"in t&&(0===t.length||n.node(t[0]))},n.string=function(t){return"string"==typeof t||t instanceof String},n.fn=function(t){return"[object Function]"===Object.prototype.toString.call(t)}},function(t,e,n){var a=n(5);function i(t,e,n,o,r){var i=function(e,n,t,o){return function(t){t.delegateTarget=a(t.target,n),t.delegateTarget&&o.call(e,t)}}.apply(this,arguments);return t.addEventListener(n,i,r),{destroy:function(){t.removeEventListener(n,i,r)}}}t.exports=function(t,e,n,o,r){return"function"==typeof t.addEventListener?i.apply(null,arguments):"function"==typeof n?i.bind(null,document).apply(null,arguments):("string"==typeof t&&(t=document.querySelectorAll(t)),Array.prototype.map.call(t,function(t){return i(t,e,n,o,r)}))}},function(t,e){if("undefined"!=typeof Element&&!Element.prototype.matches){var n=Element.prototype;n.matches=n.matchesSelector||n.mozMatchesSelector||n.msMatchesSelector||n.oMatchesSelector||n.webkitMatchesSelector}t.exports=function(t,e){for(;t&&9!==t.nodeType;){if("function"==typeof t.matches&&t.matches(e))return t;t=t.parentNode}}},function(t,e,n){"use strict";n.r(e);var o=n(0),r=n.n(o),i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};function a(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function c(t){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,c),this.resolveOptions(t),this.initSelection()}var l=(function(t,e,n){return e&&a(t.prototype,e),n&&a(t,n),t}(c,[{key:"resolveOptions",value:function(t){var e=0<arguments.length&&void 0!==t?t:{};this.action=e.action,this.container=e.container,this.emitter=e.emitter,this.target=e.target,this.text=e.text,this.trigger=e.trigger,this.selectedText=""}},{key:"initSelection",value:function(){this.text?this.selectFake():this.target&&this.selectTarget()}},{key:"selectFake",value:function(){var t=this,e="rtl"==document.documentElement.getAttribute("dir");this.removeFake(),this.fakeHandlerCallback=function(){return t.removeFake()},this.fakeHandler=this.container.addEventListener("click",this.fakeHandlerCallback)||!0,this.fakeElem=document.createElement("textarea"),this.fakeElem.style.fontSize="12pt",this.fakeElem.style.border="0",this.fakeElem.style.padding="0",this.fakeElem.style.margin="0",this.fakeElem.style.position="absolute",this.fakeElem.style[e?"right":"left"]="-9999px";var n=window.pageYOffset||document.documentElement.scrollTop;this.fakeElem.style.top=n+"px",this.fakeElem.setAttribute("readonly",""),this.fakeElem.value=this.text,this.container.appendChild(this.fakeElem),this.selectedText=r()(this.fakeElem),this.copyText()}},{key:"removeFake",value:function(){this.fakeHandler&&(this.container.removeEventListener("click",this.fakeHandlerCallback),this.fakeHandler=null,this.fakeHandlerCallback=null),this.fakeElem&&(this.container.removeChild(this.fakeElem),this.fakeElem=null)}},{key:"selectTarget",value:function(){this.selectedText=r()(this.target),this.copyText()}},{key:"copyText",value:function(){var e=void 0;try{e=document.execCommand(this.action)}catch(t){e=!1}this.handleResult(e)}},{key:"handleResult",value:function(t){this.emitter.emit(t?"success":"error",{action:this.action,text:this.selectedText,trigger:this.trigger,clearSelection:this.clearSelection.bind(this)})}},{key:"clearSelection",value:function(){this.trigger&&this.trigger.focus(),document.activeElement.blur(),window.getSelection().removeAllRanges()}},{key:"destroy",value:function(){this.removeFake()}},{key:"action",set:function(t){var e=0<arguments.length&&void 0!==t?t:"copy";if(this._action=e,"copy"!==this._action&&"cut"!==this._action)throw new Error('Invalid "action" value, use either "copy" or "cut"')},get:function(){return this._action}},{key:"target",set:function(t){if(void 0!==t){if(!t||"object"!==(void 0===t?"undefined":i(t))||1!==t.nodeType)throw new Error('Invalid "target" value, use a valid Element');if("copy"===this.action&&t.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if("cut"===this.action&&(t.hasAttribute("readonly")||t.hasAttribute("disabled")))throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');this._target=t}},get:function(){return this._target}}]),c),u=n(1),s=n.n(u),f=n(2),d=n.n(f),h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},p=function(t,e,n){return e&&y(t.prototype,e),n&&y(t,n),t};function y(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}var m=(function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(v,s.a),p(v,[{key:"resolveOptions",value:function(t){var e=0<arguments.length&&void 0!==t?t:{};this.action="function"==typeof e.action?e.action:this.defaultAction,this.target="function"==typeof e.target?e.target:this.defaultTarget,this.text="function"==typeof e.text?e.text:this.defaultText,this.container="object"===h(e.container)?e.container:document.body}},{key:"listenClick",value:function(t){var e=this;this.listener=d()(t,"click",function(t){return e.onClick(t)})}},{key:"onClick",value:function(t){var e=t.delegateTarget||t.currentTarget;this.clipboardAction&&(this.clipboardAction=null),this.clipboardAction=new l({action:this.action(e),target:this.target(e),text:this.text(e),container:this.container,trigger:e,emitter:this})}},{key:"defaultAction",value:function(t){return b("action",t)}},{key:"defaultTarget",value:function(t){var e=b("target",t);if(e)return document.querySelector(e)}},{key:"defaultText",value:function(t){return b("text",t)}},{key:"destroy",value:function(){this.listener.destroy(),this.clipboardAction&&(this.clipboardAction.destroy(),this.clipboardAction=null)}}],[{key:"isSupported",value:function(t){var e=0<arguments.length&&void 0!==t?t:["copy","cut"],n="string"==typeof e?[e]:e,o=!!document.queryCommandSupported;return n.forEach(function(t){o=o&&!!document.queryCommandSupported(t)}),o}}]),v);function v(t,e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,v);var n=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(v.__proto__||Object.getPrototypeOf(v)).call(this));return n.resolveOptions(e),n.listenClick(t),n}function b(t,e){var n="data-clipboard-"+t;if(e.hasAttribute(n))return e.getAttribute(n)}e.default=m}],r.c=o,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=6).default;function r(t){if(o[t])return o[t].exports;var e=o[t]={i:t,l:!1,exports:{}};return n[t].call(e.exports,e,e.exports,r),e.l=!0,e.exports}var n,o});
   
      /* Custom settings for clipboard */
      new ClipboardJS("#copy");

/* eslint-env browser */

/**
 * Gallery card support
 * Used on any individual post/page
 *
 * Detects when a gallery card has been used and applies sizing to make sure
 * the display matches what is seen in the editor.
 */

 (function (window, document) {
  var resizeImagesInGalleries = function resizeImagesInGalleries() {
      var images = document.querySelectorAll('.kg-gallery-image img');
      images.forEach(function (image) {
          var container = image.closest('.kg-gallery-image');
          var width = image.attributes.width.value;
          var height = image.attributes.height.value;
          var ratio = width / height;
          container.style.flex = ratio + ' 1 0%';
      });
  };

  document.addEventListener('DOMContentLoaded', resizeImagesInGalleries);
})(window, document);



/*jshint browser:true */
/*!
* FitVids 1.3
*
*
* Copyright 2017, Chris Coyier + Dave Rupert + Ghost Foundation
* This is an unofficial release, ported by John O'Nolan
* Credit to Thierry Koblentz - http://www.alistapart.com/articles/creating-intrinsic-ratios-for-video/
* Released under the MIT license
*
*/

;(function( $ ){

  'use strict';

  $.fn.fitVids = function( options ) {
    var settings = {
      customSelector: null,
      ignore: null
    };

    if(!document.getElementById('fit-vids-style')) {
      // appendStyles: https://github.com/toddmotto/fluidvids/blob/master/dist/fluidvids.js
      var head = document.head || document.getElementsByTagName('head')[0];
      var css = '.fluid-width-video-container{flex-grow: 1;width:100%;}.fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}';
      var div = document.createElement("div");
      div.innerHTML = '<p>x</p><style id="fit-vids-style">' + css + '</style>';
      head.appendChild(div.childNodes[1]);
    }

    if ( options ) {
      $.extend( settings, options );
    }

    return this.each(function(){
      var selectors = [
        'iframe[src*="player.vimeo.com"]',
        'iframe[src*="youtube.com"]',
        'iframe[src*="youtube-nocookie.com"]',
        'iframe[src*="kickstarter.com"][src*="video.html"]',
        'object',
        'embed'
      ];

      if (settings.customSelector) {
        selectors.push(settings.customSelector);
      }

      var ignoreList = '.fitvidsignore';

      if(settings.ignore) {
        ignoreList = ignoreList + ', ' + settings.ignore;
      }

      var $allVideos = $(this).find(selectors.join(','));
      $allVideos = $allVideos.not('object object'); // SwfObj conflict patch
      $allVideos = $allVideos.not(ignoreList); // Disable FitVids on this video.

      $allVideos.each(function(){
        var $this = $(this);
        if($this.parents(ignoreList).length > 0) {
          return; // Disable FitVids on this video.
        }
        if (this.tagName.toLowerCase() === 'embed' && $this.parent('object').length || $this.parent('.fluid-width-video-wrapper').length) { return; }
        if ((!$this.css('height') && !$this.css('width')) && (isNaN($this.attr('height')) || isNaN($this.attr('width'))))
        {
          $this.attr('height', 9);
          $this.attr('width', 16);
        }
        var height = ( this.tagName.toLowerCase() === 'object' || ($this.attr('height') && !isNaN(parseInt($this.attr('height'), 10))) ) ? parseInt($this.attr('height'), 10) : $this.height(),
            width = !isNaN(parseInt($this.attr('width'), 10)) ? parseInt($this.attr('width'), 10) : $this.width(),
            aspectRatio = height / width;
        if(!$this.attr('name')){
          var videoName = 'fitvid' + $.fn.fitVids._count;
          $this.attr('name', videoName);
          $.fn.fitVids._count++;
        }
        $this.wrap('<div class="fluid-width-video-container"><div class="fluid-width-video-wrapper"></div></div>').parent('.fluid-width-video-wrapper').css('padding-top', (aspectRatio * 100)+'%');
        $this.removeAttr('height').removeAttr('width');
      });
    });
  };

  // Internal counter for unique video names.
  $.fn.fitVids._count = 0;

// Works with either jQuery or Zepto
})( window.jQuery || window.Zepto );


/*!
* Jouele
*
*
*
*/
!function(){"use strict";var e=function(){this.init()};e.prototype={init:function(){var e=this||h;return e._counter=1e3,e._codecs={},e._howls=[],e._muted=!1,e._volume=1,e._canPlayEvent="canplaythrough",e._navigator="undefined"!=typeof window&&window.navigator?window.navigator:null,e.masterGain=null,e.noAudio=!1,e.usingWebAudio=!0,e.autoSuspend=!0,e.ctx=null,e.mobileAutoEnable=!0,e._setup(),e},volume:function(e){var t=this||h;if(e=parseFloat(e),t.ctx||d(),void 0!==e&&0<=e&&e<=1){if(t._volume=e,t._muted)return t;t.usingWebAudio&&t.masterGain.gain.setValueAtTime(e,h.ctx.currentTime);for(var a=0;a<t._howls.length;a++)if(!t._howls[a]._webAudio)for(var r=t._howls[a]._getSoundIds(),o=0;o<r.length;o++){var n=t._howls[a]._soundById(r[o]);n&&n._node&&(n._node.volume=n._volume*e)}return t}return t._volume},mute:function(e){var t=this||h;t.ctx||d(),t._muted=e,t.usingWebAudio&&t.masterGain.gain.setValueAtTime(e?0:t._volume,h.ctx.currentTime);for(var a=0;a<t._howls.length;a++)if(!t._howls[a]._webAudio)for(var r=t._howls[a]._getSoundIds(),o=0;o<r.length;o++){var n=t._howls[a]._soundById(r[o]);n&&n._node&&(n._node.muted=!!e||n._muted)}return t},unload:function(){for(var e=this||h,t=e._howls.length-1;0<=t;t--)e._howls[t].unload();return e.usingWebAudio&&e.ctx&&void 0!==e.ctx.close&&(e.ctx.close(),e.ctx=null,d()),e},codecs:function(e){return(this||h)._codecs[e.replace(/^x-/,"")]},_setup:function(){var t=this||h;if(t.state=t.ctx&&t.ctx.state||"running",t._autoSuspend(),!t.usingWebAudio)if("undefined"!=typeof Audio)try{void 0===(new Audio).oncanplaythrough&&(t._canPlayEvent="canplay")}catch(e){t.noAudio=!0}else t.noAudio=!0;try{(new Audio).muted&&(t.noAudio=!0)}catch(e){}return t.noAudio||t._setupCodecs(),t},_setupCodecs:function(){var t=this||h,e=null;try{e="undefined"!=typeof Audio?new Audio:null}catch(e){return t}if(!e||"function"!=typeof e.canPlayType)return t;var a=e.canPlayType("audio/mpeg;").replace(/^no$/,""),r=t._navigator&&t._navigator.userAgent.match(/OPR\/([0-6].)/g),o=r&&parseInt(r[0].split("/")[1],10)<33;return t._codecs={mp3:!(o||!a&&!e.canPlayType("audio/mp3;").replace(/^no$/,"")),mpeg:!!a,opus:!!e.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/,""),ogg:!!e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),oga:!!e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),wav:!!e.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),aac:!!e.canPlayType("audio/aac;").replace(/^no$/,""),caf:!!e.canPlayType("audio/x-caf;").replace(/^no$/,""),m4a:!!(e.canPlayType("audio/x-m4a;")||e.canPlayType("audio/m4a;")||e.canPlayType("audio/aac;")).replace(/^no$/,""),mp4:!!(e.canPlayType("audio/x-mp4;")||e.canPlayType("audio/mp4;")||e.canPlayType("audio/aac;")).replace(/^no$/,""),weba:!!e.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/,""),webm:!!e.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/,""),dolby:!!e.canPlayType('audio/mp4; codecs="ec-3"').replace(/^no$/,""),flac:!!(e.canPlayType("audio/x-flac;")||e.canPlayType("audio/flac;")).replace(/^no$/,"")},t},_enableMobileAudio:function(){var t=this||h,e=/iPhone|iPad|iPod|Android|BlackBerry|BB10|Silk|Mobi/i.test(t._navigator&&t._navigator.userAgent),a=!!("ontouchend"in window||t._navigator&&0<t._navigator.maxTouchPoints||t._navigator&&0<t._navigator.msMaxTouchPoints);if(!t._mobileEnabled&&t.ctx&&(e||a)){t._mobileEnabled=!1,t._mobileUnloaded||44100===t.ctx.sampleRate||(t._mobileUnloaded=!0,t.unload()),t._scratchBuffer=t.ctx.createBuffer(1,1,22050);var r=function(){h._autoResume();var e=t.ctx.createBufferSource();e.buffer=t._scratchBuffer,e.connect(t.ctx.destination),void 0===e.start?e.noteOn(0):e.start(0),"function"==typeof t.ctx.resume&&t.ctx.resume(),e.onended=function(){e.disconnect(0),t._mobileEnabled=!0,t.mobileAutoEnable=!1,document.removeEventListener("touchstart",r,!0),document.removeEventListener("touchend",r,!0)}};return document.addEventListener("touchstart",r,!0),document.addEventListener("touchend",r,!0),t}},_autoSuspend:function(){var e=this;if(e.autoSuspend&&e.ctx&&void 0!==e.ctx.suspend&&h.usingWebAudio){for(var t=0;t<e._howls.length;t++)if(e._howls[t]._webAudio)for(var a=0;a<e._howls[t]._sounds.length;a++)if(!e._howls[t]._sounds[a]._paused)return e;return e._suspendTimer&&clearTimeout(e._suspendTimer),e._suspendTimer=setTimeout(function(){e.autoSuspend&&(e._suspendTimer=null,e.state="suspending",e.ctx.suspend().then(function(){e.state="suspended",e._resumeAfterSuspend&&(delete e._resumeAfterSuspend,e._autoResume())}))},3e4),e}},_autoResume:function(){var t=this;if(t.ctx&&void 0!==t.ctx.resume&&h.usingWebAudio)return"running"===t.state&&t._suspendTimer?(clearTimeout(t._suspendTimer),t._suspendTimer=null):"suspended"===t.state?(t.ctx.resume().then(function(){t.state="running";for(var e=0;e<t._howls.length;e++)t._howls[e]._emit("resume")}),t._suspendTimer&&(clearTimeout(t._suspendTimer),t._suspendTimer=null)):"suspending"===t.state&&(t._resumeAfterSuspend=!0),t}};var h=new e,t=function(e){e.src&&0!==e.src.length?this.init(e):console.error("An array of source files must be passed with any new Howl.")};t.prototype={init:function(e){var t=this;return h.ctx||d(),t._autoplay=e.autoplay||!1,t._format="string"!=typeof e.format?e.format:[e.format],t._html5=e.html5||!1,t._muted=e.mute||!1,t._loop=e.loop||!1,t._pool=e.pool||5,t._preload="boolean"!=typeof e.preload||e.preload,t._rate=e.rate||1,t._sprite=e.sprite||{},t._src="string"!=typeof e.src?e.src:[e.src],t._volume=void 0!==e.volume?e.volume:1,t._xhrWithCredentials=e.xhrWithCredentials||!1,t._duration=0,t._state="unloaded",t._sounds=[],t._endTimers={},t._queue=[],t._playLock=!1,t._onend=e.onend?[{fn:e.onend}]:[],t._onfade=e.onfade?[{fn:e.onfade}]:[],t._onload=e.onload?[{fn:e.onload}]:[],t._onloaderror=e.onloaderror?[{fn:e.onloaderror}]:[],t._onplayerror=e.onplayerror?[{fn:e.onplayerror}]:[],t._onpause=e.onpause?[{fn:e.onpause}]:[],t._onplay=e.onplay?[{fn:e.onplay}]:[],t._onstop=e.onstop?[{fn:e.onstop}]:[],t._onmute=e.onmute?[{fn:e.onmute}]:[],t._onvolume=e.onvolume?[{fn:e.onvolume}]:[],t._onrate=e.onrate?[{fn:e.onrate}]:[],t._onseek=e.onseek?[{fn:e.onseek}]:[],t._onresume=[],t._webAudio=h.usingWebAudio&&!t._html5,void 0!==h.ctx&&h.ctx&&h.mobileAutoEnable&&h._enableMobileAudio(),h._howls.push(t),t._autoplay&&t._queue.push({event:"play",action:function(){t.play()}}),t._preload&&t.load(),t},load:function(){var e=this,t=null;if(h.noAudio)e._emit("loaderror",null,"No audio support.");else{"string"==typeof e._src&&(e._src=[e._src]);for(var a=0;a<e._src.length;a++){var r,o;if(e._format&&e._format[a])r=e._format[a];else{if("string"!=typeof(o=e._src[a])){e._emit("loaderror",null,"Non-string found in selected audio sources - ignoring.");continue}(r=/^data:audio\/([^;,]+);/i.exec(o))||(r=/\.([^.]+)$/.exec(o.split("?",1)[0])),r&&(r=r[1].toLowerCase())}if(r||console.warn('No file extension was found. Consider using the "format" property or specify an extension.'),r&&h.codecs(r)){t=e._src[a];break}}if(t)return e._src=t,e._state="loading","https:"===window.location.protocol&&"http:"===t.slice(0,5)&&(e._html5=!0,e._webAudio=!1),new n(e),e._webAudio&&i(e),e;e._emit("loaderror",null,"No codec support for selected audio sources.")}},play:function(a,r){var o=this,e=null;if("number"==typeof a)e=a,a=null;else{if("string"==typeof a&&"loaded"===o._state&&!o._sprite[a])return null;if(void 0===a){a="__default";for(var t=0,n=0;n<o._sounds.length;n++)o._sounds[n]._paused&&!o._sounds[n]._ended&&(t++,e=o._sounds[n]._id);1===t?a=null:e=null}}var l=e?o._soundById(e):o._inactiveSound();if(!l)return null;if(e&&!a&&(a=l._sprite||"__default"),"loaded"!==o._state){l._sprite=a,l._ended=!1;var i=l._id;return o._queue.push({event:"play",action:function(){o.play(i)}}),i}if(e&&!l._paused)return r||o._loadQueue("play"),l._id;o._webAudio&&h._autoResume();var s=Math.max(0,0<l._seek?l._seek:o._sprite[a][0]/1e3),u=Math.max(0,(o._sprite[a][0]+o._sprite[a][1])/1e3-s),c=1e3*u/Math.abs(l._rate);l._paused=!1,l._ended=!1,l._sprite=a,l._seek=s,l._start=o._sprite[a][0]/1e3,l._stop=(o._sprite[a][0]+o._sprite[a][1])/1e3,l._loop=!(!l._loop&&!o._sprite[a][2]);var d=l._node;if(o._webAudio){var p=function(){o._refreshBuffer(l);var e=l._muted||o._muted?0:l._volume;d.gain.setValueAtTime(e,h.ctx.currentTime),l._playStart=h.ctx.currentTime,void 0===d.bufferSource.start?l._loop?d.bufferSource.noteGrainOn(0,s,86400):d.bufferSource.noteGrainOn(0,s,u):l._loop?d.bufferSource.start(0,s,86400):d.bufferSource.start(0,s,u),c!==1/0&&(o._endTimers[l._id]=setTimeout(o._ended.bind(o,l),c)),r||setTimeout(function(){o._emit("play",l._id)},0)};"running"===h.state?p():(o.once("resume",p),o._clearTimer(l._id))}else{var g=function(){d.currentTime=s,d.muted=l._muted||o._muted||h._muted||d.muted,d.volume=l._volume*h.volume(),d.playbackRate=l._rate;try{var e=d.play();if("undefined"!=typeof Promise&&e instanceof Promise){o._playLock=!0;var t=function(){o._playLock=!1,r||o._emit("play",l._id)};e.then(t,t)}else r||o._emit("play",l._id);if(d.playbackRate=l._rate,d.paused)return void o._emit("playerror",l._id,"Playback was unable to start. This is most commonly an issue on mobile devices where playback was not within a user interaction.");"__default"!==a||l._loop?o._endTimers[l._id]=setTimeout(o._ended.bind(o,l),c):(o._endTimers[l._id]=function(){o._ended(l),d.removeEventListener("ended",o._endTimers[l._id],!1)},d.addEventListener("ended",o._endTimers[l._id],!1))}catch(e){o._emit("playerror",l._id,e)}},k=window&&window.ejecta||!d.readyState&&h._navigator.isCocoonJS;if(3<=d.readyState||k)g();else{var f=function(){g(),d.removeEventListener(h._canPlayEvent,f,!1)};d.addEventListener(h._canPlayEvent,f,!1),o._clearTimer(l._id)}}return l._id},pause:function(e){var t=this;if("loaded"!==t._state||t._playLock)return t._queue.push({event:"pause",action:function(){t.pause(e)}}),t;for(var a=t._getSoundIds(e),r=0;r<a.length;r++){t._clearTimer(a[r]);var o=t._soundById(a[r]);if(o&&!o._paused&&(o._seek=t.seek(a[r]),o._rateSeek=0,o._paused=!0,t._stopFade(a[r]),o._node))if(t._webAudio){if(!o._node.bufferSource)continue;void 0===o._node.bufferSource.stop?o._node.bufferSource.noteOff(0):o._node.bufferSource.stop(0),t._cleanBuffer(o._node)}else isNaN(o._node.duration)&&o._node.duration!==1/0||o._node.pause();arguments[1]||t._emit("pause",o?o._id:null)}return t},stop:function(e,t){var a=this;if("loaded"!==a._state)return a._queue.push({event:"stop",action:function(){a.stop(e)}}),a;for(var r=a._getSoundIds(e),o=0;o<r.length;o++){a._clearTimer(r[o]);var n=a._soundById(r[o]);n&&(n._seek=n._start||0,n._rateSeek=0,n._paused=!0,n._ended=!0,a._stopFade(r[o]),n._node&&(a._webAudio?n._node.bufferSource&&(void 0===n._node.bufferSource.stop?n._node.bufferSource.noteOff(0):n._node.bufferSource.stop(0),a._cleanBuffer(n._node)):isNaN(n._node.duration)&&n._node.duration!==1/0||(n._node.currentTime=n._start||0,n._node.pause())),t||a._emit("stop",n._id))}return a},mute:function(e,t){var a=this;if("loaded"!==a._state)return a._queue.push({event:"mute",action:function(){a.mute(e,t)}}),a;if(void 0===t){if("boolean"!=typeof e)return a._muted;a._muted=e}for(var r=a._getSoundIds(t),o=0;o<r.length;o++){var n=a._soundById(r[o]);n&&(n._muted=e,n._interval&&a._stopFade(n._id),a._webAudio&&n._node?n._node.gain.setValueAtTime(e?0:n._volume,h.ctx.currentTime):n._node&&(n._node.muted=!!h._muted||e),a._emit("mute",n._id))}return a},volume:function(){var e,t,a,r=this,o=arguments;if(0===o.length)return r._volume;if(1===o.length||2===o.length&&void 0===o[1]?0<=r._getSoundIds().indexOf(o[0])?t=parseInt(o[0],10):e=parseFloat(o[0]):2<=o.length&&(e=parseFloat(o[0]),t=parseInt(o[1],10)),!(void 0!==e&&0<=e&&e<=1))return(a=t?r._soundById(t):r._sounds[0])?a._volume:0;if("loaded"!==r._state)return r._queue.push({event:"volume",action:function(){r.volume.apply(r,o)}}),r;void 0===t&&(r._volume=e),t=r._getSoundIds(t);for(var n=0;n<t.length;n++)(a=r._soundById(t[n]))&&(a._volume=e,o[2]||r._stopFade(t[n]),r._webAudio&&a._node&&!a._muted?a._node.gain.setValueAtTime(e,h.ctx.currentTime):a._node&&!a._muted&&(a._node.volume=e*h.volume()),r._emit("volume",a._id));return r},fade:function(e,t,a,r){var o=this;if("loaded"!==o._state)return o._queue.push({event:"fade",action:function(){o.fade(e,t,a,r)}}),o;o.volume(e,r);for(var n=o._getSoundIds(r),l=0;l<n.length;l++){var i=o._soundById(n[l]);if(i){if(r||o._stopFade(n[l]),o._webAudio&&!i._muted){var s=h.ctx.currentTime,u=s+a/1e3;i._volume=e,i._node.gain.setValueAtTime(e,s),i._node.gain.linearRampToValueAtTime(t,u)}o._startFadeInterval(i,e,t,a,n[l],void 0===r)}}return o},_startFadeInterval:function(t,a,r,o,e,n){var l=this,i=a,s=r-a,u=Math.abs(s/.01),c=Math.max(4,0<u?o/u:o),d=Date.now();t._fadeTo=r,t._interval=setInterval(function(){var e=(Date.now()-d)/o;d=Date.now(),i+=s*e,i=Math.max(0,i),i=Math.min(1,i),i=Math.round(100*i)/100,l._webAudio?t._volume=i:l.volume(i,t._id,!0),n&&(l._volume=i),(r<a&&i<=r||a<r&&r<=i)&&(clearInterval(t._interval),t._interval=null,t._fadeTo=null,l.volume(r,t._id),l._emit("fade",t._id))},c)},_stopFade:function(e){var t=this,a=t._soundById(e);return a&&a._interval&&(t._webAudio&&a._node.gain.cancelScheduledValues(h.ctx.currentTime),clearInterval(a._interval),a._interval=null,t.volume(a._fadeTo,e),a._fadeTo=null,t._emit("fade",e)),t},loop:function(){var e,t,a,r=this,o=arguments;if(0===o.length)return r._loop;if(1===o.length){if("boolean"!=typeof o[0])return!!(a=r._soundById(parseInt(o[0],10)))&&a._loop;e=o[0],r._loop=e}else 2===o.length&&(e=o[0],t=parseInt(o[1],10));for(var n=r._getSoundIds(t),l=0;l<n.length;l++)(a=r._soundById(n[l]))&&(a._loop=e,r._webAudio&&a._node&&a._node.bufferSource&&(a._node.bufferSource.loop=e)&&(a._node.bufferSource.loopStart=a._start||0,a._node.bufferSource.loopEnd=a._stop));return r},rate:function(){var e,t,a,r=this,o=arguments;if(0===o.length)t=r._sounds[0]._id;else if(1===o.length){0<=r._getSoundIds().indexOf(o[0])?t=parseInt(o[0],10):e=parseFloat(o[0])}else 2===o.length&&(e=parseFloat(o[0]),t=parseInt(o[1],10));if("number"!=typeof e)return(a=r._soundById(t))?a._rate:r._rate;if("loaded"!==r._state)return r._queue.push({event:"rate",action:function(){r.rate.apply(r,o)}}),r;void 0===t&&(r._rate=e),t=r._getSoundIds(t);for(var n=0;n<t.length;n++)if(a=r._soundById(t[n])){a._rateSeek=r.seek(t[n]),a._playStart=r._webAudio?h.ctx.currentTime:a._playStart,a._rate=e,r._webAudio&&a._node&&a._node.bufferSource?a._node.bufferSource.playbackRate.setValueAtTime(e,h.ctx.currentTime):a._node&&(a._node.playbackRate=e);var l=r.seek(t[n]),i=1e3*((r._sprite[a._sprite][0]+r._sprite[a._sprite][1])/1e3-l)/Math.abs(a._rate);!r._endTimers[t[n]]&&a._paused||(r._clearTimer(t[n]),r._endTimers[t[n]]=setTimeout(r._ended.bind(r,a),i)),r._emit("rate",a._id)}return r},seek:function(){var e,t,a=this,r=arguments;if(0===r.length)t=a._sounds[0]._id;else if(1===r.length){0<=a._getSoundIds().indexOf(r[0])?t=parseInt(r[0],10):a._sounds.length&&(t=a._sounds[0]._id,e=parseFloat(r[0]))}else 2===r.length&&(e=parseFloat(r[0]),t=parseInt(r[1],10));if(void 0===t)return a;if("loaded"!==a._state)return a._queue.push({event:"seek",action:function(){a.seek.apply(a,r)}}),a;var o=a._soundById(t);if(o){if(!("number"==typeof e&&0<=e)){if(a._webAudio){var n=a.playing(t)?h.ctx.currentTime-o._playStart:0,l=o._rateSeek?o._rateSeek-o._seek:0;return o._seek+(l+n*Math.abs(o._rate))}return o._node.currentTime}var i=a.playing(t);if(i&&a.pause(t,!0),o._seek=e,o._ended=!1,a._clearTimer(t),i&&a.play(t,!0),!a._webAudio&&o._node&&(o._node.currentTime=e),i&&!a._webAudio){var s=function(){a._playLock?setTimeout(s,0):a._emit("seek",t)};setTimeout(s,0)}else a._emit("seek",t)}return a},playing:function(e){if("number"==typeof e){var t=this._soundById(e);return!!t&&!t._paused}for(var a=0;a<this._sounds.length;a++)if(!this._sounds[a]._paused)return!0;return!1},duration:function(e){var t=this._duration,a=this._soundById(e);return a&&(t=this._sprite[a._sprite][1]/1e3),t},state:function(){return this._state},unload:function(){for(var e=this,t=e._sounds,a=0;a<t.length;a++){if(t[a]._paused||e.stop(t[a]._id),!e._webAudio)/MSIE |Trident\//.test(h._navigator&&h._navigator.userAgent)||(t[a]._node.src="data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA"),t[a]._node.removeEventListener("error",t[a]._errorFn,!1),t[a]._node.removeEventListener(h._canPlayEvent,t[a]._loadFn,!1);delete t[a]._node,e._clearTimer(t[a]._id)}var r=h._howls.indexOf(e);0<=r&&h._howls.splice(r,1);var o=!0;for(a=0;a<h._howls.length;a++)if(h._howls[a]._src===e._src){o=!1;break}return l&&o&&delete l[e._src],h.noAudio=!1,e._state="unloaded",e._sounds=[],e=null},on:function(e,t,a,r){var o=this["_on"+e];return"function"==typeof t&&o.push(r?{id:a,fn:t,once:r}:{id:a,fn:t}),this},off:function(e,t,a){var r=this,o=r["_on"+e],n=0;if("number"==typeof t&&(a=t,t=null),t||a)for(n=0;n<o.length;n++){var l=a===o[n].id;if(t===o[n].fn&&l||!t&&l){o.splice(n,1);break}}else if(e)r["_on"+e]=[];else{var i=Object.keys(r);for(n=0;n<i.length;n++)0===i[n].indexOf("_on")&&Array.isArray(r[i[n]])&&(r[i[n]]=[])}return r},once:function(e,t,a){return this.on(e,t,a,1),this},_emit:function(e,t,a){for(var r=this,o=r["_on"+e],n=o.length-1;0<=n;n--)o[n].id&&o[n].id!==t&&"load"!==e||(setTimeout(function(e){e.call(this,t,a)}.bind(r,o[n].fn),0),o[n].once&&r.off(e,o[n].fn,o[n].id));return r._loadQueue(e),r},_loadQueue:function(e){var t=this;if(0<t._queue.length){var a=t._queue[0];a.event===e&&(t._queue.shift(),t._loadQueue()),e||a.action()}return t},_ended:function(e){var t=this,a=e._sprite;if(!t._webAudio&&e._node&&!e._node.paused&&!e._node.ended&&e._node.currentTime<e._stop)return setTimeout(t._ended.bind(t,e),100),t;var r=!(!e._loop&&!t._sprite[a][2]);if(t._emit("end",e._id),!t._webAudio&&r&&t.stop(e._id,!0).play(e._id),t._webAudio&&r){t._emit("play",e._id),e._seek=e._start||0,e._rateSeek=0,e._playStart=h.ctx.currentTime;var o=1e3*(e._stop-e._start)/Math.abs(e._rate);t._endTimers[e._id]=setTimeout(t._ended.bind(t,e),o)}return t._webAudio&&!r&&(e._paused=!0,e._ended=!0,e._seek=e._start||0,e._rateSeek=0,t._clearTimer(e._id),t._cleanBuffer(e._node),h._autoSuspend()),t._webAudio||r||t.stop(e._id,!0),t},_clearTimer:function(e){var t=this;if(t._endTimers[e]){if("function"!=typeof t._endTimers[e])clearTimeout(t._endTimers[e]);else{var a=t._soundById(e);a&&a._node&&a._node.removeEventListener("ended",t._endTimers[e],!1)}delete t._endTimers[e]}return t},_soundById:function(e){for(var t=0;t<this._sounds.length;t++)if(e===this._sounds[t]._id)return this._sounds[t];return null},_inactiveSound:function(){var e=this;e._drain();for(var t=0;t<e._sounds.length;t++)if(e._sounds[t]._ended)return e._sounds[t].reset();return new n(e)},_drain:function(){var e=this,t=e._pool,a=0,r=0;if(!(e._sounds.length<t)){for(r=0;r<e._sounds.length;r++)e._sounds[r]._ended&&a++;for(r=e._sounds.length-1;0<=r;r--){if(a<=t)return;e._sounds[r]._ended&&(e._webAudio&&e._sounds[r]._node&&e._sounds[r]._node.disconnect(0),e._sounds.splice(r,1),a--)}}},_getSoundIds:function(e){if(void 0===e){for(var t=[],a=0;a<this._sounds.length;a++)t.push(this._sounds[a]._id);return t}return[e]},_refreshBuffer:function(e){return e._node.bufferSource=h.ctx.createBufferSource(),e._node.bufferSource.buffer=l[this._src],e._panner?e._node.bufferSource.connect(e._panner):e._node.bufferSource.connect(e._node),e._node.bufferSource.loop=e._loop,e._loop&&(e._node.bufferSource.loopStart=e._start||0,e._node.bufferSource.loopEnd=e._stop),e._node.bufferSource.playbackRate.setValueAtTime(e._rate,h.ctx.currentTime),this},_cleanBuffer:function(e){if(h._scratchBuffer&&e.bufferSource){e.bufferSource.onended=null,e.bufferSource.disconnect(0);try{e.bufferSource.buffer=h._scratchBuffer}catch(e){}}return e.bufferSource=null,this}};var n=function(e){this._parent=e,this.init()};n.prototype={init:function(){var e=this,t=e._parent;return e._muted=t._muted,e._loop=t._loop,e._volume=t._volume,e._rate=t._rate,e._seek=0,e._paused=!0,e._ended=!0,e._sprite="__default",e._id=++h._counter,t._sounds.push(e),e.create(),e},create:function(){var e=this,t=e._parent,a=h._muted||e._muted||e._parent._muted?0:e._volume;return t._webAudio?(e._node=void 0===h.ctx.createGain?h.ctx.createGainNode():h.ctx.createGain(),e._node.gain.setValueAtTime(a,h.ctx.currentTime),e._node.paused=!0,e._node.connect(h.masterGain)):(e._node=new Audio,e._errorFn=e._errorListener.bind(e),e._node.addEventListener("error",e._errorFn,!1),e._loadFn=e._loadListener.bind(e),e._node.addEventListener(h._canPlayEvent,e._loadFn,!1),e._node.src=t._src,e._node.preload="auto",e._node.volume=a*h.volume(),e._node.load()),e},reset:function(){var e=this,t=e._parent;return e._muted=t._muted,e._loop=t._loop,e._volume=t._volume,e._rate=t._rate,e._seek=0,e._rateSeek=0,e._paused=!0,e._ended=!0,e._sprite="__default",e._id=++h._counter,e},_errorListener:function(){var e=this;e._parent._emit("loaderror",e._id,e._node.error?e._node.error.code:0),e._node.removeEventListener("error",e._errorFn,!1)},_loadListener:function(){var e=this._parent;e._duration=Math.ceil(10*this._node.duration)/10,0===Object.keys(e._sprite).length&&(e._sprite={__default:[0,1e3*e._duration]}),"loaded"!==e._state&&(e._state="loaded",e._emit("load"),e._loadQueue()),this._node.removeEventListener(h._canPlayEvent,this._loadFn,!1)}};var l={},i=function(t){var e=t._src;if(l[e])return t._duration=l[e].duration,void c(t);if(/^data:[^;]+;base64,/.test(e)){for(var a=atob(e.split(",")[1]),r=new Uint8Array(a.length),o=0;o<a.length;++o)r[o]=a.charCodeAt(o);u(r.buffer,t)}else{var n=new XMLHttpRequest;n.open("GET",e,!0),n.withCredentials=t._xhrWithCredentials,n.responseType="arraybuffer",n.onload=function(){var e=(n.status+"")[0];"0"===e||"2"===e||"3"===e?u(n.response,t):t._emit("loaderror",null,"Failed loading audio file with status: "+n.status+".")},n.onerror=function(){t._webAudio&&(t._html5=!0,t._webAudio=!1,t._sounds=[],delete l[e],t.load())},s(n)}},s=function(t){try{t.send()}catch(e){t.onerror()}},u=function(e,t){h.ctx.decodeAudioData(e,function(e){e&&0<t._sounds.length&&(l[t._src]=e,c(t,e))},function(){t._emit("loaderror",null,"Decoding audio data failed.")})},c=function(e,t){t&&!e._duration&&(e._duration=t.duration),0===Object.keys(e._sprite).length&&(e._sprite={__default:[0,1e3*e._duration]}),"loaded"!==e._state&&(e._state="loaded",e._emit("load"),e._loadQueue())},d=function(){try{"undefined"!=typeof AudioContext?h.ctx=new AudioContext:"undefined"!=typeof webkitAudioContext?h.ctx=new webkitAudioContext:h.usingWebAudio=!1}catch(e){h.usingWebAudio=!1}var e=/iP(hone|od|ad)/.test(h._navigator&&h._navigator.platform),t=h._navigator&&h._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/),a=t?parseInt(t[1],10):null;if(e&&a&&a<9){var r=/safari/.test(h._navigator&&h._navigator.userAgent.toLowerCase());(h._navigator&&h._navigator.standalone&&!r||h._navigator&&!h._navigator.standalone&&!r)&&(h.usingWebAudio=!1)}h.usingWebAudio&&(h.masterGain=void 0===h.ctx.createGain?h.ctx.createGainNode():h.ctx.createGain(),h.masterGain.gain.setValueAtTime(h._muted?0:1,h.ctx.currentTime),h.masterGain.connect(h.ctx.destination)),h._setup()};"function"==typeof define&&define.amd&&define([],function(){return{Howler:h,Howl:t}}),"undefined"!=typeof exports&&(exports.Howler=h,exports.Howl=t),"undefined"!=typeof window?(window.HowlerGlobal=e,window.Howler=h,window.Howl=t,window.Sound=n):"undefined"!=typeof global&&(global.HowlerGlobal=e,global.Howler=h,global.Howl=t,global.Sound=n)}(),function(d){"use strict";var e,c={},p=d(),a=null,g={isMobile:(e=navigator.userAgent||navigator.vendor||window.opera,/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(e)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0,4))),formatTime:function(e,t){if("number"!=typeof e)return e;var a=(t?Math.floor:Math.round)(e),r=a%60,o=(a-r)%3600/60,n=(a-r-60*o)/3600;return(n?n+":":"")+(n&&o<10?"0"+o:o)+":"+(r<10?"0"+r:r)},makeSeconds:function(e){if("number"==typeof e)return e;if(null==e)return 0;for(var t=e.split(":").reverse(),a=0,r=0;r<t.length;r++)a+=t[r]*Math.pow(60,r);return+a},getSkinName:function(e){var t="",a=e.attr("class"),r=a?a.indexOf("jouele-skin-"):-1;return 0<r&&(t=a.substr(r+12,0<a.indexOf(" ",r)?a.indexOf(" ",r):a.length)),t},getFirstJouele:function(){var e,t=d(".jouele").add(".jouele-control").filter(".jouele_first:not(.jouele_broken)").eq(0);if(0===t.length)for(var a=0;a<d.Jouele.playlist.length;a++){for(var r=0;r<d.Jouele.playlist[a].length;r++)if(d.Jouele.playlist[a][r]instanceof y&&d.Jouele.playlist[a][r].getTrack()&&!d.Jouele.playlist[a][r].getTrack().player.isBroken){e=d.Jouele.playlist[a][r];break}if(e)break}else e=t.data("jouele");return e},getEventPoint:function(e){var t,a;return t=e.originalEvent.touches&&0<e.originalEvent.touches.length&&void 0!==e.originalEvent.touches[0]&&e.originalEvent.touches[0].clientX?e.originalEvent.touches[0].clientX:e.originalEvent.changedTouches&&0<e.originalEvent.changedTouches.length&&void 0!==e.originalEvent.changedTouches[0]&&e.originalEvent.changedTouches[0].clientX?e.originalEvent.changedTouches[0].clientX:e.pageX,(a=Math.round(1e4*parseFloat((t-p.offset().left)/p.width()*100))/1e4)<0?a=0:100<a&&(a=100),a},getInstance:function(){return 0<d.Jouele.history.length&&void 0!==d.Jouele.history[0].getTrack()?d.Jouele.history[0]:g.getFirstJouele()},showWarning:function(e){var t=!1;return"undefined"!=typeof console&&"function"==typeof console.warn&&(console.warn(e),t=!0),t},showError:function(e){var t=!1;return"undefined"!=typeof console&&"function"==typeof console.error&&(console.error(e),t=!0),t}},t=function(e){if(32!==e.keyCode||"INPUT"===e.target.nodeName||"TEXTAREA"===e.target.nodeName||"SELECT"===e.target.nodeName||"OPTION"===e.target.nodeName||"BUTTON"===e.target.nodeName||void 0!==d(e.target).attr("contenteditable")&&"false"!==d(e.target).attr("contenteditable"))return!0;if(0<d.Jouele.history.length&&void 0!==d.Jouele.history[0].getTrack()&&!d.Jouele.history[0].getTrack().player.isPaused&&(d.Jouele.history[0].getTrack().player.isPlaying||null!==d.Jouele.history[0].getTrack().player.seekTime||null!==d.Jouele.history[0].getTrack().player.seekPosition||d.Jouele.history[0].getTrack().player.isStarted&&!d.Jouele.history[0].getTrack().player.isLoaded)){if(!d.Jouele.options.pauseOnSpace)return!1;d.Jouele.options.scrollOnSpace||e.preventDefault(),d.Jouele.history[0].pause()}else{if(!d.Jouele.options.playOnSpace)return!1;if(d.Jouele.options.scrollOnSpace||e.preventDefault(),0<d.Jouele.history.length&&void 0!==d.Jouele.history[0].getTrack())d.Jouele.history[0].play();else{var t=g.getFirstJouele();t&&t instanceof y&&t.play()}}},r=function(e){if(0===p.length)return!0;var t;if(!((t=p.data("jouele")?p.data("jouele"):p.data("jouele-destroyed")?p.data("jouele-destroyed"):g.getInstance())instanceof y)||!t.getTrack()||t.getTrack().player.isBroken)return p=d(),!0;if(p.data("jouele-destroyed")&&0<t.$control.length)return t.$control.removeData("jouele-destroyed"),p=d(),!0;switch(e.type){case"mouseup":case"touchend":case"touchcancel":t.getTrack().player.seekingOnTimeline.isSeeking=!1,t.getTrack().player.seekingOnTimeline.seekingInstance=!1;var a=g.getEventPoint(e);t.getTrack().player.seekingOnTimeline.seekingPosition=a,t.seek.call(t,a),t.getTrack().player.seekingOnTimeline.seekingPosition=null,p=d();break;case"mousemove":case"touchmove":if(!t.getTrack().player.seekingOnTimeline.isSeeking)return!0;t.getTrack().player.seekingOnTimeline.seekingPosition=g.getEventPoint(e),f.updateState.call(t)}},k={show:function(e){var t=this;if(t.getTrack().player.preloaderTimeout||t.getTrack().player.seekingOnTimeline.isSeeking)return t;var a=e||50;return t.getTrack().player.preloaderTimeout=setTimeout(function(){if(t.getTrack().player.seekingOnTimeline.isSeeking||t.isPaused())return t.getTrack().player.preloaderTimeout=null,t;f.updateControlsClasses.call(t,"jouele-is-buffering","add")},a),t},hide:function(){var e=this;return e.getTrack().player.preloaderTimeout&&(clearTimeout(e.getTrack().player.preloaderTimeout),e.getTrack().player.preloaderTimeout=null,f.updateControlsClasses.call(e,"jouele-is-buffering","remove")),e}},f={updateLength:function(){var e=this,t=null,a=null;return e.getTotalTime()?t=e.getTotalTime():e.getOptions().length&&(t=e.getOptions().length),e.getTrack().player.howler?a=e.getTrack().player.howler.duration():0<g.makeSeconds(e.getOptions().length)&&(a=g.makeSeconds(e.getOptions().length)),a&&(null!==t&&a!==t&&e.getTrack().player.seekTime===t&&(e.getTrack().player.seekTime=Math.round(100*parseFloat(a))/100),e.getTrack().player.totalTime=a,e.getTrack().player.remainingTime=a-e.getTrack().player.elapsedTime),e.getTrack().player.isBroken&&(e.getTrack().player.totalTime=0,e.getTrack().player.elapsedTime=0,e.getTrack().player.remainingTime=0),f.updateTimeDisplay.call(e),e},updateTitle:function(){var a=this,e=d.trim(a.getOptions().title),t={title:d()};return e&&a.getTrack()&&e!==a.getTrack().player.title&&(a.getTrack().player.title=e),a.getTrack()&&(t.title=a.getTrack().controls.title),d.each(t.title.add(0<d.Jouele.history.length&&d.Jouele.history[0].getTrack()===a.getTrack()||0===d.Jouele.history.length&&(!a.getTrack()||a.getTrack().player.isStarted||a.getTrack().player.seekTime||a.getTrack().player.seekingOnTimeline.isSeeking)?d.Jouele.controls.title:""),function(e,t){d(t).html(a.getTrack()?a.getTrack().player.title:"")}),a.getTrack()&&!a.getTrack().player.isBroken||d.each(d.Jouele.controls.title,function(e,t){d(t).html("")}),a},updateTimeline:function(){var e=this,a=0,t={position:d(),elapsed:d(),remaining:d()};return!e.getTrack()||e.getTrack().player.isBroken?a=0:null!==e.getTrack().player.seekingOnTimeline.seekingPosition?a=e.getTrack().player.seekingOnTimeline.seekingPosition:null!==e.getTrack().player.seekPosition?a=e.getTrack().player.seekPosition:null!==e.getTrack().player.seekTime?e.getTotalTime()&&(a=e.getTrack().player.seekTime/(e.getTotalTime()/100)):e.getTotalTime()&&(a=e.getTrack().player.howler.seek()/(e.getTotalTime()/100)),a=Math.round(100*parseFloat(a))/100,e.getTrack()&&(t.position=e.getTrack().controls.position,t.elapsed=e.getTrack().controls.elapsed,t.remaining=e.getTrack().controls.remaining),d.each(t.position.add(0<d.Jouele.history.length&&d.Jouele.history[0].getTrack()===e.getTrack()||0===d.Jouele.history.length&&(!e.getTrack()||e.getTrack().player.isStarted||e.getTrack().player.seekTime||e.getTrack().player.seekingOnTimeline.isSeeking)?d.Jouele.controls.position:""),function(e,t){d(t).css("left",a+"%").trigger("jouele:position",a)}),d.each(t.elapsed.add(0<d.Jouele.history.length&&d.Jouele.history[0].getTrack()===e.getTrack()||0===d.Jouele.history.length&&(!e.getTrack()||e.getTrack().player.isStarted||e.getTrack().player.seekTime||e.getTrack().player.seekingOnTimeline.isSeeking)?d.Jouele.controls.elapsed:""),function(e,t){d(t).css("width",a+"%").trigger("jouele:position",a)}),d.each(t.remaining.add(0<d.Jouele.history.length&&d.Jouele.history[0].getTrack()===e.getTrack()||0===d.Jouele.history.length&&(!e.getTrack()||e.getTrack().player.isStarted||e.getTrack().player.seekTime||e.getTrack().player.seekingOnTimeline.isSeeking)?d.Jouele.controls.remaining:""),function(e,t){d(t).css("width",100-a+"%").trigger("jouele:position",100-a)}),e},updateTimeDisplay:function(e){var i=this,t={"time-total":d(),"time-elapsed":d(),"time-remaining":d(),seek:d()},o="",n="",s="",a=null;return i.getTrack()?(i.getTotalTime()||i.getTrack().player.isBroken?(o=g.makeSeconds(i.getTotalTime()),a=null!==i.getTrack().player.seekingOnTimeline.seekingPosition?i.getTotalTime()*(i.getTrack().player.seekingOnTimeline.seekingPosition/100):null):i.getOptions().length&&(o=g.makeSeconds(i.getOptions().length),a=null!==i.getTrack().player.seekingOnTimeline.seekingPosition?g.makeSeconds(i.getOptions().length)*(i.getTrack().player.seekingOnTimeline.seekingPosition/100):null),n=null!==a?g.makeSeconds(a):null!==i.getTrack().player.seekPosition?i.getTotalTime()?g.makeSeconds(Math.round(100*parseFloat(i.getTotalTime()*(i.getTrack().player.seekPosition/100)))/100):0:null!==i.getTrack().player.seekTime?g.makeSeconds(i.getTrack().player.seekTime):i.getTrack().player.isPlaying?null!==i.getTrack().player.howler&&"unloaded"!==i.getTrack().player.howler.state()&&"number"==typeof i.getTrack().player.howler.seek()?g.makeSeconds(i.getTrack().player.howler.seek()):0:g.makeSeconds(null!==i.getTrack().player.howler&&"unloaded"!==i.getTrack().player.howler.state()&&"number"==typeof i.getTrack().player.howler.seek()?i.getTrack().player.howler.seek():0),n=i.getTrack().player.isBroken?0:Math.round(100*n)/100,s=o?Math.round(100*(o-g.makeSeconds(n)))/100:0,i.getTrack().player.remainingTime=s,i.getTrack().player.elapsedTime=n):o=0,(o||!i.getTrack()||i.getTrack().player.isStarted||i.getTrack().player.seekTime||i.getTrack().player.seekingOnTimeline.isSeeking)&&function(){i.getTrack()&&(t["time-total"]=i.getTrack().controls["time-total"],t["time-elapsed"]=i.getTrack().controls["time-elapsed"],t["time-remaining"]=i.getTrack().controls["time-remaining"],t.seek=i.getTrack().controls.seek);var l=g.makeSeconds(g.formatTime(n,!e))>o?g.formatTime(n,!0):g.formatTime(n,!e),r=g.formatTime(g.makeSeconds(o)-g.makeSeconds(l),!0);d.each(t["time-total"].add(0<d.Jouele.history.length&&d.Jouele.history[0].getTrack()===i.getTrack()||!i.getTrack()||i.getTrack().player.isBroken||0===d.Jouele.history.length&&(i.getTrack().player.isStarted||i.getTrack().player.seekTime||i.getTrack().player.seekingOnTimeline.isSeeking)?d.Jouele.controls["time-total"]:""),function(e,t){var a=d(t);i.getTrack()&&!i.getTrack().player.isBroken&&o?(a.text(g.formatTime(o,!0)),a.trigger("jouele:totaltime",o)):(a.text(""),a.trigger("jouele:totaltime",0))}),d.each(t["time-elapsed"].add(0<d.Jouele.history.length&&d.Jouele.history[0].getTrack()===i.getTrack()||!i.getTrack()||i.getTrack().player.isBroken||0===d.Jouele.history.length&&(i.getTrack().player.isStarted||i.getTrack().player.seekTime||i.getTrack().player.seekingOnTimeline.isSeeking)?d.Jouele.controls["time-elapsed"]:""),function(e,t){var a=d(t);i.getTrack()&&!i.getTrack().player.isBroken&&o?(a.text(l),a.trigger("jouele:elapsedtime",n)):(a.text(""),a.trigger("jouele:elapsedtime",0))}),d.each(t["time-remaining"].add(0<d.Jouele.history.length&&d.Jouele.history[0].getTrack()===i.getTrack()||!i.getTrack()||i.getTrack().player.isBroken||0===d.Jouele.history.length&&(i.getTrack().player.isStarted||i.getTrack().player.seekTime||i.getTrack().player.seekingOnTimeline.isSeeking)?d.Jouele.controls["time-remaining"]:""),function(e,t){var a=d(t);i.getTrack()&&!i.getTrack().player.isBroken&&o?(a.text(r),a.trigger("jouele:remainingtime",s)):(a.text(""),a.trigger("jouele:remainingtime",0))}),d.each(t.seek.add(0<d.Jouele.history.length&&d.Jouele.history[0].getTrack()===i.getTrack()||!i.getTrack()||0===d.Jouele.history.length&&(i.getTrack().player.isStarted||i.getTrack().player.seekTime||i.getTrack().player.seekingOnTimeline.isSeeking)?d.Jouele.controls.seek:""),function(e,t){var a=d(t);if(a.attr("data-range")&&i.getTrack()&&(i.getTrack().player.isStarted||i.getTrack().player.seekTime||i.getTrack().player.seekingOnTimeline.isSeeking)){var r=g.makeSeconds(a.data("range-start")),o=g.makeSeconds(a.data("range-end")),n=g.makeSeconds(l);r<=n&&n<=o?a.addClass("jouele-is-within").trigger("jouele:rangein"):a.removeClass("jouele-is-within").trigger("jouele:rangeout")}})}(),i},updateState:function(e){return f.updateTimeline.call(this),f.updateTimeDisplay.call(this,e),this},updateControlsClasses:function(a,r){var e=this;return d.each(e.getTrack().controls,function(e,t){"add"===r?t.addClass(a):"remove"===r&&t.removeClass(a)}),"jouele-is-unavailable"!==a&&"jouele-is-available"!==a&&"jouele-is-loaded"!==a&&(0<d.Jouele.history.length&&d.Jouele.history[0].getTrack()===e.getTrack()||0===d.Jouele.history.length&&(e.getTrack().player.isStarted||e.getTrack().player.seekTime||e.getTrack().player.seekingOnTimeline.isSeeking))&&d.each(d.Jouele.controls,function(e,t){"add"===r?t.addClass(a):"remove"===r&&t.removeClass(a)}),e}},n={createJouele:function(e,t){var a="",r="";if(e.hasClass("jouele")&&e.attr("href")?(a=e.attr("href"),r=e.html()):e.hasClass("jouele-control")&&(a=e.attr("data-href"),r=e.attr("data-title")),e.hasClass("jouele")){if(!a)return g.showError("Please include `href` attribute into your Jouele link"),this}else{if(!e.hasClass("jouele-control"))return this;if(!a)return n.pushControl(e,!0),this}return new y(e,d.extend({},{length:0,repeat:!1,hideTimelineOnPause:!1,skin:"",href:"",title:"",spaceControl:!1,pauseOnSpace:!1,playOnSpace:!1,scrollOnSpace:!0},t,e.data(),{skin:g.getSkinName(e),href:a,title:r})),e},createTrack:function(e){return{player:{href:e,howler:null,title:"",isPlaying:!1,isPlayed:!1,isPaused:!1,isLoaded:!1,isStarted:!1,isBroken:!1,isEnded:!1,totalTime:0,elapsedTime:0,remainingTime:0,updateStateTimer:null,seekTime:null,seekPosition:null,preloaderTimeout:null,seekingOnTimeline:{isSeeking:!1,seekingPosition:null,seekingInstance:!1},callbacks:{},play:function(){var a=this;return a instanceof y||(0<d.Jouele.tracks[a.href].instances.length?a=d.Jouele.tracks[a.href].instances[0]:void 0!==d.Jouele.tracks[a.href].controls.play&&0<d.Jouele.tracks[a.href].controls.play.length?a=d.Jouele.tracks[a.href].controls.play.eq(0).data("jouele"):void 0!==d.Jouele.tracks[a.href].controls["play-pause"]&&0<d.Jouele.tracks[a.href].controls["play-pause"].length?a=d.Jouele.tracks[a.href].controls["play-pause"].eq(0).data("jouele"):void 0!==d.Jouele.tracks[a.href].controls.seek&&0<d.Jouele.tracks[a.href].controls.seek.length?a=d.Jouele.tracks[a.href].controls.seek.eq(0).data("jouele"):void 0!==d.Jouele.tracks[a.href].controls.timeline&&0<d.Jouele.tracks[a.href].controls.timeline.length?a=d.Jouele.tracks[a.href].controls.timeline.eq(0).data("jouele"):d.each(d.Jouele.tracks[a.href].controls,function(e,t){return a=t.data("jouele"),!1})),h.play.call(a)},pause:function(){var a=this;return a instanceof y||(0<d.Jouele.tracks[a.href].instances.length?a=d.Jouele.tracks[a.href].instances[0]:void 0!==d.Jouele.tracks[a.href].controls.pause&&0<d.Jouele.tracks[a.href].controls.pause.length?a=d.Jouele.tracks[a.href].controls.pause.eq(0).data("jouele"):void 0!==d.Jouele.tracks[a.href].controls["play-pause"]&&0<d.Jouele.tracks[a.href].controls["play-pause"].length?a=d.Jouele.tracks[a.href].controls["play-pause"].eq(0).data("jouele"):d.each(d.Jouele.tracks[a.href].controls,function(e,t){return a=t.data("jouele"),!1})),h.pause.call(a)},playFrom:function(e){var a=this;return a instanceof y||(0<d.Jouele.tracks[a.href].instances.length?a=d.Jouele.tracks[a.href].instances[0]:void 0!==d.Jouele.tracks[a.href].controls.seek&&0<d.Jouele.tracks[a.href].controls.seek.length?a=d.Jouele.tracks[a.href].controls.seek.eq(0).data("jouele"):void 0!==d.Jouele.tracks[a.href].controls.timeline&&0<d.Jouele.tracks[a.href].controls.timeline.length?a=d.Jouele.tracks[a.href].controls.timeline.eq(0).data("jouele"):void 0!==d.Jouele.tracks[a.href].controls.play&&0<d.Jouele.tracks[a.href].controls.play.length?a=d.Jouele.tracks[a.href].controls.play.eq(0).data("jouele"):void 0!==d.Jouele.tracks[a.href].controls["play-pause"]&&0<d.Jouele.tracks[a.href].controls["play-pause"].length?a=d.Jouele.tracks[a.href].controls["play-pause"].eq(0).data("jouele"):d.each(d.Jouele.tracks[a.href].controls,function(e,t){return a=t.data("jouele"),!1})),h.playFrom.call(a,e)},seek:function(e){var a=this;return a instanceof y||(0<d.Jouele.tracks[a.href].instances.length?a=d.Jouele.tracks[a.href].instances[0]:void 0!==d.Jouele.tracks[a.href].controls.seek&&0<d.Jouele.tracks[a.href].controls.seek.length?a=d.Jouele.tracks[a.href].controls.seek.eq(0).data("jouele"):void 0!==d.Jouele.tracks[a.href].controls.timeline&&0<d.Jouele.tracks[a.href].controls.timeline.length?a=d.Jouele.tracks[a.href].controls.timeline.eq(0).data("jouele"):void 0!==d.Jouele.tracks[a.href].controls.play&&0<d.Jouele.tracks[a.href].controls.play.length?a=d.Jouele.tracks[a.href].controls.play.eq(0).data("jouele"):void 0!==d.Jouele.tracks[a.href].controls["play-pause"]&&0<d.Jouele.tracks[a.href].controls["play-pause"].length?a=d.Jouele.tracks[a.href].controls["play-pause"].eq(0).data("jouele"):d.each(d.Jouele.tracks[a.href].controls,function(e,t){return a=t.data("jouele"),!1})),h.seek.call(a,e)}},controls:{"play-pause":d(),play:d(),pause:d(),"time-total":d(),"time-elapsed":d(),"time-remaining":d(),timeline:d(),elapsed:d(),remaining:d(),position:d(),seek:d(),title:d()},instances:[]}},getPlaylistIndex:function(){var a,r=this;if(d(".jouele-playlist").add(".jouele:not(.jouele-playlist .jouele):not(.jouele_destroyed)").add(".jouele-control[data-href]:not(.jouele .jouele-control):not(.jouele-playlist .jouele-control):not(.jouele_destroyed)").each(function(e,t){return 0<r.getPlaylistDOM().length&&r.getPlaylistDOM()[0]===t?(a=e,!1):r.$link&&r.$link[0]===t||r.$control&&r.$control[0]===t?(a=e,!1):void 0}),0<r.getPlaylistDOM().length){var o,n,e,t=r.getPlaylistDOM().find(".jouele[href]:not(.jouele_destroyed)"),l=r.getPlaylistDOM().find(".jouele_inited"),i=r.getPlaylistDOM().find(".jouele-control[data-href]:not(.jouele .jouele-control):not(.jouele_destroyed)");if(t.add(l).add(i).each(function(e,t){var a=d(t);if(a.hasClass("jouele_inited")&&(n=a.data("jouele")),r.$link&&t===r.$link[0]||r.$control&&t===r.$control[0])return o=e,!1}),d.isArray(d.Jouele.playlist[a]))if(d.Jouele.playlist[a][0].getPlaylistDOM()[0]!==r.getPlaylistDOM()[0])d.Jouele.playlist.splice(a,0,[r]);else{for(var s=0;s<d.Jouele.playlist[a].length;s++)if(d.Jouele.playlist[a][s]===n){e=s;break}void 0===d.Jouele.playlist[a][e+1]?0===o?d.Jouele.playlist[a].splice(0,0,r):d.Jouele.playlist[a].push(r):d.Jouele.playlist[a].splice(e+1,0,r)}else d.Jouele.playlist[a]=[r]}else d.Jouele.playlist.splice(a,0,[r]);return a},checkOptions:function(e){var t=e;return parseInt(e.length)||(t.length=0),"boolean"!=typeof e.repeat&&(t.repeat=!1),"boolean"!=typeof e.hideTimelineOnPause&&(t.hideTimelineOnPause=!1),"boolean"!=typeof e.spaceControl&&(t.spaceControl=!1),"boolean"!=typeof e.pauseOnSpace&&(t.pauseOnSpace=!1),"boolean"!=typeof e.playOnSpace&&(t.playOnSpace=!1),"boolean"!=typeof e.scrollOnSpace&&(t.scrollOnSpace=!0),t},checkNewOptions:function(e,t){var a=t;return""===d.trim(t.title)&&(a.title=e.title),parseInt(t.length)||(a.length=e.length),"boolean"!=typeof t.repeat&&(a.repeat=e.repeat),"boolean"!=typeof t.hideTimelineOnPause&&(a.hideTimelineOnPause=e.hideTimelineOnPause),"boolean"!=typeof t.spaceControl&&(a.spaceControl=e.spaceControl),"boolean"!=typeof t.pauseOnSpace&&(a.pauseOnSpace=e.pauseOnSpace),"boolean"!=typeof t.playOnSpace&&(a.playOnSpace=e.playOnSpace),"boolean"!=typeof t.scrollOnSpace&&(a.scrollOnSpace=e.scrollOnSpace),a},checkGlobalOptions:function(){var e=this;return(e.getOptions().pauseOnSpace||e.getPlaylistDOM().attr("data-pause-on-space"))&&(d.Jouele.options.pauseOnSpace=!0),(e.getOptions().playOnSpace||e.getPlaylistDOM().attr("data-play-on-space"))&&(d.Jouele.options.playOnSpace=!0),e.getOptions().scrollOnSpace&&!e.getPlaylistDOM().attr("data-scroll-on-space")||(d.Jouele.options.scrollOnSpace=!1),(e.getOptions().spaceControl||e.getPlaylistDOM().attr("data-space-control"))&&(d.Jouele.options.pauseOnSpace=!0,d.Jouele.options.playOnSpace=!0,d.Jouele.options.scrollOnSpace=!1),e},pushControl:function(a,t){var r=t?void 0:this,o=t?d.Jouele.controls:this.getTrack().controls,e=a.attr("data-type");switch(e){case"time-toggle":"true"===a.attr("data-remaining")?o["time-remaining"]=o["time-remaining"].add(a):(a.attr("data-remaining","false"),o["time-elapsed"]=o["time-elapsed"].add(a)),a.off("click.jouele").on("click.jouele",function(){if(!((r=t?g.getInstance():r)instanceof y))return!1;"true"===a.attr("data-remaining")?(d.each(o["time-remaining"],function(e,t){a[0]===t&&o["time-remaining"].splice(e,1)}),o["time-elapsed"]=o["time-elapsed"].add(a),a.attr("data-remaining","false")):(d.each(o["time-elapsed"],function(e,t){a[0]===t&&o["time-elapsed"].splice(e,1)}),o["time-remaining"]=o["time-remaining"].add(a),a.attr("data-remaining","true")),f.updateTimeDisplay.call(r)}).addClass("jouele-is-interactive");break;case"seek":var n=a.attr("data-to"),l=a.attr("data-range");if(l){var i=0<l.indexOf("…")?l.indexOf("…"):l.indexOf("..."),s=0<l.indexOf("…")?l.indexOf("…")+1:l.indexOf("...")+3,u=g.formatTime(g.makeSeconds(l.substr(0,i)),!0),c=g.formatTime(g.makeSeconds(l.substr(s)),!0);a.data({"range-start":u,"range-end":c})}a.off("click.jouele").on("click.jouele",function(){if(!((r=t?g.getInstance():r)instanceof y))return!1;if(n&&r.getTrack().player.playFrom.call(r,n),l){var e=0<l.indexOf("…")?l.indexOf("…"):l.indexOf("...");n||r.getTrack().player.playFrom.call(r,l.substr(0,e))}}).addClass("jouele-is-interactive");break;case"timeline":a.off("mousedown.jouele touchstart.jouele").on("mousedown.jouele touchstart.jouele",function(e){if("mousedown"===e.type&&1!==e.which)return!1;if(!((r=t?g.getInstance():r)instanceof y))return!1;if(r.getTrack().player.seekingOnTimeline.isSeeking=!0,r.getTrack().player.seekingOnTimeline.seekingInstance=r,p=a,!r.getTrack().player.howler){if(!h.createHowler.call(r))return h.breakPlayer.call(r),!1;r.getTrack().player.howler.load(),r.getTrack().player.isStarted=!0}r.getTrack().player.seekingOnTimeline.seekingPosition=g.getEventPoint(e),f.updateState.call(r),f.updateTitle.call(r)}).addClass("jouele-is-interactive");break;case"play-pause":a.off("click.jouele").on("click.jouele",function(){if(!((r=t?g.getInstance():r)instanceof y))return!1;r.getTrack().player.isPaused?r.getTrack().player.play.call(r):r.getTrack().player.isStarted?r.getTrack().player.pause.call(r):r.getTrack().player.play.call(r)}).addClass("jouele-is-interactive");break;case"play":a.off("click.jouele").on("click.jouele",function(){if(!((r=t?g.getInstance():r)instanceof y))return!1;r.getTrack().player.play.call(r)}).addClass("jouele-is-interactive");break;case"pause":a.off("click.jouele").on("click.jouele",function(){if(!((r=t?g.getInstance():r)instanceof y))return!1;r.getTrack().player.pause.call(r)}).addClass("jouele-is-interactive");break;case"title":a.off("jouele:title").on("jouele:title",function(){if(!((r=t?g.getInstance():r)instanceof y))return!1;a.html(r.getTrack().player.title)})}return void 0!==o[e]&&0<o[e].length?o[e]=o[e].add(a):o[e]=a,a.addClass(t?"":"jouele-is-available").addClass("jouele_inited"),r},createJoueleDOM:function(){var e=this,t=d(document.createElement("div")),a=d(document.createElement("div")),r=d(document.createElement("div"));return e.$container=t.data("jouele",e).addClass("jouele jouele_inited"+(!0===e.$link.data("first")?" jouele_first":"")+(e.getOptions().hideTimelineOnPause?" jouele_timeline_hide":"")+(e.getOptions().skin?" jouele-skin-"+e.getOptions().skin:"")),e.$container.append(a.addClass("jouele-info").append([d(document.createElement("div")).addClass("jouele-info-time").append(d(document.createElement("div")).addClass("jouele-info-time__current jouele-control").attr("data-href",e.getHref()).attr("data-type","time-elapsed").text(e.getTotalTime()?"0:00":""),d(document.createElement("div")).addClass("jouele-info-time__total jouele-control").attr("data-href",e.getHref()).attr("data-type","time-total").text(e.getTotalTime()?g.formatTime(g.makeSeconds(e.getTotalTime()),!0):"")),d(document.createElement("div")).addClass("jouele-info-control").append(d(document.createElement("div")).addClass("jouele-info-control-button").append(d(document.createElement("span")).addClass("jouele-info-control-button-icon jouele-info-control-button-icon_unavailable").html('<svg class="jouele-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" enable-background="new 0 0 16 16"><g class="jouele-svg-color"><path d="m4 6.7l3.8 3.7-3.8 2.1z"/><path d="m.2 2.2l.6-.5 11 11.1-.5.5z"/><path d="m4 4.3v-.8l8 4.5-2.7 1.5z"/></g></svg>'),d(document.createElement("a")).attr("href",e.getHref()).addClass("jouele-info-control-link jouele-hidden").append(d(document.createElement("span")).addClass("jouele-info-control-button-icon jouele-info-control-button-icon_play jouele-control jouele-hidden").attr("data-href",e.getHref()).attr("data-type","play-pause").html('<svg class="jouele-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" enable-background="new 0 0 16 16"><path class="jouele-svg-color" d="m4 3.5l8 4.5-8 4.5z"/></svg>'))),d(document.createElement("div")).addClass("jouele-info-control-text jouele-control").attr("data-href",e.getHref()).attr("data-type","title"))]),r.addClass("jouele-progress").append(d(document.createElement("div")).addClass("jouele-progress-line jouele-control").attr("data-href",e.getHref()).attr("data-type","timeline").append(d(document.createElement("div")).addClass("jouele-progress-line-bar_base"),d(document.createElement("div")).addClass("jouele-progress-line-bar_play jouele-control").attr("data-href",e.getHref()).attr("data-type","elapsed"),d(document.createElement("div")).addClass("jouele-progress-line-lift jouele-hidden jouele-control").attr("data-href",e.getHref()).attr("data-type","position")))).promise().done(function(){n.initInnerControls.call(e)}),e},insertJoueleDOM:function(){var e=this;return e.$container&&(e.$container.find(".jouele-hidden").removeClass("jouele-hidden"),e.$container.find(".jouele-info-control-button-icon_unavailable").addClass("jouele-hidden"),e.$container.find(".jouele-info-control-link").off("click.jouele").on("click.jouele",function(e){e.preventDefault()}),e.$link.after(e.$container),e.$link.detach()),e},findPlaylistInDOM:function(){return void 0!==this.$control&&0<this.$control.length?this.$control.parents(".jouele-playlist").eq(0):this.$link.parents(".jouele-playlist").eq(0)},initInnerControls:function(){var e=this;return d.each(e.$container.find(".jouele-control"),function(){n.createJouele(d(this),e.getOptions())}),e},pushToHistory:function(){var e=this;return(0===d.Jouele.history.length||d.Jouele.history[0].getTrack()!==e.getTrack()||d.Jouele.history[0].getTrack()===e.getTrack()&&e.getTrack().player.isPaused&&d.Jouele.history[0]!==e)&&(d.Jouele.history.unshift(e),d.each(e.getTrack().controls.title.add(d.Jouele.controls.title),function(e,t){d(t).trigger("jouele:title")})),e}},h={createHowler:function(){var t=this;return t.getTrack().player.howler=new Howl({src:[t.getHref()],format:["mp3"],html5:!0,preload:!1,loop:t.getOptions().repeat,onloaderror:function(){function e(){t.getTrack().player.isPlayed?t.pause():h.breakPlayer.call(t)}t.getTrack()&&("object"==typeof t.getTrack().player.callbacks&&"function"==typeof t.getTrack().player.callbacks.onloaderror?!1!==t.getTrack().player.callbacks.onloaderror()&&e():e())},onload:function(){t.getTrack()&&("object"==typeof t.getTrack().player.callbacks&&"function"==typeof t.getTrack().player.callbacks.onload?!1!==t.getTrack().player.callbacks.onload()&&h.Events.onLoad.call(t):h.Events.onLoad.call(t))},onplay:function(){t.getTrack()&&("object"==typeof t.getTrack().player.callbacks&&"function"==typeof t.getTrack().player.callbacks.onplay?!1!==t.getTrack().player.callbacks.onplay()&&h.Events.onPlay.call(t):h.Events.onPlay.call(t))},onpause:function(){t.getTrack()&&("object"==typeof t.getTrack().player.callbacks&&"function"==typeof t.getTrack().player.callbacks.onpause?!1!==t.getTrack().player.callbacks.onpause()&&h.Events.onPause.call(t):h.Events.onPause.call(t))},onseek:function(){if(t.getTrack()){if(t.getTrack().player.howler._sounds[0]._ended&&0===t.getTrack().player.howler.seek())return!0;if(t.getTrack().player.isEnded)return!0;"object"==typeof t.getTrack().player.callbacks&&"function"==typeof t.getTrack().player.callbacks.onseek?!1!==t.getTrack().player.callbacks.onseek()&&h.Events.onSeek.call(t):h.Events.onSeek.call(t)}},onend:function(){t.getTrack()&&("object"==typeof t.getTrack().player.callbacks&&"function"==typeof t.getTrack().player.callbacks.onend?!1!==t.getTrack().player.callbacks.onend()&&h.Events.onEnd.call(t):h.Events.onEnd.call(t))}}),f.updateTimeDisplay.call(t),t},play:function(){var e=this;if(e.getTrack().player.isPlaying)return e;if(0<d.Jouele.history.length&&void 0!==d.Jouele.history[0].getTrack()&&d.Jouele.history[0].getTrack().player!==e.getTrack().player&&(d.Jouele.history[0].getTrack().player.isPaused||d.Jouele.history[0].pause()),!e.getTrack().player.howler&&!h.createHowler.call(e))return h.breakPlayer.call(e),e;if(n.pushToHistory.call(e),h.Interface.makeInterfacePlay.call(e),e.getTrack().player.isLoaded?e.getTrack().player.howler.play():e.getTrack().player.isStarted||e.getTrack().player.howler.load(),e.getTrack().player.isStarted=!0,k.show.call(e),e.getTrack().player.howler._sounds.length<1)return e;var t=Math.round(1e3*(Math.ceil(e.getTrack().player.howler.seek())-e.getTrack().player.howler.seek()))/1e3;return setTimeout(function(){f.updateState.call(e,!0),e.getTrack().player.updateStateTimer&&clearInterval(e.getTrack().player.updateStateTimer),e.getTrack().player.isPaused||(e.getTrack().player.updateStateTimer=setInterval(function(){f.updateState.call(e,!0)},1e3))},1e3*t),e},pause:function(){var e=this;return!e.getTrack().player.howler||e.getTrack().player.isPaused||(k.hide.call(e),h.Interface.makeInterfacePause.call(e),e.getTrack().player.seekingOnTimeline.isSeeking=!1,e.getTrack().player.seekingOnTimeline.seekingInstance=!1,e.getTrack().player.howler&&e.getTrack().player.howler.pause()),e},playFrom:function(e){var t=this;if(!e)return t;if(t.getTotalTime()&&g.makeSeconds(e)>t.getTotalTime()&&(e=t.getTotalTime()),g.makeSeconds(e)<0&&(e=0),t.getTrack().player.seekTime=g.makeSeconds(e),f.updateState.call(t),0<d.Jouele.history.length&&void 0!==d.Jouele.history[0].getTrack()&&d.Jouele.history[0].getTrack().player!==t.getTrack().player&&(d.Jouele.history[0].getTrack().player.isPaused||d.Jouele.history[0].pause()),!t.getTrack().player.howler&&!h.createHowler.call(t))return h.breakPlayer.call(t),t;if(t.getTrack().player.isEnded=!1,t.getTrack().player.isLoaded&&t.getTotalTime()?(k.show.call(t,200),t.getTrack().player.howler.seek(t.getTrack().player.seekTime)):(t.getTrack().player.isStarted||t.getTrack().player.howler.load(),k.show.call(t)),n.pushToHistory.call(t),h.Interface.makeInterfacePlay.call(t),t.getTrack().player.isStarted=!0,t.getTrack().player.isLoaded){var a,r=t.getTrack().player.howler.seek();setTimeout(function(){t.getTrack()&&r===t.getTrack().player.howler.seek()&&k.show.call(t),a=setInterval(function(){t.getTrack()&&r===t.getTrack().player.howler.seek()||(k.hide.call(t),clearTimeout(a))},50)},100),f.updateState.call(t)}return t},seek:function(e){var t=this,a=Math.round(100*parseFloat(e))/100;if(isNaN(a))return t;if(100<a&&(a=100),a<0&&(a=0),t.getTrack().player.seekPosition=a,0<d.Jouele.history.length&&void 0!==d.Jouele.history[0].getTrack()&&d.Jouele.history[0].getTrack().player!==t.getTrack().player&&(d.Jouele.history[0].getTrack().player.isPaused||d.Jouele.history[0].pause()),!t.getTrack().player.howler&&!h.createHowler.call(t))return h.breakPlayer.call(t),t;if(n.pushToHistory.call(t),h.Interface.makeInterfacePlay.call(t),t.getTrack().player.isEnded=!1,t.getTotalTime()?(t.getTrack().player.seekTime=Math.round(100*parseFloat(t.getTotalTime()*(a/100)))/100,t.getTrack().player.isLoaded?(t.getTrack().player.howler.seek(t.getTrack().player.seekTime),t.getTrack().player.seekTime===t.getTotalTime()?(setTimeout(function(){t.getTrack().player.howler._playLock&&t.getTrack().player.howler._emit.call(t.getTrack().player.howler,"seek",t.getTrack().player.howler._sounds[0])},500),k.show.call(t,500)):k.show.call(t,200)):(t.getTrack().player.isStarted||t.getTrack().player.howler.load(),k.show.call(t))):(t.getTrack().player.isStarted||t.getTrack().player.howler.load(),k.show.call(t)),t.getTrack().player.isStarted=!0,f.updateState.call(t),t.getTrack().player.isLoaded&&t.getTrack().player.seekTime!==t.getTotalTime()){var r,o=t.getTrack().player.howler.seek();setTimeout(function(){t.getTrack()&&o===t.getTrack().player.howler.seek()&&k.show.call(t),r=setInterval(function(){t.getTrack()&&o===t.getTrack().player.howler.seek()||(k.hide.call(t),clearTimeout(r))},50)},100),f.updateState.call(t)}return t},playNext:function(){var e=this;if(e.getOptions().repeat)return e.getTrack().player.isPlayed||e.play(),e;if(g.isMobile)return e;for(var t=0;t<d.Jouele.history[0].getPlaylist().length;t++)if(d.Jouele.history[0].getPlaylist()[t].getTrack()===d.Jouele.history[0].getTrack()){if(d.Jouele.history[0].getPlaylist()[t+1]instanceof y&&d.Jouele.history[0].getPlaylist()[t+1].getTrack()===d.Jouele.history[0].getTrack())continue;break}return d.Jouele.history[0].getPlaylist()[t+1]instanceof y?d.Jouele.history[0].getPlaylist()[t+1].play():d.Jouele.history[0].getPlaylistDOM().data("repeat")&&d.Jouele.history[0].getPlaylist()[0]instanceof y&&d.Jouele.history[0].getPlaylist()[0].play(),e},destroy:function(){var o=this,e=void 0!==o.$control&&0<o.$control.length;if((e&&o.getTrack().player.seekingOnTimeline.seekingInstance===o||!e&&o.getTrack().player.seekingOnTimeline.seekingInstance===o.$container.find(".jouele-control[data-type=timeline]").data("jouele"))&&(o.getTrack().player.seekingOnTimeline.isSeeking=!1,o.getTrack().player.seekingOnTimeline.seekingInstance=!1,o.getTrack().player.seekingOnTimeline.seekingPosition=null,o.getTrack().player.isLoaded||f.updateState.call(o),!o.getTrack().player.isStarted||o.getTrack().player.isPlaying||o.getTrack().player.isPlayed||h.Interface.makeInterfacePause.call(o)),e){var t="time-toggle"===o.$control.attr("data-type"),a=t?"true"===o.$control.attr("data-remaining")?"time-remaining":"time-elapsed":o.$control.attr("data-type");o.getTrack().controls[a]=o.getTrack().controls[a].filter(function(e,t){return!(t===o.$control[0])}),t&&(o.getTrack().controls["time-toggle"]=o.getTrack().controls["time-toggle"].filter(function(e,t){return!(t===o.$control[0])})),0<p.length&&p===o.$control&&o.$control.data("jouele-destroyed",o),o.$control.off(".jouele").removeData("jouele").removeData("range-start").removeData("range-end").removeClass("jouele-is-available jouele-is-loaded jouele-is-paused jouele-is-buffering jouele-is-within jouele-is-playing jouele-is-interactive")}else{for(var r=0;r<o.getTrack().instances.length;r++)if(o.getTrack().instances[r]===o){o.getTrack().instances.splice(r,1);break}d.each(o.getTrack().controls,function(e,t){o.getTrack().controls[e]=t.filter(function(e,t){var a=d(t),r=!1;return a.data("jouele")instanceof y&&"function"==typeof a.data("jouele").getParentJouele&&(r=a.data("jouele").getParentJouele()===o),!r})}),0<p.length&&p.data("jouele").getParentJouele()===o&&p.data("jouele-destroyed",o)}for(var n=0;n<o.getPlaylist().length;n++)if(o.getPlaylist()[n]===o){o.getPlaylist().splice(n,1);break}if(0===o.getPlaylist().length)for(var l=0;l<d.Jouele.playlist.length;l++)if(d.Jouele.playlist[l]===o.getPlaylist()){d.Jouele.playlist.splice(l,1);break}var i=!1;if(0===o.getTrack().instances.length&&d.each(o.getTrack().controls,function(e,t){if(0!==t.length)return i=!1;i=!0}),i){var s=function(){clearInterval(o.getTrack().player.updateStateTimer),o.getTrack().player.updateStateTimer=null,k.hide.call(o),o.getTrack().player.howler&&(o.getTrack().player.howler.unload(),o.getTrack().player.howler=void 0),delete c[o.getTrack().player.href],f.updateState.call(o),f.updateTitle.call(o)};if(o.getTrack().player.isPlaying){var u=o.getTrack().player.callbacks.onpause;o.getTrack().player.callbacks.onpause=function(){return u&&u(),s(),!1},o.pause()}else o.getTrack().player.isStarted&&h.Interface.makeInterfacePause.call(o),s()}return e?(o.$control.removeClass("jouele_inited").addClass("jouele_destroyed"),o.$control):(o.$container.after(o.$link).detach(),o.$link.removeData("jouele").addClass("jouele_destroyed"),o.$link)},breakPlayer:function(){var e=this;void 0!==e.$control&&e.$control.length;e.getTrack().player.isBroken=!0,clearInterval(e.getTrack().player.updateStateTimer),e.getTrack().player.updateStateTimer=null,k.hide.call(e),f.updateTimeDisplay.call(e),d.each(e.getTrack().instances,function(e,t){t.$container&&(t.$container.addClass("jouele_broken"),t.$container.find(".jouele-info-control-button-icon_unavailable").removeClass("jouele-hidden"),t.$container.find(".jouele-info-control-link").addClass("jouele-hidden").off("click.jouele"))}),d.each(e.getTrack().controls,function(e,t){t.off(".jouele")}),f.updateControlsClasses.call(e,"jouele-is-available","remove"),f.updateControlsClasses.call(e,"jouele-is-loaded","remove"),f.updateControlsClasses.call(e,"jouele-is-paused","remove"),f.updateControlsClasses.call(e,"jouele-is-buffering","remove"),f.updateControlsClasses.call(e,"jouele-is-within","remove"),f.updateControlsClasses.call(e,"jouele-is-playing","remove"),f.updateControlsClasses.call(e,"jouele-is-interactive","remove"),f.updateControlsClasses.call(e,"jouele-is-unavailable","add");for(var t=0;t<d.Jouele.history.length;t++)d.Jouele.history[t].getTrack()===e.getTrack()&&(d.Jouele.history.splice(t,1),t--);for(var a=0;a<d.Jouele.playlist.length;a++){for(var r=0;r<d.Jouele.playlist[a].length;r++)d.Jouele.playlist[a][r]instanceof y&&d.Jouele.playlist[a][r].getTrack()===e.getTrack()&&(d.Jouele.playlist[a].splice(r,1),r--);0===d.Jouele.playlist[a].length&&(d.Jouele.playlist.splice(a,1),a--)}return f.updateState.call(0<d.Jouele.history.length&&void 0!==d.Jouele.history[0].getTrack()?d.Jouele.history[0]:e),f.updateLength.call(0<d.Jouele.history.length&&void 0!==d.Jouele.history[0].getTrack()?d.Jouele.history[0]:e),f.updateTitle.call(0<d.Jouele.history.length&&void 0!==d.Jouele.history[0].getTrack()?d.Jouele.history[0]:e),e},Interface:{makeInterfacePause:function(){var e=this;return e.getTrack().player.isPaused=!0,e.getTrack().player.isPlaying=!1,f.updateControlsClasses.call(e,"jouele-is-paused","add"),f.updateControlsClasses.call(e,"jouele-is-playing","remove"),e},makeInterfacePlay:function(){return this.getTrack().player.isPaused=!1,f.updateControlsClasses.call(this,"jouele-is-paused","remove"),f.updateControlsClasses.call(this,"jouele-is-playing","add"),this}},Events:{onPause:function(){var e=this;return e.getTrack().player.updateStateTimer&&(clearInterval(e.getTrack().player.updateStateTimer),e.getTrack().player.updateStateTimer=null),h.Interface.makeInterfacePause.call(e),e.getTrack().player.seekingOnTimeline.isSeeking=!1,e.getTrack().player.seekingOnTimeline.seekingInstance=!1,e.getTrack().player.seekTime=null,e.getTrack().player.seekPosition=null,a=null,e},onPlay:function(){var e=this;if(0<d.Jouele.history.length&&void 0!==d.Jouele.history[0].getTrack()&&d.Jouele.history[0].getTrack().player!==e.getTrack().player&&(d.Jouele.history[0].getTrack().player.isPaused||d.Jouele.history[0].pause()),e.getTrack().player.isPaused)return e.getTrack().player.howler&&e.getTrack().player.howler.pause(),e;h.Interface.makeInterfacePlay.call(e),e.getTrack().player.isPlaying=!0,e.getTrack().player.isPlayed=!0,e.getTrack().player.seekTime=null,e.getTrack().player.seekPosition=null,e.getTrack().player.isEnded=!1,f.updateControlsClasses.call(e,"jouele-is-playing","add"),f.updateState.call(e),k.hide.call(e);var t=Math.round(1e3*(Math.ceil(e.getTrack().player.howler.seek())-e.getTrack().player.howler.seek()))/1e3;return setTimeout(function(){f.updateState.call(e,!0),e.getTrack().player.updateStateTimer&&clearInterval(e.getTrack().player.updateStateTimer),e.getTrack().player.isPaused||(e.getTrack().player.updateStateTimer=setInterval(function(){e.getTrack().player.howler&&(a&&a===e.getTrack().player.howler.seek()?k.show.call(e,200):k.hide.call(e),a=e.getTrack().player.howler.seek()),f.updateState.call(e,!0)},1e3))},1e3*t),e},onSeek:function(){var e=this;if(null!==e.getTrack().player.seekTime&&e.getTrack().player.seekTime!==e.getTotalTime()&&100!==e.getTrack().player.seekPosition&&.01<Math.abs(e.getTrack().player.howler.seek()-e.getTrack().player.seekTime))return h.seek.call(e),e;if(e.getTrack().player.isPaused&&e.getTrack().player.howler&&!e.getTrack().player.howler._sounds[0]._ended)return e.getTrack().player.howler&&!e.getTrack().player.howler._sounds[0]._paused&&e.getTrack().player.howler.pause(),e;if(e.getTrack().player.isPlaying||k.show.call(e,200),e.getTrack().player.updateStateTimer&&clearInterval(e.getTrack().player.updateStateTimer),e.getTrack().player.seekTime===e.getTotalTime())return e.getTrack().player.isPlayed?e.getTrack().player.isPlaying&&(e.getTrack().player.howler._sounds[0]._paused=!1):e.getTrack().player.isPlayed=!0,e.getTrack().player.howler._ended.call(e.getTrack().player.howler,e.getTrack().player.howler._sounds[0]),e;f.updateState.call(e);var t=Math.round(1e3*(Math.ceil(e.getTrack().player.howler.seek())-e.getTrack().player.howler.seek()))/1e3;return setTimeout(function(){f.updateState.call(e,!0),e.getTrack().player.updateStateTimer&&clearInterval(e.getTrack().player.updateStateTimer),e.getTrack().player.isPaused||(e.getTrack().player.updateStateTimer=setInterval(function(){e.getTrack().player.howler&&(a&&a===e.getTrack().player.howler.seek()?k.show.call(e,200):k.hide.call(e),a=e.getTrack().player.howler.seek()),f.updateState.call(e,!0)},1e3))},1e3*t),e.getTrack().player.isPlaying&&(e.getTrack().player.seekTime=null,e.getTrack().player.seekPosition=null),void 0===d.Jouele.history[0].getTrack()||d.Jouele.history[0].getTrack().player!==e.getTrack().player||e.getTrack().player.isPlaying&&e.getTrack().player.isStarted||h.play.call(e),e},onEnd:function(){var e=this;return k.hide.call(e),clearInterval(e.getTrack().player.updateStateTimer),e.getTrack().player.updateStateTimer=null,e.getTrack().player.seekingOnTimeline.seekingPosition=100,f.updateState.call(e),e.getOptions().repeat||h.Interface.makeInterfacePause.call(e),e.getTrack().player.seekingOnTimeline.isSeeking=!1,e.getTrack().player.seekingOnTimeline.seekingInstance=!1,e.getTrack().player.seekingOnTimeline.seekingPosition=null,e.getTrack().player.seekTime=null,e.getTrack().player.seekPosition=null,e.getTrack().player.isEnded=!0,h.playNext.call(e),e},onLoad:function(){var e=this;return e.getTrack().player.isLoaded=!0,f.updateLength.call(e),f.updateControlsClasses.call(e,"jouele-is-loaded","add"),e.getTrack().player.seekingOnTimeline.isSeeking||(0<e.getTrack().player.seekPosition?e.getTrack().player.isPaused?(e.getTrack().player.seekTime=Math.round(100*parseFloat(e.getTotalTime()*(e.getTrack().player.seekPosition/100)))/100,e.getTrack().player.howler.seek(e.getTrack().player.seekTime)):h.seek.call(e,e.getTrack().player.seekPosition):e.getTrack().player.seekTime?e.getTrack().player.isPaused?e.getTrack().player.howler.seek(e.getTrack().player.seekTime):h.playFrom.call(e,e.getTrack().player.seekTime):e.getTrack().player.isPaused||h.play.call(e)),f.updateState.call(e),e}}},y=function(e,t){void 0===c[t.href]&&(c[t.href]=n.createTrack(t.href)),t=n.checkOptions(t);var a,r=d(),o=[];if(this.getOptions=function(){return t},this.getHref=function(){return this.getOptions().href},this.getTrack=function(){return c[this.getHref()]},this.getTitle=function(){return void 0!==this.getTrack()?this.getTrack().player.title:""},this.getTotalTime=function(){return void 0!==this.getTrack()?this.getTrack().player.totalTime:0},this.getElapsedTime=function(){return void 0!==this.getTrack()?this.getTrack().player.elapsedTime:0},this.getRemainingTime=function(){return void 0!==this.getTrack()?this.getTrack().player.remainingTime:0},this.getPlaylistDOM=function(){return r},this.getPlaylist=function(){return o},this.isPlaying=function(){return void 0!==this.getTrack()&&this.getTrack().player.isPlaying},this.isPlayed=function(){return void 0!==this.getTrack()&&this.getTrack().player.isPlayed},this.isPaused=function(){return void 0!==this.getTrack()&&this.getTrack().player.isPaused},this.isBroken=function(){return void 0!==this.getTrack()&&this.getTrack().player.isBroken},this.setOptions=function(e){return void 0!==this.getTrack()||(t=d.extend(t,n.checkNewOptions(t,e)),this.getTrack().player.howler&&this.getTrack().player.howler.loop(t.repeat),f.updateTitle.call(this)),this},this.play=function(){return void 0!==this.getTrack()?this.getTrack().player.play.call(this):this},this.pause=function(){return void 0!==this.getTrack()?this.getTrack().player.pause.call(this):this},this.playFrom=function(e){return void 0!==this.getTrack()?this.getTrack().player.playFrom.call(this,e):this},this.seek=function(e){return void 0!==this.getTrack()?this.getTrack().player.seek.call(this,e):this},this.destroy=function(){return void 0!==this.getTrack()?h.destroy.call(this):this},e.hasClass("jouele")&&e.attr("href"))this.$container=null,this.$link=e,r=n.findPlaylistInDOM.call(this),o=d.Jouele.playlist[n.getPlaylistIndex.call(this)],this.getTrack().instances.push(this),f.updateLength.call(this),n.createJoueleDOM.call(this),f.updateTitle.call(this),n.checkGlobalOptions.call(this),n.insertJoueleDOM.call(this);else{if(!e.hasClass("jouele-control")||!e.attr("data-href"))return this;if(this.$control=e,f.updateLength.call(this),f.updateTitle.call(this),n.pushControl.call(this,e),0===this.$control.parents(".jouele").length)r=n.findPlaylistInDOM.call(this),o=d.Jouele.playlist[n.getPlaylistIndex.call(this)],n.checkGlobalOptions.call(this);else{a=this.$control.parents(".jouele").eq(0).data("jouele"),this.getParentJouele=function(){return a},this.getPlaylistDOM=function(){return a.getPlaylistDOM()},this.getPlaylist=function(){return a.getPlaylist()}}}return e.removeClass("jouele_destroyed"),e.data("jouele",this),this};d.Jouele={tracks:c,playlist:[],history:[],controls:{"play-pause":d(),play:d(),pause:d(),"time-total":d(),"time-elapsed":d(),"time-remaining":d(),timeline:d(),elapsed:d(),remaining:d(),position:d(),seek:d(),title:d()},options:{pauseOnSpace:!1,playOnSpace:!1,scrollOnSpace:!0},helpers:{formatTime:g.formatTime,makeSeconds:g.makeSeconds},version:"3.0.6-pro"},d(document).off("keydown.jouele").on("keydown.jouele",t),d(document).off("mouseup.jouele touchend.jouele touchcancel.jouele mousemove.jouele touchmove.jouele").on("mouseup.jouele touchend.jouele touchcancel.jouele mousemove.jouele touchmove.jouele",r),d.fn.jouele=function(t){var a;return"undefined"==typeof Howl?(g.showError("Please include `howler.js 2.0.9+` into your page — it is necessary for Jouele"),this):1===this.length&&(a=this.data("jouele"))instanceof y?"string"==typeof t&&void 0!==a[t]&&"function"==typeof a[t]&&"number"!=typeof a[t].nodeType?a[t].call(a):this:this.each(function(){var e=d(this);if(a=e.data("jouele"),!e.hasClass("jouele")&&!e.hasClass("jouele-control"))return g.showError("Please add `jouele` or `jouele-control` class to this element"),this;e.data("jouele")||n.createJouele(e,t)})};d(function(){d("a.jouele[href]").add(".jouele-control[data-type]").jouele()})}(jQuery);


/*
  Highlight.js 10.6.0 (eb122d3b)
  License: BSD-3-Clause
  Copyright (c) 2006-2020, Ivan Sagalaev
*/
var hljs=function(){"use strict";function e(t){
  return t instanceof Map?t.clear=t.delete=t.set=()=>{
  throw Error("map is read-only")}:t instanceof Set&&(t.add=t.clear=t.delete=()=>{
  throw Error("set is read-only")
  }),Object.freeze(t),Object.getOwnPropertyNames(t).forEach((n=>{var s=t[n]
  ;"object"!=typeof s||Object.isFrozen(s)||e(s)})),t}var t=e,n=e;t.default=n
  ;class s{constructor(e){void 0===e.data&&(e.data={}),this.data=e.data}
  ignoreMatch(){this.ignore=!0}}function r(e){
  return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")
  }function a(e,...t){const n=Object.create(null);for(const t in e)n[t]=e[t]
  ;return t.forEach((e=>{for(const t in e)n[t]=e[t]})),n}const i=e=>!!e.kind
  ;class o{constructor(e,t){
  this.buffer="",this.classPrefix=t.classPrefix,e.walk(this)}addText(e){
  this.buffer+=r(e)}openNode(e){if(!i(e))return;let t=e.kind
  ;e.sublanguage||(t=`${this.classPrefix}${t}`),this.span(t)}closeNode(e){
  i(e)&&(this.buffer+="</span>")}value(){return this.buffer}span(e){
  this.buffer+=`<span class="${e}">`}}class l{constructor(){this.rootNode={
  children:[]},this.stack=[this.rootNode]}get top(){
  return this.stack[this.stack.length-1]}get root(){return this.rootNode}add(e){
  this.top.children.push(e)}openNode(e){const t={kind:e,children:[]}
  ;this.add(t),this.stack.push(t)}closeNode(){
  if(this.stack.length>1)return this.stack.pop()}closeAllNodes(){
  for(;this.closeNode(););}toJSON(){return JSON.stringify(this.rootNode,null,4)}
  walk(e){return this.constructor._walk(e,this.rootNode)}static _walk(e,t){
  return"string"==typeof t?e.addText(t):t.children&&(e.openNode(t),
  t.children.forEach((t=>this._walk(e,t))),e.closeNode(t)),e}static _collapse(e){
  "string"!=typeof e&&e.children&&(e.children.every((e=>"string"==typeof e))?e.children=[e.children.join("")]:e.children.forEach((e=>{
  l._collapse(e)})))}}class c extends l{constructor(e){super(),this.options=e}
  addKeyword(e,t){""!==e&&(this.openNode(t),this.addText(e),this.closeNode())}
  addText(e){""!==e&&this.add(e)}addSublanguage(e,t){const n=e.root
  ;n.kind=t,n.sublanguage=!0,this.add(n)}toHTML(){
  return new o(this,this.options).value()}finalize(){return!0}}function u(e){
  return e?"string"==typeof e?e:e.source:null}
  const g="[a-zA-Z]\\w*",d="[a-zA-Z_]\\w*",h="\\b\\d+(\\.\\d+)?",f="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",p="\\b(0b[01]+)",m={
  begin:"\\\\[\\s\\S]",relevance:0},b={className:"string",begin:"'",end:"'",
  illegal:"\\n",contains:[m]},x={className:"string",begin:'"',end:'"',
  illegal:"\\n",contains:[m]},E={
  begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/
  },v=(e,t,n={})=>{const s=a({className:"comment",begin:e,end:t,contains:[]},n)
  ;return s.contains.push(E),s.contains.push({className:"doctag",
  begin:"(?:TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):",relevance:0}),s
  },w=v("//","$"),N=v("/\\*","\\*/"),y=v("#","$");var R=Object.freeze({
  __proto__:null,MATCH_NOTHING_RE:/\b\B/,IDENT_RE:g,UNDERSCORE_IDENT_RE:d,
  NUMBER_RE:h,C_NUMBER_RE:f,BINARY_NUMBER_RE:p,
  RE_STARTERS_RE:"!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",
  SHEBANG:(e={})=>{const t=/^#![ ]*\//
  ;return e.binary&&(e.begin=((...e)=>e.map((e=>u(e))).join(""))(t,/.*\b/,e.binary,/\b.*/)),
  a({className:"meta",begin:t,end:/$/,relevance:0,"on:begin":(e,t)=>{
  0!==e.index&&t.ignoreMatch()}},e)},BACKSLASH_ESCAPE:m,APOS_STRING_MODE:b,
  QUOTE_STRING_MODE:x,PHRASAL_WORDS_MODE:E,COMMENT:v,C_LINE_COMMENT_MODE:w,
  C_BLOCK_COMMENT_MODE:N,HASH_COMMENT_MODE:y,NUMBER_MODE:{className:"number",
  begin:h,relevance:0},C_NUMBER_MODE:{className:"number",begin:f,relevance:0},
  BINARY_NUMBER_MODE:{className:"number",begin:p,relevance:0},CSS_NUMBER_MODE:{
  className:"number",
  begin:h+"(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",
  relevance:0},REGEXP_MODE:{begin:/(?=\/[^/\n]*\/)/,contains:[{className:"regexp",
  begin:/\//,end:/\/[gimuy]*/,illegal:/\n/,contains:[m,{begin:/\[/,end:/\]/,
  relevance:0,contains:[m]}]}]},TITLE_MODE:{className:"title",begin:g,relevance:0
  },UNDERSCORE_TITLE_MODE:{className:"title",begin:d,relevance:0},METHOD_GUARD:{
  begin:"\\.\\s*[a-zA-Z_]\\w*",relevance:0},END_SAME_AS_BEGIN:e=>Object.assign(e,{
  "on:begin":(e,t)=>{t.data._beginMatch=e[1]},"on:end":(e,t)=>{
  t.data._beginMatch!==e[1]&&t.ignoreMatch()}})});function _(e,t){
  "."===e.input[e.index-1]&&t.ignoreMatch()}function k(e,t){
  t&&e.beginKeywords&&(e.begin="\\b("+e.beginKeywords.split(" ").join("|")+")(?!\\.)(?=\\b|\\s)",
  e.__beforeBegin=_,e.keywords=e.keywords||e.beginKeywords,delete e.beginKeywords,
  void 0===e.relevance&&(e.relevance=0))}function O(e,t){
  Array.isArray(e.illegal)&&(e.illegal=((...e)=>"("+e.map((e=>u(e))).join("|")+")")(...e.illegal))
  }function M(e,t){if(e.match){
  if(e.begin||e.end)throw Error("begin & end are not supported with match")
  ;e.begin=e.match,delete e.match}}function A(e,t){
  void 0===e.relevance&&(e.relevance=1)}
  const L=["of","and","for","in","not","or","if","then","parent","list","value"]
  ;function B(e,t,n="keyword"){const s={}
  ;return"string"==typeof e?r(n,e.split(" ")):Array.isArray(e)?r(n,e):Object.keys(e).forEach((n=>{
  Object.assign(s,B(e[n],t,n))})),s;function r(e,n){
  t&&(n=n.map((e=>e.toLowerCase()))),n.forEach((t=>{const n=t.split("|")
  ;s[n[0]]=[e,I(n[0],n[1])]}))}}function I(e,t){
  return t?Number(t):(e=>L.includes(e.toLowerCase()))(e)?0:1}
  function T(e,{plugins:t}){function n(t,n){
  return RegExp(u(t),"m"+(e.case_insensitive?"i":"")+(n?"g":""))}class s{
  constructor(){
  this.matchIndexes={},this.regexes=[],this.matchAt=1,this.position=0}
  addRule(e,t){
  t.position=this.position++,this.matchIndexes[this.matchAt]=t,this.regexes.push([t,e]),
  this.matchAt+=(e=>RegExp(e.toString()+"|").exec("").length-1)(e)+1}compile(){
  0===this.regexes.length&&(this.exec=()=>null)
  ;const e=this.regexes.map((e=>e[1]));this.matcherRe=n(((e,t="|")=>{
  const n=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;let s=0,r=""
  ;for(let a=0;a<e.length;a++){s+=1;const i=s;let o=u(e[a])
  ;for(a>0&&(r+=t),r+="(";o.length>0;){const e=n.exec(o);if(null==e){r+=o;break}
  r+=o.substring(0,e.index),
  o=o.substring(e.index+e[0].length),"\\"===e[0][0]&&e[1]?r+="\\"+(Number(e[1])+i):(r+=e[0],
  "("===e[0]&&s++)}r+=")"}return r})(e),!0),this.lastIndex=0}exec(e){
  this.matcherRe.lastIndex=this.lastIndex;const t=this.matcherRe.exec(e)
  ;if(!t)return null
  ;const n=t.findIndex(((e,t)=>t>0&&void 0!==e)),s=this.matchIndexes[n]
  ;return t.splice(0,n),Object.assign(t,s)}}class r{constructor(){
  this.rules=[],this.multiRegexes=[],
  this.count=0,this.lastIndex=0,this.regexIndex=0}getMatcher(e){
  if(this.multiRegexes[e])return this.multiRegexes[e];const t=new s
  ;return this.rules.slice(e).forEach((([e,n])=>t.addRule(e,n))),
  t.compile(),this.multiRegexes[e]=t,t}resumingScanAtSamePosition(){
  return 0!==this.regexIndex}considerAll(){this.regexIndex=0}addRule(e,t){
  this.rules.push([e,t]),"begin"===t.type&&this.count++}exec(e){
  const t=this.getMatcher(this.regexIndex);t.lastIndex=this.lastIndex
  ;let n=t.exec(e)
  ;if(this.resumingScanAtSamePosition())if(n&&n.index===this.lastIndex);else{
  const t=this.getMatcher(0);t.lastIndex=this.lastIndex+1,n=t.exec(e)}
  return n&&(this.regexIndex+=n.position+1,
  this.regexIndex===this.count&&this.considerAll()),n}}
  if(e.compilerExtensions||(e.compilerExtensions=[]),
  e.contains&&e.contains.includes("self"))throw Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.")
  ;return e.classNameAliases=a(e.classNameAliases||{}),function t(s,i){const o=s
  ;if(s.compiled)return o
  ;[M].forEach((e=>e(s,i))),e.compilerExtensions.forEach((e=>e(s,i))),
  s.__beforeBegin=null,[k,O,A].forEach((e=>e(s,i))),s.compiled=!0;let l=null
  ;if("object"==typeof s.keywords&&(l=s.keywords.$pattern,
  delete s.keywords.$pattern),
  s.keywords&&(s.keywords=B(s.keywords,e.case_insensitive)),
  s.lexemes&&l)throw Error("ERR: Prefer `keywords.$pattern` to `mode.lexemes`, BOTH are not allowed. (see mode reference) ")
  ;return l=l||s.lexemes||/\w+/,
  o.keywordPatternRe=n(l,!0),i&&(s.begin||(s.begin=/\B|\b/),
  o.beginRe=n(s.begin),s.endSameAsBegin&&(s.end=s.begin),
  s.end||s.endsWithParent||(s.end=/\B|\b/),
  s.end&&(o.endRe=n(s.end)),o.terminatorEnd=u(s.end)||"",
  s.endsWithParent&&i.terminatorEnd&&(o.terminatorEnd+=(s.end?"|":"")+i.terminatorEnd)),
  s.illegal&&(o.illegalRe=n(s.illegal)),
  s.contains||(s.contains=[]),s.contains=[].concat(...s.contains.map((e=>(e=>(e.variants&&!e.cachedVariants&&(e.cachedVariants=e.variants.map((t=>a(e,{
  variants:null},t)))),e.cachedVariants?e.cachedVariants:j(e)?a(e,{
  starts:e.starts?a(e.starts):null
  }):Object.isFrozen(e)?a(e):e))("self"===e?s:e)))),s.contains.forEach((e=>{t(e,o)
  })),s.starts&&t(s.starts,i),o.matcher=(e=>{const t=new r
  ;return e.contains.forEach((e=>t.addRule(e.begin,{rule:e,type:"begin"
  }))),e.terminatorEnd&&t.addRule(e.terminatorEnd,{type:"end"
  }),e.illegal&&t.addRule(e.illegal,{type:"illegal"}),t})(o),o}(e)}function j(e){
  return!!e&&(e.endsWithParent||j(e.starts))}function S(e){const t={
  props:["language","code","autodetect"],data:()=>({detectedLanguage:"",
  unknownLanguage:!1}),computed:{className(){
  return this.unknownLanguage?"":"hljs "+this.detectedLanguage},highlighted(){
  if(!this.autoDetect&&!e.getLanguage(this.language))return console.warn(`The language "${this.language}" you specified could not be found.`),
  this.unknownLanguage=!0,r(this.code);let t={}
  ;return this.autoDetect?(t=e.highlightAuto(this.code),
  this.detectedLanguage=t.language):(t=e.highlight(this.language,this.code,this.ignoreIllegals),
  this.detectedLanguage=this.language),t.value},autoDetect(){
  return!(this.language&&(e=this.autodetect,!e&&""!==e));var e},
  ignoreIllegals:()=>!0},render(e){return e("pre",{},[e("code",{
  class:this.className,domProps:{innerHTML:this.highlighted}})])}};return{
  Component:t,VuePlugin:{install(e){e.component("highlightjs",t)}}}}const P={
  "after:highlightBlock":({block:e,result:t,text:n})=>{const s=C(e)
  ;if(!s.length)return;const a=document.createElement("div")
  ;a.innerHTML=t.value,t.value=((e,t,n)=>{let s=0,a="";const i=[];function o(){
  return e.length&&t.length?e[0].offset!==t[0].offset?e[0].offset<t[0].offset?e:t:"start"===t[0].event?e:t:e.length?e:t
  }function l(e){a+="<"+D(e)+[].map.call(e.attributes,(function(e){
  return" "+e.nodeName+'="'+r(e.value)+'"'})).join("")+">"}function c(e){
  a+="</"+D(e)+">"}function u(e){("start"===e.event?l:c)(e.node)}
  for(;e.length||t.length;){let t=o()
  ;if(a+=r(n.substring(s,t[0].offset)),s=t[0].offset,t===e){i.reverse().forEach(c)
  ;do{u(t.splice(0,1)[0]),t=o()}while(t===e&&t.length&&t[0].offset===s)
  ;i.reverse().forEach(l)
  }else"start"===t[0].event?i.push(t[0].node):i.pop(),u(t.splice(0,1)[0])}
  return a+r(n.substr(s))})(s,C(a),n)}};function D(e){
  return e.nodeName.toLowerCase()}function C(e){const t=[];return function e(n,s){
  for(let r=n.firstChild;r;r=r.nextSibling)3===r.nodeType?s+=r.nodeValue.length:1===r.nodeType&&(t.push({
  event:"start",offset:s,node:r}),s=e(r,s),D(r).match(/br|hr|img|input/)||t.push({
  event:"stop",offset:s,node:r}));return s}(e,0),t}const H=e=>{console.error(e)
  },U=(e,...t)=>{console.log("WARN: "+e,...t)},$=(e,t)=>{
  console.log(`Deprecated as of ${e}. ${t}`)},z=r,K=a,G=Symbol("nomatch")
  ;return(e=>{const n=Object.create(null),r=Object.create(null),a=[];let i=!0
  ;const o=/(^(<[^>]+>|\t|)+|\n)/gm,l="Could not find the language '{}', did you forget to load/include a language module?",u={
  disableAutodetect:!0,name:"Plain text",contains:[]};let g={
  noHighlightRe:/^(no-?highlight)$/i,
  languageDetectRe:/\blang(?:uage)?-([\w-]+)\b/i,classPrefix:"hljs-",
  tabReplace:null,useBR:!1,languages:null,__emitter:c};function d(e){
  return g.noHighlightRe.test(e)}function h(e,t,n,s){const r={code:t,language:e}
  ;M("before:highlight",r);const a=r.result?r.result:f(r.language,r.code,n,s)
  ;return a.code=r.code,M("after:highlight",a),a}function f(e,t,r,o){const c=t
  ;function u(e,t){const n=w.case_insensitive?t[0].toLowerCase():t[0]
  ;return Object.prototype.hasOwnProperty.call(e.keywords,n)&&e.keywords[n]}
  function d(){null!=R.subLanguage?(()=>{if(""===M)return;let e=null
  ;if("string"==typeof R.subLanguage){
  if(!n[R.subLanguage])return void O.addText(M)
  ;e=f(R.subLanguage,M,!0,k[R.subLanguage]),k[R.subLanguage]=e.top
  }else e=p(M,R.subLanguage.length?R.subLanguage:null)
  ;R.relevance>0&&(A+=e.relevance),O.addSublanguage(e.emitter,e.language)
  })():(()=>{if(!R.keywords)return void O.addText(M);let e=0
  ;R.keywordPatternRe.lastIndex=0;let t=R.keywordPatternRe.exec(M),n="";for(;t;){
  n+=M.substring(e,t.index);const s=u(R,t);if(s){const[e,r]=s
  ;O.addText(n),n="",A+=r;const a=w.classNameAliases[e]||e;O.addKeyword(t[0],a)
  }else n+=t[0];e=R.keywordPatternRe.lastIndex,t=R.keywordPatternRe.exec(M)}
  n+=M.substr(e),O.addText(n)})(),M=""}function h(e){
  return e.className&&O.openNode(w.classNameAliases[e.className]||e.className),
  R=Object.create(e,{parent:{value:R}}),R}function m(e,t,n){let r=((e,t)=>{
  const n=e&&e.exec(t);return n&&0===n.index})(e.endRe,n);if(r){if(e["on:end"]){
  const n=new s(e);e["on:end"](t,n),n.ignore&&(r=!1)}if(r){
  for(;e.endsParent&&e.parent;)e=e.parent;return e}}
  if(e.endsWithParent)return m(e.parent,t,n)}function b(e){
  return 0===R.matcher.regexIndex?(M+=e[0],1):(I=!0,0)}function x(e){
  const t=e[0],n=c.substr(e.index),s=m(R,e,n);if(!s)return G;const r=R
  ;r.skip?M+=t:(r.returnEnd||r.excludeEnd||(M+=t),d(),r.excludeEnd&&(M=t));do{
  R.className&&O.closeNode(),R.skip||R.subLanguage||(A+=R.relevance),R=R.parent
  }while(R!==s.parent)
  ;return s.starts&&(s.endSameAsBegin&&(s.starts.endRe=s.endRe),
  h(s.starts)),r.returnEnd?0:t.length}let E={};function v(t,n){const a=n&&n[0]
  ;if(M+=t,null==a)return d(),0
  ;if("begin"===E.type&&"end"===n.type&&E.index===n.index&&""===a){
  if(M+=c.slice(n.index,n.index+1),!i){const t=Error("0 width match regex")
  ;throw t.languageName=e,t.badRule=E.rule,t}return 1}
  if(E=n,"begin"===n.type)return function(e){
  const t=e[0],n=e.rule,r=new s(n),a=[n.__beforeBegin,n["on:begin"]]
  ;for(const n of a)if(n&&(n(e,r),r.ignore))return b(t)
  ;return n&&n.endSameAsBegin&&(n.endRe=RegExp(t.replace(/[-/\\^$*+?.()|[\]{}]/g,"\\$&"),"m")),
  n.skip?M+=t:(n.excludeBegin&&(M+=t),
  d(),n.returnBegin||n.excludeBegin||(M=t)),h(n),n.returnBegin?0:t.length}(n)
  ;if("illegal"===n.type&&!r){
  const e=Error('Illegal lexeme "'+a+'" for mode "'+(R.className||"<unnamed>")+'"')
  ;throw e.mode=R,e}if("end"===n.type){const e=x(n);if(e!==G)return e}
  if("illegal"===n.type&&""===a)return 1
  ;if(B>1e5&&B>3*n.index)throw Error("potential infinite loop, way more iterations than matches")
  ;return M+=a,a.length}const w=_(e)
  ;if(!w)throw H(l.replace("{}",e)),Error('Unknown language: "'+e+'"')
  ;const N=T(w,{plugins:a});let y="",R=o||N;const k={},O=new g.__emitter(g);(()=>{
  const e=[];for(let t=R;t!==w;t=t.parent)t.className&&e.unshift(t.className)
  ;e.forEach((e=>O.openNode(e)))})();let M="",A=0,L=0,B=0,I=!1;try{
  for(R.matcher.considerAll();;){
  B++,I?I=!1:R.matcher.considerAll(),R.matcher.lastIndex=L
  ;const e=R.matcher.exec(c);if(!e)break;const t=v(c.substring(L,e.index),e)
  ;L=e.index+t}return v(c.substr(L)),O.closeAllNodes(),O.finalize(),y=O.toHTML(),{
  relevance:Math.floor(A),value:y,language:e,illegal:!1,emitter:O,top:R}}catch(t){
  if(t.message&&t.message.includes("Illegal"))return{illegal:!0,illegalBy:{
  msg:t.message,context:c.slice(L-100,L+100),mode:t.mode},sofar:y,relevance:0,
  value:z(c),emitter:O};if(i)return{illegal:!1,relevance:0,value:z(c),emitter:O,
  language:e,top:R,errorRaised:t};throw t}}function p(e,t){
  t=t||g.languages||Object.keys(n);const s=(e=>{const t={relevance:0,
  emitter:new g.__emitter(g),value:z(e),illegal:!1,top:u}
  ;return t.emitter.addText(e),t})(e),r=t.filter(_).filter(O).map((t=>f(t,e,!1)))
  ;r.unshift(s);const a=r.sort(((e,t)=>{
  if(e.relevance!==t.relevance)return t.relevance-e.relevance
  ;if(e.language&&t.language){if(_(e.language).supersetOf===t.language)return 1
  ;if(_(t.language).supersetOf===e.language)return-1}return 0})),[i,o]=a,l=i
  ;return l.second_best=o,l}const m={"before:highlightBlock":({block:e})=>{
  g.useBR&&(e.innerHTML=e.innerHTML.replace(/\n/g,"").replace(/<br[ /]*>/g,"\n"))
  },"after:highlightBlock":({result:e})=>{
  g.useBR&&(e.value=e.value.replace(/\n/g,"<br>"))}},b=/^(<[^>]+>|\t)+/gm,x={
  "after:highlightBlock":({result:e})=>{
  g.tabReplace&&(e.value=e.value.replace(b,(e=>e.replace(/\t/g,g.tabReplace))))}}
  ;function E(e){let t=null;const n=(e=>{let t=e.className+" "
  ;t+=e.parentNode?e.parentNode.className:"";const n=g.languageDetectRe.exec(t)
  ;if(n){const t=_(n[1])
  ;return t||(U(l.replace("{}",n[1])),U("Falling back to no-highlight mode for this block.",e)),
  t?n[1]:"no-highlight"}return t.split(/\s+/).find((e=>d(e)||_(e)))})(e)
  ;if(d(n))return;M("before:highlightBlock",{block:e,language:n}),t=e
  ;const s=t.textContent,a=n?h(n,s,!0):p(s);M("after:highlightBlock",{block:e,
  result:a,text:s}),e.innerHTML=a.value,((e,t,n)=>{const s=t?r[t]:n
  ;e.classList.add("hljs"),s&&e.classList.add(s)})(e,n,a.language),e.result={
  language:a.language,re:a.relevance,relavance:a.relevance
  },a.second_best&&(e.second_best={language:a.second_best.language,
  re:a.second_best.relevance,relavance:a.second_best.relevance})}const v=()=>{
  v.called||(v.called=!0,
  $("10.6.0","initHighlighting() is deprecated.  Use highlightAll() instead."),
  document.querySelectorAll("pre code").forEach(E))};let w=!1,N=!1;function y(){
  N?document.querySelectorAll("pre code").forEach(E):w=!0}function _(e){
  return e=(e||"").toLowerCase(),n[e]||n[r[e]]}function k(e,{languageName:t}){
  "string"==typeof e&&(e=[e]),e.forEach((e=>{r[e]=t}))}function O(e){const t=_(e)
  ;return t&&!t.disableAutodetect}function M(e,t){const n=e;a.forEach((e=>{
  e[n]&&e[n](t)}))}
  "undefined"!=typeof window&&window.addEventListener&&window.addEventListener("DOMContentLoaded",(()=>{
  N=!0,w&&y()}),!1),Object.assign(e,{highlight:h,highlightAuto:p,highlightAll:y,
  fixMarkup:e=>{
  return $("10.2.0","fixMarkup will be removed entirely in v11.0"),$("10.2.0","Please see https://github.com/highlightjs/highlight.js/issues/2534"),
  t=e,
  g.tabReplace||g.useBR?t.replace(o,(e=>"\n"===e?g.useBR?"<br>":e:g.tabReplace?e.replace(/\t/g,g.tabReplace):e)):t
  ;var t},highlightBlock:E,configure:e=>{
  e.useBR&&($("10.3.0","'useBR' will be removed entirely in v11.0"),
  $("10.3.0","Please see https://github.com/highlightjs/highlight.js/issues/2559")),
  g=K(g,e)},initHighlighting:v,initHighlightingOnLoad:()=>{
  $("10.6.0","initHighlightingOnLoad() is deprecated.  Use highlightAll() instead."),
  w=!0},registerLanguage:(t,s)=>{let r=null;try{r=s(e)}catch(e){
  if(H("Language definition for '{}' could not be registered.".replace("{}",t)),
  !i)throw e;H(e),r=u}
  r.name||(r.name=t),n[t]=r,r.rawDefinition=s.bind(null,e),r.aliases&&k(r.aliases,{
  languageName:t})},listLanguages:()=>Object.keys(n),getLanguage:_,
  registerAliases:k,requireLanguage:e=>{
  $("10.4.0","requireLanguage will be removed entirely in v11."),
  $("10.4.0","Please see https://github.com/highlightjs/highlight.js/pull/2844")
  ;const t=_(e);if(t)return t
  ;throw Error("The '{}' language is required, but not loaded.".replace("{}",e))},
  autoDetection:O,inherit:K,addPlugin:e=>{a.push(e)},vuePlugin:S(e).VuePlugin
  }),e.debugMode=()=>{i=!1},e.safeMode=()=>{i=!0},e.versionString="10.6.0"
  ;for(const e in R)"object"==typeof R[e]&&t(R[e])
  ;return Object.assign(e,R),e.addPlugin(m),e.addPlugin(P),e.addPlugin(x),e})({})
  }();"object"==typeof exports&&"undefined"!=typeof module&&(module.exports=hljs);hljs.registerLanguage("swift",(()=>{"use strict";function e(e){
  return e?"string"==typeof e?e:e.source:null}function n(e){return a("(?=",e,")")}
  function a(...n){return n.map((n=>e(n))).join("")}function t(...n){
  return"("+n.map((n=>e(n))).join("|")+")"}
  const i=e=>a(/\b/,e,/\w$/.test(e)?/\b/:/\B/),s=["Protocol","Type"].map(i),u=["init","self"].map(i),c=["Any","Self"],r=["associatedtype",/as\?/,/as!/,"as","break","case","catch","class","continue","convenience","default","defer","deinit","didSet","do","dynamic","else","enum","extension","fallthrough",/fileprivate\(set\)/,"fileprivate","final","for","func","get","guard","if","import","indirect","infix",/init\?/,/init!/,"inout",/internal\(set\)/,"internal","in","is","lazy","let","mutating","nonmutating",/open\(set\)/,"open","operator","optional","override","postfix","precedencegroup","prefix",/private\(set\)/,"private","protocol",/public\(set\)/,"public","repeat","required","rethrows","return","set","some","static","struct","subscript","super","switch","throws","throw",/try\?/,/try!/,"try","typealias",/unowned\(safe\)/,/unowned\(unsafe\)/,"unowned","var","weak","where","while","willSet"],o=["false","nil","true"],l=["assignment","associativity","higherThan","left","lowerThan","none","right"],m=["#colorLiteral","#column","#dsohandle","#else","#elseif","#endif","#error","#file","#fileID","#fileLiteral","#filePath","#function","#if","#imageLiteral","#keyPath","#line","#selector","#sourceLocation","#warn_unqualified_access","#warning"],d=["abs","all","any","assert","assertionFailure","debugPrint","dump","fatalError","getVaList","isKnownUniquelyReferenced","max","min","numericCast","pointwiseMax","pointwiseMin","precondition","preconditionFailure","print","readLine","repeatElement","sequence","stride","swap","swift_unboxFromSwiftValueWithType","transcode","type","unsafeBitCast","unsafeDowncast","withExtendedLifetime","withUnsafeMutablePointer","withUnsafePointer","withVaList","withoutActuallyEscaping","zip"],p=t(/[/=\-+!*%<>&|^~?]/,/[\u00A1-\u00A7]/,/[\u00A9\u00AB]/,/[\u00AC\u00AE]/,/[\u00B0\u00B1]/,/[\u00B6\u00BB\u00BF\u00D7\u00F7]/,/[\u2016-\u2017]/,/[\u2020-\u2027]/,/[\u2030-\u203E]/,/[\u2041-\u2053]/,/[\u2055-\u205E]/,/[\u2190-\u23FF]/,/[\u2500-\u2775]/,/[\u2794-\u2BFF]/,/[\u2E00-\u2E7F]/,/[\u3001-\u3003]/,/[\u3008-\u3020]/,/[\u3030]/),F=t(p,/[\u0300-\u036F]/,/[\u1DC0-\u1DFF]/,/[\u20D0-\u20FF]/,/[\uFE00-\uFE0F]/,/[\uFE20-\uFE2F]/),b=a(p,F,"*"),h=t(/[a-zA-Z_]/,/[\u00A8\u00AA\u00AD\u00AF\u00B2-\u00B5\u00B7-\u00BA]/,/[\u00BC-\u00BE\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u00FF]/,/[\u0100-\u02FF\u0370-\u167F\u1681-\u180D\u180F-\u1DBF]/,/[\u1E00-\u1FFF]/,/[\u200B-\u200D\u202A-\u202E\u203F-\u2040\u2054\u2060-\u206F]/,/[\u2070-\u20CF\u2100-\u218F\u2460-\u24FF\u2776-\u2793]/,/[\u2C00-\u2DFF\u2E80-\u2FFF]/,/[\u3004-\u3007\u3021-\u302F\u3031-\u303F\u3040-\uD7FF]/,/[\uF900-\uFD3D\uFD40-\uFDCF\uFDF0-\uFE1F\uFE30-\uFE44]/,/[\uFE47-\uFEFE\uFF00-\uFFFD]/),f=t(h,/\d/,/[\u0300-\u036F\u1DC0-\u1DFF\u20D0-\u20FF\uFE20-\uFE2F]/),w=a(h,f,"*"),y=a(/[A-Z]/,f,"*"),g=["autoclosure",a(/convention\(/,t("swift","block","c"),/\)/),"discardableResult","dynamicCallable","dynamicMemberLookup","escaping","frozen","GKInspectable","IBAction","IBDesignable","IBInspectable","IBOutlet","IBSegueAction","inlinable","main","nonobjc","NSApplicationMain","NSCopying","NSManaged",a(/objc\(/,w,/\)/),"objc","objcMembers","propertyWrapper","requires_stored_property_inits","testable","UIApplicationMain","unknown","usableFromInline"],E=["iOS","iOSApplicationExtension","macOS","macOSApplicationExtension","macCatalyst","macCatalystApplicationExtension","watchOS","watchOSApplicationExtension","tvOS","tvOSApplicationExtension","swift"]
  ;return e=>{const p={match:/\s+/,relevance:0},h=e.COMMENT("/\\*","\\*/",{
  contains:["self"]}),v=[e.C_LINE_COMMENT_MODE,h],N={className:"keyword",
  begin:a(/\./,n(t(...s,...u))),end:t(...s,...u),excludeBegin:!0},A={
  match:a(/\./,t(...r)),relevance:0
  },C=r.filter((e=>"string"==typeof e)).concat(["_|0"]),_={variants:[{
  className:"keyword",
  match:t(...r.filter((e=>"string"!=typeof e)).concat(c).map(i),...u)}]},D={
  $pattern:t(/\b\w+/,/#\w+/),keyword:C.concat(m),literal:o},B=[N,A,_],k=[{
  match:a(/\./,t(...d)),relevance:0},{className:"built_in",
  match:a(/\b/,t(...d),/(?=\()/)}],M={match:/->/,relevance:0},S=[M,{
  className:"operator",relevance:0,variants:[{match:b},{match:`\\.(\\.|${F})+`}]
  }],x="([0-9a-fA-F]_*)+",I={className:"number",relevance:0,variants:[{
  match:"\\b(([0-9]_*)+)(\\.(([0-9]_*)+))?([eE][+-]?(([0-9]_*)+))?\\b"},{
  match:`\\b0x(${x})(\\.(${x}))?([pP][+-]?(([0-9]_*)+))?\\b`},{
  match:/\b0o([0-7]_*)+\b/},{match:/\b0b([01]_*)+\b/}]},O=(e="")=>({
  className:"subst",variants:[{match:a(/\\/,e,/[0\\tnr"']/)},{
  match:a(/\\/,e,/u\{[0-9a-fA-F]{1,8}\}/)}]}),T=(e="")=>({className:"subst",
  match:a(/\\/,e,/[\t ]*(?:[\r\n]|\r\n)/)}),L=(e="")=>({className:"subst",
  label:"interpol",begin:a(/\\/,e,/\(/),end:/\)/}),P=(e="")=>({begin:a(e,/"""/),
  end:a(/"""/,e),contains:[O(e),T(e),L(e)]}),$=(e="")=>({begin:a(e,/"/),
  end:a(/"/,e),contains:[O(e),L(e)]}),K={className:"string",
  variants:[P(),P("#"),P("##"),P("###"),$(),$("#"),$("##"),$("###")]},j={
  match:a(/`/,w,/`/)},z=[j,{className:"variable",match:/\$\d+/},{
  className:"variable",match:`\\$${f}+`}],q=[{match:/(@|#)available/,
  className:"keyword",starts:{contains:[{begin:/\(/,end:/\)/,keywords:E,
  contains:[...S,I,K]}]}},{className:"keyword",match:a(/@/,t(...g))},{
  className:"meta",match:a(/@/,w)}],U={match:n(/\b[A-Z]/),relevance:0,contains:[{
  className:"type",
  match:a(/(AV|CA|CF|CG|CI|CL|CM|CN|CT|MK|MP|MTK|MTL|NS|SCN|SK|UI|WK|XC)/,f,"+")
  },{className:"type",match:y,relevance:0},{match:/[?!]+/,relevance:0},{
  match:/\.\.\./,relevance:0},{match:a(/\s+&\s+/,n(y)),relevance:0}]},Z={
  begin:/</,end:/>/,keywords:D,contains:[...v,...B,...q,M,U]};U.contains.push(Z)
  ;const G={begin:/\(/,end:/\)/,relevance:0,keywords:D,contains:["self",{
  match:a(w,/\s*:/),keywords:"_|0",relevance:0
  },...v,...B,...k,...S,I,K,...z,...q,U]},H={beginKeywords:"func",contains:[{
  className:"title",match:t(j.match,w,b),endsParent:!0,relevance:0},p]},R={
  begin:/</,end:/>/,contains:[...v,U]},V={begin:/\(/,end:/\)/,keywords:D,
  contains:[{begin:t(n(a(w,/\s*:/)),n(a(w,/\s+/,w,/\s*:/))),end:/:/,relevance:0,
  contains:[{className:"keyword",match:/\b_\b/},{className:"params",match:w}]
  },...v,...B,...S,I,K,...q,U,G],endsParent:!0,illegal:/["']/},W={
  className:"function",match:n(/\bfunc\b/),contains:[H,R,V,p],illegal:[/\[/,/%/]
  },X={className:"function",match:/\b(subscript|init[?!]?)\s*(?=[<(])/,keywords:{
  keyword:"subscript init init? init!",$pattern:/\w+[?!]?/},contains:[R,V,p],
  illegal:/\[|%/},J={beginKeywords:"operator",end:e.MATCH_NOTHING_RE,contains:[{
  className:"title",match:b,endsParent:!0,relevance:0}]},Q={
  beginKeywords:"precedencegroup",end:e.MATCH_NOTHING_RE,contains:[{
  className:"title",match:y,relevance:0},{begin:/{/,end:/}/,relevance:0,
  endsParent:!0,keywords:[...l,...o],contains:[U]}]};for(const e of K.variants){
  const n=e.contains.find((e=>"interpol"===e.label));n.keywords=D
  ;const a=[...B,...k,...S,I,K,...z];n.contains=[...a,{begin:/\(/,end:/\)/,
  contains:["self",...a]}]}return{name:"Swift",keywords:D,contains:[...v,W,X,{
  className:"class",beginKeywords:"struct protocol class extension enum",
  end:"\\{",excludeEnd:!0,keywords:D,contains:[e.inherit(e.TITLE_MODE,{
  begin:/[A-Za-z$_][\u00C0-\u02B80-9A-Za-z$_]*/}),...B]},J,Q,{
  beginKeywords:"import",end:/$/,contains:[...v],relevance:0
  },...B,...k,...S,I,K,...z,...q,U,G]}}})());hljs.registerLanguage("sql",(()=>{"use strict";function e(e){
  return e?"string"==typeof e?e:e.source:null}function r(...r){
  return r.map((r=>e(r))).join("")}function t(...r){
  return"("+r.map((r=>e(r))).join("|")+")"}return e=>{
  const n=e.COMMENT("--","$"),a=["true","false","unknown"],i=["bigint","binary","blob","boolean","char","character","clob","date","dec","decfloat","decimal","float","int","integer","interval","nchar","nclob","national","numeric","real","row","smallint","time","timestamp","varchar","varying","varbinary"],s=["abs","acos","array_agg","asin","atan","avg","cast","ceil","ceiling","coalesce","corr","cos","cosh","count","covar_pop","covar_samp","cume_dist","dense_rank","deref","element","exp","extract","first_value","floor","json_array","json_arrayagg","json_exists","json_object","json_objectagg","json_query","json_table","json_table_primitive","json_value","lag","last_value","lead","listagg","ln","log","log10","lower","max","min","mod","nth_value","ntile","nullif","percent_rank","percentile_cont","percentile_disc","position","position_regex","power","rank","regr_avgx","regr_avgy","regr_count","regr_intercept","regr_r2","regr_slope","regr_sxx","regr_sxy","regr_syy","row_number","sin","sinh","sqrt","stddev_pop","stddev_samp","substring","substring_regex","sum","tan","tanh","translate","translate_regex","treat","trim","trim_array","unnest","upper","value_of","var_pop","var_samp","width_bucket"],o=["create table","insert into","primary key","foreign key","not null","alter table","add constraint","grouping sets","on overflow","character set","respect nulls","ignore nulls","nulls first","nulls last","depth first","breadth first"],c=s,l=["abs","acos","all","allocate","alter","and","any","are","array","array_agg","array_max_cardinality","as","asensitive","asin","asymmetric","at","atan","atomic","authorization","avg","begin","begin_frame","begin_partition","between","bigint","binary","blob","boolean","both","by","call","called","cardinality","cascaded","case","cast","ceil","ceiling","char","char_length","character","character_length","check","classifier","clob","close","coalesce","collate","collect","column","commit","condition","connect","constraint","contains","convert","copy","corr","corresponding","cos","cosh","count","covar_pop","covar_samp","create","cross","cube","cume_dist","current","current_catalog","current_date","current_default_transform_group","current_path","current_role","current_row","current_schema","current_time","current_timestamp","current_path","current_role","current_transform_group_for_type","current_user","cursor","cycle","date","day","deallocate","dec","decimal","decfloat","declare","default","define","delete","dense_rank","deref","describe","deterministic","disconnect","distinct","double","drop","dynamic","each","element","else","empty","end","end_frame","end_partition","end-exec","equals","escape","every","except","exec","execute","exists","exp","external","extract","false","fetch","filter","first_value","float","floor","for","foreign","frame_row","free","from","full","function","fusion","get","global","grant","group","grouping","groups","having","hold","hour","identity","in","indicator","initial","inner","inout","insensitive","insert","int","integer","intersect","intersection","interval","into","is","join","json_array","json_arrayagg","json_exists","json_object","json_objectagg","json_query","json_table","json_table_primitive","json_value","lag","language","large","last_value","lateral","lead","leading","left","like","like_regex","listagg","ln","local","localtime","localtimestamp","log","log10","lower","match","match_number","match_recognize","matches","max","member","merge","method","min","minute","mod","modifies","module","month","multiset","national","natural","nchar","nclob","new","no","none","normalize","not","nth_value","ntile","null","nullif","numeric","octet_length","occurrences_regex","of","offset","old","omit","on","one","only","open","or","order","out","outer","over","overlaps","overlay","parameter","partition","pattern","per","percent","percent_rank","percentile_cont","percentile_disc","period","portion","position","position_regex","power","precedes","precision","prepare","primary","procedure","ptf","range","rank","reads","real","recursive","ref","references","referencing","regr_avgx","regr_avgy","regr_count","regr_intercept","regr_r2","regr_slope","regr_sxx","regr_sxy","regr_syy","release","result","return","returns","revoke","right","rollback","rollup","row","row_number","rows","running","savepoint","scope","scroll","search","second","seek","select","sensitive","session_user","set","show","similar","sin","sinh","skip","smallint","some","specific","specifictype","sql","sqlexception","sqlstate","sqlwarning","sqrt","start","static","stddev_pop","stddev_samp","submultiset","subset","substring","substring_regex","succeeds","sum","symmetric","system","system_time","system_user","table","tablesample","tan","tanh","then","time","timestamp","timezone_hour","timezone_minute","to","trailing","translate","translate_regex","translation","treat","trigger","trim","trim_array","true","truncate","uescape","union","unique","unknown","unnest","update   ","upper","user","using","value","values","value_of","var_pop","var_samp","varbinary","varchar","varying","versioning","when","whenever","where","width_bucket","window","with","within","without","year","add","asc","collation","desc","final","first","last","view"].filter((e=>!s.includes(e))),u={
  begin:r(/\b/,t(...c),/\s*\(/),keywords:{built_in:c}};return{name:"SQL",
  case_insensitive:!0,illegal:/[{}]|<\//,keywords:{$pattern:/\b[\w\.]+/,
  keyword:((e,{exceptions:r,when:t}={})=>{const n=t
  ;return r=r||[],e.map((e=>e.match(/\|\d+$/)||r.includes(e)?e:n(e)?e+"|0":e))
  })(l,{when:e=>e.length<3}),literal:a,type:i,
  built_in:["current_catalog","current_date","current_default_transform_group","current_path","current_role","current_schema","current_transform_group_for_type","current_user","session_user","system_time","system_user","current_time","localtime","current_timestamp","localtimestamp"]
  },contains:[{begin:t(...o),keywords:{$pattern:/[\w\.]+/,keyword:l.concat(o),
  literal:a,type:i}},{className:"type",
  begin:t("double precision","large object","with timezone","without timezone")
  },u,{className:"variable",begin:/@[a-z0-9]+/},{className:"string",variants:[{
  begin:/'/,end:/'/,contains:[{begin:/''/}]}]},{begin:/"/,end:/"/,contains:[{
  begin:/""/}]},e.C_NUMBER_MODE,e.C_BLOCK_COMMENT_MODE,n,{className:"operator",
  begin:/[-+*/=%^~]|&&?|\|\|?|!=?|<(?:=>?|<|>)?|>[>=]?/,relevance:0}]}}})());hljs.registerLanguage("xml",(()=>{"use strict";function e(e){
  return e?"string"==typeof e?e:e.source:null}function n(e){return a("(?=",e,")")}
  function a(...n){return n.map((n=>e(n))).join("")}function s(...n){
  return"("+n.map((n=>e(n))).join("|")+")"}return e=>{
  const t=a(/[A-Z_]/,a("(",/[A-Z0-9_.-]*:/,")?"),/[A-Z0-9_.-]*/),i={
  className:"symbol",begin:/&[a-z]+;|&#[0-9]+;|&#x[a-f0-9]+;/},r={begin:/\s/,
  contains:[{className:"meta-keyword",begin:/#?[a-z_][a-z1-9_-]+/,illegal:/\n/}]
  },c=e.inherit(r,{begin:/\(/,end:/\)/}),l=e.inherit(e.APOS_STRING_MODE,{
  className:"meta-string"}),g=e.inherit(e.QUOTE_STRING_MODE,{
  className:"meta-string"}),m={endsWithParent:!0,illegal:/</,relevance:0,
  contains:[{className:"attr",begin:/[A-Za-z0-9._:-]+/,relevance:0},{begin:/=\s*/,
  relevance:0,contains:[{className:"string",endsParent:!0,variants:[{begin:/"/,
  end:/"/,contains:[i]},{begin:/'/,end:/'/,contains:[i]},{begin:/[^\s"'=<>`]+/}]}]
  }]};return{name:"HTML, XML",
  aliases:["html","xhtml","rss","atom","xjb","xsd","xsl","plist","wsf","svg"],
  case_insensitive:!0,contains:[{className:"meta",begin:/<![a-z]/,end:/>/,
  relevance:10,contains:[r,g,l,c,{begin:/\[/,end:/\]/,contains:[{className:"meta",
  begin:/<![a-z]/,end:/>/,contains:[r,c,g,l]}]}]},e.COMMENT(/<!--/,/-->/,{
  relevance:10}),{begin:/<!\[CDATA\[/,end:/\]\]>/,relevance:10},i,{
  className:"meta",begin:/<\?xml/,end:/\?>/,relevance:10},{className:"tag",
  begin:/<style(?=\s|>)/,end:/>/,keywords:{name:"style"},contains:[m],starts:{
  end:/<\/style>/,returnEnd:!0,subLanguage:["css","xml"]}},{className:"tag",
  begin:/<script(?=\s|>)/,end:/>/,keywords:{name:"script"},contains:[m],starts:{
  end:/<\/script>/,returnEnd:!0,subLanguage:["javascript","handlebars","xml"]}},{
  className:"tag",begin:/<>|<\/>/},{className:"tag",
  begin:a(/</,n(a(t,s(/\/>/,/>/,/\s/)))),end:/\/?>/,contains:[{className:"name",
  begin:t,relevance:0,starts:m}]},{className:"tag",begin:a(/<\//,n(a(t,/>/))),
  contains:[{className:"name",begin:t,relevance:0},{begin:/>/,relevance:0}]}]}}
  })());hljs.registerLanguage("markdown",(()=>{"use strict";function n(...n){
  return n.map((n=>{return(e=n)?"string"==typeof e?e:e.source:null;var e
  })).join("")}return e=>{const a={begin:/<\/?[A-Za-z_]/,end:">",
  subLanguage:"xml",relevance:0},i={variants:[{begin:/\[.+?\]\[.*?\]/,relevance:0
  },{begin:/\[.+?\]\(((data|javascript|mailto):|(?:http|ftp)s?:\/\/).*?\)/,
  relevance:2},{begin:n(/\[.+?\]\(/,/[A-Za-z][A-Za-z0-9+.-]*/,/:\/\/.*?\)/),
  relevance:2},{begin:/\[.+?\]\([./?&#].*?\)/,relevance:1},{
  begin:/\[.+?\]\(.*?\)/,relevance:0}],returnBegin:!0,contains:[{
  className:"string",relevance:0,begin:"\\[",end:"\\]",excludeBegin:!0,
  returnEnd:!0},{className:"link",relevance:0,begin:"\\]\\(",end:"\\)",
  excludeBegin:!0,excludeEnd:!0},{className:"symbol",relevance:0,begin:"\\]\\[",
  end:"\\]",excludeBegin:!0,excludeEnd:!0}]},s={className:"strong",contains:[],
  variants:[{begin:/_{2}/,end:/_{2}/},{begin:/\*{2}/,end:/\*{2}/}]},c={
  className:"emphasis",contains:[],variants:[{begin:/\*(?!\*)/,end:/\*/},{
  begin:/_(?!_)/,end:/_/,relevance:0}]};s.contains.push(c),c.contains.push(s)
  ;let t=[a,i]
  ;return s.contains=s.contains.concat(t),c.contains=c.contains.concat(t),
  t=t.concat(s,c),{name:"Markdown",aliases:["md","mkdown","mkd"],contains:[{
  className:"section",variants:[{begin:"^#{1,6}",end:"$",contains:t},{
  begin:"(?=^.+?\\n[=-]{2,}$)",contains:[{begin:"^[=-]*$"},{begin:"^",end:"\\n",
  contains:t}]}]},a,{className:"bullet",begin:"^[ \t]*([*+-]|(\\d+\\.))(?=\\s+)",
  end:"\\s+",excludeEnd:!0},s,c,{className:"quote",begin:"^>\\s+",contains:t,
  end:"$"},{className:"code",variants:[{begin:"(`{3,})[^`](.|\\n)*?\\1`*[ ]*"},{
  begin:"(~{3,})[^~](.|\\n)*?\\1~*[ ]*"},{begin:"```",end:"```+[ ]*$"},{
  begin:"~~~",end:"~~~+[ ]*$"},{begin:"`.+?`"},{begin:"(?=^( {4}|\\t))",
  contains:[{begin:"^( {4}|\\t)",end:"(\\n)$"}],relevance:0}]},{
  begin:"^[-\\*]{3,}",end:"$"},i,{begin:/^\[[^\n]+\]:/,returnBegin:!0,contains:[{
  className:"symbol",begin:/\[/,end:/\]/,excludeBegin:!0,excludeEnd:!0},{
  className:"link",begin:/:\s*/,end:/$/,excludeBegin:!0}]}]}}})());hljs.registerLanguage("plaintext",(()=>{"use strict";return t=>({
  name:"Plain text",aliases:["text","txt"],disableAutodetect:!0})})());hljs.registerLanguage("less",(()=>{"use strict"
  ;const e=["a","abbr","address","article","aside","audio","b","blockquote","body","button","canvas","caption","cite","code","dd","del","details","dfn","div","dl","dt","em","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","html","i","iframe","img","input","ins","kbd","label","legend","li","main","mark","menu","nav","object","ol","p","q","quote","samp","section","span","strong","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","ul","var","video"],t=["any-hover","any-pointer","aspect-ratio","color","color-gamut","color-index","device-aspect-ratio","device-height","device-width","display-mode","forced-colors","grid","height","hover","inverted-colors","monochrome","orientation","overflow-block","overflow-inline","pointer","prefers-color-scheme","prefers-contrast","prefers-reduced-motion","prefers-reduced-transparency","resolution","scan","scripting","update","width","min-width","max-width","min-height","max-height"],i=["active","any-link","blank","checked","current","default","defined","dir","disabled","drop","empty","enabled","first","first-child","first-of-type","fullscreen","future","focus","focus-visible","focus-within","has","host","host-context","hover","indeterminate","in-range","invalid","is","lang","last-child","last-of-type","left","link","local-link","not","nth-child","nth-col","nth-last-child","nth-last-col","nth-last-of-type","nth-of-type","only-child","only-of-type","optional","out-of-range","past","placeholder-shown","read-only","read-write","required","right","root","scope","target","target-within","user-invalid","valid","visited","where"],o=["after","backdrop","before","cue","cue-region","first-letter","first-line","grammar-error","marker","part","placeholder","selection","slotted","spelling-error"],n=["align-content","align-items","align-self","animation","animation-delay","animation-direction","animation-duration","animation-fill-mode","animation-iteration-count","animation-name","animation-play-state","animation-timing-function","auto","backface-visibility","background","background-attachment","background-clip","background-color","background-image","background-origin","background-position","background-repeat","background-size","border","border-bottom","border-bottom-color","border-bottom-left-radius","border-bottom-right-radius","border-bottom-style","border-bottom-width","border-collapse","border-color","border-image","border-image-outset","border-image-repeat","border-image-slice","border-image-source","border-image-width","border-left","border-left-color","border-left-style","border-left-width","border-radius","border-right","border-right-color","border-right-style","border-right-width","border-spacing","border-style","border-top","border-top-color","border-top-left-radius","border-top-right-radius","border-top-style","border-top-width","border-width","bottom","box-decoration-break","box-shadow","box-sizing","break-after","break-before","break-inside","caption-side","clear","clip","clip-path","color","column-count","column-fill","column-gap","column-rule","column-rule-color","column-rule-style","column-rule-width","column-span","column-width","columns","content","counter-increment","counter-reset","cursor","direction","display","empty-cells","filter","flex","flex-basis","flex-direction","flex-flow","flex-grow","flex-shrink","flex-wrap","float","font","font-display","font-family","font-feature-settings","font-kerning","font-language-override","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-variant-ligatures","font-variation-settings","font-weight","height","hyphens","icon","image-orientation","image-rendering","image-resolution","ime-mode","inherit","initial","justify-content","left","letter-spacing","line-height","list-style","list-style-image","list-style-position","list-style-type","margin","margin-bottom","margin-left","margin-right","margin-top","marks","mask","max-height","max-width","min-height","min-width","nav-down","nav-index","nav-left","nav-right","nav-up","none","normal","object-fit","object-position","opacity","order","orphans","outline","outline-color","outline-offset","outline-style","outline-width","overflow","overflow-wrap","overflow-x","overflow-y","padding","padding-bottom","padding-left","padding-right","padding-top","page-break-after","page-break-before","page-break-inside","perspective","perspective-origin","pointer-events","position","quotes","resize","right","src","tab-size","table-layout","text-align","text-align-last","text-decoration","text-decoration-color","text-decoration-line","text-decoration-style","text-indent","text-overflow","text-rendering","text-shadow","text-transform","text-underline-position","top","transform","transform-origin","transform-style","transition","transition-delay","transition-duration","transition-property","transition-timing-function","unicode-bidi","vertical-align","visibility","white-space","widows","width","word-break","word-spacing","word-wrap","z-index"].reverse(),r=i.concat(o)
  ;return a=>{const s=(e=>({IMPORTANT:{className:"meta",begin:"!important"},
  HEXCOLOR:{className:"number",begin:"#([a-fA-F0-9]{6}|[a-fA-F0-9]{3})"},
  ATTRIBUTE_SELECTOR_MODE:{className:"selector-attr",begin:/\[/,end:/\]/,
  illegal:"$",contains:[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE]}
  }))(a),l=r,d="([\\w-]+|@\\{[\\w-]+\\})",c=[],g=[],b=e=>({className:"string",
  begin:"~?"+e+".*?"+e}),m=(e,t,i)=>({className:e,begin:t,relevance:i}),u={
  $pattern:/[a-z-]+/,keyword:"and or not only",attribute:t.join(" ")},p={
  begin:"\\(",end:"\\)",contains:g,keywords:u,relevance:0}
  ;g.push(a.C_LINE_COMMENT_MODE,a.C_BLOCK_COMMENT_MODE,b("'"),b('"'),a.CSS_NUMBER_MODE,{
  begin:"(url|data-uri)\\(",starts:{className:"string",end:"[\\)\\n]",
  excludeEnd:!0}
  },s.HEXCOLOR,p,m("variable","@@?[\\w-]+",10),m("variable","@\\{[\\w-]+\\}"),m("built_in","~?`[^`]*?`"),{
  className:"attribute",begin:"[\\w-]+\\s*:",end:":",returnBegin:!0,excludeEnd:!0
  },s.IMPORTANT);const f=g.concat({begin:/\{/,end:/\}/,contains:c}),h={
  beginKeywords:"when",endsWithParent:!0,contains:[{beginKeywords:"and not"
  }].concat(g)},w={begin:d+"\\s*:",returnBegin:!0,end:/[;}]/,relevance:0,
  contains:[{begin:/-(webkit|moz|ms|o)-/},{className:"attribute",
  begin:"\\b("+n.join("|")+")\\b",end:/(?=:)/,starts:{endsWithParent:!0,
  illegal:"[<=$]",relevance:0,contains:g}}]},v={className:"keyword",
  begin:"@(import|media|charset|font-face|(-[a-z]+-)?keyframes|supports|document|namespace|page|viewport|host)\\b",
  starts:{end:"[;{}]",keywords:u,returnEnd:!0,contains:g,relevance:0}},y={
  className:"variable",variants:[{begin:"@[\\w-]+\\s*:",relevance:15},{
  begin:"@[\\w-]+"}],starts:{end:"[;}]",returnEnd:!0,contains:f}},k={variants:[{
  begin:"[\\.#:&\\[>]",end:"[;{}]"},{begin:d,end:/\{/}],returnBegin:!0,
  returnEnd:!0,illegal:"[<='$\"]",relevance:0,
  contains:[a.C_LINE_COMMENT_MODE,a.C_BLOCK_COMMENT_MODE,h,m("keyword","all\\b"),m("variable","@\\{[\\w-]+\\}"),{
  begin:"\\b("+e.join("|")+")\\b",className:"selector-tag"
  },m("selector-tag",d+"%?",0),m("selector-id","#"+d),m("selector-class","\\."+d,0),m("selector-tag","&",0),s.ATTRIBUTE_SELECTOR_MODE,{
  className:"selector-pseudo",begin:":("+i.join("|")+")"},{
  className:"selector-pseudo",begin:"::("+o.join("|")+")"},{begin:"\\(",end:"\\)",
  contains:f},{begin:"!important"}]},E={begin:`[\\w-]+:(:)?(${l.join("|")})`,
  returnBegin:!0,contains:[k]}
  ;return c.push(a.C_LINE_COMMENT_MODE,a.C_BLOCK_COMMENT_MODE,v,y,E,w,k),{
  name:"Less",case_insensitive:!0,illegal:"[=>'/<($\"]",contains:c}}})());hljs.registerLanguage("php",(()=>{"use strict";return e=>{const r={
  className:"variable",
  begin:"\\$+[a-zA-Z_\x7f-\xff][a-zA-Z0-9_\x7f-\xff]*(?![A-Za-z0-9])(?![$])"},t={
  className:"meta",variants:[{begin:/<\?php/,relevance:10},{begin:/<\?[=]?/},{
  begin:/\?>/}]},a={className:"subst",variants:[{begin:/\$\w+/},{begin:/\{\$/,
  end:/\}/}]},n=e.inherit(e.APOS_STRING_MODE,{illegal:null
  }),i=e.inherit(e.QUOTE_STRING_MODE,{illegal:null,
  contains:e.QUOTE_STRING_MODE.contains.concat(a)}),o=e.END_SAME_AS_BEGIN({
  begin:/<<<[ \t]*(\w+)\n/,end:/[ \t]*(\w+)\b/,
  contains:e.QUOTE_STRING_MODE.contains.concat(a)}),l={className:"string",
  contains:[e.BACKSLASH_ESCAPE,t],variants:[e.inherit(n,{begin:"b'",end:"'"
  }),e.inherit(i,{begin:'b"',end:'"'}),i,n,o]},c={
  variants:[e.BINARY_NUMBER_MODE,e.C_NUMBER_MODE]},s={
  keyword:"__CLASS__ __DIR__ __FILE__ __FUNCTION__ __LINE__ __METHOD__ __NAMESPACE__ __TRAIT__ die echo exit include include_once print require require_once array abstract and as binary bool boolean break callable case catch class clone const continue declare default do double else elseif empty enddeclare endfor endforeach endif endswitch endwhile eval extends final finally float for foreach from global goto if implements instanceof insteadof int integer interface isset iterable list match|0 new object or private protected public real return string switch throw trait try unset use var void while xor yield",
  literal:"false null true",
  built_in:"Error|0 AppendIterator ArgumentCountError ArithmeticError ArrayIterator ArrayObject AssertionError BadFunctionCallException BadMethodCallException CachingIterator CallbackFilterIterator CompileError Countable DirectoryIterator DivisionByZeroError DomainException EmptyIterator ErrorException Exception FilesystemIterator FilterIterator GlobIterator InfiniteIterator InvalidArgumentException IteratorIterator LengthException LimitIterator LogicException MultipleIterator NoRewindIterator OutOfBoundsException OutOfRangeException OuterIterator OverflowException ParentIterator ParseError RangeException RecursiveArrayIterator RecursiveCachingIterator RecursiveCallbackFilterIterator RecursiveDirectoryIterator RecursiveFilterIterator RecursiveIterator RecursiveIteratorIterator RecursiveRegexIterator RecursiveTreeIterator RegexIterator RuntimeException SeekableIterator SplDoublyLinkedList SplFileInfo SplFileObject SplFixedArray SplHeap SplMaxHeap SplMinHeap SplObjectStorage SplObserver SplObserver SplPriorityQueue SplQueue SplStack SplSubject SplSubject SplTempFileObject TypeError UnderflowException UnexpectedValueException ArrayAccess Closure Generator Iterator IteratorAggregate Serializable Throwable Traversable WeakReference Directory __PHP_Incomplete_Class parent php_user_filter self static stdClass"
  };return{aliases:["php","php3","php4","php5","php6","php7","php8"],
  case_insensitive:!0,keywords:s,
  contains:[e.HASH_COMMENT_MODE,e.COMMENT("//","$",{contains:[t]
  }),e.COMMENT("/\\*","\\*/",{contains:[{className:"doctag",begin:"@[A-Za-z]+"}]
  }),e.COMMENT("__halt_compiler.+?;",!1,{endsWithParent:!0,
  keywords:"__halt_compiler"}),t,{className:"keyword",begin:/\$this\b/},r,{
  begin:/(::|->)+[a-zA-Z_\x7f-\xff][a-zA-Z0-9_\x7f-\xff]*/},{className:"function",
  relevance:0,beginKeywords:"fn function",end:/[;{]/,excludeEnd:!0,
  illegal:"[$%\\[]",contains:[e.UNDERSCORE_TITLE_MODE,{begin:"=>"},{
  className:"params",begin:"\\(",end:"\\)",excludeBegin:!0,excludeEnd:!0,
  keywords:s,contains:["self",r,e.C_BLOCK_COMMENT_MODE,l,c]}]},{className:"class",
  beginKeywords:"class interface",relevance:0,end:/\{/,excludeEnd:!0,
  illegal:/[:($"]/,contains:[{beginKeywords:"extends implements"
  },e.UNDERSCORE_TITLE_MODE]},{beginKeywords:"namespace",relevance:0,end:";",
  illegal:/[.']/,contains:[e.UNDERSCORE_TITLE_MODE]},{beginKeywords:"use",
  relevance:0,end:";",contains:[e.UNDERSCORE_TITLE_MODE]},l,c]}}})());hljs.registerLanguage("handlebars",(()=>{"use strict";function e(e){
  return e?"string"==typeof e?e:e.source:null}function n(...n){
  return n.map((n=>e(n))).join("")}return a=>{const t={
  "builtin-name":["action","bindattr","collection","component","concat","debugger","each","each-in","get","hash","if","in","input","link-to","loc","log","lookup","mut","outlet","partial","query-params","render","template","textarea","unbound","unless","view","with","yield"]
  },s=/\[\]|\[[^\]]+\]/,i=/[^\s!"#%&'()*+,.\/;<=>@\[\\\]^`{|}~]+/,r=((...n)=>"("+n.map((n=>e(n))).join("|")+")")(/""|"[^"]+"/,/''|'[^']+'/,s,i),l=n(n("(",/\.|\.\/|\//,")?"),r,(h=n(/(\.|\/)/,r),
  n("(",h,")*"))),c=n("(",s,"|",i,")(?==)"),o={begin:l,lexemes:/[\w.\/]+/
  },m=a.inherit(o,{keywords:{literal:["true","false","undefined","null"]}}),d={
  begin:/\(/,end:/\)/},g={className:"attr",begin:c,relevance:0,starts:{begin:/=/,
  end:/=/,starts:{
  contains:[a.NUMBER_MODE,a.QUOTE_STRING_MODE,a.APOS_STRING_MODE,m,d]}}},b={
  contains:[a.NUMBER_MODE,a.QUOTE_STRING_MODE,a.APOS_STRING_MODE,{begin:/as\s+\|/,
  keywords:{keyword:"as"},end:/\|/,contains:[{begin:/\w+/}]},g,m,d],returnEnd:!0
  },u=a.inherit(o,{className:"name",keywords:t,starts:a.inherit(b,{end:/\)/})})
  ;var h;d.contains=[u];const N=a.inherit(o,{keywords:t,className:"name",
  starts:a.inherit(b,{end:/\}\}/})}),p=a.inherit(o,{keywords:t,className:"name"
  }),E=a.inherit(o,{className:"name",keywords:t,starts:a.inherit(b,{end:/\}\}/})})
  ;return{name:"Handlebars",
  aliases:["hbs","html.hbs","html.handlebars","htmlbars"],case_insensitive:!0,
  subLanguage:"xml",contains:[{begin:/\\\{\{/,skip:!0},{begin:/\\\\(?=\{\{)/,
  skip:!0},a.COMMENT(/\{\{!--/,/--\}\}/),a.COMMENT(/\{\{!/,/\}\}/),{
  className:"template-tag",begin:/\{\{\{\{(?!\/)/,end:/\}\}\}\}/,contains:[N],
  starts:{end:/\{\{\{\{\//,returnEnd:!0,subLanguage:"xml"}},{
  className:"template-tag",begin:/\{\{\{\{\//,end:/\}\}\}\}/,contains:[p]},{
  className:"template-tag",begin:/\{\{#/,end:/\}\}/,contains:[N]},{
  className:"template-tag",begin:/\{\{(?=else\}\})/,end:/\}\}/,keywords:"else"},{
  className:"template-tag",begin:/\{\{(?=else if)/,end:/\}\}/,keywords:"else if"
  },{className:"template-tag",begin:/\{\{\//,end:/\}\}/,contains:[p]},{
  className:"template-variable",begin:/\{\{\{/,end:/\}\}\}/,contains:[E]},{
  className:"template-variable",begin:/\{\{/,end:/\}\}/,contains:[E]}]}}})());hljs.registerLanguage("css",(()=>{"use strict"
  ;const e=["a","abbr","address","article","aside","audio","b","blockquote","body","button","canvas","caption","cite","code","dd","del","details","dfn","div","dl","dt","em","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","html","i","iframe","img","input","ins","kbd","label","legend","li","main","mark","menu","nav","object","ol","p","q","quote","samp","section","span","strong","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","ul","var","video"],t=["any-hover","any-pointer","aspect-ratio","color","color-gamut","color-index","device-aspect-ratio","device-height","device-width","display-mode","forced-colors","grid","height","hover","inverted-colors","monochrome","orientation","overflow-block","overflow-inline","pointer","prefers-color-scheme","prefers-contrast","prefers-reduced-motion","prefers-reduced-transparency","resolution","scan","scripting","update","width","min-width","max-width","min-height","max-height"],i=["active","any-link","blank","checked","current","default","defined","dir","disabled","drop","empty","enabled","first","first-child","first-of-type","fullscreen","future","focus","focus-visible","focus-within","has","host","host-context","hover","indeterminate","in-range","invalid","is","lang","last-child","last-of-type","left","link","local-link","not","nth-child","nth-col","nth-last-child","nth-last-col","nth-last-of-type","nth-of-type","only-child","only-of-type","optional","out-of-range","past","placeholder-shown","read-only","read-write","required","right","root","scope","target","target-within","user-invalid","valid","visited","where"],o=["after","backdrop","before","cue","cue-region","first-letter","first-line","grammar-error","marker","part","placeholder","selection","slotted","spelling-error"],r=["align-content","align-items","align-self","animation","animation-delay","animation-direction","animation-duration","animation-fill-mode","animation-iteration-count","animation-name","animation-play-state","animation-timing-function","auto","backface-visibility","background","background-attachment","background-clip","background-color","background-image","background-origin","background-position","background-repeat","background-size","border","border-bottom","border-bottom-color","border-bottom-left-radius","border-bottom-right-radius","border-bottom-style","border-bottom-width","border-collapse","border-color","border-image","border-image-outset","border-image-repeat","border-image-slice","border-image-source","border-image-width","border-left","border-left-color","border-left-style","border-left-width","border-radius","border-right","border-right-color","border-right-style","border-right-width","border-spacing","border-style","border-top","border-top-color","border-top-left-radius","border-top-right-radius","border-top-style","border-top-width","border-width","bottom","box-decoration-break","box-shadow","box-sizing","break-after","break-before","break-inside","caption-side","clear","clip","clip-path","color","column-count","column-fill","column-gap","column-rule","column-rule-color","column-rule-style","column-rule-width","column-span","column-width","columns","content","counter-increment","counter-reset","cursor","direction","display","empty-cells","filter","flex","flex-basis","flex-direction","flex-flow","flex-grow","flex-shrink","flex-wrap","float","font","font-display","font-family","font-feature-settings","font-kerning","font-language-override","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-variant-ligatures","font-variation-settings","font-weight","height","hyphens","icon","image-orientation","image-rendering","image-resolution","ime-mode","inherit","initial","justify-content","left","letter-spacing","line-height","list-style","list-style-image","list-style-position","list-style-type","margin","margin-bottom","margin-left","margin-right","margin-top","marks","mask","max-height","max-width","min-height","min-width","nav-down","nav-index","nav-left","nav-right","nav-up","none","normal","object-fit","object-position","opacity","order","orphans","outline","outline-color","outline-offset","outline-style","outline-width","overflow","overflow-wrap","overflow-x","overflow-y","padding","padding-bottom","padding-left","padding-right","padding-top","page-break-after","page-break-before","page-break-inside","perspective","perspective-origin","pointer-events","position","quotes","resize","right","src","tab-size","table-layout","text-align","text-align-last","text-decoration","text-decoration-color","text-decoration-line","text-decoration-style","text-indent","text-overflow","text-rendering","text-shadow","text-transform","text-underline-position","top","transform","transform-origin","transform-style","transition","transition-delay","transition-duration","transition-property","transition-timing-function","unicode-bidi","vertical-align","visibility","white-space","widows","width","word-break","word-spacing","word-wrap","z-index"].reverse()
  ;return n=>{const a=(e=>({IMPORTANT:{className:"meta",begin:"!important"},
  HEXCOLOR:{className:"number",begin:"#([a-fA-F0-9]{6}|[a-fA-F0-9]{3})"},
  ATTRIBUTE_SELECTOR_MODE:{className:"selector-attr",begin:/\[/,end:/\]/,
  illegal:"$",contains:[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE]}
  }))(n),l=[n.APOS_STRING_MODE,n.QUOTE_STRING_MODE];return{name:"CSS",
  case_insensitive:!0,illegal:/[=|'\$]/,keywords:{keyframePosition:"from to"},
  classNameAliases:{keyframePosition:"selector-tag"},
  contains:[n.C_BLOCK_COMMENT_MODE,{begin:/-(webkit|moz|ms|o)-(?=[a-z])/
  },n.CSS_NUMBER_MODE,{className:"selector-id",begin:/#[A-Za-z0-9_-]+/,relevance:0
  },{className:"selector-class",begin:"\\.[a-zA-Z-][a-zA-Z0-9_-]*",relevance:0
  },a.ATTRIBUTE_SELECTOR_MODE,{className:"selector-pseudo",variants:[{
  begin:":("+i.join("|")+")"},{begin:"::("+o.join("|")+")"}]},{
  className:"attribute",begin:"\\b("+r.join("|")+")\\b"},{begin:":",end:"[;}]",
  contains:[a.HEXCOLOR,a.IMPORTANT,n.CSS_NUMBER_MODE,...l,{
  begin:/(url|data-uri)\(/,end:/\)/,relevance:0,keywords:{built_in:"url data-uri"
  },contains:[{className:"string",begin:/[^)]/,endsWithParent:!0,excludeEnd:!0}]
  },{className:"built_in",begin:/[\w-]+(?=\()/}]},{
  begin:(s=/@/,((...e)=>e.map((e=>(e=>e?"string"==typeof e?e:e.source:null)(e))).join(""))("(?=",s,")")),
  end:"[{;]",relevance:0,illegal:/:/,contains:[{className:"keyword",
  begin:/@-?\w[\w]*(-\w+)*/},{begin:/\s/,endsWithParent:!0,excludeEnd:!0,
  relevance:0,keywords:{$pattern:/[a-z-]+/,keyword:"and or not only",
  attribute:t.join(" ")},contains:[{begin:/[a-z-]+(?=:)/,className:"attribute"
  },...l,n.CSS_NUMBER_MODE]}]},{className:"selector-tag",
  begin:"\\b("+e.join("|")+")\\b"}]};var s}})());hljs.registerLanguage("json",(()=>{"use strict";return n=>{const e={
  literal:"true false null"
  },i=[n.C_LINE_COMMENT_MODE,n.C_BLOCK_COMMENT_MODE],a=[n.QUOTE_STRING_MODE,n.C_NUMBER_MODE],l={
  end:",",endsWithParent:!0,excludeEnd:!0,contains:a,keywords:e},t={begin:/\{/,
  end:/\}/,contains:[{className:"attr",begin:/"/,end:/"/,
  contains:[n.BACKSLASH_ESCAPE],illegal:"\\n"},n.inherit(l,{begin:/:/
  })].concat(i),illegal:"\\S"},s={begin:"\\[",end:"\\]",contains:[n.inherit(l)],
  illegal:"\\S"};return a.push(t,s),i.forEach((n=>{a.push(n)})),{name:"JSON",
  contains:a,keywords:e,illegal:"\\S"}}})());hljs.registerLanguage("scss",(()=>{"use strict"
  ;const e=["a","abbr","address","article","aside","audio","b","blockquote","body","button","canvas","caption","cite","code","dd","del","details","dfn","div","dl","dt","em","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","html","i","iframe","img","input","ins","kbd","label","legend","li","main","mark","menu","nav","object","ol","p","q","quote","samp","section","span","strong","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","ul","var","video"],t=["any-hover","any-pointer","aspect-ratio","color","color-gamut","color-index","device-aspect-ratio","device-height","device-width","display-mode","forced-colors","grid","height","hover","inverted-colors","monochrome","orientation","overflow-block","overflow-inline","pointer","prefers-color-scheme","prefers-contrast","prefers-reduced-motion","prefers-reduced-transparency","resolution","scan","scripting","update","width","min-width","max-width","min-height","max-height"],i=["active","any-link","blank","checked","current","default","defined","dir","disabled","drop","empty","enabled","first","first-child","first-of-type","fullscreen","future","focus","focus-visible","focus-within","has","host","host-context","hover","indeterminate","in-range","invalid","is","lang","last-child","last-of-type","left","link","local-link","not","nth-child","nth-col","nth-last-child","nth-last-col","nth-last-of-type","nth-of-type","only-child","only-of-type","optional","out-of-range","past","placeholder-shown","read-only","read-write","required","right","root","scope","target","target-within","user-invalid","valid","visited","where"],r=["after","backdrop","before","cue","cue-region","first-letter","first-line","grammar-error","marker","part","placeholder","selection","slotted","spelling-error"],o=["align-content","align-items","align-self","animation","animation-delay","animation-direction","animation-duration","animation-fill-mode","animation-iteration-count","animation-name","animation-play-state","animation-timing-function","auto","backface-visibility","background","background-attachment","background-clip","background-color","background-image","background-origin","background-position","background-repeat","background-size","border","border-bottom","border-bottom-color","border-bottom-left-radius","border-bottom-right-radius","border-bottom-style","border-bottom-width","border-collapse","border-color","border-image","border-image-outset","border-image-repeat","border-image-slice","border-image-source","border-image-width","border-left","border-left-color","border-left-style","border-left-width","border-radius","border-right","border-right-color","border-right-style","border-right-width","border-spacing","border-style","border-top","border-top-color","border-top-left-radius","border-top-right-radius","border-top-style","border-top-width","border-width","bottom","box-decoration-break","box-shadow","box-sizing","break-after","break-before","break-inside","caption-side","clear","clip","clip-path","color","column-count","column-fill","column-gap","column-rule","column-rule-color","column-rule-style","column-rule-width","column-span","column-width","columns","content","counter-increment","counter-reset","cursor","direction","display","empty-cells","filter","flex","flex-basis","flex-direction","flex-flow","flex-grow","flex-shrink","flex-wrap","float","font","font-display","font-family","font-feature-settings","font-kerning","font-language-override","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-variant-ligatures","font-variation-settings","font-weight","height","hyphens","icon","image-orientation","image-rendering","image-resolution","ime-mode","inherit","initial","justify-content","left","letter-spacing","line-height","list-style","list-style-image","list-style-position","list-style-type","margin","margin-bottom","margin-left","margin-right","margin-top","marks","mask","max-height","max-width","min-height","min-width","nav-down","nav-index","nav-left","nav-right","nav-up","none","normal","object-fit","object-position","opacity","order","orphans","outline","outline-color","outline-offset","outline-style","outline-width","overflow","overflow-wrap","overflow-x","overflow-y","padding","padding-bottom","padding-left","padding-right","padding-top","page-break-after","page-break-before","page-break-inside","perspective","perspective-origin","pointer-events","position","quotes","resize","right","src","tab-size","table-layout","text-align","text-align-last","text-decoration","text-decoration-color","text-decoration-line","text-decoration-style","text-indent","text-overflow","text-rendering","text-shadow","text-transform","text-underline-position","top","transform","transform-origin","transform-style","transition","transition-delay","transition-duration","transition-property","transition-timing-function","unicode-bidi","vertical-align","visibility","white-space","widows","width","word-break","word-spacing","word-wrap","z-index"].reverse()
  ;return a=>{const n=(e=>({IMPORTANT:{className:"meta",begin:"!important"},
  HEXCOLOR:{className:"number",begin:"#([a-fA-F0-9]{6}|[a-fA-F0-9]{3})"},
  ATTRIBUTE_SELECTOR_MODE:{className:"selector-attr",begin:/\[/,end:/\]/,
  illegal:"$",contains:[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE]}
  }))(a),l=r,s=i,d="@[a-z-]+",c={className:"variable",
  begin:"(\\$[a-zA-Z-][a-zA-Z0-9_-]*)\\b"};return{name:"SCSS",case_insensitive:!0,
  illegal:"[=/|']",contains:[a.C_LINE_COMMENT_MODE,a.C_BLOCK_COMMENT_MODE,{
  className:"selector-id",begin:"#[A-Za-z0-9_-]+",relevance:0},{
  className:"selector-class",begin:"\\.[A-Za-z0-9_-]+",relevance:0
  },n.ATTRIBUTE_SELECTOR_MODE,{className:"selector-tag",
  begin:"\\b("+e.join("|")+")\\b",relevance:0},{className:"selector-pseudo",
  begin:":("+s.join("|")+")"},{className:"selector-pseudo",
  begin:"::("+l.join("|")+")"},c,{begin:/\(/,end:/\)/,contains:[a.CSS_NUMBER_MODE]
  },{className:"attribute",begin:"\\b("+o.join("|")+")\\b"},{
  begin:"\\b(whitespace|wait|w-resize|visible|vertical-text|vertical-ideographic|uppercase|upper-roman|upper-alpha|underline|transparent|top|thin|thick|text|text-top|text-bottom|tb-rl|table-header-group|table-footer-group|sw-resize|super|strict|static|square|solid|small-caps|separate|se-resize|scroll|s-resize|rtl|row-resize|ridge|right|repeat|repeat-y|repeat-x|relative|progress|pointer|overline|outside|outset|oblique|nowrap|not-allowed|normal|none|nw-resize|no-repeat|no-drop|newspaper|ne-resize|n-resize|move|middle|medium|ltr|lr-tb|lowercase|lower-roman|lower-alpha|loose|list-item|line|line-through|line-edge|lighter|left|keep-all|justify|italic|inter-word|inter-ideograph|inside|inset|inline|inline-block|inherit|inactive|ideograph-space|ideograph-parenthesis|ideograph-numeric|ideograph-alpha|horizontal|hidden|help|hand|groove|fixed|ellipsis|e-resize|double|dotted|distribute|distribute-space|distribute-letter|distribute-all-lines|disc|disabled|default|decimal|dashed|crosshair|collapse|col-resize|circle|char|center|capitalize|break-word|break-all|bottom|both|bolder|bold|block|bidi-override|below|baseline|auto|always|all-scroll|absolute|table|table-cell)\\b"
  },{begin:":",end:";",
  contains:[c,n.HEXCOLOR,a.CSS_NUMBER_MODE,a.QUOTE_STRING_MODE,a.APOS_STRING_MODE,n.IMPORTANT]
  },{begin:"@(page|font-face)",lexemes:d,keywords:"@page @font-face"},{begin:"@",
  end:"[{;]",returnBegin:!0,keywords:{$pattern:/[a-z-]+/,
  keyword:"and or not only",attribute:t.join(" ")},contains:[{begin:d,
  className:"keyword"},{begin:/[a-z-]+(?=:)/,className:"attribute"
  },c,a.QUOTE_STRING_MODE,a.APOS_STRING_MODE,n.HEXCOLOR,a.CSS_NUMBER_MODE]}]}}
  })());hljs.registerLanguage("python",(()=>{"use strict";return e=>{const n={
  keyword:["and","as","assert","async","await","break","class","continue","def","del","elif","else","except","finally","for","","from","global","if","import","in","is","lambda","nonlocal|10","not","or","pass","raise","return","try","while","with","yield"],
  built_in:["__import__","abs","all","any","ascii","bin","bool","breakpoint","bytearray","bytes","callable","chr","classmethod","compile","complex","delattr","dict","dir","divmod","enumerate","eval","exec","filter","float","format","frozenset","getattr","globals","hasattr","hash","help","hex","id","input","int","isinstance","issubclass","iter","len","list","locals","map","max","memoryview","min","next","object","oct","open","ord","pow","print","property","range","repr","reversed","round","set","setattr","slice","sorted","staticmethod","str","sum","super","tuple","type","vars","zip"],
  literal:["__debug__","Ellipsis","False","None","NotImplemented","True"]},a={
  className:"meta",begin:/^(>>>|\.\.\.) /},s={className:"subst",begin:/\{/,
  end:/\}/,keywords:n,illegal:/#/},i={begin:/\{\{/,relevance:0},r={
  className:"string",contains:[e.BACKSLASH_ESCAPE],variants:[{
  begin:/([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?'''/,end:/'''/,
  contains:[e.BACKSLASH_ESCAPE,a],relevance:10},{
  begin:/([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?"""/,end:/"""/,
  contains:[e.BACKSLASH_ESCAPE,a],relevance:10},{
  begin:/([fF][rR]|[rR][fF]|[fF])'''/,end:/'''/,
  contains:[e.BACKSLASH_ESCAPE,a,i,s]},{begin:/([fF][rR]|[rR][fF]|[fF])"""/,
  end:/"""/,contains:[e.BACKSLASH_ESCAPE,a,i,s]},{begin:/([uU]|[rR])'/,end:/'/,
  relevance:10},{begin:/([uU]|[rR])"/,end:/"/,relevance:10},{
  begin:/([bB]|[bB][rR]|[rR][bB])'/,end:/'/},{begin:/([bB]|[bB][rR]|[rR][bB])"/,
  end:/"/},{begin:/([fF][rR]|[rR][fF]|[fF])'/,end:/'/,
  contains:[e.BACKSLASH_ESCAPE,i,s]},{begin:/([fF][rR]|[rR][fF]|[fF])"/,end:/"/,
  contains:[e.BACKSLASH_ESCAPE,i,s]},e.APOS_STRING_MODE,e.QUOTE_STRING_MODE]
  },t="[0-9](_?[0-9])*",l=`(\\b(${t}))?\\.(${t})|\\b(${t})\\.`,b={
  className:"number",relevance:0,variants:[{
  begin:`(\\b(${t})|(${l}))[eE][+-]?(${t})[jJ]?\\b`},{begin:`(${l})[jJ]?`},{
  begin:"\\b([1-9](_?[0-9])*|0+(_?0)*)[lLjJ]?\\b"},{
  begin:"\\b0[bB](_?[01])+[lL]?\\b"},{begin:"\\b0[oO](_?[0-7])+[lL]?\\b"},{
  begin:"\\b0[xX](_?[0-9a-fA-F])+[lL]?\\b"},{begin:`\\b(${t})[jJ]\\b`}]},o={
  className:"params",variants:[{begin:/\(\s*\)/,skip:!0,className:null},{
  begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:n,
  contains:["self",a,b,r,e.HASH_COMMENT_MODE]}]};return s.contains=[r,b,a],{
  name:"Python",aliases:["py","gyp","ipython"],keywords:n,
  illegal:/(<\/|->|\?)|=>/,contains:[a,b,{begin:/\bself\b/},{beginKeywords:"if",
  relevance:0},r,e.HASH_COMMENT_MODE,{variants:[{className:"function",
  beginKeywords:"def"},{className:"class",beginKeywords:"class"}],end:/:/,
  illegal:/[${=;\n,]/,contains:[e.UNDERSCORE_TITLE_MODE,o,{begin:/->/,
  endsWithParent:!0,keywords:"None"}]},{className:"meta",begin:/^[\t ]*@/,
  end:/(?=#)|$/,contains:[b,o,r]},{begin:/\b(print|exec)\(/}]}}})());hljs.registerLanguage("javascript",(()=>{"use strict"
  ;const e="[A-Za-z$_][0-9A-Za-z$_]*",n=["as","in","of","if","for","while","finally","var","new","function","do","return","void","else","break","catch","instanceof","with","throw","case","default","try","switch","continue","typeof","delete","let","yield","const","class","debugger","async","await","static","import","from","export","extends"],a=["true","false","null","undefined","NaN","Infinity"],s=[].concat(["setInterval","setTimeout","clearInterval","clearTimeout","require","exports","eval","isFinite","isNaN","parseFloat","parseInt","decodeURI","decodeURIComponent","encodeURI","encodeURIComponent","escape","unescape"],["arguments","this","super","console","window","document","localStorage","module","global"],["Intl","DataView","Number","Math","Date","String","RegExp","Object","Function","Boolean","Error","Symbol","Set","Map","WeakSet","WeakMap","Proxy","Reflect","JSON","Promise","Float64Array","Int16Array","Int32Array","Int8Array","Uint16Array","Uint32Array","Float32Array","Array","Uint8Array","Uint8ClampedArray","ArrayBuffer"],["EvalError","InternalError","RangeError","ReferenceError","SyntaxError","TypeError","URIError"])
  ;function r(e){return t("(?=",e,")")}function t(...e){return e.map((e=>{
  return(n=e)?"string"==typeof n?n:n.source:null;var n})).join("")}return i=>{
  const c=e,o={begin:/<[A-Za-z0-9\\._:-]+/,end:/\/[A-Za-z0-9\\._:-]+>|\/>/,
  isTrulyOpeningTag:(e,n)=>{const a=e[0].length+e.index,s=e.input[a]
  ;"<"!==s?">"===s&&(((e,{after:n})=>{const a="</"+e[0].slice(1)
  ;return-1!==e.input.indexOf(a,n)})(e,{after:a
  })||n.ignoreMatch()):n.ignoreMatch()}},l={$pattern:e,keyword:n,literal:a,
  built_in:s},b="\\.([0-9](_?[0-9])*)",g="0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",d={
  className:"number",variants:[{
  begin:`(\\b(${g})((${b})|\\.)?|(${b}))[eE][+-]?([0-9](_?[0-9])*)\\b`},{
  begin:`\\b(${g})\\b((${b})\\b|\\.)?|(${b})\\b`},{
  begin:"\\b(0|[1-9](_?[0-9])*)n\\b"},{
  begin:"\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"},{
  begin:"\\b0[bB][0-1](_?[0-1])*n?\\b"},{begin:"\\b0[oO][0-7](_?[0-7])*n?\\b"},{
  begin:"\\b0[0-7]+n?\\b"}],relevance:0},E={className:"subst",begin:"\\$\\{",
  end:"\\}",keywords:l,contains:[]},u={begin:"html`",end:"",starts:{end:"`",
  returnEnd:!1,contains:[i.BACKSLASH_ESCAPE,E],subLanguage:"xml"}},_={
  begin:"css`",end:"",starts:{end:"`",returnEnd:!1,
  contains:[i.BACKSLASH_ESCAPE,E],subLanguage:"css"}},m={className:"string",
  begin:"`",end:"`",contains:[i.BACKSLASH_ESCAPE,E]},N={className:"comment",
  variants:[i.COMMENT(/\/\*\*(?!\/)/,"\\*/",{relevance:0,contains:[{
  className:"doctag",begin:"@[A-Za-z]+",contains:[{className:"type",begin:"\\{",
  end:"\\}",relevance:0},{className:"variable",begin:c+"(?=\\s*(-)|$)",
  endsParent:!0,relevance:0},{begin:/(?=[^\n])\s/,relevance:0}]}]
  }),i.C_BLOCK_COMMENT_MODE,i.C_LINE_COMMENT_MODE]
  },y=[i.APOS_STRING_MODE,i.QUOTE_STRING_MODE,u,_,m,d,i.REGEXP_MODE]
  ;E.contains=y.concat({begin:/\{/,end:/\}/,keywords:l,contains:["self"].concat(y)
  });const f=[].concat(N,E.contains),A=f.concat([{begin:/\(/,end:/\)/,keywords:l,
  contains:["self"].concat(f)}]),p={className:"params",begin:/\(/,end:/\)/,
  excludeBegin:!0,excludeEnd:!0,keywords:l,contains:A};return{name:"Javascript",
  aliases:["js","jsx","mjs","cjs"],keywords:l,exports:{PARAMS_CONTAINS:A},
  illegal:/#(?![$_A-z])/,contains:[i.SHEBANG({label:"shebang",binary:"node",
  relevance:5}),{label:"use_strict",className:"meta",relevance:10,
  begin:/^\s*['"]use (strict|asm)['"]/
  },i.APOS_STRING_MODE,i.QUOTE_STRING_MODE,u,_,m,N,d,{
  begin:t(/[{,\n]\s*/,r(t(/(((\/\/.*$)|(\/\*(\*[^/]|[^*])*\*\/))\s*)*/,c+"\\s*:"))),
  relevance:0,contains:[{className:"attr",begin:c+r("\\s*:"),relevance:0}]},{
  begin:"("+i.RE_STARTERS_RE+"|\\b(case|return|throw)\\b)\\s*",
  keywords:"return throw case",contains:[N,i.REGEXP_MODE,{className:"function",
  begin:"(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|"+i.UNDERSCORE_IDENT_RE+")\\s*=>",
  returnBegin:!0,end:"\\s*=>",contains:[{className:"params",variants:[{
  begin:i.UNDERSCORE_IDENT_RE,relevance:0},{className:null,begin:/\(\s*\)/,skip:!0
  },{begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:l,contains:A}]}]
  },{begin:/,/,relevance:0},{className:"",begin:/\s/,end:/\s*/,skip:!0},{
  variants:[{begin:"<>",end:"</>"},{begin:o.begin,"on:begin":o.isTrulyOpeningTag,
  end:o.end}],subLanguage:"xml",contains:[{begin:o.begin,end:o.end,skip:!0,
  contains:["self"]}]}],relevance:0},{className:"function",
  beginKeywords:"function",end:/[{;]/,excludeEnd:!0,keywords:l,
  contains:["self",i.inherit(i.TITLE_MODE,{begin:c}),p],illegal:/%/},{
  beginKeywords:"while if switch catch for"},{className:"function",
  begin:i.UNDERSCORE_IDENT_RE+"\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",
  returnBegin:!0,contains:[p,i.inherit(i.TITLE_MODE,{begin:c})]},{variants:[{
  begin:"\\."+c},{begin:"\\$"+c}],relevance:0},{className:"class",
  beginKeywords:"class",end:/[{;=]/,excludeEnd:!0,illegal:/[:"[\]]/,contains:[{
  beginKeywords:"extends"},i.UNDERSCORE_TITLE_MODE]},{begin:/\b(?=constructor)/,
  end:/[{;]/,excludeEnd:!0,contains:[i.inherit(i.TITLE_MODE,{begin:c}),"self",p]
  },{begin:"(get|set)\\s+(?="+c+"\\()",end:/\{/,keywords:"get set",
  contains:[i.inherit(i.TITLE_MODE,{begin:c}),{begin:/\(\)/},p]},{begin:/\$[(.]/}]
  }}})());


var doubleHover = function(selector, hoverClass) {
  $(document).on('mouseover mouseout', selector, function(e) {
      $(selector)
      .filter('[href="' + $(this).attr('href') + '"]')
      .toggleClass(hoverClass, e.type == 'mouseover');
  });
}