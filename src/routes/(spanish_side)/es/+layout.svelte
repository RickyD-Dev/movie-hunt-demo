<script>
    import { page } from '$app/stores';
    import { goto } from '$app/navigation';
    import { dev } from '$app/environment';
    import { inject } from '@vercel/analytics';
    
    inject({ mode: dev ? 'development' : 'production' });

    let toggleValue = true;

    let genreChosen = '';
    let genreChosenPage = '';
    let titleSearched = '';
    let searchPage = '';
    let movieNum = '';

    function switchLanguage() {
        toggleValue = !toggleValue;

        genreChosen = $page.params.genrePicked;
        genreChosenPage = $page.params.genrePage;
        titleSearched = $page.params.searchQuery;
        searchPage = $page.params.num;
        movieNum = $page.params.mov;

        setTimeout(() => {
            if ($page.url.pathname === "/es") {
                goto("/");
            } else if ($page.url.pathname === "/es/g%C3%A9nero=") {
                goto("/genre=");
            } else if ($page.url.pathname === `/es/g%C3%A9nero=/${genreChosen}&p%C3%A1gina=${genreChosenPage}`) {
                goto(`/genre=/${genreChosen}&page=${genreChosenPage}`);
            } else if ($page.url.pathname === `/es/g%C3%A9nero=/${genreChosen}&p%C3%A1gina=${genreChosenPage}/detalles/${movieNum}`) {
                goto(`/genre=/${genreChosen}&page=${genreChosenPage}/details/${movieNum}`);
            } else if ($page.url.pathname === "/es/buscar=") {
                goto("/search=");
            } else if ($page.url.pathname === `/es/buscar=/${titleSearched}&p%C3%A1gina=${searchPage}`) {
                goto(`/search=/${titleSearched}&page=${searchPage}`);
            } else if ($page.url.pathname === `/es/buscar=/${titleSearched}&p%C3%A1gina=${searchPage}/detalles/${movieNum}`) {
                goto(`/search=/${titleSearched}&page=${searchPage}/details/${movieNum}`);
            }
        }, 300);
    };
</script>

<header>
    <div class="header-container">
        <div class="logo-container">
            <h1 lang="es-MX" class="logo-text"><a href="/es">Movie Hunt</a></h1>
            <div class="lang_container">
                <input id="switch" class="lang_button" autocomplete="off" type="checkbox" on:click={switchLanguage} bind:checked={toggleValue} />
                <label for="switch" class="toggle">
                    <p lang="es-MX" class="toggle_choice">EN<span>ES</span></p>
                </label>
            </div>
        </div>

        <div class={$page.url.pathname.includes("/es/g%C3%A9nero=") || $page.url.pathname.includes("/es/buscar=") ? "nav-header-container" : "nav-off"}>
            <div class="nav-container">
                <nav>
                    <ul class="nav-list">
                        {#if $page.url.pathname.includes("/es/g%C3%A9nero=")}
                            <li lang="es-MX" class="nav-item genres selected"><a href="/es/género=">Géneros</a></li>
                            <li lang="es-MX" class="nav-item search"><a href="/es/buscar=">Buscar</a></li>
                        {:else if $page.url.pathname.includes("/es/buscar=")}
                            <li lang="es-MX" class="nav-item genres"><a href="/es/género=">Géneros</a></li>
                            <li lang="es-MX" class="nav-item search selected"><a href="/es/buscar=">Buscar</a></li>
                        {/if}
                    </ul>
                </nav>
            </div>
        </div>
    </div>
</header>

<slot></slot>

<footer class="footer_container">
    <div class="attribution_container">
        <p lang="es-MX" class="attribution_text">Este producto utiliza la API de TMDB pero no está respaldado ni certificado por TMDB. Los datos de JustWatch proporcionados por la API de TMDB también se utilizan para proporcionar proveedores de renta/transmisión.</p>
        <a class="logo_a" href="https://www.themoviedb.org/" target="_blank" rel="noreferrer">
            <img class="attribution_logo" src="/images/tmdb_logo2.svg" alt="The Movie Data Base logo">
        </a>
        <a class="logo_a" href="https://www.justwatch.com/" target="_blank" rel="noreferrer">
            <img class="attribution_logo" src="https://www.themoviedb.org/assets/2/v4/logos/justwatch-c2e58adf5809b6871db650fb74b43db2b8f3637fe3709262572553fa056d8d0a.svg" alt="The Just Watch logo">
        </a>
    </div>
    <div class="copyright_container">
        <p lang="es-MX" class="copyright_text">Movie Hunt &copy; 2023</p>
    </div>
    <div class="createdBy_coffee_container">
        <p lang="es-MX" class="created_by">Creado por <a class="visit_my_portfolio" href="https://www.rickydlgd.com/" target="_blank" rel="noreferrer">ricky</a></p>

        <a lang="es-MX" class="coffee_a" href="https://www.buymeacoffee.com/rickydlgd" title="Buy Rick a Coffee (:" target="_blank" rel="noreferrer"><i class="fa-solid fa-mug-hot"></i></a>
    </div>
</footer>

<style>
    header {
        display: block;
        position: relative;
        width: 100%;
    }

    .lang_container {
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        right: 0;
        bottom: 80px;
        top: 0;
        padding-right: 15px;
    }

    .toggle {
        position: relative;
        display: inline-block;
        width: 50px;
        height: 25px;
        background-color: transparent;
        border-radius: 30px;
        border: 2px solid rgba(44, 191, 201, 0.9);
    }

    .toggle::after {
        content: '';
        position: absolute;
        width: 19px;
        height: 19px;
        border-radius: 50%;
        background-color: #fff;
        top: 1px;
        right: 1px;
        transition: all 0.3s;
    }

    .toggle::after:hover {
        background-color: rgba(44, 191, 201, 0.9);
    }

    .lang_button:checked + .toggle::after {
        right: 26px;
    }

    .lang_button {
        display: none;
    }

    .toggle_choice {
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        left: 0;
        top: 4px;
        bottom: 0;
        font-size: 13px;
        font-weight: 400;
        color: #2cbfc9;
        width: 100%;
    }

    .toggle_choice span {
        padding-left: 6px;
    }

    .header-container {
        display: flex;
        position: relative;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        padding: 10px 0px;
        z-index: 2;
    }

    .logo-container {
        display: block;
        position: relative;
        padding: 40px 0px 0px;
        width: 100%;
        max-width: 800px;
        text-align: center;
    }

    @keyframes pulsate {
        100% {
            /* Larger blur radius */
            text-shadow:
            0 0 4px rgba(44, 163, 176, 0.9),
            0 0 11px rgba(44, 163, 176, 0.9),
            0 0 19px rgba(44, 163, 176, 0.9),
            0 0 40px #2cbfc9;
        }
        0% {
            /* A slightly smaller blur radius */
            text-shadow:
            0 0 4px rgba(44, 163, 176,0.9),
            0 0 10px rgba(44, 163, 176,0.9),
            0 0 18px rgba(44, 163, 176,0.9),
            0 0 38px #2cbfc9;
        }
    }

    .logo-text {
        color: rgba(255, 255, 255, 0.8);
        font-family: 'Yellowtail', cursive;
        font-size: 50px;
        font-weight: 400;
        animation: pulsate 0.5s ease-in-out infinite alternate;
    }

    /* ---------- Genre/Search Header Styles ---------- */

    .nav-header-container {
        display: flex;
        position: relative;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        max-width: 850px;
        padding: 10px 0px;
        margin-bottom: 40px;
        z-index: 2;
    }

    .nav-off {
        display: none;
    }

    .nav-container {
        display: flex;
        flex-direction: column;
        width: 100%;
    }

    .nav-list {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        width: 100%;

    }

    .nav-item {
        cursor: pointer;
        font-size: 1.35em;
    }

    .nav-item a {
        transition: all 150ms ease-in-out;
    }

    .nav-item a:hover {
        color: #2cbfc9;
    }

    .selected a {
        text-decoration: underline;
        text-decoration-color: #2cbfc9;
    }

    .selected a:hover {
        text-decoration-color: #fff;
    }

    /* ---------- Footer Styles ---------- */

    .footer_container {
        border-top: 1px solid #20DCE8;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 12px 16px;
        margin-top: 2.5rem;
        position: relative;
        width: 100%;
    }

    .copyright_container {
        display: flex;
        justify-content: space-between;
        gap: 0px 20px;
        align-items: center;
        width: 100%;
        padding-bottom: 5px;
        max-width: 375px;
    }

    .createdBy_coffee_container {
        display: flex;
        justify-content: center;
        gap: 0px 10px;
        align-items: center;
        width: 100%;
    }

    .copyright_text {
        font-size: 12px;
        width: 100%;
        text-align: center;
    }

    .coffee_a {
        width: 100%;
        text-align: center;
        max-width: 20px;
        position: relative;
        bottom: 1px;
    }

    .fa-solid {
        color: #20DCE8;
    }

    .attribution_container {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-auto-rows: 1fr;
        justify-items: center;
        gap: 3px;
        align-items: center;
        width: 100%;
        max-width: 450px;
    }

    .attribution_text {
        grid-column: 1 / span 2;
        font-size: 12px;
        width: 100%;
        text-align: center;
    }

    .logo_a {
        width: 100%;
        text-align: center;
        max-width: 100px;
    }

    .attribution_logo {
        object-fit: contain;
        width: 100%;
        height: 100%;
        max-width: 80px;
    }

    .created_by {
        font-size: 12px;
    }

    .visit_my_portfolio {
        text-decoration: underline;
        text-decoration-color: #20DCE8;
    }

    .visit_my_portfolio:hover {
        color: #fff;
    }
</style>
