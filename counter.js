(() => {
    const $counter = document.querySelector("#js-counter");
    const clickHandler = (e) => {
        const $targetButton = e.currentTarget;
        let currentCount = parseInt($counter.textContent);
        if($targetButton.textContent === "+") {
            $counter.textContent = currentCount + 1;
        } else {
            $counter.textContent = currentCount - 1;
        }
    }

    for(let index = 0; index < document.querySelectorAll(".js-button").length; index++) {
        document.querySelectorAll(".js-button")[index].addEventListener("click", (e) => clickHandler(e))
    }
})();