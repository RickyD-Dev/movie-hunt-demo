<script>
	import { page } from '$app/stores';

	export let movieDetails;
	export let providerDetails;
	export let rentDetails;
	export let trailerDetails;
	export let movieRating;

	let newReleaseDateFormat;

	const currentReleaseDateFormat = new Date(movieDetails.release_date);

	const iframeSrcDoc = `
    <style>
      * { padding: 0; margin: 0; overflow: hidden }
      html, body { height: 100% }
      img, span { position: absolute; width: 100%; top: 0; bottom: 0; margin: auto }
      span { height: 1.5em; text-align: center; font: 48px/1.5 sans-serif; color: white; text-shadow: 0 0 0.5em black }
    </style>
    <a href='https://www.youtube.com/embed/${trailerDetails[0].key}?autoplay=1'>
      <img src='https://img.youtube.com/vi/${trailerDetails[0].key}/hqdefault.jpg' alt='Video ${movieDetails.title}'>
      <span>▶</span>
    </a>`;

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
					<iframe
						loading="lazy"
						width="100%"
						class="movie_trailer"
						src="https://www.youtube.com/embed/{trailerDetails[0].key}"
						srcdoc={iframeSrcDoc}
						title="YouTube video player"
						frameborder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						allowfullscreen
					/>
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

			<div class="movie_rent_streaming_container">
				{#if providerDetails != null && rentDetails != null}
					<div class="release_streaming_container">
						<div class="renting_platform">
							{#if $page.url.pathname.includes('/es')}
								<h4>Rentar</h4>
							{:else}
								<h4>Rent</h4>
							{/if}
							<div class="renting_details_container">
								{#each rentDetails as rent}
									<p class="stream_item">{rent.provider_name}</p>
								{/each}
							</div>
						</div>
		
						<div class="streaming_platform">
							{#if $page.url.pathname.includes('/es')}
								<h4>Transmitir</h4>
							{:else}
								<h4>Stream</h4>
							{/if}
							<div class="streaming_details_container">
								{#each providerDetails as provider}
									<p class="stream_item">{provider.provider_name}</p>
								{/each}
							</div>
						</div>
					</div>
					{#if $page.url.pathname.includes('/es')}
						<p class="tmdb_providers_link">
							<a href="https://www.themoviedb.org/movie/{movieDetails.id}/watch?locale=US"
								>Visite TMDB para obtener más información</a
							>
						</p>
					{:else}
						<p class="tmdb_providers_link">
							<a href="https://www.themoviedb.org/movie/{movieDetails.id}/watch?locale=US"
								>Please visit TMDB for more info</a
							>
						</p>
					{/if}
				{:else if providerDetails != null && rentDetails === null}
					<div class="release_streaming_container">
						<div class="streaming_platform">
							{#if $page.url.pathname.includes('/es')}
								<h4>Transmitir</h4>
							{:else}
								<h4>Stream</h4>
							{/if}
							<div class="streaming_details_container">
								{#each providerDetails as provider}
									<p class="stream_item">{provider.provider_name}</p>
								{/each}
							</div>
						</div>
					</div>
					{#if $page.url.pathname.includes('/es')}
						<p class="tmdb_providers_link">
							<a href="https://www.themoviedb.org/movie/{movieDetails.id}/watch?locale=US"
								>Visite TMDB para obtener más información</a
							>
						</p>
					{:else}
						<p class="tmdb_providers_link">
							<a href="https://www.themoviedb.org/movie/{movieDetails.id}/watch?locale=US"
								>Please visit TMDB for more info</a
							>
						</p>
					{/if}
				{:else if providerDetails === null && rentDetails != null}
					<div class="release_streaming_container">
						<div class="renting_platform">
							{#if $page.url.pathname.includes('/es')}
								<h4>Rentar</h4>
							{:else}
								<h4>Rent</h4>
							{/if}
							<div class="renting_details_container">
								{#each rentDetails as rent}
									<p class="stream_item">{rent.provider_name}</p>
								{/each}
							</div>
						</div>
					</div>
					{#if $page.url.pathname.includes('/es')}
						<p class="tmdb_providers_link">
							<a href="https://www.themoviedb.org/movie/{movieDetails.id}/watch?locale=US"
								>Visite TMDB para obtener más información</a
							>
						</p>
					{:else}
						<p class="tmdb_providers_link">
							<a href="https://www.themoviedb.org/movie/{movieDetails.id}/watch?locale=US"
								>Please visit TMDB for more info</a
							>
						</p>
					{/if}
				{:else if providerDetails === null && rentDetails === null}
					<div class="streaming_unavailable_container">
						<div class="renting_platform">
							{#if $page.url.pathname.includes('/es')}
								<p class="stream_unavailable">
									<em
										>* La información de renta o transmisión no está disponible en este momento, pero
										puede estar disponible en otros lugares. Configuramos una búsqueda en Google para
										que <a
											class="find_out_more"
											href="https://www.google.com/search?q={movieDetails.title}+(film)"
											target="_blank"
											rel="noreferrer"
											title="{movieDetails.title} google search for streaming providers"
											>obtengas más información</a
										>.</em
									>
								</p>
							{:else}
								<p class="stream_unavailable">
									<em
										>* Stream/Rent info for this title is unavailable at this time but it may be available
										elsewhere. We set up a Google search for you to <a
											class="find_out_more"
											href="https://www.google.com/search?q={movieDetails.title}+(film)"
											target="_blank"
											rel="noreferrer"
											title="{movieDetails.title} google search for streaming providers"
											>find out more</a
										>.</em
									>
								</p>
							{/if}
						</div>
					</div>
					{#if $page.url.pathname.includes('/es')}
						<p class="tmdb_providers_link">
							<a
								href="https://www.themoviedb.org/movie/{movieDetails.id}/watch?locale=US"
								target="_blank"
								rel="noreferrer">También puedes visitar TMDB para obtener más información</a
							>
						</p>
					{:else}
						<p class="tmdb_providers_link">
							<a
								href="https://www.themoviedb.org/movie/{movieDetails.id}/watch?locale=US"
								target="_blank"
								rel="noreferrer">You can also visit TMDB for more info</a
							>
						</p>
					{/if}
				{/if}
			</div>
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
	}

	@media screen and (max-width: 767px) {
		.movie_details_wrapper {
			align-items: center;
		}
	}

	.title_container {
		display: flex;
		justify-content: flex-start;
		align-items: center;
		margin-bottom: 5px;
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
		bottom: 2.5px;
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

	.movie_rent_streaming_container {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		width: 100%;
		max-width: 800px;
	}

	.release_streaming_container {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		grid-auto-rows: 1fr;
		gap: 0px 20px;
		width: 100%;
		max-width: 520px;
	}

	.trailer_unavailable {
		display: none;
	}

	.movie_trailer {
		max-width: 520px;
		margin-bottom: 25px;
		height: 300px;
	}

	@media screen and (max-width: 500px) {
		.movie_trailer {
			max-width: 520px;
			margin-bottom: 25px;
			height: 200px;
	}
	}

	.release_rating_container {
		display: flex;
		margin-bottom: 25px;
		padding-left: 3px;
	}

	.streaming_platform {
		display: flex;
		flex-direction: column;
		padding-bottom: 20px;
	}

	.streaming_details_container {
		display: flex;
		flex-direction: column;
	}

	.stream_item {
		padding-bottom: 5px;
	}

	.stream_unavailable {
		width: 100%;
	}

	.streaming_unavailable_container {
		display: flex;
		flex-direction: row;
		justify-content: center;
		width: 100%;
		max-width: 520px;
	}

	.renting_platform {
		display: flex;
		flex-direction: column;
		padding-bottom: 20px;
	}

	.renting_details_container {
		display: flex;
		flex-direction: column;
	}

	.find_out_more {
		text-decoration: underline;
		text-decoration-color: #20dce8;
	}

	.find_out_more:hover {
		text-decoration: underline;
		text-decoration-color: #fff;
	}

	.tmdb_providers_link a {
		text-decoration: underline;
		text-decoration-color: #20dce8;
	}

	.tmdb_providers_link a:hover {
		text-decoration: underline;
		text-decoration-color: #fff;
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
