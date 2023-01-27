<script>
    import { page } from '$app/stores';
    
    export let movieDetails;
    export let providerDetails;
    export let rentDetails;

    function goBack() {
        window.history.go(-1);
    };

    let newReleaseDateFormat;

    if (!movieDetails.poster_path === '') {
        const currentReleaseDateFormat =  new Date(movieDetails.release_date);

        const dateFormatting = new Intl.DateTimeFormat("en-us", {
            dateStyle: "long"
        });

        newReleaseDateFormat = dateFormatting.format(currentReleaseDateFormat);
    } else {
        newReleaseDateFormat = 'Unavailable';
    }

    console.log("release date", movieDetails.release_date);
</script>

<div class={$page.url.pathname.includes("/genre") ? "movie_details_container_genre" : "movie_details_container_search"}>
    <!-- <button class="details_return_button" on:click={goBack}>← Back to Genres</button> -->
    <div class="button_image_container">
        <button class="details_return_button" on:click={goBack}>←</button>
        {#if movieDetails.poster_path === null}
            <div class="image_unavailable">
                <img class src="/images/dog.jpg" alt="A cute dog">
                <p><em>Image Unavailable</em></p>
            </div>
        {:else}
            <div class="details_poster_container">
                <img src="http://image.tmdb.org/t/p/w500/{movieDetails.poster_path}" alt="">
            </div>
        {/if}
    </div>
    <h1 class="movie_details_title">{movieDetails.title}</h1>

    <div class="movieInfo_container">
        <div class="release_date">
            <h4>Release Date</h4>
            <p>{newReleaseDateFormat}</p>
        </div>
        <hr />
        {#if providerDetails != null && rentDetails != null}
            <div class="release_streaming_container">
                <div class="renting_platform">
                    <h4>Rent</h4>
                    <div class="renting_details_container">
                        {#each rentDetails as rent}
                            <p class="stream_item">{rent.provider_name}</p>
                        {/each}
                    </div>
                </div>

                <div class="streaming_platform">
                    <h4>Stream</h4>
                    <div class="streaming_details_container">
                            {#each providerDetails as provider}
                                <p class="stream_item">{provider.provider_name}</p>
                            {/each}
                    </div>
                </div>
            </div>
            <p class="tmdb_providers_link"><a href="https://www.themoviedb.org/movie/{movieDetails.id}/watch?locale=US">Please visit TMDB for more info</a></p>
        {:else if providerDetails != null && rentDetails === null}
            <div class="release_streaming_container">
                <div class="streaming_platform">
                    <h4>Stream</h4>
                    <div class="streaming_details_container">
                        {#each providerDetails as provider}
                            <p class="stream_item">{provider.provider_name}</p>
                        {/each}
                    </div>
                </div>
            </div>
            <p class="tmdb_providers_link"><a href="https://www.themoviedb.org/movie/{movieDetails.id}/watch?locale=US">Please visit TMDB for more info</a></p>
        {:else if providerDetails === null && rentDetails != null}
            <div class="release_streaming_container">
                <div class="renting_platform">
                    <h4>Rent</h4>
                    <div class="renting_details_container">
                        {#each rentDetails as rent}
                            <p class="stream_item">{rent.provider_name}</p>
                        {/each}
                    </div>
                </div>
            </div>
            <p class="tmdb_providers_link"><a href="https://www.themoviedb.org/movie/{movieDetails.id}/watch?locale=US">Please visit TMDB for more info</a></p>
        {:else if providerDetails === null && rentDetails === null}
            <div class="streaming_unavailable_container">
                <div class="renting_platform">
                    <p class="stream_unavailable"><em>Stream/Rent may be available soon</em></p>
                </div>
            </div>
            <p class="tmdb_providers_link"><a href="https://www.themoviedb.org/movie/{movieDetails.id}/watch?locale=US">Please visit TMDB for more info</a></p>
        {/if}
        <hr />
        <div class="details_container">
            <h4>Description</h4>
            <p>{movieDetails.overview}</p>
        </div>
    </div>
</div>

<style>
    h4 {
        padding-bottom: 5px;
    }

    hr {
        border: none;
        height: 1px;
        color: rgb(243, 243, 243);
        background-color: rgb(243, 243, 243);
        width: 100%;
        margin: 20px 0px;
    }

    .movie_details_container_genre {
        background-color: #000315;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        position: relative;
        bottom: 60px;
        padding: 0px 15px;
    }

    .movie_details_container_search {
        background-color: #000315;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        position: relative;
        padding: 0px 15px 2.5rem;
    }

    .button_image_container {
        display: flex;
        width: 100%;
        max-width: 500px;
        justify-content: center;
        padding-bottom: 15px;
        margin-right: 40px;
    }

    .details_return_button {
        cursor: pointer;
        position: relative;
        left: -9%;
        background-color: #000315;
        color: #20DCE8;
        border: 1px solid #20DCE8;
        border-radius: 50%;
        height: 35px;
        width: 35px;
        font-size: 16px;
        font-weight: 200;
    }

    .image_unavailable {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 55%;
        max-width: 270px;
        height: 100%;
        max-height: 432px;
        border: 1px solid #20DCE8;
    }

    .image_unavailable img {
        visibility: hidden;
        z-index: -1;
        width: 100%;
        max-width: 270px;
    }

    .image_unavailable p {
        position: absolute;
    }

    .details_poster_container {
        width: 55%;
        max-width: 270px;
    }

    .details_poster_container img {
        width: 100%;
        height: auto;
    }

    .movie_details_title {
        font-weight: 200;
        text-align: center;
        padding-bottom: 30px;
    }

    .movieInfo_container {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        max-width: 520px;
    }

    .release_streaming_container {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 100%;
        max-width: 520px;
    }

    .release_date {
        display: flex;
        flex-direction: column;
        align-self: flex-start;
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

    .stream_item {
        padding-bottom: 5px;
    }

    .stream_unavailable {
        text-align: center;
        width: 100%;
    }

    .streaming_unavailable_container {
        display: flex;
        flex-direction: row;
        justify-content: center;
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

    .tmdb_providers_link {
        text-decoration: underline;
        text-align: center;
    }

    .tmdb_providers_link a:hover {
        text-decoration: underline;
        text-decoration-color: #20DCE8;
    }

    .details_container {
        display: flex;
        flex-direction: column;
        width: 100%;
        justify-content: center;
    }
</style>