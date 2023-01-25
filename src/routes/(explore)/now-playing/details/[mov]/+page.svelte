<script>
	import MovieDetails from "$lib/MovieDetails.svelte";

    export let data;
    $: ({ movie_details, provider_details } = data);
</script>

<MovieDetails movieDetails={movie_details} providerDetails={provider_details} />
