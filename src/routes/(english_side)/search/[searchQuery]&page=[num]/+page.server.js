import { TMDB_API_KEY } from "$env/static/private";
import { error, redirect } from "@sveltejs/kit";

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

    if (searchFetch.ok) {
        const searchData = await searchFetch.json();

        const fetchedSearch = searchData.results;

        const searchCurrentPage = searchData.page.toString();
        const searchAllPages = searchData.total_pages.toString();
        const totalSearchResults = searchData.total_results.toString();

        const pageStart = 1;
        let pageEnd;

        if (searchData.total_pages > 500) {
            pageEnd = 500;
        } else if (searchData.total_pages <= 500) {
            pageEnd = searchData.total_pages;
        }

        const rangeOfPages = Array.from({length: pageEnd}, (x, i) => i+pageStart);

        const currentSearchQuery = userSearchQuery;

        const maxAmountofPages = 4;
        let currentPageIndex = 0;
        let upperPageIndex = maxAmountofPages;

        let resultsToDisplay = rangeOfPages.slice(currentPageIndex, upperPageIndex);
        
        currentPageIndex += searchData.page - 1;
        upperPageIndex += searchData.page;

        resultsToDisplay = rangeOfPages.slice(currentPageIndex, upperPageIndex);

        if (searchData.total_pages < 5 && (currentPageIndex + 1) <= (pageEnd)) {
            resultsToDisplay = rangeOfPages.slice((pageEnd - 8), upperPageIndex);
        } else if (searchData.total_pages >= 5 && currentPageIndex > (pageEnd - 5)) {
            resultsToDisplay = rangeOfPages.slice((pageEnd - 5), upperPageIndex);
        };

        return {
            userSearchData: fetchedSearch,
            route: userSearchQuery,
            theCurrentPage: searchCurrentPage,
            allPages: searchAllPages,
            totalResults: totalSearchResults,
            currentSearch: currentSearchQuery,
            rangeOfPages,
            resultsToDisplay,
            finalPage: pageEnd
        }
    } else {
        error(404, "Not found.");
    }
}