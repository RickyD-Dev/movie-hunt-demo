<script>
	import { onMount } from 'svelte';

    export let trailer_details
	// onMount(() => {});

	function playYouTubeVideo() {
		window.location.href = `https://www.youtube.com/embed/${trailer_details[0].key}?autoplay=1`;
	}
</script>

<div>
	<button class="movie_trailer" on:click={playYouTubeVideo}>
		<!-- Display your video thumbnail or play button here -->
		<!-- Example: -->
		<img
            class="video-thumbnail"
			src={`https://img.youtube.com/vi/${trailer_details[0].key}/hqdefault.jpg`}
			alt="Video Thumbnail"
		/>
        <span><svg xmlns="http://www.w3.org/2000/svg" height="42" width="38" fill="#fff" viewBox="0 0 384 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.--><path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/></svg></span>
    </button>
</div>

<style>
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

    .video-thumbnail {
        background-color: transparent;
        border: none;
    }

    .video-thumbnail,
    span {
        position: absolute;
        width: 100%;
        top: 0;
        bottom: 0;
        margin: auto
    }
</style>
