import { TMDB_API_KEY } from '$env/static/private'
import { error } from '@sveltejs/kit';

export async function load({ fetch, params }) {
    const movieID = params.mov;
    const res = await fetch(`https://api.themoviedb.org/3/movie/${movieID}?api_key=${TMDB_API_KEY}&language=en-US`);

    const getMovieRating = await fetch(`https://api.themoviedb.org/3/movie/${movieID}/release_dates?api_key=${TMDB_API_KEY}`);
    
    const providerResponse = await fetch(`https://api.themoviedb.org/3/movie/${movieID}/watch/providers?api_key=${TMDB_API_KEY}&`);

    const trailerResponse = await fetch(`https://api.themoviedb.org/3/movie/${movieID}/videos?api_key=${TMDB_API_KEY}&language=en-US`);

    if (res.ok && providerResponse.ok && trailerResponse.ok) {
        const data = await res.json();
        const movieRating = await getMovieRating.json();
        const providerData = await providerResponse.json();
        const trailerData = await trailerResponse.json();

        const streamData = providerData.results?.US?.flatrate ?? null;
        const rentData = providerData.results?.US?.rent ?? null;
        const trailerResults = trailerData.results ?? null;
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
        const newTrailerResults = filteredTrailerSearch(trailerResults);

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
            stream_details: streamData,
            rent_details: rentData,
            trailer_details: newTrailerResults,
            movie_rating: officialUSRating
        }
    } else {
        error(404, "Not found.");
    }
}
