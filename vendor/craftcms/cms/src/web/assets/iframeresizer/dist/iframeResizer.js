!function(e){if("undefined"!=typeof window){var n,i=0,t=!1,o=!1,r=7,a="[iFrameSizer]",s=a.length,d=null,c=window.requestAnimationFrame,u=Object.freeze({max:1,scroll:1,bodyScroll:1,documentElementScroll:1}),f={},l=null,m=Object.freeze({autoResize:!0,bodyBackground:null,bodyMargin:null,bodyMarginV1:8,bodyPadding:null,checkOrigin:!0,inPageLinks:!1,enablePublicMethods:!0,heightCalculationMethod:"bodyOffset",id:"iFrameResizer",interval:32,log:!1,maxHeight:1/0,maxWidth:1/0,minHeight:0,minWidth:0,mouseEvents:!0,resizeFrom:"parent",scrolling:!1,sizeHeight:!0,sizeWidth:!1,warningTimeout:5e3,tolerance:0,widthCalculationMethod:"scroll",onClose:function(){return!0},onClosed:function(){},onInit:function(){},onMessage:function(){x("onMessage function not defined")},onMouseEnter:function(){},onMouseLeave:function(){},onResized:function(){},onScroll:function(){return!0}}),g={};window.jQuery!==e&&((n=window.jQuery).fn?n.fn.iFrameResize||(n.fn.iFrameResize=function(e){return this.filter("iframe").each((function(n,i){j(i,e)})).end()}):v("","Unable to bind to jQuery, it is not fully loaded.")),"function"==typeof define&&define.amd?define([],L):"object"==typeof module&&"object"==typeof module.exports&&(module.exports=L()),window.iFrameResize=window.iFrameResize||L()}function h(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}function p(e,n,i){e.addEventListener(n,i,!1)}function w(e,n,i){e.removeEventListener(n,i,!1)}function b(e){return f[e]?f[e].log:t}function y(e,n){I("log",e,n,b(e))}function v(e,n){I("info",e,n,b(e))}function x(e,n){I("warn",e,n,!0)}function I(e,n,i,t){!0===t&&"object"==typeof window.console&&console[e](function(e){return a+"["+function(e){var n="Host page: "+e;return window.top!==window.self&&(n=window.parentIFrame&&window.parentIFrame.getId?window.parentIFrame.getId()+": "+e:"Nested host page: "+e),n}(e)+"]"}(n),i)}function M(e){function n(){i("Height"),i("Width"),W((function(){N(A),E(L),h("onResized",A)}),A,"init")}function i(e){var n=Number(f[L]["max"+e]),i=Number(f[L]["min"+e]),t=e.toLowerCase(),o=Number(A[t]);y(L,"Checking "+t+" is in range "+i+"-"+n),o<i&&(o=i,y(L,"Set "+t+" to min value")),o>n&&(o=n,y(L,"Set "+t+" to max value")),A[t]=""+o}function t(e){return P.slice(P.indexOf(":")+r+e)}function o(e,n){var i,t;i=function(){var i,t;C("Send Page Info","pageInfo:"+(i=document.body.getBoundingClientRect(),t=A.iframe.getBoundingClientRect(),JSON.stringify({iframeHeight:t.height,iframeWidth:t.width,clientHeight:Math.max(document.documentElement.clientHeight,window.innerHeight||0),clientWidth:Math.max(document.documentElement.clientWidth,window.innerWidth||0),offsetTop:parseInt(t.top-i.top,10),offsetLeft:parseInt(t.left-i.left,10),scrollTop:window.pageYOffset,scrollLeft:window.pageXOffset,documentHeight:document.documentElement.clientHeight,documentWidth:document.documentElement.clientWidth,windowHeight:window.innerHeight,windowWidth:window.innerWidth})),e,n)},g[t=n]||(g[t]=setTimeout((function(){g[t]=null,i()}),32))}function c(e){var n=e.getBoundingClientRect();return O(L),{x:Math.floor(Number(n.left)+Number(d.x)),y:Math.floor(Number(n.top)+Number(d.y))}}function u(e){var n=e?c(A.iframe):{x:0,y:0},i={x:Number(A.width)+n.x,y:Number(A.height)+n.y};y(L,"Reposition requested from iFrame (offset x:"+n.x+" y:"+n.y+")"),window.top===window.self?(d=i,l(),y(L,"--")):window.parentIFrame?window.parentIFrame["scrollTo"+(e?"Offset":"")](i.x,i.y):x(L,"Unable to scroll to requested position, window.parentIFrame not found")}function l(){!1===h("onScroll",d)?R():E(L)}function m(e){var n={};if(0===Number(A.width)&&0===Number(A.height)){var i=t(9).split(":");n={x:i[1],y:i[0]}}else n={x:A.width,y:A.height};h(e,{iframe:A.iframe,screenX:Number(n.x),screenY:Number(n.y),type:A.type})}function h(e,n){return z(L,e,n)}var b,I,M,k,j,H,P=e.data,A={},L=null;"[iFrameResizerChild]Ready"===P?function(){for(var e in f)C("iFrame requested init",S(e),f[e].iframe,e)}():a===(""+P).slice(0,s)&&P.slice(s).split(":")[0]in f?(k=(M=P.slice(s).split(":"))[1]?parseInt(M[1],10):0,j=f[M[0]]&&f[M[0]].iframe,H=getComputedStyle(j),A={iframe:j,id:M[0],height:k+function(e){return"border-box"!==e.boxSizing?0:(e.paddingTop?parseInt(e.paddingTop,10):0)+(e.paddingBottom?parseInt(e.paddingBottom,10):0)}(H)+function(e){return"border-box"!==e.boxSizing?0:(e.borderTopWidth?parseInt(e.borderTopWidth,10):0)+(e.borderBottomWidth?parseInt(e.borderBottomWidth,10):0)}(H),width:M[2],type:M[3]},L=A.id,f[L]&&(f[L].loaded=!0),(I=A.type in{true:1,false:1,undefined:1})&&y(L,"Ignoring init message from meta parent page"),!I&&function(e){var n=!0;return f[e]||(n=!1,x(A.type+" No settings for "+e+". Message was: "+P)),n}(L)&&(y(L,"Received: "+P),b=!0,null===A.iframe&&(x(L,"IFrame ("+A.id+") not found"),b=!1),b&&function(){var n,i=e.origin,t=f[L]&&f[L].checkOrigin;if(t&&""+i!="null"&&!(t.constructor===Array?function(){var e=0,n=!1;for(y(L,"Checking connection is from allowed list of origins: "+t);e<t.length;e++)if(t[e]===i){n=!0;break}return n}():(n=f[L]&&f[L].remoteHost,y(L,"Checking connection is from: "+n),i===n)))throw new Error("Unexpected message received from: "+i+" for "+A.iframe.id+". Message was: "+e.data+". This error can be disabled by setting the checkOrigin: false option or by providing of array of trusted domains.");return!0}()&&function(){switch(f[L]&&f[L].firstRun&&f[L]&&(f[L].firstRun=!1),A.type){case"close":F(A.iframe);break;case"message":s=t(6),y(L,"onMessage passed: {iframe: "+A.iframe.id+", message: "+s+"}"),h("onMessage",{iframe:A.iframe,message:JSON.parse(s)}),y(L,"--");break;case"mouseenter":m("onMouseEnter");break;case"mouseleave":m("onMouseLeave");break;case"autoResize":f[L].autoResize=JSON.parse(t(9));break;case"scrollTo":u(!1);break;case"scrollToOffset":u(!0);break;case"pageInfo":o(f[L]&&f[L].iframe,L),function(){function e(e,t){function r(){f[i]?o(f[i].iframe,i):n()}["scroll","resize"].forEach((function(n){y(i,e+n+" listener for sendPageInfo"),t(window,n,r)}))}function n(){e("Remove ",w)}var i=L;e("Add ",p),f[i]&&(f[i].stopPageInfo=n)}();break;case"pageInfoStop":f[L]&&f[L].stopPageInfo&&(f[L].stopPageInfo(),delete f[L].stopPageInfo);break;case"inPageLink":i=t(9).split("#")[1]||"",r=decodeURIComponent(i),(a=document.getElementById(r)||document.getElementsByName(r)[0])?(e=c(a),y(L,"Moving to in page link (#"+i+") at x: "+e.x+" y: "+e.y),d={x:e.x,y:e.y},l(),y(L,"--")):window.top===window.self?y(L,"In page link #"+i+" not found"):window.parentIFrame?window.parentIFrame.moveToAnchor(i):y(L,"In page link #"+i+" not found and window.parentIFrame not found");break;case"reset":T(A);break;case"init":n(),h("onInit",A.iframe);break;default:0===Number(A.width)&&0===Number(A.height)?x("Unsupported message received ("+A.type+"), this is likely due to the iframe containing a later version of iframe-resizer than the parent page"):n()}var e,i,r,a,s}())):v(L,"Ignored: "+P)}function z(e,n,i){var t=null,o=null;if(f[e]){if("function"!=typeof(t=f[e][n]))throw new TypeError(n+" on iFrame["+e+"] is not a function");o=t(i)}return o}function k(e){var n=e.id;delete f[n]}function F(e){var n=e.id;if(!1!==z(n,"onClose",n)){y(n,"Removing iFrame: "+n);try{e.parentNode&&e.parentNode.removeChild(e)}catch(e){x(e)}z(n,"onClosed",n),y(n,"--"),k(e)}else y(n,"Close iframe cancelled by onClose event")}function O(n){null===d&&y(n,"Get page position: "+(d={x:window.pageXOffset===e?document.documentElement.scrollLeft:window.pageXOffset,y:window.pageYOffset===e?document.documentElement.scrollTop:window.pageYOffset}).x+","+d.y)}function E(e){null!==d&&(window.scrollTo(d.x,d.y),y(e,"Set page position: "+d.x+","+d.y),R())}function R(){d=null}function T(e){y(e.id,"Size reset requested by "+("init"===e.type?"host page":"iFrame")),O(e.id),W((function(){N(e),C("reset","reset",e.iframe,e.id)}),e,"reset")}function N(e){function n(n){o||"0"!==e[n]||(o=!0,y(t,"Hidden iFrame detected, creating visibility listener"),function(){function e(){Object.keys(f).forEach((function(e){!function(e){function n(n){return"0px"===(f[e]&&f[e].iframe.style[n])}f[e]&&null!==f[e].iframe.offsetParent&&(n("height")||n("width"))&&C("Visibility change","resize",f[e].iframe,e)}(e)}))}function n(n){y("window","Mutation observed: "+n[0].target+" "+n[0].type),H(e,16)}var i,t=h();t&&(i=document.querySelector("body"),new t(n).observe(i,{attributes:!0,attributeOldValue:!1,characterData:!0,characterDataOldValue:!1,childList:!0,subtree:!0}))}())}function i(i){!function(n){e.id?(e.iframe.style[n]=e[n]+"px",y(e.id,"IFrame ("+t+") "+n+" set to "+e[n]+"px")):y("undefined","messageData id not set")}(i),n(i)}var t=e.iframe.id;f[t]&&(f[t].sizeHeight&&i("height"),f[t].sizeWidth&&i("width"))}function W(e,n,i){i!==n.type&&c&&!window.jasmine?(y(n.id,"Requesting animation frame"),c(e)):e()}function C(e,n,i,t,o){var r,s=!1;t=t||i.id,f[t]&&(i&&"contentWindow"in i&&null!==i.contentWindow?(r=f[t]&&f[t].targetOrigin,y(t,"["+e+"] Sending msg to iframe["+t+"] ("+n+") targetOrigin: "+r),i.contentWindow.postMessage(a+n,r)):x(t,"["+e+"] IFrame("+t+") not found"),o&&f[t]&&f[t].warningTimeout&&(f[t].msgTimeout=setTimeout((function(){!f[t]||f[t].loaded||s||(s=!0,x(t,"IFrame has not responded within "+f[t].warningTimeout/1e3+" seconds. Check iFrameResizer.contentWindow.js has been loaded in iFrame. This message can be ignored if everything is working, or you can set the warningTimeout option to a higher value or zero to suppress this warning."))}),f[t].warningTimeout)))}function S(e){return e+":"+f[e].bodyMarginV1+":"+f[e].sizeWidth+":"+f[e].log+":"+f[e].interval+":"+f[e].enablePublicMethods+":"+f[e].autoResize+":"+f[e].bodyMargin+":"+f[e].heightCalculationMethod+":"+f[e].bodyBackground+":"+f[e].bodyPadding+":"+f[e].tolerance+":"+f[e].inPageLinks+":"+f[e].resizeFrom+":"+f[e].widthCalculationMethod+":"+f[e].mouseEvents}function j(n,o){function r(e){var n=e.split("Callback");if(2===n.length){var i="on"+n[0].charAt(0).toUpperCase()+n[0].slice(1);this[i]=this[e],delete this[e],x(d,"Deprecated: '"+e+"' has been renamed '"+i+"'. The old method will be removed in the next major version.")}}var a,s,d=function(e){if("string"!=typeof e)throw new TypeError("Invaild id for iFrame. Expected String");var r;return""===e&&(n.id=(r=o&&o.id||m.id+i++,null!==document.getElementById(r)&&(r+=i++),e=r),t=(o||{}).log,y(e,"Added missing iframe ID: "+e+" ("+n.src+")")),e}(n.id);d in f&&"iFrameResizer"in n?x(d,"Ignored iFrame, already setup."):(function(e){var i;e=e||{},f[d]=Object.create(null),f[d].iframe=n,f[d].firstRun=!0,f[d].remoteHost=n.src&&n.src.split("/").slice(0,3).join("/"),function(e){if("object"!=typeof e)throw new TypeError("Options is not an object")}(e),Object.keys(e).forEach(r,e),function(e){for(var n in m)Object.prototype.hasOwnProperty.call(m,n)&&(f[d][n]=Object.prototype.hasOwnProperty.call(e,n)?e[n]:m[n])}(e),f[d]&&(f[d].targetOrigin=!0===f[d].checkOrigin?""===(i=f[d].remoteHost)||null!==i.match(/^(about:blank|javascript:|file:\/\/)/)?"*":i:"*")}(o),function(){switch(y(d,"IFrame scrolling "+(f[d]&&f[d].scrolling?"enabled":"disabled")+" for "+d),n.style.overflow=!1===(f[d]&&f[d].scrolling)?"hidden":"auto",f[d]&&f[d].scrolling){case"omit":break;case!0:n.scrolling="yes";break;case!1:n.scrolling="no";break;default:n.scrolling=f[d]?f[d].scrolling:"no"}}(),function(){function e(e){var i=f[d][e];1/0!==i&&0!==i&&(n.style[e]="number"==typeof i?i+"px":i,y(d,"Set "+e+" = "+n.style[e]))}function i(e){if(f[d]["min"+e]>f[d]["max"+e])throw new Error("Value for min"+e+" can not be greater than max"+e)}i("Height"),i("Width"),e("maxHeight"),e("minHeight"),e("maxWidth"),e("minWidth")}(),"number"!=typeof(f[d]&&f[d].bodyMargin)&&"0"!==(f[d]&&f[d].bodyMargin)||(f[d].bodyMarginV1=f[d].bodyMargin,f[d].bodyMargin=f[d].bodyMargin+"px"),a=S(d),(s=h())&&function(e){n.parentNode&&new e((function(e){e.forEach((function(e){Array.prototype.slice.call(e.removedNodes).forEach((function(e){e===n&&F(n)}))}))})).observe(n.parentNode,{childList:!0})}(s),p(n,"load",(function(){var i,t;C("iFrame.onload",a,n,e,!0),i=f[d]&&f[d].firstRun,t=f[d]&&f[d].heightCalculationMethod in u,!i&&t&&T({iframe:n,height:0,width:0,type:"init"})})),C("init",a,n,e,!0),f[d]&&(f[d].iframe.iFrameResizer={close:F.bind(null,f[d].iframe),removeListeners:k.bind(null,f[d].iframe),resize:C.bind(null,"Window resize","resize",f[d].iframe),moveToAnchor:function(e){C("Move to anchor","moveToAnchor:"+e,f[d].iframe,d)},sendMessage:function(e){C("Send Message","message:"+(e=JSON.stringify(e)),f[d].iframe,d)}}))}function H(e,n){null===l&&(l=setTimeout((function(){l=null,e()}),n))}function P(){"hidden"!==document.visibilityState&&(y("document","Trigger event: Visibility change"),H((function(){A("Tab Visible","resize")}),16))}function A(e,n){Object.keys(f).forEach((function(i){(function(e){return f[e]&&"parent"===f[e].resizeFrom&&f[e].autoResize&&!f[e].firstRun})(i)&&C(e,n,f[i].iframe,i)}))}function L(){function n(e,n){n&&(function(){if(!n.tagName)throw new TypeError("Object is not a valid DOM element");if("IFRAME"!==n.tagName.toUpperCase())throw new TypeError("Expected <IFRAME> tag, found <"+n.tagName+">")}(),j(n,e),i.push(n))}var i;return function(){var e,n=["moz","webkit","o","ms"];for(e=0;e<n.length&&!c;e+=1)c=window[n[e]+"RequestAnimationFrame"];c?c=c.bind(window):y("setup","RequestAnimationFrame not supported")}(),p(window,"message",M),p(window,"resize",(function(){y("window","Trigger event: resize"),H((function(){A("Window resize","resize")}),16)})),p(document,"visibilitychange",P),p(document,"-webkit-visibilitychange",P),function(t,o){switch(i=[],function(e){e&&e.enablePublicMethods&&x("enablePublicMethods option has been removed, public methods are now always available in the iFrame")}(t),typeof o){case"undefined":case"string":Array.prototype.forEach.call(document.querySelectorAll(o||"iframe"),n.bind(e,t));break;case"object":n(t,o);break;default:throw new TypeError("Unexpected data type ("+typeof o+")")}return i}}}();