var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},e={},t={},a=n.parcelRequired7c6;null==a&&((a=function(n){if(n in e)return e[n].exports;if(n in t){var a=t[n];delete t[n];var i={id:n,exports:{}};return e[n]=i,a.call(i.exports,i,i.exports),i.exports}var s=new Error("Cannot find module '"+n+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(n,e){t[n]=e},n.parcelRequired7c6=a);var i=a("bTcpz");i=a("bTcpz");const s={ulEl:document.querySelector(".trends__list"),btnLoad:document.querySelector(".js-load"),myLibContainer:document.querySelector(".js-mylib-container"),searchEl:document.querySelector("#genre-search")};let l,r=[];const o=(0,i.loadLs)(i.KEY)||[];function d(n){const e=[...n];if(e.length<9)return p(e),void s.btnLoad.classList.add("visually-hidden");const t=e.slice(0,9);e.splice(0,9),l=[...e],p(t),s.btnLoad.classList.remove("visually-hidden"),s.btnLoad.addEventListener("click",c)}function c(){if(l.length<9)return p(l),void s.btnLoad.classList.add("visually-hidden");p(l.slice(0,9)),l.splice(0,9)}function p(n){const e=n.map((({id:n,genres:e,poster_path:t,release_date:a,title:i,vote_average:s})=>{return`<li class="library-list trends-box" id=${n}>\n              <img\n                src="https://image.tmdb.org/t/p/original/${t}"\n                alt="${i}"\n                class="trends__photo"\n              />\n              <div class="trends__description">\n                <div class="trends__info">\n                  <h3 class="trends__name">${i}</h3>\n                  <p class="trends__ganre">${e[0].name}|${l=a,(l=l.split("-"))[0]}</p>\n                </div>\n                <div class="raiting__body">\n                  <div class="rating__active" style="width: ${10*s}px">\n                    <div class="rating__active__wrapper">\n                      <span class="rating__active__color">★</span>\n                      <span class="rating__active__color">★</span>\n                      <span class="rating__active__color">★</span>\n                      <span class="rating__active__color">★</span>\n                      <span class="rating__active__color">★</span>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </li>`;var l})).join(" ");s.ulEl.insertAdjacentHTML("beforeend",e)}d(o),o&&o.length?(o.map((n=>n.genres)).map((n=>n.map((n=>r.push(n.name))))),r=r.filter(((n,e,t)=>e===t.indexOf(n))),r.map((n=>{const e=`<option class='mylib-options'>${n}</option>`;s.searchEl.insertAdjacentHTML("beforeend",e)})),s.searchEl.addEventListener("change",(function(n){s.ulEl.innerHTML=" ";const e=n.target.value;if("All Genres"===e)return void d(o);d(o.filter((n=>n.genres.some((n=>n.name.includes(e))))))}))):s.myLibContainer.innerHTML='<div class="not-found-film-library">\n    <p class="not-found-film-library-text-item">OOPS...</p>\n    <p class="not-found-film-library-text-item">We are very sorry!</p>\n    <p class="not-found-film-library-text-item">\n      You don’t have any movies at your library.\n    </p>\n    \n    <a class="not-found-film-link" href="./catalog.html"> Search movie </a>\n  </div>\n  <ul class="trends__list visually-hidden"></ul>\n  <button type="button" class="load-more js-load visually-hidden">Load more</button>',a("epHO8"),a("bUb57"),a("eLjGg"),a("bTcpz"),a("2uOa8");
//# sourceMappingURL=myLibrary.2f3c6492.js.map