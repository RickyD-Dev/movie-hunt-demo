<script>
	import MovieDetails from "$lib/MovieDetails.svelte";

    export let data;
    $: ({ movie_details, provider_details, rent_details, trailer_details, movie_rating } = data);
</script>

<MovieDetails movieDetails={movie_details} providerDetails={provider_details} rentDetails={rent_details} trailerDetails={trailer_details} movieRating={movie_rating} />
