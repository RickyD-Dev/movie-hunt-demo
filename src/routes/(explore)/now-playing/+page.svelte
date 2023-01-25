<script>
    export let data;
    const { movies_nowPlaying } = data;
</script>

<div class="nowPlaying_movies_container">
    <ul class="nowPlaying_movies_list">
        {#await movies_nowPlaying then movies_nowPlaying}
            {#each movies_nowPlaying as movieNowPlaying}
                <li class="movie_posters">
                    <a href={`/now-playing/details/${movieNowPlaying.id}`}>
                        <img class="movie_poster_image" src="http://image.tmdb.org/t/p/w500/{movieNowPlaying.poster_path}" alt="{movieNowPlaying.title} movie poster">
                    </a>
                </li>
            {/each}
        {/await}
        <!-- {#each movies_nowPlaying as movieNowPlaying}
            <li class="movie_posters">
                <a href={`/now-playing/details/${movieNowPlaying.id}`}>
                    <img class="movie_poster_image" src="http://image.tmdb.org/t/p/w500/{movieNowPlaying.poster_path}" alt="{movieNowPlaying.title} movie poster">
                </a>
            </li>
        {/each} -->
    </ul>
</div>

<div class="load_more_button_container">
    <button class="load_more_button">Load More</button>
</div>

<style>
    .nowPlaying_movies_container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
    }

    .nowPlaying_movies_list {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        justify-content: center;
        justify-items: center;
        gap: 5px 10px;
        width: 100%;
        align-items: center;
        padding: 10px 15px;
    }

    .movie_posters {
        max-width: 285px;
        max-height: 432px;
        cursor: pointer;
    }

    .movie_poster_image {
        width: 100%;
        object-fit: cover;
    }

    .load_more_button_container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding-bottom: 25px;
    }

    .load_more_button {
        border: 1px solid #2cbfc9;
        cursor: pointer;
        width: 93.5%;
        height: 30px;
        background-color: #000315;
        color: #fff;
        transition: background-color 150ms ease-in-out;
    }

    .load_more_button:hover {
        background-color: rgba(44, 191, 201, 0.2);
    }
</style>