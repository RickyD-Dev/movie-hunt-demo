<script>
	import { page } from '$app/stores';

	function returnToList() {
		history.back();
	}

	let genreList = '';

	if ($page.url.pathname.includes('/buscar=')) {
		genreList = 'Volver a los resultados';
	} else if ($page.url.pathname.includes('g%C3%A9nero=/28')) {
		genreList = 'Volver a la lista de Acción';
	} else if ($page.url.pathname.includes('g%C3%A9nero=/12')) {
		genreList = 'Volver a la lista de Aventura';
	} else if ($page.url.pathname.includes('g%C3%A9nero=/16')) {
		genreList = 'Volver a la lista de Animación';
	} else if ($page.url.pathname.includes('g%C3%A9nero=/35')) {
		genreList = 'Volver a la lista de Comedia';
	} else if ($page.url.pathname.includes('g%C3%A9nero=/80')) {
		genreList = 'Volver a la lista de Crimen';
	} else if ($page.url.pathname.includes('g%C3%A9nero=/99')) {
		genreList = 'Volver a la lista de Documental';
	} else if ($page.url.pathname.includes('g%C3%A9nero=/18')) {
		genreList = 'Volver a la lista de Drama';
	} else if ($page.url.pathname.includes('g%C3%A9nero=/10751')) {
		genreList = 'Volver a la lista de Familia';
	} else if ($page.url.pathname.includes('g%C3%A9nero=/14')) {
		genreList = 'Volver a la lista de Fantasía';
	} else if ($page.url.pathname.includes('g%C3%A9nero=/36')) {
		genreList = 'Volver a la lista de Historia';
	} else if ($page.url.pathname.includes('g%C3%A9nero=/27')) {
		genreList = 'Volver a la lista de Terror';
	} else if ($page.url.pathname.includes('g%C3%A9nero=/10402')) {
		genreList = 'Volver a la lista de Música';
	} else if ($page.url.pathname.includes('g%C3%A9nero=/9648')) {
		genreList = 'Volver a la lista de Misterio';
	} else if ($page.url.pathname.includes('g%C3%A9nero=/10749')) {
		genreList = 'Volver a la lista de Romance';
	} else if ($page.url.pathname.includes('g%C3%A9nero=/878')) {
		genreList = 'Volver a la lista de Ciencia ficción';
	} else if ($page.url.pathname.includes('g%C3%A9nero=/10770')) {
		genreList = 'Volver a la lista de Película de TV';
	} else if ($page.url.pathname.includes('g%C3%A9nero=/53')) {
		genreList = 'Volver a la lista de Suspense';
	} else if ($page.url.pathname.includes('g%C3%A9nero=/10752')) {
		genreList = 'Volver a la lista de Bélica';
	} else if ($page.url.pathname.includes('g%C3%A9nero=/37')) {
		genreList = 'Volver a la lista de Western';
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