(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const d of o.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function i(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(e){if(e.ep)return;e.ep=!0;const o=i(e);fetch(e.href,o)}})();(()=>{const n=document.querySelector(".js-menu-container"),t=document.querySelector(".js-open-menu"),i=document.querySelectorAll(".js-close-menu"),s=()=>{const e=t.getAttribute("aria-expanded")==="true"||!1;t.setAttribute("aria-expanded",!e),n.classList.toggle("is-open");const o=e?"enableBodyScroll":"disableBodyScroll";bodyScrollLock[o](document.body)};t.addEventListener("click",s),i.forEach(e=>e.addEventListener("click",s)),window.matchMedia("(min-width: 768px)").addEventListener("change",e=>{e.matches&&(n.classList.remove("is-open"),t.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body))})})();document.addEventListener("DOMContentLoaded",function(){["data-first-modal","data-second-modal","data-third-modal","data-fourth-modal","data-fifth-modal"].forEach(t=>{const i=t+"-open",s=t+"-close",e=document.querySelectorAll(`[${i}]`),o=document.querySelectorAll(`[${s}]`),d=document.querySelector(`[${t}]`);if(d||l("Can`t find Modal with attribute "+d),e.length===0&&l("Can`t find Open modal button with attribute "+i),o.length===0&&l("Can`t find Close modal button with attribute "+s),!d||e.length===0||o.length===0)return;e.forEach(a=>a.addEventListener("click",u)),o.forEach(a=>a.addEventListener("click",u));function u(){document.body.classList.toggle("modal-open"),d.classList.toggle("is-hidden")}})},!1);function l(n){const t="color: #bada55";console.log("%c"+n,t)}new Swiper(".products__swiper",{loop:!0,slidesPerView:1,spaceBetween:18,breakpoints:{375:{slidesPerView:1,spaceBetween:18},768:{slidesPerView:2.5,spaceBetween:18},1200:{slidesPerView:4,spaceBetween:18}},pagination:{el:".swiper-pagination",clickable:!0},autoplay:{delay:2300,stopOnLastSlide:!1,disableonInteraction:!0},freeMode:!0,speed:800});const m="/img/howmade/howmade-mobile.jpg",w="/img/howmade/howmade-mobile@2x.jpg",p="/img/howmade/howmade-mobile@3x.jpg",h="/img/howmade/howmade-tablet.jpg",f="/img/howmade/howmade-tablet@2x.jpg",g="/img/howmade/howmade-tablet@3x.jpg",b="/img/howmade/howmade-desktop.jpg",y="/img/howmade/howmade-desktop@2x.jpg",L="/img/howmade/howmade-desktop@3x.jpg",r=new Plyr("#features-player");window.innerWidth>=1200&&window.devicePixelRatio>=3?r.poster=L:window.innerWidth>=1200&&window.devicePixelRatio>=2?r.poster=y:window.innerWidth>=1200&&window.devicePixelRatio>=1?r.poster=b:window.innerWidth>=768&&window.devicePixelRatio>=3?r.poster=g:window.innerWidth>=768&&window.devicePixelRatio>=2?r.poster=f:window.innerWidth>=768&&window.devicePixelRatio>=1?r.poster=h:window.innerWidth<768&&window.devicePixelRatio>=3?r.poster=p:window.innerWidth<768&&window.devicePixelRatio>=2?r.poster=w:r.poster=m;self.addEventListener("fetch",function(n){n.respondWith(caches.match(n.request).then(function(t){return t||fetch(n.request).then(function(i){return caches.open("my-cache").then(function(s){return s.put(n.request,i.clone()),i})})}))});self.addEventListener("fetch",function(n){n.respondWith(caches.match(n.request).then(function(t){return t||fetch(n.request).then(function(i){return caches.open("my-cache").then(function(s){return s.put(n.request,i.clone()),i})})}))});$('[name="review-user-phone"]').mask("(99) 999 - 99 - 99");$('[name="order-user-phone"]').mask("(99) 999 - 99 - 99");$('[name="reg-user-phone"]').mask("(99) 999 - 99 - 99");$('[name="order-user-card"]').mask("9999 - 9999 - 9999 - 9999");const c=document.querySelector(".isShowBtn");window.onscroll=()=>{window.scrollY>800?c.classList.remove("isShowBtn-hide"):window.scrollY<800&&c.classList.add("isShowBtn-hide"),c.onclick=()=>{window.scrollTo(0,0)}};new Swiper(".reviews__swiper",{loop:!0,slidesPerView:1,spaceBetween:28,breakpoints:{375:{slidesPerView:1,spaceBetween:16},768:{slidesPerView:2,spaceBetween:16},1200:{slidesPerView:3,spaceBetween:28}},pagination:{el:".swiper-pagination",clickable:!0},autoplay:{delay:2300,stopOnLastSlide:!1,disableonInteraction:!0},freeMode:!0,speed:800});