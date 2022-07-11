<!DOCTYPE html>
<!-- saved from url=(0075)https://www.codewars.com/kata/583f158ea20cfcbeb400000a/solutions/javascript -->
<html class="dark sl-theme-dark bwaxyyrw idc0_341" lang="en"><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8"><style type="text/css">.turbolinks-progress-bar {
  position: fixed;
  display: block;
  top: 0;
  left: 0;
  height: 3px;
  background: #0076ff;
  z-index: 9999;
  transition: width 300ms ease-out, opacity 150ms 150ms ease-in;
  transform: translate3d(0, 0, 0);
}</style><style type="text/css">.swal-icon--error{border-color:#f27474;-webkit-animation:animateErrorIcon .5s;animation:animateErrorIcon .5s}.swal-icon--error__x-mark{position:relative;display:block;-webkit-animation:animateXMark .5s;animation:animateXMark .5s}.swal-icon--error__line{position:absolute;height:5px;width:47px;background-color:#f27474;display:block;top:37px;border-radius:2px}.swal-icon--error__line--left{-webkit-transform:rotate(45deg);transform:rotate(45deg);left:17px}.swal-icon--error__line--right{-webkit-transform:rotate(-45deg);transform:rotate(-45deg);right:16px}@-webkit-keyframes animateErrorIcon{0%{-webkit-transform:rotateX(100deg);transform:rotateX(100deg);opacity:0}to{-webkit-transform:rotateX(0deg);transform:rotateX(0deg);opacity:1}}@keyframes animateErrorIcon{0%{-webkit-transform:rotateX(100deg);transform:rotateX(100deg);opacity:0}to{-webkit-transform:rotateX(0deg);transform:rotateX(0deg);opacity:1}}@-webkit-keyframes animateXMark{0%{-webkit-transform:scale(.4);transform:scale(.4);margin-top:26px;opacity:0}50%{-webkit-transform:scale(.4);transform:scale(.4);margin-top:26px;opacity:0}80%{-webkit-transform:scale(1.15);transform:scale(1.15);margin-top:-6px}to{-webkit-transform:scale(1);transform:scale(1);margin-top:0;opacity:1}}@keyframes animateXMark{0%{-webkit-transform:scale(.4);transform:scale(.4);margin-top:26px;opacity:0}50%{-webkit-transform:scale(.4);transform:scale(.4);margin-top:26px;opacity:0}80%{-webkit-transform:scale(1.15);transform:scale(1.15);margin-top:-6px}to{-webkit-transform:scale(1);transform:scale(1);margin-top:0;opacity:1}}.swal-icon--warning{border-color:#f8bb86;-webkit-animation:pulseWarning .75s infinite alternate;animation:pulseWarning .75s infinite alternate}.swal-icon--warning__body{width:5px;height:47px;top:10px;border-radius:2px;margin-left:-2px}.swal-icon--warning__body,.swal-icon--warning__dot{position:absolute;left:50%;background-color:#f8bb86}.swal-icon--warning__dot{width:7px;height:7px;border-radius:50%;margin-left:-4px;bottom:-11px}@-webkit-keyframes pulseWarning{0%{border-color:#f8d486}to{border-color:#f8bb86}}@keyframes pulseWarning{0%{border-color:#f8d486}to{border-color:#f8bb86}}.swal-icon--success{border-color:#a5dc86}.swal-icon--success:after,.swal-icon--success:before{content:"";border-radius:50%;position:absolute;width:60px;height:120px;background:#fff;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.swal-icon--success:before{border-radius:120px 0 0 120px;top:-7px;left:-33px;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform-origin:60px 60px;transform-origin:60px 60px}.swal-icon--success:after{border-radius:0 120px 120px 0;top:-11px;left:30px;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform-origin:0 60px;transform-origin:0 60px;-webkit-animation:rotatePlaceholder 4.25s ease-in;animation:rotatePlaceholder 4.25s ease-in}.swal-icon--success__ring{width:80px;height:80px;border:4px solid hsla(98,55%,69%,.2);border-radius:50%;box-sizing:content-box;position:absolute;left:-4px;top:-4px;z-index:2}.swal-icon--success__hide-corners{width:5px;height:90px;background-color:#fff;padding:1px;position:absolute;left:28px;top:8px;z-index:1;-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}.swal-icon--success__line{height:5px;background-color:#a5dc86;display:block;border-radius:2px;position:absolute;z-index:2}.swal-icon--success__line--tip{width:25px;left:14px;top:46px;-webkit-transform:rotate(45deg);transform:rotate(45deg);-webkit-animation:animateSuccessTip .75s;animation:animateSuccessTip .75s}.swal-icon--success__line--long{width:47px;right:8px;top:38px;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-animation:animateSuccessLong .75s;animation:animateSuccessLong .75s}@-webkit-keyframes rotatePlaceholder{0%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}5%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}12%{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}to{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}}@keyframes rotatePlaceholder{0%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}5%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}12%{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}to{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}}@-webkit-keyframes animateSuccessTip{0%{width:0;left:1px;top:19px}54%{width:0;left:1px;top:19px}70%{width:50px;left:-8px;top:37px}84%{width:17px;left:21px;top:48px}to{width:25px;left:14px;top:45px}}@keyframes animateSuccessTip{0%{width:0;left:1px;top:19px}54%{width:0;left:1px;top:19px}70%{width:50px;left:-8px;top:37px}84%{width:17px;left:21px;top:48px}to{width:25px;left:14px;top:45px}}@-webkit-keyframes animateSuccessLong{0%{width:0;right:46px;top:54px}65%{width:0;right:46px;top:54px}84%{width:55px;right:0;top:35px}to{width:47px;right:8px;top:38px}}@keyframes animateSuccessLong{0%{width:0;right:46px;top:54px}65%{width:0;right:46px;top:54px}84%{width:55px;right:0;top:35px}to{width:47px;right:8px;top:38px}}.swal-icon--info{border-color:#c9dae1}.swal-icon--info:before{width:5px;height:29px;bottom:17px;border-radius:2px;margin-left:-2px}.swal-icon--info:after,.swal-icon--info:before{content:"";position:absolute;left:50%;background-color:#c9dae1}.swal-icon--info:after{width:7px;height:7px;border-radius:50%;margin-left:-3px;top:19px}.swal-icon{width:80px;height:80px;border-width:4px;border-style:solid;border-radius:50%;padding:0;position:relative;box-sizing:content-box;margin:20px auto}.swal-icon:first-child{margin-top:32px}.swal-icon--custom{width:auto;height:auto;max-width:100%;border:none;border-radius:0}.swal-icon img{max-width:100%;max-height:100%}.swal-title{color:rgba(0,0,0,.65);font-weight:600;text-transform:none;position:relative;display:block;padding:13px 16px;font-size:27px;line-height:normal;text-align:center;margin-bottom:0}.swal-title:first-child{margin-top:26px}.swal-title:not(:first-child){padding-bottom:0}.swal-title:not(:last-child){margin-bottom:13px}.swal-text{font-size:16px;position:relative;float:none;line-height:normal;vertical-align:top;text-align:left;display:inline-block;margin:0;padding:0 10px;font-weight:400;color:rgba(0,0,0,.64);max-width:calc(100% - 20px);overflow-wrap:break-word;box-sizing:border-box}.swal-text:first-child{margin-top:45px}.swal-text:last-child{margin-bottom:45px}.swal-footer{text-align:right;padding-top:13px;margin-top:13px;padding:13px 16px;border-radius:inherit;border-top-left-radius:0;border-top-right-radius:0}.swal-button-container{margin:5px;display:inline-block;position:relative}.swal-button{background-color:#7cd1f9;color:#fff;border:none;box-shadow:none;border-radius:5px;font-weight:600;font-size:14px;padding:10px 24px;margin:0;cursor:pointer}.swal-button:not([disabled]):hover{background-color:#78cbf2}.swal-button:active{background-color:#70bce0}.swal-button:focus{outline:none;box-shadow:0 0 0 1px #fff,0 0 0 3px rgba(43,114,165,.29)}.swal-button[disabled]{opacity:.5;cursor:default}.swal-button::-moz-focus-inner{border:0}.swal-button--cancel{color:#555;background-color:#efefef}.swal-button--cancel:not([disabled]):hover{background-color:#e8e8e8}.swal-button--cancel:active{background-color:#d7d7d7}.swal-button--cancel:focus{box-shadow:0 0 0 1px #fff,0 0 0 3px rgba(116,136,150,.29)}.swal-button--danger{background-color:#e64942}.swal-button--danger:not([disabled]):hover{background-color:#df4740}.swal-button--danger:active{background-color:#cf423b}.swal-button--danger:focus{box-shadow:0 0 0 1px #fff,0 0 0 3px rgba(165,43,43,.29)}.swal-content{padding:0 20px;margin-top:20px;font-size:medium}.swal-content:last-child{margin-bottom:20px}.swal-content__input,.swal-content__textarea{-webkit-appearance:none;background-color:#fff;border:none;font-size:14px;display:block;box-sizing:border-box;width:100%;border:1px solid rgba(0,0,0,.14);padding:10px 13px;border-radius:2px;transition:border-color .2s}.swal-content__input:focus,.swal-content__textarea:focus{outline:none;border-color:#6db8ff}.swal-content__textarea{resize:vertical}.swal-button--loading{color:transparent}.swal-button--loading~.swal-button__loader{opacity:1}.swal-button__loader{position:absolute;height:auto;width:43px;z-index:2;left:50%;top:50%;-webkit-transform:translateX(-50%) translateY(-50%);transform:translateX(-50%) translateY(-50%);text-align:center;pointer-events:none;opacity:0}.swal-button__loader div{display:inline-block;float:none;vertical-align:baseline;width:9px;height:9px;padding:0;border:none;margin:2px;opacity:.4;border-radius:7px;background-color:hsla(0,0%,100%,.9);transition:background .2s;-webkit-animation:swal-loading-anim 1s infinite;animation:swal-loading-anim 1s infinite}.swal-button__loader div:nth-child(3n+2){-webkit-animation-delay:.15s;animation-delay:.15s}.swal-button__loader div:nth-child(3n+3){-webkit-animation-delay:.3s;animation-delay:.3s}@-webkit-keyframes swal-loading-anim{0%{opacity:.4}20%{opacity:.4}50%{opacity:1}to{opacity:.4}}@keyframes swal-loading-anim{0%{opacity:.4}20%{opacity:.4}50%{opacity:1}to{opacity:.4}}.swal-overlay{position:fixed;top:0;bottom:0;left:0;right:0;text-align:center;font-size:0;overflow-y:auto;background-color:rgba(0,0,0,.4);z-index:10000;pointer-events:none;opacity:0;transition:opacity .3s}.swal-overlay:before{content:" ";display:inline-block;vertical-align:middle;height:100%}.swal-overlay--show-modal{opacity:1;pointer-events:auto}.swal-overlay--show-modal .swal-modal{opacity:1;pointer-events:auto;box-sizing:border-box;-webkit-animation:showSweetAlert .3s;animation:showSweetAlert .3s;will-change:transform}.swal-modal{width:478px;opacity:0;pointer-events:none;background-color:#fff;text-align:center;border-radius:5px;position:static;margin:20px auto;display:inline-block;vertical-align:middle;-webkit-transform:scale(1);transform:scale(1);-webkit-transform-origin:50% 50%;transform-origin:50% 50%;z-index:10001;transition:opacity .2s,-webkit-transform .3s;transition:transform .3s,opacity .2s;transition:transform .3s,opacity .2s,-webkit-transform .3s}@media (max-width:500px){.swal-modal{width:calc(100% - 20px)}}@-webkit-keyframes showSweetAlert{0%{-webkit-transform:scale(1);transform:scale(1)}1%{-webkit-transform:scale(.5);transform:scale(.5)}45%{-webkit-transform:scale(1.05);transform:scale(1.05)}80%{-webkit-transform:scale(.95);transform:scale(.95)}to{-webkit-transform:scale(1);transform:scale(1)}}@keyframes showSweetAlert{0%{-webkit-transform:scale(1);transform:scale(1)}1%{-webkit-transform:scale(.5);transform:scale(.5)}45%{-webkit-transform:scale(1.05);transform:scale(1.05)}80%{-webkit-transform:scale(.95);transform:scale(.95)}to{-webkit-transform:scale(1);transform:scale(1)}}</style>
<script type="text/javascript" src="./110722-CW_files/364dba19a3"></script><script type="text/javascript" async="" src="./110722-CW_files/x27gw54w"></script><script src="./110722-CW_files/nr-1216.min.js"></script><script type="text/javascript" async="" src="./110722-CW_files/analytics.js"></script><script type="text/javascript" async="" src="./110722-CW_files/js"></script><script type="text/javascript">window.NREUM||(NREUM={});NREUM.info={"beacon":"bam.nr-data.net","errorBeacon":"bam.nr-data.net","licenseKey":"364dba19a3","applicationID":"15446117","transactionName":"Jg5ZQEdYXQ1XRRZRUxYJVVtURVVOW1ldUEo=","queueTime":0,"applicationTime":1596,"agent":""}</script>
<script type="text/javascript">(window.NREUM||(NREUM={})).init={ajax:{deny_list:["bam.nr-data.net"]}};(window.NREUM||(NREUM={})).loader_config={licenseKey:"364dba19a3",applicationID:"15446117"};window.NREUM||(NREUM={}),__nr_require=function(t,e,n){function r(n){if(!e[n]){var i=e[n]={exports:{}};t[n][0].call(i.exports,function(e){var i=t[n][1][e];return r(i||e)},i,i.exports)}return e[n].exports}if("function"==typeof __nr_require)return __nr_require;for(var i=0;i<n.length;i++)r(n[i]);return r}({1:[function(t,e,n){function r(){}function i(t,e,n,r){return function(){return s.recordSupportability("API/"+e+"/called"),o(t+e,[u.now()].concat(c(arguments)),n?null:this,r),n?void 0:this}}var o=t("handle"),a=t(9),c=t(10),f=t("ee").get("tracer"),u=t("loader"),s=t(4),d=NREUM;"undefined"==typeof window.newrelic&&(newrelic=d);var p=["setPageViewName","setCustomAttribute","setErrorHandler","finished","addToTrace","inlineHit","addRelease"],l="api-",v=l+"ixn-";a(p,function(t,e){d[e]=i(l,e,!0,"api")}),d.addPageAction=i(l,"addPageAction",!0),d.setCurrentRouteName=i(l,"routeName",!0),e.exports=newrelic,d.interaction=function(){return(new r).get()};var m=r.prototype={createTracer:function(t,e){var n={},r=this,i="function"==typeof e;return o(v+"tracer",[u.now(),t,n],r),function(){if(f.emit((i?"":"no-")+"fn-start",[u.now(),r,i],n),i)try{return e.apply(this,arguments)}catch(t){throw f.emit("fn-err",[arguments,this,t],n),t}finally{f.emit("fn-end",[u.now()],n)}}}};a("actionText,setName,setAttribute,save,ignore,onEnd,getContext,end,get".split(","),function(t,e){m[e]=i(v,e)}),newrelic.noticeError=function(t,e){"string"==typeof t&&(t=new Error(t)),s.recordSupportability("API/noticeError/called"),o("err",[t,u.now(),!1,e])}},{}],2:[function(t,e,n){function r(t){if(NREUM.init){for(var e=NREUM.init,n=t.split("."),r=0;r<n.length-1;r++)if(e=e[n[r]],"object"!=typeof e)return;return e=e[n[n.length-1]]}}e.exports={getConfiguration:r}},{}],3:[function(t,e,n){var r=!1;try{var i=Object.defineProperty({},"passive",{get:function(){r=!0}});window.addEventListener("testPassive",null,i),window.removeEventListener("testPassive",null,i)}catch(o){}e.exports=function(t){return r?{passive:!0,capture:!!t}:!!t}},{}],4:[function(t,e,n){function r(t,e){var n=[a,t,{name:t},e];return o("storeMetric",n,null,"api"),n}function i(t,e){var n=[c,t,{name:t},e];return o("storeEventMetrics",n,null,"api"),n}var o=t("handle"),a="sm",c="cm";e.exports={constants:{SUPPORTABILITY_METRIC:a,CUSTOM_METRIC:c},recordSupportability:r,recordCustom:i}},{}],5:[function(t,e,n){function r(){return c.exists&&performance.now?Math.round(performance.now()):(o=Math.max((new Date).getTime(),o))-a}function i(){return o}var o=(new Date).getTime(),a=o,c=t(11);e.exports=r,e.exports.offset=a,e.exports.getLastTimestamp=i},{}],6:[function(t,e,n){function r(t,e){var n=t.getEntries();n.forEach(function(t){"first-paint"===t.name?l("timing",["fp",Math.floor(t.startTime)]):"first-contentful-paint"===t.name&&l("timing",["fcp",Math.floor(t.startTime)])})}function i(t,e){var n=t.getEntries();if(n.length>0){var r=n[n.length-1];if(u&&u<r.startTime)return;var i=[r],o=a({});o&&i.push(o),l("lcp",i)}}function o(t){t.getEntries().forEach(function(t){t.hadRecentInput||l("cls",[t])})}function a(t){var e=navigator.connection||navigator.mozConnection||navigator.webkitConnection;if(e)return e.type&&(t["net-type"]=e.type),e.effectiveType&&(t["net-etype"]=e.effectiveType),e.rtt&&(t["net-rtt"]=e.rtt),e.downlink&&(t["net-dlink"]=e.downlink),t}function c(t){if(t instanceof y&&!w){var e=Math.round(t.timeStamp),n={type:t.type};a(n),e<=v.now()?n.fid=v.now()-e:e>v.offset&&e<=Date.now()?(e-=v.offset,n.fid=v.now()-e):e=v.now(),w=!0,l("timing",["fi",e,n])}}function f(t){"hidden"===t&&(u=v.now(),l("pageHide",[u]))}if(!("init"in NREUM&&"page_view_timing"in NREUM.init&&"enabled"in NREUM.init.page_view_timing&&NREUM.init.page_view_timing.enabled===!1)){var u,s,d,p,l=t("handle"),v=t("loader"),m=t(8),g=t(3),y=NREUM.o.EV;if("PerformanceObserver"in window&&"function"==typeof window.PerformanceObserver){s=new PerformanceObserver(r);try{s.observe({entryTypes:["paint"]})}catch(h){}d=new PerformanceObserver(i);try{d.observe({entryTypes:["largest-contentful-paint"]})}catch(h){}p=new PerformanceObserver(o);try{p.observe({type:"layout-shift",buffered:!0})}catch(h){}}if("addEventListener"in document){var w=!1,b=["click","keydown","mousedown","pointerdown","touchstart"];b.forEach(function(t){document.addEventListener(t,c,g(!1))})}m(f)}},{}],7:[function(t,e,n){function r(t,e){if(!i)return!1;if(t!==i)return!1;if(!e)return!0;if(!o)return!1;for(var n=o.split("."),r=e.split("."),a=0;a<r.length;a++)if(r[a]!==n[a])return!1;return!0}var i=null,o=null,a=/Version\/(\S+)\s+Safari/;if(navigator.userAgent){var c=navigator.userAgent,f=c.match(a);f&&c.indexOf("Chrome")===-1&&c.indexOf("Chromium")===-1&&(i="Safari",o=f[1])}e.exports={agent:i,version:o,match:r}},{}],8:[function(t,e,n){function r(t){function e(){t(c&&document[c]?document[c]:document[o]?"hidden":"visible")}"addEventListener"in document&&a&&document.addEventListener(a,e,i(!1))}var i=t(3);e.exports=r;var o,a,c;"undefined"!=typeof document.hidden?(o="hidden",a="visibilitychange",c="visibilityState"):"undefined"!=typeof document.msHidden?(o="msHidden",a="msvisibilitychange"):"undefined"!=typeof document.webkitHidden&&(o="webkitHidden",a="webkitvisibilitychange",c="webkitVisibilityState")},{}],9:[function(t,e,n){function r(t,e){var n=[],r="",o=0;for(r in t)i.call(t,r)&&(n[o]=e(r,t[r]),o+=1);return n}var i=Object.prototype.hasOwnProperty;e.exports=r},{}],10:[function(t,e,n){function r(t,e,n){e||(e=0),"undefined"==typeof n&&(n=t?t.length:0);for(var r=-1,i=n-e||0,o=Array(i<0?0:i);++r<i;)o[r]=t[e+r];return o}e.exports=r},{}],11:[function(t,e,n){e.exports={exists:"undefined"!=typeof window.performance&&window.performance.timing&&"undefined"!=typeof window.performance.timing.navigationStart}},{}],ee:[function(t,e,n){function r(){}function i(t){function e(t){return t&&t instanceof r?t:t?u(t,f,a):a()}function n(n,r,i,o,a){if(a!==!1&&(a=!0),!l.aborted||o){t&&a&&t(n,r,i);for(var c=e(i),f=m(n),u=f.length,s=0;s<u;s++)f[s].apply(c,r);var p=d[w[n]];return p&&p.push([b,n,r,c]),c}}function o(t,e){h[t]=m(t).concat(e)}function v(t,e){var n=h[t];if(n)for(var r=0;r<n.length;r++)n[r]===e&&n.splice(r,1)}function m(t){return h[t]||[]}function g(t){return p[t]=p[t]||i(n)}function y(t,e){l.aborted||s(t,function(t,n){e=e||"feature",w[n]=e,e in d||(d[e]=[])})}var h={},w={},b={on:o,addEventListener:o,removeEventListener:v,emit:n,get:g,listeners:m,context:e,buffer:y,abort:c,aborted:!1};return b}function o(t){return u(t,f,a)}function a(){return new r}function c(){(d.api||d.feature)&&(l.aborted=!0,d=l.backlog={})}var f="nr@context",u=t("gos"),s=t(9),d={},p={},l=e.exports=i();e.exports.getOrSetContext=o,l.backlog=d},{}],gos:[function(t,e,n){function r(t,e,n){if(i.call(t,e))return t[e];var r=n();if(Object.defineProperty&&Object.keys)try{return Object.defineProperty(t,e,{value:r,writable:!0,enumerable:!1}),r}catch(o){}return t[e]=r,r}var i=Object.prototype.hasOwnProperty;e.exports=r},{}],handle:[function(t,e,n){function r(t,e,n,r){i.buffer([t],r),i.emit(t,e,n)}var i=t("ee").get("handle");e.exports=r,r.ee=i},{}],id:[function(t,e,n){function r(t){var e=typeof t;return!t||"object"!==e&&"function"!==e?-1:t===window?0:a(t,o,function(){return i++})}var i=1,o="nr@id",a=t("gos");e.exports=r},{}],loader:[function(t,e,n){function r(){if(!M++){var t=T.info=NREUM.info,e=m.getElementsByTagName("script")[0];if(setTimeout(u.abort,3e4),!(t&&t.licenseKey&&t.applicationID&&e))return u.abort();f(x,function(e,n){t[e]||(t[e]=n)});var n=a();c("mark",["onload",n+T.offset],null,"api"),c("timing",["load",n]);var r=m.createElement("script");0===t.agent.indexOf("http://")||0===t.agent.indexOf("https://")?r.src=t.agent:r.src=l+"://"+t.agent,e.parentNode.insertBefore(r,e)}}function i(){"complete"===m.readyState&&o()}function o(){c("mark",["domContent",a()+T.offset],null,"api")}var a=t(5),c=t("handle"),f=t(9),u=t("ee"),s=t(7),d=t(2),p=t(3),l=d.getConfiguration("ssl")===!1?"http":"https",v=window,m=v.document,g="addEventListener",y="attachEvent",h=v.XMLHttpRequest,w=h&&h.prototype,b=!1;NREUM.o={ST:setTimeout,SI:v.setImmediate,CT:clearTimeout,XHR:h,REQ:v.Request,EV:v.Event,PR:v.Promise,MO:v.MutationObserver};var E=""+location,x={beacon:"bam.nr-data.net",errorBeacon:"bam.nr-data.net",agent:"js-agent.newrelic.com/nr-1216.min.js"},O=h&&w&&w[g]&&!/CriOS/.test(navigator.userAgent),T=e.exports={offset:a.getLastTimestamp(),now:a,origin:E,features:{},xhrWrappable:O,userAgent:s,disabled:b};if(!b){t(1),t(6),m[g]?(m[g]("DOMContentLoaded",o,p(!1)),v[g]("load",r,p(!1))):(m[y]("onreadystatechange",i),v[y]("onload",r)),c("mark",["firstbyte",a.getLastTimestamp()],null,"api");var M=0}},{}],"wrap-function":[function(t,e,n){function r(t,e){function n(e,n,r,f,u){function nrWrapper(){var o,a,s,p;try{a=this,o=d(arguments),s="function"==typeof r?r(o,a):r||{}}catch(l){i([l,"",[o,a,f],s],t)}c(n+"start",[o,a,f],s,u);try{return p=e.apply(a,o)}catch(v){throw c(n+"err",[o,a,v],s,u),v}finally{c(n+"end",[o,a,p],s,u)}}return a(e)?e:(n||(n=""),nrWrapper[p]=e,o(e,nrWrapper,t),nrWrapper)}function r(t,e,r,i,o){r||(r="");var c,f,u,s="-"===r.charAt(0);for(u=0;u<e.length;u++)f=e[u],c=t[f],a(c)||(t[f]=n(c,s?f+r:r,i,f,o))}function c(n,r,o,a){if(!v||e){var c=v;v=!0;try{t.emit(n,r,o,e,a)}catch(f){i([f,n,r,o],t)}v=c}}return t||(t=s),n.inPlace=r,n.flag=p,n}function i(t,e){e||(e=s);try{e.emit("internal-error",t)}catch(n){}}function o(t,e,n){if(Object.defineProperty&&Object.keys)try{var r=Object.keys(t);return r.forEach(function(n){Object.defineProperty(e,n,{get:function(){return t[n]},set:function(e){return t[n]=e,e}})}),e}catch(o){i([o],n)}for(var a in t)l.call(t,a)&&(e[a]=t[a]);return e}function a(t){return!(t&&t instanceof Function&&t.apply&&!t[p])}function c(t,e){var n=e(t);return n[p]=t,o(t,n,s),n}function f(t,e,n){var r=t[e];t[e]=c(r,n)}function u(){for(var t=arguments.length,e=new Array(t),n=0;n<t;++n)e[n]=arguments[n];return e}var s=t("ee"),d=t(10),p="nr@original",l=Object.prototype.hasOwnProperty,v=!1;e.exports=r,e.exports.wrapFunction=c,e.exports.wrapInPlace=f,e.exports.argsToArray=u},{}]},{},["loader"]);</script>
<link href="./110722-CW_files/css" media="screen" rel="stylesheet"><script async="" src="./110722-CW_files/ethicalads.min.js"></script><link rel="stylesheet" media="screen" href="./110722-CW_files/components.1cfbbd38.css" data-turbolinks-track="reload"><script src="./110722-CW_files/components.43449d77.js" crossorigin="anonymous" type="module" defer="defer" data-turbolinks-track="reload"></script><link rel="stylesheet" media="screen" href="./110722-CW_files/application.c53e95a5.css" data-turbolinks-track="reload"><script src="./110722-CW_files/application.ca6c3c2e.js" crossorigin="anonymous" type="module" defer="defer" data-turbolinks-track="reload"></script><link rel="stylesheet" media="screen" href="./110722-CW_files/application.adda2f81.css" defer="defer" data-turbolinks-track="reload"><script async="" src="./110722-CW_files/js(1)"></script><script>window.dataLayer = window.dataLayer || [];
function gtag() { dataLayer.push(arguments); }
gtag('js', new Date());</script><script>(function(){var w=window;var ic=w.Intercom;if(typeof ic==="function"){ic('reattach_activator');ic('update',w.intercomSettings);}else{var d=document;var i=function(){i.c(arguments);};i.q=[];i.c=function(args){i.q.push(args);};w.Intercom=i;var l=function(){var s=d.createElement('script');s.type='text/javascript';s.async=true;s.src='https://widget.intercom.io/widget/' + 'x27gw54w';var x=d.getElementsByTagName('script')[0];x.parentNode.insertBefore(s,x);};if(w.attachEvent){w.attachEvent('onload',l);}else{w.addEventListener('load',l,false);}}})();</script><style>[data-ea-publisher].loaded,[data-ea-type].loaded{font-size:14px;font-family:-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;font-weight:normal;font-style:normal;leter-spacing:0px;vertical-align:baseline;line-height:1.3em}[data-ea-publisher].loaded a,[data-ea-type].loaded a{text-decoration:none}[data-ea-publisher].loaded .ea-pixel,[data-ea-type].loaded .ea-pixel{display:none}[data-ea-publisher].loaded .ea-content,[data-ea-type].loaded .ea-content{margin:1em 1em 0.5em 1em;padding:1em;background:rgba(0,0,0,0.03);color:#505050}[data-ea-publisher].loaded .ea-content a:link,[data-ea-type].loaded .ea-content a:link{color:#505050}[data-ea-publisher].loaded .ea-content a:visited,[data-ea-type].loaded .ea-content a:visited{color:#505050}[data-ea-publisher].loaded .ea-content a:hover,[data-ea-type].loaded .ea-content a:hover{color:#373737}[data-ea-publisher].loaded .ea-content a:active,[data-ea-type].loaded .ea-content a:active{color:#373737}[data-ea-publisher].loaded .ea-content a strong,[data-ea-publisher].loaded .ea-content a b,[data-ea-type].loaded .ea-content a strong,[data-ea-type].loaded .ea-content a b{color:#088cdb}[data-ea-publisher].loaded .ea-callout a:link,[data-ea-type].loaded .ea-callout a:link{color:#6a6a6a}[data-ea-publisher].loaded .ea-callout a:visited,[data-ea-type].loaded .ea-callout a:visited{color:#6a6a6a}[data-ea-publisher].loaded .ea-callout a:hover,[data-ea-type].loaded .ea-callout a:hover{color:#505050}[data-ea-publisher].loaded .ea-callout a:active,[data-ea-type].loaded .ea-callout a:active{color:#505050}[data-ea-publisher].loaded .ea-callout a strong,[data-ea-publisher].loaded .ea-callout a b,[data-ea-type].loaded .ea-callout a strong,[data-ea-type].loaded .ea-callout a b{color:#088cdb}[data-ea-publisher].loaded .ea-callout a,[data-ea-type].loaded .ea-callout a{font-size:0.8em}[data-ea-publisher].loaded.dark .ea-content,[data-ea-type].loaded.dark .ea-content{background:rgba(255,255,255,0.05);color:#dcdcdc}[data-ea-publisher].loaded.dark .ea-content a:link,[data-ea-type].loaded.dark .ea-content a:link{color:#dcdcdc}[data-ea-publisher].loaded.dark .ea-content a:visited,[data-ea-type].loaded.dark .ea-content a:visited{color:#dcdcdc}[data-ea-publisher].loaded.dark .ea-content a:hover,[data-ea-type].loaded.dark .ea-content a:hover{color:#f6f6f6}[data-ea-publisher].loaded.dark .ea-content a:active,[data-ea-type].loaded.dark .ea-content a:active{color:#f6f6f6}[data-ea-publisher].loaded.dark .ea-content a strong,[data-ea-publisher].loaded.dark .ea-content a b,[data-ea-type].loaded.dark .ea-content a strong,[data-ea-type].loaded.dark .ea-content a b{color:#50baf9}[data-ea-publisher].loaded.dark .ea-callout a:link,[data-ea-type].loaded.dark .ea-callout a:link{color:#c3c3c3}[data-ea-publisher].loaded.dark .ea-callout a:visited,[data-ea-type].loaded.dark .ea-callout a:visited{color:#c3c3c3}[data-ea-publisher].loaded.dark .ea-callout a:hover,[data-ea-type].loaded.dark .ea-callout a:hover{color:#dcdcdc}[data-ea-publisher].loaded.dark .ea-callout a:active,[data-ea-type].loaded.dark .ea-callout a:active{color:#dcdcdc}[data-ea-publisher].loaded.dark .ea-callout a strong,[data-ea-publisher].loaded.dark .ea-callout a b,[data-ea-type].loaded.dark .ea-callout a strong,[data-ea-type].loaded.dark .ea-callout a b{color:#50baf9}@media (prefers-color-scheme: dark){[data-ea-publisher].loaded.adaptive .ea-content,[data-ea-type].loaded.adaptive .ea-content{background:rgba(255,255,255,0.05);color:#dcdcdc}[data-ea-publisher].loaded.adaptive .ea-content a:link,[data-ea-type].loaded.adaptive .ea-content a:link{color:#dcdcdc}[data-ea-publisher].loaded.adaptive .ea-content a:visited,[data-ea-type].loaded.adaptive .ea-content a:visited{color:#dcdcdc}[data-ea-publisher].loaded.adaptive .ea-content a:hover,[data-ea-type].loaded.adaptive .ea-content a:hover{color:#f6f6f6}[data-ea-publisher].loaded.adaptive .ea-content a:active,[data-ea-type].loaded.adaptive .ea-content a:active{color:#f6f6f6}[data-ea-publisher].loaded.adaptive .ea-content a strong,[data-ea-publisher].loaded.adaptive .ea-content a b,[data-ea-type].loaded.adaptive .ea-content a strong,[data-ea-type].loaded.adaptive .ea-content a b{color:#50baf9}[data-ea-publisher].loaded.adaptive .ea-callout a:link,[data-ea-type].loaded.adaptive .ea-callout a:link{color:#c3c3c3}[data-ea-publisher].loaded.adaptive .ea-callout a:visited,[data-ea-type].loaded.adaptive .ea-callout a:visited{color:#c3c3c3}[data-ea-publisher].loaded.adaptive .ea-callout a:hover,[data-ea-type].loaded.adaptive .ea-callout a:hover{color:#dcdcdc}[data-ea-publisher].loaded.adaptive .ea-callout a:active,[data-ea-type].loaded.adaptive .ea-callout a:active{color:#dcdcdc}[data-ea-publisher].loaded.adaptive .ea-callout a strong,[data-ea-publisher].loaded.adaptive .ea-callout a b,[data-ea-type].loaded.adaptive .ea-callout a strong,[data-ea-type].loaded.adaptive .ea-callout a b{color:#50baf9}}[data-ea-publisher].loaded .ea-content,[data-ea-type].loaded .ea-content{border:0px;border-radius:3px;box-shadow:0px 2px 3px rgba(0,0,0,0.15)}[data-ea-publisher].loaded.raised .ea-content,[data-ea-type].loaded.raised .ea-content{border:0px;border-radius:3px;box-shadow:0px 2px 3px rgba(0,0,0,0.15)}[data-ea-publisher].loaded.bordered .ea-content,[data-ea-type].loaded.bordered .ea-content{border:1px solid rgba(0,0,0,0.04);border-radius:3px;box-shadow:none}[data-ea-publisher].loaded.bordered.dark .ea-content,[data-ea-type].loaded.bordered.dark .ea-content{border:1px solid rgba(255,255,255,0.07)}@media (prefers-color-scheme: dark){[data-ea-publisher].loaded.bordered.adaptive .ea-content,[data-ea-type].loaded.bordered.adaptive .ea-content{border:1px solid rgba(255,255,255,0.07)}}[data-ea-publisher].loaded.flat .ea-content,[data-ea-type].loaded.flat .ea-content{border:0px;border-radius:3px;box-shadow:none}[data-ea-type="image"].loaded,[data-ea-publisher]:not([data-ea-type]).loaded,.ea-type-image{display:inline-block}[data-ea-type="image"].loaded .ea-content,[data-ea-publisher]:not([data-ea-type]).loaded .ea-content,.ea-type-image .ea-content{max-width:180px;overflow:auto;text-align:center}[data-ea-type="image"].loaded .ea-content>a>img,[data-ea-publisher]:not([data-ea-type]).loaded .ea-content>a>img,.ea-type-image .ea-content>a>img{width:120px;height:90px;display:inline-block}[data-ea-type="image"].loaded .ea-content>.ea-text,[data-ea-publisher]:not([data-ea-type]).loaded .ea-content>.ea-text,.ea-type-image .ea-content>.ea-text{margin-top:1em;font-size:1em;text-align:center}[data-ea-type="image"].loaded .ea-callout,[data-ea-publisher]:not([data-ea-type]).loaded .ea-callout,.ea-type-image .ea-callout{max-width:180px;margin:0em 1em 1em 1em;padding-left:1em;padding-right:1em;font-style:italic;text-align:right}[data-ea-type="image"].loaded.horizontal .ea-content,[data-ea-publisher]:not([data-ea-type]).loaded.horizontal .ea-content,.ea-type-image.horizontal .ea-content{max-width:320px}[data-ea-type="image"].loaded.horizontal .ea-content>a>img,[data-ea-publisher]:not([data-ea-type]).loaded.horizontal .ea-content>a>img,.ea-type-image.horizontal .ea-content>a>img{float:left;margin-right:1em}[data-ea-type="image"].loaded.horizontal .ea-content .ea-text,[data-ea-publisher]:not([data-ea-type]).loaded.horizontal .ea-content .ea-text,.ea-type-image.horizontal .ea-content .ea-text{margin-top:0em;text-align:left;overflow:auto}[data-ea-type="image"].loaded.horizontal .ea-callout,[data-ea-publisher]:not([data-ea-type]).loaded.horizontal .ea-callout,.ea-type-image.horizontal .ea-callout{max-width:320px;text-align:right}[data-ea-type="text"].loaded,.ea-type-text{font-size:14px}[data-ea-type="text"].loaded .ea-content,.ea-type-text .ea-content{text-align:left}[data-ea-type="text"].loaded .ea-callout,.ea-type-text .ea-callout{margin:0.5em 1em 1em 1em;padding-left:1em;padding-right:1em;text-align:right;font-style:italic}[data-ea-style="stickybox"].loaded .ea-type-image{z-index:10;position:fixed;bottom:20px;right:20px}[data-ea-style="stickybox"].loaded .ea-type-image .ea-stickybox-hide{cursor:pointer;position:absolute;top:0.75em;right:0.75em;background-color:#fefefe;border:1px solid #088cdb;border-radius:50%;color:#088cdb;font-size:1em;text-align:center;height:1.5em;width:1.5em;line-height:1.5em}@media (max-width: 1300px){[data-ea-style="stickybox"].loaded .ea-type-image{position:static;bottom:0;right:0;margin:auto;text-align:center}[data-ea-style="stickybox"].loaded .ea-type-image .ea-stickybox-hide{display:none}}@media (min-width: 1301px){[data-ea-style="stickybox"].loaded .ea-type-image .ea-content{background:#dcdcdc}[data-ea-style="stickybox"].loaded.dark .ea-type-image .ea-content{background:#505050}}@media (min-width: 1301px) and (prefers-color-scheme: dark){[data-ea-style="stickybox"].loaded.adaptive .ea-type-image .ea-content{background:#505050}}[data-ea-style="fixedfooter"].loaded .ea-type-text{position:fixed;bottom:0;left:0;width:100%;max-width:100%;display:flex;z-index:10;background:#dcdcdc}[data-ea-style="fixedfooter"].loaded .ea-type-text .ea-content{border:0px;border-radius:3px;box-shadow:none}[data-ea-style="fixedfooter"].loaded .ea-type-text .ea-content{background-color:inherit;max-width:100%;margin:0;padding:1em;flex:auto}[data-ea-style="fixedfooter"].loaded .ea-type-text .ea-callout{max-width:100%;margin:0;padding:1em;flex:initial}@media (max-width: 576px){[data-ea-style="fixedfooter"].loaded .ea-type-text .ea-callout{display:none}}[data-ea-style="fixedfooter"].loaded .ea-type-text .ea-fixedfooter-hide{cursor:pointer;color:#505050;padding:1em;flex:initial;margin:auto 0}[data-ea-style="fixedfooter"].loaded .ea-type-text .ea-fixedfooter-hide span{padding:0.25em;font-size:0.8em;font-weight:bold;border:0.15em solid #505050;border-radius:0.5em;white-space:nowrap}[data-ea-style="fixedfooter"].loaded.dark .ea-type-text{background:#505050}[data-ea-style="fixedfooter"].loaded.dark .ea-type-text .ea-fixedfooter-hide span{color:#dcdcdc;border-color:#dcdcdc}@media (prefers-color-scheme: dark){[data-ea-style="fixedfooter"].loaded.adaptive .ea-type-text{background:#505050}[data-ea-style="fixedfooter"].loaded.adaptive .ea-type-text .ea-fixedfooter-hide span{color:#dcdcdc;border-color:#dcdcdc}}
</style><link crossorigin="anonymous" href="./110722-CW_files/katex.min.css" integrity="sha384-MlJdn/WNKDGXveldHDdyRP1R4CTHr3FeuDNfhsLPYrq2t0UBkUdK2jyTnXPEK1NQ" rel="stylesheet"><script type="text/javascript">window.NREUM||(NREUM={});NREUM.info={"beacon":"bam.nr-data.net","errorBeacon":"bam.nr-data.net","licenseKey":"364dba19a3","applicationID":"15446117","transactionName":"Jg5ZQEdYXQ1XRRZWXQEEaFddVl0NV1leUEFKEVtVTA==","queueTime":0,"applicationTime":622,"agent":""}</script><script type="text/javascript">window.NREUM||(NREUM={});NREUM.info={"beacon":"bam.nr-data.net","errorBeacon":"bam.nr-data.net","licenseKey":"364dba19a3","applicationID":"15446117","transactionName":"Jg5ZQEdYXQ1XRRZWXQEEaFddVl0NV1leUEFKElhYQENYDlxE","queueTime":0,"applicationTime":4177,"agent":""}</script><script type="text/javascript">window.NREUM||(NREUM={});NREUM.info={"beacon":"bam.nr-data.net","errorBeacon":"bam.nr-data.net","licenseKey":"364dba19a3","applicationID":"15446117","transactionName":"Jg5ZQEdYXQ1XRRZWXQEEaFddVl0NV1leUEFKEl9bQg==","queueTime":0,"applicationTime":990,"agent":""}</script><script type="text/javascript">window.NREUM||(NREUM={});NREUM.info={"beacon":"bam.nr-data.net","errorBeacon":"bam.nr-data.net","licenseKey":"364dba19a3","applicationID":"15446117","transactionName":"Jg5ZQEdYXQ1XRRZWXQEEaFddVl0NV1leUEFKEVtVTA==","queueTime":0,"applicationTime":296,"agent":""}</script><script type="text/javascript">window.NREUM||(NREUM={});NREUM.info={"beacon":"bam.nr-data.net","errorBeacon":"bam.nr-data.net","licenseKey":"364dba19a3","applicationID":"15446117","transactionName":"Jg5ZQEdYXQ1XRRZWXQEEaFddVl0NV1leUEFKElhYQENYDlxE","queueTime":0,"applicationTime":993,"agent":""}</script><script type="text/javascript">window.NREUM||(NREUM={});NREUM.info={"beacon":"bam.nr-data.net","errorBeacon":"bam.nr-data.net","licenseKey":"364dba19a3","applicationID":"15446117","transactionName":"Jg5ZQEdYXQ1XRRZWXQEEaFddVl0NV1leUEFKEl9bQg==","queueTime":0,"applicationTime":262,"agent":""}</script><script type="text/javascript">window.NREUM||(NREUM={});NREUM.info={"beacon":"bam.nr-data.net","errorBeacon":"bam.nr-data.net","licenseKey":"364dba19a3","applicationID":"15446117","transactionName":"Jg5ZQEdYXQ1XRRZWXQEEaFddVl0NV1leUEFKEVtVTA==","queueTime":0,"applicationTime":630,"agent":""}</script><script type="text/javascript">window.NREUM||(NREUM={});NREUM.info={"beacon":"bam.nr-data.net","errorBeacon":"bam.nr-data.net","licenseKey":"364dba19a3","applicationID":"15446117","transactionName":"Jg5ZQEdYXQ1XRRZWXQEEaFddVl0NV1leUEFKElhYQENYDlxE","queueTime":0,"applicationTime":900,"agent":""}</script><script type="text/javascript">window.NREUM||(NREUM={});NREUM.info={"beacon":"bam.nr-data.net","errorBeacon":"bam.nr-data.net","licenseKey":"364dba19a3","applicationID":"15446117","transactionName":"Jg5ZQEdYXQ1XRRZAQQATRBtGX14W","queueTime":0,"applicationTime":232,"agent":""}</script><script type="text/javascript">window.NREUM||(NREUM={});NREUM.info={"beacon":"bam.nr-data.net","errorBeacon":"bam.nr-data.net","licenseKey":"364dba19a3","applicationID":"15446117","transactionName":"Jg5ZQEdYXQ1XRRZAQQATRBtGX14W","queueTime":0,"applicationTime":200,"agent":""}</script><script type="text/javascript">window.NREUM||(NREUM={});NREUM.info={"beacon":"bam.nr-data.net","errorBeacon":"bam.nr-data.net","licenseKey":"364dba19a3","applicationID":"15446117","transactionName":"Jg5ZQEdYXQ1XRRZWXQEEaFddVl0NV1leUEFKElhYQENYDlxE","queueTime":0,"applicationTime":844,"agent":""}</script><script type="text/javascript">window.NREUM||(NREUM={});NREUM.info={"beacon":"bam.nr-data.net","errorBeacon":"bam.nr-data.net","licenseKey":"364dba19a3","applicationID":"15446117","transactionName":"Jg5ZQEdYXQ1XRRZWXQEEaFddVl0NV1leUEFKEl9bQg==","queueTime":0,"applicationTime":1040,"agent":""}</script><script type="text/javascript">window.NREUM||(NREUM={});NREUM.info={"beacon":"bam.nr-data.net","errorBeacon":"bam.nr-data.net","licenseKey":"364dba19a3","applicationID":"15446117","transactionName":"Jg5ZQEdYXQ1XRRZWXQEEaFddVl0NV1leUEFKEVtVTA==","queueTime":0,"applicationTime":270,"agent":""}</script><script type="text/javascript">window.NREUM||(NREUM={});NREUM.info={"beacon":"bam.nr-data.net","errorBeacon":"bam.nr-data.net","licenseKey":"364dba19a3","applicationID":"15446117","transactionName":"Jg5ZQEdYXQ1XRRZWXQEEaFddVl0NV1leUEFKElhYQENYDlxE","queueTime":0,"applicationTime":886,"agent":""}</script><title>JavaScript Solutions for Make a function that does arithmetic! | Codewars</title><meta name="csrf-param" content="authenticity_token"><meta name="csrf-token" content="6iS0DtOkQbNfca6xPKEBq2ADGC/lMYRESBrClGVHIO4s0zlT2VLwQ5BhNXhpg0innSSoTh3Ch3zJQ/5Clr8qfQ=="><link href="https://www.codewars.com/kata/583f158ea20cfcbeb400000a/solutions/javascript" rel="canonical"><meta content="width=320px, initial-scale=1.0, minimum-scale=0.86, maximum-scale=5.0" name="viewport"><meta content="Make a function that does arithmetic!" property="og:title"><meta content="website" property="og:type"><meta content="Codewars" property="og:site_name"><meta content="https://www.codewars.com" property="og:url"><meta content="https://www.codewars.com/packs/assets/logo-square-paper-bg.c3d2b1eb.jpg" property="og:image"><meta content="https://www.codewars.com/packs/assets/logo-square-paper-bg.c3d2b1eb.jpg" property="og:image:secure_url"><meta content="Codewars is where developers achieve code mastery through challenge. Train on kata in the dojo and reach your highest potential." property="og:description"><meta content="652826666" property="fb:admins"><meta content="110951985735625" property="fb:app_id"><meta content="@codewars" name="twitter:site"><meta content="Codewars is where developers achieve code mastery through challenge. Train on kata in the dojo and reach your highest potential." name="description"><meta content="codewars, code kata, kata, code gym, coding, code practice, ruby, javascript, coffeescript, web development, software development, dojo" name="keywords"><meta content="EMv3k6eCCUuSkbwJpGlLbtsBd_lCvmvDp1Ucsv0rIvM" name="google-site-verification"></head><body class="solutions_view  full-viewport  logged-in" id="code_challenges"><div id="app"><h1 class="page-title">Kata</h1><div class="w-full" id="shell"><div class="sidenav-nubbin block md:hidden"><i class="icon-moon-list "></i></div><nav id="sidenav"><ul class="top md:mb-10"><li class="sidenav-item"><a class="inline-flex pb-2" href="https://www.codewars.com/dashboard"><div class="logo mt-3 shrink-0"><img class="w-full h-full" src="./110722-CW_files/logo.61192cf7.svg"></div><div class="sidenav-link__content mt-2"><div class="sidenav-link__label">Home</div><div class="sidenav-link__desc">Report home for your next assignment</div></div></a></li><li class="sidenav-section"><span>Training</span></li><li class="sidenav-item mt-1"><a href="https://www.codewars.com/kata/latest/my-languages"><div class="sidenav-link__icon"><svg class="ml-1.5 w-6 h-6 inline-block" fill="currentColor" viewBox="0 0 24 24"><path d="M23.477 7.694c-.395-.559-1.312-.795-1.869-.318L20.342 8.46c-3.71-1.833-7.42-3.663-11.129-5.497-1.651-.817-2.512 1.944-.884 2.748l4.011 1.98-2.83 5.437c-.019.039-.032.08-.05.12L2.053 9.843c-1.66-.762-2.537 1.931-.899 2.685l8.863 4.074.5 2.442a272 272 0 0 1-3.176-1.45c-1.643-.767-3.08 1.672-1.428 2.443 2.031.948 4.082 1.852 6.123 2.776 1.268.572 2.405-.733 2.115-1.708v-.02c-.353-1.726-.708-3.452-1.06-5.179.076-.093.152-.19.21-.3l3.08-5.918 3.405 1.68c.384.191.723.183 1.001.055.172-.036.337-.11.478-.23.631-.54 1.26-1.081 1.893-1.62.555-.477.767-1.242.32-1.879z"></path><path d="M16.482 5.579a2.303 2.303 0 1 0 1.145-4.462l-.016-.003a2.303 2.303 0 0 0-1.145 4.461l.016.004z"></path></svg></div><div class="sidenav-link__content"><div class="sidenav-link__label">Practice</div><div class="sidenav-link__desc">Complete challenging <strong>Kata</strong> to earn honor and ranks. Re-train to hone technique</div></div></a></li><li class="sidenav-item"><a href="https://www.codewars.com/kumite"><div class="sidenav-link__icon"><svg class="ml-1.5 w-6 h-6 inline-block" fill="currentColor" viewBox="0 0 24 24"><path d="m9.441 10.67-2.908 1.233-1.06-2.317 1.848-.05c.543 0 .986-.418 1.06-.96l.296-2.416C8.751 5.568 8.332 5 7.74 4.927a1.106 1.106 0 0 0-1.232.961l-.197 1.48-1.627.049a.786.786 0 0 0-.345.074l-2.268.813a.997.997 0 0 0-.64.616 1.02 1.02 0 0 0 .048.888l2.317 4.659-1.109 6.779c-.123.69.37 1.356 1.06 1.479.074 0 .148.025.222.025a1.27 1.27 0 0 0 1.257-1.085l1.134-6.902 6.113-2.589-2.193-.936a2.199 2.199 0 0 1-.838-.567zM4.574 4.136a2.243 2.243 0 1 1-4.07 1.887 2.243 2.243 0 0 1 4.07-1.887Z"></path><path d="m21.94 6.727-2.268-.814a.87.87 0 0 0-.345-.074l-1.652-.05-.197-1.478c-.074-.592-.641-1.011-1.233-.962a1.11 1.11 0 0 0-.961 1.233l.296 2.415c.073.543.517.937 1.06.962l1.848.05-1.06 2.317-5.768-2.441c-.666-.271-1.405.025-1.676.69-.271.666.024 1.405.69 1.676l6.952 2.959 1.134 6.902a1.27 1.27 0 0 0 1.257 1.085c.074 0 .148 0 .222-.025.69-.123 1.183-.789 1.06-1.48l-1.11-6.778 2.317-4.66c.148-.27.148-.616.05-.887a.946.946 0 0 0-.617-.64zm.465-5.268a2.243 2.243 0 1 1-1.888 4.07 2.243 2.243 0 0 1 1.888-4.07z"></path></svg></div><div class="sidenav-link__content"><div class="sidenav-link__label">Freestyle Sparring</div><div class="sidenav-link__desc">Take turns remixing and refactoring others code through <strong>Kumite</strong></div></div></a></li><li class="sidenav-section"><span>Career</span></li><li class="sidenav-item mt-1"><a href="https://jobs.qualified.io/" rel="noopener" target="_blank" title="Qualified Jobs"><div class="sidenav-link__icon"><svg class="ml-1.5 w-6 h-6 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path></svg></div><div class="sidenav-link__content"><div class="sidenav-link__label">Opportunities</div><div class="sidenav-link__desc">Find your next career challenge – powered by <strong>Qualified Jobs</strong></div></div></a></li><li class="sidenav-section"><span>Community</span></li><li class="sidenav-item mt-1"><a href="https://www.codewars.com/users/leaderboard" title="Leaders"><div class="sidenav-link__icon"><svg class="ml-1.5 w-6 h-6 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"></path></svg></div><div class="sidenav-link__content"><div class="sidenav-link__label">Leaderboards</div><div class="sidenav-link__desc">Achieve honor and move up the global leaderboards</div></div></a></li><li class="sidenav-item"><a href="https://discord.gg/mSwJWRvkHA" rel="noopener" target="_blank" title="Discord"><div class="sidenav-link__icon sidenav__discord-icon"><svg class="ml-1.5 w-6 h-6 inline-block" fill="currentColor" viewBox="0 0 24 24"><path d="M9.8147 10.0948c-.6792 0-1.2191.5921-1.2191 1.315 0 .7227.5486 1.3236 1.2191 1.3236.6793 0 1.2192-.6008 1.2192-1.3237.0174-.7228-.54-1.315-1.2192-1.315zm4.3715 0c-.6792 0-1.2191.5921-1.2191 1.315 0 .7227.5486 1.3236 1.2191 1.3236.6793 0 1.2192-.6008 1.2192-1.3237 0-.7228-.54-1.315-1.2192-1.315z"></path><path d="M20.0034.0539H3.9889C2.64.0637 1.5506 1.1594 1.5506 2.5096v.0092-.0004 16.1629c0 1.3533 1.0945 2.4508 2.4465 2.4558H17.539l-.627-2.212 1.524 1.4195 1.4455 1.3411 2.569 2.2642V2.5096c0-1.3532-1.0945-2.4508-2.4466-2.4557ZM15.388 15.6595l-.7838-.9667c.889-.2145 1.636-.7207 2.1527-1.4097l.007-.0097c-.4877.3222-.958.5486-1.376.6966-.9578.4145-2.0733.6556-3.2451.6556a8.4005 8.4005 0 0 1-1.6323-.1593l.0531.0088c-.9878-.2002-1.8648-.5165-2.6764-.9407l.0552.0263-.1132-.061-.0435-.0348c-.2177-.122-.3396-.209-.3396-.209s.5747.958 2.09 1.4108c-.3484.4528-.7925.9928-.7925.9928-2.6386-.0871-3.6488-1.8201-3.6488-1.8201 0-3.8404 1.7242-6.9668 1.7242-6.9668 1.7156-1.2801 3.3527-1.2453 3.3527-1.2453l.122.148c-2.151.6183-3.135 1.5676-3.135 1.5676s.2612-.148.6966-.3484c.7886-.3714 1.7038-.6386 2.6657-.7534l.0426-.0042.209-.0174c.3922-.056.8452-.088 1.3056-.088 1.7258 0 3.3467.449 4.7522 1.2367l-.0491-.0253s-.9493-.9057-2.9783-1.5414l.1742-.1916s1.6285-.0348 3.3527 1.2628c0 0 1.7155 3.1176 1.7155 6.9667 0 0-1.0101 1.7243-3.6574 1.8114z"></path></svg></div><div class="sidenav-link__content"><div class="sidenav-link__label">Chat</div><div class="sidenav-link__desc">Join our <strong>Discord</strong> server and chat with your fellow code warriors</div></div></a></li><li class="sidenav-item"><a href="https://github.com/codewars/codewars.com/discussions" rel="noopener" target="_blank" title="GitHub Discussions"><div class="sidenav-link__icon"><svg class="ml-1.5 w-6 h-6 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"></path></svg></div><div class="sidenav-link__content"><div class="sidenav-link__label">Discussions</div><div class="sidenav-link__desc">View our <strong>Github Discussions</strong> board to discuss general Codewars topics</div></div></a></li><li class="sidenav-section"><span>About</span></li><li class="sidenav-item mt-1"><a href="https://docs.codewars.com/" rel="noopener" target="_blank" title="The Codewars Docs"><div class="sidenav-link__icon"><svg class="ml-1.5 w-6 h-6 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"></path></svg></div><div class="sidenav-link__content"><div class="sidenav-link__label">Docs</div><div class="sidenav-link__desc">Learn about all of the different aspects of Codewars</div></div></a></li></ul></nav><header class="main is-visible" id="main_header"><ul class="items"><li class="item-list"><a class="js-toggle-dark-mode w-6"><svg class="block dark:hidden" fill="currentColor" viewBox="0 0 20 20"><path clip-rule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" fill-rule="evenodd"></path></svg><svg class="hidden dark:block" fill="currentColor" viewBox="0 0 20 20"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path></svg></a></li><li class="item-list stars-item has-menu static"><a><i class="icon-moon-bookmark text-2xl"></i></a><div class="menu has-auto-scrolling right-0 shadow-lg"><div class="menu-body" style="max-height: 1212px;"><ul class="space-y"><li><a><div>You have not starred any kata</div><div>To add some, just click the<span class="is-link ml-5px"><i class="icon-moon-star-empty is-small"></i></span>next to any kata title.</div></a></li></ul></div></div></li><li class="notifications-item has-menu static" id="notifications_drawer"><a><i class="icon-moon-bell text-2xl"></i></a><div class="menu right-0 shadow-lg"><div class="menu-body" style="max-height: 1212px;"><ul><li><a>You do not have any notifications</a></li></ul></div></div></li><li class="profile-item min-w-60px sm:min-w-130px has-menu mr-0 text-sm"><a href="https://www.codewars.com/users/GreenEagleKing" id="header_profile_link"><div class="profile-pic mr-0"><img title="" alt="GreenEagleKing Avatar" src="./110722-CW_files/101405438"></div><div class="profile-points hidden sm:block ml-4"><div class="small-hex is-extra-wide is-invertable is-yellow-rank"><div class="inner-small-hex is-extra-wide "><span>6 kyu</span></div></div><div class="ml-10px is-inline" data-rt="6281048ee5f29cb9ce286cb6:honor">173</div></div></a><div class="menu shadow-lg"><div class="menu-body" style="max-height: 1212px;"><ul><li><a href="https://www.codewars.com/users/GreenEagleKing"><i class="icon-moon-user "></i>View Profile</a></li><li class="border-t"><a href="https://www.codewars.com/users/edit"><i class="icon-moon-settings "></i>Account Settings</a></li><li><a href="https://www.codewars.com/trainer/setup"><i class="icon-moon-settings "></i>Training Setup</a></li><li class="border-t"><a data-turbolinks="false" href="https://www.codewars.com/subscription"><i class="icon-moon-red-badge is-red-text"></i>Upgrade to Red</a></li><li class="border-t"><a class="js-sign-out"><i class="icon-moon-power "></i>Sign out</a></li></ul></div></div></li></ul></header><main id="shell_content" role="main"><div class="is-hidden" id="global_alerts"><div class="alert-box"></div></div><div id="flash"></div><div class="px-0 w-full"><div class="flex flex-col md:flex-row md:justify-between md:items-center px-2 md:px-4 py-2 mb-0 bg-ui-section rounded-lg"><div class="w-full md:w-5/12"><div class="flex items-center"><div class="small-hex is-extra-wide is-white-rank"><div class="inner-small-hex is-extra-wide "><span>7 kyu</span></div></div><h4 class="ml-2 mb-3">Make a function that does arithmetic!</h4><sl-icon class="ml-1 text-sm grow-0 shrink-0 basis-4" id="completion-checkmark" name="check2" library="default"></sl-icon></div><div class="mt-1 mb-3 space-x-4" data-id="583f158ea20cfcbeb400000a"><span><a class="mr-0 js-remove-code-challenge-star is-hidden" data-tippy-content="Total times this kata has been bookmarked. Click to remove your bookmark" data-tippy-placement="bottom"><i class="icon-moon-star text-sm opacity-75" rt="583f158ea20cfcbeb400000a:total_stars"></i><span data-rt="583f158ea20cfcbeb400000a:total_stars">241</span></a><a class="mr-0 js-add-code-challenge-star" data-tippy-content="Total times this kata has been bookmarked. Click to bookmark" data-tippy-placement="bottom"><i class="icon-moon-star-empty text-sm opacity-75" rt="583f158ea20cfcbeb400000a:total_stars"></i><span data-rt="583f158ea20cfcbeb400000a:total_stars">241</span></a></span><a class="mr-0 js-add-to-collection ml-2" data-challenge="{&quot;id&quot;:&quot;583f158ea20cfcbeb400000a&quot;,&quot;name&quot;:&quot;Make a function that does arithmetic!&quot;}" data-tippy-content="Total collections this kata is a part of. Click to view and add collections." data-tippy-placement="bottom"><i class="icon-moon-collection text-sm opacity-75" rt="583f158ea20cfcbeb400000a:total_collections"></i><span data-rt="583f158ea20cfcbeb400000a:total_collections">88</span></a><span class="mr-0 text-ui-text-lc" data-tippy-content="Satisfaction Rating: 88% of users gave a positive rating out of 3173 votes. Ranked kata must be completed before they can be voted on." data-tippy-placement="bottom"><i class="icon-moon-guage text-xs opacity-75 top-0"></i><span class="mr-0">88% <span class="opacity-75">of</span> 3,173</span></span><span class="mr-0 text-ui-text-lc" data-tippy-content="Total times JavaScript has been completed out of all kata completions" data-tippy-placement="bottom"><i class="icon-moon-bullseye text-sm opacity-75"></i><span>13,193 <span class="opacity-75">of</span> 30,850</span></span><a class="mr-0" data-tippy-content="This kata&#39;s Sensei" data-tippy-placement="bottom" href="https://www.codewars.com/users/ZooeyMiller"><i class="icon-moon-user text-sm opacity-75"></i>ZooeyMiller</a></div></div><div class="w-full md:w-7/12"><div class="flex flex-col sm:flex-row sm:justify-around sm:items-center px-8 md:px-0"><div class="w-full sm:w-1/3"><div class="w-180px mx-auto"><div class="dropdown has-border p-4 shadow-sm" data-progress="2" id="language_dd"><i class="icon-moon-chevron-sign-down"></i><span class="mr-4"><i class="icon-moon-javascript "></i>JavaScript</span><div class="placeholder">Choose language...</div><dl class="overflow-auto"><dd data-href="/kata/583f158ea20cfcbeb400000a/solutions/c" data-load="" data-value="c"><i class="icon-moon-c-lang "></i>C</dd><dd data-href="/kata/583f158ea20cfcbeb400000a/solutions/coffeescript" data-load="" data-value="coffeescript"><i class="icon-moon-coffeescript "></i>CoffeeScript</dd><dd data-href="/kata/583f158ea20cfcbeb400000a/solutions/crystal" data-load="" data-value="crystal"><i class="icon-moon-crystal "></i>Crystal</dd><dd data-href="/kata/583f158ea20cfcbeb400000a/solutions/csharp" data-load="" data-value="csharp"><i class="icon-moon-csharp "></i>C#</dd><dd data-href="/kata/583f158ea20cfcbeb400000a/solutions/go" data-load="" data-value="go"><i class="icon-moon-go "></i>Go</dd><dd data-href="/kata/583f158ea20cfcbeb400000a/solutions/haskell" data-load="" data-value="haskell"><i class="icon-moon-haskell "></i>Haskell</dd><dd data-href="/kata/583f158ea20cfcbeb400000a/solutions/java" data-load="" data-value="java"><i class="icon-moon-java "></i>Java</dd><dd data-load="" data-progress="2" data-value="javascript"><i class="icon-moon-javascript "></i>JavaScript</dd><dd data-href="/kata/583f158ea20cfcbeb400000a/solutions/lua" data-load="" data-value="lua"><i class="icon-moon-lua "></i>Lua</dd><dd data-href="/kata/583f158ea20cfcbeb400000a/solutions/python" data-load="" data-value="python"><i class="icon-moon-python "></i>Python</dd><dd data-href="/kata/583f158ea20cfcbeb400000a/solutions/ruby" data-load="" data-value="ruby"><i class="icon-moon-ruby "></i>Ruby</dd><dd class="border-t" data-href="/kata/583f158ea20cfcbeb400000a/translations" data-load=""><i class="icon-moon-plus "></i>Add New</dd></dl></div></div></div><div class="w-full sm:w-2/3 py-2 md:py-0"><div class="text-center md:text-right whitespace-nowrap"><a class="btn is-dark" href="https://www.codewars.com/kata/583f158ea20cfcbeb400000a/train/javascript" id="replay_btn" title="Take this kata again. Try to beat your best time or attempt another language!"><i class="icon-moon-refresh "></i>Train Again</a><a class="btn ml-1 sm:ml-2" href="https://www.codewars.com/trainer/javascript" id="play_next_btn" title="Train on another challenge"><i class="icon-moon-play "></i>Next Kata</a></div></div></div></div></div></div><div class="w-full clear-both mt-2"><div class="flex flex-row justify-between mb-2"><ul class="flex flex-row justify-center items-center space-x-2 px-0 border-0 h-10"><li class="flex items-center px-4"><a href="https://www.codewars.com/kata/583f158ea20cfcbeb400000a/javascript">Details</a></li><li class="flex items-center bg-ui-section rounded-lg font-bold py-2 px-4"><a id="solutions"><i class="icon-moon-bullseye "></i>Solutions</a></li><li class="flex items-center px-4"><a href="https://www.codewars.com/kata/583f158ea20cfcbeb400000a/forks/javascript"><i class="icon-moon-forked "></i>Forks (7)</a></li><li class="flex items-center px-4"><a href="https://www.codewars.com/kata/583f158ea20cfcbeb400000a/discuss/javascript"><i class="icon-moon-comments "></i>Discourse (81)</a></li><li class="flex items-center px-4"><a href="https://www.codewars.com/kata/583f158ea20cfcbeb400000a/translations"><i class="icon-moon-translation "></i>Translations</a></li></ul><div class="js-train-social mt-2 hidden md:block"><a class="js-fork-current-language" data-tippy-content="Fork the current version of the selected language to propose changes" data-tippy-placement="bottom" data-turbolinks="false" href="https://www.codewars.com/kata/583f158ea20cfcbeb400000a/fork/javascript"><i class="icon-moon-forked "></i>Fork</a><span class="mx-4 opacity-25">|</span><a class="js-add-to-collection" data-challenge="{&quot;id&quot;:&quot;583f158ea20cfcbeb400000a&quot;,&quot;name&quot;:&quot;Make a function that does arithmetic!&quot;}"><i class="icon-moon-collection "></i>Collect</a><span class="mx-4 opacity-25">|</span><a class="js-share-email is-alt" href="mailto:?subject=Take%20the%20Codewars%20challenge%21&amp;body=Hey%2C%0A%0AI%20just%20completed%20training%20on%20%22Make%20a%20function%20that%20does%20arithmetic%21%22%20https%3A%2F%2Fwww.codewars.com%2F%2Fkata%2F583f158ea20cfcbeb400000a%2Fjavascript%0AIf%20you%27re%20not%20a%20member%20yet%2C%20join%20me%20and%20start%20training%20at%20https%3A%2F%2Fwww.codewars.com%2Fr%2FXu-Qyw%0A" target="_blank"><i class="icon-moon-envelope "></i></a><a class="js-share-twitter ml-1 is-alt" data-share-text="I solved the &quot;Fundamental&quot; kata! Take the code initiation @ codewars.com/r/Xu-Qyw to enlist and challenge yourself. #codewars"><i class="icon-moon-twitter "></i></a><a class="js-share-facebook ml-1 mr-2 is-alt" data-share-body="I solved the &quot;Make a function that does arithmetic!&quot; kata!" data-share-title="Take the Codewars challenge to enlist!"><i class="icon-moon-facebook "></i></a></div></div><div id="vote_feedback"><div class="panel bg-gradient-contrast-fade-right mb-4" id="vote_info"><span><i class="icon-moon-guage "></i>How satisfied are you with this kata?</span><ul class="vote-assessment is-inline ml-4 align-middle"><li data-value="1" class=""><a class="btn"><i class="icon-moon-happy "></i>Very</a></li><li data-value="0" class=""><a class="btn"><i class="icon-moon-blankstare "></i>Somewhat</a></li><li data-value="-1" class=""><a class="btn"><i class="icon-moon-sad "></i>None</a></li></ul><div class="clearfix"></div></div></div><div class="space-y-2 mb-4"><sl-details class="bg-ui-section" id="kata-details-description"><span class="text-base font-bold" slot="summary">Description</span><div class="markdown prose max-w-none" id="description">Loading description...</div><div class="mt-4"><span><i class="icon-moon-tag "></i></span><div class="keyword-tag">Fundamentals</div></div><p class="mb-2"><a href="https://www.codewars.com/kata/583f158ea20cfcbeb400000a/discuss/javascript">Suggest kata description edits</a></p></sl-details><sl-details class="bg-ui-section"><span class="text-base font-bold" slot="summary">Test Cases</span><div class="bg-contrast-50 rounded-lg description is-full-height has-auto-scrolling px-2 pt-2"><pre class="p-2 mb-2 overflow-x-auto"><code data-language="javascript"><span class="cm-keyword">const</span> <span class="cm-def">chai</span> <span class="cm-operator">=</span> <span class="cm-variable">require</span>(<span class="cm-string">"chai"</span>);
<span class="cm-keyword">const</span> <span class="cm-def">assert</span> <span class="cm-operator">=</span> <span class="cm-variable">chai</span>.<span class="cm-property">assert</span>;
<span class="cm-variable">chai</span>.<span class="cm-property">config</span>.<span class="cm-property">truncateThreshold</span><span class="cm-operator">=</span><span class="cm-number">0</span>;

<span class="cm-variable">describe</span>(<span class="cm-string">"Basic tests"</span>, () <span class="cm-operator">=&gt;</span> {
  <span class="cm-variable">it</span>(<span class="cm-string">"Testing for fixed tests"</span>, () <span class="cm-operator">=&gt;</span> {
    <span class="cm-variable">assert</span>.<span class="cm-property">strictEqual</span>(<span class="cm-variable">arithmetic</span>(<span class="cm-number">1</span>, <span class="cm-number">2</span>, <span class="cm-string">"add"</span>), <span class="cm-number">3</span>, <span class="cm-string">"'add' should return the two numbers added together!"</span>);
    <span class="cm-variable">assert</span>.<span class="cm-property">strictEqual</span>(<span class="cm-variable">arithmetic</span>(<span class="cm-number">8</span>, <span class="cm-number">2</span>, <span class="cm-string">"subtract"</span>), <span class="cm-number">6</span>, <span class="cm-string">"'subtract' should return a minus b!"</span>);
    <span class="cm-variable">assert</span>.<span class="cm-property">strictEqual</span>(<span class="cm-variable">arithmetic</span>(<span class="cm-number">5</span>, <span class="cm-number">2</span>, <span class="cm-string">"multiply"</span>), <span class="cm-number">10</span>, <span class="cm-string">"'multiply' should return a multiplied by b!"</span>);
    <span class="cm-variable">assert</span>.<span class="cm-property">strictEqual</span>(<span class="cm-variable">arithmetic</span>(<span class="cm-number">8</span>, <span class="cm-number">2</span>, <span class="cm-string">"divide"</span>), <span class="cm-number">4</span>, <span class="cm-string">"'divide' should return a divided by b!"</span>);
  })

  <span class="cm-keyword">function</span> <span class="cm-def">arithmeticCheck</span>(<span class="cm-def">a</span>, <span class="cm-def">b</span>, <span class="cm-def">operator</span>){
    <span class="cm-keyword">var</span> <span class="cm-def">operating</span> <span class="cm-operator">=</span> {
      <span class="cm-property">add</span>: <span class="cm-variable-2">a</span> <span class="cm-operator">+</span> <span class="cm-variable-2">b</span>,
      <span class="cm-property">subtract</span>: <span class="cm-variable-2">a</span> <span class="cm-operator">-</span> <span class="cm-variable-2">b</span>,
      <span class="cm-property">divide</span>: <span class="cm-variable-2">a</span> <span class="cm-operator">/</span> <span class="cm-variable-2">b</span>,
      <span class="cm-property">multiply</span>: <span class="cm-variable-2">a</span> <span class="cm-operator">*</span> <span class="cm-variable-2">b</span>
    };
    <span class="cm-keyword">return</span> <span class="cm-variable-2">operating</span>[<span class="cm-variable-2">operator</span>];
  }

  <span class="cm-variable">it</span>(<span class="cm-string">"Random tests for 'add'"</span>, () <span class="cm-operator">=&gt;</span> {
    <span class="cm-keyword">for</span>(<span class="cm-keyword">let</span> <span class="cm-def">i</span><span class="cm-operator">=</span><span class="cm-number">0</span>;<span class="cm-variable-2">i</span><span class="cm-operator">&lt;</span><span class="cm-number">25</span>;<span class="cm-variable-2">i</span><span class="cm-operator">++</span>){
      <span class="cm-keyword">let</span> <span class="cm-def">randomA</span> <span class="cm-operator">=</span> <span class="cm-variable">Math</span>.<span class="cm-property">floor</span>(<span class="cm-variable">Math</span>.<span class="cm-property">random</span>() <span class="cm-operator">*</span> <span class="cm-number">1000</span>) <span class="cm-operator">+</span> <span class="cm-number">1</span>;
      <span class="cm-keyword">let</span> <span class="cm-def">randomB</span> <span class="cm-operator">=</span> <span class="cm-variable">Math</span>.<span class="cm-property">floor</span>(<span class="cm-variable">Math</span>.<span class="cm-property">random</span>() <span class="cm-operator">*</span> <span class="cm-number">1000</span>) <span class="cm-operator">+</span> <span class="cm-number">1</span>;
      <span class="cm-variable">assert</span>.<span class="cm-property">strictEqual</span>(<span class="cm-variable">arithmetic</span>(<span class="cm-variable-2">randomA</span>, <span class="cm-variable-2">randomB</span>, <span class="cm-string">"add"</span>), <span class="cm-variable-2">arithmeticCheck</span>(<span class="cm-variable-2">randomA</span>, <span class="cm-variable-2">randomB</span>, <span class="cm-string">"add"</span>), <span class="cm-string-2">`Testing for ${</span><span class="cm-variable-2">randomA</span><span class="cm-string-2">}</span><span class="cm-string-2">, ${</span><span class="cm-variable-2">randomB</span><span class="cm-string-2">}</span><span class="cm-string-2">, "add"`</span>)
    };
  });  

  <span class="cm-variable">it</span>(<span class="cm-string">"Random tests for 'subtract'"</span>, () <span class="cm-operator">=&gt;</span> {
    <span class="cm-keyword">for</span>(<span class="cm-keyword">let</span> <span class="cm-def">i</span><span class="cm-operator">=</span><span class="cm-number">0</span>;<span class="cm-variable-2">i</span><span class="cm-operator">&lt;</span><span class="cm-number">25</span>;<span class="cm-variable-2">i</span><span class="cm-operator">++</span>){
      <span class="cm-keyword">let</span> <span class="cm-def">randomA</span> <span class="cm-operator">=</span> <span class="cm-variable">Math</span>.<span class="cm-property">floor</span>(<span class="cm-variable">Math</span>.<span class="cm-property">random</span>() <span class="cm-operator">*</span> <span class="cm-number">1000</span>) <span class="cm-operator">+</span> <span class="cm-number">1</span>;
      <span class="cm-keyword">let</span> <span class="cm-def">randomB</span> <span class="cm-operator">=</span> <span class="cm-variable">Math</span>.<span class="cm-property">floor</span>(<span class="cm-variable">Math</span>.<span class="cm-property">random</span>() <span class="cm-operator">*</span> <span class="cm-number">1000</span>) <span class="cm-operator">+</span> <span class="cm-number">1</span>;
      <span class="cm-variable">assert</span>.<span class="cm-property">strictEqual</span>(<span class="cm-variable">arithmetic</span>(<span class="cm-variable-2">randomA</span>, <span class="cm-variable-2">randomB</span>, <span class="cm-string">"subtract"</span>), <span class="cm-variable-2">arithmeticCheck</span>(<span class="cm-variable-2">randomA</span>, <span class="cm-variable-2">randomB</span>, <span class="cm-string">"subtract"</span>), <span class="cm-string-2">`Testing for ${</span><span class="cm-variable-2">randomA</span><span class="cm-string-2">}</span><span class="cm-string-2">, ${</span><span class="cm-variable-2">randomB</span><span class="cm-string-2">}</span><span class="cm-string-2">, "subtract"`</span>)
    };
  });

  <span class="cm-variable">it</span>(<span class="cm-string">"Random tests for 'divide'"</span>, () <span class="cm-operator">=&gt;</span> {
    <span class="cm-keyword">for</span>(<span class="cm-keyword">let</span> <span class="cm-def">i</span><span class="cm-operator">=</span><span class="cm-number">0</span>;<span class="cm-variable-2">i</span><span class="cm-operator">&lt;</span><span class="cm-number">25</span>;<span class="cm-variable-2">i</span><span class="cm-operator">++</span>){
      <span class="cm-keyword">let</span> <span class="cm-def">randomA</span> <span class="cm-operator">=</span> <span class="cm-variable">Math</span>.<span class="cm-property">floor</span>(<span class="cm-variable">Math</span>.<span class="cm-property">random</span>() <span class="cm-operator">*</span> <span class="cm-number">1000</span>) <span class="cm-operator">+</span> <span class="cm-number">1</span>;
      <span class="cm-keyword">let</span> <span class="cm-def">randomB</span> <span class="cm-operator">=</span> <span class="cm-variable">Math</span>.<span class="cm-property">floor</span>(<span class="cm-variable">Math</span>.<span class="cm-property">random</span>() <span class="cm-operator">*</span> <span class="cm-number">10</span>) <span class="cm-operator">+</span> <span class="cm-number">1</span>;
      <span class="cm-variable">assert</span>.<span class="cm-property">strictEqual</span>(<span class="cm-variable">arithmetic</span>(<span class="cm-variable-2">randomA</span>, <span class="cm-variable-2">randomB</span>, <span class="cm-string">"divide"</span>), <span class="cm-variable-2">arithmeticCheck</span>(<span class="cm-variable-2">randomA</span>, <span class="cm-variable-2">randomB</span>, <span class="cm-string">"divide"</span>), <span class="cm-string-2">`Testing for ${</span><span class="cm-variable-2">randomA</span><span class="cm-string-2">}</span><span class="cm-string-2">, ${</span><span class="cm-variable-2">randomB</span><span class="cm-string-2">}</span><span class="cm-string-2">, "divide"`</span>)
    };
  });

  <span class="cm-variable">it</span>(<span class="cm-string">"Random tests for 'multiply'"</span>, () <span class="cm-operator">=&gt;</span> {
    <span class="cm-keyword">for</span>(<span class="cm-keyword">let</span> <span class="cm-def">i</span><span class="cm-operator">=</span><span class="cm-number">0</span>;<span class="cm-variable-2">i</span><span class="cm-operator">&lt;</span><span class="cm-number">25</span>;<span class="cm-variable-2">i</span><span class="cm-operator">++</span>){
      <span class="cm-keyword">let</span> <span class="cm-def">randomA</span> <span class="cm-operator">=</span> <span class="cm-variable">Math</span>.<span class="cm-property">floor</span>(<span class="cm-variable">Math</span>.<span class="cm-property">random</span>() <span class="cm-operator">*</span> <span class="cm-number">1000</span>) <span class="cm-operator">+</span> <span class="cm-number">1</span>;
      <span class="cm-keyword">let</span> <span class="cm-def">randomB</span> <span class="cm-operator">=</span> <span class="cm-variable">Math</span>.<span class="cm-property">floor</span>(<span class="cm-variable">Math</span>.<span class="cm-property">random</span>() <span class="cm-operator">*</span> <span class="cm-number">10</span>) <span class="cm-operator">+</span> <span class="cm-number">1</span>;
      <span class="cm-variable">assert</span>.<span class="cm-property">strictEqual</span>(<span class="cm-variable">arithmetic</span>(<span class="cm-variable-2">randomA</span>, <span class="cm-variable-2">randomB</span>, <span class="cm-string">"multiply"</span>), <span class="cm-variable-2">arithmeticCheck</span>(<span class="cm-variable-2">randomA</span>, <span class="cm-variable-2">randomB</span>, <span class="cm-string">"multiply"</span>), <span class="cm-string-2">`Testing for ${</span><span class="cm-variable-2">randomA</span><span class="cm-string-2">}</span><span class="cm-string-2">, ${</span><span class="cm-variable-2">randomB</span><span class="cm-string-2">}</span><span class="cm-string-2">, "multiply"`</span>)
    };
  })
});</code></pre><p class="mb-2"><a href="https://www.codewars.com/kata/583f158ea20cfcbeb400000a/discuss/javascript">Suggest test case edits</a></p></div></sl-details></div><div class="flex flex-col md:flex-row md:space-x-4 md:space-y-0"><div class="w-full md:w-2/12" style="min-width: 260px"><div class="lg:sticky top-4"><form class="bg-contrast-50 rounded-lg p-4 mb-4" id="view-control"><div class="wf-title-alt mb-2">View</div><sl-radio-group class="solutions-filter" label="Filter" role="radiogroup"><sl-radio checked="" name="filter" value="all" role="radio" aria-checked="true">All Solutions</sl-radio><sl-radio name="filter" value="following" role="radio" aria-checked="false">By Users I Follow</sl-radio><sl-radio name="filter" value="me" role="radio" aria-checked="false">My Solutions</sl-radio></sl-radio-group><div class="wf-title-alt mt-6 mb-2">Sort By</div><sl-radio-group class="solutions-sort" label="Sort By" role="radiogroup"><sl-radio checked="" name="sort" value="best_practice" role="radio" aria-checked="true">Best Practices</sl-radio><sl-radio name="sort" value="clever" role="radio" aria-checked="false">Clever</sl-radio><sl-radio name="sort" value="newest" role="radio" aria-checked="false">Newest</sl-radio><sl-radio name="sort" value="oldest" role="radio" aria-checked="false">Oldest</sl-radio></sl-radio-group></form><div id="partner-display"><!--v-if--><div class="cw-ad cw-ad--image cw-ad--contrast"><a rel="nofollow noopener external" target="_blank" href="https://www.codewars.com/ads/carbon_srv?path=/ads/click/x/GTND42JMCABIK23LCWB4YKQNCWSIV2JNCTBDCZ3JCYBI52QICEYD527KFTSDLZ3JCYBI52QWCTADTK3K2JWNABY&amp;ad=457851&amp;placement=solutions_ad"><img alt="Ad" class="cw-ad__img" src="./110722-CW_files/1611842749-CarbonAds-FreeOS-B_2x.png"><div class="cw-ad__text"><!--v-if--><div class="cw-ad__copy"><span>Download SonarQube and start writing cleaner and safer code today!</span><!--v-if--></div></div></a><a class="cw-ad__callout" target="carbon" href="http://ads.new/checkout/new/?utm_source=codewars-com-carbon&amp;utm_medium=ad_via_link&amp;utm_campaign=in_unit&amp;utm_term=carbon">Ads via Carbon</a></div></div><div class="bg-contrast-50 rounded-lg mb-4" id="house-display"><div><div id="house_ad_display"><!--v-if--><div class="cw-ad cw-ad--image  cw-ad--title"><a rel="nofollow noopener external" target="_blank" href="https://www.codewars.com/ads/house_srv?path=https%3A%2F%2Fwww.qualified.io%3Futm_source%3Dcodewars%26utm_campaign%3Dhouse&amp;&amp;ad=qualified&amp;placement=solutions"><img alt="Ad" class="cw-ad__img" src="./110722-CW_files/62bdca69e0f8cf0d0f1612e2_Green BG Ad - 300x340 - Top Screenshot.jpg"><div class="cw-ad__text"><div class="cw-ad__title">Qualified Assessments</div><div class="cw-ad__copy"><span>Is your company struggling to find great software developers?</span><span class="cw-ad__cta">Start Your Free Trial</span></div></div></a><!--v-if--></div></div></div></div></div></div><div class="w-full md:w-10/12 rounded-lg"><div class="pb-4 pt-1 bg-ui-section rounded-lg mb-4"><div class="px-15px"><ul class="is-unstyled mb-0 divide-y space-y-6" id="solutions_list"><li class="js-result-group" data-controller="solution-group" data-solution-group-group-id-value="583f1d6d18b81e0419000062" data-solution-group-review-id-value="583f1c66d622c07b55000059" id="583f1d6d18b81e0419000062"><h6 class="solution-group-users-list my-4"><i class="icon-moon-users "></i><a class="font-semibold" href="https://www.codewars.com/users/PiotrBerebecki">PiotrBerebecki</a><span>, </span><a href="https://www.codewars.com/users/pitu7dg">pitu7dg</a><span>, </span><a href="https://www.codewars.com/users/kazk">kazk</a><span>, </span><a href="https://www.codewars.com/users/user5036852">user5036852</a><span>, </span><a href="https://www.codewars.com/users/gabbek">gabbek</a><span>, </span><a href="https://www.codewars.com/users/kevinjang">kevinjang</a><span>, </span><a href="https://www.codewars.com/users/michellejmj">michellejmj</a><span>, </span><a href="https://www.codewars.com/users/Villy-Villy">Villy-Villy</a><span>, </span><a href="https://www.codewars.com/users/Snowfrogdev">Snowfrogdev</a><span>, </span><a href="https://www.codewars.com/users/xdandleion">xdandleion</a><span> (+ 1745)</span><div class="clearfix"></div></h6><pre class="p-2 overflow-x-auto"><code data-language="javascript"><span class="cm-keyword">function</span> <span class="cm-def">arithmetic</span>(<span class="cm-def">a</span>, <span class="cm-def">b</span>, <span class="cm-def">operator</span>){
  <span class="cm-keyword">switch</span>(<span class="cm-variable-2">operator</span>) {
    <span class="cm-keyword">case</span> <span class="cm-string">'add'</span>:
      <span class="cm-keyword">return</span> <span class="cm-variable-2">a</span> <span class="cm-operator">+</span> <span class="cm-variable-2">b</span>;
    <span class="cm-keyword">case</span> <span class="cm-string">'subtract'</span>:
      <span class="cm-keyword">return</span> <span class="cm-variable-2">a</span> <span class="cm-operator">-</span> <span class="cm-variable-2">b</span>;
    <span class="cm-keyword">case</span> <span class="cm-string">'multiply'</span>:
      <span class="cm-keyword">return</span> <span class="cm-variable-2">a</span> <span class="cm-operator">*</span> <span class="cm-variable-2">b</span>;
    <span class="cm-keyword">case</span> <span class="cm-string">'divide'</span>:
      <span class="cm-keyword">return</span> <span class="cm-variable-2">a</span> <span class="cm-operator">/</span> <span class="cm-variable-2">b</span>;
  }
}</code></pre><div data-controller="solution-variations" data-solution-variations-group-id-value="583f1d6d18b81e0419000062" data-solution-variations-review-id-value="583f1c66d622c07b55000059"><div class="mt-4 mb-0 px-1 text-ui-text-lc flex justify-between"><div>1124 similar code variations are grouped with this one<i class="icon-moon-info ml-1" data-tippy-content="We group similar results by ignoring whitespace, linebreaks and very minor character variations." data-tippy-placement="bottom"></i></div><button class="hidden sm:block" data-action="solution-variations#toggle">Show Variations</button></div><div class="has-top-border mt-4 pt-4 is-hidden space-y-4" data-solution-variations-target="container"></div></div><div class="js-compare is-hidden"></div><div class="clearfix"></div>
<div class="comments-list-component" data-view-data="{&quot;comments&quot;:[{&quot;id&quot;:&quot;5fca91d854783c002ba7023c&quot;,&quot;masked&quot;:null,&quot;masked_by_id&quot;:null,&quot;votes_score&quot;:4,&quot;user_id&quot;:&quot;5e98e1ef9211b0001e1afa7a&quot;,&quot;edit_count&quot;:0,&quot;label&quot;:null,&quot;allowed_resolver_ids&quot;:[&quot;5e98e1ef9211b0001e1afa7a&quot;],&quot;state&quot;:&quot;fresh&quot;,&quot;is_resolvable&quot;:false,&quot;state_text&quot;:&quot;new&quot;,&quot;state_summary&quot;:&quot;Open&quot;,&quot;type&quot;:&quot;&quot;,&quot;label_text&quot;:null,&quot;markdown&quot;:&quot;Is it required to have \&quot;break\&quot; in there, or is it okay to omit it since you have \&quot;return\&quot;?&quot;,&quot;markdown_html&quot;:&quot;\u003cp\u003eIs it required to have \&quot;break\&quot; in there, or is it okay to omit it since you have \&quot;return\&quot;?\u003c/p\u003e&quot;,&quot;created_at&quot;:1607111128,&quot;created_at_datetime&quot;:&quot;2020-12-04T19:45:28.998+0000&quot;,&quot;nest_level&quot;:0,&quot;collapsed&quot;:false,&quot;total_comments&quot;:3,&quot;hash&quot;:&quot;#5fca91d854783c002ba7023c&quot;,&quot;user&quot;:{&quot;id&quot;:&quot;5e98e1ef9211b0001e1afa7a&quot;,&quot;username&quot;:&quot;heelercs&quot;,&quot;rank_name&quot;:&quot;5 kyu&quot;,&quot;profile_path&quot;:&quot;/users/heelercs&quot;,&quot;avatar_tag&quot;:&quot;\u003cimg title=\&quot;heelercs\&quot; data-tippy-content=\&quot;heelercs\&quot; data-tippy-placement=\&quot;bottom\&quot; alt=\&quot;heelercs Avatar\&quot; src=\&quot;https://avatars.githubusercontent.com/u/8145799?s=100\&quot; /\u003e&quot;,&quot;is_admin&quot;:false,&quot;is_mod&quot;:false,&quot;is_mender&quot;:false},&quot;comments&quot;:[{&quot;id&quot;:&quot;5fcb5fbf54783c002ba975c2&quot;,&quot;masked&quot;:null,&quot;masked_by_id&quot;:null,&quot;votes_score&quot;:4,&quot;user_id&quot;:&quot;5b3c2e19d58499761d000099&quot;,&quot;edit_count&quot;:1,&quot;label&quot;:null,&quot;allowed_resolver_ids&quot;:[&quot;5b3c2e19d58499761d000099&quot;],&quot;state&quot;:&quot;fresh&quot;,&quot;is_resolvable&quot;:false,&quot;state_text&quot;:&quot;new&quot;,&quot;state_summary&quot;:&quot;Open&quot;,&quot;type&quot;:&quot;&quot;,&quot;label_text&quot;:null,&quot;markdown&quot;:&quot;One case where you can remove break is when you are returning a value in a case. So, if you \&quot;return\&quot; in case, it is totally ok. &quot;,&quot;markdown_html&quot;:&quot;\u003cp\u003eOne case where you can remove break is when you are returning a value in a case. So, if you \&quot;return\&quot; in case, it is totally ok.\u003c/p\u003e&quot;,&quot;created_at&quot;:1607163839,&quot;created_at_datetime&quot;:&quot;2020-12-05T10:23:59.309+0000&quot;,&quot;nest_level&quot;:1,&quot;collapsed&quot;:false,&quot;total_comments&quot;:null,&quot;hash&quot;:&quot;#5fcb5fbf54783c002ba975c2&quot;,&quot;user&quot;:{&quot;id&quot;:&quot;5b3c2e19d58499761d000099&quot;,&quot;username&quot;:&quot;soylemezali42&quot;,&quot;rank_name&quot;:&quot;4 kyu&quot;,&quot;profile_path&quot;:&quot;/users/soylemezali42&quot;,&quot;avatar_tag&quot;:&quot;\u003cimg title=\&quot;soylemezali42\&quot; data-tippy-content=\&quot;soylemezali42\&quot; data-tippy-placement=\&quot;bottom\&quot; alt=\&quot;soylemezali42 Avatar\&quot; src=\&quot;https://avatars.githubusercontent.com/u/34939288?s=100\&quot; /\u003e&quot;,&quot;is_admin&quot;:false,&quot;is_mod&quot;:false,&quot;is_mender&quot;:false},&quot;comments&quot;:[]},{&quot;id&quot;:&quot;5fcbaf4778ee4c00268c01bc&quot;,&quot;masked&quot;:null,&quot;masked_by_id&quot;:null,&quot;votes_score&quot;:1,&quot;user_id&quot;:&quot;5e98e1ef9211b0001e1afa7a&quot;,&quot;edit_count&quot;:0,&quot;label&quot;:null,&quot;allowed_resolver_ids&quot;:[&quot;5e98e1ef9211b0001e1afa7a&quot;],&quot;state&quot;:&quot;fresh&quot;,&quot;is_resolvable&quot;:false,&quot;state_text&quot;:&quot;new&quot;,&quot;state_summary&quot;:&quot;Open&quot;,&quot;type&quot;:&quot;&quot;,&quot;label_text&quot;:null,&quot;markdown&quot;:&quot;Good to know. Thank you!&quot;,&quot;markdown_html&quot;:&quot;\u003cp\u003eGood to know. Thank you!\u003c/p\u003e&quot;,&quot;created_at&quot;:1607184199,&quot;created_at_datetime&quot;:&quot;2020-12-05T16:03:19.196+0000&quot;,&quot;nest_level&quot;:1,&quot;collapsed&quot;:false,&quot;total_comments&quot;:null,&quot;hash&quot;:&quot;#5fcbaf4778ee4c00268c01bc&quot;,&quot;user&quot;:{&quot;id&quot;:&quot;5e98e1ef9211b0001e1afa7a&quot;,&quot;username&quot;:&quot;heelercs&quot;,&quot;rank_name&quot;:&quot;5 kyu&quot;,&quot;profile_path&quot;:&quot;/users/heelercs&quot;,&quot;avatar_tag&quot;:&quot;\u003cimg title=\&quot;heelercs\&quot; data-tippy-content=\&quot;heelercs\&quot; data-tippy-placement=\&quot;bottom\&quot; alt=\&quot;heelercs Avatar\&quot; src=\&quot;https://avatars.githubusercontent.com/u/8145799?s=100\&quot; /\u003e&quot;,&quot;is_admin&quot;:false,&quot;is_mod&quot;:false,&quot;is_mender&quot;:false},&quot;comments&quot;:[]},{&quot;id&quot;:&quot;6230a135d190c40048be9099&quot;,&quot;masked&quot;:null,&quot;masked_by_id&quot;:null,&quot;votes_score&quot;:1,&quot;user_id&quot;:&quot;622f30ce630a4300439f8487&quot;,&quot;edit_count&quot;:0,&quot;label&quot;:null,&quot;allowed_resolver_ids&quot;:[&quot;622f30ce630a4300439f8487&quot;],&quot;state&quot;:&quot;fresh&quot;,&quot;is_resolvable&quot;:false,&quot;state_text&quot;:&quot;new&quot;,&quot;state_summary&quot;:&quot;Open&quot;,&quot;type&quot;:&quot;&quot;,&quot;label_text&quot;:null,&quot;markdown&quot;:&quot;Was wondering the same thing, thaks for asking. I added it a &#39;break&#39; after every case for best practices but wasn&#39;t sure if I needed it. &quot;,&quot;markdown_html&quot;:&quot;\u003cp\u003eWas wondering the same thing, thaks for asking. I added it a &#39;break&#39; after every case for best practices but wasn&#39;t sure if I needed it.\u003c/p\u003e&quot;,&quot;created_at&quot;:1647354165,&quot;created_at_datetime&quot;:&quot;2022-03-15T14:22:45.245+0000&quot;,&quot;nest_level&quot;:1,&quot;collapsed&quot;:false,&quot;total_comments&quot;:null,&quot;hash&quot;:&quot;#6230a135d190c40048be9099&quot;,&quot;user&quot;:{&quot;id&quot;:&quot;622f30ce630a4300439f8487&quot;,&quot;username&quot;:&quot;algoSolver988&quot;,&quot;rank_name&quot;:&quot;6 kyu&quot;,&quot;profile_path&quot;:&quot;/users/algoSolver988&quot;,&quot;avatar_tag&quot;:&quot;\u003cimg title=\&quot;algoSolver988\&quot; data-tippy-content=\&quot;algoSolver988\&quot; data-tippy-placement=\&quot;bottom\&quot; alt=\&quot;algoSolver988 Avatar\&quot; src=\&quot;https://www.codewars.com/packs/assets/profile-pic.f3a90aca.png\&quot; /\u003e&quot;,&quot;is_admin&quot;:false,&quot;is_mod&quot;:false,&quot;is_mender&quot;:false},&quot;comments&quot;:[]}]}],&quot;hideSpoilers&quot;:false,&quot;allowedLabels&quot;:[],&quot;totalComments&quot;:4,&quot;spoilerFlag&quot;:true,&quot;commentUrl&quot;:&quot;/kata/reviews/583f1c66d622c07b55000059/groups/583f1d6d18b81e0419000062/comments/%7Bcomment_id%7D&quot;,&quot;voteUrl&quot;:&quot;/kata/reviews/583f1c66d622c07b55000059/groups/583f1d6d18b81e0419000062/comments/%7BrefId%7D/vote/%7Bvalue%7D&quot;,&quot;userVotesUrl&quot;:&quot;/kata/reviews/583f1c66d622c07b55000059/groups/583f1d6d18b81e0419000062/comments/user_votes&quot;,&quot;labelGroups&quot;:[{&quot;name&quot;:&quot;Comments&quot;,&quot;label&quot;:null,&quot;count&quot;:1}],&quot;stateGroups&quot;:[{&quot;name&quot;:&quot;Open&quot;,&quot;count&quot;:1}]}">
<div class="comments" data-comment-url="/kata/reviews/583f1c66d622c07b55000059/groups/583f1d6d18b81e0419000062/comments/%7Bcomment_id%7D">
<ul class="piped-text mt-4 has-keyword-tags">
<li>
<ul class="vote-labels" data-vote-name="solution-solution_group" data-vote-ref-id="583f1d6d18b81e0419000062"><li data-tippy-content="Vote this solution as a best practice. Best practice solutions tend to be a good balance of performance, readability and maintainability." data-tippy-placement="bottom"><a class="vote-label" data-label="best_practice"><i class="icon-moon-up "></i>Best Practices<span>340</span></a></li><li data-tippy-content="Vote this solution as being clever. Clever solutions tend to be very creative or make use of obscure language features. They usually are not code that you would want to put into production." data-tippy-placement="bottom"><a class="vote-label" data-label="clever"><i class="icon-moon-up "></i>Clever<span>28</span></a></li></ul>
</li>
<li>
<a class="js-show-comments">
<i class="icon-moon-comments "></i>
<span>4</span>
</a>
</li>
<li><a href="https://www.codewars.com/kumite/new?group_id=583f1d6d18b81e0419000062&amp;review_id=583f1c66d622c07b55000059"><span>Fork</span></a></li><li data-bind-if="$solution"><a class="js-compare-solutions" data-tippy-content="Compare this solution to your own" data-tippy-placement="bottom"><i class="icon-moon-compare "></i>Compare with your solution</a></li><li><a href="https://www.codewars.com/kata/reviews/583f1c66d622c07b55000059/groups/583f1d6d18b81e0419000062">Link</a></li>
</ul>
<div class="clearfix"></div>
<!--v-if-->
<div class="clearfix"></div>
<ul class="comments-list is-hidden" user-votes-url="/kata/reviews/583f1c66d622c07b55000059/groups/583f1d6d18b81e0419000062/comments/user_votes">
<li class="new-comment" data-bind-class="new_comment_class">

<div>
<figure>
<a href="https://www.codewars.com/users/GreenEagleKing">
<div><img title="GreenEagleKing" data-tippy-content="GreenEagleKing" data-tippy-placement="bottom" alt="GreenEagleKing Avatar" src="./110722-CW_files/101405438"></div>
</a>
</figure>
<div class="comment-content">
<div class="preedit px-1">
<input type="text" class="form-input block w-64 rounded-none rounded-md sm:text-sm dark:bg-gray-800 focus:outline-none focus:ring-cgray-300 dark:focus:ring-cgray-600 focus:border-cgray-300 dark:focus:border-cgray-600 border-gray-300 dark:border-gray-700" placeholder="Leave feedback...">
</div>
<div class="clearfix mb-4"></div>
</div>
<div class="clearfix"></div>
</div>



</li>
<li class="comment mt-6" data-label="no-label" data-state="Open" data-username="heelercs" id="5fca91d854783c002ba7023c">

<div>
<figure>
<a href="https://www.codewars.com/users/heelercs">
<div><img title="heelercs" data-tippy-content="heelercs" data-tippy-placement="bottom" alt="heelercs Avatar" src="./110722-CW_files/8145799"></div>
</a>
</figure>
<div class="comment-content">
<div>
<h6 class="mt-4 mb-2">
<ul class="bulleted-text">
<li>
<span class="bullet"></span>
<a href="https://www.codewars.com/users/heelercs">heelercs</a>
<!--v-if-->


<span class="ml-1">(5 kyu)</span>
</li>
<li>
<span class="bullet"></span>
<a class="text-ui-text-lc hover:underline" data-turbolinks="false" href="https://www.codewars.com/kata/583f158ea20cfcbeb400000a/solutions/javascript#5fca91d854783c002ba7023c">
<time-ago lang="en" datetime="2020-12-04T19:45:28.998+0000" title="4 Dec 2020, 19:45 GMT">2 years ago</time-ago>
</a>
</li>
<!--v-if-->
<!--v-if-->
</ul>
</h6>
<div class="comment-markdown markdown prose max-w-none p-1 overflow-x-auto" data-markdown="Is it required to have &quot;break&quot; in there, or is it okay to omit it since you have &quot;return&quot;?"><p>Is it required to have "break" in there, or is it okay to omit it since you have "return"?</p>
</div>


<div>
<ul class="comment-actions bulleted-text">
<li>
<span class="voter">
<span class="score">4</span>
<span class="vote">
<a class="up_vote" data-tippy-content="Up vote" data-tippy-placement="bottom">
<i class="icon-moon-up "></i>
</a>
</span>
<span class="spacer">|</span>
<span class="vote">
<a class="down_vote" data-tippy-content="Down vote" data-tippy-placement="bottom">
<i class="icon-moon-down "></i>
</a>
</span>
</span>
</li>
<li>
<span class="bullet"></span>
<a>
<i class="icon-moon-reply "></i>Reply
</a>
</li>
<!--v-if-->
<li>
<span class="bullet"></span>
<a>
<i class="icon-moon-object "></i>View Solution
</a>
</li>
<li>
<span class="bullet"></span>
<a><i class="icon-moon-chevron-sign-up "></i>Collapse</a>
</li>

<li class="is-auto-hidden">
<span class="bullet"></span>
<a data-tippy-placement="bottom" data-tippy-content="Flag this comment as a spoiler. It will be hidden from users who have not yet solved the kata.">
<i class="icon-moon-flag "></i>
<span>Spoiler</span>
</a>
</li>
<!--v-if-->
</ul>
<div class="clearfix"></div>
<!--v-if-->
<!--v-if-->
</div>
</div>
<!--v-if-->
<div class="nested-comments">
<ul class="comments-list">
<li class="comment" data-label="no-label" data-state="Open" data-username="soylemezali42" id="5fcb5fbf54783c002ba975c2">

<div>
<figure>
<a href="https://www.codewars.com/users/soylemezali42">
<div><img title="soylemezali42" data-tippy-content="soylemezali42" data-tippy-placement="bottom" alt="soylemezali42 Avatar" src="./110722-CW_files/34939288"></div>
</a>
</figure>
<div class="comment-content">
<div>
<h6 class="mt-4 mb-2">
<ul class="bulleted-text">
<li>
<span class="bullet"></span>
<a href="https://www.codewars.com/users/soylemezali42">soylemezali42</a>
<!--v-if-->


<span class="ml-1">(4 kyu)</span>
</li>
<li>
<span class="bullet"></span>
<a class="text-ui-text-lc hover:underline" data-turbolinks="false" href="https://www.codewars.com/kata/583f158ea20cfcbeb400000a/solutions/javascript#5fcb5fbf54783c002ba975c2">
<time-ago lang="en" datetime="2020-12-05T10:23:59.309+0000" title="5 Dec 2020, 10:23 GMT">2 years ago</time-ago>
</a>
</li>
<li class="text-ui-text-lc">
<span class="bullet"></span>
<span>1 edit</span>

</li>
<!--v-if-->
</ul>
</h6>
<div class="comment-markdown markdown prose max-w-none p-1 overflow-x-auto" data-markdown="One case where you can remove break is when you are returning a value in a case. So, if you &quot;return&quot; in case, it is totally ok. "><p>One case where you can remove break is when you are returning a value in a case. So, if you "return" in case, it is totally ok. </p>
</div>


<div>
<ul class="comment-actions bulleted-text">
<li>
<span class="voter">
<span class="score">4</span>
<span class="vote">
<a class="up_vote" data-tippy-content="Up vote" data-tippy-placement="bottom">
<i class="icon-moon-up "></i>
</a>
</span>
<span class="spacer">|</span>
<span class="vote">
<a class="down_vote" data-tippy-content="Down vote" data-tippy-placement="bottom">
<i class="icon-moon-down "></i>
</a>
</span>
</span>
</li>
<!--v-if-->
<!--v-if-->
<li>
<span class="bullet"></span>
<a>
<i class="icon-moon-object "></i>View Solution
</a>
</li>
<!--v-if-->

<li class="is-auto-hidden">
<span class="bullet"></span>
<a data-tippy-placement="bottom" data-tippy-content="Flag this comment as a spoiler. It will be hidden from users who have not yet solved the kata.">
<i class="icon-moon-flag "></i>
<span>Spoiler</span>
</a>
</li>
<!--v-if-->
</ul>
<div class="clearfix"></div>
<!--v-if-->
<!--v-if-->
</div>
</div>
<!--v-if-->
<div class="nested-comments">
<ul class="comments-list">

<!--v-if-->
</ul>
</div>
<ul class="comment-actions is-auto-hidden bulleted-text" style="display: none;">
<li>
<a><i class="icon-moon-reply "></i>Reply</a>
</li>
</ul>
</div>
</div>

</li><li class="comment" data-label="no-label" data-state="Open" data-username="heelercs" id="5fcbaf4778ee4c00268c01bc">

<div>
<figure>
<a href="https://www.codewars.com/users/heelercs">
<div><img title="heelercs" data-tippy-content="heelercs" data-tippy-placement="bottom" alt="heelercs Avatar" src="./110722-CW_files/8145799"></div>
</a>
</figure>
<div class="comment-content">
<div>
<h6 class="mt-4 mb-2">
<ul class="bulleted-text">
<li>
<span class="bullet"></span>
<a href="https://www.codewars.com/users/heelercs">heelercs</a>
<!--v-if-->


<span class="ml-1">(5 kyu)</span>
</li>
<li>
<span class="bullet"></span>
<a class="text-ui-text-lc hover:underline" data-turbolinks="false" href="https://www.codewars.com/kata/583f158ea20cfcbeb400000a/solutions/javascript#5fcbaf4778ee4c00268c01bc">
<time-ago lang="en" datetime="2020-12-05T16:03:19.196+0000" title="5 Dec 2020, 16:03 GMT">2 years ago</time-ago>
</a>
</li>
<!--v-if-->
<!--v-if-->
</ul>
</h6>
<div class="comment-markdown markdown prose max-w-none p-1 overflow-x-auto" data-markdown="Good to know. Thank you!"><p>Good to know. Thank you!</p>
</div>


<div>
<ul class="comment-actions bulleted-text">
<li>
<span class="voter">
<span class="score">1</span>
<span class="vote">
<a class="up_vote" data-tippy-content="Up vote" data-tippy-placement="bottom">
<i class="icon-moon-up "></i>
</a>
</span>
<span class="spacer">|</span>
<span class="vote">
<a class="down_vote" data-tippy-content="Down vote" data-tippy-placement="bottom">
<i class="icon-moon-down "></i>
</a>
</span>
</span>
</li>
<!--v-if-->
<!--v-if-->
<li>
<span class="bullet"></span>
<a>
<i class="icon-moon-object "></i>View Solution
</a>
</li>
<!--v-if-->

<li class="is-auto-hidden">
<span class="bullet"></span>
<a data-tippy-placement="bottom" data-tippy-content="Flag this comment as a spoiler. It will be hidden from users who have not yet solved the kata.">
<i class="icon-moon-flag "></i>
<span>Spoiler</span>
</a>
</li>
<!--v-if-->
</ul>
<div class="clearfix"></div>
<!--v-if-->
<!--v-if-->
</div>
</div>
<!--v-if-->
<div class="nested-comments">
<ul class="comments-list">

<!--v-if-->
</ul>
</div>
<ul class="comment-actions is-auto-hidden bulleted-text" style="display: none;">
<li>
<a><i class="icon-moon-reply "></i>Reply</a>
</li>
</ul>
</div>
</div>

</li><li class="comment" data-label="no-label" data-state="Open" data-username="algoSolver988" id="6230a135d190c40048be9099">

<div>
<figure>
<a href="https://www.codewars.com/users/algoSolver988">
<div><img title="algoSolver988" data-tippy-content="algoSolver988" data-tippy-placement="bottom" alt="algoSolver988 Avatar" src="./110722-CW_files/profile-pic.f3a90aca.png"></div>
</a>
</figure>
<div class="comment-content">
<div>
<h6 class="mt-4 mb-2">
<ul class="bulleted-text">
<li>
<span class="bullet"></span>
<a href="https://www.codewars.com/users/algoSolver988">algoSolver988</a>
<!--v-if-->


<span class="ml-1">(6 kyu)</span>
</li>
<li>
<span class="bullet"></span>
<a class="text-ui-text-lc hover:underline" data-turbolinks="false" href="https://www.codewars.com/kata/583f158ea20cfcbeb400000a/solutions/javascript#6230a135d190c40048be9099">
<time-ago lang="en" datetime="2022-03-15T14:22:45.245+0000" title="15 Mar 2022, 14:22 GMT">4 months ago</time-ago>
</a>
</li>
<!--v-if-->
<!--v-if-->
</ul>
</h6>
<div class="comment-markdown markdown prose max-w-none p-1 overflow-x-auto" data-markdown="Was wondering the same thing, thaks for asking. I added it a &#39;break&#39; after every case for best practices but wasn&#39;t sure if I needed it. "><p>Was wondering the same thing, thaks for asking. I added it a 'break' after every case for best practices but wasn't sure if I needed it. </p>
</div>


<div>
<ul class="comment-actions bulleted-text">
<li>
<span class="voter">
<span class="score">1</span>
<span class="vote">
<a class="up_vote" data-tippy-content="Up vote" data-tippy-placement="bottom">
<i class="icon-moon-up "></i>
</a>
</span>
<span class="spacer">|</span>
<span class="vote">
<a class="down_vote" data-tippy-content="Down vote" data-tippy-placement="bottom">
<i class="icon-moon-down "></i>
</a>
</span>
</span>
</li>
<!--v-if-->
<!--v-if-->
<li>
<span class="bullet"></span>
<a>
<i class="icon-moon-object "></i>View Solution
</a>
</li>
<!--v-if-->

<li class="is-auto-hidden">
<span class="bullet"></span>
<a data-tippy-placement="bottom" data-tippy-content="Flag this comment as a spoiler. It will be hidden from users who have not yet solved the kata.">
<i class="icon-moon-flag "></i>
<span>Spoiler</span>
</a>
</li>
<!--v-if-->
</ul>
<div class="clearfix"></div>
<!--v-if-->
<!--v-if-->
</div>
</div>
<!--v-if-->
<div class="nested-comments">
<ul class="comments-list">

<!--v-if-->
</ul>
</div>
<ul class="comment-actions is-auto-hidden bulleted-text" style="display: none;">
<li>
<a><i class="icon-moon-reply "></i>Reply</a>
</li>
</ul>
</div>
</div>

</li>
<!--v-if-->
</ul>
</div>
<ul class="comment-actions is-auto-hidden bulleted-text">
<li>
<a><i class="icon-moon-reply "></i>Reply</a>
</li>
</ul>
</div>
</div>

</li>
</ul>
</div>
<div class="clearfix"></div>
</div>
</li><li class="js-result-group" data-controller="solution-group" data-solution-group-group-id-value="5842b053d159a279cf0001a6" data-solution-group-review-id-value="583f1c66d622c07b55000059" id="5842b053d159a279cf0001a6"><h6 class="solution-group-users-list my-4"><i class="icon-moon-users "></i><a class="font-semibold" href="https://www.codewars.com/users/Wittybit">Wittybit</a><span>, </span><a href="https://www.codewars.com/users/Piotr-Aueternum">Piotr-Aueternum</a><span>, </span><a href="https://www.codewars.com/users/Lorena4">Lorena4</a><span>, </span><a href="https://www.codewars.com/users/alexandrusoare">alexandrusoare</a><span>, </span><a href="https://www.codewars.com/users/gmox11@gmsil.com">gmox11@gmsil.com</a><span>, </span><a href="https://www.codewars.com/users/Artur%20Badmaev">Artur Badmaev</a><span>, </span><a href="https://www.codewars.com/users/L-Hejer">L-Hejer</a><span>, </span><a href="https://www.codewars.com/users/0lexa">0lexa</a><span>, </span><a href="https://www.codewars.com/users/oumaima-dr">oumaima-dr</a><span>, </span><a href="https://www.codewars.com/users/theofilvaliant">theofilvaliant</a><span> (+ 24)</span><div class="clearfix"></div></h6><pre class="p-2 overflow-x-auto"><code data-language="javascript"><span class="cm-keyword">const</span> <span class="cm-def">arithmetic</span> <span class="cm-operator">=</span> (<span class="cm-def">a</span>, <span class="cm-def">b</span>, <span class="cm-def">operator</span>) <span class="cm-operator">=&gt;</span> ({
  <span class="cm-string cm-property">'add'</span>     : <span class="cm-variable-2">a</span> <span class="cm-operator">+</span> <span class="cm-variable-2">b</span>,
  <span class="cm-string cm-property">'subtract'</span>: <span class="cm-variable-2">a</span> <span class="cm-operator">-</span> <span class="cm-variable-2">b</span>,
  <span class="cm-string cm-property">'multiply'</span>: <span class="cm-variable-2">a</span> <span class="cm-operator">*</span> <span class="cm-variable-2">b</span>,
  <span class="cm-string cm-property">'divide'</span>  : <span class="cm-variable-2">a</span> <span class="cm-operator">/</span> <span class="cm-variable-2">b</span>
}[<span class="cm-variable-2">operator</span>]);</code></pre><div data-controller="solution-variations" data-solution-variations-group-id-value="5842b053d159a279cf0001a6" data-solution-variations-review-id-value="583f1c66d622c07b55000059"><div class="mt-4 mb-0 px-1 text-ui-text-lc flex justify-between"><div>16 similar code variations are grouped with this one<i class="icon-moon-info ml-1" data-tippy-content="We group similar results by ignoring whitespace, linebreaks and very minor character variations." data-tippy-placement="bottom"></i></div><button class="hidden sm:block" data-action="solution-variations#toggle">Show Variations</button></div><div class="has-top-border mt-4 pt-4 is-hidden space-y-4" data-solution-variations-target="container"></div></div><div class="js-compare is-hidden"></div><div class="clearfix"></div>
<div class="comments-list-component" data-view-data="{&quot;comments&quot;:[{&quot;id&quot;:&quot;62c204dff8f15c6b384c3aef&quot;,&quot;masked&quot;:null,&quot;masked_by_id&quot;:null,&quot;votes_score&quot;:1,&quot;user_id&quot;:&quot;6215344c1db303027a7b89b9&quot;,&quot;edit_count&quot;:0,&quot;label&quot;:null,&quot;allowed_resolver_ids&quot;:[&quot;6215344c1db303027a7b89b9&quot;],&quot;state&quot;:&quot;fresh&quot;,&quot;is_resolvable&quot;:false,&quot;state_text&quot;:&quot;new&quot;,&quot;state_summary&quot;:&quot;Open&quot;,&quot;type&quot;:&quot;&quot;,&quot;label_text&quot;:null,&quot;markdown&quot;:&quot;You can remove the quotation marks&quot;,&quot;markdown_html&quot;:&quot;\u003cp\u003eYou can remove the quotation marks\u003c/p\u003e&quot;,&quot;created_at&quot;:1656882399,&quot;created_at_datetime&quot;:&quot;2022-07-03T21:06:39.509+0000&quot;,&quot;nest_level&quot;:0,&quot;collapsed&quot;:false,&quot;total_comments&quot;:0,&quot;hash&quot;:&quot;#62c204dff8f15c6b384c3aef&quot;,&quot;user&quot;:{&quot;id&quot;:&quot;6215344c1db303027a7b89b9&quot;,&quot;username&quot;:&quot;Ulin&quot;,&quot;rank_name&quot;:&quot;5 kyu&quot;,&quot;profile_path&quot;:&quot;/users/Ulin&quot;,&quot;avatar_tag&quot;:&quot;\u003cimg title=\&quot;Ulin\&quot; data-tippy-content=\&quot;Ulin\&quot; data-tippy-placement=\&quot;bottom\&quot; alt=\&quot;Ulin Avatar\&quot; src=\&quot;https://www.codewars.com/packs/assets/profile-pic.f3a90aca.png\&quot; /\u003e&quot;,&quot;is_admin&quot;:false,&quot;is_mod&quot;:false,&quot;is_mender&quot;:false},&quot;comments&quot;:[]},{&quot;id&quot;:&quot;62a937938b33700016c5edec&quot;,&quot;masked&quot;:null,&quot;masked_by_id&quot;:null,&quot;votes_score&quot;:1,&quot;user_id&quot;:&quot;62865fa993a196001f753993&quot;,&quot;edit_count&quot;:0,&quot;label&quot;:null,&quot;allowed_resolver_ids&quot;:[&quot;62865fa993a196001f753993&quot;],&quot;state&quot;:&quot;fresh&quot;,&quot;is_resolvable&quot;:false,&quot;state_text&quot;:&quot;new&quot;,&quot;state_summary&quot;:&quot;Open&quot;,&quot;type&quot;:&quot;&quot;,&quot;label_text&quot;:null,&quot;markdown&quot;:&quot;a sweet and simple version of mine. i love it.&quot;,&quot;markdown_html&quot;:&quot;\u003cp\u003ea sweet and simple version of mine. i love it.\u003c/p\u003e&quot;,&quot;created_at&quot;:1655256979,&quot;created_at_datetime&quot;:&quot;2022-06-15T01:36:19.956+0000&quot;,&quot;nest_level&quot;:0,&quot;collapsed&quot;:false,&quot;total_comments&quot;:0,&quot;hash&quot;:&quot;#62a937938b33700016c5edec&quot;,&quot;user&quot;:{&quot;id&quot;:&quot;62865fa993a196001f753993&quot;,&quot;username&quot;:&quot;bologna&quot;,&quot;rank_name&quot;:&quot;5 kyu&quot;,&quot;profile_path&quot;:&quot;/users/bologna&quot;,&quot;avatar_tag&quot;:&quot;\u003cimg title=\&quot;bologna\&quot; data-tippy-content=\&quot;bologna\&quot; data-tippy-placement=\&quot;bottom\&quot; alt=\&quot;bologna Avatar\&quot; src=\&quot;https://avatars.githubusercontent.com/u/45748079?s=100\&quot; /\u003e&quot;,&quot;is_admin&quot;:false,&quot;is_mod&quot;:false,&quot;is_mender&quot;:false},&quot;comments&quot;:[]},{&quot;id&quot;:&quot;6244038c58ad06006b6491a6&quot;,&quot;masked&quot;:null,&quot;masked_by_id&quot;:null,&quot;votes_score&quot;:1,&quot;user_id&quot;:&quot;61f5000be3436d004acfad10&quot;,&quot;edit_count&quot;:0,&quot;label&quot;:null,&quot;allowed_resolver_ids&quot;:[&quot;61f5000be3436d004acfad10&quot;],&quot;state&quot;:&quot;fresh&quot;,&quot;is_resolvable&quot;:false,&quot;state_text&quot;:&quot;new&quot;,&quot;state_summary&quot;:&quot;Open&quot;,&quot;type&quot;:&quot;&quot;,&quot;label_text&quot;:null,&quot;markdown&quot;:&quot;Awesome!I&#39;ve spent almost 5 min to understand how does it work! Great!&quot;,&quot;markdown_html&quot;:&quot;\u003cp\u003eAwesome!I&#39;ve spent almost 5 min to understand how does it work! Great!\u003c/p\u003e&quot;,&quot;created_at&quot;:1648624524,&quot;created_at_datetime&quot;:&quot;2022-03-30T07:15:24.596+0000&quot;,&quot;nest_level&quot;:0,&quot;collapsed&quot;:false,&quot;total_comments&quot;:0,&quot;hash&quot;:&quot;#6244038c58ad06006b6491a6&quot;,&quot;user&quot;:{&quot;id&quot;:&quot;61f5000be3436d004acfad10&quot;,&quot;username&quot;:&quot;grol_kun&quot;,&quot;rank_name&quot;:&quot;6 kyu&quot;,&quot;profile_path&quot;:&quot;/users/grol_kun&quot;,&quot;avatar_tag&quot;:&quot;\u003cimg title=\&quot;grol_kun\&quot; data-tippy-content=\&quot;grol_kun\&quot; data-tippy-placement=\&quot;bottom\&quot; alt=\&quot;grol_kun Avatar\&quot; src=\&quot;https://avatars.githubusercontent.com/u/101469695?s=100\&quot; /\u003e&quot;,&quot;is_admin&quot;:false,&quot;is_mod&quot;:false,&quot;is_mender&quot;:false},&quot;comments&quot;:[]},{&quot;id&quot;:&quot;623869489e22a500177e253c&quot;,&quot;masked&quot;:null,&quot;masked_by_id&quot;:null,&quot;votes_score&quot;:1,&quot;user_id&quot;:&quot;6211fe1a1db303000f7b783a&quot;,&quot;edit_count&quot;:0,&quot;label&quot;:null,&quot;allowed_resolver_ids&quot;:[&quot;6211fe1a1db303000f7b783a&quot;],&quot;state&quot;:&quot;fresh&quot;,&quot;is_resolvable&quot;:false,&quot;state_text&quot;:&quot;new&quot;,&quot;state_summary&quot;:&quot;Open&quot;,&quot;type&quot;:&quot;&quot;,&quot;label_text&quot;:null,&quot;markdown&quot;:&quot;This is impressive, so cool 😮&quot;,&quot;markdown_html&quot;:&quot;\u003cp\u003eThis is impressive, so cool 😮\u003c/p\u003e&quot;,&quot;created_at&quot;:1647864136,&quot;created_at_datetime&quot;:&quot;2022-03-21T12:02:16.279+0000&quot;,&quot;nest_level&quot;:0,&quot;collapsed&quot;:false,&quot;total_comments&quot;:0,&quot;hash&quot;:&quot;#623869489e22a500177e253c&quot;,&quot;user&quot;:{&quot;id&quot;:&quot;6211fe1a1db303000f7b783a&quot;,&quot;username&quot;:&quot;Quantifiers&quot;,&quot;rank_name&quot;:&quot;7 kyu&quot;,&quot;profile_path&quot;:&quot;/users/Quantifiers&quot;,&quot;avatar_tag&quot;:&quot;\u003cimg title=\&quot;Quantifiers\&quot; data-tippy-content=\&quot;Quantifiers\&quot; data-tippy-placement=\&quot;bottom\&quot; alt=\&quot;Quantifiers Avatar\&quot; src=\&quot;https://www.codewars.com/packs/assets/profile-pic.f3a90aca.png\&quot; /\u003e&quot;,&quot;is_admin&quot;:false,&quot;is_mod&quot;:false,&quot;is_mender&quot;:false},&quot;comments&quot;:[]},{&quot;id&quot;:&quot;62368e16be76bc005f07b055&quot;,&quot;masked&quot;:null,&quot;masked_by_id&quot;:null,&quot;votes_score&quot;:1,&quot;user_id&quot;:&quot;6236180dbe76bc003107a2c8&quot;,&quot;edit_count&quot;:0,&quot;label&quot;:null,&quot;allowed_resolver_ids&quot;:[&quot;6236180dbe76bc003107a2c8&quot;],&quot;state&quot;:&quot;fresh&quot;,&quot;is_resolvable&quot;:false,&quot;state_text&quot;:&quot;new&quot;,&quot;state_summary&quot;:&quot;Open&quot;,&quot;type&quot;:&quot;&quot;,&quot;label_text&quot;:null,&quot;markdown&quot;:&quot;Elegant...cleaner imposible&quot;,&quot;markdown_html&quot;:&quot;\u003cp\u003eElegant...cleaner imposible\u003c/p\u003e&quot;,&quot;created_at&quot;:1647742486,&quot;created_at_datetime&quot;:&quot;2022-03-20T02:14:46.993+0000&quot;,&quot;nest_level&quot;:0,&quot;collapsed&quot;:false,&quot;total_comments&quot;:0,&quot;hash&quot;:&quot;#62368e16be76bc005f07b055&quot;,&quot;user&quot;:{&quot;id&quot;:&quot;6236180dbe76bc003107a2c8&quot;,&quot;username&quot;:&quot;paatshaala&quot;,&quot;rank_name&quot;:&quot;5 kyu&quot;,&quot;profile_path&quot;:&quot;/users/paatshaala&quot;,&quot;avatar_tag&quot;:&quot;\u003cimg title=\&quot;paatshaala\&quot; data-tippy-content=\&quot;paatshaala\&quot; data-tippy-placement=\&quot;bottom\&quot; alt=\&quot;paatshaala Avatar\&quot; src=\&quot;https://www.codewars.com/packs/assets/profile-pic.f3a90aca.png\&quot; /\u003e&quot;,&quot;is_admin&quot;:false,&quot;is_mod&quot;:false,&quot;is_mender&quot;:false},&quot;comments&quot;:[]},{&quot;id&quot;:&quot;60eaef6c53673e00076b4445&quot;,&quot;masked&quot;:null,&quot;masked_by_id&quot;:null,&quot;votes_score&quot;:2,&quot;user_id&quot;:&quot;60bbda55c7c8060019a633f7&quot;,&quot;edit_count&quot;:0,&quot;label&quot;:null,&quot;allowed_resolver_ids&quot;:[&quot;60bbda55c7c8060019a633f7&quot;],&quot;state&quot;:&quot;fresh&quot;,&quot;is_resolvable&quot;:false,&quot;state_text&quot;:&quot;new&quot;,&quot;state_summary&quot;:&quot;Open&quot;,&quot;type&quot;:&quot;&quot;,&quot;label_text&quot;:null,&quot;markdown&quot;:&quot;Previously see this method with object in usage. Congrats!&quot;,&quot;markdown_html&quot;:&quot;\u003cp\u003ePreviously see this method with object in usage. Congrats!\u003c/p\u003e&quot;,&quot;created_at&quot;:1626009452,&quot;created_at_datetime&quot;:&quot;2021-07-11T13:17:32.343+0000&quot;,&quot;nest_level&quot;:0,&quot;collapsed&quot;:false,&quot;total_comments&quot;:0,&quot;hash&quot;:&quot;#60eaef6c53673e00076b4445&quot;,&quot;user&quot;:{&quot;id&quot;:&quot;60bbda55c7c8060019a633f7&quot;,&quot;username&quot;:&quot;Ilya758&quot;,&quot;rank_name&quot;:&quot;4 kyu&quot;,&quot;profile_path&quot;:&quot;/users/Ilya758&quot;,&quot;avatar_tag&quot;:&quot;\u003cimg title=\&quot;Ilya758\&quot; data-tippy-content=\&quot;Ilya758\&quot; data-tippy-placement=\&quot;bottom\&quot; alt=\&quot;Ilya758 Avatar\&quot; src=\&quot;https://avatars.githubusercontent.com/u/84968507?s=100\&quot; /\u003e&quot;,&quot;is_admin&quot;:false,&quot;is_mod&quot;:false,&quot;is_mender&quot;:false},&quot;comments&quot;:[]},{&quot;id&quot;:&quot;60c8af34ce1bef00560e91b4&quot;,&quot;masked&quot;:null,&quot;masked_by_id&quot;:null,&quot;votes_score&quot;:2,&quot;user_id&quot;:&quot;60837cc5fdfce80025f9ca44&quot;,&quot;edit_count&quot;:0,&quot;label&quot;:null,&quot;allowed_resolver_ids&quot;:[&quot;60837cc5fdfce80025f9ca44&quot;],&quot;state&quot;:&quot;fresh&quot;,&quot;is_resolvable&quot;:false,&quot;state_text&quot;:&quot;new&quot;,&quot;state_summary&quot;:&quot;Open&quot;,&quot;type&quot;:&quot;&quot;,&quot;label_text&quot;:null,&quot;markdown&quot;:&quot;Awesome!&quot;,&quot;markdown_html&quot;:&quot;\u003cp\u003eAwesome!\u003c/p\u003e&quot;,&quot;created_at&quot;:1623764788,&quot;created_at_datetime&quot;:&quot;2021-06-15T13:46:28.899+0000&quot;,&quot;nest_level&quot;:0,&quot;collapsed&quot;:false,&quot;total_comments&quot;:0,&quot;hash&quot;:&quot;#60c8af34ce1bef00560e91b4&quot;,&quot;user&quot;:{&quot;id&quot;:&quot;60837cc5fdfce80025f9ca44&quot;,&quot;username&quot;:&quot;Rogério Martins&quot;,&quot;rank_name&quot;:&quot;7 kyu&quot;,&quot;profile_path&quot;:&quot;/users/Rog%C3%A9rio%20Martins&quot;,&quot;avatar_tag&quot;:&quot;\u003cimg title=\&quot;Rogério Martins\&quot; data-tippy-content=\&quot;Rogério Martins\&quot; data-tippy-placement=\&quot;bottom\&quot; alt=\&quot;Rogério Martins Avatar\&quot; src=\&quot;https://avatars.githubusercontent.com/u/66702716?s=100\&quot; /\u003e&quot;,&quot;is_admin&quot;:false,&quot;is_mod&quot;:false,&quot;is_mender&quot;:false},&quot;comments&quot;:[]},{&quot;id&quot;:&quot;608e87cbdf885b003a39d868&quot;,&quot;masked&quot;:null,&quot;masked_by_id&quot;:null,&quot;votes_score&quot;:1,&quot;user_id&quot;:&quot;608a94984865f70034fc0d2e&quot;,&quot;edit_count&quot;:0,&quot;label&quot;:null,&quot;allowed_resolver_ids&quot;:[&quot;608a94984865f70034fc0d2e&quot;],&quot;state&quot;:&quot;fresh&quot;,&quot;is_resolvable&quot;:false,&quot;state_text&quot;:&quot;new&quot;,&quot;state_summary&quot;:&quot;Open&quot;,&quot;type&quot;:&quot;&quot;,&quot;label_text&quot;:null,&quot;markdown&quot;:&quot;clever!\n&quot;,&quot;markdown_html&quot;:&quot;\u003cp\u003eclever!\u003c/p\u003e&quot;,&quot;created_at&quot;:1619953611,&quot;created_at_datetime&quot;:&quot;2021-05-02T11:06:51.272+0000&quot;,&quot;nest_level&quot;:0,&quot;collapsed&quot;:false,&quot;total_comments&quot;:0,&quot;hash&quot;:&quot;#608e87cbdf885b003a39d868&quot;,&quot;user&quot;:{&quot;id&quot;:&quot;608a94984865f70034fc0d2e&quot;,&quot;username&quot;:&quot;RIHAB2021-CH&quot;,&quot;rank_name&quot;:&quot;5 kyu&quot;,&quot;profile_path&quot;:&quot;/users/RIHAB2021-CH&quot;,&quot;avatar_tag&quot;:&quot;\u003cimg title=\&quot;RIHAB2021-CH\&quot; data-tippy-content=\&quot;RIHAB2021-CH\&quot; data-tippy-placement=\&quot;bottom\&quot; alt=\&quot;RIHAB2021-CH Avatar\&quot; src=\&quot;https://avatars.githubusercontent.com/u/82874342?s=100\&quot; /\u003e&quot;,&quot;is_admin&quot;:false,&quot;is_mod&quot;:false,&quot;is_mender&quot;:false},&quot;comments&quot;:[]},{&quot;id&quot;:&quot;5f4f5dc618330d0033278e8f&quot;,&quot;masked&quot;:true,&quot;masked_by_id&quot;:&quot;629f8ed5992dc400642f9224&quot;,&quot;votes_score&quot;:1,&quot;user_id&quot;:&quot;5f2c2447f357180021c4696e&quot;,&quot;edit_count&quot;:0,&quot;label&quot;:null,&quot;allowed_resolver_ids&quot;:[&quot;5f2c2447f357180021c4696e&quot;],&quot;state&quot;:&quot;fresh&quot;,&quot;is_resolvable&quot;:false,&quot;state_text&quot;:&quot;new&quot;,&quot;state_summary&quot;:&quot;Open&quot;,&quot;type&quot;:&quot;&quot;,&quot;label_text&quot;:null,&quot;markdown&quot;:&quot;is this object? &quot;,&quot;markdown_html&quot;:&quot;\u003cp\u003eis this object?\u003c/p\u003e&quot;,&quot;created_at&quot;:1599036870,&quot;created_at_datetime&quot;:&quot;2020-09-02T08:54:30.569+0000&quot;,&quot;nest_level&quot;:0,&quot;collapsed&quot;:true,&quot;total_comments&quot;:1,&quot;hash&quot;:&quot;#5f4f5dc618330d0033278e8f&quot;,&quot;user&quot;:{&quot;id&quot;:&quot;5f2c2447f357180021c4696e&quot;,&quot;username&quot;:&quot;yourdevDex&quot;,&quot;rank_name&quot;:&quot;7 kyu&quot;,&quot;profile_path&quot;:&quot;/users/yourdevDex&quot;,&quot;avatar_tag&quot;:&quot;\u003cimg title=\&quot;yourdevDex\&quot; data-tippy-content=\&quot;yourdevDex\&quot; data-tippy-placement=\&quot;bottom\&quot; alt=\&quot;yourdevDex Avatar\&quot; src=\&quot;https://avatars.githubusercontent.com/u/63572375?s=100\&quot; /\u003e&quot;,&quot;is_admin&quot;:false,&quot;is_mod&quot;:false,&quot;is_mender&quot;:false},&quot;comments&quot;:[{&quot;id&quot;:&quot;5f4f712d126334002eec8080&quot;,&quot;masked&quot;:null,&quot;masked_by_id&quot;:null,&quot;votes_score&quot;:-3,&quot;user_id&quot;:&quot;5bc20908324fbee25e000027&quot;,&quot;edit_count&quot;:0,&quot;label&quot;:null,&quot;allowed_resolver_ids&quot;:[&quot;5bc20908324fbee25e000027&quot;],&quot;state&quot;:&quot;fresh&quot;,&quot;is_resolvable&quot;:false,&quot;state_text&quot;:&quot;new&quot;,&quot;state_summary&quot;:&quot;Open&quot;,&quot;type&quot;:&quot;&quot;,&quot;label_text&quot;:null,&quot;markdown&quot;:&quot;It is a function which takes three arguments.&quot;,&quot;markdown_html&quot;:&quot;\u003cp\u003eIt is a function which takes three arguments.\u003c/p\u003e&quot;,&quot;created_at&quot;:1599041837,&quot;created_at_datetime&quot;:&quot;2020-09-02T10:17:17.102+0000&quot;,&quot;nest_level&quot;:1,&quot;collapsed&quot;:false,&quot;total_comments&quot;:null,&quot;hash&quot;:&quot;#5f4f712d126334002eec8080&quot;,&quot;user&quot;:{&quot;id&quot;:&quot;5bc20908324fbee25e000027&quot;,&quot;username&quot;:&quot;Glyxerine&quot;,&quot;rank_name&quot;:&quot;1 dan&quot;,&quot;profile_path&quot;:&quot;/users/Glyxerine&quot;,&quot;avatar_tag&quot;:&quot;\u003cimg title=\&quot;Glyxerine\&quot; data-tippy-content=\&quot;Glyxerine\&quot; data-tippy-placement=\&quot;bottom\&quot; alt=\&quot;Glyxerine Avatar\&quot; src=\&quot;https://avatars.githubusercontent.com/u/28835226?s=100\&quot; /\u003e&quot;,&quot;is_admin&quot;:false,&quot;is_mod&quot;:false,&quot;is_mender&quot;:false},&quot;comments&quot;:[]}]},{&quot;id&quot;:&quot;5f484501a098c1001968a702&quot;,&quot;masked&quot;:null,&quot;masked_by_id&quot;:null,&quot;votes_score&quot;:1,&quot;user_id&quot;:&quot;5f3c834ec6197b0033169f05&quot;,&quot;edit_count&quot;:0,&quot;label&quot;:null,&quot;allowed_resolver_ids&quot;:[&quot;5f3c834ec6197b0033169f05&quot;],&quot;state&quot;:&quot;fresh&quot;,&quot;is_resolvable&quot;:false,&quot;state_text&quot;:&quot;new&quot;,&quot;state_summary&quot;:&quot;Open&quot;,&quot;type&quot;:&quot;&quot;,&quot;label_text&quot;:null,&quot;markdown&quot;:&quot;Que teso! muy buena solucion! &quot;,&quot;markdown_html&quot;:&quot;\u003cp\u003eQue teso! muy buena solucion!\u003c/p\u003e&quot;,&quot;created_at&quot;:1598571777,&quot;created_at_datetime&quot;:&quot;2020-08-27T23:42:57.413+0000&quot;,&quot;nest_level&quot;:0,&quot;collapsed&quot;:false,&quot;total_comments&quot;:0,&quot;hash&quot;:&quot;#5f484501a098c1001968a702&quot;,&quot;user&quot;:{&quot;id&quot;:&quot;5f3c834ec6197b0033169f05&quot;,&quot;username&quot;:&quot;danielabastidas&quot;,&quot;rank_name&quot;:&quot;7 kyu&quot;,&quot;profile_path&quot;:&quot;/users/danielabastidas&quot;,&quot;avatar_tag&quot;:&quot;\u003cimg title=\&quot;danielabastidas\&quot; data-tippy-content=\&quot;danielabastidas\&quot; data-tippy-placement=\&quot;bottom\&quot; alt=\&quot;danielabastidas Avatar\&quot; src=\&quot;https://avatars.githubusercontent.com/u/46870095?s=100\&quot; /\u003e&quot;,&quot;is_admin&quot;:false,&quot;is_mod&quot;:false,&quot;is_mender&quot;:false},&quot;comments&quot;:[]},{&quot;id&quot;:&quot;5ee6ab06bc6c720023052e8d&quot;,&quot;masked&quot;:null,&quot;masked_by_id&quot;:null,&quot;votes_score&quot;:1,&quot;user_id&quot;:&quot;5ccb3a1f32e6920025b50f2e&quot;,&quot;edit_count&quot;:0,&quot;label&quot;:null,&quot;allowed_resolver_ids&quot;:[&quot;5ccb3a1f32e6920025b50f2e&quot;],&quot;state&quot;:&quot;fresh&quot;,&quot;is_resolvable&quot;:false,&quot;state_text&quot;:&quot;new&quot;,&quot;state_summary&quot;:&quot;Open&quot;,&quot;type&quot;:&quot;&quot;,&quot;label_text&quot;:null,&quot;markdown&quot;:&quot;nice!&quot;,&quot;markdown_html&quot;:&quot;\u003cp\u003enice!\u003c/p\u003e&quot;,&quot;created_at&quot;:1592175366,&quot;created_at_datetime&quot;:&quot;2020-06-14T22:56:06.214+0000&quot;,&quot;nest_level&quot;:0,&quot;collapsed&quot;:false,&quot;total_comments&quot;:0,&quot;hash&quot;:&quot;#5ee6ab06bc6c720023052e8d&quot;,&quot;user&quot;:{&quot;id&quot;:&quot;5ccb3a1f32e6920025b50f2e&quot;,&quot;username&quot;:&quot;DavidFromNorth&quot;,&quot;rank_name&quot;:&quot;4 kyu&quot;,&quot;profile_path&quot;:&quot;/users/DavidFromNorth&quot;,&quot;avatar_tag&quot;:&quot;\u003cimg title=\&quot;DavidFromNorth\&quot; data-tippy-content=\&quot;DavidFromNorth\&quot; data-tippy-placement=\&quot;bottom\&quot; alt=\&quot;DavidFromNorth Avatar\&quot; src=\&quot;https://avatars.githubusercontent.com/u/25207729?s=100\&quot; /\u003e&quot;,&quot;is_admin&quot;:false,&quot;is_mod&quot;:false,&quot;is_mender&quot;:false},&quot;comments&quot;:[]},{&quot;id&quot;:&quot;5c7e6b861e698b4fd85a2433&quot;,&quot;masked&quot;:null,&quot;masked_by_id&quot;:null,&quot;votes_score&quot;:1,&quot;user_id&quot;:&quot;55c4dba71215f79ca40000a6&quot;,&quot;edit_count&quot;:0,&quot;label&quot;:null,&quot;allowed_resolver_ids&quot;:[&quot;55c4dba71215f79ca40000a6&quot;],&quot;state&quot;:&quot;fresh&quot;,&quot;is_resolvable&quot;:false,&quot;state_text&quot;:&quot;new&quot;,&quot;state_summary&quot;:&quot;Open&quot;,&quot;type&quot;:&quot;&quot;,&quot;label_text&quot;:null,&quot;markdown&quot;:&quot;cool!&quot;,&quot;markdown_html&quot;:&quot;\u003cp\u003ecool!\u003c/p\u003e&quot;,&quot;created_at&quot;:1551788935,&quot;created_at_datetime&quot;:&quot;2019-03-05T12:28:55.011+0000&quot;,&quot;nest_level&quot;:0,&quot;collapsed&quot;:false,&quot;total_comments&quot;:0,&quot;hash&quot;:&quot;#5c7e6b861e698b4fd85a2433&quot;,&quot;user&quot;:{&quot;id&quot;:&quot;55c4dba71215f79ca40000a6&quot;,&quot;username&quot;:&quot;LiuJiahong&quot;,&quot;rank_name&quot;:&quot;7 kyu&quot;,&quot;profile_path&quot;:&quot;/users/LiuJiahong&quot;,&quot;avatar_tag&quot;:&quot;\u003cimg title=\&quot;LiuJiahong\&quot; data-tippy-content=\&quot;LiuJiahong\&quot; data-tippy-placement=\&quot;bottom\&quot; alt=\&quot;LiuJiahong Avatar\&quot; src=\&quot;https://avatars.githubusercontent.com/u/8953556?s=100\&quot; /\u003e&quot;,&quot;is_admin&quot;:false,&quot;is_mod&quot;:false,&quot;is_mender&quot;:false},&quot;comments&quot;:[]},{&quot;id&quot;:&quot;5c2a3f1a339de07b3d2696cd&quot;,&quot;masked&quot;:true,&quot;masked_by_id&quot;:&quot;5c27927d85fba6000a35c5e0&quot;,&quot;votes_score&quot;:1,&quot;user_id&quot;:&quot;5c27927d85fba6000a35c5e0&quot;,&quot;edit_count&quot;:0,&quot;label&quot;:null,&quot;allowed_resolver_ids&quot;:[&quot;5c27927d85fba6000a35c5e0&quot;],&quot;state&quot;:&quot;fresh&quot;,&quot;is_resolvable&quot;:false,&quot;state_text&quot;:&quot;new&quot;,&quot;state_summary&quot;:&quot;Open&quot;,&quot;type&quot;:&quot;&quot;,&quot;label_text&quot;:null,&quot;markdown&quot;:&quot;Hi, why did you put \&quot;[operator]\&quot; right after an object? I not really understand this one.&quot;,&quot;markdown_html&quot;:&quot;\u003cp\u003eHi, why did you put \&quot;[operator]\&quot; right after an object? I not really understand this one.\u003c/p\u003e&quot;,&quot;created_at&quot;:1546272538,&quot;created_at_datetime&quot;:&quot;2018-12-31T16:08:58.508+0000&quot;,&quot;nest_level&quot;:0,&quot;collapsed&quot;:true,&quot;total_comments&quot;:1,&quot;hash&quot;:&quot;#5c2a3f1a339de07b3d2696cd&quot;,&quot;user&quot;:{&quot;id&quot;:&quot;5c27927d85fba6000a35c5e0&quot;,&quot;username&quot;:&quot;pnhuyduy&quot;,&quot;rank_name&quot;:&quot;6 kyu&quot;,&quot;profile_path&quot;:&quot;/users/pnhuyduy&quot;,&quot;avatar_tag&quot;:&quot;\u003cimg title=\&quot;pnhuyduy\&quot; data-tippy-content=\&quot;pnhuyduy\&quot; data-tippy-placement=\&quot;bottom\&quot; alt=\&quot;pnhuyduy Avatar\&quot; src=\&quot;https://avatars.githubusercontent.com/u/46210597?s=100\&quot; /\u003e&quot;,&quot;is_admin&quot;:false,&quot;is_mod&quot;:false,&quot;is_mender&quot;:false},&quot;comments&quot;:[{&quot;id&quot;:&quot;5c8abfbb823c081d2b5a9042&quot;,&quot;masked&quot;:null,&quot;masked_by_id&quot;:null,&quot;votes_score&quot;:12,&quot;user_id&quot;:&quot;5b4e4542c19d9601dd000154&quot;,&quot;edit_count&quot;:0,&quot;label&quot;:null,&quot;allowed_resolver_ids&quot;:[&quot;5b4e4542c19d9601dd000154&quot;],&quot;state&quot;:&quot;fresh&quot;,&quot;is_resolvable&quot;:false,&quot;state_text&quot;:&quot;new&quot;,&quot;state_summary&quot;:&quot;Open&quot;,&quot;type&quot;:&quot;&quot;,&quot;label_text&quot;:null,&quot;markdown&quot;:&quot;Think bracket notation on an object where you do obj[key]. And then the &#39;=\u003e (obj[key])&#39; returns automatically since there is just the one expression.  No &#39;return&#39; needed.  &quot;,&quot;markdown_html&quot;:&quot;\u003cp\u003eThink bracket notation on an object where you do obj[key]. And then the &#39;=\u0026gt; (obj[key])&#39; returns automatically since there is just the one expression.  No &#39;return&#39; needed.\u003c/p\u003e&quot;,&quot;created_at&quot;:1552596923,&quot;created_at_datetime&quot;:&quot;2019-03-14T20:55:23.640+0000&quot;,&quot;nest_level&quot;:1,&quot;collapsed&quot;:false,&quot;total_comments&quot;:null,&quot;hash&quot;:&quot;#5c8abfbb823c081d2b5a9042&quot;,&quot;user&quot;:{&quot;id&quot;:&quot;5b4e4542c19d9601dd000154&quot;,&quot;username&quot;:&quot;kesto&quot;,&quot;rank_name&quot;:&quot;5 kyu&quot;,&quot;profile_path&quot;:&quot;/users/kesto&quot;,&quot;avatar_tag&quot;:&quot;\u003cimg title=\&quot;kesto\&quot; data-tippy-content=\&quot;kesto\&quot; data-tippy-placement=\&quot;bottom\&quot; alt=\&quot;kesto Avatar\&quot; src=\&quot;https://avatars.githubusercontent.com/u/13323910?s=100\&quot; /\u003e&quot;,&quot;is_admin&quot;:false,&quot;is_mod&quot;:false,&quot;is_mender&quot;:false},&quot;comments&quot;:[]}]},{&quot;id&quot;:&quot;5c0ee39d49b284eaaf000382&quot;,&quot;masked&quot;:null,&quot;masked_by_id&quot;:null,&quot;votes_score&quot;:1,&quot;user_id&quot;:&quot;5887084754a7111c210000f8&quot;,&quot;edit_count&quot;:0,&quot;label&quot;:null,&quot;allowed_resolver_ids&quot;:[&quot;5887084754a7111c210000f8&quot;],&quot;state&quot;:&quot;fresh&quot;,&quot;is_resolvable&quot;:false,&quot;state_text&quot;:&quot;new&quot;,&quot;state_summary&quot;:&quot;Open&quot;,&quot;type&quot;:&quot;&quot;,&quot;label_text&quot;:null,&quot;markdown&quot;:&quot;Not really sure what&#39;s going on here.  Explanation?&quot;,&quot;markdown_html&quot;:&quot;\u003cp\u003eNot really sure what&#39;s going on here.  Explanation?\u003c/p\u003e&quot;,&quot;created_at&quot;:1544479645,&quot;created_at_datetime&quot;:&quot;2018-12-10T22:07:25.968+0000&quot;,&quot;nest_level&quot;:0,&quot;collapsed&quot;:false,&quot;total_comments&quot;:0,&quot;hash&quot;:&quot;#5c0ee39d49b284eaaf000382&quot;,&quot;user&quot;:{&quot;id&quot;:&quot;5887084754a7111c210000f8&quot;,&quot;username&quot;:&quot;brokenspacebar&quot;,&quot;rank_name&quot;:&quot;4 kyu&quot;,&quot;profile_path&quot;:&quot;/users/brokenspacebar&quot;,&quot;avatar_tag&quot;:&quot;\u003cimg title=\&quot;brokenspacebar\&quot; data-tippy-content=\&quot;brokenspacebar\&quot; data-tippy-placement=\&quot;bottom\&quot; alt=\&quot;brokenspacebar Avatar\&quot; src=\&quot;https://avatars.githubusercontent.com/u/13910185?s=100\&quot; /\u003e&quot;,&quot;is_admin&quot;:false,&quot;is_mod&quot;:false,&quot;is_mender&quot;:false},&quot;comments&quot;:[]},{&quot;id&quot;:&quot;5ad0655082c9d641e7000116&quot;,&quot;masked&quot;:null,&quot;masked_by_id&quot;:null,&quot;votes_score&quot;:1,&quot;user_id&quot;:&quot;5a0503a3ffe75f8182000039&quot;,&quot;edit_count&quot;:0,&quot;label&quot;:null,&quot;allowed_resolver_ids&quot;:[&quot;5a0503a3ffe75f8182000039&quot;],&quot;state&quot;:&quot;fresh&quot;,&quot;is_resolvable&quot;:false,&quot;state_text&quot;:&quot;new&quot;,&quot;state_summary&quot;:&quot;Open&quot;,&quot;type&quot;:&quot;&quot;,&quot;label_text&quot;:null,&quot;markdown&quot;:&quot;just like dynamic data bind operation , cool!&quot;,&quot;markdown_html&quot;:&quot;\u003cp\u003ejust like dynamic data bind operation , cool!\u003c/p\u003e&quot;,&quot;created_at&quot;:1523606864,&quot;created_at_datetime&quot;:&quot;2018-04-13T08:07:44.572+0000&quot;,&quot;nest_level&quot;:0,&quot;collapsed&quot;:false,&quot;total_comments&quot;:0,&quot;hash&quot;:&quot;#5ad0655082c9d641e7000116&quot;,&quot;user&quot;:{&quot;id&quot;:&quot;5a0503a3ffe75f8182000039&quot;,&quot;username&quot;:&quot;CC712&quot;,&quot;rank_name&quot;:&quot;3 kyu&quot;,&quot;profile_path&quot;:&quot;/users/CC712&quot;,&quot;avatar_tag&quot;:&quot;\u003cimg title=\&quot;CC712\&quot; data-tippy-content=\&quot;CC712\&quot; data-tippy-placement=\&quot;bottom\&quot; alt=\&quot;CC712 Avatar\&quot; src=\&quot;https://avatars.githubusercontent.com/u/24538282?s=100\&quot; /\u003e&quot;,&quot;is_admin&quot;:false,&quot;is_mod&quot;:false,&quot;is_mender&quot;:false},&quot;comments&quot;:[]},{&quot;id&quot;:&quot;5abbf417a88ee76714000134&quot;,&quot;masked&quot;:null,&quot;masked_by_id&quot;:null,&quot;votes_score&quot;:4,&quot;user_id&quot;:&quot;5a0ddb7effe75f180d000087&quot;,&quot;edit_count&quot;:0,&quot;label&quot;:null,&quot;allowed_resolver_ids&quot;:[&quot;5a0ddb7effe75f180d000087&quot;],&quot;state&quot;:&quot;fresh&quot;,&quot;is_resolvable&quot;:false,&quot;state_text&quot;:&quot;new&quot;,&quot;state_summary&quot;:&quot;Open&quot;,&quot;type&quot;:&quot;&quot;,&quot;label_text&quot;:null,&quot;markdown&quot;:&quot;wow, really nice! I learned something new thanks to you.&quot;,&quot;markdown_html&quot;:&quot;\u003cp\u003ewow, really nice! I learned something new thanks to you.\u003c/p\u003e&quot;,&quot;created_at&quot;:1522267159,&quot;created_at_datetime&quot;:&quot;2018-03-28T19:59:19.139+0000&quot;,&quot;nest_level&quot;:0,&quot;collapsed&quot;:false,&quot;total_comments&quot;:0,&quot;hash&quot;:&quot;#5abbf417a88ee76714000134&quot;,&quot;user&quot;:{&quot;id&quot;:&quot;5a0ddb7effe75f180d000087&quot;,&quot;username&quot;:&quot;AurelieBayre&quot;,&quot;rank_name&quot;:&quot;3 kyu&quot;,&quot;profile_path&quot;:&quot;/users/AurelieBayre&quot;,&quot;avatar_tag&quot;:&quot;\u003cimg title=\&quot;AurelieBayre\&quot; data-tippy-content=\&quot;AurelieBayre\&quot; data-tippy-placement=\&quot;bottom\&quot; alt=\&quot;AurelieBayre Avatar\&quot; src=\&quot;https://avatars.githubusercontent.com/u/26029267?s=100\&quot; /\u003e&quot;,&quot;is_admin&quot;:false,&quot;is_mod&quot;:false,&quot;is_mender&quot;:false},&quot;comments&quot;:[]},{&quot;id&quot;:&quot;5a86b999fd8c06a5e700028f&quot;,&quot;masked&quot;:null,&quot;masked_by_id&quot;:null,&quot;votes_score&quot;:1,&quot;user_id&quot;:&quot;5a79254aba1bb54691000077&quot;,&quot;edit_count&quot;:0,&quot;label&quot;:null,&quot;allowed_resolver_ids&quot;:[&quot;5a79254aba1bb54691000077&quot;],&quot;state&quot;:&quot;fresh&quot;,&quot;is_resolvable&quot;:false,&quot;state_text&quot;:&quot;new&quot;,&quot;state_summary&quot;:&quot;Open&quot;,&quot;type&quot;:&quot;&quot;,&quot;label_text&quot;:null,&quot;markdown&quot;:&quot;best solution!&quot;,&quot;markdown_html&quot;:&quot;\u003cp\u003ebest solution!\u003c/p\u003e&quot;,&quot;created_at&quot;:1518778777,&quot;created_at_datetime&quot;:&quot;2018-02-16T10:59:37.649+0000&quot;,&quot;nest_level&quot;:0,&quot;collapsed&quot;:false,&quot;total_comments&quot;:0,&quot;hash&quot;:&quot;#5a86b999fd8c06a5e700028f&quot;,&quot;user&quot;:{&quot;id&quot;:&quot;5a79254aba1bb54691000077&quot;,&quot;username&quot;:&quot;oblackwang&quot;,&quot;rank_name&quot;:&quot;5 kyu&quot;,&quot;profile_path&quot;:&quot;/users/oblackwang&quot;,&quot;avatar_tag&quot;:&quot;\u003cimg title=\&quot;oblackwang\&quot; data-tippy-content=\&quot;oblackwang\&quot; data-tippy-placement=\&quot;bottom\&quot; alt=\&quot;oblackwang Avatar\&quot; src=\&quot;https://avatars.githubusercontent.com/u/7984831?s=100\&quot; /\u003e&quot;,&quot;is_admin&quot;:false,&quot;is_mod&quot;:false,&quot;is_mender&quot;:false},&quot;comments&quot;:[]},{&quot;id&quot;:&quot;59454290aa3b73fe2a000033&quot;,&quot;masked&quot;:null,&quot;masked_by_id&quot;:null,&quot;votes_score&quot;:3,&quot;user_id&quot;:&quot;59452f82affa165075000064&quot;,&quot;edit_count&quot;:0,&quot;label&quot;:null,&quot;allowed_resolver_ids&quot;:[&quot;59452f82affa165075000064&quot;],&quot;state&quot;:&quot;fresh&quot;,&quot;is_resolvable&quot;:false,&quot;state_text&quot;:&quot;new&quot;,&quot;state_summary&quot;:&quot;Open&quot;,&quot;type&quot;:&quot;&quot;,&quot;label_text&quot;:null,&quot;markdown&quot;:&quot;You evaluate all expressions every time. While this is clever, it&#39;s not very efficient.&quot;,&quot;markdown_html&quot;:&quot;\u003cp\u003eYou evaluate all expressions every time. While this is clever, it&#39;s not very efficient.\u003c/p\u003e&quot;,&quot;created_at&quot;:1497711248,&quot;created_at_datetime&quot;:&quot;2017-06-17T14:54:08.247+0000&quot;,&quot;nest_level&quot;:0,&quot;collapsed&quot;:true,&quot;total_comments&quot;:2,&quot;hash&quot;:&quot;#59454290aa3b73fe2a000033&quot;,&quot;user&quot;:{&quot;id&quot;:&quot;59452f82affa165075000064&quot;,&quot;username&quot;:&quot;Frizi&quot;,&quot;rank_name&quot;:&quot;7 kyu&quot;,&quot;profile_path&quot;:&quot;/users/Frizi&quot;,&quot;avatar_tag&quot;:&quot;\u003cimg title=\&quot;Frizi\&quot; data-tippy-content=\&quot;Frizi\&quot; data-tippy-placement=\&quot;bottom\&quot; alt=\&quot;Frizi Avatar\&quot; src=\&quot;https://avatars.githubusercontent.com/u/919491?s=100\&quot; /\u003e&quot;,&quot;is_admin&quot;:false,&quot;is_mod&quot;:false,&quot;is_mender&quot;:false},&quot;comments&quot;:[{&quot;id&quot;:&quot;59455db8aa3b731e8f0003af&quot;,&quot;masked&quot;:null,&quot;masked_by_id&quot;:null,&quot;votes_score&quot;:2,&quot;user_id&quot;:&quot;572665ec8565845d3300196d&quot;,&quot;edit_count&quot;:0,&quot;label&quot;:null,&quot;allowed_resolver_ids&quot;:[&quot;572665ec8565845d3300196d&quot;],&quot;state&quot;:&quot;fresh&quot;,&quot;is_resolvable&quot;:false,&quot;state_text&quot;:&quot;new&quot;,&quot;state_summary&quot;:&quot;Open&quot;,&quot;type&quot;:&quot;&quot;,&quot;label_text&quot;:null,&quot;markdown&quot;:&quot;Yeah, i know.\nI want if someone will make language with some `compiler directives`. I like languages near C++, but want something more flexible.\n\nExample of `directive`:\n`#no_abc` -\u003e no &#39;array bounding checks&#39;\n`#lazy` -\u003e evaluate expression only before it&#39;s direct usage\n`#pce` -\u003e partial code execution at compile time(If we have big function and some parameters are constant or already known at compile time. Function must be pure to use this directive)\n\nSo let&#39;s wait for lazyness! Just because it might help a lot... And save us from &#39;Division by zero exception&#39;. At least JS doesn&#39;t have such... So everything works just fine =)&quot;,&quot;markdown_html&quot;:&quot;\u003cp\u003eYeah, i know.\u003cbr\u003e\nI want if someone will make language with some \u003ccode\u003ecompiler directives\u003c/code\u003e. I like languages near C++, but want something more flexible.\u003c/p\u003e\n\u003cp\u003eExample of \u003ccode\u003edirective\u003c/code\u003e:\u003cbr\u003e\n\u003ccode\u003e#no_abc\u003c/code\u003e -\u0026gt; no &#39;array bounding checks&#39;\u003cbr\u003e\n\u003ccode\u003e#lazy\u003c/code\u003e -\u0026gt; evaluate expression only before it&#39;s direct usage\u003cbr\u003e\n\u003ccode\u003e#pce\u003c/code\u003e -\u0026gt; partial code execution at compile time(If we have big function and some parameters are constant or already known at compile time. Function must be pure to use this directive)\u003c/p\u003e\n\u003cp\u003eSo let&#39;s wait for lazyness! Just because it might help a lot... And save us from &#39;Division by zero exception&#39;. At least JS doesn&#39;t have such... So everything works just fine =)\u003c/p\u003e&quot;,&quot;created_at&quot;:1497718200,&quot;created_at_datetime&quot;:&quot;2017-06-17T16:50:00.759+0000&quot;,&quot;nest_level&quot;:1,&quot;collapsed&quot;:false,&quot;total_comments&quot;:null,&quot;hash&quot;:&quot;#59455db8aa3b731e8f0003af&quot;,&quot;user&quot;:{&quot;id&quot;:&quot;572665ec8565845d3300196d&quot;,&quot;username&quot;:&quot;Wittybit&quot;,&quot;rank_name&quot;:&quot;1 kyu&quot;,&quot;profile_path&quot;:&quot;/users/Wittybit&quot;,&quot;avatar_tag&quot;:&quot;\u003cimg title=\&quot;Wittybit\&quot; data-tippy-content=\&quot;Wittybit\&quot; data-tippy-placement=\&quot;bottom\&quot; alt=\&quot;Wittybit Avatar\&quot; src=\&quot;https://avatars.githubusercontent.com/u/14199702?s=100\&quot; /\u003e&quot;,&quot;is_admin&quot;:false,&quot;is_mod&quot;:false,&quot;is_mender&quot;:false},&quot;comments&quot;:[]},{&quot;id&quot;:&quot;6230a2256e8da0000e9641d6&quot;,&quot;masked&quot;:null,&quot;masked_by_id&quot;:null,&quot;votes_score&quot;:1,&quot;user_id&quot;:&quot;622f30ce630a4300439f8487&quot;,&quot;edit_count&quot;:0,&quot;label&quot;:null,&quot;allowed_resolver_ids&quot;:[&quot;622f30ce630a4300439f8487&quot;],&quot;state&quot;:&quot;fresh&quot;,&quot;is_resolvable&quot;:false,&quot;state_text&quot;:&quot;new&quot;,&quot;state_summary&quot;:&quot;Open&quot;,&quot;type&quot;:&quot;&quot;,&quot;label_text&quot;:null,&quot;markdown&quot;:&quot;Thanks for pointing this out because I would have not realized. &quot;,&quot;markdown_html&quot;:&quot;\u003cp\u003eThanks for pointing this out because I would have not realized.\u003c/p\u003e&quot;,&quot;created_at&quot;:1647354405,&quot;created_at_datetime&quot;:&quot;2022-03-15T14:26:45.654+0000&quot;,&quot;nest_level&quot;:1,&quot;collapsed&quot;:false,&quot;total_comments&quot;:null,&quot;hash&quot;:&quot;#6230a2256e8da0000e9641d6&quot;,&quot;user&quot;:{&quot;id&quot;:&quot;622f30ce630a4300439f8487&quot;,&quot;username&quot;:&quot;algoSolver988&quot;,&quot;rank_name&quot;:&quot;6 kyu&quot;,&quot;profile_path&quot;:&quot;/users/algoSolver988&quot;,&quot;avatar_tag&quot;:&quot;\u003cimg title=\&quot;algoSolver988\&quot; data-tippy-content=\&quot;algoSolver988\&quot; data-tippy-placement=\&quot;bottom\&quot; alt=\&quot;algoSolver988 Avatar\&quot; src=\&quot;https://www.codewars.com/packs/assets/profile-pic.f3a90aca.png\&quot; /\u003e&quot;,&quot;is_admin&quot;:false,&quot;is_mod&quot;:false,&quot;is_mender&quot;:false},&quot;comments&quot;:[]}]},{&quot;id&quot;:&quot;584e7352e086f8554e000087&quot;,&quot;masked&quot;:null,&quot;masked_by_id&quot;:null,&quot;votes_score&quot;:2,&quot;user_id&quot;:&quot;57cfb37894f12156a800027b&quot;,&quot;edit_count&quot;:0,&quot;label&quot;:null,&quot;allowed_resolver_ids&quot;:[&quot;57cfb37894f12156a800027b&quot;],&quot;state&quot;:&quot;fresh&quot;,&quot;is_resolvable&quot;:false,&quot;state_text&quot;:&quot;new&quot;,&quot;state_summary&quot;:&quot;Open&quot;,&quot;type&quot;:&quot;&quot;,&quot;label_text&quot;:null,&quot;markdown&quot;:&quot;really nice solution! love it.&quot;,&quot;markdown_html&quot;:&quot;\u003cp\u003ereally nice solution! love it.\u003c/p\u003e&quot;,&quot;created_at&quot;:1481536338,&quot;created_at_datetime&quot;:&quot;2016-12-12T09:52:18.829+0000&quot;,&quot;nest_level&quot;:0,&quot;collapsed&quot;:true,&quot;total_comments&quot;:1,&quot;hash&quot;:&quot;#584e7352e086f8554e000087&quot;,&quot;user&quot;:{&quot;id&quot;:&quot;57cfb37894f12156a800027b&quot;,&quot;username&quot;:&quot;Chrico&quot;,&quot;rank_name&quot;:&quot;3 kyu&quot;,&quot;profile_path&quot;:&quot;/users/Chrico&quot;,&quot;avatar_tag&quot;:&quot;\u003cimg title=\&quot;Chrico\&quot; data-tippy-content=\&quot;Chrico\&quot; data-tippy-placement=\&quot;bottom\&quot; alt=\&quot;Chrico Avatar\&quot; src=\&quot;https://avatars.githubusercontent.com/u/3417446?s=100\&quot; /\u003e&quot;,&quot;is_admin&quot;:false,&quot;is_mod&quot;:false,&quot;is_mender&quot;:false},&quot;comments&quot;:[{&quot;id&quot;:&quot;584e82346a0ce0fd3f00018e&quot;,&quot;masked&quot;:null,&quot;masked_by_id&quot;:null,&quot;votes_score&quot;:4,&quot;user_id&quot;:&quot;572665ec8565845d3300196d&quot;,&quot;edit_count&quot;:0,&quot;label&quot;:null,&quot;allowed_resolver_ids&quot;:[&quot;572665ec8565845d3300196d&quot;],&quot;state&quot;:&quot;fresh&quot;,&quot;is_resolvable&quot;:false,&quot;state_text&quot;:&quot;new&quot;,&quot;state_summary&quot;:&quot;Open&quot;,&quot;type&quot;:&quot;&quot;,&quot;label_text&quot;:null,&quot;markdown&quot;:&quot;Thank you very much.\n\nI need more cool solutions... and more cool katas...&quot;,&quot;markdown_html&quot;:&quot;\u003cp\u003eThank you very much.\u003c/p\u003e\n\u003cp\u003eI need more cool solutions... and more cool katas...\u003c/p\u003e&quot;,&quot;created_at&quot;:1481540148,&quot;created_at_datetime&quot;:&quot;2016-12-12T10:55:48.770+0000&quot;,&quot;nest_level&quot;:1,&quot;collapsed&quot;:false,&quot;total_comments&quot;:null,&quot;hash&quot;:&quot;#584e82346a0ce0fd3f00018e&quot;,&quot;user&quot;:{&quot;id&quot;:&quot;572665ec8565845d3300196d&quot;,&quot;username&quot;:&quot;Wittybit&quot;,&quot;rank_name&quot;:&quot;1 kyu&quot;,&quot;profile_path&quot;:&quot;/users/Wittybit&quot;,&quot;avatar_tag&quot;:&quot;\u003cimg title=\&quot;Wittybit\&quot; data-tippy-content=\&quot;Wittybit\&quot; data-tippy-placement=\&quot;bottom\&quot; alt=\&quot;Wittybit Avatar\&quot; src=\&quot;https://avatars.githubusercontent.com/u/14199702?s=100\&quot; /\u003e&quot;,&quot;is_admin&quot;:false,&quot;is_mod&quot;:false,&quot;is_mender&quot;:false},&quot;comments&quot;:[]}]}],&quot;hideSpoilers&quot;:false,&quot;allowedLabels&quot;:[],&quot;totalComments&quot;:24,&quot;spoilerFlag&quot;:true,&quot;commentUrl&quot;:&quot;/kata/reviews/583f1c66d622c07b55000059/groups/5842b053d159a279cf0001a6/comments/%7Bcomment_id%7D&quot;,&quot;voteUrl&quot;:&quot;/kata/reviews/583f1c66d622c07b55000059/groups/5842b053d159a279cf0001a6/comments/%7BrefId%7D/vote/%7Bvalue%7D&quot;,&quot;userVotesUrl&quot;:&quot;/kata/reviews/583f1c66d622c07b55000059/groups/5842b053d159a279cf0001a6/comments/user_votes&quot;,&quot;labelGroups&quot;:[{&quot;name&quot;:&quot;Comments&quot;,&quot;label&quot;:null,&quot;count&quot;:19}],&quot;stateGroups&quot;:[{&quot;name&quot;:&quot;Open&quot;,&quot;count&quot;:19}]}">
<div class="comments" data-comment-url="/kata/reviews/583f1c66d622c07b55000059/groups/5842b053d159a279cf0001a6/comments/%7Bcomment_id%7D">
<ul class="piped-text mt-4 has-keyword-tags">
<li>
<ul class="vote-labels" data-vote-name="solution-solution_group" data-vote-ref-id="5842b053d159a279cf0001a6"><li data-tippy-content="Vote this solution as a best practice. Best practice solutions tend to be a good balance of performance, readability and maintainability." data-tippy-placement="bottom"><a class="vote-label" data-label="best_practice"><i class="icon-moon-up "></i>Best Practices<span>79</span></a></li><li data-tippy-content="Vote this solution as being clever. Clever solutions tend to be very creative or make use of obscure language features. They usually are not code that you would want to put into production." data-tippy-placement="bottom"><a class="vote-label" data-label="clever"><i class="icon-moon-up "></i>Clever<span>470</span></a></li></ul>
</li>
<li>
<a class="js-show-comments">
<i class="icon-moon-comments "></i>
<span>24</span>
</a>
</li>
<li><a href="https://www.codewars.com/kumite/new?group_id=5842b053d159a279cf0001a6&amp;review_id=583f1c66d622c07b55000059"><span>Fork</span></a></li><li data-bind-if="$solution"><a class="js-compare-solutions" data-tippy-content="Compare this solution to your own" data-tippy-placement="bottom"><i class="icon-moon-compare "></i>Compare with your solution</a></li><li><a href="https://www.codewars.com/kata/reviews/583f1c66d622c07b55000059/groups/5842b053d159a279cf0001a6">Link</a></li>
</ul>
<div class="clearfix"></div>
<!--v-if-->
<div class="clearfix"></div>
<ul class="comments-list is-hidden" user-votes-url="/kata/reviews/583f1c66d622c07b55000059/groups/5842b053d159a279cf0001a6/comments/user_votes">
<li class="new-comment" data-bind-class="new_comment_class">

<div>
<figure>
<a href="https://www.codewars.com/users/GreenEagleKing">
<div><img title="GreenEagleKing" data-tippy-content="GreenEagleKing" data-tippy-placement="bottom" alt="GreenEagleKing Avatar" src="./110722-CW_files/101405438"></div>
</a>
</figure>
<div class="comment-content">
<div class="preedit px-1">
<input type="text" class="form-input block w-64 rounded-none rounded-md sm:text-sm dark:bg-gray-800 focus:outline-none focus:ring-cgray-300 dark:focus:ring-cgray-600 focus:border-cgray-300 dark:focus:border-cgray-600 border-gray-300 dark:border-gray-700" placeholder="Leave feedback...">
</div>
<div class="clearfix mb-4"></div>
</div>
<div class="clearfix"></div>
</div>



</li>
<li class="comment mt-6" data-label="no-label" data-state="Open" data-username="Ulin" id="62c204dff8f15c6b384c3aef">

<div>
<figure>
<a href="https://www.codewars.com/users/Ulin">
<div><img title="Ulin" data-tippy-content="Ulin" data-tippy-placement="bottom" alt="Ulin Avatar" src="./110722-CW_files/profile-pic.f3a90aca.png"></div>
</a>
</figure>
<div class="comment-content">
<div>
<h6 class="mt-4 mb-2">
<ul class="bulleted-text">
<li>
<span class="bullet"></span>
<a href="https://www.codewars.com/users/Ulin">Ulin</a>
<!--v-if-->


<span class="ml-1">(5 kyu)</span>
</li>
<li>
<span class="bullet"></span>
<a class="text-ui-text-lc hover:underline" data-turbolinks="false" href="https://www.codewars.com/kata/583f158ea20cfcbeb400000a/solutions/javascript#62c204dff8f15c6b384c3aef">
<time-ago lang="en" datetime="2022-07-03T21:06:39.509+0000" title="3 Jul 2022, 22:06 BST">8 days ago</time-ago>
</a>
</li>
<!--v-if-->
<!--v-if-->
</ul>
</h6>
<div class="comment-markdown markdown prose max-w-none p-1 overflow-x-auto" data-markdown="You can remove the quotation marks"><p>You can remove the quotation marks</p>
</div>


<div>
<ul class="comment-actions bulleted-text">
<li>
<span class="voter">
<span class="score">1</span>
<span class="vote">
<a class="up_vote" data-tippy-content="Up vote" data-tippy-placement="bottom">
<i class="icon-moon-up "></i>
</a>
</span>
<span class="spacer">|</span>
<span class="vote">
<a class="down_vote" data-tippy-content="Down vote" data-tippy-placement="bottom">
<i class="icon-moon-down "></i>
</a>
</span>
</span>
</li>
<li>
<span class="bullet"></span>
<a>
<i class="icon-moon-reply "></i>Reply
</a>
</li>
<!--v-if-->
<li>
<span class="bullet"></span>
<a>
<i class="icon-moon-object "></i>View Solution
</a>
</li>
<!--v-if-->

<li class="is-auto-hidden">
<span class="bullet"></span>
<a data-tippy-placement="bottom" data-tippy-content="Flag this comment as a spoiler. It will be hidden from users who have not yet solved the kata.">
<i class="icon-moon-flag "></i>
<span>Spoiler</span>
</a>
</li>
<!--v-if-->
</ul>
<div class="clearfix"></div>
<!--v-if-->
<!--v-if-->
</div>
</div>
<!--v-if-->
<div class="nested-comments">
<ul class="comments-list">

<!--v-if-->
</ul>
</div>
<ul class="comment-actions is-auto-hidden bulleted-text" style="display: none;">
<li>
<a><i class="icon-moon-reply "></i>Reply</a>
</li>
</ul>
</div>
</div>

</li><li class="comment" data-label="no-label" data-state="Open" data-username="bologna" id="62a937938b33700016c5edec">

<div>
<figure>
<a href="https://www.codewars.com/users/bologna">
<div><img title="bologna" data-tippy-content="bologna" data-tippy-placement="bottom" alt="bologna Avatar" src="./110722-CW_files/45748079"></div>
</a>
</figure>
<div class="comment-content">
<div>
<h6 class="mt-4 mb-2">
<ul class="bulleted-text">
<li>
<span class="bullet"></span>
<a href="https://www.codewars.com/users/bologna">bologna</a>
<!--v-if-->


<span class="ml-1">(5 kyu)</span>
</li>
<li>
<span class="bullet"></span>
<a class="text-ui-text-lc hover:underline" data-turbolinks="false" href="https://www.codewars.com/kata/583f158ea20cfcbeb400000a/solutions/javascript#62a937938b33700016c5edec">
<time-ago lang="en" datetime="2022-06-15T01:36:19.956+0000" title="15 Jun 2022, 02:36 BST">26 days ago</time-ago>
</a>
</li>
<!--v-if-->
<!--v-if-->
</ul>
</h6>
<div class="comment-markdown markdown prose max-w-none p-1 overflow-x-auto" data-markdown="a sweet and simple version of mine. i love it."><p>a sweet and simple version of mine. i love it.</p>
</div>


<div>
<ul class="comment-actions bulleted-text">
<li>
<span class="voter">
<span class="score">1</span>
<span class="vote">
<a class="up_vote" data-tippy-content="Up vote" data-tippy-placement="bottom">
<i class="icon-moon-up "></i>
</a>
</span>
<span class="spacer">|</span>
<span class="vote">
<a class="down_vote" data-tippy-content="Down vote" data-tippy-placement="bottom">
<i class="icon-moon-down "></i>
</a>
</span>
</span>
</li>
<li>
<span class="bullet"></span>
<a>
<i class="icon-moon-reply "></i>Reply
</a>
</li>
<!--v-if-->
<li>
<span class="bullet"></span>
<a>
<i class="icon-moon-object "></i>View Solution
</a>
</li>
<!--v-if-->

<li class="is-auto-hidden">
<span class="bullet"></span>
<a data-tippy-placement="bottom" data-tippy-content="Flag this comment as a spoiler. It will be hidden from users who have not yet solved the kata.">
<i class="icon-moon-flag "></i>
<span>Spoiler</span>
</a>
</li>
<!--v-if-->
</ul>
<div class="clearfix"></div>
<!--v-if-->
<!--v-if-->
</div>
</div>
<!--v-if-->
<div class="nested-comments">
<ul class="comments-list">

<!--v-if-->
</ul>
</div>
<ul class="comment-actions is-auto-hidden bulleted-text" style="display: none;">
<li>
<a><i class="icon-moon-reply "></i>Reply</a>
</li>
</ul>
</div>
</div>

</li><li class="comment" data-label="no-label" data-state="Open" data-username="grol_kun" id="6244038c58ad06006b6491a6">

<div>
<figure>
<a href="https://www.codewars.com/users/grol_kun">
<div><img title="grol_kun" data-tippy-content="grol_kun" data-tippy-placement="bottom" alt="grol_kun Avatar" src="./110722-CW_files/101469695"></div>
</a>
</figure>
<div class="comment-content">
<div>
<h6 class="mt-4 mb-2">
<ul class="bulleted-text">
<li>
<span class="bullet"></span>
<a href="https://www.codewars.com/users/grol_kun">grol_kun</a>
<!--v-if-->


<span class="ml-1">(6 kyu)</span>
</li>
<li>
<span class="bullet"></span>
<a class="text-ui-text-lc hover:underline" data-turbolinks="false" href="https://www.codewars.com/kata/583f158ea20cfcbeb400000a/solutions/javascript#6244038c58ad06006b6491a6">
<time-ago lang="en" datetime="2022-03-30T07:15:24.596+0000" title="30 Mar 2022, 08:15 BST">3 months ago</time-ago>
</a>
</li>
<!--v-if-->
<!--v-if-->
</ul>
</h6>
<div class="comment-markdown markdown prose max-w-none p-1 overflow-x-auto" data-markdown="Awesome!I&#39;ve spent almost 5 min to understand how does it work! Great!"><p>Awesome!I've spent almost 5 min to understand how does it work! Great!</p>
</div>


<div>
<ul class="comment-actions bulleted-text">
<li>
<span class="voter">
<span class="score">1</span>
<span class="vote">
<a class="up_vote" data-tippy-content="Up vote" data-tippy-placement="bottom">
<i class="icon-moon-up "></i>
</a>
</span>
<span class="spacer">|</span>
<span class="vote">
<a class="down_vote" data-tippy-content="Down vote" data-tippy-placement="bottom">
<i class="icon-moon-down "></i>
</a>
</span>
</span>
</li>
<li>
<span class="bullet"></span>
<a>
<i class="icon-moon-reply "></i>Reply
</a>
</li>
<!--v-if-->
<li>
<span class="bullet"></span>
<a>
<i class="icon-moon-object "></i>View Solution
</a>
</li>
<!--v-if-->

<li class="is-auto-hidden">
<span class="bullet"></span>
<a data-tippy-placement="bottom" data-tippy-content="Flag this comment as a spoiler. It will be hidden from users who have not yet solved the kata.">
<i class="icon-moon-flag "></i>
<span>Spoiler</span>
</a>
</li>
<!--v-if-->
</ul>
<div class="clearfix"></div>
<!--v-if-->
<!--v-if-->
</div>
</div>
<!--v-if-->
<div class="nested-comments">
<ul class="comments-list">

<!--v-if-->
</ul>
</div>
<ul class="comment-actions is-auto-hidden bulleted-text" style="display: none;">
<li>
<a><i class="icon-moon-reply "></i>Reply</a>
</li>
</ul>
</div>
</div>

</li><li class="comment" data-label="no-label" data-state="Open" data-username="Quantifiers" id="623869489e22a500177e253c">

<div>
<figure>
<a href="https://www.codewars.com/users/Quantifiers">
<div><img title="Quantifiers" data-tippy-content="Quantifiers" data-tippy-placement="bottom" alt="Quantifiers Avatar" src="./110722-CW_files/profile-pic.f3a90aca.png"></div>
</a>
</figure>
<div class="comment-content">
<div>
<h6 class="mt-4 mb-2">
<ul class="bulleted-text">
<li>
<span class="bullet"></span>
<a href="https://www.codewars.com/users/Quantifiers">Quantifiers</a>
<!--v-if-->


<span class="ml-1">(7 kyu)</span>
</li>
<li>
<span class="bullet"></span>
<a class="text-ui-text-lc hover:underline" data-turbolinks="false" href="https://www.codewars.com/kata/583f158ea20cfcbeb400000a/solutions/javascript#623869489e22a500177e253c">
<time-ago lang="en" datetime="2022-03-21T12:02:16.279+0000" title="21 Mar 2022, 12:02 GMT">4 months ago</time-ago>
</a>
</li>
<!--v-if-->
<!--v-if-->
</ul>
</h6>
<div class="comment-markdown markdown prose max-w-none p-1 overflow-x-auto" data-markdown="This is impressive, so cool 😮"><p>This is impressive, so cool 😮</p>
</div>


<div>
<ul class="comment-actions bulleted-text">
<li>
<span class="voter">
<span class="score">1</span>
<span class="vote">
<a class="up_vote" data-tippy-content="Up vote" data-tippy-placement="bottom">
<i class="icon-moon-up "></i>
</a>
</span>
<span class="spacer">|</span>
<span class="vote">
<a class="down_vote" data-tippy-content="Down vote" data-tippy-placement="bottom">
<i class="icon-moon-down "></i>
</a>
</span>
</span>
</li>
<li>
<span class="bullet"></span>
<a>
<i class="icon-moon-reply "></i>Reply
</a>
</li>
<!--v-if-->
<li>
<span class="bullet"></span>
<a>
<i class="icon-moon-object "></i>View Solution
</a>
</li>
<!--v-if-->

<li class="is-auto-hidden">
<span class="bullet"></span>
<a data-tippy-placement="bottom" data-tippy-content="Flag this comment as a spoiler. It will be hidden from users who have not yet solved the kata.">
<i class="icon-moon-flag "></i>
<span>Spoiler</span>
</a>
</li>
<!--v-if-->
</ul>
<div class="clearfix"></div>
<!--v-if-->
<!--v-if-->
</div>
</div>
<!--v-if-->
<div class="nested-comments">
<ul class="comments-list">

<!--v-if-->
</ul>
</div>
<ul class="comment-actions is-auto-hidden bulleted-text" style="display: none;">
<li>
<a><i class="icon-moon-reply "></i>Reply</a>
</li>
</ul>
</div>
</div>

</li><li class="comment" data-label="no-label" data-state="Open" data-username="paatshaala" id="62368e16be76bc005f07b055">

<div>
<figure>
<a href="https://www.codewars.com/users/paatshaala">
<div><img title="paatshaala" data-tippy-content="paatshaala" data-tippy-placement="bottom" alt="paatshaala Avatar" src="./110722-CW_files/profile-pic.f3a90aca.png"></div>
</a>
</figure>
<div class="comment-content">
<div>
<h6 class="mt-4 mb-2">
<ul class="bulleted-text">
<li>
<span class="bullet"></span>
<a href="https://www.codewars.com/users/paatshaala">paatshaala</a>
<!--v-if-->


<span class="ml-1">(5 kyu)</span>
</li>
<li>
<span class="bullet"></span>
<a class="text-ui-text-lc hover:underline" data-turbolinks="false" href="https://www.codewars.com/kata/583f158ea20cfcbeb400000a/solutions/javascript#62368e16be76bc005f07b055">
<time-ago lang="en" datetime="2022-03-20T02:14:46.993+0000" title="20 Mar 2022, 02:14 GMT">4 months ago</time-ago>
</a>
</li>
<!--v-if-->
<!--v-if-->
</ul>
</h6>
<div class="comment-markdown markdown prose max-w-none p-1 overflow-x-auto" data-markdown="Elegant...cleaner imposible"><p>Elegant...cleaner imposible</p>
</div>


<div>
<ul class="comment-actions bulleted-text">
<li>
<span class="voter">
<span class="score">1</span>
<span class="vote">
<a class="up_vote" data-tippy-content="Up vote" data-tippy-placement="bottom">
<i class="icon-moon-up "></i>
</a>
</span>
<span class="spacer">|</span>
<span class="vote">
<a class="down_vote" data-tippy-content="Down vote" data-tippy-placement="bottom">
<i class="icon-moon-down "></i>
</a>
</span>
</span>
</li>
<li>
<span class="bullet"></span>
<a>
<i class="icon-moon-reply "></i>Reply
</a>
</li>
<!--v-if-->
<li>
<span class="bullet"></span>
<a>
<i class="icon-moon-object "></i>View Solution
</a>
</li>
<!--v-if-->

<li class="is-auto-hidden">
<span class="bullet"></span>
<a data-tippy-placement="bottom" data-tippy-content="Flag this comment as a spoiler. It will be hidden from users who have not yet solved the kata.">
<i class="icon-moon-flag "></i>
<span>Spoiler</span>
</a>
</li>
<!--v-if-->
</ul>
<div class="clearfix"></div>
<!--v-if-->
<!--v-if-->
</div>
</div>
<!--v-if-->
<div class="nested-comments">
<ul class="comments-list">

<!--v-if-->
</ul>
</div>
<ul class="comment-actions is-auto-hidden bulleted-text" style="display: none;">
<li>
<a><i class="icon-moon-reply "></i>Reply</a>
</li>
</ul>
</div>
</div>

</li><li class="comment" data-label="no-label" data-state="Open" data-username="Ilya758" id="60eaef6c53673e00076b4445">

<div>
<figure>
<a href="https://www.codewars.com/users/Ilya758">
<div><img title="Ilya758" data-tippy-content="Ilya758" data-tippy-placement="bottom" alt="Ilya758 Avatar" src="./110722-CW_files/84968507"></div>
</a>
</figure>
<div class="comment-content">
<div>
<h6 class="mt-4 mb-2">
<ul class="bulleted-text">
<li>
<span class="bullet"></span>
<a href="https://www.codewars.com/users/Ilya758">Ilya758</a>
<!--v-if-->


<span class="ml-1">(4 kyu)</span>
</li>
<li>
<span class="bullet"></span>
<a class="text-ui-text-lc hover:underline" data-turbolinks="false" href="https://www.codewars.com/kata/583f158ea20cfcbeb400000a/solutions/javascript#60eaef6c53673e00076b4445">
<time-ago lang="en" datetime="2021-07-11T13:17:32.343+0000" title="11 Jul 2021, 14:17 BST">12 months ago</time-ago>
</a>
</li>
<!--v-if-->
<!--v-if-->
</ul>
</h6>
<div class="comment-markdown markdown prose max-w-none p-1 overflow-x-auto" data-markdown="Previously see this method with object in usage. Congrats!"><p>Previously see this method with object in usage. Congrats!</p>
</div>


<div>
<ul class="comment-actions bulleted-text">
<li>
<span class="voter">
<span class="score">2</span>
<span class="vote">
<a class="up_vote" data-tippy-content="Up vote" data-tippy-placement="bottom">
<i class="icon-moon-up "></i>
</a>
</span>
<span class="spacer">|</span>
<span class="vote">
<a class="down_vote" data-tippy-content="Down vote" data-tippy-placement="bottom">
<i class="icon-moon-down "></i>
</a>
</span>
</span>
</li>
<li>
<span class="bullet"></span>
<a>
<i class="icon-moon-reply "></i>Reply
</a>
</li>
<!--v-if-->
<li>
<span class="bullet"></span>
<a>
<i class="icon-moon-object "></i>View Solution
</a>
</li>
<!--v-if-->

<li class="is-auto-hidden">
<span class="bullet"></span>
<a data-tippy-placement="bottom" data-tippy-content="Flag this comment as a spoiler. It will be hidden from users who have not yet solved the kata.">
<i class="icon-moon-flag "></i>
<span>Spoiler</span>
</a>
</li>
<!--v-if-->
</ul>
<div class="clearfix"></div>
<!--v-if-->
<!--v-if-->
</div>
</div>
<!--v-if-->
<div class="nested-comments">
<ul class="comments-list">

<!--v-if-->
</ul>
</div>
<ul class="comment-actions is-auto-hidden bulleted-text" style="display: none;">
<li>
<a><i class="icon-moon-reply "></i>Reply</a>
</li>
</ul>
</div>
</div>

</li><li class="comment" data-label="no-label" data-state="Open" data-username="Rogério Martins" id="60c8af34ce1bef00560e91b4">

<div>
<figure>
<a href="https://www.codewars.com/users/Rog%C3%A9rio%20Martins">
<div><img title="Rogério Martins" data-tippy-content="Rogério Martins" data-tippy-placement="bottom" alt="Rogério Martins Avatar" src="./110722-CW_files/66702716"></div>
</a>
</figure>
<div class="comment-content">
<div>
<h6 class="mt-4 mb-2">
<ul class="bulleted-text">
<li>
<span class="bullet"></span>
<a href="https://www.codewars.com/users/Rog%C3%A9rio%20Martins">Rogério Martins</a>
<!--v-if-->


<span class="ml-1">(7 kyu)</span>
</li>
<li>
<span class="bullet"></span>
<a class="text-ui-text-lc hover:underline" data-turbolinks="false" href="https://www.codewars.com/kata/583f158ea20cfcbeb400000a/solutions/javascript#60c8af34ce1bef00560e91b4">
<time-ago lang="en" datetime="2021-06-15T13:46:28.899+0000" title="15 Jun 2021, 14:46 BST">13 months ago</time-ago>
</a>
</li>
<!--v-if-->
<!--v-if-->
</ul>
</h6>
<div class="comment-markdown markdown prose max-w-none p-1 overflow-x-auto" data-markdown="Awesome!"><p>Awesome!</p>
</div>


<div>
<ul class="comment-actions bulleted-text">
<li>
<span class="voter">
<span class="score">2</span>
<span class="vote">
<a class="up_vote" data-tippy-content="Up vote" data-tippy-placement="bottom">
<i class="icon-moon-up "></i>
</a>
</span>
<span class="spacer">|</span>
<span class="vote">
<a class="down_vote" data-tippy-content="Down vote" data-tippy-placement="bottom">
<i class="icon-moon-down "></i>
</a>
</span>
</span>
</li>
<li>
<span class="bullet"></span>
<a>
<i class="icon-moon-reply "></i>Reply
</a>
</li>
<!--v-if-->
<li>
<span class="bullet"></span>
<a>
<i class="icon-moon-object "></i>View Solution
</a>
</li>
<!--v-if-->

<li class="is-auto-hidden">
<span class="bullet"></span>
<a data-tippy-placement="bottom" data-tippy-content="Flag this comment as a spoiler. It will be hidden from users who have not yet solved the kata.">
<i class="icon-moon-flag "></i>
<span>Spoiler</span>
</a>
</li>
<!--v-if-->
</ul>
<div class="clearfix"></div>
<!--v-if-->
<!--v-if-->
</div>
</div>
<!--v-if-->
<div class="nested-comments">
<ul class="comments-list">

<!--v-if-->
</ul>
</div>
<ul class="comment-actions is-auto-hidden bulleted-text" style="display: none;">
<li>
<a><i class="icon-moon-reply "></i>Reply</a>
</li>
</ul>
</div>
</div>

</li><li class="comment" data-label="no-label" data-state="Open" data-username="RIHAB2021-CH" id="608e87cbdf885b003a39d868">

<div>
<figure>
<a href="https://www.codewars.com/users/RIHAB2021-CH">
<div><img title="RIHAB2021-CH" data-tippy-content="RIHAB2021-CH" data-tippy-placement="bottom" alt="RIHAB2021-CH Avatar" src="./110722-CW_files/82874342"></div>
</a>
</figure>
<div class="comment-content">
<div>
<h6 class="mt-4 mb-2">
<ul class="bulleted-text">
<li>
<span class="bullet"></span>
<a href="https://www.codewars.com/users/RIHAB2021-CH">RIHAB2021-CH</a>
<!--v-if-->


<span class="ml-1">(5 kyu)</span>
</li>
<li>
<span class="bullet"></span>
<a class="text-ui-text-lc hover:underline" data-turbolinks="false" href="https://www.codewars.com/kata/583f158ea20cfcbeb400000a/solutions/javascript#608e87cbdf885b003a39d868">
<time-ago lang="en" datetime="2021-05-02T11:06:51.272+0000" title="2 May 2021, 12:06 BST">15 months ago</time-ago>
</a>
</li>
<!--v-if-->
<!--v-if-->
</ul>
</h6>
<div class="comment-markdown markdown prose max-w-none p-1 overflow-x-auto" data-markdown="clever!
"><p>clever!</p>
</div>


<div>
<ul class="comment-actions bulleted-text">
<li>
<span class="voter">
<span class="score">1</span>
<span class="vote">
<a class="up_vote" data-tippy-content="Up vote" data-tippy-placement="bottom">
<i class="icon-moon-up "></i>
</a>
</span>
<span class="spacer">|</span>
<span class="vote">
<a class="down_vote" data-tippy-content="Down vote" data-tippy-placement="bottom">
<i class="icon-moon-down "></i>
</a>
</span>
</span>
</li>
<li>
<span class="bullet"></span>
<a>
<i class="icon-moon-reply "></i>Reply
</a>
</li>
<!--v-if-->
<li>
<span class="bullet"></span>
<a>
<i class="icon-moon-object "></i>View Solution
</a>
</li>
<!--v-if-->

<li class="is-auto-hidden">
<span class="bullet"></span>
<a data-tippy-placement="bottom" data-tippy-content="Flag this comment as a spoiler. It will be hidden from users who have not yet solved the kata.">
<i class="icon-moon-flag "></i>
<span>Spoiler</span>
</a>
</li>
<!--v-if-->
</ul>
<div class="clearfix"></div>
<!--v-if-->
<!--v-if-->
</div>
</div>
<!--v-if-->
<div class="nested-comments">
<ul class="comments-list">

<!--v-if-->
</ul>
</div>
<ul class="comment-actions is-auto-hidden bulleted-text" style="display: none;">
<li>
<a><i class="icon-moon-reply "></i>Reply</a>
</li>
</ul>
</div>
</div>

</li><li class="comment" data-label="no-label" data-state="Open" data-username="yourdevDex" id="5f4f5dc618330d0033278e8f">

<div>
<figure>
<a href="https://www.codewars.com/users/yourdevDex">
<div><img title="yourdevDex" data-tippy-content="yourdevDex" data-tippy-placement="bottom" alt="yourdevDex Avatar" src="./110722-CW_files/63572375"></div>
</a>
</figure>
<div class="comment-content">
<div>
<h6 class="mt-4 mb-2">
<ul class="bulleted-text">
<li>
<span class="bullet"></span>
<a href="https://www.codewars.com/users/yourdevDex">yourdevDex</a>
<!--v-if-->


<span class="ml-1">(7 kyu)</span>
</li>
<li>
<span class="bullet"></span>
<a class="text-ui-text-lc hover:underline" data-turbolinks="false" href="https://www.codewars.com/kata/583f158ea20cfcbeb400000a/solutions/javascript#5f4f5dc618330d0033278e8f">
<time-ago lang="en" datetime="2020-09-02T08:54:30.569+0000" title="2 Sept 2020, 09:54 BST">2 years ago</time-ago>
</a>
</li>
<!--v-if-->
<!--v-if-->
</ul>
</h6>
<div class="comment-markdown markdown prose max-w-none p-1 overflow-x-auto" data-markdown="is this object? "><p>is this object? </p>
</div>


<div>
<ul class="comment-actions bulleted-text">
<li>
<span class="voter">
<span class="score">1</span>
<span class="vote">
<a class="up_vote" data-tippy-content="Up vote" data-tippy-placement="bottom">
<i class="icon-moon-up "></i>
</a>
</span>
<span class="spacer">|</span>
<span class="vote">
<a class="down_vote" data-tippy-content="Down vote" data-tippy-placement="bottom">
<i class="icon-moon-down "></i>
</a>
</span>
</span>
</li>
<li>
<span class="bullet"></span>
<a>
<i class="icon-moon-reply "></i>Reply
</a>
</li>
<!--v-if-->
<li>
<span class="bullet"></span>
<a>
<i class="icon-moon-object "></i>View Solution
</a>
</li>
<li class="is-active">
<span class="bullet"></span>
<a>
<i class="icon-moon-chevron-sign-down "></i>
<span>Expand 1 Reply</span>

</a>
</li>

<li class="is-auto-hidden is-active">
<span class="bullet"></span>
<a data-tippy-placement="bottom" data-tippy-content="Un-flag this comment as having spoilers within it.">
<i class="icon-moon-flag "></i>
<span>Spoiler</span>
</a>
</li>
<!--v-if-->
</ul>
<div class="clearfix"></div>
<!--v-if-->
<!--v-if-->
</div>
</div>
<!--v-if-->
<div class="nested-comments is-hidden">
<ul class="comments-list">
<li class="comment" data-label="no-label" data-state="Open" data-username="Glyxerine" id="5f4f712d126334002eec8080">

<div>
<figure>
<a href="https://www.codewars.com/users/Glyxerine">
<div><img title="Glyxerine" data-tippy-content="Glyxerine" data-tippy-placement="bottom" alt="Glyxerine Avatar" src="./110722-CW_files/28835226"></div>
</a>
</figure>
<div class="comment-content">
<div>
<h6 class="mt-4 mb-2">
<ul class="bulleted-text">
<li>
<span class="bullet"></span>
<a href="https://www.codewars.com/users/Glyxerine">Glyxerine</a>
<!--v-if-->


<span class="ml-1">(1 dan)</span>
</li>
<li>
<span class="bullet"></span>
<a class="text-ui-text-lc hover:underline" data-turbolinks="false" href="https://www.codewars.com/kata/583f158ea20cfcbeb400000a/solutions/javascript#5f4f712d126334002eec8080">
<time-ago lang="en" datetime="2020-09-02T10:17:17.102+0000" title="2 Sept 2020, 11:17 BST">2 years ago</time-ago>
</a>
</li>
<!--v-if-->
<!--v-if-->
</ul>
</h6>
<div class="comment-markdown markdown prose max-w-none p-1 overflow-x-auto" data-markdown="It is a function which takes three arguments."><p>It is a function which takes three arguments.</p>
</div>


<div>
<ul class="comment-actions bulleted-text">
<li>
<span class="voter">
<span class="score">-3</span>
<span class="vote">
<a class="up_vote" data-tippy-content="Up vote" data-tippy-placement="bottom">
<i class="icon-moon-up "></i>
</a>
</span>
<span class="spacer">|</span>
<span class="vote">
<a class="down_vote" data-tippy-content="Down vote" data-tippy-placement="bottom">
<i class="icon-moon-down "></i>
</a>
</span>
</span>
</li>
<!--v-if-->
<!--v-if-->
<li>
<span class="bullet"></span>
<a>
<i class="icon-moon-object "></i>View Solution
</a>
</li>
<!--v-if-->

<li class="is-auto-hidden">
<span class="bullet"></span>
<a data-tippy-placement="bottom" data-tippy-content="Flag this comment as a spoiler. It will be hidden from users who have not yet solved the kata.">
<i class="icon-moon-flag "></i>
<span>Spoiler</span>
</a>
</li>
<!--v-if-->
</ul>
<div class="clearfix"></div>
<!--v-if-->
<!--v-if-->
</div>
</div>
<!--v-if-->
<div class="nested-comments">
<ul class="comments-list">

<!--v-if-->
</ul>
</div>
<ul class="comment-actions is-auto-hidden bulleted-text" style="display: none;">
<li>
<a><i class="icon-moon-reply "></i>Reply</a>
</li>
</ul>
</div>
</div>

</li>
<!--v-if-->
</ul>
</div>
<ul class="comment-actions is-auto-hidden bulleted-text" style="display: none;">
<li>
<a><i class="icon-moon-reply "></i>Reply</a>
</li>
</ul>
</div>
</div>

</li><li class="comment" data-label="no-label" data-state="Open" data-username="danielabastidas" id="5f484501a098c1001968a702">

<div>
<figure>
<a href="https://www.codewars.com/users/danielabastidas">
<div><img title="danielabastidas" data-tippy-content="danielabastidas" data-tippy-placement="bottom" alt="danielabastidas Avatar" src="./110722-CW_files/46870095"></div>
</a>
</figure>
<div class="comment-content">
<div>
<h6 class="mt-4 mb-2">
<ul class="bulleted-text">
<li>
<span class="bullet"></span>
<a href="https://www.codewars.com/users/danielabastidas">danielabastidas</a>
<!--v-if-->


<span class="ml-1">(7 kyu)</span>
</li>
<li>
<span class="bullet"></span>
<a class="text-ui-text-lc hover:underline" data-turbolinks="false" href="https://www.codewars.com/kata/583f158ea20cfcbeb400000a/solutions/javascript#5f484501a098c1001968a702">
<time-ago lang="en" datetime="2020-08-27T23:42:57.413+0000" title="28 Aug 2020, 00:42 BST">2 years ago</time-ago>
</a>
</li>
<!--v-if-->
<!--v-if-->
</ul>
</h6>
<div class="comment-markdown markdown prose max-w-none p-1 overflow-x-auto" data-markdown="Que teso! muy buena solucion! "><p>Que teso! muy buena solucion! </p>
</div>


<div>
<ul class="comment-actions bulleted-text">
<li>
<span class="voter">
<span class="score">1</span>
<span class="vote">
<a class="up_vote" data-tippy-content="Up vote" data-tippy-placement="bottom">
<i class="icon-moon-up "></i>
</a>
</span>
<span class="spacer">|</span>
<span class="vote">
<a class="down_vote" data-tippy-content="Down vote" data-tippy-placement="bottom">
<i class="icon-moon-down "></i>
</a>
</span>
</span>
</li>
<li>
<span class="bullet"></span>
<a>
<i class="icon-moon-reply "></i>Reply
</a>
</li>
<!--v-if-->
<li>
<span class="bullet"></span>
<a>
<i class="icon-moon-object "></i>View Solution
</a>
</li>
<!--v-if-->

<li class="is-auto-hidden">
<span class="bullet"></span>
<a data-tippy-placement="bottom" data-tippy-content="Flag this comment as a spoiler. It will be hidden from users who have not yet solved the kata.">
<i class="icon-moon-flag "></i>
<span>Spoiler</span>
</a>
</li>
<!--v-if-->
</ul>
<div class="clearfix"></div>
<!--v-if-->
<!--v-if-->
</div>
</div>
<!--v-if-->
<div class="nested-comments">
<ul class="comments-list">

<!--v-if-->
</ul>
</div>
<ul class="comment-actions is-auto-hidden bulleted-text" style="display: none;">
<li>
<a><i class="icon-moon-reply "></i>Reply</a>
</li>
</ul>
</div>
</div>

</li><li class="comment" data-label="no-label" data-state="Open" data-username="DavidFromNorth" id="5ee6ab06bc6c720023052e8d">

<div>
<figure>
<a href="https://www.codewars.com/users/DavidFromNorth">
<div><img title="DavidFromNorth" data-tippy-content="DavidFromNorth" data-tippy-placement="bottom" alt="DavidFromNorth Avatar" src="./110722-CW_files/25207729"></div>
</a>
</figure>
<div class="comment-content">
<div>
<h6 class="mt-4 mb-2">
<ul class="bulleted-text">
<li>
<span class="bullet"></span>
<a href="https://www.codewars.com/users/DavidFromNorth">DavidFromNorth</a>
<!--v-if-->


<span class="ml-1">(4 kyu)</span>
</li>
<li>
<span class="bullet"></span>
<a class="text-ui-text-lc hover:underline" data-turbolinks="false" href="https://www.codewars.com/kata/583f158ea20cfcbeb400000a/solutions/javascript#5ee6ab06bc6c720023052e8d">
<time-ago lang="en" datetime="2020-06-14T22:56:06.214+0000" title="14 Jun 2020, 23:56 BST">2 years ago</time-ago>
</a>
</li>
<!--v-if-->
<!--v-if-->
</ul>
</h6>
<div class="comment-markdown markdown prose max-w-none p-1 overflow-x-auto" data-markdown="nice!"><p>nice!</p>
</div>


<div>
<ul class="comment-actions bulleted-text">
<li>
<span class="voter">
<span class="score">1</span>
<span class="vote">
<a class="up_vote" data-tippy-content="Up vote" data-tippy-placement="bottom">
<i class="icon-moon-up "></i>
</a>
</span>
<span class="spacer">|</span>
<span class="vote">
<a class="down_vote" data-tippy-content="Down vote" data-tippy-placement="bottom">
<i class="icon-moon-down "></i>
</a>
</span>
</span>
</li>
<li>
<span class="bullet"></span>
<a>
<i class="icon-moon-reply "></i>Reply
</a>
</li>
<!--v-if-->
<li>
<span class="bullet"></span>
<a>
<i class="icon-moon-object "></i>View Solution
</a>
</li>
<!--v-if-->

<li class="is-auto-hidden">
<span class="bullet"></span>
<a data-tippy-placement="bottom" data-tippy-content="Flag this comment as a spoiler. It will be hidden from users who have not yet solved the kata.">
<i class="icon-moon-flag "></i>
<span>Spoiler</span>
</a>
</li>
<!--v-if-->
</ul>
<div class="clearfix"></div>
<!--v-if-->
<!--v-if-->
</div>
</div>
<!--v-if-->
<div class="nested-comments">
<ul class="comments-list">

<!--v-if-->
</ul>
</div>
<ul class="comment-actions is-auto-hidden bulleted-text" style="display: none;">
<li>
<a><i class="icon-moon-reply "></i>Reply</a>
</li>
</ul>
</div>
</div>

</li><li class="comment" data-label="no-label" data-state="Open" data-username="LiuJiahong" id="5c7e6b861e698b4fd85a2433">

<div>
<figure>
<a href="https://www.codewars.com/users/LiuJiahong">
<div><img title="LiuJiahong" data-tippy-content="LiuJiahong" data-tippy-placement="bottom" alt="LiuJiahong Avatar" src="./110722-CW_files/8953556"></div>
</a>
</figure>
<div class="comment-content">
<div>
<h6 class="mt-4 mb-2">
<ul class="bulleted-text">
<li>
<span class="bullet"></span>
<a href="https://www.codewars.com/users/LiuJiahong">LiuJiahong</a>
<!--v-if-->


<span class="ml-1">(7 kyu)</span>
</li>
<li>
<span class="bullet"></span>
<a class="text-ui-text-lc hover:underline" data-turbolinks="false" href="https://www.codewars.com/kata/583f158ea20cfcbeb400000a/solutions/javascript#5c7e6b861e698b4fd85a2433">
<time-ago lang="en" datetime="2019-03-05T12:28:55.011+0000" title="5 Mar 2019, 12:28 GMT">3 years ago</time-ago>
</a>
</li>
<!--v-if-->
<!--v-if-->
</ul>
</h6>
<div class="comment-markdown markdown prose max-w-none p-1 overflow-x-auto" data-markdown="cool!"><p>cool!</p>
</div>


<div>
<ul class="comment-actions bulleted-text">
<li>
<span class="voter">
<span class="score">1</span>
<span class="vote">
<a class="up_vote" data-tippy-content="Up vote" data-tippy-placement="bottom">
<i class="icon-moon-up "></i>
</a>
</span>
<span class="spacer">|</span>
<span class="vote">
<a class="down_vote" data-tippy-content="Down vote" data-tippy-placement="bottom">
<i class="icon-moon-down "></i>
</a>
</span>
</span>
</li>
<li>
<span class="bullet"></span>
<a>
<i class="icon-moon-reply "></i>Reply
</a>
</li>
<!--v-if-->
<li>
<span class="bullet"></span>
<a>
<i class="icon-moon-object "></i>View Solution
</a>
</li>
<!--v-if-->

<li class="is-auto-hidden">
<span class="bullet"></span>
<a data-tippy-placement="bottom" data-tippy-content="Flag this comment as a spoiler. It will be hidden from users who have not yet solved the kata.">
<i class="icon-moon-flag "></i>
<span>Spoiler</span>
</a>
</li>
<!--v-if-->
</ul>
<div class="clearfix"></div>
<!--v-if-->
<!--v-if-->
</div>
</div>
<!--v-if-->
<div class="nested-comments">
<ul class="comments-list">

<!--v-if-->
</ul>
</div>
<ul class="comment-actions is-auto-hidden bulleted-text" style="display: none;">
<li>
<a><i class="icon-moon-reply "></i>Reply</a>
</li>
</ul>
</div>
</div>

</li><li class="comment" data-label="no-label" data-state="Open" data-username="pnhuyduy" id="5c2a3f1a339de07b3d2696cd">

<div>
<figure>
<a href="https://www.codewars.com/users/pnhuyduy">
<div><img title="pnhuyduy" data-tippy-content="pnhuyduy" data-tippy-placement="bottom" alt="pnhuyduy Avatar" src="./110722-CW_files/46210597"></div>
</a>
</figure>
<div class="comment-content">
<div>
<h6 class="mt-4 mb-2">
<ul class="bulleted-text">
<li>
<span class="bullet"></span>
<a href="https://www.codewars.com/users/pnhuyduy">pnhuyduy</a>
<!--v-if-->


<span class="ml-1">(6 kyu)</span>
</li>
<li>
<span class="bullet"></span>
<a class="text-ui-text-lc hover:underline" data-turbolinks="false" href="https://www.codewars.com/kata/583f158ea20cfcbeb400000a/solutions/javascript#5c2a3f1a339de07b3d2696cd">
<time-ago lang="en" datetime="2018-12-31T16:08:58.508+0000" title="31 Dec 2018, 16:08 GMT">4 years ago</time-ago>
</a>
</li>
<!--v-if-->
<!--v-if-->
</ul>
</h6>
<div class="comment-markdown markdown prose max-w-none p-1 overflow-x-auto" data-markdown="Hi, why did you put &quot;[operator]&quot; right after an object? I not really understand this one."><p>Hi, why did you put "[operator]" right after an object? I not really understand this one.</p>
</div>


<div>
<ul class="comment-actions bulleted-text">
<li>
<span class="voter">
<span class="score">1</span>
<span class="vote">
<a class="up_vote" data-tippy-content="Up vote" data-tippy-placement="bottom">
<i class="icon-moon-up "></i>
</a>
</span>
<span class="spacer">|</span>
<span class="vote">
<a class="down_vote" data-tippy-content="Down vote" data-tippy-placement="bottom">
<i class="icon-moon-down "></i>
</a>
</span>
</span>
</li>
<li>
<span class="bullet"></span>
<a>
<i class="icon-moon-reply "></i>Reply
</a>
</li>
<!--v-if-->
<li>
<span class="bullet"></span>
<a>
<i class="icon-moon-object "></i>View Solution
</a>
</li>
<li class="is-active">
<span class="bullet"></span>
<a>
<i class="icon-moon-chevron-sign-down "></i>
<span>Expand 1 Reply</span>

</a>
</li>

<li class="is-auto-hidden is-active">
<span class="bullet"></span>
<a data-tippy-placement="bottom" data-tippy-content="Un-flag this comment as having spoilers within it.">
<i class="icon-moon-flag "></i>
<span>Spoiler</span>
</a>
</li>
<!--v-if-->
</ul>
<div class="clearfix"></div>
<!--v-if-->
<!--v-if-->
</div>
</div>
<!--v-if-->
<div class="nested-comments is-hidden">
<ul class="comments-list">
<li class="comment" data-label="no-label" data-state="Open" data-username="kesto" id="5c8abfbb823c081d2b5a9042">

<div>
<figure>
<a href="https://www.codewars.com/users/kesto">
<div><img title="kesto" data-tippy-content="kesto" data-tippy-placement="bottom" alt="kesto Avatar" src="./110722-CW_files/13323910"></div>
</a>
</figure>
<div class="comment-content">
<div>
<h6 class="mt-4 mb-2">
<ul class="bulleted-text">
<li>
<span class="bullet"></span>
<a href="https://www.codewars.com/users/kesto">kesto</a>
<!--v-if-->


<span class="ml-1">(5 kyu)</span>
</li>
<li>
<span class="bullet"></span>
<a class="text-ui-text-lc hover:underline" data-turbolinks="false" href="https://www.codewars.com/kata/583f158ea20cfcbeb400000a/solutions/javascript#5c8abfbb823c081d2b5a9042">
<time-ago lang="en" datetime="2019-03-14T20:55:23.640+0000" title="14 Mar 2019, 20:55 GMT">3 years ago</time-ago>
</a>
</li>
<!--v-if-->
<!--v-if-->
</ul>
</h6>
<div class="comment-markdown markdown prose max-w-none p-1 overflow-x-auto" data-markdown="Think bracket notation on an object where you do obj[key]. And then the &#39;=&gt; (obj[key])&#39; returns automatically since there is just the one expression.  No &#39;return&#39; needed.  "><p>Think bracket notation on an object where you do obj[key]. And then the '=&gt; (obj[key])' returns automatically since there is just the one expression.  No 'return' needed.  </p>
</div>


<div>
<ul class="comment-actions bulleted-text">
<li>
<span class="voter">
<span class="score">12</span>
<span class="vote">
<a class="up_vote" data-tippy-content="Up vote" data-tippy-placement="bottom">
<i class="icon-moon-up "></i>
</a>
</span>
<span class="spacer">|</span>
<span class="vote">
<a class="down_vote" data-tippy-content="Down vote" data-tippy-placement="bottom">
<i class="icon-moon-down "></i>
</a>
</span>
</span>
</li>
<!--v-if-->
<!--v-if-->
<li>
<span class="bullet"></span>
<a>
<i class="icon-moon-object "></i>View Solution
</a>
</li>
<!--v-if-->

<li class="is-auto-hidden">
<span class="bullet"></span>
<a data-tippy-placement="bottom" data-tippy-content="Flag this comment as a spoiler. It will be hidden from users who have not yet solved the kata.">
<i class="icon-moon-flag "></i>
<span>Spoiler</span>
</a>
</li>
<!--v-if-->
</ul>
<div class="clearfix"></div>
<!--v-if-->
<!--v-if-->
</div>
</div>
<!--v-if-->
<div class="nested-comments">
<ul class="comments-list">

<!--v-if-->
</ul>
</div>
<ul class="comment-actions is-auto-hidden bulleted-text" style="display: none;">
<li>
<a><i class="icon-moon-reply "></i>Reply</a>
</li>
</ul>
</div>
</div>

</li>
<!--v-if-->
</ul>
</div>
<ul class="comment-actions is-auto-hidden bulleted-text" style="display: none;">
<li>
<a><i class="icon-moon-reply "></i>Reply</a>
</li>
</ul>
</div>
</div>

</li><li class="comment" data-label="no-label" data-state="Open" data-username="brokenspacebar" id="5c0ee39d49b284eaaf000382">

<div>
<figure>
<a href="https://www.codewars.com/users/brokenspacebar">
<div><img title="brokenspacebar" data-tippy-content="brokenspacebar" data-tippy-placement="bottom" alt="brokenspacebar Avatar" src="./110722-CW_files/13910185"></div>
</a>
</figure>
<div class="comment-content">
<div>
<h6 class="mt-4 mb-2">
<ul class="bulleted-text">
<li>
<span class="bullet"></span>
<a href="https://www.codewars.com/users/brokenspacebar">brokenspacebar</a>
<!--v-if-->


<span class="ml-1">(4 kyu)</span>
</li>
<li>
<span class="bullet"></span>
<a class="text-ui-text-lc hover:underline" data-turbolinks="false" href="https://www.codewars.com/kata/583f158ea20cfcbeb400000a/solutions/javascript#5c0ee39d49b284eaaf000382">
<time-ago lang="en" datetime="2018-12-10T22:07:25.968+0000" title="10 Dec 2018, 22:07 GMT">4 years ago</time-ago>
</a>
</li>
<!--v-if-->
<!--v-if-->
</ul>
</h6>
<div class="comment-markdown markdown prose max-w-none p-1 overflow-x-auto" data-markdown="Not really sure what&#39;s going on here.  Explanation?"><p>Not really sure what's going on here.  Explanation?</p>
</div>


<div>
<ul class="comment-actions bulleted-text">
<li>
<span class="voter">
<span class="score">1</span>
<span class="vote">
<a class="up_vote" data-tippy-content="Up vote" data-tippy-placement="bottom">
<i class="icon-moon-up "></i>
</a>
</span>
<span class="spacer">|</span>
<span class="vote">
<a class="down_vote" data-tippy-content="Down vote" data-tippy-placement="bottom">
<i class="icon-moon-down "></i>
</a>
</span>
</span>
</li>
<li>
<span class="bullet"></span>
<a>
<i class="icon-moon-reply "></i>Reply
</a>
</li>
<!--v-if-->
<li>
<span class="bullet"></span>
<a>
<i class="icon-moon-object "></i>View Solution
</a>
</li>
<!--v-if-->

<li class="is-auto-hidden">
<span class="bullet"></span>
<a data-tippy-placement="bottom" data-tippy-content="Flag this comment as a spoiler. It will be hidden from users who have not yet solved the kata.">
<i class="icon-moon-flag "></i>
<span>Spoiler</span>
</a>
</li>
<!--v-if-->
</ul>
<div class="clearfix"></div>
<!--v-if-->
<!--v-if-->
</div>
</div>
<!--v-if-->
<div class="nested-comments">
<ul class="comments-list">

<!--v-if-->
</ul>
</div>
<ul class="comment-actions is-auto-hidden bulleted-text" style="display: none;">
<li>
<a><i class="icon-moon-reply "></i>Reply</a>
</li>
</ul>
</div>
</div>

</li><li class="comment" data-label="no-label" data-state="Open" data-username="CC712" id="5ad0655082c9d641e7000116">

<div>
<figure>
<a href="https://www.codewars.com/users/CC712">
<div><img title="CC712" data-tippy-content="CC712" data-tippy-placement="bottom" alt="CC712 Avatar" src="./110722-CW_files/24538282"></div>
</a>
</figure>
<div class="comment-content">
<div>
<h6 class="mt-4 mb-2">
<ul class="bulleted-text">
<li>
<span class="bullet"></span>
<a href="https://www.codewars.com/users/CC712">CC712</a>
<!--v-if-->


<span class="ml-1">(3 kyu)</span>
</li>
<li>
<span class="bullet"></span>
<a class="text-ui-text-lc hover:underline" data-turbolinks="false" href="https://www.codewars.com/kata/583f158ea20cfcbeb400000a/solutions/javascript#5ad0655082c9d641e7000116">
<time-ago lang="en" datetime="2018-04-13T08:07:44.572+0000" title="13 Apr 2018, 09:07 BST">4 years ago</time-ago>
</a>
</li>
<!--v-if-->
<!--v-if-->
</ul>
</h6>
<div class="comment-markdown markdown prose max-w-none p-1 overflow-x-auto" data-markdown="just like dynamic data bind operation , cool!"><p>just like dynamic data bind operation , cool!</p>
</div>


<div>
<ul class="comment-actions bulleted-text">
<li>
<span class="voter">
<span class="score">1</span>
<span class="vote">
<a class="up_vote" data-tippy-content="Up vote" data-tippy-placement="bottom">
<i class="icon-moon-up "></i>
</a>
</span>
<span class="spacer">|</span>
<span class="vote">
<a class="down_vote" data-tippy-content="Down vote" data-tippy-placement="bottom">
<i class="icon-moon-down "></i>
</a>
</span>
</span>
</li>
<li>
<span class="bullet"></span>
<a>
<i class="icon-moon-reply "></i>Reply
</a>
</li>
<!--v-if-->
<li>
<span class="bullet"></span>
<a>
<i class="icon-moon-object "></i>View Solution
</a>
</li>
<!--v-if-->

<li class="is-auto-hidden">
<span class="bullet"></span>
<a data-tippy-placement="bottom" data-tippy-content="Flag this comment as a spoiler. It will be hidden from users who have not yet solved the kata.">
<i class="icon-moon-flag "></i>
<span>Spoiler</span>
</a>
</li>
<!--v-if-->
</ul>
<div class="clearfix"></div>
<!--v-if-->
<!--v-if-->
</div>
</div>
<!--v-if-->
<div class="nested-comments">
<ul class="comments-list">

<!--v-if-->
</ul>
</div>
<ul class="comment-actions is-auto-hidden bulleted-text" style="display: none;">
<li>
<a><i class="icon-moon-reply "></i>Reply</a>
</li>
</ul>
</div>
</div>

</li><li class="comment" data-label="no-label" data-state="Open" data-username="AurelieBayre" id="5abbf417a88ee76714000134">

<div>
<figure>
<a href="https://www.codewars.com/users/AurelieBayre">
<div><img title="AurelieBayre" data-tippy-content="AurelieBayre" data-tippy-placement="bottom" alt="AurelieBayre Avatar" src="./110722-CW_files/26029267"></div>
</a>
</figure>
<div class="comment-content">
<div>
<h6 class="mt-4 mb-2">
<ul class="bulleted-text">
<li>
<span class="bullet"></span>
<a href="https://www.codewars.com/users/AurelieBayre">AurelieBayre</a>
<!--v-if-->


<span class="ml-1">(3 kyu)</span>
</li>
<li>
<span class="bullet"></span>
<a class="text-ui-text-lc hover:underline" data-turbolinks="false" href="https://www.codewars.com/kata/583f158ea20cfcbeb400000a/solutions/javascript#5abbf417a88ee76714000134">
<time-ago lang="en" datetime="2018-03-28T19:59:19.139+0000" title="28 Mar 2018, 20:59 BST">4 years ago</time-ago>
</a>
</li>
<!--v-if-->
<!--v-if-->
</ul>
</h6>
<div class="comment-markdown markdown prose max-w-none p-1 overflow-x-auto" data-markdown="wow, really nice! I learned something new thanks to you."><p>wow, really nice! I learned something new thanks to you.</p>
</div>


<div>
<ul class="comment-actions bulleted-text">
<li>
<span class="voter">
<span class="score">4</span>
<span class="vote">
<a class="up_vote" data-tippy-content="Up vote" data-tippy-placement="bottom">
<i class="icon-moon-up "></i>
</a>
</span>
<span class="spacer">|</span>
<span class="vote">
<a class="down_vote" data-tippy-content="Down vote" data-tippy-placement="bottom">
<i class="icon-moon-down "></i>
</a>
</span>
</span>
</li>
<li>
<span class="bullet"></span>
<a>
<i class="icon-moon-reply "></i>Reply
</a>
</li>
<!--v-if-->
<li>
<span class="bullet"></span>
<a>
<i class="icon-moon-object "></i>View Solution
</a>
</li>
<!--v-if-->

<li class="is-auto-hidden">
<span class="bullet"></span>
<a data-tippy-placement="bottom" data-tippy-content="Flag this comment as a spoiler. It will be hidden from users who have not yet solved the kata.">
<i class="icon-moon-flag "></i>
<span>Spoiler</span>
</a>
</li>
<!--v-if-->
</ul>
<div class="clearfix"></div>
<!--v-if-->
<!--v-if-->
</div>
</div>
<!--v-if-->
<div class="nested-comments">
<ul class="comments-list">

<!--v-if-->
</ul>
</div>
<ul class="comment-actions is-auto-hidden bulleted-text" style="display: none;">
<li>
<a><i class="icon-moon-reply "></i>Reply</a>
</li>
</ul>
</div>
</div>

</li><li class="comment" data-label="no-label" data-state="Open" data-username="oblackwang" id="5a86b999fd8c06a5e700028f">

<div>
<figure>
<a href="https://www.codewars.com/users/oblackwang">
<div><img title="oblackwang" data-tippy-content="oblackwang" data-tippy-placement="bottom" alt="oblackwang Avatar" src="./110722-CW_files/7984831"></div>
</a>
</figure>
<div class="comment-content">
<div>
<h6 class="mt-4 mb-2">
<ul class="bulleted-text">
<li>
<span class="bullet"></span>
<a href="https://www.codewars.com/users/oblackwang">oblackwang</a>
<!--v-if-->


<span class="ml-1">(5 kyu)</span>
</li>
<li>
<span class="bullet"></span>
<a class="text-ui-text-lc hover:underline" data-turbolinks="false" href="https://www.codewars.com/kata/583f158ea20cfcbeb400000a/solutions/javascript#5a86b999fd8c06a5e700028f">
<time-ago lang="en" datetime="2018-02-16T10:59:37.649+0000" title="16 Feb 2018, 10:59 GMT">5 years ago</time-ago>
</a>
</li>
<!--v-if-->
<!--v-if-->
</ul>
</h6>
<div class="comment-markdown markdown prose max-w-none p-1 overflow-x-auto" data-markdown="best solution!"><p>best solution!</p>
</div>


<div>
<ul class="comment-actions bulleted-text">
<li>
<span class="voter">
<span class="score">1</span>
<span class="vote">
<a class="up_vote" data-tippy-content="Up vote" data-tippy-placement="bottom">
<i class="icon-moon-up "></i>
</a>
</span>
<span class="spacer">|</span>
<span class="vote">
<a class="down_vote" data-tippy-content="Down vote" data-tippy-placement="bottom">
<i class="icon-moon-down "></i>
</a>
</span>
</span>
</li>
<li>
<span class="bullet"></span>
<a>
<i class="icon-moon-reply "></i>Reply
</a>
</li>
<!--v-if-->
<li>
<span class="bullet"></span>
<a>
<i class="icon-moon-object "></i>View Solution
</a>
</li>
<!--v-if-->

<li class="is-auto-hidden">
<span class="bullet"></span>
<a data-tippy-placement="bottom" data-tippy-content="Flag this comment as a spoiler. It will be hidden from users who have not yet solved the kata.">
<i class="icon-moon-flag "></i>
<span>Spoiler</span>
</a>
</li>
<!--v-if-->
</ul>
<div class="clearfix"></div>
<!--v-if-->
<!--v-if-->
</div>
</div>
<!--v-if-->
<div class="nested-comments">
<ul class="comments-list">

<!--v-if-->
</ul>
</div>
<ul class="comment-actions is-auto-hidden bulleted-text" style="display: none;">
<li>
<a><i class="icon-moon-reply "></i>Reply</a>
</li>
</ul>
</div>
</div>

</li><li class="comment" data-label="no-label" data-state="Open" data-username="Frizi" id="59454290aa3b73fe2a000033">

<div>
<figure>
<a href="https://www.codewars.com/users/Frizi">
<div><img title="Frizi" data-tippy-content="Frizi" data-tippy-placement="bottom" alt="Frizi Avatar" src="./110722-CW_files/919491"></div>
</a>
</figure>
<div class="comment-content">
<div>
<h6 class="mt-4 mb-2">
<ul class="bulleted-text">
<li>
<span class="bullet"></span>
<a href="https://www.codewars.com/users/Frizi">Frizi</a>
<!--v-if-->


<span class="ml-1">(7 kyu)</span>
</li>
<li>
<span class="bullet"></span>
<a class="text-ui-text-lc hover:underline" data-turbolinks="false" href="https://www.codewars.com/kata/583f158ea20cfcbeb400000a/solutions/javascript#59454290aa3b73fe2a000033">
<time-ago lang="en" datetime="2017-06-17T14:54:08.247+0000" title="17 Jun 2017, 15:54 BST">5 years ago</time-ago>
</a>
</li>
<!--v-if-->
<!--v-if-->
</ul>
</h6>
<div class="comment-markdown markdown prose max-w-none p-1 overflow-x-auto" data-markdown="You evaluate all expressions every time. While this is clever, it&#39;s not very efficient."><p>You evaluate all expressions every time. While this is clever, it's not very efficient.</p>
</div>


<div>
<ul class="comment-actions bulleted-text">
<li>
<span class="voter">
<span class="score">3</span>
<span class="vote">
<a class="up_vote" data-tippy-content="Up vote" data-tippy-placement="bottom">
<i class="icon-moon-up "></i>
</a>
</span>
<span class="spacer">|</span>
<span class="vote">
<a class="down_vote" data-tippy-content="Down vote" data-tippy-placement="bottom">
<i class="icon-moon-down "></i>
</a>
</span>
</span>
</li>
<li>
<span class="bullet"></span>
<a>
<i class="icon-moon-reply "></i>Reply
</a>
</li>
<!--v-if-->
<li>
<span class="bullet"></span>
<a>
<i class="icon-moon-object "></i>View Solution
</a>
</li>
<li class="is-active">
<span class="bullet"></span>
<a>
<i class="icon-moon-chevron-sign-down "></i>
<span>Expand 2 replies</span>

</a>
</li>

<li class="is-auto-hidden">
<span class="bullet"></span>
<a data-tippy-placement="bottom" data-tippy-content="Flag this comment as a spoiler. It will be hidden from users who have not yet solved the kata.">
<i class="icon-moon-flag "></i>
<span>Spoiler</span>
</a>
</li>
<!--v-if-->
</ul>
<div class="clearfix"></div>
<!--v-if-->
<!--v-if-->
</div>
</div>
<!--v-if-->
<div class="nested-comments is-hidden">
<ul class="comments-list">
<li class="comment" data-label="no-label" data-state="Open" data-username="Wittybit" id="59455db8aa3b731e8f0003af">

<div>
<figure>
<a href="https://www.codewars.com/users/Wittybit">
<div><img title="Wittybit" data-tippy-content="Wittybit" data-tippy-placement="bottom" alt="Wittybit Avatar" src="./110722-CW_files/14199702"></div>
</a>
</figure>
<div class="comment-content">
<div>
<h6 class="mt-4 mb-2">
<ul class="bulleted-text">
<li>
<span class="bullet"></span>
<a href="https://www.codewars.com/users/Wittybit">Wittybit</a>
<!--v-if-->


<span class="ml-1">(1 kyu)</span>
</li>
<li>
<span class="bullet"></span>
<a class="text-ui-text-lc hover:underline" data-turbolinks="false" href="https://www.codewars.com/kata/583f158ea20cfcbeb400000a/solutions/javascript#59455db8aa3b731e8f0003af">
<time-ago lang="en" datetime="2017-06-17T16:50:00.759+0000" title="17 Jun 2017, 17:50 BST">5 years ago</time-ago>
</a>
</li>
<!--v-if-->
<!--v-if-->
</ul>
</h6>
<div class="comment-markdown markdown prose max-w-none p-1 overflow-x-auto" data-markdown="Yeah, i know.
I want if someone will make language with some `compiler directives`. I like languages near C++, but want something more flexible.

Example of `directive`:
`#no_abc` -&gt; no &#39;array bounding checks&#39;
`#lazy` -&gt; evaluate expression only before it&#39;s direct usage
`#pce` -&gt; partial code execution at compile time(If we have big function and some parameters are constant or already known at compile time. Function must be pure to use this directive)

So let&#39;s wait for lazyness! Just because it might help a lot... And save us from &#39;Division by zero exception&#39;. At least JS doesn&#39;t have such... So everything works just fine =)"><p>Yeah, i know.
I want if someone will make language with some <code>compiler directives</code>. I like languages near C++, but want something more flexible.</p>
<p>Example of <code>directive</code>:
<code>#no_abc</code> -&gt; no 'array bounding checks'
<code>#lazy</code> -&gt; evaluate expression only before it's direct usage
<code>#pce</code> -&gt; partial code execution at compile time(If we have big function and some parameters are constant or already known at compile time. Function must be pure to use this directive)</p>
<p>So let's wait for lazyness! Just because it might help a lot... And save us from 'Division by zero exception'. At least JS doesn't have such... So everything works just fine =)</p>
</div>


<div>
<ul class="comment-actions bulleted-text">
<li>
<span class="voter">
<span class="score">2</span>
<span class="vote">
<a class="up_vote" data-tippy-content="Up vote" data-tippy-placement="bottom">
<i class="icon-moon-up "></i>
</a>
</span>
<span class="spacer">|</span>
<span class="vote">
<a class="down_vote" data-tippy-content="Down vote" data-tippy-placement="bottom">
<i class="icon-moon-down "></i>
</a>
</span>
</span>
</li>
<!--v-if-->
<!--v-if-->
<li>
<span class="bullet"></span>
<a>
<i class="icon-moon-object "></i>View Solution
</a>
</li>
<!--v-if-->

<li class="is-auto-hidden">
<span class="bullet"></span>
<a data-tippy-placement="bottom" data-tippy-content="Flag this comment as a spoiler. It will be hidden from users who have not yet solved the kata.">
<i class="icon-moon-flag "></i>
<span>Spoiler</span>
</a>
</li>
<!--v-if-->
</ul>
<div class="clearfix"></div>
<!--v-if-->
<!--v-if-->
</div>
</div>
<!--v-if-->
<div class="nested-comments">
<ul class="comments-list">

<!--v-if-->
</ul>
</div>
<ul class="comment-actions is-auto-hidden bulleted-text" style="display: none;">
<li>
<a><i class="icon-moon-reply "></i>Reply</a>
</li>
</ul>
</div>
</div>

</li><li class="comment" data-label="no-label" data-state="Open" data-username="algoSolver988" id="6230a2256e8da0000e9641d6">

<div>
<figure>
<a href="https://www.codewars.com/users/algoSolver988">
<div><img title="algoSolver988" data-tippy-content="algoSolver988" data-tippy-placement="bottom" alt="algoSolver988 Avatar" src="./110722-CW_files/profile-pic.f3a90aca.png"></div>
</a>
</figure>
<div class="comment-content">
<div>
<h6 class="mt-4 mb-2">
<ul class="bulleted-text">
<li>
<span class="bullet"></span>
<a href="https://www.codewars.com/users/algoSolver988">algoSolver988</a>
<!--v-if-->


<span class="ml-1">(6 kyu)</span>
</li>
<li>
<span class="bullet"></span>
<a class="text-ui-text-lc hover:underline" data-turbolinks="false" href="https://www.codewars.com/kata/583f158ea20cfcbeb400000a/solutions/javascript#6230a2256e8da0000e9641d6">
<time-ago lang="en" datetime="2022-03-15T14:26:45.654+0000" title="15 Mar 2022, 14:26 GMT">4 months ago</time-ago>
</a>
</li>
<!--v-if-->
<!--v-if-->
</ul>
</h6>
<div class="comment-markdown markdown prose max-w-none p-1 overflow-x-auto" data-markdown="Thanks for pointing this out because I would have not realized. "><p>Thanks for pointing this out because I would have not realized. </p>
</div>


<div>
<ul class="comment-actions bulleted-text">
<li>
<span class="voter">
<span class="score">1</span>
<span class="vote">
<a class="up_vote" data-tippy-content="Up vote" data-tippy-placement="bottom">
<i class="icon-moon-up "></i>
</a>
</span>
<span class="spacer">|</span>
<span class="vote">
<a class="down_vote" data-tippy-content="Down vote" data-tippy-placement="bottom">
<i class="icon-moon-down "></i>
</a>
</span>
</span>
</li>
<!--v-if-->
<!--v-if-->
<li>
<span class="bullet"></span>
<a>
<i class="icon-moon-object "></i>View Solution
</a>
</li>
<!--v-if-->

<li class="is-auto-hidden">
<span class="bullet"></span>
<a data-tippy-placement="bottom" data-tippy-content="Flag this comment as a spoiler. It will be hidden from users who have not yet solved the kata.">
<i class="icon-moon-flag "></i>
<span>Spoiler</span>
</a>
</li>
<!--v-if-->
</ul>
<div class="clearfix"></div>
<!--v-if-->
<!--v-if-->
</div>
</div>
<!--v-if-->
<div class="nested-comments">
<ul class="comments-list">

<!--v-if-->
</ul>
</div>
<ul class="comment-actions is-auto-hidden bulleted-text" style="display: none;">
<li>
<a><i class="icon-moon-reply "></i>Reply</a>
</li>
</ul>
</div>
</div>

</li>
<!--v-if-->
</ul>
</div>
<ul class="comment-actions is-auto-hidden bulleted-text" style="display: none;">
<li>
<a><i class="icon-moon-reply "></i>Reply</a>
</li>
</ul>
</div>
</div>

</li><li class="comment" data-label="no-label" data-state="Open" data-username="Chrico" id="584e7352e086f8554e000087">

<div>
<figure>
<a href="https://www.codewars.com/users/Chrico">
<div><img title="Chrico" data-tippy-content="Chrico" data-tippy-placement="bottom" alt="Chrico Avatar" src="./110722-CW_files/3417446"></div>
</a>
</figure>
<div class="comment-content">
<div>
<h6 class="mt-4 mb-2">
<ul class="bulleted-text">
<li>
<span class="bullet"></span>
<a href="https://www.codewars.com/users/Chrico">Chrico</a>
<!--v-if-->


<span class="ml-1">(3 kyu)</span>
</li>
<li>
<span class="bullet"></span>
<a class="text-ui-text-lc hover:underline" data-turbolinks="false" href="https://www.codewars.com/kata/583f158ea20cfcbeb400000a/solutions/javascript#584e7352e086f8554e000087">
<time-ago lang="en" datetime="2016-12-12T09:52:18.829+0000" title="12 Dec 2016, 09:52 GMT">6 years ago</time-ago>
</a>
</li>
<!--v-if-->
<!--v-if-->
</ul>
</h6>
<div class="comment-markdown markdown prose max-w-none p-1 overflow-x-auto" data-markdown="really nice solution! love it."><p>really nice solution! love it.</p>
</div>


<div>
<ul class="comment-actions bulleted-text">
<li>
<span class="voter">
<span class="score">2</span>
<span class="vote">
<a class="up_vote" data-tippy-content="Up vote" data-tippy-placement="bottom">
<i class="icon-moon-up "></i>
</a>
</span>
<span class="spacer">|</span>
<span class="vote">
<a class="down_vote" data-tippy-content="Down vote" data-tippy-placement="bottom">
<i class="icon-moon-down "></i>
</a>
</span>
</span>
</li>
<li>
<span class="bullet"></span>
<a>
<i class="icon-moon-reply "></i>Reply
</a>
</li>
<!--v-if-->
<li>
<span class="bullet"></span>
<a>
<i class="icon-moon-object "></i>View Solution
</a>
</li>
<li class="is-active">
<span class="bullet"></span>
<a>
<i class="icon-moon-chevron-sign-down "></i>
<span>Expand 1 Reply</span>

</a>
</li>

<li class="is-auto-hidden">
<span class="bullet"></span>
<a data-tippy-placement="bottom" data-tippy-content="Flag this comment as a spoiler. It will be hidden from users who have not yet solved the kata.">
<i class="icon-moon-flag "></i>
<span>Spoiler</span>
</a>
</li>
<!--v-if-->
</ul>
<div class="clearfix"></div>
<!--v-if-->
<!--v-if-->
</div>
</div>
<!--v-if-->
<div class="nested-comments is-hidden">
<ul class="comments-list">
<li class="comment" data-label="no-label" data-state="Open" data-username="Wittybit" id="584e82346a0ce0fd3f00018e">

<div>
<figure>
<a href="https://www.codewars.com/users/Wittybit">
<div><img title="Wittybit" data-tippy-content="Wittybit" data-tippy-placement="bottom" alt="Wittybit Avatar" src="./110722-CW_files/14199702"></div>
</a>
</figure>
<div class="comment-content">
<div>
<h6 class="mt-4 mb-2">
<ul class="bulleted-text">
<li>
<span class="bullet"></span>
<a href="https://www.codewars.com/users/Wittybit">Wittybit</a>
<!--v-if-->


<span class="ml-1">(1 kyu)</span>
</li>
<li>
<span class="bullet"></span>
<a class="text-ui-text-lc hover:underline" data-turbolinks="false" href="https://www.codewars.com/kata/583f158ea20cfcbeb400000a/solutions/javascript#584e82346a0ce0fd3f00018e">
<time-ago lang="en" datetime="2016-12-12T10:55:48.770+0000" title="12 Dec 2016, 10:55 GMT">6 years ago</time-ago>
</a>
</li>
<!--v-if-->
<!--v-if-->
</ul>
</h6>
<div class="comment-markdown markdown prose max-w-none p-1 overflow-x-auto" data-markdown="Thank you very much.

I need more cool solutions... and more cool katas..."><p>Thank you very much.</p>
<p>I need more cool solutions... and more cool katas...</p>
</div>


<div>
<ul class="comment-actions bulleted-text">
<li>
<span class="voter">
<span class="score">4</span>
<span class="vote">
<a class="up_vote" data-tippy-content="Up vote" data-tippy-placement="bottom">
<i class="icon-moon-up "></i>
</a>
</span>
<span class="spacer">|</span>
<span class="vote">
<a class="down_vote" data-tippy-content="Down vote" data-tippy-placement="bottom">
<i class="icon-moon-down "></i>
</a>
</span>
</span>
</li>
<!--v-if-->
<!--v-if-->
<li>
<span class="bullet"></span>
<a>
<i class="icon-moon-object "></i>View Solution
</a>
</li>
<!--v-if-->

<li class="is-auto-hidden">
<span class="bullet"></span>
<a data-tippy-placement="bottom" data-tippy-content="Flag this comment as a spoiler. It will be hidden from users who have not yet solved the kata.">
<i class="icon-moon-flag "></i>
<span>Spoiler</span>
</a>
</li>
<!--v-if-->
</ul>
<div class="clearfix"></div>
<!--v-if-->
<!--v-if-->
</div>
</div>
<!--v-if-->
<div class="nested-comments">
<ul class="comments-list">

<!--v-if-->
</ul>
</div>
<ul class="comment-actions is-auto-hidden bulleted-text" style="display: none;">
<li>
<a><i class="icon-moon-reply "></i>Reply</a>
</li>
</ul>
</div>
</div>

</li>
<!--v-if-->
</ul>
</div>
<ul class="comment-actions is-auto-hidden bulleted-text" style="display: none;">
<li>
<a><i class="icon-moon-reply "></i>Reply</a>
</li>
</ul>
</div>
</div>

</li>
</ul>
</div>
<div class="clearfix"></div>
</div>
</li><li class="js-result-group" data-controller="solution-group" data-solution-group-group-id-value="583f38426312ce4b33000126" data-solution-group-review-id-value="583f1c66d622c07b55000059" id="583f38426312ce4b33000126"><h6 class="solution-group-users-list my-4"><i class="icon-moon-users "></i><a class="font-semibold" href="https://www.codewars.com/users/norcimo5">norcimo5</a><span>, </span><a href="https://www.codewars.com/users/Kyserwor">Kyserwor</a><span>, </span><a href="https://www.codewars.com/users/Khaled000">Khaled000</a><span>, </span><a href="https://www.codewars.com/users/Eu113Mk">Eu113Mk</a><span>, </span><a href="https://www.codewars.com/users/Bourezgui1994">Bourezgui1994</a><span>, </span><a href="https://www.codewars.com/users/achrafameur">achrafameur</a><span>, </span><a href="https://www.codewars.com/users/Nidhalkatar">Nidhalkatar</a><span>, </span><a href="https://www.codewars.com/users/Nassimisavailable">Nassimisavailable</a><span>, </span><a href="https://www.codewars.com/users/AzizJemli">AzizJemli</a><span>, </span><a href="https://www.codewars.com/users/MohamedSeck">MohamedSeck</a><span> (+ 6)</span><div class="clearfix"></div></h6><pre class="p-2 overflow-x-auto"><code data-language="javascript"><span class="cm-keyword">function</span> <span class="cm-def">arithmetic</span>(<span class="cm-def">a</span>, <span class="cm-def">b</span>, <span class="cm-def">operator</span>){
  <span class="cm-variable">optable</span> <span class="cm-operator">=</span> { <span class="cm-string cm-property">"add"</span>:<span class="cm-string">"+"</span>, <span class="cm-string cm-property">"subtract"</span>: <span class="cm-string">"-"</span>, <span class="cm-string cm-property">"multiply"</span>: <span class="cm-string">"*"</span> , <span class="cm-string cm-property">"divide"</span>:<span class="cm-string">"/"</span>};
  <span class="cm-keyword">return</span> <span class="cm-variable">eval</span>(<span class="cm-variable-2">a</span> <span class="cm-operator">+</span> <span class="cm-variable">optable</span>[<span class="cm-variable-2">operator</span>] <span class="cm-operator">+</span> <span class="cm-variable-2">b</span>); 
}</code></pre><div data-controller="solution-variations" data-solution-variations-group-id-value="583f38426312ce4b33000126" data-solution-variations-review-id-value="583f1c66d622c07b55000059"><div class="mt-4 mb-0 px-1 text-ui-text-lc flex justify-between"><div>5 similar code variations are grouped with this one<i class="icon-moon-info ml-1" data-tippy-content="We group similar results by ignoring whitespace, linebreaks and very minor character variations." data-tippy-placement="bottom"></i></div><button class="hidden sm:block" data-action="solution-variations#toggle">Show Variations</button></div><div class="has-top-border mt-4 pt-4 is-hidden space-y-4" data-solution-variations-target="container"></div></div><div class="js-compare is-hidden"></div><div class="clearfix"></div>
<div class="comments-list-component" data-view-data="{&quot;comments&quot;:[{&quot;id&quot;:&quot;5f22d90d459a99002feec043&quot;,&quot;masked&quot;:null,&quot;masked_by_id&quot;:null,&quot;votes_score&quot;:5,&quot;user_id&quot;:&quot;5d8cd39a1b339900296f23da&quot;,&quot;edit_count&quot;:0,&quot;label&quot;:null,&quot;allowed_resolver_ids&quot;:[&quot;5d8cd39a1b339900296f23da&quot;],&quot;state&quot;:&quot;fresh&quot;,&quot;is_resolvable&quot;:false,&quot;state_text&quot;:&quot;new&quot;,&quot;state_summary&quot;:&quot;Open&quot;,&quot;type&quot;:&quot;&quot;,&quot;label_text&quot;:null,&quot;markdown&quot;:&quot;eval is evil&quot;,&quot;markdown_html&quot;:&quot;\u003cp\u003eeval is evil\u003c/p\u003e&quot;,&quot;created_at&quot;:1596119309,&quot;created_at_datetime&quot;:&quot;2020-07-30T14:28:29.451+0000&quot;,&quot;nest_level&quot;:0,&quot;collapsed&quot;:false,&quot;total_comments&quot;:0,&quot;hash&quot;:&quot;#5f22d90d459a99002feec043&quot;,&quot;user&quot;:{&quot;id&quot;:&quot;5d8cd39a1b339900296f23da&quot;,&quot;username&quot;:&quot;Kees de Vreugd&quot;,&quot;rank_name&quot;:&quot;1 kyu&quot;,&quot;profile_path&quot;:&quot;/users/Kees%20de%20Vreugd&quot;,&quot;avatar_tag&quot;:&quot;\u003cimg title=\&quot;Kees de Vreugd\&quot; data-tippy-content=\&quot;Kees de Vreugd\&quot; data-tippy-placement=\&quot;bottom\&quot; alt=\&quot;Kees de Vreugd Avatar\&quot; src=\&quot;https://www.codewars.com/packs/assets/profile-pic.f3a90aca.png\&quot; /\u003e&quot;,&quot;is_admin&quot;:false,&quot;is_mod&quot;:false,&quot;is_mender&quot;:false},&quot;comments&quot;:[]},{&quot;id&quot;:&quot;5e9da34b43c776001a06bec8&quot;,&quot;masked&quot;:null,&quot;masked_by_id&quot;:null,&quot;votes_score&quot;:1,&quot;user_id&quot;:&quot;567954d37c3701e33f000035&quot;,&quot;edit_count&quot;:0,&quot;label&quot;:null,&quot;allowed_resolver_ids&quot;:[&quot;567954d37c3701e33f000035&quot;],&quot;state&quot;:&quot;fresh&quot;,&quot;is_resolvable&quot;:false,&quot;state_text&quot;:&quot;new&quot;,&quot;state_summary&quot;:&quot;Open&quot;,&quot;type&quot;:&quot;&quot;,&quot;label_text&quot;:null,&quot;markdown&quot;:&quot;Since optable is used as an enum here, a good practice would be to add:\nObject.freeze(optable);&quot;,&quot;markdown_html&quot;:&quot;\u003cp\u003eSince optable is used as an enum here, a good practice would be to add:\u003cbr\u003e\nObject.freeze(optable);\u003c/p\u003e&quot;,&quot;created_at&quot;:1587389259,&quot;created_at_datetime&quot;:&quot;2020-04-20T13:27:39.588+0000&quot;,&quot;nest_level&quot;:0,&quot;collapsed&quot;:false,&quot;total_comments&quot;:0,&quot;hash&quot;:&quot;#5e9da34b43c776001a06bec8&quot;,&quot;user&quot;:{&quot;id&quot;:&quot;567954d37c3701e33f000035&quot;,&quot;username&quot;:&quot;DorAm&quot;,&quot;rank_name&quot;:&quot;6 kyu&quot;,&quot;profile_path&quot;:&quot;/users/DorAm&quot;,&quot;avatar_tag&quot;:&quot;\u003cimg title=\&quot;DorAm\&quot; data-tippy-content=\&quot;DorAm\&quot; data-tippy-placement=\&quot;bottom\&quot; alt=\&quot;DorAm Avatar\&quot; src=\&quot;https://avatars.githubusercontent.com/u/7759254?s=100\&quot; /\u003e&quot;,&quot;is_admin&quot;:false,&quot;is_mod&quot;:false,&quot;is_mender&quot;:false},&quot;comments&quot;:[]},{&quot;id&quot;:&quot;5e15fed4ceeb040019c56015&quot;,&quot;masked&quot;:null,&quot;masked_by_id&quot;:null,&quot;votes_score&quot;:2,&quot;user_id&quot;:&quot;5981f0cd6c3923877900017c&quot;,&quot;edit_count&quot;:0,&quot;label&quot;:null,&quot;allowed_resolver_ids&quot;:[&quot;5981f0cd6c3923877900017c&quot;],&quot;state&quot;:&quot;fresh&quot;,&quot;is_resolvable&quot;:false,&quot;state_text&quot;:&quot;new&quot;,&quot;state_summary&quot;:&quot;Open&quot;,&quot;type&quot;:&quot;&quot;,&quot;label_text&quot;:null,&quot;markdown&quot;:&quot;Not that it really matters on this platform, but I liked this solution so I did some digging and found this unfortunately... https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval#Never_use_eval!&quot;,&quot;markdown_html&quot;:&quot;\u003cp\u003eNot that it really matters on this platform, but I liked this solution so I did some digging and found this unfortunately... \u003ca href=\&quot;https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval#Never_use_eval\&quot;\u003ehttps://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval#Never_use_eval\u003c/a\u003e!\u003c/p\u003e&quot;,&quot;created_at&quot;:1578499796,&quot;created_at_datetime&quot;:&quot;2020-01-08T16:09:56.048+0000&quot;,&quot;nest_level&quot;:0,&quot;collapsed&quot;:false,&quot;total_comments&quot;:0,&quot;hash&quot;:&quot;#5e15fed4ceeb040019c56015&quot;,&quot;user&quot;:{&quot;id&quot;:&quot;5981f0cd6c3923877900017c&quot;,&quot;username&quot;:&quot;nicholasMink&quot;,&quot;rank_name&quot;:&quot;6 kyu&quot;,&quot;profile_path&quot;:&quot;/users/nicholasMink&quot;,&quot;avatar_tag&quot;:&quot;\u003cimg title=\&quot;nicholasMink\&quot; data-tippy-content=\&quot;nicholasMink\&quot; data-tippy-placement=\&quot;bottom\&quot; alt=\&quot;nicholasMink Avatar\&quot; src=\&quot;https://avatars.githubusercontent.com/u/14082196?s=100\&quot; /\u003e&quot;,&quot;is_admin&quot;:false,&quot;is_mod&quot;:false,&quot;is_mender&quot;:false},&quot;comments&quot;:[]},{&quot;id&quot;:&quot;5aa7e1b0ba1bb531fb0001bb&quot;,&quot;masked&quot;:null,&quot;masked_by_id&quot;:null,&quot;votes_score&quot;:1,&quot;user_id&quot;:&quot;552d376c789ee5332d000076&quot;,&quot;edit_count&quot;:0,&quot;label&quot;:null,&quot;allowed_resolver_ids&quot;:[&quot;552d376c789ee5332d000076&quot;],&quot;state&quot;:&quot;fresh&quot;,&quot;is_resolvable&quot;:false,&quot;state_text&quot;:&quot;new&quot;,&quot;state_summary&quot;:&quot;Open&quot;,&quot;type&quot;:&quot;&quot;,&quot;label_text&quot;:null,&quot;markdown&quot;:&quot;Quick and dirty, but in javascript does the trick. Not arbitrary at all.&quot;,&quot;markdown_html&quot;:&quot;\u003cp\u003eQuick and dirty, but in javascript does the trick. Not arbitrary at all.\u003c/p\u003e&quot;,&quot;created_at&quot;:1520951728,&quot;created_at_datetime&quot;:&quot;2018-03-13T14:35:28.963+0000&quot;,&quot;nest_level&quot;:0,&quot;collapsed&quot;:false,&quot;total_comments&quot;:0,&quot;hash&quot;:&quot;#5aa7e1b0ba1bb531fb0001bb&quot;,&quot;user&quot;:{&quot;id&quot;:&quot;552d376c789ee5332d000076&quot;,&quot;username&quot;:&quot;norcimo5&quot;,&quot;rank_name&quot;:&quot;4 kyu&quot;,&quot;profile_path&quot;:&quot;/users/norcimo5&quot;,&quot;avatar_tag&quot;:&quot;\u003cimg title=\&quot;norcimo5\&quot; data-tippy-content=\&quot;norcimo5\&quot; data-tippy-placement=\&quot;bottom\&quot; alt=\&quot;norcimo5 Avatar\&quot; src=\&quot;https://avatars.githubusercontent.com/u/1977477?s=100\&quot; /\u003e&quot;,&quot;is_admin&quot;:false,&quot;is_mod&quot;:false,&quot;is_mender&quot;:false},&quot;comments&quot;:[]},{&quot;id&quot;:&quot;5aa59d2c4a6b34892a000194&quot;,&quot;masked&quot;:null,&quot;masked_by_id&quot;:null,&quot;votes_score&quot;:1,&quot;user_id&quot;:&quot;52de29c23fcfee83c600024d&quot;,&quot;edit_count&quot;:0,&quot;label&quot;:null,&quot;allowed_resolver_ids&quot;:[&quot;52de29c23fcfee83c600024d&quot;],&quot;state&quot;:&quot;fresh&quot;,&quot;is_resolvable&quot;:false,&quot;state_text&quot;:&quot;new&quot;,&quot;state_summary&quot;:&quot;Open&quot;,&quot;type&quot;:&quot;&quot;,&quot;label_text&quot;:null,&quot;markdown&quot;:&quot;Arbitrary code execution.&quot;,&quot;markdown_html&quot;:&quot;\u003cp\u003eArbitrary code execution.\u003c/p\u003e&quot;,&quot;created_at&quot;:1520803116,&quot;created_at_datetime&quot;:&quot;2018-03-11T21:18:36.935+0000&quot;,&quot;nest_level&quot;:0,&quot;collapsed&quot;:false,&quot;total_comments&quot;:0,&quot;hash&quot;:&quot;#5aa59d2c4a6b34892a000194&quot;,&quot;user&quot;:{&quot;id&quot;:&quot;52de29c23fcfee83c600024d&quot;,&quot;username&quot;:&quot;xehpuk&quot;,&quot;rank_name&quot;:&quot;3 kyu&quot;,&quot;profile_path&quot;:&quot;/users/xehpuk&quot;,&quot;avatar_tag&quot;:&quot;\u003cimg title=\&quot;xehpuk\&quot; data-tippy-content=\&quot;xehpuk\&quot; data-tippy-placement=\&quot;bottom\&quot; alt=\&quot;xehpuk Avatar\&quot; src=\&quot;https://avatars.githubusercontent.com/u/3484906?s=100\&quot; /\u003e&quot;,&quot;is_admin&quot;:false,&quot;is_mod&quot;:false,&quot;is_mender&quot;:false},&quot;comments&quot;:[]}],&quot;hideSpoilers&quot;:false,&quot;allowedLabels&quot;:[],&quot;totalComments&quot;:5,&quot;spoilerFlag&quot;:true,&quot;commentUrl&quot;:&quot;/kata/reviews/583f1c66d622c07b55000059/groups/583f38426312ce4b33000126/comments/%7Bcomment_id%7D&quot;,&quot;voteUrl&quot;:&quot;/kata/reviews/583f1c66d622c07b55000059/groups/583f38426312ce4b33000126/comments/%7BrefId%7D/vote/%7Bvalue%7D&quot;,&quot;userVotesUrl&quot;:&quot;/kata/reviews/583f1c66d622c07b55000059/groups/583f38426312ce4b33000126/comments/user_votes&quot;,&quot;labelGroups&quot;:[{&quot;name&quot;:&quot;Comments&quot;,&quot;label&quot;:null,&quot;count&quot;:5}],&quot;stateGroups&quot;:[{&quot;name&quot;:&quot;Open&quot;,&quot;count&quot;:5}]}">
<div class="comments" data-comment-url="/kata/reviews/583f1c66d622c07b55000059/groups/583f38426312ce4b33000126/comments/%7Bcomment_id%7D">
<ul class="piped-text mt-4 has-keyword-tags">
<li>
<ul class="vote-labels" data-vote-name="solution-solution_group" data-vote-ref-id="583f38426312ce4b33000126"><li data-tippy-content="Vote this solution as a best practice. Best practice solutions tend to be a good balance of performance, readability and maintainability." data-tippy-placement="bottom"><a class="vote-label" data-label="best_practice"><i class="icon-moon-up "></i>Best Practices<span>23</span></a></li><li data-tippy-content="Vote this solution as being clever. Clever solutions tend to be very creative or make use of obscure language features. They usually are not code that you would want to put into production." data-tippy-placement="bottom"><a class="vote-label" data-label="clever"><i class="icon-moon-up "></i>Clever<span>185</span></a></li></ul>
</li>
<li>
<a class="js-show-comments">
<i class="icon-moon-comments "></i>
<span>5</span>
</a>
</li>
<li><a href="https://www.codewars.com/kumite/new?group_id=583f38426312ce4b33000126&amp;review_id=583f1c66d622c07b55000059"><span>Fork</span></a></li><li data-bind-if="$solution"><a class="js-compare-solutions" data-tippy-content="Compare this solution to your own" data-tippy-placement="bottom"><i class="icon-moon-compare "></i>Compare with your solution</a></li><li><a href="https://www.codewars.com/kata/reviews/583f1c66d622c07b55000059/groups/583f38426312ce4b33000126">Link</a></li>
</ul>
<div class="clearfix"></div>
<!--v-if-->
<div class="clearfix"></div>
<ul class="comments-list is-hidden" user-votes-url="/kata/reviews/583f1c66d622c07b55000059/groups/583f38426312ce4b33000126/comments/user_votes">
<li class="new-comment" data-bind-class="new_comment_class">

<div>
<figure>
<a href="https://www.codewars.com/users/GreenEagleKing">
<div><img title="GreenEagleKing" data-tippy-content="GreenEagleKing" data-tippy-placement="bottom" alt="GreenEagleKing Avatar" src="./110722-CW_files/101405438"></div>
</a>
</figure>
<div class="comment-content">
<div class="preedit px-1">
<input type="text" class="form-input block w-64 rounded-none rounded-md sm:text-sm dark:bg-gray-800 focus:outline-none focus:ring-cgray-300 dark:focus:ring-cgray-600 focus:border-cgray-300 dark:focus:border-cgray-600 border-gray-300 dark:border-gray-700" placeholder="Leave feedback...">
</div>
<div class="clearfix mb-4"></div>
</div>
<div class="clearfix"></div>
</div>



</li>
<li class="comment mt-6" data-label="no-label" data-state="Open" data-username="Kees de Vreugd" id="5f22d90d459a99002feec043">

<div>
<figure>
<a href="https://www.codewars.com/users/Kees%20de%20Vreugd">
<div><img title="Kees de Vreugd" data-tippy-content="Kees de Vreugd" data-tippy-placement="bottom" alt="Kees de Vreugd Avatar" src="./110722-CW_files/profile-pic.f3a90aca.png"></div>
</a>
</figure>
<div class="comment-content">
<div>
<h6 class="mt-4 mb-2">
<ul class="bulleted-text">
<li>
<span class="bullet"></span>
<a href="https://www.codewars.com/users/Kees%20de%20Vreugd">Kees de Vreugd</a>
<!--v-if-->


<span class="ml-1">(1 kyu)</span>
</li>
<li>
<span class="bullet"></span>
<a class="text-ui-text-lc hover:underline" data-turbolinks="false" href="https://www.codewars.com/kata/583f158ea20cfcbeb400000a/solutions/javascript#5f22d90d459a99002feec043">
<time-ago lang="en" datetime="2020-07-30T14:28:29.451+0000" title="30 Jul 2020, 15:28 BST">2 years ago</time-ago>
</a>
</li>
<!--v-if-->
<!--v-if-->
</ul>
</h6>
<div class="comment-markdown markdown prose max-w-none p-1 overflow-x-auto" data-markdown="eval is evil"><p>eval is evil</p>
</div>


<div>
<ul class="comment-actions bulleted-text">
<li>
<span class="voter">
<span class="score">5</span>
<span class="vote">
<a class="up_vote" data-tippy-content="Up vote" data-tippy-placement="bottom">
<i class="icon-moon-up "></i>
</a>
</span>
<span class="spacer">|</span>
<span class="vote">
<a class="down_vote" data-tippy-content="Down vote" data-tippy-placement="bottom">
<i class="icon-moon-down "></i>
</a>
</span>
</span>
</li>
<li>
<span class="bullet"></span>
<a>
<i class="icon-moon-reply "></i>Reply
</a>
</li>
<!--v-if-->
<li>
<span class="bullet"></span>
<a>
<i class="icon-moon-object "></i>View Solution
</a>
</li>
<!--v-if-->

<li class="is-auto-hidden">
<span class="bullet"></span>
<a data-tippy-placement="bottom" data-tippy-content="Flag this comment as a spoiler. It will be hidden from users who have not yet solved the kata.">
<i class="icon-moon-flag "></i>
<span>Spoiler</span>
</a>
</li>
<!--v-if-->
</ul>
<div class="clearfix"></div>
<!--v-if-->
<!--v-if-->
</div>
</div>
<!--v-if-->
<div class="nested-comments">
<ul class="comments-list">

<!--v-if-->
</ul>
</div>
<ul class="comment-actions is-auto-hidden bulleted-text" style="display: none;">
<li>
<a><i class="icon-moon-reply "></i>Reply</a>
</li>
</ul>
</div>
</div>

</li><li class="comment" data-label="no-label" data-state="Open" data-username="DorAm" id="5e9da34b43c776001a06bec8">

<div>
<figure>
<a href="https://www.codewars.com/users/DorAm">
<div><img title="DorAm" data-tippy-content="DorAm" data-tippy-placement="bottom" alt="DorAm Avatar" src="./110722-CW_files/7759254"></div>
</a>
</figure>
<div class="comment-content">
<div>
<h6 class="mt-4 mb-2">
<ul class="bulleted-text">
<li>
<span class="bullet"></span>
<a href="https://www.codewars.com/users/DorAm">DorAm</a>
<!--v-if-->


<span class="ml-1">(6 kyu)</span>
</li>
<li>
<span class="bullet"></span>
<a class="text-ui-text-lc hover:underline" data-turbolinks="false" href="https://www.codewars.com/kata/583f158ea20cfcbeb400000a/solutions/javascript#5e9da34b43c776001a06bec8">
<time-ago lang="en" datetime="2020-04-20T13:27:39.588+0000" title="20 Apr 2020, 14:27 BST">2 years ago</time-ago>
</a>
</li>
<!--v-if-->
<!--v-if-->
</ul>
</h6>
<div class="comment-markdown markdown prose max-w-none p-1 overflow-x-auto" data-markdown="Since optable is used as an enum here, a good practice would be to add:
Object.freeze(optable);"><p>Since optable is used as an enum here, a good practice would be to add:
Object.freeze(optable);</p>
</div>


<div>
<ul class="comment-actions bulleted-text">
<li>
<span class="voter">
<span class="score">1</span>
<span class="vote">
<a class="up_vote" data-tippy-content="Up vote" data-tippy-placement="bottom">
<i class="icon-moon-up "></i>
</a>
</span>
<span class="spacer">|</span>
<span class="vote">
<a class="down_vote" data-tippy-content="Down vote" data-tippy-placement="bottom">
<i class="icon-moon-down "></i>
</a>
</span>
</span>
</li>
<li>
<span class="bullet"></span>
<a>
<i class="icon-moon-reply "></i>Reply
</a>
</li>
<!--v-if-->
<li>
<span class="bullet"></span>
<a>
<i class="icon-moon-object "></i>View Solution
</a>
</li>
<!--v-if-->

<li class="is-auto-hidden">
<span class="bullet"></span>
<a data-tippy-placement="bottom" data-tippy-content="Flag this comment as a spoiler. It will be hidden from users who have not yet solved the kata.">
<i class="icon-moon-flag "></i>
<span>Spoiler</span>
</a>
</li>
<!--v-if-->
</ul>
<div class="clearfix"></div>
<!--v-if-->
<!--v-if-->
</div>
</div>
<!--v-if-->
<div class="nested-comments">
<ul class="comments-list">

<!--v-if-->
</ul>
</div>
<ul class="comment-actions is-auto-hidden bulleted-text" style="display: none;">
<li>
<a><i class="icon-moon-reply "></i>Reply</a>
</li>
</ul>
</div>
</div>

</li><li class="comment" data-label="no-label" data-state="Open" data-username="nicholasMink" id="5e15fed4ceeb040019c56015">

<div>
<figure>
<a href="https://www.codewars.com/users/nicholasMink">
<div><img title="nicholasMink" data-tippy-content="nicholasMink" data-tippy-placement="bottom" alt="nicholasMink Avatar" src="./110722-CW_files/14082196"></div>
</a>
</figure>
<div class="comment-content">
<div>
<h6 class="mt-4 mb-2">
<ul class="bulleted-text">
<li>
<span class="bullet"></span>
<a href="https://www.codewars.com/users/nicholasMink">nicholasMink</a>
<!--v-if-->


<span class="ml-1">(6 kyu)</span>
</li>
<li>
<span class="bullet"></span>
<a class="text-ui-text-lc hover:underline" data-turbolinks="false" href="https://www.codewars.com/kata/583f158ea20cfcbeb400000a/solutions/javascript#5e15fed4ceeb040019c56015">
<time-ago lang="en" datetime="2020-01-08T16:09:56.048+0000" title="8 Jan 2020, 16:09 GMT">3 years ago</time-ago>
</a>
</li>
<!--v-if-->
<!--v-if-->
</ul>
</h6>
<div class="comment-markdown markdown prose max-w-none p-1 overflow-x-auto" data-markdown="Not that it really matters on this platform, but I liked this solution so I did some digging and found this unfortunately... https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval#Never_use_eval!"><p>Not that it really matters on this platform, but I liked this solution so I did some digging and found this unfortunately... <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval#Never_use_eval" data-turbolinks="false">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval#Never_use_eval</a>!</p>
</div>


<div>
<ul class="comment-actions bulleted-text">
<li>
<span class="voter">
<span class="score">2</span>
<span class="vote">
<a class="up_vote" data-tippy-content="Up vote" data-tippy-placement="bottom">
<i class="icon-moon-up "></i>
</a>
</span>
<span class="spacer">|</span>
<span class="vote">
<a class="down_vote" data-tippy-content="Down vote" data-tippy-placement="bottom">
<i class="icon-moon-down "></i>
</a>
</span>
</span>
</li>
<li>
<span class="bullet"></span>
<a>
<i class="icon-moon-reply "></i>Reply
</a>
</li>
<!--v-if-->
<li>
<span class="bullet"></span>
<a>
<i class="icon-moon-object "></i>View Solution
</a>
</li>
<!--v-if-->

<li class="is-auto-hidden">
<span class="bullet"></span>
<a data-tippy-placement="bottom" data-tippy-content="Flag this comment as a spoiler. It will be hidden from users who have not yet solved the kata.">
<i class="icon-moon-flag "></i>
<span>Spoiler</span>
</a>
</li>
<!--v-if-->
</ul>
<div class="clearfix"></div>
<!--v-if-->
<!--v-if-->
</div>
</div>
<!--v-if-->
<div class="nested-comments">
<ul class="comments-list">

<!--v-if-->
</ul>
</div>
<ul class="comment-actions is-auto-hidden bulleted-text" style="display: none;">
<li>
<a><i class="icon-moon-reply "></i>Reply</a>
</li>
</ul>
</div>
</div>

</li><li class="comment" data-label="no-label" data-state="Open" data-username="norcimo5" id="5aa7e1b0ba1bb531fb0001bb">

<div>
<figure>
<a href="https://www.codewars.com/users/norcimo5">
<div><img title="norcimo5" data-tippy-content="norcimo5" data-tippy-placement="bottom" alt="norcimo5 Avatar" src="./110722-CW_files/1977477"></div>
</a>
</figure>
<div class="comment-content">
<div>
<h6 class="mt-4 mb-2">
<ul class="bulleted-text">
<li>
<span class="bullet"></span>
<a href="https://www.codewars.com/users/norcimo5">norcimo5</a>
<!--v-if-->


<span class="ml-1">(4 kyu)</span>
</li>
<li>
<span class="bullet"></span>
<a class="text-ui-text-lc hover:underline" data-turbolinks="false" href="https://www.codewars.com/kata/583f158ea20cfcbeb400000a/solutions/javascript#5aa7e1b0ba1bb531fb0001bb">
<time-ago lang="en" datetime="2018-03-13T14:35:28.963+0000" title="13 Mar 2018, 14:35 GMT">4 years ago</time-ago>
</a>
</li>
<!--v-if-->
<!--v-if-->
</ul>
</h6>
<div class="comment-markdown markdown prose max-w-none p-1 overflow-x-auto" data-markdown="Quick and dirty, but in javascript does the trick. Not arbitrary at all."><p>Quick and dirty, but in javascript does the trick. Not arbitrary at all.</p>
</div>


<div>
<ul class="comment-actions bulleted-text">
<li>
<span class="voter">
<span class="score">1</span>
<span class="vote">
<a class="up_vote" data-tippy-content="Up vote" data-tippy-placement="bottom">
<i class="icon-moon-up "></i>
</a>
</span>
<span class="spacer">|</span>
<span class="vote">
<a class="down_vote" data-tippy-content="Down vote" data-tippy-placement="bottom">
<i class="icon-moon-down "></i>
</a>
</span>
</span>
</li>
<li>
<span class="bullet"></span>
<a>
<i class="icon-moon-reply "></i>Reply
</a>
</li>
<!--v-if-->
<li>
<span class="bullet"></span>
<a>
<i class="icon-moon-object "></i>View Solution
</a>
</li>
<!--v-if-->

<li class="is-auto-hidden">
<span class="bullet"></span>
<a data-tippy-placement="bottom" data-tippy-content="Flag this comment as a spoiler. It will be hidden from users who have not yet solved the kata.">
<i class="icon-moon-flag "></i>
<span>Spoiler</span>
</a>
</li>
<!--v-if-->
</ul>
<div class="clearfix"></div>
<!--v-if-->
<!--v-if-->
</div>
</div>
<!--v-if-->
<div class="nested-comments">
<ul class="comments-list">

<!--v-if-->
</ul>
</div>
<ul class="comment-actions is-auto-hidden bulleted-text" style="display: none;">
<li>
<a><i class="icon-moon-reply "></i>Reply</a>
</li>
</ul>
</div>
</div>

</li><li class="comment" data-label="no-label" data-state="Open" data-username="xehpuk" id="5aa59d2c4a6b34892a000194">

<div>
<figure>
<a href="https://www.codewars.com/users/xehpuk">
<div><img title="xehpuk" data-tippy-content="xehpuk" data-tippy-placement="bottom" alt="xehpuk Avatar" src="./110722-CW_files/3484906"></div>
</a>
</figure>
<div class="comment-content">
<div>
<h6 class="mt-4 mb-2">
<ul class="bulleted-text">
<li>
<span class="bullet"></span>
<a href="https://www.codewars.com/users/xehpuk">xehpuk</a>
<!--v-if-->


<span class="ml-1">(3 kyu)</span>
</li>
<li>
<span class="bullet"></span>
<a class="text-ui-text-lc hover:underline" data-turbolinks="false" href="https://www.codewars.com/kata/583f158ea20cfcbeb400000a/solutions/javascript#5aa59d2c4a6b34892a000194">
<time-ago lang="en" datetime="2018-03-11T21:18:36.935+0000" title="11 Mar 2018, 21:18 GMT">4 years ago</time-ago>
</a>
</li>
<!--v-if-->
<!--v-if-->
</ul>
</h6>
<div class="comment-markdown markdown prose max-w-none p-1 overflow-x-auto" data-markdown="Arbitrary code execution."><p>Arbitrary code execution.</p>
</div>


<div>
<ul class="comment-actions bulleted-text">
<li>
<span class="voter">
<span class="score">1</span>
<span class="vote">
<a class="up_vote" data-tippy-content="Up vote" data-tippy-placement="bottom">
<i class="icon-moon-up "></i>
</a>
</span>
<span class="spacer">|</span>
<span class="vote">
<a class="down_vote" data-tippy-content="Down vote" data-tippy-placement="bottom">
<i class="icon-moon-down "></i>
</a>
</span>
</span>
</li>
<li>
<span class="bullet"></span>
<a>
<i class="icon-moon-reply "></i>Reply
</a>
</li>
<!--v-if-->
<li>
<span class="bullet"></span>
<a>
<i class="icon-moon-object "></i>View Solution
</a>
</li>
<!--v-if-->

<li class="is-auto-hidden">
<span class="bullet"></span>
<a data-tippy-placement="bottom" data-tippy-content="Flag this comment as a spoiler. It will be hidden from users who have not yet solved the kata.">
<i class="icon-moon-flag "></i>
<span>Spoiler</span>
</a>
</li>
<!--v-if-->
</ul>
<div class="clearfix"></div>
<!--v-if-->
<!--v-if-->
</div>
</div>
<!--v-if-->
<div class="nested-comments">
<ul class="comments-list">

<!--v-if-->
</ul>
</div>
<ul class="comment-actions is-auto-hidden bulleted-text" style="display: none;">
<li>
<a><i class="icon-moon-reply "></i>Reply</a>
</li>
</ul>
</div>
</div>

</li>
</ul>
</div>
<div class="clearfix"></div>
</div>
</li><li class="js-result-group" data-controller="solution-group" data-solution-group-group-id-value="583f3e44c68d96668c0000e1" data-solution-group-review-id-value="583f1c66d622c07b55000059" id="583f3e44c68d96668c0000e1"><h6 class="solution-group-users-list my-4"><i class="icon-moon-users "></i><a class="font-semibold" href="https://www.codewars.com/users/georgereason">georgereason</a><span>, </span><a href="https://www.codewars.com/users/SandyMak">SandyMak</a><span>, </span><a href="https://www.codewars.com/users/mohamedhedislatni">mohamedhedislatni</a><span>, </span><a href="https://www.codewars.com/users/seyf123">seyf123</a><span>, </span><a href="https://www.codewars.com/users/kotnik">kotnik</a><div class="clearfix"></div></h6><pre class="p-2 overflow-x-auto"><code data-language="javascript"><span class="cm-keyword">function</span> <span class="cm-def">arithmetic</span>(<span class="cm-def">a</span>, <span class="cm-def">b</span>, <span class="cm-def">operator</span>){
  <span class="cm-comment">//your code here!</span>
  <span class="cm-keyword">var</span> <span class="cm-def">mathFun</span> <span class="cm-operator">=</span> {
    <span class="cm-string cm-property">'add'</span>: <span class="cm-keyword">function</span> (<span class="cm-def">a</span>, <span class="cm-def">b</span>) {
        <span class="cm-keyword">return</span> <span class="cm-variable-2">a</span><span class="cm-operator">+</span><span class="cm-variable-2">b</span>;
    },
    <span class="cm-string cm-property">'subtract'</span>: <span class="cm-keyword">function</span> (<span class="cm-def">a</span>, <span class="cm-def">b</span>) {
        <span class="cm-keyword">return</span> <span class="cm-variable-2">a</span><span class="cm-operator">-</span><span class="cm-variable-2">b</span>;
    },
    <span class="cm-string cm-property">'multiply'</span>: <span class="cm-keyword">function</span> (<span class="cm-def">a</span>, <span class="cm-def">b</span>) {
        <span class="cm-keyword">return</span> <span class="cm-variable-2">a</span><span class="cm-operator">*</span><span class="cm-variable-2">b</span>;
    }, 
    <span class="cm-string cm-property">'divide'</span>: <span class="cm-keyword">function</span> (<span class="cm-def">a</span>, <span class="cm-def">b</span>) {
        <span class="cm-keyword">return</span> <span class="cm-variable-2">a</span><span class="cm-operator">/</span><span class="cm-variable-2">b</span>;
    }
  }

  <span class="cm-keyword">return</span> <span class="cm-variable-2">mathFun</span>[<span class="cm-variable-2">operator</span>](<span class="cm-variable-2">a</span>,<span class="cm-variable-2">b</span>);
}</code></pre><div data-controller="solution-variations" data-solution-variations-group-id-value="583f3e44c68d96668c0000e1" data-solution-variations-review-id-value="583f1c66d622c07b55000059"><div class="mt-4 mb-0 px-1 text-ui-text-lc flex justify-between"><div>2 similar code variations are grouped with this one<i class="icon-moon-info ml-1" data-tippy-content="We group similar results by ignoring whitespace, linebreaks and very minor character variations." data-tippy-placement="bottom"></i></div><button class="hidden sm:block" data-action="solution-variations#toggle">Show Variations</button></div><div class="has-top-border mt-4 pt-4 is-hidden space-y-4" data-solution-variations-target="container"></div></div><div class="js-compare is-hidden"></div><div class="clearfix"></div>
<div class="comments-list-component" data-view-data="{&quot;comments&quot;:[{&quot;id&quot;:&quot;621c3b65de40c300554e443e&quot;,&quot;masked&quot;:null,&quot;masked_by_id&quot;:null,&quot;votes_score&quot;:1,&quot;user_id&quot;:&quot;6137e0d30307db0007033274&quot;,&quot;edit_count&quot;:0,&quot;label&quot;:null,&quot;allowed_resolver_ids&quot;:[&quot;6137e0d30307db0007033274&quot;],&quot;state&quot;:&quot;fresh&quot;,&quot;is_resolvable&quot;:false,&quot;state_text&quot;:&quot;new&quot;,&quot;state_summary&quot;:&quot;Open&quot;,&quot;type&quot;:&quot;&quot;,&quot;label_text&quot;:null,&quot;markdown&quot;:&quot;can be simplfied by just storing value and then accessing the operator prop of the obj&quot;,&quot;markdown_html&quot;:&quot;\u003cp\u003ecan be simplfied by just storing value and then accessing the operator prop of the obj\u003c/p\u003e&quot;,&quot;created_at&quot;:1646017381,&quot;created_at_datetime&quot;:&quot;2022-02-28T03:03:01.477+0000&quot;,&quot;nest_level&quot;:0,&quot;collapsed&quot;:false,&quot;total_comments&quot;:0,&quot;hash&quot;:&quot;#621c3b65de40c300554e443e&quot;,&quot;user&quot;:{&quot;id&quot;:&quot;6137e0d30307db0007033274&quot;,&quot;username&quot;:&quot;Khezzy&quot;,&quot;rank_name&quot;:&quot;4 kyu&quot;,&quot;profile_path&quot;:&quot;/users/Khezzy&quot;,&quot;avatar_tag&quot;:&quot;\u003cimg title=\&quot;Khezzy\&quot; data-tippy-content=\&quot;Khezzy\&quot; data-tippy-placement=\&quot;bottom\&quot; alt=\&quot;Khezzy Avatar\&quot; src=\&quot;https://avatars.githubusercontent.com/u/75917863?s=100\&quot; /\u003e&quot;,&quot;is_admin&quot;:false,&quot;is_mod&quot;:false,&quot;is_mender&quot;:false},&quot;comments&quot;:[]}],&quot;hideSpoilers&quot;:false,&quot;allowedLabels&quot;:[],&quot;totalComments&quot;:1,&quot;spoilerFlag&quot;:true,&quot;commentUrl&quot;:&quot;/kata/reviews/583f1c66d622c07b55000059/groups/583f3e44c68d96668c0000e1/comments/%7Bcomment_id%7D&quot;,&quot;voteUrl&quot;:&quot;/kata/reviews/583f1c66d622c07b55000059/groups/583f3e44c68d96668c0000e1/comments/%7BrefId%7D/vote/%7Bvalue%7D&quot;,&quot;userVotesUrl&quot;:&quot;/kata/reviews/583f1c66d622c07b55000059/groups/583f3e44c68d96668c0000e1/comments/user_votes&quot;,&quot;labelGroups&quot;:[{&quot;name&quot;:&quot;Comments&quot;,&quot;label&quot;:null,&quot;count&quot;:1}],&quot;stateGroups&quot;:[{&quot;name&quot;:&quot;Open&quot;,&quot;count&quot;:1}]}">
<div class="comments" data-comment-url="/kata/reviews/583f1c66d622c07b55000059/groups/583f3e44c68d96668c0000e1/comments/%7Bcomment_id%7D">
<ul class="piped-text mt-4 has-keyword-tags">
<li>
<ul class="vote-labels" data-vote-name="solution-solution_group" data-vote-ref-id="583f3e44c68d96668c0000e1"><li data-tippy-content="Vote this solution as a best practice. Best practice solutions tend to be a good balance of performance, readability and maintainability." data-tippy-placement="bottom"><a class="vote-label" data-label="best_practice"><i class="icon-moon-up "></i>Best Practices<span>17</span></a></li><li data-tippy-content="Vote this solution as being clever. Clever solutions tend to be very creative or make use of obscure language features. They usually are not code that you would want to put into production." data-tippy-placement="bottom"><a class="vote-label" data-label="clever"><i class="icon-moon-up "></i>Clever<span>27</span></a></li></ul>
</li>
<li>
<a class="js-show-comments">
<i class="icon-moon-comments "></i>
<span>1</span>
</a>
</li>
<li><a href="https://www.codewars.com/kumite/new?group_id=583f3e44c68d96668c0000e1&amp;review_id=583f1c66d622c07b55000059"><span>Fork</span></a></li><li data-bind-if="$solution"><a class="js-compare-solutions" data-tippy-content="Compare this solution to your own" data-tippy-placement="bottom"><i class="icon-moon-compare "></i>Compare with your solution</a></li><li><a href="https://www.codewars.com/kata/reviews/583f1c66d622c07b55000059/groups/583f3e44c68d96668c0000e1">Link</a></li>
</ul>
<div class="clearfix"></div>
<!--v-if-->
<div class="clearfix"></div>
<ul class="comments-list is-hidden" user-votes-url="/kata/reviews/583f1c66d622c07b55000059/groups/583f3e44c68d96668c0000e1/comments/user_votes">
<li class="new-comment" data-bind-class="new_comment_class">

<div>
<figure>
<a href="https://www.codewars.com/users/GreenEagleKing">
<div><img title="GreenEagleKing" data-tippy-content="GreenEagleKing" data-tippy-placement="bottom" alt="GreenEagleKing Avatar" src="./110722-CW_files/101405438"></div>
</a>
</figure>
<div class="comment-content">
<div class="preedit px-1">
<input type="text" class="form-input block w-64 rounded-none rounded-md sm:text-sm dark:bg-gray-800 focus:outline-none focus:ring-cgray-300 dark:focus:ring-cgray-600 focus:border-cgray-300 dark:focus:border-cgray-600 border-gray-300 dark:border-gray-700" placeholder="Leave feedback...">
</div>
<div class="clearfix mb-4"></div>
</div>
<div class="clearfix"></div>
</div>



</li>
<li class="comment mt-6" data-label="no-label" data-state="Open" data-username="Khezzy" id="621c3b65de40c300554e443e">

<div>
<figure>
<a href="https://www.codewars.com/users/Khezzy">
<div><img title="Khezzy" data-tippy-content="Khezzy" data-tippy-placement="bottom" alt="Khezzy Avatar" src="./110722-CW_files/75917863"></div>
</a>
</figure>
<div class="comment-content">
<div>
<h6 class="mt-4 mb-2">
<ul class="bulleted-text">
<li>
<span class="bullet"></span>
<a href="https://www.codewars.com/users/Khezzy">Khezzy</a>
<!--v-if-->


<span class="ml-1">(4 kyu)</span>
</li>
<li>
<span class="bullet"></span>
<a class="text-ui-text-lc hover:underline" data-turbolinks="false" href="https://www.codewars.com/kata/583f158ea20cfcbeb400000a/solutions/javascript#621c3b65de40c300554e443e">
<time-ago lang="en" datetime="2022-02-28T03:03:01.477+0000" title="28 Feb 2022, 03:03 GMT">4 months ago</time-ago>
</a>
</li>
<!--v-if-->
<!--v-if-->
</ul>
</h6>
<div class="comment-markdown markdown prose max-w-none p-1 overflow-x-auto" data-markdown="can be simplfied by just storing value and then accessing the operator prop of the obj"><p>can be simplfied by just storing value and then accessing the operator prop of the obj</p>
</div>


<div>
<ul class="comment-actions bulleted-text">
<li>
<span class="voter">
<span class="score">1</span>
<span class="vote">
<a class="up_vote" data-tippy-content="Up vote" data-tippy-placement="bottom">
<i class="icon-moon-up "></i>
</a>
</span>
<span class="spacer">|</span>
<span class="vote">
<a class="down_vote" data-tippy-content="Down vote" data-tippy-placement="bottom">
<i class="icon-moon-down "></i>
</a>
</span>
</span>
</li>
<li>
<span class="bullet"></span>
<a>
<i class="icon-moon-reply "></i>Reply
</a>
</li>
<!--v-if-->
<li>
<span class="bullet"></span>
<a>
<i class="icon-moon-object "></i>View Solution
</a>
</li>
<!--v-if-->

<li class="is-auto-hidden">
<span class="bullet"></span>
<a data-tippy-placement="bottom" data-tippy-content="Flag this comment as a spoiler. It will be hidden from users who have not yet solved the kata.">
<i class="icon-moon-flag "></i>
<span>Spoiler</span>
</a>
</li>
<!--v-if-->
</ul>
<div class="clearfix"></div>
<!--v-if-->
<!--v-if-->
</div>
</div>
<!--v-if-->
<div class="nested-comments">
<ul class="comments-list">

<!--v-if-->
</ul>
</div>
<ul class="comment-actions is-auto-hidden bulleted-text" style="display: none;">
<li>
<a><i class="icon-moon-reply "></i>Reply</a>
</li>
</ul>
</div>
</div>

</li>
</ul>
</div>
<div class="clearfix"></div>
</div>
</li><li class="js-result-group" data-controller="solution-group" data-solution-group-group-id-value="583f21dbe8eb88822d00005c" data-solution-group-review-id-value="583f1c66d622c07b55000059" id="583f21dbe8eb88822d00005c"><h6 class="solution-group-users-list my-4"><i class="icon-moon-users "></i><a class="font-semibold" href="https://www.codewars.com/users/gkucmierz">gkucmierz</a><span>, </span><a href="https://www.codewars.com/users/mouthoff862">mouthoff862</a><span>, </span><a href="https://www.codewars.com/users/jaafer">jaafer</a><div class="clearfix"></div></h6><pre class="p-2 overflow-x-auto"><code data-language="javascript"><span class="cm-keyword">function</span> <span class="cm-def">arithmetic</span>(<span class="cm-def">a</span>, <span class="cm-def">b</span>, <span class="cm-def">op</span>){
  <span class="cm-keyword">return</span> ({
    <span class="cm-string cm-property">'m'</span>: (<span class="cm-def">a</span>, <span class="cm-def">b</span>) <span class="cm-operator">=&gt;</span> <span class="cm-variable-2">a</span><span class="cm-operator">*</span><span class="cm-variable-2">b</span>,
    <span class="cm-string cm-property">'d'</span>: (<span class="cm-def">a</span>, <span class="cm-def">b</span>) <span class="cm-operator">=&gt;</span> <span class="cm-variable-2">a</span><span class="cm-operator">/</span><span class="cm-variable-2">b</span>,
    <span class="cm-string cm-property">'a'</span>: (<span class="cm-def">a</span>, <span class="cm-def">b</span>) <span class="cm-operator">=&gt;</span> <span class="cm-variable-2">a</span><span class="cm-operator">+</span><span class="cm-variable-2">b</span>,
    <span class="cm-string cm-property">'s'</span>: (<span class="cm-def">a</span>, <span class="cm-def">b</span>) <span class="cm-operator">=&gt;</span> <span class="cm-variable-2">a</span><span class="cm-operator">-</span><span class="cm-variable-2">b</span>
  })[<span class="cm-variable-2">op</span>[<span class="cm-number">0</span>]](<span class="cm-variable-2">a</span>, <span class="cm-variable-2">b</span>);
}</code></pre><div data-controller="solution-variations" data-solution-variations-group-id-value="583f21dbe8eb88822d00005c" data-solution-variations-review-id-value="583f1c66d622c07b55000059"><div class="mt-4 mb-0 px-1 text-ui-text-lc flex justify-between"><div>1 similar code variation is grouped with this one<i class="icon-moon-info ml-1" data-tippy-content="We group similar results by ignoring whitespace, linebreaks and very minor character variations." data-tippy-placement="bottom"></i></div><button class="hidden sm:block" data-action="solution-variations#toggle">Show Variations</button></div><div class="has-top-border mt-4 pt-4 is-hidden space-y-4" data-solution-variations-target="container"></div></div><div class="js-compare is-hidden"></div><div class="clearfix"></div>
<div class="comments-list-component" data-view-data="{&quot;comments&quot;:[],&quot;hideSpoilers&quot;:false,&quot;allowedLabels&quot;:[],&quot;totalComments&quot;:0,&quot;spoilerFlag&quot;:true,&quot;commentUrl&quot;:&quot;/kata/reviews/583f1c66d622c07b55000059/groups/583f21dbe8eb88822d00005c/comments/%7Bcomment_id%7D&quot;,&quot;voteUrl&quot;:&quot;/kata/reviews/583f1c66d622c07b55000059/groups/583f21dbe8eb88822d00005c/comments/%7BrefId%7D/vote/%7Bvalue%7D&quot;,&quot;userVotesUrl&quot;:&quot;/kata/reviews/583f1c66d622c07b55000059/groups/583f21dbe8eb88822d00005c/comments/user_votes&quot;,&quot;labelGroups&quot;:[],&quot;stateGroups&quot;:[]}">
<div class="comments" data-comment-url="/kata/reviews/583f1c66d622c07b55000059/groups/583f21dbe8eb88822d00005c/comments/%7Bcomment_id%7D">
<ul class="piped-text mt-4 has-keyword-tags">
<li>
<ul class="vote-labels" data-vote-name="solution-solution_group" data-vote-ref-id="583f21dbe8eb88822d00005c"><li data-tippy-content="Vote this solution as a best practice. Best practice solutions tend to be a good balance of performance, readability and maintainability." data-tippy-placement="bottom"><a class="vote-label" data-label="best_practice"><i class="icon-moon-up "></i>Best Practices<span>11</span></a></li><li data-tippy-content="Vote this solution as being clever. Clever solutions tend to be very creative or make use of obscure language features. They usually are not code that you would want to put into production." data-tippy-placement="bottom"><a class="vote-label" data-label="clever"><i class="icon-moon-up "></i>Clever<span>38</span></a></li></ul>
</li>
<li>
<a class="js-show-comments">
<i class="icon-moon-comments "></i>
<span>0</span>
</a>
</li>
<li><a href="https://www.codewars.com/kumite/new?group_id=583f21dbe8eb88822d00005c&amp;review_id=583f1c66d622c07b55000059"><span>Fork</span></a></li><li data-bind-if="$solution"><a class="js-compare-solutions" data-tippy-content="Compare this solution to your own" data-tippy-placement="bottom"><i class="icon-moon-compare "></i>Compare with your solution</a></li><li><a href="https://www.codewars.com/kata/reviews/583f1c66d622c07b55000059/groups/583f21dbe8eb88822d00005c">Link</a></li>
</ul>
<div class="clearfix"></div>
<!--v-if-->
<div class="clearfix"></div>
<ul class="comments-list is-hidden" user-votes-url="/kata/reviews/583f1c66d622c07b55000059/groups/583f21dbe8eb88822d00005c/comments/user_votes">
<li class="new-comment" data-bind-class="new_comment_class">

<div>
<figure>
<a href="https://www.codewars.com/users/GreenEagleKing">
<div><img title="GreenEagleKing" data-tippy-content="GreenEagleKing" data-tippy-placement="bottom" alt="GreenEagleKing Avatar" src="./110722-CW_files/101405438"></div>
</a>
</figure>
<div class="comment-content">
<div class="preedit px-1">
<input type="text" class="form-input block w-64 rounded-none rounded-md sm:text-sm dark:bg-gray-800 focus:outline-none focus:ring-cgray-300 dark:focus:ring-cgray-600 focus:border-cgray-300 dark:focus:border-cgray-600 border-gray-300 dark:border-gray-700" placeholder="Leave feedback...">
</div>
<div class="clearfix mb-4"></div>
</div>
<div class="clearfix"></div>
</div>



</li>

</ul>
</div>
<div class="clearfix"></div>
</div>
</li><li class="js-result-group" data-controller="solution-group" data-solution-group-group-id-value="5d6f85f46500fd00013d7973" data-solution-group-review-id-value="583f1c66d622c07b55000059" id="5d6f85f46500fd00013d7973"><h6 class="solution-group-users-list my-4"><i class="icon-moon-users "></i><a class="font-semibold" href="https://www.codewars.com/users/aeroluxx">aeroluxx</a><span>, </span><a href="https://www.codewars.com/users/Mona_Jeddi">Mona_Jeddi</a><span>, </span><a href="https://www.codewars.com/users/PavelM1988">PavelM1988</a><span>, </span><a href="https://www.codewars.com/users/CognitivePrimate">CognitivePrimate</a><span>, </span><a href="https://www.codewars.com/users/Xofrio">Xofrio</a><span>, </span><a href="https://www.codewars.com/users/SiarheiBalt">SiarheiBalt</a><span>, </span><a href="https://www.codewars.com/users/asma%20gharbi">asma gharbi</a><span>, </span><a href="https://www.codewars.com/users/FakhriK90">FakhriK90</a><div class="clearfix"></div></h6><pre class="p-2 overflow-x-auto"><code data-language="javascript"><span class="cm-keyword">const</span> <span class="cm-def">arithmetic</span> <span class="cm-operator">=</span> (<span class="cm-def">a</span>, <span class="cm-def">b</span>, <span class="cm-def">operator</span>) <span class="cm-operator">=&gt;</span> {
 <span class="cm-keyword">return</span>  ( 
   <span class="cm-variable-2">operator</span> <span class="cm-operator">===</span> <span class="cm-string">"add"</span> <span class="cm-operator">?</span> <span class="cm-variable-2">a</span> <span class="cm-operator">+</span> <span class="cm-variable-2">b</span> : <span class="cm-variable-2">operator</span> <span class="cm-operator">===</span> <span class="cm-string">"subtract"</span> <span class="cm-operator">?</span> <span class="cm-variable-2">a</span> <span class="cm-operator">-</span> <span class="cm-variable-2">b</span> : <span class="cm-variable-2">operator</span> <span class="cm-operator">===</span> <span class="cm-string">"multiply"</span> <span class="cm-operator">?</span> <span class="cm-variable-2">a</span> <span class="cm-operator">*</span> <span class="cm-variable-2">b</span> : <span class="cm-variable-2">a</span> <span class="cm-operator">/</span> <span class="cm-variable-2">b</span>
 )
}</code></pre><div data-controller="solution-variations" data-solution-variations-group-id-value="5d6f85f46500fd00013d7973" data-solution-variations-review-id-value="583f1c66d622c07b55000059"><div class="mt-4 mb-0 px-1 text-ui-text-lc flex justify-between"><div>4 similar code variations are grouped with this one<i class="icon-moon-info ml-1" data-tippy-content="We group similar results by ignoring whitespace, linebreaks and very minor character variations." data-tippy-placement="bottom"></i></div><button class="hidden sm:block" data-action="solution-variations#toggle">Show Variations</button></div><div class="has-top-border mt-4 pt-4 is-hidden space-y-4" data-solution-variations-target="container"></div></div><div class="js-compare is-hidden"></div><div class="clearfix"></div>
<div class="comments-list-component" data-view-data="{&quot;comments&quot;:[],&quot;hideSpoilers&quot;:false,&quot;allowedLabels&quot;:[],&quot;totalComments&quot;:0,&quot;spoilerFlag&quot;:true,&quot;commentUrl&quot;:&quot;/kata/reviews/583f1c66d622c07b55000059/groups/5d6f85f46500fd00013d7973/comments/%7Bcomment_id%7D&quot;,&quot;voteUrl&quot;:&quot;/kata/reviews/583f1c66d622c07b55000059/groups/5d6f85f46500fd00013d7973/comments/%7BrefId%7D/vote/%7Bvalue%7D&quot;,&quot;userVotesUrl&quot;:&quot;/kata/reviews/583f1c66d622c07b55000059/groups/5d6f85f46500fd00013d7973/comments/user_votes&quot;,&quot;labelGroups&quot;:[],&quot;stateGroups&quot;:[]}">
<div class="comments" data-comment-url="/kata/reviews/583f1c66d622c07b55000059/groups/5d6f85f46500fd00013d7973/comments/%7Bcomment_id%7D">
<ul class="piped-text mt-4 has-keyword-tags">
<li>
<ul class="vote-labels" data-vote-name="solution-solution_group" data-vote-ref-id="5d6f85f46500fd00013d7973"><li data-tippy-content="Vote this solution as a best practice. Best practice solutions tend to be a good balance of performance, readability and maintainability." data-tippy-placement="bottom"><a class="vote-label" data-label="best_practice"><i class="icon-moon-up "></i>Best Practices<span>10</span></a></li><li data-tippy-content="Vote this solution as being clever. Clever solutions tend to be very creative or make use of obscure language features. They usually are not code that you would want to put into production." data-tippy-placement="bottom"><a class="vote-label" data-label="clever"><i class="icon-moon-up "></i>Clever<span>9</span></a></li></ul>
</li>
<li>
<a class="js-show-comments">
<i class="icon-moon-comments "></i>
<span>0</span>
</a>
</li>
<li><a href="https://www.codewars.com/kumite/new?group_id=5d6f85f46500fd00013d7973&amp;review_id=583f1c66d622c07b55000059"><span>Fork</span></a></li><li data-bind-if="$solution"><a class="js-compare-solutions" data-tippy-content="Compare this solution to your own" data-tippy-placement="bottom"><i class="icon-moon-compare "></i>Compare with your solution</a></li><li><a href="https://www.codewars.com/kata/reviews/583f1c66d622c07b55000059/groups/5d6f85f46500fd00013d7973">Link</a></li>
</ul>
<div class="clearfix"></div>
<!--v-if-->
<div class="clearfix"></div>
<ul class="comments-list is-hidden" user-votes-url="/kata/reviews/583f1c66d622c07b55000059/groups/5d6f85f46500fd00013d7973/comments/user_votes">
<li class="new-comment" data-bind-class="new_comment_class">

<div>
<figure>
<a href="https://www.codewars.com/users/GreenEagleKing">
<div><img title="GreenEagleKing" data-tippy-content="GreenEagleKing" data-tippy-placement="bottom" alt="GreenEagleKing Avatar" src="./110722-CW_files/101405438"></div>
</a>
</figure>
<div class="comment-content">
<div class="preedit px-1">
<input type="text" class="form-input block w-64 rounded-none rounded-md sm:text-sm dark:bg-gray-800 focus:outline-none focus:ring-cgray-300 dark:focus:ring-cgray-600 focus:border-cgray-300 dark:focus:border-cgray-600 border-gray-300 dark:border-gray-700" placeholder="Leave feedback...">
</div>
<div class="clearfix mb-4"></div>
</div>
<div class="clearfix"></div>
</div>



</li>

</ul>
</div>
<div class="clearfix"></div>
</div>
</li><li class="js-result-group" data-controller="solution-group" data-solution-group-group-id-value="590917ce852daf1d9c0002a3" data-solution-group-review-id-value="583f1c66d622c07b55000059" id="590917ce852daf1d9c0002a3"><h6 class="solution-group-users-list my-4"><i class="icon-moon-users "></i><a class="font-semibold" href="https://www.codewars.com/users/ianbuchanan">ianbuchanan</a><span>, </span><a href="https://www.codewars.com/users/wassim.khleyfi">wassim.khleyfi</a><span>, </span><a href="https://www.codewars.com/users/riadh_khaterchi">riadh_khaterchi</a><div class="clearfix"></div></h6><pre class="p-2 overflow-x-auto"><code data-language="javascript"><span class="cm-keyword">function</span> <span class="cm-def">arithmetic</span>(<span class="cm-def">a</span>, <span class="cm-def">b</span>, <span class="cm-def">operator</span>){
  <span class="cm-keyword">return</span> <span class="cm-variable">ops</span>[<span class="cm-variable-2">operator</span>](<span class="cm-variable-2">a</span>, <span class="cm-variable-2">b</span>);
}

<span class="cm-keyword">const</span> <span class="cm-def">ops</span> <span class="cm-operator">=</span> {
  <span class="cm-string cm-property">"add"</span>      : (<span class="cm-def">a</span>, <span class="cm-def">b</span>) <span class="cm-operator">=&gt;</span> <span class="cm-variable-2">a</span> <span class="cm-operator">+</span> <span class="cm-variable-2">b</span>,
  <span class="cm-string cm-property">"subtract"</span> : (<span class="cm-def">a</span>, <span class="cm-def">b</span>) <span class="cm-operator">=&gt;</span> <span class="cm-variable-2">a</span> <span class="cm-operator">-</span> <span class="cm-variable-2">b</span>,
  <span class="cm-string cm-property">"multiply"</span> : (<span class="cm-def">a</span>, <span class="cm-def">b</span>) <span class="cm-operator">=&gt;</span> <span class="cm-variable-2">a</span> <span class="cm-operator">*</span> <span class="cm-variable-2">b</span>,
  <span class="cm-string cm-property">"divide"</span>   : (<span class="cm-def">a</span>, <span class="cm-def">b</span>) <span class="cm-operator">=&gt;</span> <span class="cm-variable-2">a</span> <span class="cm-operator">/</span> <span class="cm-variable-2">b</span>
}</code></pre><div data-controller="solution-variations" data-solution-variations-group-id-value="590917ce852daf1d9c0002a3" data-solution-variations-review-id-value="583f1c66d622c07b55000059"><div class="mt-4 mb-0 px-1 text-ui-text-lc flex justify-between"><div>1 similar code variation is grouped with this one<i class="icon-moon-info ml-1" data-tippy-content="We group similar results by ignoring whitespace, linebreaks and very minor character variations." data-tippy-placement="bottom"></i></div><button class="hidden sm:block" data-action="solution-variations#toggle">Show Variations</button></div><div class="has-top-border mt-4 pt-4 is-hidden space-y-4" data-solution-variations-target="container"></div></div><div class="js-compare is-hidden"></div><div class="clearfix"></div>
<div class="comments-list-component" data-view-data="{&quot;comments&quot;:[],&quot;hideSpoilers&quot;:false,&quot;allowedLabels&quot;:[],&quot;totalComments&quot;:0,&quot;spoilerFlag&quot;:true,&quot;commentUrl&quot;:&quot;/kata/reviews/583f1c66d622c07b55000059/groups/590917ce852daf1d9c0002a3/comments/%7Bcomment_id%7D&quot;,&quot;voteUrl&quot;:&quot;/kata/reviews/583f1c66d622c07b55000059/groups/590917ce852daf1d9c0002a3/comments/%7BrefId%7D/vote/%7Bvalue%7D&quot;,&quot;userVotesUrl&quot;:&quot;/kata/reviews/583f1c66d622c07b55000059/groups/590917ce852daf1d9c0002a3/comments/user_votes&quot;,&quot;labelGroups&quot;:[],&quot;stateGroups&quot;:[]}">
<div class="comments" data-comment-url="/kata/reviews/583f1c66d622c07b55000059/groups/590917ce852daf1d9c0002a3/comments/%7Bcomment_id%7D">
<ul class="piped-text mt-4 has-keyword-tags">
<li>
<ul class="vote-labels" data-vote-name="solution-solution_group" data-vote-ref-id="590917ce852daf1d9c0002a3"><li data-tippy-content="Vote this solution as a best practice. Best practice solutions tend to be a good balance of performance, readability and maintainability." data-tippy-placement="bottom"><a class="vote-label" data-label="best_practice"><i class="icon-moon-up "></i>Best Practices<span>9</span></a></li><li data-tippy-content="Vote this solution as being clever. Clever solutions tend to be very creative or make use of obscure language features. They usually are not code that you would want to put into production." data-tippy-placement="bottom"><a class="vote-label" data-label="clever"><i class="icon-moon-up "></i>Clever<span>7</span></a></li></ul>
</li>
<li>
<a class="js-show-comments">
<i class="icon-moon-comments "></i>
<span>0</span>
</a>
</li>
<li><a href="https://www.codewars.com/kumite/new?group_id=590917ce852daf1d9c0002a3&amp;review_id=583f1c66d622c07b55000059"><span>Fork</span></a></li><li data-bind-if="$solution"><a class="js-compare-solutions" data-tippy-content="Compare this solution to your own" data-tippy-placement="bottom"><i class="icon-moon-compare "></i>Compare with your solution</a></li><li><a href="https://www.codewars.com/kata/reviews/583f1c66d622c07b55000059/groups/590917ce852daf1d9c0002a3">Link</a></li>
</ul>
<div class="clearfix"></div>
<!--v-if-->
<div class="clearfix"></div>
<ul class="comments-list is-hidden" user-votes-url="/kata/reviews/583f1c66d622c07b55000059/groups/590917ce852daf1d9c0002a3/comments/user_votes">
<li class="new-comment" data-bind-class="new_comment_class">

<div>
<figure>
<a href="https://www.codewars.com/users/GreenEagleKing">
<div><img title="GreenEagleKing" data-tippy-content="GreenEagleKing" data-tippy-placement="bottom" alt="GreenEagleKing Avatar" src="./110722-CW_files/101405438"></div>
</a>
</figure>
<div class="comment-content">
<div class="preedit px-1">
<input type="text" class="form-input block w-64 rounded-none rounded-md sm:text-sm dark:bg-gray-800 focus:outline-none focus:ring-cgray-300 dark:focus:ring-cgray-600 focus:border-cgray-300 dark:focus:border-cgray-600 border-gray-300 dark:border-gray-700" placeholder="Leave feedback...">
</div>
<div class="clearfix mb-4"></div>
</div>
<div class="clearfix"></div>
</div>



</li>

</ul>
</div>
<div class="clearfix"></div>
</div>
</li><li class="js-result-group" data-controller="solution-group" data-solution-group-group-id-value="5ddaead62631250001c0f16c" data-solution-group-review-id-value="583f1c66d622c07b55000059" id="5ddaead62631250001c0f16c"><h6 class="solution-group-users-list my-4"><i class="icon-moon-users "></i><a class="font-semibold" href="https://www.codewars.com/users/catiaantunes8">catiaantunes8</a><span>, </span><a href="https://www.codewars.com/users/khelil23">khelil23</a><span>, </span><a href="https://www.codewars.com/users/admiralself">admiralself</a><span>, </span><a href="https://www.codewars.com/users/zwebigaith">zwebigaith</a><div class="clearfix"></div></h6><pre class="p-2 overflow-x-auto"><code data-language="javascript"><span class="cm-keyword">function</span> <span class="cm-def">arithmetic</span>(<span class="cm-def">a</span>, <span class="cm-def">b</span>, <span class="cm-def">operator</span>){
  <span class="cm-keyword">const</span> <span class="cm-def">operadores</span> <span class="cm-operator">=</span> {
    <span class="cm-property">add</span>: <span class="cm-variable-2">a</span> <span class="cm-operator">+</span> <span class="cm-variable-2">b</span>,
    <span class="cm-property">subtract</span>: <span class="cm-variable-2">a</span> <span class="cm-operator">-</span> <span class="cm-variable-2">b</span>,
    <span class="cm-property">multiply</span>: <span class="cm-variable-2">a</span> <span class="cm-operator">*</span> <span class="cm-variable-2">b</span>,
    <span class="cm-property">divide</span>: <span class="cm-variable-2">a</span> <span class="cm-operator">/</span> <span class="cm-variable-2">b</span>
  }
  <span class="cm-keyword">return</span> <span class="cm-variable-2">operadores</span>[<span class="cm-variable-2">operator</span>];
}</code></pre><div class="js-compare is-hidden"></div><div class="clearfix"></div>
<div class="comments-list-component" data-view-data="{&quot;comments&quot;:[],&quot;hideSpoilers&quot;:false,&quot;allowedLabels&quot;:[],&quot;totalComments&quot;:0,&quot;spoilerFlag&quot;:true,&quot;commentUrl&quot;:&quot;/kata/reviews/583f1c66d622c07b55000059/groups/5ddaead62631250001c0f16c/comments/%7Bcomment_id%7D&quot;,&quot;voteUrl&quot;:&quot;/kata/reviews/583f1c66d622c07b55000059/groups/5ddaead62631250001c0f16c/comments/%7BrefId%7D/vote/%7Bvalue%7D&quot;,&quot;userVotesUrl&quot;:&quot;/kata/reviews/583f1c66d622c07b55000059/groups/5ddaead62631250001c0f16c/comments/user_votes&quot;,&quot;labelGroups&quot;:[],&quot;stateGroups&quot;:[]}">
<div class="comments" data-comment-url="/kata/reviews/583f1c66d622c07b55000059/groups/5ddaead62631250001c0f16c/comments/%7Bcomment_id%7D">
<ul class="piped-text mt-4 has-keyword-tags">
<li>
<ul class="vote-labels" data-vote-name="solution-solution_group" data-vote-ref-id="5ddaead62631250001c0f16c"><li data-tippy-content="Vote this solution as a best practice. Best practice solutions tend to be a good balance of performance, readability and maintainability." data-tippy-placement="bottom"><a class="vote-label" data-label="best_practice"><i class="icon-moon-up "></i>Best Practices<span>8</span></a></li><li data-tippy-content="Vote this solution as being clever. Clever solutions tend to be very creative or make use of obscure language features. They usually are not code that you would want to put into production." data-tippy-placement="bottom"><a class="vote-label" data-label="clever"><i class="icon-moon-up "></i>Clever<span>2</span></a></li></ul>
</li>
<li>
<a class="js-show-comments">
<i class="icon-moon-comments "></i>
<span>0</span>
</a>
</li>
<li><a href="https://www.codewars.com/kumite/new?group_id=5ddaead62631250001c0f16c&amp;review_id=583f1c66d622c07b55000059"><span>Fork</span></a></li><li data-bind-if="$solution"><a class="js-compare-solutions" data-tippy-content="Compare this solution to your own" data-tippy-placement="bottom"><i class="icon-moon-compare "></i>Compare with your solution</a></li><li><a href="https://www.codewars.com/kata/reviews/583f1c66d622c07b55000059/groups/5ddaead62631250001c0f16c">Link</a></li>
</ul>
<div class="clearfix"></div>
<!--v-if-->
<div class="clearfix"></div>
<ul class="comments-list is-hidden" user-votes-url="/kata/reviews/583f1c66d622c07b55000059/groups/5ddaead62631250001c0f16c/comments/user_votes">
<li class="new-comment" data-bind-class="new_comment_class">

<div>
<figure>
<a href="https://www.codewars.com/users/GreenEagleKing">
<div><img title="GreenEagleKing" data-tippy-content="GreenEagleKing" data-tippy-placement="bottom" alt="GreenEagleKing Avatar" src="./110722-CW_files/101405438"></div>
</a>
</figure>
<div class="comment-content">
<div class="preedit px-1">
<input type="text" class="form-input block w-64 rounded-none rounded-md sm:text-sm dark:bg-gray-800 focus:outline-none focus:ring-cgray-300 dark:focus:ring-cgray-600 focus:border-cgray-300 dark:focus:border-cgray-600 border-gray-300 dark:border-gray-700" placeholder="Leave feedback...">
</div>
<div class="clearfix mb-4"></div>
</div>
<div class="clearfix"></div>
</div>



</li>

</ul>
</div>
<div class="clearfix"></div>
</div>
</li><li class="js-result-group" data-controller="solution-group" data-solution-group-group-id-value="5843b2a3c5c9b0f1a7000140" data-solution-group-review-id-value="583f1c66d622c07b55000059" id="5843b2a3c5c9b0f1a7000140"><h6 class="solution-group-users-list my-4"><i class="icon-moon-user "></i><a class="font-semibold" href="https://www.codewars.com/users/pwnzor1337">pwnzor1337</a><div class="clearfix"></div></h6><pre class="p-2 overflow-x-auto"><code data-language="javascript"><span class="cm-keyword">function</span> <span class="cm-def">arithmetic</span>(<span class="cm-def">a</span>, <span class="cm-def">b</span>, <span class="cm-def">operator</span>){
  <span class="cm-keyword">var</span> <span class="cm-def">firstLetter</span> <span class="cm-operator">=</span> <span class="cm-variable-2">operator</span>.<span class="cm-property">substring</span>(<span class="cm-number">0</span>,<span class="cm-number">1</span>);
  <span class="cm-keyword">switch</span> (<span class="cm-variable-2">firstLetter</span>) {
    <span class="cm-keyword">case</span> <span class="cm-string">"a"</span>:
      <span class="cm-keyword">return</span> <span class="cm-variable-2">a</span> <span class="cm-operator">+</span> <span class="cm-variable-2">b</span>;
      <span class="cm-keyword">break</span>;
    <span class="cm-keyword">case</span> <span class="cm-string">"s"</span>:
      <span class="cm-keyword">return</span> <span class="cm-variable-2">a</span> <span class="cm-operator">-</span> <span class="cm-variable-2">b</span>;
      <span class="cm-keyword">break</span>;
    <span class="cm-keyword">case</span> <span class="cm-string">"m"</span>:
      <span class="cm-keyword">return</span> <span class="cm-variable-2">a</span> <span class="cm-operator">*</span> <span class="cm-variable-2">b</span>;
      <span class="cm-keyword">break</span>;
    <span class="cm-keyword">case</span> <span class="cm-string">"d"</span>:
      <span class="cm-keyword">return</span> <span class="cm-variable-2">a</span> <span class="cm-operator">/</span> <span class="cm-variable-2">b</span>;
    }
}</code></pre><div class="js-compare is-hidden"></div><div class="clearfix"></div>
<div class="comments-list-component" data-view-data="{&quot;comments&quot;:[],&quot;hideSpoilers&quot;:false,&quot;allowedLabels&quot;:[],&quot;totalComments&quot;:0,&quot;spoilerFlag&quot;:true,&quot;commentUrl&quot;:&quot;/kata/reviews/583f1c66d622c07b55000059/groups/5843b2a3c5c9b0f1a7000140/comments/%7Bcomment_id%7D&quot;,&quot;voteUrl&quot;:&quot;/kata/reviews/583f1c66d622c07b55000059/groups/5843b2a3c5c9b0f1a7000140/comments/%7BrefId%7D/vote/%7Bvalue%7D&quot;,&quot;userVotesUrl&quot;:&quot;/kata/reviews/583f1c66d622c07b55000059/groups/5843b2a3c5c9b0f1a7000140/comments/user_votes&quot;,&quot;labelGroups&quot;:[],&quot;stateGroups&quot;:[]}">
<div class="comments" data-comment-url="/kata/reviews/583f1c66d622c07b55000059/groups/5843b2a3c5c9b0f1a7000140/comments/%7Bcomment_id%7D">
<ul class="piped-text mt-4 has-keyword-tags">
<li>
<ul class="vote-labels" data-vote-name="solution-solution_group" data-vote-ref-id="5843b2a3c5c9b0f1a7000140"><li data-tippy-content="Vote this solution as a best practice. Best practice solutions tend to be a good balance of performance, readability and maintainability." data-tippy-placement="bottom"><a class="vote-label" data-label="best_practice"><i class="icon-moon-up "></i>Best Practices<span>4</span></a></li><li data-tippy-content="Vote this solution as being clever. Clever solutions tend to be very creative or make use of obscure language features. They usually are not code that you would want to put into production." data-tippy-placement="bottom"><a class="vote-label" data-label="clever"><i class="icon-moon-up "></i>Clever<span>6</span></a></li></ul>
</li>
<li>
<a class="js-show-comments">
<i class="icon-moon-comments "></i>
<span>0</span>
</a>
</li>
<li><a href="https://www.codewars.com/kumite/new?group_id=5843b2a3c5c9b0f1a7000140&amp;review_id=583f1c66d622c07b55000059"><span>Fork</span></a></li><li data-bind-if="$solution"><a class="js-compare-solutions" data-tippy-content="Compare this solution to your own" data-tippy-placement="bottom"><i class="icon-moon-compare "></i>Compare with your solution</a></li><li><a href="https://www.codewars.com/kata/reviews/583f1c66d622c07b55000059/groups/5843b2a3c5c9b0f1a7000140">Link</a></li>
</ul>
<div class="clearfix"></div>
<!--v-if-->
<div class="clearfix"></div>
<ul class="comments-list is-hidden" user-votes-url="/kata/reviews/583f1c66d622c07b55000059/groups/5843b2a3c5c9b0f1a7000140/comments/user_votes">
<li class="new-comment" data-bind-class="new_comment_class">

<div>
<figure>
<a href="https://www.codewars.com/users/GreenEagleKing">
<div><img title="GreenEagleKing" data-tippy-content="GreenEagleKing" data-tippy-placement="bottom" alt="GreenEagleKing Avatar" src="./110722-CW_files/101405438"></div>
</a>
</figure>
<div class="comment-content">
<div class="preedit px-1">
<input type="text" class="form-input block w-64 rounded-none rounded-md sm:text-sm dark:bg-gray-800 focus:outline-none focus:ring-cgray-300 dark:focus:ring-cgray-600 focus:border-cgray-300 dark:focus:border-cgray-600 border-gray-300 dark:border-gray-700" placeholder="Leave feedback...">
</div>
<div class="clearfix mb-4"></div>
</div>
<div class="clearfix"></div>
</div>



</li>

</ul>
</div>
<div class="clearfix"></div>
</div>
</li><li class="js-result-group" data-controller="solution-group" data-solution-group-group-id-value="583f3706e8eb88822d000126" data-solution-group-review-id-value="583f1c66d622c07b55000059" id="583f3706e8eb88822d000126"><h6 class="solution-group-users-list my-4"><i class="icon-moon-users "></i><a class="font-semibold" href="https://www.codewars.com/users/fredg124">fredg124</a><span>, </span><a href="https://www.codewars.com/users/alan2207">alan2207</a><span>, </span><a href="https://www.codewars.com/users/SamWS">SamWS</a><span>, </span><a href="https://www.codewars.com/users/YuriyTimashov">YuriyTimashov</a><span>, </span><a href="https://www.codewars.com/users/SaOleks">SaOleks</a><span>, </span><a href="https://www.codewars.com/users/mathodone">mathodone</a><span>, </span><a href="https://www.codewars.com/users/bobeyerjohnson">bobeyerjohnson</a><span>, </span><a href="https://www.codewars.com/users/IronSinew">IronSinew</a><span>, </span><a href="https://www.codewars.com/users/Twyn2">Twyn2</a><span>, </span><a href="https://www.codewars.com/users/chtic123">chtic123</a><span> (+ 1167)</span><div class="clearfix"></div></h6><pre class="p-2 overflow-x-auto"><code data-language="javascript"><span class="cm-keyword">function</span> <span class="cm-def">arithmetic</span>(<span class="cm-def">a</span>, <span class="cm-def">b</span>, <span class="cm-def">operator</span>){
  <span class="cm-keyword">switch</span>(<span class="cm-variable-2">operator</span>){
    <span class="cm-keyword">case</span> <span class="cm-string">"add"</span>: <span class="cm-keyword">return</span> <span class="cm-variable-2">a</span><span class="cm-operator">+</span><span class="cm-variable-2">b</span>; <span class="cm-keyword">break</span>;
    <span class="cm-keyword">case</span> <span class="cm-string">"subtract"</span>: <span class="cm-keyword">return</span> <span class="cm-variable-2">a</span><span class="cm-operator">-</span><span class="cm-variable-2">b</span>; <span class="cm-keyword">break</span>;
    <span class="cm-keyword">case</span> <span class="cm-string">"multiply"</span>: <span class="cm-keyword">return</span> <span class="cm-variable-2">a</span><span class="cm-operator">*</span><span class="cm-variable-2">b</span>; <span class="cm-keyword">break</span>;
    <span class="cm-keyword">case</span> <span class="cm-string">"divide"</span>: <span class="cm-keyword">return</span> <span class="cm-variable-2">a</span><span class="cm-operator">/</span><span class="cm-variable-2">b</span>; <span class="cm-keyword">break</span>;
  }
}</code></pre><div data-controller="solution-variations" data-solution-variations-group-id-value="583f3706e8eb88822d000126" data-solution-variations-review-id-value="583f1c66d622c07b55000059"><div class="mt-4 mb-0 px-1 text-ui-text-lc flex justify-between"><div>990 similar code variations are grouped with this one<i class="icon-moon-info ml-1" data-tippy-content="We group similar results by ignoring whitespace, linebreaks and very minor character variations." data-tippy-placement="bottom"></i></div><button class="hidden sm:block" data-action="solution-variations#toggle">Show Variations</button></div><div class="has-top-border mt-4 pt-4 is-hidden space-y-4" data-solution-variations-target="container"></div></div><div class="js-compare is-hidden"></div><div class="clearfix"></div>
<div class="comments-list-component" data-view-data="{&quot;comments&quot;:[],&quot;hideSpoilers&quot;:false,&quot;allowedLabels&quot;:[],&quot;totalComments&quot;:0,&quot;spoilerFlag&quot;:true,&quot;commentUrl&quot;:&quot;/kata/reviews/583f1c66d622c07b55000059/groups/583f3706e8eb88822d000126/comments/%7Bcomment_id%7D&quot;,&quot;voteUrl&quot;:&quot;/kata/reviews/583f1c66d622c07b55000059/groups/583f3706e8eb88822d000126/comments/%7BrefId%7D/vote/%7Bvalue%7D&quot;,&quot;userVotesUrl&quot;:&quot;/kata/reviews/583f1c66d622c07b55000059/groups/583f3706e8eb88822d000126/comments/user_votes&quot;,&quot;labelGroups&quot;:[],&quot;stateGroups&quot;:[]}">
<div class="comments" data-comment-url="/kata/reviews/583f1c66d622c07b55000059/groups/583f3706e8eb88822d000126/comments/%7Bcomment_id%7D">
<ul class="piped-text mt-4 has-keyword-tags">
<li>
<ul class="vote-labels" data-vote-name="solution-solution_group" data-vote-ref-id="583f3706e8eb88822d000126"><li data-tippy-content="Vote this solution as a best practice. Best practice solutions tend to be a good balance of performance, readability and maintainability." data-tippy-placement="bottom"><a class="vote-label" data-label="best_practice"><i class="icon-moon-up "></i>Best Practices<span>4</span></a></li><li data-tippy-content="Vote this solution as being clever. Clever solutions tend to be very creative or make use of obscure language features. They usually are not code that you would want to put into production." data-tippy-placement="bottom"><a class="vote-label" data-label="clever"><i class="icon-moon-up "></i>Clever<span>1</span></a></li></ul>
</li>
<li>
<a class="js-show-comments">
<i class="icon-moon-comments "></i>
<span>0</span>
</a>
</li>
<li><a href="https://www.codewars.com/kumite/new?group_id=583f3706e8eb88822d000126&amp;review_id=583f1c66d622c07b55000059"><span>Fork</span></a></li><li data-bind-if="$solution"><a class="js-compare-solutions" data-tippy-content="Compare this solution to your own" data-tippy-placement="bottom"><i class="icon-moon-compare "></i>Compare with your solution</a></li><li><a href="https://www.codewars.com/kata/reviews/583f1c66d622c07b55000059/groups/583f3706e8eb88822d000126">Link</a></li>
</ul>
<div class="clearfix"></div>
<!--v-if-->
<div class="clearfix"></div>
<ul class="comments-list is-hidden" user-votes-url="/kata/reviews/583f1c66d622c07b55000059/groups/583f3706e8eb88822d000126/comments/user_votes">
<li class="new-comment" data-bind-class="new_comment_class">

<div>
<figure>
<a href="https://www.codewars.com/users/GreenEagleKing">
<div><img title="GreenEagleKing" data-tippy-content="GreenEagleKing" data-tippy-placement="bottom" alt="GreenEagleKing Avatar" src="./110722-CW_files/101405438"></div>
</a>
</figure>
<div class="comment-content">
<div class="preedit px-1">
<input type="text" class="form-input block w-64 rounded-none rounded-md sm:text-sm dark:bg-gray-800 focus:outline-none focus:ring-cgray-300 dark:focus:ring-cgray-600 focus:border-cgray-300 dark:focus:border-cgray-600 border-gray-300 dark:border-gray-700" placeholder="Leave feedback...">
</div>
<div class="clearfix mb-4"></div>
</div>
<div class="clearfix"></div>
</div>



</li>

</ul>
</div>
<div class="clearfix"></div>
</div>
</li><div class="p-10px js-infinite-marker" data-page="1"><h5>Loading more solutions...</h5></div></ul></div></div><div id="invalid_solutions"></div></div></div>
<template id="comment-item-template"></template>
<template id="comment-editor-template"></template>
<template id="comment-new-template"></template>
<template id="compare-solution-template"></template>
</div></main><div class="clearfix"></div></div><div class="clearfix"></div><footer class="p-3 text-ui-text mb-0 text-center w-auto h-50px" id="main_footer"><ul class="block list-none mx-auto mb-0 p-0 overflow-hidden space-x-5"><li class="inline-block">© 2022 Codewars</li><li class="inline-block"><a href="https://www.codewars.com/about">About</a></li><li class="inline-block"><a href="https://dev.codewars.com/" rel="noopener" target="_blank">API</a></li><li class="inline-block"><a href="https://www.codewars.com/blog" rel="noopener" target="_blank">Blog</a></li><li class="inline-block"><a href="https://www.codewars.com/about/privacy">Privacy</a></li><li class="inline-block"><a href="https://www.codewars.com/about/terms-of-service">Terms</a></li><li class="inline-block"><a data-content="info@codewars.com" href="mailto:info@codewars.com" id="contactUs" rel="popover">Contact</a></li><li class="poweredby_link inline-block"><a class="hover:text-current" data-tippy-content="Supercharge your technical hiring, certification, and upskilling process with our real-world developer assessments." data-tippy-placement="top" href="https://www.qualified.io/?utm_source=codewars&amp;utm_medium=web&amp;utm_term=footer" rel="nofollow" target="_blank"><div class="flex items-baseline justify-center"><span class="pl-1 text-xs inline-block">powered by</span><img class="h-4 inline-block dark:hidden pl-1" src="./110722-CW_files/qualified-black.b052752a.svg"><img class="h-4 hidden dark:inline-block pl-1" src="./110722-CW_files/qualified-white.7cba1bde.svg"></div></a></li></ul></footer><div class="modal" id="confirm_modal" style="display: none"><div class="modal-header"><div class="close" data-dismiss="modal"><i class="icon-moon-x"></i></div><h4>Confirm</h4><div class="clearfix"></div></div><div class="clearfix"></div><div class="modal-body view"></div><div class="modal-footer"><ul class="form-actions"><li class="cancel" data-dismiss="modal"><a class="btn">Cancel</a></li><li class="alt-confirm is-hidden"><a class="btn"></a></li><li class="confirm"><a class="btn is-green"><i class="icon-general-checkmark"></i>Confirm</a></li></ul></div></div></div><div class="is-hidden" data-turbolinks-permanent="" id="template_helpers"><script id="hidden_field" type="template"><input data-bind-id="@id" data-bind-name="@name" data-bind-value="@value" type="hidden" /></script><script id="input_field" type="template"><div data-bind-class="field_class"><label data-bind-class="%required &amp;&amp; &#39;required&#39;" data-bind-for="@id" data-bind-if="%label"><abbr data-bind-if="%required" title="required">* </abbr><span data-bind-html="%label"></span></label><div data-bind-class="field_value_class"><input data-bind-id="@id" data-bind-name="@name" data-bind-type="%type || &#39;text&#39;" data-bind-value="@value | unescape_html || %defaultValue" /></div><include data-bind-each="@errors"><small data-bind-html="@"></small></include></div></script><script id="checkbox_field" type="template"><div class="boolean" data-bind-class="field_class"><div class="field_value"><div><input data-bind-name="@name" type="hidden" value="false" /><label class="checkbox"><input class="form-checkbox rounded bg-gray-400 dark:bg-gray-600 border-transparent focus:border-transparent focus:bg-gray-400 text-gray-700 focus:ring-1 focus:ring-offset-2 dark:ring-offset-1 focus:ring-gray-500 dark:focus:ring-gray-700 dark:focus:ring-offset-gray-800 boolean" data-bind-checked="@value" data-bind-id="@id" data-bind-name="@name" type="checkbox" value="true" /><span data-bind-html="%label || @label"></span></label></div></div></div></script><script id="markdown_field" type="template"><div class="is-full-height" data-bind-class="field_class" data-bind-if="%style | eq::&#39;full&#39;"><div class="markdown-editor is-full-height mb-0"><div class="tabs is-full-height"><dl class="tabs"><dd class="is-active" data-tippy-content="Edit your message using markdown" data-tippy-placement="top"><a data-bind-html="{{%label}}" data-bind-if="%label" data-tab="markdown"></a><a data-bind-unless="%label" data-tab="markdown"><i class="icon-moon-edit "></i></a></dd><dd data-tippy-content="Preview your comment" data-tippy-placement="right"><a data-tab="preview"><i class="icon-moon-preview "></i></a></dd><dd data-tippy-content="Edit in full-screen mode" data-tippy-placement="left"><a class="js-expand"><i class="icon-moon-expand "></i></a></dd></dl><div class="clearfix"></div><ul class="tabs-content is-full-height"><li class="is-full-height is-active" data-tab="markdown"><div class="text-editor-container is-full-height"><textarea class="is-hidden" data-bind-id="@id" data-bind-name="@name" data-bind-value="@value"></textarea><div class="text-editor js-editor has-shadow"></div><div class="editor-msg-container is-hidden"><div class="alert-box"></div></div></div></li><li class="is-full-height" data-tab="preview"><div class="panel bg-ui-section is-overflow-auto"><div class="markdown prose max-w-none"><p>Your rendered <a href="https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet" target="_blank" rel="noopener">github-flavored</a> markdown will appear here.</p></div></div></li></ul></div></div></div><div data-bind-class="field_class" data-bind-if="%style | ne::&#39;full&#39;"><label data-bind-class="%required &amp;&amp; &#39;required&#39;" data-bind-for="@id" data-bind-if="%label"><abbr data-bind-if="%required" title="required">* </abbr><span data-bind-html="%label"></span></label><div class="markdown-editor is-tall" data-bind-class="%markdownEditorClass"><div class="tabs"><dl class="tabs"><dd class="is-active" data-tippy-content="Edit your message using markdown" data-tippy-placement="top"><a data-tab="markdown"><i class="icon-moon-edit "></i></a></dd><dd data-tippy-content="Preview your comment" data-tippy-placement="right"><a data-tab="preview"><i class="icon-moon-preview "></i></a></dd><dd data-tippy-content="Edit in full-screen mode" data-tippy-placement="right"><a class="js-expand"><i class="icon-moon-expand "></i></a></dd></dl><ul class="tabs-content"><li class="is-full-height is-active" data-tab="markdown"><div class="text-editor-container is-full-height"><textarea class="is-hidden" data-bind-id="@id" data-bind-name="@name" data-bind-value="@value"></textarea><div class="text-editor js-editor has-shadow"></div><div class="editor-msg-container is-hidden"><div class="alert-box"></div></div></div></li><li class="is-full-height" data-tab="preview"><div class="panel bg-ui-section is-overflow-auto"><div class="markdown prose max-w-none"><p>Your rendered <a href="https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet" target="_blank" rel="noopener">github-flavored</a> markdown will appear here.</p></div></div></li></ul></div></div></div></script><script id="code_editor_field" type="template"><div class="text-editor-container" data-bind-class="field_class" data-bind-id="{{@id}}_field"><label data-bind-class="%required &amp;&amp; &#39;required&#39;" data-bind-for="@id" data-bind-if="%label"><abbr data-bind-if="%required" title="required">* </abbr><span data-bind-html="%label"></span></label><textarea class="is-hidden" data-bind-id="@id" data-bind-name="@name" data-bind-value="@value"></textarea><div class="text-editor js-editor has-shadow"></div><div class="commands-container"><ul class="is-unstyled"><li class="expand" title="Maximize Editor (esc key)"><a><i class="icon-moon-expand "></i></a></li><li class="shrink is-hidden" title="Shrink Editor (esc key)"><a><i class="icon-moon-collapse "></i></a></li></ul></div><div class="editor-msg-container is-hidden"><div class="alert-box"></div></div></div></script></div><div id="collection_modal" class="p-4 is-hidden" data-turbolinks-permanent="true" style="display: none;">
<div id="collection-modal-view">
<h3 class="mx-2 mt-2 mb-5 text-base font-bold">
Collect: <span>undefined</span>
</h3>
<div class="pl-2">
<p>Loading collection data...</p>
</div>

</div>
</div>
<script>document.addEventListener("turbolinks:load", (event) => {
  const currentUser = JSON.parse("{\"username\":\"GreenEagleKing\",\"email\":\"benking1293@gmail.com\",\"role\":\"standard\",\"guest\":false,\"honor\":173,\"rank\":-6,\"bootcamp_interest\":\"not_interested\",\"career_paths\":[\"frontend\",\"mobile\",\"web3\"],\"current_language\":\"javascript\",\"country_name\":\"United Kingdom\",\"blocked_user_ids\":[],\"blocked_by_user_ids\":[],\"jwt\":\"eyJhbGciOiJIUzI1NiJ9.eyJpZCI6IjYyODEwNDhlZTVmMjljYjljZTI4NmNiNiIsImV4cCI6MTY1ODQwNTU0MX0.MGCLyKrYTFt6WLsg2o_OZc4b_uayEfZPN_ggYhQA6u8\",\"experience\":\"learning\",\"subscriber\":false,\"hideAds\":false,\"id\":\"6281048ee5f29cb9ce286cb6\",\"starred_code_challenge_ids\":[],\"can_resolve_comments\":false,\"avatar_tag\":\"\\u003cimg title=\\\"GreenEagleKing\\\" data-tippy-content=\\\"GreenEagleKing\\\" data-tippy-placement=\\\"bottom\\\" alt=\\\"GreenEagleKing Avatar\\\" src=\\\"https://avatars.githubusercontent.com/u/101405438?s=100\\\" /\\u003e\"}");
  if (typeof gtag === "function") {
    const config = {
      page_location: event.data.url,
      page_title: event.target.title,
    };
    if (!currentUser.guest && currentUser.id) config.user_id = currentUser.id;
    gtag("config", "G-M3JYSQLS8M", config);
    if (!currentUser.guest && currentUser.experience) {
      gtag("set", "user_properties", {
        career_level: currentUser.experience,
        rank: currentUser.rank,
        bootcamp_interest: currentUser.bootcamp_interest || "unknown",
      });
    }
  }
  App.setup({
    env: "production",
    currentUser,
    data: JSON.parse("{\"routes\":{},\"controllerName\":\"code_challenges\",\"description\":\"Given two numbers and an arithmetic operator (the name of it, as a string), return the result of the two numbers having that operator used on them. \\n\\n\\n```a``` and ```b``` will both be positive integers, and ```a``` will always be the first number in the operation, and ```b``` always the second.\\n\\nThe four operators are \\\"add\\\", \\\"subtract\\\", \\\"divide\\\", \\\"multiply\\\". \\n\\n~~~if-not:haskell\\nA few **examples:(Input1, Input2, Input3 --\\u003e Output)**\\n```\\n5, 2, \\\"add\\\"      --\\u003e 7\\n5, 2, \\\"subtract\\\" --\\u003e 3\\n5, 2, \\\"multiply\\\" --\\u003e 10\\n5, 2, \\\"divide\\\"   --\\u003e 2.5\\n```\\n~~~\\n\\n~~~if:haskell\\nIn **Haskell**:\\n\\n  1. The operation is defined as\\n```haskell\\ndata Operation = Add | Divide | Multiply | Subtract deriving (Eq, Show, Enum, Bounded)\\n```\\n  2. The arithmetic function as \\n```haskell\\narithmetic :: Double -\\u003e Double -\\u003e Operation -\\u003e Double\\narithmetic :: Fractional a =\\u003e a -\\u003e a -\\u003e Operation -\\u003e a\\n```\\n~~~\\n\\n\\nTry to do it without using if statements!\\n\",\"activeLanguage\":\"javascript\",\"reviewId\":\"583f1c66d622c07b55000059\",\"authorId\":\"57bb252df30299595a00050c\",\"solution\":\"function arithmetic(a, b, operator){\\n    switch (operator) {\\n        case \\\"add\\\":\\n            return a + b\\n            break;\\n        case \\\"subtract\\\":\\n            return a - b\\n            break;\\n        case \\\"divide\\\":\\n            return a / b\\n            break;\\n        case \\\"multiply\\\":\\n            return a * b\\n            break;\\n        default:\\n            console.log(\\\"Not valid\\\")\\n    }   \\n}\",\"label_votes\":[],\"rank\":-7,\"assessed_rank\":null,\"vote\":null,\"completedKata\":true,\"isAuthor\":false,\"permissions\":{\"vote\":true,\"up_vote\":true,\"flag\":false,\"assess_rank\":true,\"estimate_rank\":true,\"save\":false},\"allow_comment_solutions\":true,\"avatar_tag\":\"\\u003cimg title=\\\"GreenEagleKing\\\" data-tippy-content=\\\"GreenEagleKing\\\" data-tippy-placement=\\\"bottom\\\" alt=\\\"GreenEagleKing Avatar\\\" src=\\\"https://avatars.githubusercontent.com/u/101405438?s=100\\\" /\\u003e\",\"profile_path\":\"/users/GreenEagleKing\"}"),
    routes: {"user_profile":"/users/GreenEagleKing","user_stars":"/user/stars","star_code_challenge":"/users/stars/%7Bid%7D","mark_notifications_read":"/users/notifications/mark_read","unread_popup_notifications":"/users/notifications/unread_popups","collections":"/api/v1/collections","collection_code_challenge":"/api/v1/collections/%7BcollectionId%7D/code_challenges/%7Bid%7D","challenge_vote":"/kata/583f158ea20cfcbeb400000a/vote/62cc114c1d1c524fa1a50d7e","assess_rank":"/kata/583f158ea20cfcbeb400000a/assess-rank/62cc114c1d1c524fa1a50d7e","label_vote":"/kata/reviews/583f1c66d622c07b55000059/groups/%7BrefId%7D/label_vote/%7Blabel%7D","solution_group":"/kata/reviews/583f1c66d622c07b55000059/groups/%7BgroupId%7D","unlock_solutions":"/kata/583f158ea20cfcbeb400000a/solutions/javascript?show-solutions=1","unlock_test_cases":"/kata/583f158ea20cfcbeb400000a/solutions/javascript?show-fixtures=1","user_solution":"/kata/583f158ea20cfcbeb400000a/javascript/solution/%7BuserId%7D"},
    pageControllerName: 'CodeChallenges.SolutionsController',
    ablyKey: "scNMAQ.WPB3NQ:wcqqMD8xujGV8lHt",
    privateChannelName: "JVAfPQ",
  });
}, { once: true });</script><script>document.addEventListener("turbolinks:load", (event) => {
  if (typeof Intercom === "function" && Intercom.booted) Intercom("shutdown");
}, { once: true });</script><iframe id="intercom-frame" style="position: absolute !important; opacity: 0 !important; width: 1px !important; height: 1px !important; top: 0 !important; left: 0 !important; border: none !important; display: block !important; z-index: -1 !important; pointer-events: none;" aria-hidden="true" tabindex="-1" title="Intercom" src="./110722-CW_files/saved_resource.html"></iframe></body><grammarly-desktop-integration data-grammarly-shadow-root="true"></grammarly-desktop-integration></html>