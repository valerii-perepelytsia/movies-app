import {getMovieDetails, getMovies, searchMovie} from "./api";

window.addEventListener('hashchange', () => {
    checkUrl();
})

const searchInput = document.querySelector('#search');
const searchBtn = document.querySelector('#search-button');

searchInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        e.preventDefault();
        searchBtn.click();
    }
})

searchBtn.addEventListener('click', () => {
    window.location.hash = '#search=' + searchInput.value
    searchMovie(searchInput.value, '.root');
})

const checkUrl = () => {
    const {location: {hash}} = window;
    const [hashName, movieId] = hash.split('=');

    switch (hashName) {
        case '#movieId':
            getMovieDetails(movieId, '.root');
            break
        case '#search':
            searchMovie(movieId, '.root');
            break
        default:
            getMovies('popular', '.root');
    }
}

checkUrl();