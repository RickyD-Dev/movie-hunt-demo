<script>
    import { page } from '$app/stores';

    export let provider_details;
    export let rent_details;
    export let movie_details;
</script>

<div class="movie_rent_streaming_container">
    {#if provider_details != null && rent_details != null}
        <div class="release_streaming_container">
            <div class="renting_platform">
                {#if $page.url.pathname.includes('/es')}
                    <h4>Rentar</h4>
                {:else}
                    <h4>Rent</h4>
                {/if}
                <div class="renting_details_container">
                    {#each rent_details as rent}
                        <p class="stream_item">{rent.provider_name}</p>
                    {/each}
                </div>
            </div>

            <div class="streaming_platform">
                {#if $page.url.pathname.includes('/es')}
                    <h4>Transmitir</h4>
                {:else}
                    <h4>Stream</h4>
                {/if}
                <div class="streaming_details_container">
                    {#each provider_details as provider}
                        <p class="stream_item">{provider.provider_name}</p>
                    {/each}
                </div>
            </div>
        </div>
        {#if $page.url.pathname.includes('/es')}
            <p class="tmdb_providers_link">
                <a href="https://www.themoviedb.org/movie/{movie_details.id}/watch?locale=US"
                    >Visite TMDB para obtener más información</a
                >
            </p>
        {:else}
            <p class="tmdb_providers_link">
                <a href="https://www.themoviedb.org/movie/{movie_details.id}/watch?locale=US"
                    >Please visit TMDB for more info</a
                >
            </p>
        {/if}
    {:else if provider_details != null && rent_details === null}
        <div class="release_streaming_container">
            <div class="streaming_platform">
                {#if $page.url.pathname.includes('/es')}
                    <h4>Transmitir</h4>
                {:else}
                    <h4>Stream</h4>
                {/if}
                <div class="streaming_details_container">
                    {#each provider_details as provider}
                        <p class="stream_item">{provider.provider_name}</p>
                    {/each}
                </div>
            </div>
        </div>
        {#if $page.url.pathname.includes('/es')}
            <p class="tmdb_providers_link">
                <a href="https://www.themoviedb.org/movie/{movie_details.id}/watch?locale=US"
                    >Visite TMDB para obtener más información</a
                >
            </p>
        {:else}
            <p class="tmdb_providers_link">
                <a href="https://www.themoviedb.org/movie/{movie_details.id}/watch?locale=US"
                    >Please visit TMDB for more info</a
                >
            </p>
        {/if}
    {:else if provider_details === null && rent_details != null}
        <div class="release_streaming_container">
            <div class="renting_platform">
                {#if $page.url.pathname.includes('/es')}
                    <h4>Rentar</h4>
                {:else}
                    <h4>Rent</h4>
                {/if}
                <div class="renting_details_container">
                    {#each rent_details as rent}
                        <p class="stream_item">{rent.provider_name}</p>
                    {/each}
                </div>
            </div>
        </div>
        {#if $page.url.pathname.includes('/es')}
            <p class="tmdb_providers_link">
                <a href="https://www.themoviedb.org/movie/{movie_details.id}/watch?locale=US"
                    >Visite TMDB para obtener más información</a
                >
            </p>
        {:else}
            <p class="tmdb_providers_link">
                <a href="https://www.themoviedb.org/movie/{movie_details.id}/watch?locale=US"
                    >Please visit TMDB for more info</a
                >
            </p>
        {/if}
    {:else if provider_details === null && rent_details === null}
        <div class="streaming_unavailable_container">
            <div class="renting_platform">
                {#if $page.url.pathname.includes('/es')}
                    <p class="stream_unavailable">
                        <em
                            >* La información de renta o transmisión no está disponible en este momento, pero
                            puede estar disponible en otros lugares. Configuramos una búsqueda en Google para
                            que <a
                                class="find_out_more"
                                href="https://www.google.com/search?q={movie_details.title}+(film)"
                                target="_blank"
                                rel="noreferrer"
                                title="{movie_details.title} google search for streaming providers"
                                >obtengas más información</a
                            >.</em
                        >
                    </p>
                {:else}
                    <p class="stream_unavailable">
                        <em
                            >* Stream/Rent info for this title is unavailable at this time but it may be available
                            elsewhere. We set up a Google search for you to <a
                                class="find_out_more"
                                href="https://www.google.com/search?q={movie_details.title}+(film)"
                                target="_blank"
                                rel="noreferrer"
                                title="{movie_details.title} google search for streaming providers"
                                >find out more</a
                            >.</em
                        >
                    </p>
                {/if}
            </div>
        </div>
        {#if $page.url.pathname.includes('/es')}
            <p class="tmdb_providers_link">
                <a
                    href="https://www.themoviedb.org/movie/{movie_details.id}/watch?locale=US"
                    target="_blank"
                    rel="noreferrer">También puedes visitar TMDB para obtener más información</a
                >
            </p>
        {:else}
            <p class="tmdb_providers_link">
                <a
                    href="https://www.themoviedb.org/movie/{movie_details.id}/watch?locale=US"
                    target="_blank"
                    rel="noreferrer">You can also visit TMDB for more info</a
                >
            </p>
        {/if}
    {/if}
</div>

<style>
    .movie_rent_streaming_container {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		width: 100%;
		max-width: 800px;
	}

    .release_streaming_container {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		grid-auto-rows: 1fr;
		gap: 0px 20px;
		width: 100%;
		max-width: 520px;
	}

    .renting_platform {
		display: flex;
		flex-direction: column;
		padding-bottom: 20px;
	}

    .renting_details_container {
		display: flex;
		flex-direction: column;
	}

    .stream_item {
		padding-bottom: 5px;
	}

    .streaming_platform {
		display: flex;
		flex-direction: column;
		padding-bottom: 20px;
	}

    .streaming_details_container {
		display: flex;
		flex-direction: column;
	}

    .tmdb_providers_link a {
		text-decoration: underline;
		text-decoration-color: #20dce8;
	}

	.tmdb_providers_link a:hover {
		text-decoration: underline;
		text-decoration-color: #fff;
	}

    .streaming_unavailable_container {
		display: flex;
		flex-direction: row;
		justify-content: center;
		width: 100%;
		max-width: 520px;
	}

    .stream_unavailable {
		width: 100%;
	}

    .find_out_more {
		text-decoration: underline;
		text-decoration-color: #20dce8;
	}

	.find_out_more:hover {
		text-decoration: underline;
		text-decoration-color: #fff;
	}

</style>