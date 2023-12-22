<script>
    import { fly } from "svelte/transition";
    import Pagination from "../../../../../lib/Pagination.svelte";

    export let data;

    $: ({ genreOfChoice, genreName, theCurrentPage, allPages, finalPage, resultsToDisplay } = data);

    $: activePage = parseInt(theCurrentPage);
</script>

<div data-sveltekit-preload-data="touch" class="genre_movies_container">
    {#key genreOfChoice}
        <ul class="genre_movies_list" in:fly|global="{{ y:100, duration: 1000 }}">
            {#each genreOfChoice as movie}
                <li id={movie.id} class="movie_posters">
                    <a href={`/es/g%C3%A9nero=/${genreName}&p%C3%A1gina=1/detalles/${movie.id}`}>
                        {#if movie.poster_path === null}
                            <div class="image_unavailable_container">
                                <p><em>Imagen no disponible</em></p>
                                <p>{movie.title}</p>
                            </div>
                        {:else}
                            <img class="movie_poster_image" src="http://image.tmdb.org/t/p/w500/{movie.poster_path}" alt="{movie.title} movie poster">
                        {/if}
                    </a>
                </li>
            {/each}
        </ul>
    {/key}

    <Pagination all_pages={allPages} the_current_page={theCurrentPage} active_page={activePage} genre_name={genreName} results_to_display={resultsToDisplay} final_page={finalPage} />
</div>

<style>
    .genre_movies_container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        padding-bottom: 2.5rem;
    }

    .genre_movies_list {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-auto-rows: 1fr;
        justify-content: center;
        justify-items: center;
        gap: 10px;
        width: 100%;
        align-items: center;
        padding: 10px 15px;
        max-width: 1180px;
    }

    @media screen and (min-width: 768px) {
        .genre_movies_list {
            grid-template-columns: repeat(4, 1fr);
        }
    }

    @media screen and (min-width: 620px) and (max-width: 767px) {
        .genre_movies_list {
            grid-template-columns: repeat(3, 1fr);
        }
    }

    .movie_posters {
        width: 100%;
        height: 100%;
        max-width: 285px;
        max-height: 432px;
        border: 1px solid #2cbfc9;
    }

    .movie_poster_image {
        width: 100%;
        object-fit: cover;
        height: 100%;
        max-height: 432px;
    }

    .image_unavailable_container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        max-width: 285px;
        max-height: 432px;
        text-align: center;
    }

    .image_unavailable_container p {
        padding-bottom: 10px;
    }
</style>