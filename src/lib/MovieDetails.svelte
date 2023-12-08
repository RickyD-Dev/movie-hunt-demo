<script>
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';

	export let movieDetails;
	export let providerDetails;
	export let rentDetails;
	export let trailerDetails;

	

	function goBack() {
		// window.history.go(-1);
		history.back();
	}

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
	<div class="button_image_container">
		<button class="details_return_button" on:click={goBack}
			><i class="fa-solid fa-arrow-left" /></button
		>
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
	</div>
	<h1 class="movie_details_title">{movieDetails.title}</h1>

	<div class="movieInfo_container">
		{#await trailerDetails}
			<p>Trailer Loading...</p>
		{:then}
			{#if trailerDetails[0] === undefined}
				{#if $page.url.pathname.includes('/es')}
					<p><em>Trailer no está disponible</em></p>
				{:else}
					<p><em>Trailer Unavailable</em></p>
				{/if}
			{:else}
				<iframe
					width="100%"
					height="250px"
					class="movie_trailer"
					src="https://www.youtube.com/embed/{trailerDetails[0].key}"
					title="YouTube video player"
					frameborder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					allowfullscreen
				/>
			{/if}
		{/await}

		<div class="release_date">
			{#if $page.url.pathname.includes('/es')}
				<h4>Fecha de lanzamiento</h4>
			{:else}
				<h4>Release Date</h4>
			{/if}
			<p>{newReleaseDateFormat}</p>
		</div>
		<hr />
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
								>La información de renta o transmisión no está disponible en este momento, pero
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
								>Stream/Rent info for this title is unavailable at this time but it may be available
								elsewhere. We set up a google search for you to <a
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
		<hr />

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
	</div>
</div>

<style>
	h4 {
		padding-bottom: 5px;
	}

	hr {
		border: none;
		height: 1px;
		color: rgb(243, 243, 243);
		background-color: rgba(243, 243, 243, 0.2);
		width: 100%;
		margin: 20px 0px;
	}

	.movie_details_container_genre {
		background-color: #000315;
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 100%;
		position: relative;
		bottom: 60px;
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

	.button_image_container {
		display: flex;
		width: 100%;
		max-width: 500px;
		justify-content: center;
		padding-bottom: 15px;
		margin-right: 40px;
	}

	.details_return_button {
		cursor: pointer;
		position: relative;
		left: -9%;
		background-color: #000315;
		color: #20dce8;
		border: 2px solid rgba(32, 220, 232, 0.8);
		border-radius: 50%;
		height: 35px;
		width: 35px;
		font-size: 16px;
		font-weight: 200;
	}

	.fa-arrow-left {
		transform: translateY(1px);
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
		width: 55%;
		max-width: 270px;
	}

	.details_poster_container img {
		width: 100%;
		height: auto;
	}

	.movie_details_title {
		font-weight: 200;
		text-align: center;
		padding-bottom: 30px;
	}

	.movieInfo_container {
		display: flex;
		flex-direction: column;
		align-items: center;
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

	.movie_trailer {
		max-width: 520px;
	}

	.release_date {
		display: flex;
		flex-direction: column;
		align-self: center;
		padding-top: 20px;
		text-align: center;
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
		text-align: center;
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

	.tmdb_providers_link {
		text-align: center;
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
	}
</style>
