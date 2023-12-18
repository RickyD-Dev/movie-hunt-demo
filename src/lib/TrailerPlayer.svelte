<script>
	import { onMount } from 'svelte';

    export let trailer_details
	export let movie_details

	onMount(() => {
		const videoPlayer = document.getElementById('videoPlayer');

		videoPlayer.addEventListener('click', () => {
		const iframe = document.createElement('iframe');
		iframe.setAttribute('src', `https://www.youtube.com/embed/${trailer_details[0].key}?autoplay=1`);
		iframe.setAttribute('frameborder', '0');
		iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture');
		iframe.setAttribute('allowfullscreen', '');

		iframe.style.position = 'relative';
		iframe.style.top = '0';
		iframe.style.left = '0';
		iframe.style.width = '100%';
		iframe.style.height = '300px';

		videoPlayer.innerHTML = '';
		videoPlayer.appendChild(iframe);
		});
	});
</script>

<div id="videoPlayer" class="movie_trailer">
	<img class="video_thumbnail" src='https://img.youtube.com/vi/{trailer_details[0].key}/hqdefault.jpg' alt='Video ${movie_details.title}'>
	<span class="play_button"><svg xmlns="http://www.w3.org/2000/svg" height="42" width="38" fill="#fff" viewBox="0 0 384 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.--><path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/></svg></span>
</div>

<style>
    .movie_trailer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		cursor: pointer;
		position: relative;
		width: 100%;
		height: 300px;
		max-width: 520px;
		margin-bottom: 25px;
		overflow: hidden;
	}

	@media screen and (max-width: 500px) {
		.movie_trailer {
			height: 200px;
		}
	}

	.video_thumbnail {
		position: relative;
        width: 100%;
		height: auto;
        top: 0;
        bottom: 0;
        margin: auto;
    }

    .play_button {
		display: flex;
		justify-content: center;
		align-items: center;
        position: absolute;
        width: 100%;
		top: 0;
		bottom: 0;
    }
</style>
