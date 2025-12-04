import{a as w,S as L,i as n}from"./assets/vendor-DvfmeZXB.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&c(i)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();const y=async(o,s)=>{try{return(await w.get("https://pixabay.com/api/",{params:{key:"53377567-48fe25733f93d655972fbcb7e",q:o,image_type:"photo",orientation:"horizontal",page:s,per_page:15,safesearch:!0}})).data}catch(a){console.log(a)}},l={gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader"),loadMoreBtn:document.querySelector(".loadMore")};function S({webformatURL:o,largeImageURL:s,tags:a,likes:c,views:e,comments:t,downloads:i}){return`<li class="gallery-item">
            <a class="gallery-link" href="${s}">
                <img class="gallery-image" src="${o}" alt="${a}">
            </a>
            <ul class="image-stats">
                <li class="image-stats-item">
                    <h2 class="stats-text">Likes</h2>
                    <p class="stats-value">${c}</p>
                </li>
                <li class="image-stats-item">
                    <h2 class="stats-text">Views</h2>
                    <p class="stats-value">${e}</p>
                </li>
                <li class="image-stats-item">
                    <h2 class="stats-text">Comments</h2>
                    <p class="stats-value">${t}</p>
                </li>
                <li class="image-stats-item">
                    <h2 class="stats-text">Downloads</h2>
                    <p class="stats-value">${i}</p>
                </li>
            </ul>
          </li>`}let q=new L(".gallery a",{captions:!0,captionsData:"alt",captionPosition:"bottom",captionDelay:250});function p(o){const s=o.map(S).join("");l.gallery.insertAdjacentHTML("beforeend",s),q.refresh()}function v(){l.gallery.innerHTML=""}function f(){l.loader.style.display="block"}function d(){l.loader.style.display="none"}function b(){l.loadMoreBtn.style.display="block"}function g(){l.loadMoreBtn.style.display="none"}function C(){let s=document.querySelector("li").getBoundingClientRect();window.scrollBy({top:s.height*2,behavior:"smooth"})}const u=document.querySelector(".form");let m,r,h;u.addEventListener("submit",async o=>{if(o.preventDefault(),g(),v(),m=new FormData(u).get("search-text"),r=1,m.trim()===""){n.show({message:"Please enter a search query!",messageColor:"white",messageSize:"20",backgroundColor:"red",position:"topRight",timeout:2e3}),u.reset();return}f();try{const a=await y(m.trim(),r);a.hits.length===0?n.show({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"black",messageSize:"20",backgroundColor:"yellow",position:"topRight",timeout:2e3}):(p(a.hits),h=Math.ceil(a.totalHits/15),r<h?b():(g(),n.show({message:`We're sorry, but you've reached the end of search results.
`,messageColor:"black",messageSize:"20",backgroundColor:"yellow",position:"topRight",timeout:2e3}))),d()}catch{d(),n.show({message:"Your request is fail!",messageColor:"white",messageSize:"20",backgroundColor:"red",position:"topRight",timeout:2e3})}u.reset()});document.querySelector(".loadMore").addEventListener("click",async()=>{r+=1,g(),f();const o=await y(m.trim(),r);p(o.hits),C(),r<h?(d(),b()):(d(),g(),n.show({message:`We're sorry, but you've reached the end of search results.
`,messageColor:"black",messageSize:"20",backgroundColor:"yellow",position:"topRight",timeout:2e3}))});
//# sourceMappingURL=index.js.map
