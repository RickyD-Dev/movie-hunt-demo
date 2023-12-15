<script>
    import { fly } from "svelte/transition";
    export let data;

    $: ({ genreOfChoice, genreName, theCurrentPage, allPages, finalPage, resultsToDisplay } = data);

    $: activePage = parseInt(theCurrentPage);
</script>

<div data-sveltekit-preload-data="touch" class="genre_movies_container">
    {#key genreOfChoice}
        <ul class="genre_movies_list" in:fly="{{ y:100, duration: 1000 }}">
            {#each genreOfChoice as movie}
                <li id={movie.id} class="movie_posters">
                    <a href={`/genre/${genreName}&page=1/details/${movie.id}`}>
                        {#if movie.poster_path === null}
                            <div class="image_unavailable_container">
                                <p><em>Image Unavailable</em></p>
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

    <div class="pages_list">
        {#if allPages > 500}
            <p>Page {theCurrentPage} out of 500</p>
        {:else}
            <p>Page {theCurrentPage} out of {allPages}</p>
        {/if}
    </div>

    <div class="pagination_container">
        <ul class="pagination_list">
            <li>
                {#if activePage === 1}
                    <a class="inactive" href={`/genre/${genreName}&page=1`}>First</a>
                {:else}
                    <a class="page_item" href={`/genre/${genreName}&page=1`}>First</a>
                {/if}
            </li>
            <li>
                {#if activePage === 1}
                    <a class="inactive" href={`/genre/${genreName}&page=1`}>&#60;</a>
                {:else if activePage > 1}
                    <a class="page_item" href={`/genre/${genreName}&page=${activePage-1}`}>&#60;</a>
                {/if}
            </li>
            {#each resultsToDisplay as page}
                {#if page === activePage}
                    <li>
                        <a class="active" href={`/genre/${genreName}&page=${page}`}>{page}</a>
                    </li>
                {:else}
                    <li>
                        <a class="page_item" href={`/genre/${genreName}&page=${page}`}>{page}</a>
                    </li>
                {/if}
            {/each}
            <li>
                {#if activePage === finalPage}
                    <a class="inactive" href={`/genre/${genreName}&page=${activePage}`}>&gt;</a>
                {:else if activePage < allPages}
                    <a class="page_item" href={`/genre/${genreName}&page=${activePage+1}`}>&gt;</a>
                {/if}
            </li>
            <li>
                {#if activePage === finalPage}
                    <a class="inactive" href={`/genre/${genreName}&page=${finalPage}`}>Last</a>
                {:else}
                    <a class="page_item" href={`/genre/${genreName}&page=${finalPage}`}>Last</a>
                {/if}
            </li>
        </ul>
    </div>
</div>

<style>
    .genre_movies_container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
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

    .pages_list {
        padding: 20px 0px 0px;
    }

    .pagination_container {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        max-width: 520px;
        padding: 10px;
        margin-bottom: 20px;
    }

    .pagination_list {
        width: 100%;
        display: flex;
        justify-content: center;
        gap: 3px;
    }

    .page_item {
        display: flex;
        justify-content: center;
        padding: 4px 5px 0px;
        width: 100%;
        cursor: pointer;
    }

    .page_item:hover {
        background-color: rgba(44, 191, 201, 0.3);
    }

    .active {
        display: flex;
        justify-content: center;
        padding: 4px 5px 0px;
        width: 100%;
        background-color: #2cbfc9;
        cursor: pointer;
        color: #000;
        border-radius: 2px;
    }

    .inactive {
        display: none;
    }
</style>