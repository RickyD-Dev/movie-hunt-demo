import { TMDB_API_KEY } from '$env/static/private'

export async function load({ fetch, params }) {
    const movieID = params.mov;
    const res = await fetch(`https://api.themoviedb.org/3/movie/${movieID}?api_key=${TMDB_API_KEY}&language=en-US`);
    
    const providerResponse = await fetch(`https://api.themoviedb.org/3/movie/${movieID}/watch/providers?api_key=${TMDB_API_KEY}&`);

    const data = await res.json();
    const providerData = await providerResponse.json();

    const streamData = providerData.results?.US?.flatrate ?? null;
    const rentData = providerData.results?.US?.rent ?? null;

    return {
        movie_details: data,
        provider_details: streamData,
        rent_details: rentData
    }
}
