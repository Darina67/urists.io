!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){n(1),e.exports=n(2)},function(e,t){var n=document.querySelectorAll("[data-modal]"),o=document.body,r=document.querySelectorAll(".modal__close"),c=document.querySelectorAll(".modal");function u(e){e.classList.remove("show"),o.classList.remove("no-scroll")}n.forEach((function(e){e.addEventListener("click",(function(e){var t=e.currentTarget.getAttribute("data-modal"),n=document.getElementById(t);n.querySelector(".modal__content").addEventListener("click",(function(e){e.stopPropagation()})),n.classList.add("show"),o.classList.add("no-scroll")}))})),r.forEach((function(e){e.addEventListener("click",(function(e){u(e.currentTarget.closest(".modal"))}))})),c.forEach((function(e){e.addEventListener("click",(function(e){u(e.currentTarget)}))}))},function(e,t){$(document).ready((function(){$(".menu-burger__header").click((function(){$(".menu-burger__header").toggleClass("open-menu"),$(".header__nav").toggleClass("open-menu"),$(".body").toggleClass("page-mask"),$("body").toggleClass("fixed-page")}))}))}]);