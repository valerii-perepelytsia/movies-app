import {API_KEY, API_URL, IMG_URL, SEARCH_URL} from "./constants";

export const generateApiUrl = path => `${API_URL}${path}?api_key=${API_KEY}`
export const generateImageUrl = path => `${IMG_URL}${path}`
export const generateSearchUrl = path => `${SEARCH_URL}?api_key=${API_KEY}&language=en-US&query=${path}&page=1&include_adult=false`
export const convertDate = date => new Date(date).toDateString();
export const calculatePopularity = popularity => Math.round(popularity / 100);
