<script>
    import { fly } from "svelte/transition";
    export let data;
    const { movieGenres } = data;
</script>

<div class="genre-container">
    <ul class="genre_list">
        {#each movieGenres as movieGenre}
            <li class="genre-item" in:fly|global="{{ y:100, duration: 1000 }}">
                <a href={`/genre=/${movieGenre.id}&page=1`}>{movieGenre.name}</a>
            </li>
        {/each}
    </ul>
</div>

<style>
    .genre-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        padding: 0px 25px;
    }

    .genre_list {
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        grid-auto-rows: 1fr;
        justify-items: center;
        width: 100%;
        max-width: 800px;
        gap: 5px;
    }

    @media screen and (min-width: 660px) and (orientation: landscape) {
        .genre_list {
            grid-template-columns: repeat(2, 1fr);
        }
    }

    .genre-item {
        font-size: 32px;
        padding-bottom: 15px;
    }

    .genre-item a {
        transition: all 150ms ease-in-out;
    }

    .genre-item a:hover {
        color: #2cbfc9;
    }
</style>