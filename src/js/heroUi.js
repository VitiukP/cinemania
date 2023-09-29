import { swiperInit, renderSwiper } from './swiper';

function crateSlideMarkup(
  backdrop_path,
  title,
  overview,
  vote_average,
  id,
  name
) {
  return `
<div
  style="background-image: url('https://image.tmdb.org/t/p/original${backdrop_path}');"
  class="swiper-slide hero-img">
 <div class="hero-gradient">
  <div class="hero-title-wrap" data-swiper-parallax="-300">
    <h1 class="hero-title">${title || name}</h1>
  </div>
  <div class="hero-description-wrap" data-swiper-parallax="-400">
    <p class="hero-description">${overview}</p>
  </div>
  <div class="hero-btn-wrap" data-swiper-parallax="-450" data-id="${id}">
  <button type="button" class="hero-btn hero-btn-trailer" id="hero-btn-trailer" data-id="${id}">
    Watch trailer
  </button>
  <button type="button" class="hero-btn hero-btn-more is-id" id="hero-btn-more"  data-modal-open data-id="${id}" >
    More details
  </button></div>
  </div>
  </div>`;
}

function createMarkup(arr) {
  return arr
    .map(({ backdrop_path, title, overview, vote_average, id, name }) => {
      return crateSlideMarkup(
        backdrop_path,
        title,
        overview,
        vote_average,
        id,
        name
      );
    })
    .join(' ');
}

function renderHeroSlider(arr) {
  renderSwiper();
  const markup = createMarkup(arr);
  document.querySelector('.swiper-wrapper').innerHTML = markup;
  swiperInit();
}

export { renderHeroSlider };