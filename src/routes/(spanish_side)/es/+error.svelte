<script>
    import { page } from "$app/stores";

    $: pageStatus = $page.status;

</script>

<div class="error_container">
    <div class="cute_dogImage_container">
        <img lang="es-MX" src="https://www.transparentpng.com/thumb/dog/transparent-picture-dog-4.png" alt="A cute dog from @transparentpng.com">
    </div>

    <div class="error_message_container">
        {#if pageStatus === 404}
            <h1 lang="es-MX">Lo sentimos, no pudimos encontrar lo que estabas buscando, ¡pero logramos encontrar a este lindo perrito!</h1>

            <p lang="es-MX" class="keep_browsing_message">Verifique la URL para detectar cualquier comportamiento extraño o siéntase libre de seguir buscando películas volviendo a nuestro <a href="/" class="error_homepage_link">página principal</a>.</p>

            <div class="for_theNerds">
                <h3 lang="es-MX">Para los nerds:</h3>
                <p lang="es-MX">Error {pageStatus}</p>
                <p lang="es-MX">Página {$page.error.message}</p>
            </div>
        {:else if pageStatus === 500}
            <h1 lang="es-MX">Parece que ha habido un error interno...</h1>

            <p lang="es-MX" class="keep_browsing_message">Puedes pasar el rato con este lindo perro o siéntete libre de seguir buscando películas volviendo a nuestro <a href="/" class="error_homepage_link">página principal</a>.</p>

            <div class="for_theNerds">
                <h3 lang="es-MX">Para los nerds:</h3>
                <p lang="es-MX">Error {pageStatus}</p>
            </div>
        {:else}
            <h1 lang="es-MX">Creo que cometimos un error...</h1>

            <p lang="es-MX" class="keep_browsing_message">¿Nos perdonarás? Una vez que lo haga (porque sí lo harás (: ), siéntase libre de seguir buscando películas volviendo a nuestro <a href="/" class="error_homepage_link">página principal</a>.</p>

            <div class="for_theNerds">
                <h3 lang="es-MX">Para los nerds:</h3>
                <p lang="es-MX">Error {pageStatus}</p>
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