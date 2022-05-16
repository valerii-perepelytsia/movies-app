import {convertDate, generateImageUrl, calculatePopularity} from "./utils";

export const renderMovies = movies => (`
  <div class="container">
    <section>
      <h2 class="section-title">Popular</h2>
      <div class="popular d-flex offset-mr">
        ${movies.map(movie => renderMovie(movie)).join('')}
      </div>
    </section>
  </div>
`);

export const renderMovie = ({id, title, poster_path, popularity, release_date}) => (`
  <div class="movie">
    <a href="#movieId=${id}">
      <img class="poster" src="${generateImageUrl(poster_path)}" alt="${title}" loading="lazy">
    </a>
    <span class="popularity">
        <span class="rate">rate</span>
        ${calculatePopularity(popularity)}
    </span>
    <div class="title mb-5">${title}</div>
    <div class="date">${convertDate(release_date)}</div>
  </div>
`);

export const renderDetails = ({id, title, overview, release_date, backdrop_path, status, imdb_id, genres, homepage}) => (`
  <div class="movie movie--full-width">
    <a href="#movieId=${id}">
      <img class="poster" src="${generateImageUrl(backdrop_path)}" alt="${title}" loading="lazy">
    </a>
    <div class="wrapper">
      <div class="title mb-15">${title}</div>
      <div class="date mb-15">${convertDate(release_date)}</div>
      <div class="details">
        <div class="overview mb-15">
          <span class="heading">Overview:</span>
          ${overview}
        </div>
        <div class="status mb-15">
          <span class="heading">Status:</span>
          ${status}
        </div>
        <div class="imdb mb-15">
          <span class="heading">Imdb:</span>
          ${imdb_id}
        </div>
        <div class="tags">
          ${genres.map(({name}) => `<span class="tag">${name}</span>`).join('')}
        </div>
        <div class="homepage">
          <span class="heading">Website:</span>
          <a href="${homepage}" target="_blank">${homepage}</a>
        </div>
      </div>
    </div>
  </div>
`);

export const renderSearch = data => (`
  <div class="container">
      ${data.map(data => (renderSearchItems(data))).join('')}
    </div>
  </div>
`);

export const renderSearchItems = ({id, title, poster_path, overview, release_date}) => (`
  <div class="search-container">
    <div class="search-container__image">
      <div class="search-container__poster">
        <a class="search-container__href" href="#movieId=${id}">
          <img class="search-container__result" src="${generateImageUrl(poster_path)}" alt="${title}" loading="lazy">
        </a>
      </div>
    </div>
    <div class="search-container__details">
      <div class="search-container__wrapper">
        <div class="search-container__title mb-15">
          <h2 class="search-container__heading">${title}</h2>
        </div>
      </div>
      <div class="date mb-15">${convertDate(release_date)}</div>
      <div class="search-container__overview">
        <p class="search-container__text">${overview}</p>
      </div>
    </div>
  </div>
`);

export const renderError = ({ status_code, status_message }) => (`
  <div class="container">
    <div class="error">
      <h2>Status code: ${status_code}</h2>
      <p>Status message: ${status_message}</p>
    </div>
  </div>
`);