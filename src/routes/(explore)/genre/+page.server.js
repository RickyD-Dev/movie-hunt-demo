import { TMDB_API_KEY } from '$env/static/private';

export async function load( { fetch }) {
    const fetchGenres = async () => {
        const response = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${TMDB_API_KEY}&language=en-US`);

        const data = await response.json();

        return data.genres
    }
    return {
        movieGenres: fetchGenres()
    }
}
