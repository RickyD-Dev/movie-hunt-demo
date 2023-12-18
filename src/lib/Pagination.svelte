<script>
    import { page } from '$app/stores';

    export let all_pages;
    export let the_current_page;
    export let active_page;
    export let genre_name;
    export let results_to_display;
    export let final_page;
    export let current_search;
</script>

{#if $page.url.pathname.includes("/genre=")}
    <div class="pages_list">
        {#if all_pages > 500}
            <p>Page {the_current_page} out of 500</p>
        {:else}
            <p>Page {the_current_page} out of {all_pages}</p>
        {/if}
    </div>

    <div class="pagination_container">
        <ul class="pagination_list">
            <li>
                {#if active_page === 1}
                    <a class="inactive" href={`/genre=/${genre_name}&page=1`}>First</a>
                {:else}
                    <a class="page_item" href={`/genre=/${genre_name}&page=1`}>First</a>
                {/if}
            </li>
            <li>
                {#if active_page === 1}
                    <a class="inactive" href={`/genre=/${genre_name}&page=1`}>&#60;</a>
                {:else if active_page > 1}
                    <a class="page_item" href={`/genre=/${genre_name}&page=${active_page-1}`}>&#60;</a>
                {/if}
            </li>
            {#each results_to_display as page}
                {#if page === active_page}
                    <li>
                        <a class="active" href={`/genre=/${genre_name}&page=${page}`}>{page}</a>
                    </li>
                {:else}
                    <li>
                        <a class="page_item" href={`/genre=/${genre_name}&page=${page}`}>{page}</a>
                    </li>
                {/if}
            {/each}
            <li>
                {#if active_page === final_page}
                    <a class="inactive" href={`/genre=/${genre_name}&page=${active_page}`}>&gt;</a>
                {:else if active_page < all_pages}
                    <a class="page_item" href={`/genre=/${genre_name}&page=${active_page+1}`}>&gt;</a>
                {/if}
            </li>
            <li>
                {#if active_page === final_page}
                    <a class="inactive" href={`/genre=/${genre_name}&page=${final_page}`}>Last</a>
                {:else}
                    <a class="page_item" href={`/genre=/${genre_name}&page=${final_page}`}>Last</a>
                {/if}
            </li>
        </ul>
    </div>
{:else if $page.url.pathname.includes("/search=")}
    <div class="pages_list">
        <p>Page {the_current_page} out of {final_page}</p>
    </div>

    <div class="pagination_container">
        <ul class="pagination_list">
            <li>
                {#if active_page === 1}
                    <a class="inactive" href={`/search=/${current_search}&page=1`}>First</a>
                {:else}
                    <a class="page_item" href={`/search=/${current_search}&page=1`}>First</a>
                {/if}
            </li>
            <li>
                {#if active_page === 1}
                    <a class="inactive" href={`/search=/${current_search}&page=1`}>&#60;</a>
                {:else if active_page > 1}
                    <a class="page_item" href={`/search=/${current_search}&page=${active_page-1}`}>&#60;</a>
                {/if}
            </li>
            {#each results_to_display as page}
                {#if page === active_page}
                    <li>
                        <a class="active" href={`/search=/${current_search}&page=${page}`}>{page}</a>
                    </li>
                {:else}
                    <li>
                        <a class="page_item" href={`/search=/${current_search}&page=${page}`}>{page}</a>
                    </li>
                {/if}
            {/each}
            <li>
                {#if active_page === final_page}
                    <a class="inactive" href={`/search=/${current_search}&page=${active_page}`}>&gt;</a>
                {:else if active_page < all_pages}
                    <a class="page_item" href={`/search=/${current_search}&page=${active_page+1}`}>&gt;</a>
                {/if}
            </li>
            <li>
                {#if active_page === final_page}
                    <a class="inactive" href={`/search=/${current_search}&page=${final_page}`}>Last</a>
                {:else}
                    <a class="page_item" href={`/search=/${current_search}&page=${final_page}`}>Last</a>
                {/if}
            </li>
        </ul>
    </div>
{:else if $page.url.pathname.includes("/es/g%C3%A9nero=")}
    <div class="pages_list">
        {#if all_pages > 500}
            <p>Página {the_current_page} de 500</p>
        {:else}
            <p>Página {the_current_page} de {all_pages}</p>
        {/if}
    </div>

    <div class="pagination_container">
        <ul class="pagination_list">
            <li>
                {#if active_page === 1}
                    <a class="inactive" href={`/es/g%C3%A9nero=/${genre_name}&p%C3%A1gina=1`}>Primera</a>
                {:else}
                    <a class="page_item" href={`/es/g%C3%A9nero=/${genre_name}&p%C3%A1gina=1`}>Primera</a>
                {/if}
            </li>
            <li>
                {#if active_page === 1}
                    <a class="inactive" href={`/es/g%C3%A9nero=/${genre_name}&p%C3%A1gina=1`}>&#60;</a>
                {:else if active_page > 1}
                    <a class="page_item" href={`/es/g%C3%A9nero=/${genre_name}&p%C3%A1gina=${active_page-1}`}>&#60;</a>
                {/if}
            </li>
            {#each results_to_display as page}
                {#if page === active_page}
                    <li>
                        <a class="active" href={`/es/g%C3%A9nero=/${genre_name}&p%C3%A1gina=${page}`}>{page}</a>
                    </li>
                {:else}
                    <li>
                        <a class="page_item" href={`/es/g%C3%A9nero=/${genre_name}&p%C3%A1gina=${page}`}>{page}</a>
                    </li>
                {/if}
            {/each}
            <li>
                {#if active_page === final_page}
                    <a class="inactive" href={`/es/g%C3%A9nero=/${genre_name}&p%C3%A1gina=${active_page}`}>&gt;</a>
                {:else if active_page < all_pages}
                    <a class="page_item" href={`/es/g%C3%A9nero=/${genre_name}&p%C3%A1gina=${active_page+1}`}>&gt;</a>
                {/if}
            </li>
            <li>
                {#if active_page === final_page}
                    <a class="inactive" href={`/es/g%C3%A9nero=/${genre_name}&p%C3%A1gina=${final_page}`}>Última</a>
                {:else}
                    <a class="page_item" href={`/es/g%C3%A9nero=/${genre_name}&p%C3%A1gina=${final_page}`}>Última</a>
                {/if}
            </li>
        </ul>
    </div>
{:else if $page.url.pathname.includes("/es/buscar=")}
    <div class="pages_list">
        <p>Página {the_current_page} de {final_page}</p>
    </div>

    <div class="pagination_container">
        <!-- PAGINATION SECTION -->
        <ul class="pagination_list">
            <li>
                {#if active_page === 1}
                    <a class="inactive" href={`/es/buscar=/${current_search}&p%C3%A1gina=1`}>Primera</a>
                {:else}
                    <a class="page_item" href={`/es/buscar=/${current_search}&p%C3%A1gina=1`}>Primera</a>
                {/if}
            </li>
            <li>
                {#if active_page === 1}
                    <a class="inactive" href={`/es/buscar=/${current_search}&p%C3%A1gina=1`}>&#60;</a>
                {:else if active_page > 1}
                    <a class="page_item" href={`/es/buscar=/${current_search}&p%C3%A1gina=${active_page-1}`}>&#60;</a>
                {/if}
            </li>
            {#each results_to_display as page}
                {#if page === active_page}
                    <li>
                        <a class="active" href={`/es/buscar=/${current_search}&p%C3%A1gina=${page}`}>{page}</a>
                    </li>
                {:else}
                    <li>
                        <a class="page_item" href={`/es/buscar=/${current_search}&p%C3%A1gina=${page}`}>{page}</a>
                    </li>
                {/if}
            {/each}
            <li>
                {#if active_page === final_page}
                    <a class="inactive" href={`/es/buscar=/${current_search}&p%C3%A1gina=${active_page}`}>&gt;</a>
                {:else if active_page < all_pages}
                    <a class="page_item" href={`/es/buscar=/${current_search}&p%C3%A1gina=${active_page+1}`}>&gt;</a>
                {/if}
            </li>
            <li>
                {#if active_page === final_page}
                    <a class="inactive" href={`/es/buscar=/${current_search}&p%C3%A1gina=${final_page}`}>Última</a>
                {:else}
                    <a class="page_item" href={`/es/buscar=/${current_search}&p%C3%A1gina=${final_page}`}>Última</a>
                {/if}
            </li>
        </ul>
    </div>
{/if}

<style>
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
        gap: 7px;
    }

    .page_item {
        display: flex;
        justify-content: center;
        padding: 4px 5px 0px;
        width: 100%;
        cursor: pointer;
        border-radius: 2px;
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