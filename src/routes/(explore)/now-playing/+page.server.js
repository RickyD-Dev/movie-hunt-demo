import { TMDB_API_KEY } from '$env/static/private'

export async function load( { fetch }) {
    const fetchNowPlayingMovies = async () => {
        const response = await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${TMDB_API_KEY}&language=en-US&page=1&region=US`);

        const data = await response.json();
        return data.results
    }

    return {
        movies_nowPlaying: fetchNowPlayingMovies(),
    }
}
