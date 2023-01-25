import { TMDB_API_KEY } from "$env/static/private";
import { redirect } from "@sveltejs/kit";

export const actions = {
    search: async ({ request }) => {
        const data = await request.formData();
        const userQuery = data.get('search');

        throw redirect(302, `/search/${userQuery}&page=1`);
    }
}

export async function load({ params, fetch }) {
    const userSearchQuery = await params.searchQuery;

    const userPageQuery = await params.num;

    const searchFetch = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${TMDB_API_KEY}&language=en-US&query=${userSearchQuery}&page=${userPageQuery}&include_adult=false&region=US`);

    const searchData = await searchFetch.json();

    const fetchedSearch = searchData.results;

    const filteredFetchedSearch = (arr) => {
        const required = arr.filter(el => {
            return el.poster_path;
        });
        return required;
    };

    const newSearch = filteredFetchedSearch(fetchedSearch);

    const searchCurrentPage = searchData.page.toString();
    const searchAllPages = searchData.total_pages.toString();
    const totalSearchResults = searchData.total_results.toString();

    const pageStart = 1;
    const pageEnd = searchData.total_pages;

    const rangeOfPages = Array.from({length: pageEnd}, (x, i) => i+pageStart);

    const currentSearchQuery = userSearchQuery;

    const maxAmountofPages = 6;
    let currentPageIndex = 0;
    let upperPageIndex = maxAmountofPages;

    let resultsToDisplay = rangeOfPages.slice(currentPageIndex, upperPageIndex);

    currentPageIndex += searchData.page - 1;
    upperPageIndex += searchData.page;

    resultsToDisplay = rangeOfPages.slice(currentPageIndex, upperPageIndex);

    if (searchData.total_pages >= 7 && currentPageIndex > (searchData.total_pages - 7)) {
        resultsToDisplay = rangeOfPages.slice((searchData.total_pages-7), upperPageIndex);
    }

    return {
        userSearchData: fetchedSearch,
        route: userSearchQuery,
        theCurrentPage: searchCurrentPage,
        allPages: searchAllPages,
        totalResults: totalSearchResults,
        currentSearch: currentSearchQuery,
        rangeOfPages,
        resultsToDisplay
    }
}