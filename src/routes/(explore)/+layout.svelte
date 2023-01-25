<script>
    import { page } from '$app/stores';
</script>

<header>
    <div class="header-container">
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
</header>

<slot></slot>

<style>
    .header-container {
        display: flex;
        position: relative;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        padding: 10px 0px;
        margin-bottom: 20px;
        z-index: 2;
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
</style>