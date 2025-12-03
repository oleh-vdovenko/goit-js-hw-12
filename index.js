import{a as h,S as b,i as m}from"./assets/vendor-DvfmeZXB.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const y=async(o,s)=>{try{return(await h.get("https://pixabay.com/api/",{params:{key:"53377567-48fe25733f93d655972fbcb7e",q:o,image_type:"photo",orientation:"horizontal",page:s,per_page:15,safesearch:!0}})).data}catch(r){console.log(r)}},a={gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader"),loadMoreBtn:document.querySelector(".loadMore")};function L({webformatURL:o,largeImageURL:s,tags:r,likes:n,views:e,comments:t,downloads:l}){return`<li class="gallery-item">
            <a class="gallery-link" href="${s}">
                <img class="gallery-image" src="${o}" alt="${r}">
            </a>
            <ul class="image-stats">
                <li class="image-stats-item">
                    <h2 class="stats-text">Likes</h2>
                    <p class="stats-value">${n}</p>
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
                    <p class="stats-value">${l}</p>
                </li>
            </ul>
          </li>`}let w=new b(".gallery a",{captions:!0,captionsData:"alt",captionPosition:"bottom",captionDelay:250});function f(o){const s=o.map(L).join("");a.gallery.innerHTML=s,w.refresh()}function S(){a.gallery.innerHTML=""}function q(){a.loader.style.display="block"}function d(){a.loader.style.display="none"}function M(){a.loadMoreBtn.style.display="block"}function g(){a.loadMoreBtn.style.display="none"}const c=document.querySelector(".form");let u,i,p;c.addEventListener("submit",o=>{if(o.preventDefault(),g(),S(),u=new FormData(c).get("search-text"),i=1,u.trim()===""){m.show({message:"Please enter a search query!",messageColor:"white",messageSize:"20",backgroundColor:"red",position:"center",timeout:2e3}),c.reset();return}q(),y(u.trim(),i).then(r=>{r.hits.length===0?m.show({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"black",messageSize:"20",backgroundColor:"yellow",position:"center",timeout:2e3}):(f(r.hits),p=Math.ceil(r.totalHits/15),i<p?M():g()),d()}).catch(r=>{d(),m.show({message:"Your request is fail!",messageColor:"white",messageSize:"20",backgroundColor:"red",position:"center",timeout:2e3})}),c.reset()});document.querySelector(".loadMore").addEventListener("click",async()=>{i+=1;const o=await y(u.trim(),i),s=f(o.hits);document.querySelector(".gallery").insertAdjacentHTML("beforeend",s)});
//# sourceMappingURL=index.js.map
