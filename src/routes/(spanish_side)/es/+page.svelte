<script>
    import { fly } from "svelte/transition";
</script>

<div class="wrapper">
    <div class="home_main_container" in:fly|global="{{ y:100, duration: 1000 }}">
        <h1 lang="es-MX" class="home_title">Descubre dónde puedes ver tus películas favoritas.</h1>
        
        <div class="explore_button_container">
            <a lang="es-MX" class="explore_link" href="/es/género="><span>Comenzar</span></a>
        </div>
    </div>
</div>

<style>
    .wrapper {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: absolute;
        height: 100%;
        width: 100%;
    }

    .home_main_container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
    }

    .home_title {
        padding: 0px 16px;
        font-size: 34px;
        font-weight: 300;
        text-align: center;
        width: 100%;
        max-width: 500px;
    }

    .explore_button_container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        padding-top: 20px;
    }

    .explore_link {
        background-color: #000315;
        color: #fff;
        border: 2px solid rgba(44, 191, 201, 0.8);
        border-radius: 50px;
        font-size: 18px;
        font-weight: 200;
        width: 80%;
        max-width: 200px;
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: background-color 150ms ease-in-out;
    }

    .explore_link:hover {
        background-color: rgba(44, 191, 201, 0.2);
    }

    .explore_link span {
        transform: translateY(1px);
    }
</style>