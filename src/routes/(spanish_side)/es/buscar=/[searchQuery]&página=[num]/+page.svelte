<script>
    import { fly } from "svelte/transition";
    import Pagination from "../../../../../lib/Pagination.svelte";

    export let data;
    
    $: ({ userSearchData, route, theCurrentPage, allPages, currentSearch, resultsToDisplay, finalPage } = data);

    $: activePage = parseInt(theCurrentPage);
</script>

<div class="search_bar_container">
    <form method="POST" action="?/search" autocomplete="off">
        <input type="text" name="search" id="search" class="search_input" placeholder="Search Titles" value={`${currentSearch}`} required>
        <button class="search_button" type="submit">
            <i class="search_icon fa-solid fa-magnifying-glass"></i>
        </button>
    </form>

    <p class="results_for_text">Resultados para: "{currentSearch}"</p>
</div>

<div data-sveltekit-preload-data="touch" class="movies_container">
    {#key userSearchData}
        <ul class="movies_list" in:fly="{{ y:100, duration: 1000 }}">
            {#each userSearchData as entry}
                <li class="movie_posters">
                    <a href={`/es/buscar=/${route}&p%C3%A1gina=${theCurrentPage}/detalles/${entry.id}`}>
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

    <Pagination all_pages={allPages} the_current_page={theCurrentPage} active_page={activePage} results_to_display={resultsToDisplay} final_page={finalPage} current_search={currentSearch} />
</div>

<style>
    .search_bar_container {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-bottom: 15px;
        width: 80%;
        max-width: 700px;
        margin: 0 auto;
    }

    form {
        border-bottom: 1px solid #2cbfc9;
        display: flex;
        justify-content: center;
        align-items: center;
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

    .search_button {
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        top: 4px;
        background-color: transparent;
        border: none;
        width: 30px;
        height: 30px;
        cursor: pointer;
    }

    .search_icon {
        color: #fff;
        font-size: 1.15rem;
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
</style>