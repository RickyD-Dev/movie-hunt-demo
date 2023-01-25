<script>
    import { page } from '$app/stores';
</script>

<header>
    <div class="header-container">
        <div class="logo-container">
            <h1 class="logo-text"><a href="/">Movie Hunt</a></h1>
        </div>

        <div class={$page.url.pathname.includes("/genre") || $page.url.pathname.includes("/search") ? "nav-header-container" : "nav-off"}>
            <div class="nav-container">
                <nav>
                    <ul class="nav-list">
                        {#if $page.url.pathname.includes("/genre")}
                            <li class="nav-item genres selected"><a href="/genre">Genres</a></li>
                            <li class="nav-item search"><a href="/search">Search</a></li>
                        {:else if $page.url.pathname.includes("/search")}
                            <li class="nav-item genres"><a href="/genre">Genres</a></li>
                            <li class="nav-item search selected"><a href="/search">Search</a></li>
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
        <p class="copyright_text">&copy; 2023 Movie Hunt</p>
        <a class="coffee_a" href="https://www.buymeacoffee.com/rickydlgd" title="Buy Rick a Coffee (:" target="_blank" rel="noreferrer"><i class="fa-solid fa-mug-hot"></i></a>
    </div>
    <div class="attribution_container">
        <p class="attribution_text">This product uses the TMDB API but is not endorsed or certified by TMDB.</p>
        <a class="tmdb_logo_a" href="https://www.themoviedb.org/">
            <img class="tmdb_logo" src="/images/tmdb_logo2.svg" alt="">
        </a>
    </div>
    <p class="created_by">Created by Ricardo Delgado</p>
</footer>

<style>
    header {
        width: 100%;
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
        padding: 40px 0px 20px;
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
        animation: pulsate 0.9s ease-in-out infinite alternate;
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
        /* border-top: 1px solid rgba(243, 243, 243, 0.6); */
        border-top: 1px solid #20DCE8;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 12px 16px;
        /* position: absolute; */
        /* bottom: 0; */
        position: relative;
        width: 100%;
        /* height: 4rem; */
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
        /* padding-bottom: 10px; */
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
