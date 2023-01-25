<script>
    export let genreDetails;
</script>

<div class="title-button-container">
    <h1 class="genre-title">Action</h1>
</div>

<div class="actionGenre_movies_container">
    <ul class="actionGenre_movies_list">
        {#each actionMovies as actionMovie}
            <li class="movie_posters">
                <img class="movie_poster_image" src="http://image.tmdb.org/t/p/w500/{actionMovie.poster_path}" alt="{actionMovie.title} movie poster">
            </li>
        {/each}
    </ul>
</div>

<style>
    .genre-title {
        font-weight: 200;
        text-align: center;
        padding-bottom: 20px;
    }

    .actionGenre_movies_container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
    }

    .actionGenre_movies_list {
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
    }

    .movie_poster_image {
        width: 100%;
        object-fit: cover;
    }
</style>