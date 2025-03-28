(() => {
    const $counter = document.querySelector("#js-counter");
    const clickHandler = () => {
        $counter.textContent = 0;
    };

    document.querySelector("#js-reset-button").addEventListener("click", clickHandler);
})();
