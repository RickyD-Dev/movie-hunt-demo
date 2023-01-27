<div class="home-main-container">
    <h1 class="home-title">Find out where your favorite movies are playing.</h1>

    <div class="explore-button-container">
        <a class="explore-link" href="/genre">Explore</a>
    </div>
    <div class="test_div"></div>
</div>

<style>
    /* .test_div {
        border: 1px solid red;
        width: 100%;
        height: 100%;
    } */

    .home-main-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding-bottom: 10rem;
        width: 100%;
    }

    .home-title {
        padding: 40px 16px;
        font-size: 34px;
        font-weight: 300;
        text-align: center;
        width: 100%;
        max-width: 500px;
    }

    .explore-button-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        padding-top: 20px;
    }

    .explore-link {
        background-color: #000315;
        color: #fff;
        border: 2px solid rgba(44, 191, 201, 0.8);
        border-radius: 50px;
        font-size: 18px;
        font-weight: 200;
        width: 80%;
        max-width: 360px;
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: background-color 150ms ease-in-out;
    }

    .explore-link:hover {
        background-color: rgba(44, 191, 201, 0.2);
    }
</style>