<script>
    import { page } from '$app/stores';
    import { goto } from '$app/navigation';

    let toggleValue = false;

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
            if ($page.url.pathname === "/") {
                goto("/es");
            } else if ($page.url.pathname === "/genre") {
                goto("/es/g%C3%A9nero");
            } else if ($page.url.pathname === `/genre/${genreChosen}&page=${genreChosenPage}`) {
                goto(`/es/g%C3%A9nero/${genreChosen}&p%C3%A1gina=${genreChosenPage}`);
            } else if ($page.url.pathname === `/genre/${genreChosen}&page=${genreChosenPage}/details/${movieNum}`) {
                goto(`/es/g%C3%A9nero/${genreChosen}&p%C3%A1gina=${genreChosenPage}/detalles/${movieNum}`);
            } else if ($page.url.pathname === "/search") {
                goto("/es/buscar");
            } else if ($page.url.pathname === `/search/${titleSearched}&page=${searchPage}`) {
                goto(`/es/buscar/${titleSearched}&p%C3%A1gina=${searchPage}`);
            } else if ($page.url.pathname === `/search/${titleSearched}&page=${searchPage}/details/${movieNum}`) {
                goto(`/es/buscar/${titleSearched}&p%C3%A1gina=${searchPage}/detalles/${movieNum}`);
            }
        }, 300);

        // if ($page.url.pathname === "/") {
        //     goto("/es");
        // } else if ($page.url.pathname === "/genre") {
        //     goto("/es/g%C3%A9nero");
        // } else if ($page.url.pathname === `/genre/${genreChosen}&page=${genreChosenPage}`) {
        //     goto(`/es/g%C3%A9nero/${genreChosen}&p%C3%A1gina=${genreChosenPage}`);
        // } else if ($page.url.pathname === `/genre/${genreChosen}&page=${genreChosenPage}/details/${movieNum}`) {
        //     goto(`/es/g%C3%A9nero/${genreChosen}&p%C3%A1gina=${genreChosenPage}/detalles/${movieNum}`);
        // } else if ($page.url.pathname === "/search") {
        //     goto("/es/buscar");
        // } else if ($page.url.pathname === `/search/${titleSearched}&page=${searchPage}`) {
        //     goto(`/es/buscar/${titleSearched}&p%C3%A1gina=${searchPage}`);
        // } else if ($page.url.pathname === `/search/${titleSearched}&page=${searchPage}/details/${movieNum}`) {
        //     goto(`/es/buscar/${titleSearched}&p%C3%A1gina=${searchPage}/detalles/${movieNum}`);
        // }
    };
</script>

<header>
    <div class="header-container">
        <div class="logo-container">
            <h1 lang="en-US" class="logo-text"><a href="/">Movie Hunt</a></h1>
            <div class="lang_container">
                <input id="switch" class="lang_button" autocomplete="off" type="checkbox" bind:checked={toggleValue} on:click={switchLanguage} />
                <label for="switch" class="toggle">
                    <p lang="en-US" class="toggle_choice">EN<span>ES</span></p>
                </label>
            </div>
        </div>

        <div class={$page.url.pathname.includes("/genre") || $page.url.pathname.includes("/search") ? "nav-header-container" : "nav-off"}>
            <div class="nav-container">
                <nav>
                    <ul class="nav-list">
                        {#if $page.url.pathname.includes("/genre")}
                            <li lang="en-US" class="nav-item genres selected"><a href="/genre">Genres</a></li>
                            <li lang="en-US" class="nav-item search"><a href="/search">Search</a></li>
                        {:else if $page.url.pathname.includes("/search")}
                            <li lang="en-US" class="nav-item genres"><a href="/genre">Genres</a></li>
                            <li lang="en-US" class="nav-item search selected"><a href="/search">Search</a></li>
                        {/if}
                    </ul>
                </nav>
            </div>
        </div>
    </div>
</header>

<slot></slot>

<footer class="footer_container">
    <div class="copyright_coffee_container">
        <p lang="en-US" class="copyright_text">Movie Hunt &copy; 2023</p>
        <a lang="en-US" class="coffee_a" href="https://www.buymeacoffee.com/rickydlgd" title="Buy Rick a Coffee (:" target="_blank" rel="noreferrer"><i class="fa-solid fa-mug-hot"></i></a>
    </div>
    <div class="attribution_container">
        <p lang="en-US" class="attribution_text">This product uses the TMDB API but is not endorsed or certified by TMDB.</p>
        <a class="tmdb_logo_a" href="https://www.themoviedb.org/">
            <img lang="en-US" class="tmdb_logo" src="/images/tmdb_logo2.svg" alt="The Movie Data Base logo">
        </a>
    </div>
    <p lang="en-US" class="created_by">Created by Ricardo Delgado</p>
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
        padding-left: 8px;
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
        padding: 40px 0px 20px;
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
        margin-bottom: 20px;
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

    .footer_container {
        border-top: 1px solid #20DCE8;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 12px 16px;
        position: relative;
        width: 100%;
    }

    .copyright_coffee_container {
        display: flex;
        justify-content: space-between;
        gap: 0px 20px;
        align-items: center;
        width: 100%;
        padding-bottom: 5px;
        max-width: 375px;
    }

    .copyright_text {
        font-size: 10px;
        width: 100%;
        text-align: center;
    }

    .coffee_a {
        width: 100%;
        text-align: center;
    }

    .fa-solid {
        color: #20DCE8;
    }

    .attribution_container {
        display: flex;
        justify-content: center;
        gap: 0px 20px;
        align-items: center;
        width: 100%;
        max-width: 375px;
        padding-bottom: 15px;
    }

    .attribution_text {
        font-size: 10px;
        width: 100%;
        text-align: center;
    }

    .tmdb_logo_a {
        width: 100%;
        text-align: center;
    }

    .tmdb_logo {
        object-fit: cover;
        width: 100%;
        height: 100%;
        max-width: 80px;
    }

    .created_by {
        font-size: 10px;
    }
</style>
