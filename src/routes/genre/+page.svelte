<script>
    import { fly } from "svelte/transition";
    export let data;
    const { movieGenres } = data;
</script>

<div class="genre-container">
    <ul class="genre_list">
        {#each movieGenres as movieGenre}
            <li class="genre-item" in:fly="{{ y:100, duration: 1000 }}">
                <a href={`/genre/${movieGenre.id}&page=1`}>{movieGenre.name}</a>
            </li>
        {/each}
    </ul>
</div>

<style>
    .genre-container {
        padding: 0px 16px 2.5rem;
    }

    .genre-item {
        font-size: 32px;
        padding-bottom: 15px;
    }

    .genre-item a:hover {
        color: #2cbfc9;
    }
</style>