<div class="search_bar_container">
    <form method="POST" action="?/search" autocomplete="off">
        <input type="text" name="search" id="search" class="search_input" placeholder="Search Titles" required>
        <button class="search_button" type="submit">
            <i class="search_icon fa-solid fa-magnifying-glass"></i>
        </button>
    </form>
</div>


<style>
    .search_bar_container {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-bottom: 15.5rem;
        width: 80%;
        margin: 0 auto;
        max-width: 700px;
    }

    form {
        border-bottom: 1px solid #2cbfc9;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 50px;
    }

    .search_input {
        background-color: transparent;
        color: #fff;
        width: 100%;
        height: 100%;
        border: none;
        font-size: 22px;
        font-weight: 200;
    }

    .search_input::placeholder {
        color: rgba(255, 255, 255, 0.6);
    }

    .search_input:focus-visible {
        outline: none;
        caret-color: #fff;
    }

    .search_button {
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        top: 4px;
        background-color: transparent;
        border: none;
        width: 30px;
        height: 30px;
        cursor: pointer;
    }

    .search_icon {
        color: #fff;
        font-size: 1.15rem;
    }
</style>