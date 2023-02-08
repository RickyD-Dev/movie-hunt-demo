<script>
    export let data;
    const { genreName } = data;
</script>

<div class="title-button-container">
    {#if genreName === '28'}
        <h1 class="genre-title">Acción</h1>
    {:else if genreName === '12'}
        <h1 class="genre-title">Aventura</h1>
    {:else if genreName === '16'}
        <h1 class="genre-title">Animación</h1>
    {:else if genreName === '35'}
        <h1 class="genre-title">Comedia</h1>
    {:else if genreName === '80'}
        <h1 class="genre-title">Crimen</h1>
    {:else if genreName === '99'}
        <h1 class="genre-title">Documental</h1>
    {:else if genreName === '18'}
        <h1 class="genre-title">Drama</h1>
    {:else if genreName === '10751'}
        <h1 class="genre-title">Familia</h1>
    {:else if genreName === '14'}
        <h1 class="genre-title">Fantasía</h1>
    {:else if genreName === '36'}
        <h1 class="genre-title">Historia</h1>
    {:else if genreName === '27'}
        <h1 class="genre-title">Terror</h1>
    {:else if genreName === '10402'}
        <h1 class="genre-title">Música</h1>
    {:else if genreName === '9648'}
        <h1 class="genre-title">Misterio</h1>
    {:else if genreName === '10749'}
        <h1 class="genre-title">Romance</h1>
    {:else if genreName === '878'}
        <h1 class="genre-title">Ciencia ficción</h1>
    {:else if genreName === '10770'}
        <h1 class="genre-title">Película de TV</h1>
    {:else if genreName === '53'}
        <h1 class="genre-title">Suspense</h1>
    {:else if genreName === '10752'}
        <h1 class="genre-title">Bélica</h1>
    {:else if genreName === '37'}
        <h1 class="genre-title">Western</h1>
    {:else}
        <h1 class="genre-title">Genre</h1>
    {/if}
</div>

<slot />

<style>
    .genre-title {
        font-weight: 200;
        text-align: center;
        padding-bottom: 20px;
    }
</style>