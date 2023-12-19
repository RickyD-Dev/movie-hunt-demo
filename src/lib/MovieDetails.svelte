<script>
	import { page } from '$app/stores';
	import TrailerPlayer from './TrailerPlayer.svelte';
	import StreamingDetails from './StreamingDetails.svelte';

	export let movieDetails;
	export let providerDetails;
	export let rentDetails;
	export let trailerDetails;
	export let movieRating;

	let newReleaseDateFormat;

	const currentReleaseDateFormat = new Date(movieDetails.release_date);

	let dateFormatting;

	if ($page.url.pathname.includes('/es')) {
		dateFormatting = new Intl.DateTimeFormat('es', {
			dateStyle: 'long'
		});
	} else {
		dateFormatting = new Intl.DateTimeFormat('en-us', {
			dateStyle: 'long'
		});
	}

	if (currentReleaseDateFormat != 'Invalid Date') {
		newReleaseDateFormat = dateFormatting.format(currentReleaseDateFormat);
	} else {
		newReleaseDateFormat = 'Unavailable';
	}
</script>

<div
	class={$page.url.pathname.includes('/genre') || $page.url.pathname.includes('/es/g%C3%A9nero')
		? 'movie_details_container_genre'
		: 'movie_details_container_search'}
>
	<div class="all_movie_details_container">
		{#if movieDetails.poster_path === null}
			<div class="image_unavailable">
				<img class src="/images/dog.jpg" alt="A cute dog" />
				{#if $page.url.pathname.includes('/es')}
					<p><em>Imagen no está disponible</em></p>
				{:else}
					<p><em>Image Unavailable</em></p>
				{/if}
			</div>
		{:else}
			<div class="details_poster_container">
				<img src="http://image.tmdb.org/t/p/w500/{movieDetails.poster_path}" alt="" />
			</div>
		{/if}

		<div class="movie_details_wrapper">
			<div class="title_container">
				<h2 class="movie_details_title">{movieDetails.title}</h2>
			</div>

			<div class="release_rating_container">
				{#if movieRating === undefined}
					<h6 class="movie_rating_unavailable">Unavailable</h6>
				{:else}
					<div class="movie_rating_container">
						<h6 class="movie_rating">{movieRating}</h6>
					</div>
				{/if}
				<p>{newReleaseDateFormat}</p>
			</div>

			{#await trailerDetails}
				<p>Trailer Loading...</p>
			{:then}
				{#if trailerDetails[0] === undefined}
					{#if $page.url.pathname.includes('/es')}
					<div class="trailer_unavailable">
						<p><em>Trailer no está disponible</em></p>
					</div>
					{:else}
						<div class="trailer_unavailable">
							<p><em>Trailer Unavailable</em></p>
						</div>
					{/if}
				{:else}
					<TrailerPlayer trailer_details={trailerDetails} movie_details={movieDetails} />
				{/if}
			{/await}
	
			<div class="details_container">
				{#if $page.url.pathname.includes('/es')}
					<h4>Descripción</h4>
				{:else}
					<h4>Description</h4>
				{/if}
				{#if movieDetails.overview}
					<p>{movieDetails.overview}</p>
				{:else if $page.url.pathname.includes('/es')}
					<p><em>Descripción no está disponible</em></p>
				{:else}
					<p><em>Description Unavailable</em></p>
				{/if}
			</div>

			<StreamingDetails provider_details={providerDetails} rent_details={rentDetails} movie_details={movieDetails} />
		</div>
	</div>
</div>

<style>
	h4 {
		padding-bottom: 5px;
	}

	.movie_details_container_genre {
		background-color: #000315;
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 100%;
		position: relative;
		bottom: 62px;
		padding: 0px 15px;
	}

	.movie_details_container_search {
		background-color: #000315;
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 100%;
		position: relative;
		padding: 0px 15px 2.5rem;
	}

	.all_movie_details_container {
		display: flex;
		max-width: 1200px;
		justify-content: center;
		align-items: flex-start;
		padding-bottom: 15px;
		gap: 50px;
	}

	@media screen and (max-width: 767px) {
		.all_movie_details_container {
			flex-direction: column;
			align-items: center;
			gap: 16px;
		}
	}

	.movie_details_wrapper {
		display: flex;
		flex-direction: column;
		justify-content: center;
		width: 100%;
		position: relative;
		bottom: 8px;
	}

	@media screen and (max-width: 767px) {
		.movie_details_wrapper {
			bottom: initial;
		}
	}

	.title_container {
		display: flex;
		justify-content: flex-start;
		align-items: center;
		margin-bottom: 5px;
	}

	@media screen and (max-width: 767px) {
		.title_container {
			align-self: center;
		}
	}

	.image_unavailable {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 55%;
		max-width: 270px;
		height: 100%;
		max-height: 432px;
		border: 1px solid #20dce8;
	}

	.image_unavailable img {
		visibility: hidden;
		z-index: -1;
		width: 100%;
		max-width: 270px;
	}

	.image_unavailable p {
		position: absolute;
	}

	.details_poster_container {
		width: 100%;
		max-width: 300px;
	}

	.details_poster_container img {
		border: 1px solid #2cbfc9;
		width: 100%;
		height: auto;
	}

	.movie_rating_unavailable {
		display: none;
	}

	.movie_rating_container {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.movie_rating_container::after {
		display: inline-block;
		margin: 0 .5rem .2rem;
		content: "";
		font-size: 1rem;
		line-height: .5rem;
		padding: 1px;
		border-radius: 50%;
		vertical-align: middle;
		background-color: #fff;
	}

	.movie_rating {
		background-color: #f1f1f1;
		color: #000315;
		display: block;
		font-weight: 400;
		font-size: 0.9rem;
		border-radius: 2px;
		padding: 3px 5px 0px;
		position: relative;
		bottom: 1.5px;
	}

	.movie_details_title {
		font-size: 3rem;
		font-weight: 400;
	}

	@media screen and (max-width: 767px) {
		.movie_details_title {
			font-size: 2.3rem;
			text-align: center;
		}
	}

	.trailer_unavailable {
		display: none;
	}

	.release_rating_container {
		display: flex;
		margin-bottom: 25px;
		padding-left: 3px;
	}

	@media screen and (max-width: 767px) {
		.release_rating_container {
			align-self: center;
		}
	}

	.details_container {
		display: flex;
		flex-direction: column;
		width: 100%;
		max-width: 520px;
		justify-content: center;
		margin-bottom: 25px;
	}
</style>
