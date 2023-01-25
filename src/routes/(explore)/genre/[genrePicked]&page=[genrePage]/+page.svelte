<script>
    import { fly } from "svelte/transition";
    export let data;
    $: ({ genreOfChoice, genreName, theCurrentPage, allPages, resultsToDisplay } = data);

    $: activePage = parseInt(theCurrentPage);
</script>

<div class="genre_movies_container">
    <ul class="genre_movies_list">
        {#each genreOfChoice as movie}
            <li class="movie_posters" in:fly="{{ y:100, duration: 1000 }}">
                <a href={`/genre/${genreName}&page=1/details/${movie.id}`}>
                    {#if movie.poster_path === null}
                        <p class="if_poster_unavailable"><em>Image Unavailable</em></p>
                        <p class="if_poster_unavailable">{movie.title}</p>
                    {:else}
                        <img class="movie_poster_image" src="http://image.tmdb.org/t/p/w500/{movie.poster_path}" alt="{movie.title} movie poster">
                    {/if}
                </a>
            </li>
        {/each}
    </ul>

    <div class="pages_list">
        <!-- <p>Total results: {totalResults}</p> -->
        {#if allPages > 500}
            <p>Page {theCurrentPage} out of 500</p>
        {:else}
            <p>Page {theCurrentPage} out of {allPages}</p>
        {/if}
    </div>
    <div class="pagination_container">
        <!-- PAGINATION SECTION -->
        <ul class="pagination_list">
            <li>
                <a class="page_item" href={`/genre/${genreName}&page=1`}>First</a>
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
                {#if activePage === allPages || activePage === 500}
                    <a class="inactive" href={`/genre/${genreName}&page=${allPages}`}>&gt;</a>
                {:else if activePage < allPages}
                    <a class="page_item" href={`/genre/${genreName}&page=${activePage+1}`}>&gt;</a>
                {/if}
            </li>
            <li>
                {#if allPages > 500}
                    <a class="page_item" href={`/genre/${genreName}&page=500`}>Last</a>
                {:else}
                    <a class="page_item" href={`/genre/${genreName}&page=${allPages}`}>Last</a>
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
        padding-bottom: 6.5rem;
    }

    .genre_movies_list {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        justify-content: center;
        justify-items: center;
        gap: 10px;
        width: 100%;
        align-items: center;
        padding: 10px 15px;
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

    .if_poster_unavailable {
        padding: 5px 0px;
        text-align: center;
    }

    .unavailable_text {
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
    }

    .page_item {
        display: flex;
        justify-content: center;
        padding: 10px;
        width: 100%;
        cursor: pointer;
    }

    .page_item:hover {
        background-color: rgba(44, 191, 201, 0.3);
    }

    .active {
        display: flex;
        justify-content: center;
        padding: 10px;
        width: 100%;
        background-color: #2cbfc9;
        cursor: pointer;
        color: #000;
    }

    .inactive {
        display: none;
    }
</style>