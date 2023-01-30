import { TMDB_API_KEY } from '$env/static/private';
import { error } from '@sveltejs/kit';

export async function load({ fetch, params }) {
    const genreID = params.genrePicked;
    const genrePageNum = params.genrePage;

    const res = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${TMDB_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${genrePageNum}&with_genres=${genreID}&with_watch_monetization_types=flatrate`);

    if (res.ok) {
        const data = await res.json();

        const dataResults = data.results;

        // const filteredFetchedSearch = (arr) => {
        //     const required = arr.filter(el => {
        //         return el.poster_path;
        //     });
        //     return required;
        // };

        // const newResults = filteredFetchedSearch(dataResults);

        const currentPage = data.page.toString();
        const allPages = data.total_pages.toString();

        const pageStart = 1;
        let pageEnd;

        if (data.total_pages > 500) {
            pageEnd = 500;
        } else if (data.total_pages < 500) {
            pageEnd = data.total_pages;
        }

        const rangeOfPages = Array.from({length: pageEnd}, (x, i) => i+pageStart);

        const maxAmountofPages = 4;
        let currentPageIndex = 0;
        let upperPageIndex = maxAmountofPages;

        let resultsToDisplay = rangeOfPages.slice(currentPageIndex, upperPageIndex);

        currentPageIndex += data.page - 1;
        upperPageIndex += data.page;

        resultsToDisplay = rangeOfPages.slice(currentPageIndex, upperPageIndex);

        if (data.total_pages >= 5 && currentPageIndex > (pageEnd - 5)) {
            resultsToDisplay = rangeOfPages.slice((pageEnd - 5), upperPageIndex);
        } else if (data.total_pages < 5 && (currentPageIndex + 1) <= (pageEnd)) {
            resultsToDisplay = rangeOfPages.slice((pageEnd - 6), upperPageIndex);
        };

        return {
            genreOfChoice: data.results,
            genreName: genreID,
            theCurrentPage: currentPage,
            allPages,
            resultsToDisplay,
            finalPage: pageEnd
        }
    } else {
        error(404, "Not found");
    }
}