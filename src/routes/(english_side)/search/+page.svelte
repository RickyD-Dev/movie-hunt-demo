<div class="search_bar_container">
    <form method="POST" action="?/search" autocomplete="off">
        <input type="text" name="search" id="search" class="search_input" placeholder="Search Titles" required>
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
    }

    form {
        border-bottom: 1px solid #2cbfc9;
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
</style>