import { TMDB_API_KEY } from '$env/static/private';
import { error } from '@sveltejs/kit';

export async function load( { fetch }) {
    const response = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${TMDB_API_KEY}&language=en-US`);

    if (response.ok) {
        const data = await response.json();

        return {
            movieGenres: data.genres
        }
    } else {
        error(404, "Not found.");
    }
}
