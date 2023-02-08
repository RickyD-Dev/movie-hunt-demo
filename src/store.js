import { writable } from "svelte/store";

let placeHolder = writable({
    genre: '',
    genrePage: '',
    userSearch: '',
    searchPage: '',
    movieID: ''
});

export default placeHolder;