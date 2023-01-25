<script>
    export let data;
    const { genreName } = data;
</script>

<div class="title-button-container">
    {#if genreName === '28'}
        <h1 class="genre-title">Action</h1>
    {:else if genreName === '12'}
        <h1 class="genre-title">Adventure</h1>
    {:else if genreName === '16'}
        <h1 class="genre-title">Animation</h1>
    {:else if genreName === '35'}
        <h1 class="genre-title">Comedy</h1>
    {:else if genreName === '80'}
        <h1 class="genre-title">Crime</h1>
    {:else if genreName === '99'}
        <h1 class="genre-title">Documentary</h1>
    {:else if genreName === '18'}
        <h1 class="genre-title">Drama</h1>
    {:else if genreName === '10751'}
        <h1 class="genre-title">Family</h1>
    {:else if genreName === '14'}
        <h1 class="genre-title">Fantasy</h1>
    {:else if genreName === '36'}
        <h1 class="genre-title">History</h1>
    {:else if genreName === '27'}
        <h1 class="genre-title">Horror</h1>
    {:else if genreName === '10402'}
        <h1 class="genre-title">Music</h1>
    {:else if genreName === '9648'}
        <h1 class="genre-title">Mystery</h1>
    {:else if genreName === '10749'}
        <h1 class="genre-title">Romance</h1>
    {:else if genreName === '878'}
        <h1 class="genre-title">Science Fiction</h1>
    {:else if genreName === '10770'}
        <h1 class="genre-title">TV Movie</h1>
    {:else if genreName === '53'}
        <h1 class="genre-title">Thriller</h1>
    {:else if genreName === '10752'}
        <h1 class="genre-title">War</h1>
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