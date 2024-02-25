import{S as d,i as c}from"./assets/vendor-7659544d.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();function u(o){const r=new URLSearchParams({key:"42539548-54a8d83eadfda97e0fcb53b56",q:o,image_type:"photo",orientation:"horizontal",safesearch:"true"});return fetch(`https://pixabay.com/api/?${r}`).then(s=>{if(!s.ok)throw new Error("Unable to fetch images");return s.json()})}function m(o){const r=document.querySelector(".img-list");r.innerHTML="";const s=o.hits.map(e=>`<li class="list-item">
              <a href="${e.largeImageURL}" class="list-item-link">
                <img class="list-item-img" src="${e.webformatURL}" alt="${e.tags}">
              </a>
              <div class="list-item-description">
                <h2 class="description-name">Likes
                  <p class="description-value">${e.likes}</p>
                </h2>
                <h2 class="description-name">Views 
                  <p class="description-value">${e.views}</p>
                </h2>
                <h2 class="description-name">Comments 
                  <p class="description-value">${e.comments}</p>
                </h2>
                <h2 class="description-name">Downloads 
                  <p class="description-value">${e.downloads}</p>
                </h2>
              </div>
            </li>`).join("");r.insertAdjacentHTML("beforeend",s),new d(".list-item a",{captionDelay:250,captionSelector:"img",captionsData:"alt",scrollZoom:!1,fadeSpeed:250}).refresh()}const a=document.querySelector(".form"),l=document.querySelector(".loader");a.addEventListener("submit",o=>{o.preventDefault();const s=a.querySelector(".input").value.trim();s&&(l.classList.remove("hidden"),u(s).then(i=>{i.hits.length===0?c.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"center"}):m(i)}).catch(i=>{console.error("Error fetching images:",i),c.error({message:"Error fetching images. Please try again later!"})}).finally(()=>{l.classList.add("hidden"),a.reset()}))});
//# sourceMappingURL=commonHelpers.js.map
