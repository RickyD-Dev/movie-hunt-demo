<script>
    import { fly } from "svelte/transition";
    export let data;
    
    $: ({ userSearchData, route, theCurrentPage, allPages, currentSearch, resultsToDisplay, finalPage } = data);

    $: activePage = parseInt(theCurrentPage);
</script>

<div class="search_bar_container">
    <form method="POST" action="?/search" autocomplete="off">
        <input type="text" name="search" id="search" class="search_input" placeholder="Search Titles" value={`${currentSearch}`} required>
    </form>

    <p class="results_for_text">Resultados para: "{currentSearch}"</p>
</div>

<div data-sveltekit-preload-data="touch" class="movies_container">
    {#key userSearchData}
        <ul class="movies_list" in:fly="{{ y:100, duration: 1000 }}">
            {#each userSearchData as entry}
                <li class="movie_posters">
                    <a href={`/es/buscar/${route}&p%C3%A1gina=${theCurrentPage}/detalles/${entry.id}`}>
                        {#if entry.poster_path === null}
                            <div class="image_unavailable_container">
                                <p><em>Imagen no disponible</em></p>
                                <p>{entry.title}</p>
                            </div>
                        {:else}
                            <img class="movie_poster_image" src="http://image.tmdb.org/t/p/w500/{entry.poster_path}" alt="{entry.title} movie poster">
                        {/if}
                    </a>
                </li>
            {/each}
        </ul>
    {/key}

    <div class="pages_list">
        <p>Página {theCurrentPage} de {finalPage}</p>
    </div>

    <div class="pagination_container">
        <!-- PAGINATION SECTION -->
        <ul class="pagination_list">
            <li>
                {#if activePage === 1}
                    <a class="inactive" href={`/es/buscar/${currentSearch}&p%C3%A1gina=1`}>Primera</a>
                {:else}
                    <a class="page_item" href={`/es/buscar/${currentSearch}&p%C3%A1gina=1`}>Primera</a>
                {/if}
            </li>
            <li>
                {#if activePage === 1}
                    <a class="inactive" href={`/es/buscar/${currentSearch}&p%C3%A1gina=1`}>&#60;</a>
                {:else if activePage > 1}
                    <a class="page_item" href={`/es/buscar/${currentSearch}&p%C3%A1gina=${activePage-1}`}>&#60;</a>
                {/if}
            </li>
            {#each resultsToDisplay as page}
                {#if page === activePage}
                    <li>
                        <a class="active" href={`/es/buscar/${currentSearch}&p%C3%A1gina=${page}`}>{page}</a>
                    </li>
                {:else}
                    <li>
                        <a class="page_item" href={`/es/buscar/${currentSearch}&p%C3%A1gina=${page}`}>{page}</a>
                    </li>
                {/if}
            {/each}
            <li>
                {#if activePage === finalPage}
                    <a class="inactive" href={`/es/buscar/${currentSearch}&p%C3%A1gina=${activePage}`}>&gt;</a>
                {:else if activePage < allPages}
                    <a class="page_item" href={`/es/buscar/${currentSearch}&p%C3%A1gina=${activePage+1}`}>&gt;</a>
                {/if}
            </li>
            <li>
                {#if activePage === finalPage}
                    <a class="inactive" href={`/es/buscar/${currentSearch}&p%C3%A1gina=${finalPage}`}>Última</a>
                {:else}
                    <a class="page_item" href={`/es/buscar/${currentSearch}&p%C3%A1gina=${finalPage}`}>Última</a>
                {/if}
            </li>
        </ul>
    </div>
</div>

<style>
    .search_bar_container {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-bottom: 15px;
        width: 80%;
        margin: 0 auto;
    }

    form {
        border-bottom: 1px solid #2cbfc9;
        width: 100%;
        height: 50px;
    }

    .search_input {
        background-color: transparent;
        color: #fff;
        width: 100%;
        height: 100%;
        border: none;
        font-size: 22px;
        font-weight: 200;
    }

    .search_input::placeholder {
        color: rgba(255, 255, 255, 0.6);
    }

    .search_input:focus-visible {
        outline: none;
        caret-color: #fff;
    }

    .results_for_text {
        display: flex;
        padding-top: 10px;
        font-size: 18px;
        align-self: flex-start;
    }

    .movies_container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        padding-bottom: 2.5rem;
    }

    .movies_list {
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

    @media screen and (min-width: 660px) and (orientation: landscape) {
        .movies_list {
            grid-template-columns: repeat(4, 1fr);
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
        padding: 5px;
        width: 100%;
        cursor: pointer;
    }

    .page_item:hover {
        background-color: rgba(44, 191, 201, 0.3);
    }

    .active {
        display: flex;
        justify-content: center;
        padding: 5px;
        width: 100%;
        background-color: #2cbfc9;
        cursor: pointer;
        color: #000;
    }

    .inactive {
        display: none;
    }
</style>