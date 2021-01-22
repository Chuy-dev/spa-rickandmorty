(()=>{"use strict";const n="https://rickandmortyapi.com/api/character/",a=async a=>{const e=a?`${n}${a}`:n;try{const n=await fetch(e);return await n.json()}catch(n){console.log("Fetch Error",n)}},e=()=>location.hash.slice(1).toLocaleLowerCase().split("/")[1]||"/",t=()=>'\n    <div class="error404">\n      <h2>Error 404</h2>\n    </div>\n  ',s={"/":async()=>`\n    <div class="characters">\n      ${(await a()).results.map((n=>`\n        <article class="character-item">\n          <a href="#/${n.id}/">\n            <img src="${n.image}" alt="${n.name}" />\n            <h2>${n.name}</h2>\n          </a>\n        </article>\n      `)).join("")}\n    </div>\n  `,"/:id":async()=>{const n=e(),t=await a(n);return`\n    <div class="characters-inner">\n      <article class="characters-card">\n        <img src="${t.image}" alt="${t.name}" />\n        <h2>${t.name}</h2>\n      </article>\n      <article class="characters-card">\n        <h3>Episodes: <span>${t.episode.length}</span></h3>\n        <h3>Status: <span>${t.status}</span></h3>\n        <h3>Species: <span>${t.species}</span></h3>\n        <h3>Gender: <span>${t.gender}</span></h3>\n        <h3>Origin: <span>${t.origin.name}</span></h3>\n        <h3>Last Local: <span>${t.location.name}</span></h3>\n      </article>\n    </div>\n  `},"/contact":"Contact"},c=async()=>{const n=document.getElementById("header"),a=document.getElementById("content");n.innerHTML=await'\n    <div class="header-main">\n      <div class="header-logo">\n        <h1><a href="/">100tii</a></h1>\n      </div>\n      <div class="header-nav">\n        <a href="#/about">\n          About\n        </a>\n      </div>\n    </div>\n  ';let c=e(),i=await(n=>n.length<=3?"/"===n?n:"/:id":`/${n}`)(c),r=s[i]?s[i]:t;a.innerHTML=await r()};window.addEventListener("load",c),window.addEventListener("hashchange",c)})();