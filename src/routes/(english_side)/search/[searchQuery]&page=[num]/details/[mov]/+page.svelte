<script>
	import MovieDetails from "$lib/MovieDetails.svelte";

    export let data;
    $: ({ movie_details, stream_details, rent_details, trailer_details } = data);
</script>

<MovieDetails movieDetails={movie_details} providerDetails={stream_details} rentDetails={rent_details} trailerDetails={trailer_details} />
