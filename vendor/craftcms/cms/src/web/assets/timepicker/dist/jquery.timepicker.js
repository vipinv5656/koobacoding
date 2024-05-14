!function(){"use strict";function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(t)}function t(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function i(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function n(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function r(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,n=new Array(t);i<t;i++)n[i]=e[i];return n}function a(e,t){var i;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(i=function(e,t){if(e){if("string"==typeof e)return s(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);return"Object"===i&&e.constructor&&(i=e.constructor.name),"Map"===i||"Set"===i?Array.from(e):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?s(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){i&&(e=i);var n=0,r=function(){};return{s:r,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,l=!0,o=!1;return{s:function(){i=e[Symbol.iterator]()},n:function(){var e=i.next();return l=e.done,e},e:function(e){o=!0,a=e},f:function(){try{l||null==i.return||i.return()}finally{if(o)throw a}}}}var l=86400,o={bubbles:!0,cancelable:!1,detail:null};function u(e,t){return e==l&&t.show2400?e:e%l}var c,m={appendTo:"body",className:null,closeOnWindow:!1,closeOnScroll:!1,disableTextInput:!1,disableTimeRanges:[],disableTouchKeyboard:!1,durationTime:null,forceRoundTime:!1,lang:{},listWidth:null,maxTime:null,minTime:null,noneOption:!1,orientation:"l",roundingFunction:function(e,t){if(null===e)return null;for(var i=0,n=0;n<e;)i++,n+=60*t.step(i);var r=n-60*t.step(i-1);return u(e-r<n-e?r:n,t)},scrollDefault:null,selectOnBlur:!1,show2400:!1,showDuration:!1,showOn:["click","focus"],step:30,stopScrollPropagation:!1,timeFormat:"g:ia",typeaheadHighlight:!0,useSelect:!1,wrapHours:!0},d={am:"am",pm:"pm",AM:"AM",PM:"PM",decimal:".",mins:"mins",hr:"hr",hrs:"hrs"},f=function(){function i(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")})(this,i),this._handleFormatValue=this._handleFormatValue.bind(this),this._handleKeyUp=this._handleKeyUp.bind(this),this.targetEl=e;var n=i.extractAttrOptions(e,Object.keys(m));this.settings=this.parseSettings(r(r(r({},m),t),n))}var n,s,u;return n=i,u=[{key:"extractAttrOptions",value:function(e,t){var i,n={},r=a(t);try{for(r.s();!(i=r.n()).done;){var s=i.value;s in e.dataset&&(n[s]=e.dataset[s])}}catch(e){r.e(e)}finally{r.f()}return n}},{key:"isVisible",value:function(e){var t=e[0];return t.offsetWidth>0&&t.offsetHeight>0}},{key:"hideAll",value:function(){var e,t=a(document.getElementsByClassName("ui-timepicker-input"));try{for(t.s();!(e=t.n()).done;){var i=e.value.timepickerObj;i&&i.hideMe()}}catch(e){t.e(e)}finally{t.f()}}}],(s=[{key:"hideMe",value:function(){if(this.settings.useSelect)this.targetEl.blur();else if(this.list&&i.isVisible(this.list)){this.settings.selectOnBlur&&this._selectValue(),this.list.hide();var e=new CustomEvent("hideTimepicker",o);this.targetEl.dispatchEvent(e)}}},{key:"_findRow",value:function(e){if(!e&&0!==e)return!1;var t=!1;return e=this.settings.roundingFunction(e,this.settings),!!this.list&&(this.list.find("li").each((function(i,n){var r=parseInt(n.dataset.time);if(!isNaN(r))return r==e?(t=n,!1):void 0})),t)}},{key:"_hideKeyboard",value:function(){return(window.navigator.msMaxTouchPoints||"ontouchstart"in document)&&this.settings.disableTouchKeyboard}},{key:"_setTimeValue",value:function(e,t){if("INPUT"===this.targetEl.nodeName){null===e&&""==this.targetEl.value||(this.targetEl.value=e);var i=this;i.settings.useSelect&&"select"!=t&&i.list&&i.list.val(i._roundAndFormatTime(i.anytime2int(e)))}var n=new CustomEvent("selectTime",o);if(this.selectedValue!=e){this.selectedValue=e;var r=new CustomEvent("changeTime",o),s=new CustomEvent("change",Object.assign(o,{detail:"timepicker"}));return"select"==t?(this.targetEl.dispatchEvent(n),this.targetEl.dispatchEvent(r),this.targetEl.dispatchEvent(s)):-1==["error","initial"].indexOf(t)&&this.targetEl.dispatchEvent(r),!0}return-1==["error","initial"].indexOf(t)&&this.targetEl.dispatchEvent(n),!1}},{key:"_getTimeValue",value:function(){return"INPUT"===this.targetEl.nodeName?this.targetEl.value:this.selectedValue}},{key:"_selectValue",value:function(){var e=this;e.settings;var t=e.list.find(".ui-timepicker-selected");if(t.hasClass("ui-timepicker-disabled"))return!1;if(!t.length)return!0;var i=t.get(0).dataset.time;if(i){var n=parseInt(i);isNaN(n)||(i=n)}return null!==i&&("string"!=typeof i&&(i=e._int2time(i)),e._setTimeValue(i,"select")),!0}},{key:"anytime2int",value:function(t){return"number"==typeof t?t:"string"==typeof t?this.time2int(t):"object"===e(t)&&t instanceof Date?3600*t.getHours()+60*t.getMinutes()+t.getSeconds():"function"==typeof t?t():null}},{key:"time2int",value:function(e){if(""===e||null==e)return null;if("now"===e)return this.anytime2int(new Date);if("string"!=typeof e)return e;e=e.toLowerCase().replace(/[\s\.]/g,""),"am"!==this.settings.lang.am||"a"!=e.slice(-1)&&"p"!=e.slice(-1)||(e+="m");var t=/^(([^0-9]*))?([0-9]?[0-9])(([0-5][0-9]))?(([0-5][0-9]))?(([^0-9]*))$/;e.match(/\W/)&&(t=/^(([^0-9]*))?([0-9]?[0-9])(\W+([0-5][0-9]?))?(\W+([0-5][0-9]))?(([^0-9]*))$/);var i=e.match(t);if(!i)return null;var n=parseInt(1*i[3],10),r=i[2]||i[9],s=this.parseMinuteString(i[5]),a=1*i[7]||0;r||2!=i[3].length||"0"!=i[3][0]||(r="am"),n>24&&!s&&(n=1*i[3][0],s=this.parseMinuteString(i[3][1]));var o=n;if(n<=12&&r){var u=(r=r.trim())==this.settings.lang.pm||r==this.settings.lang.PM;o=12==n?u?12:0:n+(u?12:0)}else if(3600*n+60*s+a>=l+(this.settings.show2400?1:0)){if(!1===this.settings.wrapHours)return null;o=n%24}var c=3600*o+60*s+a;if(n<12&&!r&&this.settings._twelveHourTime&&this.settings.scrollDefault()){var m=c-this.settings.scrollDefault();m<0&&m>=-43200&&(c=(c+43200)%l)}return c}},{key:"parseMinuteString",value:function(e){e||(e=0);var t=1;return 1==e.length&&(t=10),parseInt(e)*t||0}},{key:"intStringDateOrFunc2func",value:function(e){var t=this;return null==e?function(){return null}:"function"==typeof e?function(){return t.anytime2int(e())}:function(){return t.anytime2int(e)}}},{key:"parseSettings",value:function(e){if(e.lang=r(r({},d),e.lang),this.settings=e,e.listWidth&&(e.listWidth=this.anytime2int(e.listWidth)),e.minTime=this.intStringDateOrFunc2func(e.minTime),e.maxTime=this.intStringDateOrFunc2func(e.maxTime),e.durationTime=this.intStringDateOrFunc2func(e.durationTime),e.scrollDefault?e.scrollDefault=this.intStringDateOrFunc2func(e.scrollDefault):e.scrollDefault=e.minTime,"string"==typeof e.timeFormat&&e.timeFormat.match(/[gh]/)&&(e._twelveHourTime=!0),"function"!=typeof e.step){var t=e.step;e.step=function(){return t}}return e.disableTimeRanges=this._parseDisableTimeRanges(e.disableTimeRanges),e.closeOnWindowScroll&&!e.closeOnScroll&&(e.closeOnScroll=e.closeOnWindowScroll),!0===e.closeOnScroll&&(e.closeOnScroll=window.document),e}},{key:"_parseDisableTimeRanges",value:function(e){if(!e||0==e.length)return[];for(var t in e)e[t]=[this.anytime2int(e[t][0]),this.anytime2int(e[t][1])];for(t=(e=e.sort((function(e,t){return e[0]-t[0]}))).length-1;t>0;t--)e[t][0]<=e[t-1][1]&&(e[t-1]=[Math.min(e[t][0],e[t-1][0]),Math.max(e[t][1],e[t-1][1])],e.splice(t,1));return e}},{key:"_disableTextInputHandler",value:function(e){switch(e.keyCode){case 13:case 9:return;default:e.preventDefault()}}},{key:"_int2duration",value:function(e,t){e=Math.abs(e);var i,n,r=Math.round(e/60),s=[];return r<60?s=[r,this.settings.lang.mins]:(i=Math.floor(r/60),n=r%60,30==t&&30==n&&(i+=this.settings.lang.decimal+5),s.push(i),s.push(1==i?this.settings.lang.hr:this.settings.lang.hrs),30!=t&&n&&(s.push(n),s.push(this.settings.lang.mins))),s.join(" ")}},{key:"_roundAndFormatTime",value:function(e){if(null!==(e=this.settings.roundingFunction(e,this.settings)))return this._int2time(e)}},{key:"_int2time",value:function(e){if("number"!=typeof e)return null;var t=parseInt(e%60),i=parseInt(e/60%60),n=parseInt(e/3600%24),r=new Date(1970,0,2,n,i,t,0);if(isNaN(r.getTime()))return null;if("function"==typeof this.settings.timeFormat)return this.settings.timeFormat(r);for(var s,a,o="",u=0;u<this.settings.timeFormat.length;u++)switch(a=this.settings.timeFormat.charAt(u)){case"a":o+=r.getHours()>11?this.settings.lang.pm:this.settings.lang.am;break;case"A":o+=r.getHours()>11?this.settings.lang.PM:this.settings.lang.AM;break;case"g":o+=0==(s=r.getHours()%12)?"12":s;break;case"G":s=r.getHours(),e===l&&(s=this.settings.show2400?24:0),o+=s;break;case"h":0!=(s=r.getHours()%12)&&s<10&&(s="0"+s),o+=0===s?"12":s;break;case"H":s=r.getHours(),e===l&&(s=this.settings.show2400?24:0),o+=s>9?s:"0"+s;break;case"i":o+=(i=r.getMinutes())>9?i:"0"+i;break;case"s":o+=(t=r.getSeconds())>9?t:"0"+t;break;case"\\":u++,o+=this.settings.timeFormat.charAt(u);break;default:o+=a}return o}},{key:"_setSelected",value:function(){var e=this.list;e.find("li").removeClass("ui-timepicker-selected");var t=this.anytime2int(this._getTimeValue());if(null!==t){var i=this._findRow(t);if(i){var n=i.getBoundingClientRect(),r=e.get(0).getBoundingClientRect(),s=n.top-r.top;if(s+n.height>r.height||s<0){var a=e.scrollTop()+(n.top-r.top)-n.height;e.scrollTop(a)}var l=parseInt(i.dataset.time);(this.settings.forceRoundTime||l===t)&&i.classList.add("ui-timepicker-selected")}}}},{key:"_isFocused",value:function(e){return e===document.activeElement}},{key:"_handleFormatValue",value:function(e){e&&"timepicker"==e.detail||this._formatValue(e)}},{key:"_formatValue",value:function(e,t){if(""!==this.targetEl.value){if(!this._isFocused(this.targetEl)||e&&"change"==e.type){var i=this.settings,n=this.anytime2int(this.targetEl.value);if(null!==n){var r=this._isTimeRangeError(n,i);if(i.forceRoundTime){var s=i.roundingFunction(n,i);s!=n&&(n=s,t=null)}var a=this._int2time(n);if(r){this._setTimeValue(a);var l=new CustomEvent("timeRangeError",o);this.targetEl.dispatchEvent(l)}else this._setTimeValue(a,t)}else{var u=new CustomEvent("timeFormatError",o);this.targetEl.dispatchEvent(u)}}}else this._setTimeValue(null,t)}},{key:"_isTimeRangeError",value:function(e,t){if(null!==t.minTime&&null!==t.maxTime&&(e<t.minTime()||e>t.maxTime()))return!0;var i,n=a(t.disableTimeRanges);try{for(n.s();!(i=n.n()).done;){var r=i.value;if(e>=r[0]&&e<r[1])return!0}}catch(e){n.e(e)}finally{n.f()}return!1}},{key:"_generateNoneElement",value:function(t,i){var n,r,s,a;return"object"==e(t)?(n=t.label,r=t.className,s=t.value):"string"==typeof t?(n=t,s=""):$.error("Invalid noneOption value"),i?(a=document.createElement("option")).value=s:(a=document.createElement("li")).dataset.time=String(s),a.innerText=n,a.classList.add(r),a}},{key:"_handleKeyUp",value:function(e){var t=this;if(!this.list||!i.isVisible(this.list)||this.settings.disableTextInput)return!0;if("paste"!==e.type&&"cut"!==e.type)switch(e.keyCode){case 96:case 97:case 98:case 99:case 100:case 101:case 102:case 103:case 104:case 105:case 48:case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:case 65:case 77:case 80:case 186:case 8:case 46:this.settings.typeaheadHighlight?this._setSelected():this.list.hide()}else setTimeout((function(){t.settings.typeaheadHighlight?t._setSelected():t.list.hide()}),0)}}])&&t(n.prototype,s),u&&t(n,u),i}();function p(t){return Array.isArray(t)?t.map(p):!0===t?{label:"None",value:""}:"object"===e(t)?t:{label:t,value:""}}function h(e){var t=document.createElement("option");return t.value=e.value||e.label,e.duration?t.appendChild(document.createTextNode(e.label+" ("+e.duration+")")):t.appendChild(document.createTextNode(e.label)),e.disabled&&(t.disabled=!0),t}function g(e){var t=document.createElement("li");if(t.dataset.time=e.value,e.className&&t.classList.add(e.className),t.className=e.className,t.appendChild(document.createTextNode(e.label)),e.duration){var i=document.createElement("span");i.appendChild(document.createTextNode("("+e.duration+")")),i.classList.add("ui-timepicker-duration"),t.appendChild(i)}return e.disabled&&t.classList.add("ui-timepicker-disabled"),t}function v(e){var t,i=[].concat(function(e){if(!e.noneOption)return[];var t=p(e.noneOption);return Array.isArray(e.noneOption)?t:[t]}(e.settings),function(e){var t,i,n=e.settings,r=null!==(t=n.minTime())&&void 0!==t?t:0,s=null!==(i=n.maxTime())&&void 0!==i?i:r+l-1;s<r&&(s+=l),86399===s&&"string"==typeof n.timeFormat&&n.show2400&&(s=l);for(var o=[],c=r,m=0;c<=s;m++,c+=60*n.step(m)){var d=c,f=e._int2time(d),p=d%l<43200?"ui-timepicker-am":"ui-timepicker-pm",h={label:f,value:u(d,n),className:p};if((null!==n.minTime()||null!==n.durationTime())&&n.showDuration){var g,v=null!==(g=n.durationTime())&&void 0!==g?g:n.minTime();v>c&&(v-=l);var y=e._int2duration(c-v,n.step());h.duration=y}var b,k=a(n.disableTimeRanges);try{for(k.s();!(b=k.n()).done;){var T=b.value;if(d%l>=T[0]&&d%l<T[1]){h.disabled=!0;break}}}catch(e){k.e(e)}finally{k.f()}o.push(h)}return o}(e));if(t=e.settings.useSelect?function(e,t){var i=document.createElement("select");i.classList.add("ui-timepicker-select"),t&&(i.name="ui-timepicker-"+t);var n,r=a(e);try{for(r.s();!(n=r.n()).done;){var s=h(n.value);i.appendChild(s)}}catch(e){r.e(e)}finally{r.f()}return i}(i,e.targetEl.name):function(e){var t=document.createElement("ul");t.classList.add("ui-timepicker-list");var i,n=a(e);try{for(n.s();!(i=n.n()).done;){var r=g(i.value);t.appendChild(r)}}catch(e){n.e(e)}finally{n.f()}var s=document.createElement("div");return s.classList.add("ui-timepicker-wrapper"),s.tabIndex=-1,s.style.display="none",s.style.position="absolute",s.appendChild(t),s}(i),e.settings.className){var n,r=a(e.settings.className.split(" "));try{for(r.s();!(n=r.n()).done;){var s=n.value;t.classList.add(s)}}catch(e){r.e(e)}finally{r.f()}}return!e.settings.showDuration||null===e.settings.minTime&&null===e.settings.durationTime||(t.classList.add("ui-timepicker-with-duration"),t.classList.add("ui-timepicker-step-"+e.settings.step())),t}!function(){if("function"==typeof window.CustomEvent)return!1;window.CustomEvent=function(e,t){t||(t={}),t=Object.assign(o,t);var i=document.createEvent("CustomEvent");return i.initCustomEvent(e,t.bubbles,t.cancelable,t.detail),i}}(),c=function(t){var i={init:function(e){return this.each((function(){var r=t(this),a=new f(this,e),l=a.settings;if(l.lang,this.timepickerObj=a,r.addClass("ui-timepicker-input"),l.useSelect)n(r);else{if(r.prop("autocomplete","off"),l.showOn)for(var o in l.showOn)r.on(l.showOn[o]+".timepicker",i.show);r.on("change.timepicker",a._handleFormatValue),r.on("keydown.timepicker",s),r.on("keyup.timepicker",a._handleKeyUp),l.disableTextInput&&r.on("keydown.timepicker",a._disableTextInputHandler),r.on("cut.timepicker",a._handleKeyUp),r.on("paste.timepicker",a._handleKeyUp),a._formatValue(null,"initial")}}))},show:function(e){var i=t(this),s=i[0].timepickerObj,a=s.settings;if(e&&e.preventDefault(),a.useSelect)s.list.trigger("focus");else{s._hideKeyboard()&&i.trigger("blur");var l=s.list;if(!i.prop("readonly")&&(n(i),l=s.list,!f.isVisible(l))){i.is("input")&&(s.selectedValue=i.val()),s._setSelected(),f.hideAll(),"number"==typeof a.listWidth&&l.width(i.outerWidth()*a.listWidth),l.show();var o={};a.orientation.match(/r/)?o.left=i.offset().left+i.outerWidth()-l.outerWidth()+parseInt(l.css("marginLeft").replace("px",""),10):a.orientation.match(/l/)?o.left=i.offset().left+parseInt(l.css("marginLeft").replace("px",""),10):a.orientation.match(/c/)&&(o.left=i.offset().left+(i.outerWidth()-l.outerWidth())/2+parseInt(l.css("marginLeft").replace("px",""),10)),"t"==(a.orientation.match(/t/)?"t":a.orientation.match(/b/)?"b":i.offset().top+i.outerHeight(!0)+l.outerHeight()>t(window).height()+t(window).scrollTop()?"t":"b")?(l.addClass("ui-timepicker-positioned-top"),o.top=i.offset().top-l.outerHeight()+parseInt(l.css("marginTop").replace("px",""),10)):(l.removeClass("ui-timepicker-positioned-top"),o.top=i.offset().top+i.outerHeight()+parseInt(l.css("marginTop").replace("px",""),10)),l.offset(o);var u=l.find(".ui-timepicker-selected");if(!u.length){var c=s.anytime2int(s._getTimeValue());null!==c?u=t(s._findRow(c)):a.scrollDefault()&&(u=t(s._findRow(a.scrollDefault())))}if(u.length&&!u.hasClass("ui-timepicker-disabled")||(u=l.find("li:not(.ui-timepicker-disabled):first")),u&&u.length){var m=l.scrollTop()+u.position().top-u.outerHeight();l.scrollTop(m)}else l.scrollTop(0);return a.stopScrollPropagation&&t(document).on("wheel.ui-timepicker",".ui-timepicker-wrapper",(function(e){e.preventDefault();var i=t(this).scrollTop();t(this).scrollTop(i+e.originalEvent.deltaY)})),t(document).on("mousedown.ui-timepicker",r),window.addEventListener("resize",r),a.closeOnScroll&&t(a.closeOnScroll).on("scroll.ui-timepicker",r),i.trigger("showTimepicker"),this}}},hide:function(e){var t=this[0].timepickerObj;return t&&t.hideMe(),f.hideAll(),this},option:function(i,r){return"string"==typeof i&&void 0===r?this[0].timepickerObj.settings[i]:this.each((function(){var s=t(this),a=s[0].timepickerObj,l=a.settings,o=a.list;"object"==e(i)?l=t.extend(l,i):"string"==typeof i&&(l[i]=r),l=a.parseSettings(l),a.settings=l,a._formatValue({type:"change"},"initial"),o&&(o.remove(),a.list=null),l.useSelect&&n(s)}))},getSecondsFromMidnight:function(){var e=this[0].timepickerObj;return e.anytime2int(e._getTimeValue())},getTime:function(e){var t=this[0].timepickerObj,i=t._getTimeValue();if(!i)return null;var n=t.anytime2int(i);if(null===n)return null;e||(e=new Date);var r=new Date(e);return r.setHours(n/3600),r.setMinutes(n%3600/60),r.setSeconds(n%60),r.setMilliseconds(0),r},isVisible:function(){var e=this[0].timepickerObj;return!!(e&&e.list&&f.isVisible(e.list))},setTime:function(e){var t=this[0].timepickerObj,i=t.settings,n=t.anytime2int(e);if(t._isTimeRangeError(n,i)){var r=new CustomEvent("timeRangeError",o);t.targetEl.dispatchEvent(r)}if(i.forceRoundTime)var s=t._roundAndFormatTime(n);else s=t._int2time(n);return e&&null===s&&i.noneOption&&(s=e),t._setTimeValue(s,"initial"),t._formatValue({type:"change"},"initial"),t&&t.list&&t._setSelected(),this},remove:function(){var e=this;if(e.hasClass("ui-timepicker-input")){var t=e[0].timepickerObj,i=t.settings;return e.removeAttr("autocomplete","off"),e.removeClass("ui-timepicker-input"),e.removeData("timepicker-obj"),e.off(".timepicker"),t.list&&t.list.remove(),i.useSelect&&e.show(),t.list=null,this}}};function n(e){var n=e[0].timepickerObj,r=n.list,s=n.settings;r&&r.length&&(r.remove(),n.list=null);var a=t(v(n));if(r=s.useSelect?a:a.children("ul"),a.data("timepicker-input",e),n.list=a,s.useSelect)e.val()&&r.val(n._roundAndFormatTime(n.anytime2int(e.val()))),r.on("focus",(function(){t(this).data("timepicker-input").trigger("showTimepicker")})),r.on("blur",(function(){t(this).data("timepicker-input").trigger("hideTimepicker")})),r.on("change",(function(){n._setTimeValue(t(this).val(),"select")})),n._setTimeValue(r.val(),"initial"),e.hide().after(r);else{var l=s.appendTo;"string"==typeof l?l=t(l):"function"==typeof l&&(l=l(e)),l.append(a),n._setSelected(),r.on("mousedown click","li",(function(s){e.off("focus.timepicker"),e.on("focus.timepicker-ie-hack",(function(){e.off("focus.timepicker-ie-hack"),e.on("focus.timepicker",i.show)})),n._hideKeyboard()||e[0].focus(),r.find("li").removeClass("ui-timepicker-selected"),t(this).addClass("ui-timepicker-selected"),n._selectValue()&&(e.trigger("hideTimepicker"),r.on("mouseup.timepicker click.timepicker","li",(function(e){r.off("mouseup.timepicker click.timepicker"),a.hide()})))}))}}function r(e){if("focus"!=e.type||e.target!=window){var i=t(e.target);i.closest(".ui-timepicker-input").length||i.closest(".ui-timepicker-wrapper").length||(f.hideAll(),t(document).off(".ui-timepicker"),t(window).off(".ui-timepicker"))}}function s(e){var n=t(this),r=n[0].timepickerObj,s=r.list;if(!s||!f.isVisible(s)){if(40!=e.keyCode)return!0;i.show.call(n.get(0)),s=r.list,r._hideKeyboard()||n.trigger("focus")}switch(e.keyCode){case 13:return r._selectValue()&&(r._formatValue({type:"change"}),r.hideMe()),e.preventDefault(),!1;case 38:var a=s.find(".ui-timepicker-selected");return a.length?a.is(":first-child")||(a.removeClass("ui-timepicker-selected"),a.prev().addClass("ui-timepicker-selected"),a.prev().position().top<a.outerHeight()&&s.scrollTop(s.scrollTop()-a.outerHeight())):(s.find("li").each((function(e,i){if(t(i).position().top>0)return a=t(i),!1})),a.addClass("ui-timepicker-selected")),!1;case 40:return 0===(a=s.find(".ui-timepicker-selected")).length?(s.find("li").each((function(e,i){if(t(i).position().top>0)return a=t(i),!1})),a.addClass("ui-timepicker-selected")):a.is(":last-child")||(a.removeClass("ui-timepicker-selected"),a.next().addClass("ui-timepicker-selected"),a.next().position().top+2*a.outerHeight()>s.outerHeight()&&s.scrollTop(s.scrollTop()+a.outerHeight())),!1;case 27:s.find("li").removeClass("ui-timepicker-selected"),r.hideMe();break;case 9:r.hideMe();break;default:return!0}}t.fn.timepicker=function(n){return this.length?i[n]?this.hasClass("ui-timepicker-input")?i[n].apply(this,Array.prototype.slice.call(arguments,1)):this:"object"!==e(n)&&n?void t.error("Method "+n+" does not exist on jQuery.timepicker"):i.init.apply(this,arguments):this},t.fn.timepicker.defaults=m},"object"===("undefined"==typeof exports?"undefined":e(exports))&&exports&&"object"===("undefined"==typeof module?"undefined":e(module))&&module&&module.exports===exports?c(require("jquery")):"function"==typeof define&&define.amd?define(["jquery"],c):c(jQuery)}();