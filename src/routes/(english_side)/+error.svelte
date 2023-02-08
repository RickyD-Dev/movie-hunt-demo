<script>
    import { page } from "$app/stores";

    $: pageStatus = $page.status;

</script>

<div class="error_container">
    <div class="cute_dogImage_container">
        <img lang="en-US" src="https://www.transparentpng.com/thumb/dog/transparent-picture-dog-4.png" alt="A cute dog from @transparentpng.com">
    </div>

    <div class="error_message_container">
        {#if pageStatus === 404}
            <h1 lang="en-US">Sorry, we couldn't find what you were looking for but we did manage to find this cute dog!</h1>

            <p lang="en-US" class="keep_browsing_message">Please check the URL for any oddball behaviour or feel free to keep browsing for movies by going back to our <a href="/" class="error_homepage_link">homepage</a>.</p>

            <div class="for_theNerds">
                <h3 lang="en-US">For the nerds:</h3>
                <p lang="en-US">Error {pageStatus}</p>
                <p lang="en-US">Page {$page.error.message}</p>
            </div>
        {:else if pageStatus === 500}
            <h1 lang="en-US">Looks like there's been an internal error...</h1>

            <p lang="en-US" class="keep_browsing_message">You can hang out with this cute dog or feel free to keep browsing for movies by going back to our <a href="/" class="error_homepage_link">homepage</a>.</p>

            <div class="for_theNerds">
                <h3 lang="en-US">For the nerds:</h3>
                <p lang="en-US">Error {pageStatus}</p>
            </div>
        {:else}
            <h1 lang="en-US">I think we made a mistake...</h1>

            <p lang="en-US" class="keep_browsing_message">Please forgive us? Once you do (because you will), feel free to keep browsing for movies by going back to our <a href="/" class="error_homepage_link">homepage</a>.</p>

            <div class="for_theNerds">
                <h3 lang="en-US">For the nerds:</h3>
                <p lang="en-US">Error {pageStatus}</p>
            </div>
        {/if}
    </div>
</div>

<style>
    .error_container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        padding: 50px 0px;
    }

    .error_message_container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        max-width: 810px;
        padding: 20px;
    }

    .error_message_container h1 {
        font-size: 20px;
        text-align: center;
        padding-bottom: 15px;
    }

    .keep_browsing_message {
        padding-bottom: 15px;
        text-align: center;
    }

    .error_homepage_link {
        color: #2cbfc9;
    }

    .error_homepage_link:hover {
        text-decoration: underline;
    }

    .for_theNerds {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
    }

    .cute_dogImage_container {
        display: block;
        width: 200px;
        height: auto;
    }

    .cute_dogImage_container img {
        width: 100%;
        object-fit: cover;
        height: 100%;
    }
</style>