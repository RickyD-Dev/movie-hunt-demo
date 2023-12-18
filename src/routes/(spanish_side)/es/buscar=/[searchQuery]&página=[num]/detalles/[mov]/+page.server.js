import { TMDB_API_KEY } from '$env/static/private'
import { error } from '@sveltejs/kit';

export async function load({ fetch, params }) {
    const movieID = params.mov;
    const res = await fetch(`https://api.themoviedb.org/3/movie/${movieID}?api_key=${TMDB_API_KEY}&language=es-MX`);

    const getMovieRating = await fetch(`https://api.themoviedb.org/3/movie/${movieID}/release_dates?api_key=${TMDB_API_KEY}`);
    
    const providerResponse = await fetch(`https://api.themoviedb.org/3/movie/${movieID}/watch/providers?api_key=${TMDB_API_KEY}&`);

    const spanishTrailerResponse = await fetch(`https://api.themoviedb.org/3/movie/${movieID}/videos?api_key=${TMDB_API_KEY}&language=es-MX`);
    const englishTrailerResponse = await fetch(`https://api.themoviedb.org/3/movie/${movieID}/videos?api_key=${TMDB_API_KEY}&language=en-US`);

    if (res.ok && providerResponse.ok && spanishTrailerResponse.ok && englishTrailerResponse.ok) {
        const data = await res.json();
        const movieRating = await getMovieRating.json();
        const providerData = await providerResponse.json();
        const spanishTrailerData = await spanishTrailerResponse.json();
        const englishTrailerData = await englishTrailerResponse.json();

        const streamData = providerData.results?.US?.flatrate ?? null;
        const rentData = providerData.results?.US?.rent ?? null;
        const spanishTrailerResults = spanishTrailerData.results ?? null;
        const englishTrailerResults = englishTrailerData.results ?? null;
        const ratingData = movieRating.results ?? null;

        const filteredTrailerSearch = (arr) => {
            // Filters out all other videos that are not the official trailer:
            const required = arr.filter(el => {
                const officialTrailer = el.type;
                if (officialTrailer === "Trailer") {
                    return el.type;
                }
            });
            return required;
        };

        const newSpanishTrailerResults = filteredTrailerSearch(spanishTrailerResults);
        const newEnglishTrailerResults = filteredTrailerSearch(englishTrailerResults);

        let chosenTrailer;

        // If the fetch request for a Spanish trailer does not equal undefined, then the chosen trailer for the movie details will be the one provided by the Spanish request.
        if (newSpanishTrailerResults[0] !== undefined) {
            chosenTrailer = newSpanishTrailerResults;
        // If the fetch request for a Spanish trailer comes back as undefined, then use the fetch request for the English trailer instead.
        } else if (newSpanishTrailerResults[0] === undefined) {
            chosenTrailer = newEnglishTrailerResults;
        // If anything else, default to the Spanish fetch request. The MovieDetails component will take care of the situation in case both fetch requests come back with 'undefined'.
        } else {
            chosenTrailer = newSpanishTrailerResults;
        }

        const findUSEntry = (arr) => {
            const usEntry = arr.find(entry => entry.iso_3166_1 === 'US');
            if (usEntry && usEntry.release_dates.length > 0) {
                let firstCertification = "";
    
                for (const releaseDate of usEntry.release_dates) {
                    if (releaseDate.certification.trim() !== "") {
                        firstCertification = releaseDate.certification;
                        break;
                    }
                }
    
                if (firstCertification !== "") {
                    return firstCertification;
                }
            }
        }
        const officialUSRating = findUSEntry(ratingData);

        return {
            movie_details: data,
            provider_details: streamData,
            rent_details: rentData,
            trailer_details: chosenTrailer,
            movie_rating: officialUSRating
        }
    } else {
        error(404, "Not found.");
    }
}
