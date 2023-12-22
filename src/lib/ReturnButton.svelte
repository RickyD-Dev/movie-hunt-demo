<script>
	import { page } from '$app/stores';

	function returnToList() {
		history.back();
	}

	let genreList = '';

	if ($page.url.pathname.includes('/search=')) {
		genreList = 'Back to search results';
	} else if ($page.url.pathname.includes('genre=/28')) {
		genreList = 'Back to Action list';
	} else if ($page.url.pathname.includes('genre=/12')) {
		genreList = 'Back to Adventure list';
	} else if ($page.url.pathname.includes('genre=/16')) {
		genreList = 'Back to Animation list';
	} else if ($page.url.pathname.includes('genre=/35')) {
		genreList = 'Back to Comedy list';
	} else if ($page.url.pathname.includes('genre=/80')) {
		genreList = 'Back to Crime list';
	} else if ($page.url.pathname.includes('genre=/99')) {
		genreList = 'Back to Documentary list';
	} else if ($page.url.pathname.includes('genre=/18')) {
		genreList = 'Back to Drama list';
	} else if ($page.url.pathname.includes('genre=/10751')) {
		genreList = 'Back to Family list';
	} else if ($page.url.pathname.includes('genre=/14')) {
		genreList = 'Back to Fantasy list';
	} else if ($page.url.pathname.includes('genre=/36')) {
		genreList = 'Back to History list';
	} else if ($page.url.pathname.includes('genre=/27')) {
		genreList = 'Back to Horror list';
	} else if ($page.url.pathname.includes('genre=/10402')) {
		genreList = 'Back to Music list';
	} else if ($page.url.pathname.includes('genre=/9648')) {
		genreList = 'Back to Mystery list';
	} else if ($page.url.pathname.includes('genre=/10749')) {
		genreList = 'Back to Romance list';
	} else if ($page.url.pathname.includes('genre=/878')) {
		genreList = 'Back to Science Fiction list';
	} else if ($page.url.pathname.includes('genre=/10770')) {
		genreList = 'Back to TV Movie list';
	} else if ($page.url.pathname.includes('genre=/53')) {
		genreList = 'Back to Thriller list';
	} else if ($page.url.pathname.includes('genre=/10752')) {
		genreList = 'Back to War list';
	} else if ($page.url.pathname.includes('genre=/37')) {
		genreList = 'Back to Western list';
	}
</script>

<button class="return_button" on:click={returnToList}
	><p class="return_to_list">
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
			><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.--><path
				d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 288 480 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-370.7 0 73.4-73.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-128 128z"
			/></svg
		>
		{genreList}
	</p>
</button>
 <style>
    .return_button {
		background-color: transparent;
		border: none;
		color: #fff;
		cursor: pointer;
		font-size: 1rem;
		margin-bottom: 10px;
		position: relative;
		bottom: 10px;
		height: 30px;
		transition: color 150ms ease-in-out;
	}

	.return_button:hover {
		color: #20dce8;
	}

	.return_to_list {
		display: flex;
		align-items: center;
	}

	.return_to_list svg {
		fill: #2cbfc9;
		margin-right: 6px;
		position: relative;
		height: 18px;
		width: 18px;
		/* bottom: 1.4px; */
	}

	@media screen and (max-width: 767px) {
		.return_button {
			text-align: center;
		}
	}
 </style>